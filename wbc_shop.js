import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue, push, runTransaction, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const _c = { apiKey: atob("QUl6YVN5RFBHRUl3Q0t5WXh6NlRZZHhta3dBeElXamZRSThBd2Nv"), databaseURL: atob("aHR0cHM6Ly9kcmVhbTgtN2IxNjEtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29t"), projectId: atob("ZHJlYW04LTdiMTYx"), appId: atob("MTo2MDYyMTg1MjI0Nzk6d2ViOjI3Mzc2NDNkYjNkZTczNWFmN2UyOWE=") };
const app = initializeApp(_c); 
const db = getDatabase(app);

const uid = localStorage.getItem('myScratchCode');
if(!uid) { 
    alert("請先登入！"); 
    location.href = 'index.html'; 
}

// 1. 監聽預測幣餘額
onValue(ref(db, `users/${uid}`), snapshot => {
    const userData = snapshot.val() || {};
    document.getElementById('uWbc').innerText = (userData.wbcCoin || 0).toLocaleString();
});

// 2. ⭐️ 監聽上架商品 (支援圖片網址)
onValue(ref(db, `wbcShopItems`), snapshot => {
    const items = snapshot.val() || {};
    const container = document.getElementById('shopContainer');
    container.innerHTML = '';
    let hasItems = false;

    const sortedItems = Object.entries(items)
        .map(([id, data]) => ({ id, ...data }))
        .sort((a, b) => a.price - b.price);

    sortedItems.forEach(item => {
        if(item.active !== false) {
            hasItems = true;
            // 判斷：如果有 imgUrl 就設為背景圖，否則顯示預設文字或舊版 emoji
            const imgStyle = item.imgUrl 
                ? `background-image: url('${item.imgUrl}');` 
                : ``;
            const innerContent = item.imgUrl ? '' : (item.emoji || '🎁');

            container.innerHTML += `
                <div class="s-card">
                    <div class="s-img" style="${imgStyle}">${innerContent}</div>
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

// 3. 執行兌換購買
window.buyShopItem = async (itemName, price) => {
    if(!confirm(`即將使用 ${price.toLocaleString()} 預測幣\n兌換商品：【${itemName}】\n\n確定要兌換嗎？`)) return;
    document.getElementById('loading').style.display = 'flex';
    try {
        await runTransaction(ref(db, `users/${uid}`), (user) => {
            if(!user) return;
            if((user.wbcCoin || 0) < price) throw "no_coin";
            user.wbcCoin -= price;
            return user;
        });
        
        await push(ref(db, `wbcOrders`), {
            uid: uid,
            item: itemName,
            cost: price,
            status: 'pending', 
            time: serverTimestamp()
        });

        alert(`🎉 兌換成功！\n您已成功兌換【${itemName}】。\n請至右上角「紀錄」查看出貨狀態！`);
    } catch(error) {
        if(error === "no_coin") alert("❌ 您的預測幣餘額不足！請先前往賽事中心預測贏取獎勵。");
        else alert("系統錯誤：" + error);
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
};

// 4. 兌換紀錄功能
window.openHistory = () => {
    document.getElementById('historyModal').style.display = 'flex';
    onValue(ref(db, `wbcOrders`), snapshot => {
        const allOrders = snapshot.val() || {};
        const listEl = document.getElementById('historyList');
        listEl.innerHTML = '';
        
        const myOrders = Object.values(allOrders)
            .filter(o => o.uid === uid)
            .sort((a, b) => b.time - a.time);

        if(myOrders.length === 0) {
            listEl.innerHTML = '<div style="text-align:center; color:#64748b; padding:20px;">尚無兌換紀錄</div>';
            return;
        }

        myOrders.forEach(o => {
            const d = new Date(o.time);
            const timeStr = `${d.getMonth()+1}/${d.getDate()} ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
            
            const isCompleted = (o.status === 'completed');
            const statusText = isCompleted ? '✅ 已出貨(完成)' : '⏳ 待出貨(處理中)';
            const statusColor = isCompleted ? '#10b981' : '#f59e0b';

            listEl.innerHTML += `
                <div class="record-item">
                    <div style="font-size:0.8rem; color:#94a3b8; display:flex; justify-content:space-between; margin-bottom:5px;">
                        <span>${timeStr}</span>
                        <span style="color:${statusColor}; font-weight:bold;">${statusText}</span>
                    </div>
                    <div style="color:#fff; font-weight:bold; font-size:1rem;">${o.item}</div>
                    <div style="color:#818cf8; font-size:0.85rem; margin-top:5px;">消耗: ${o.cost.toLocaleString()} 預測幣</div>
                </div>
            `;
        });
    });
};

window.closeHistory = () => {
    document.getElementById('historyModal').style.display = 'none';
};
