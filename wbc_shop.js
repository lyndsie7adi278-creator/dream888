import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue, push, runTransaction, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 初始化 Firebase (請確認您的金鑰是否正確)
const _c = { apiKey: atob("QUl6YVN5RFBHRUl3Q0t5WXh6NlRZZHhta3dBeElXamZRSThBd2Nv"), databaseURL: atob("aHR0cHM6Ly9kcmVhbTgtN2IxNjEtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29t"), projectId: atob("ZHJlYW04LTdiMTYx"), appId: atob("MTo2MDYyMTg1MjI0Nzk6d2ViOjI3Mzc2NDNkYjNkZTczNWFmN2UyOWE=") };
const app = initializeApp(_c); 
const db = getDatabase(app);

// 驗證登入
const uid = localStorage.getItem('myScratchCode');
if(!uid) { 
    alert("請先登入！"); 
    location.href = 'index.html'; 
}

// 監聽玩家預測幣餘額
onValue(ref(db, `users/${uid}`), snapshot => {
    const userData = snapshot.val() || {};
    document.getElementById('uWbc').innerText = (userData.wbcCoin || 0).toLocaleString();
});

// 監聽後台上架的商品並動態渲染
onValue(ref(db, `wbcShopItems`), snapshot => {
    const items = snapshot.val() || {};
    const container = document.getElementById('shopContainer');
    container.innerHTML = '';
    let hasItems = false;

    // 將物件轉為陣列，並依價格由低到高排序
    const sortedItems = Object.entries(items)
        .map(([id, data]) => ({ id, ...data }))
        .sort((a, b) => a.price - b.price);

    sortedItems.forEach(item => {
        // 確認商品為上架狀態 (active)
        if(item.active !== false) {
            hasItems = true;
            container.innerHTML += `
                <div class="s-card">
                    <div class="s-img">${item.emoji || '🎁'}</div>
                    <div class="s-info">
                        <div>
                            <div class="s-name">${item.name}</div>
                            <div class="s-desc">${item.desc || ''}</div>
                        </div>
                        <div>
                            <div class="s-price">${item.price.toLocaleString()} 幣</div>
                            <button class="btn-buy" onclick="buyShopItem('${item.name}', ${item.price})">立即兌換</button>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    if(!hasItems) {
        container.innerHTML = '<div style="grid-column: span 2; text-align: center; padding: 50px; color: #64748b;">目前商城休息中，老闆正在補貨！</div>';
    }
});

// ⭐️ 處理購買邏輯 (掛載到 window 以供 HTML 的 onclick 呼叫)
window.buyShopItem = async (itemName, price) => {
    if(!confirm(`即將使用 ${price.toLocaleString()} 預測幣\n兌換商品：【${itemName}】\n\n確定要兌換嗎？`)) return;

    document.getElementById('loading').style.display = 'flex';
    
    try {
        // 1. 安全交易：扣除玩家預測幣
        await runTransaction(ref(db, `users/${uid}`), (user) => {
            if(!user) return;
            if((user.wbcCoin || 0) < price) throw "no_coin";
            user.wbcCoin -= price;
            return user;
        });
        
        // 2. 建立待出貨訂單 (寫入 wbcOrders 讓老闆在後台看)
        await push(ref(db, `wbcOrders`), {
            uid: uid,
            item: itemName,
            cost: price,
            status: 'pending', // 狀態設為待處理
            time: serverTimestamp()
        });

        alert(`🎉 兌換成功！\n您已成功兌換【${itemName}】。\n請截圖此畫面並聯絡官方客服安排寄送！`);
    } catch(error) {
        if(error === "no_coin") {
            alert("❌ 您的預測幣餘額不足！請先前往賽事中心預測贏取獎勵。");
        } else {
            alert("系統錯誤：" + error);
        }
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
};
