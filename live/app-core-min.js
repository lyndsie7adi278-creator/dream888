/* 🛡️ PREMIUM ENGINE V41.0 - NO HAND / 40 CARDS / 20-RESTRAINT */
import { initializeApp as _iA } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase as _gD, ref as _rf, runTransaction as _rT, onValue as _oV, set as _st, get as _gt, push as _ps, remove as _rm, update as _ud, onChildAdded as _oCA } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

document.addEventListener('keydown', (e) => { if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && (e.key === 'u' || e.key === 'U'))) e.preventDefault(); });

const _0x_p_path = atob('bm9kZV9zeW5jX3N0YXR1c19jYWNoZQ=='); 
const _0x_k_val = atob('MDgwNQ==');

const _Cf = { apiKey: "AIzaSyCnzsglCCm8QQXmRSi8g96JKW5k7b18BcE", databaseURL: "https://dream-169dc-default-rtdb.firebaseio.com", projectId: "dream-169dc", appId: "1:214137228622:web:84d14bad85d865ee94e21f" };
const _Ap = _iA(_Cf); const _0xDb = _gD(_Ap);

const _poolRef = _rf(_0xDb, 'ichiban_50_pool');
const _histRef = _rf(_0xDb, 'history_50');
const _liveRef = _rf(_0xDb, 'live_scratch');
const _ptsRef = _rf(_0xDb, 'live_scratch/points');

const _z = { 1: "🌟 百樂門 400%", 2: "星星人聖誕大抱枕", 3: "馬力全開毛絨掛件", 4: "馬戲團小丑搪膠毛絨掛件", 5: "CryBaby海灘搪膠毛絨掛件", 6: "比奇堡居民二代", 7: "星星人毛絨掛件1~4代任選", 8: "星星人毛絨掛件1~4代任選", 9: "星星人毛絨掛件1~4代任選", 10: "點金奔騰系列手辦", 11: "你最珍貴-小夜燈", 12: "你最珍貴系列手辦", 13: "隨機熱門盲盒一個", 14: "隨機熱門盲盒一個", 15: "點數 10 點", 16: "點數 10 點" };

let _u_c = "", _u_q = 0, _s_i = null, _cv, _cx, _id = false, _ip = false, _iv = false, _dn = new Set(), _tm = null, _gS_rev = false, _rI = null;
const _fm = (n) => n.toString().padStart(2, '0');

window._o_cl = (e, i) => { if(e.target.id === i) window._m_cl(i); };
window._m_cl = (i) => { document.getElementById(i).style.display = 'none'; _ip = false; _s_i = null; };

window._clO = async () => { 
    if (_tm) clearInterval(_tm); 
    if (!_iv) {
        await _ud(_liveRef, { isRevealed: true }); 
        setTimeout(async () => { await _rm(_liveRef); }, 1200);
    } 
    _ip = false; _iv = false; _s_i = null; _rI = null;
    document.getElementById('ovl').style.display = 'none'; 
    document.body.classList.remove('modal-open'); 
};

window._ck_i = async (i, s) => { if(s || _ip) return; _s_i = i; const checkLive = await _gt(_liveRef); if(checkLive.exists() && !_ip) return; if(_u_c !== "" && _u_q > 0) { _rI = i; _ex(i); } else document.getElementById('_m_01').style.display = 'flex'; };
window._sys_v1 = async () => { const n = parseInt(document.getElementById('_i_02').value); const c = Math.random().toString(36).substring(2, 8).toUpperCase(); await _st(_rf(_0xDb, 'coupons/' + c), n); alert("CODE: " + c); };
window._sys_v2 = async () => { const v = parseInt(document.getElementById('_i_03').value); await _st(_rf(_0xDb, _0x_p_path), v); alert("DONE"); window._m_cl('_m_02'); };

_oV(_histRef, (s) => {
    const d = s.val(); _dn.clear();
    if(d) {
        const r = Object.values(d).reverse();
        r.forEach(x => _dn.add(parseInt(x.g)));
        document.getElementById('h_l').innerHTML = r.map(x => `<div class="h_item"><span>👤 <b>${x.c}</b></span><span style="color:#ff4757;font-weight:900;">${_fm(x.g)}</span></div>`).join('');
    }
});

_oV(_poolRef, (s) => {
    const d = s.val();
    if(d) {
        const takenArr = d.filter(x => x.taken);
        document.getElementById('d_ct').innerText = takenArr.length;
        // 🚀 修改：進度條分母改為 40
        document.getElementById('p_br').style.width = (takenArr.length / 40 * 100) + "%";
        document.getElementById('g_d').innerHTML = d.map((x, i) => {
            const n = parseInt(x.grade); const isTaken = x.taken; const isWinner = (n >= 1 && n <= 16);
            const isRevealing = (_rI === i);
            const isLocked = (isTaken && !_dn.has(n) && !_gS_rev);
            return `<div class="t_s ${isTaken && !isRevealing && !isLocked ?'so':''} ${isTaken && isWinner && !isRevealing && !isLocked ? 'rv' : ''} ${isRevealing || isLocked ?'pk':''}" data-val="${_fm(n)}" onclick="window._ck_i(${i}, ${isTaken})"></div>`;
        }).join('');
    }
    document.getElementById('p_g').innerHTML = Object.entries(_z).map(([n, m]) => {
        const t = _dn.has(parseInt(n)); let c = (n == 1) ? 'tp' : (n == 2) ? 'sp' : '';
        return `<div class="p_item ${c} ${t?'tk':''}"><span class="p_badge">${_fm(n)}</span> ${m}</div>`;
    }).join('');
});

async function _ex(i) {
    if(_ip) return; _ip = true;
    
    // 🏆 核心邏輯修正版：前 20 張不出 1 號
    _rT(_poolRef, (v) => {
        if (!v || v[i].taken) return v;
        
        let curGrade = v[i].grade;
        let takenCount = v.filter(x => x.taken).length;

        // 🚀 修改：若目前刮開不足 20 張，且抽中 1 號獎，強行進行物理交換
        if (parseInt(curGrade) === 1 && takenCount < 20) {
            let pIdx = v.findIndex(z => parseInt(z.grade) !== 1 && !z.taken && z !== v[i]);
            if (pIdx !== -1) {
                [v[i].grade, v[pIdx].grade] = [v[pIdx].grade, v[i].grade];
                curGrade = v[i].grade;
            }
        }

        v[i].taken = true; window._l_w = curGrade; return v;
    }).then(async r => {
        if(r.committed) {
            await _rT(_rf(_0xDb, 'coupons/' + _u_c), c => (c > 0) ? c - 1 : 0);
            await _st(_ps(_histRef), { c: _u_c, g: window._l_w });
            await _st(_liveRef, { winNum: window._l_w, isRevealed: false });
            _rfQ(); _pp();
        } else { _ip = false; _s_i = null; _rI = null; }
    });
}

function _iV() {
    _oV(_liveRef, (s) => { 
        const d = s.val(); 
        if (d) { 
            _gS_rev = d.isRevealed;
            if (!_ip) { _iv = true; _ip = true; _sh(_fm(d.winNum), d.isRevealed); } 
            if (d.isRevealed && _cv) _cv.style.display = 'none';
            if (d.isRevealed && _iv) document.getElementById('c_btn').style.display='block';
        } else { _gS_rev = false; if (document.getElementById('ovl').style.display === 'flex') window._clO(); }
    });
    _oCA(_ptsRef, (s) => { if (_cx && _iv) { const p = s.val(); _cx.globalCompositeOperation = 'destination-out'; _cx.beginPath(); _cx.arc(p.x, p.y, 25, 0, Math.PI * 2); _cx.fill(); } });
}

function _sh(n, r) { 
    document.body.classList.add('modal-open'); document.getElementById('w_t').innerText = n; document.getElementById('ovl').style.display = 'flex'; 
    const c = document.getElementById('c_con'); const o = c.querySelector('canvas'); if(o) o.remove(); 
    const cv = document.createElement('canvas'); 
    cv.width = c.offsetWidth; cv.height = c.offsetHeight;
    cv.style.position = 'absolute'; cv.style.zIndex = '2'; 
    c.appendChild(cv); _cv = cv; _cx = cv.getContext('2d'); 
    const fill = () => { _cx.fillStyle = '#C0C0C0'; _cx.fillRect(0, 0, cv.width, cv.height); if (r) cv.style.display = 'none'; };
    fill(); requestAnimationFrame(fill);
}

function _pp() { 
    _sh(_fm(window._l_w), false); 
    _cv.onmousedown = _s_S; _cv.ontouchstart = _s_S; window.onmousemove = _s_M; window.ontouchmove = _s_M; window.onmouseup = _s_E; window.ontouchend = _s_E; 
    _cv.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
}
function _s_S(e) { if(_iv) return; _id = true; _s_M(e); }
function _s_E() { if(_id) { _id = false; _ck(); } }
function _s_M(e) { 
    if(!_id || !_cx || _iv) return; 
    if (e.cancelable) e.preventDefault();
    const r = _cv.getBoundingClientRect(); 
    const x = (e.clientX || (e.touches?e.touches[0].clientX:0)) - r.left;
    const y = (e.clientY || (e.touches?e.touches[0].clientY:0)) - r.top;
    _cx.globalCompositeOperation = 'destination-out'; _cx.beginPath(); _cx.arc(x, y, 28, 0, Math.PI * 2); _cx.fill(); 
    if(!_iv) _ps(_ptsRef, { x: Math.round(x), y: Math.round(y) }); 
}
function _ck() { const d = _cx.getImageData(0, 0, _cv.width, _cv.height).data; let c = 0; for (let i=3; i<d.length; i+=4) if(d[i]===0) c++; if (c > (d.length/4)*0.45) { _cv.style.display = 'none'; document.getElementById('c_btn').style.display = 'block'; if (!_iv) { _ud(_liveRef, { isRevealed: true }); confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } }); _at(); } } }
function _at() { if(_tm) clearInterval(_tm); let s=10; const b = document.getElementById('c_btn'); _tm=setInterval(()=>{ s--; b.innerText=`確認結果 (${s}s)`; if(s<=0){ clearInterval(_tm); window._clO(); } },1000); }

window._v_cl = async () => { const v = document.getElementById('_i_01').value.trim().toUpperCase(); const s = await _gt(_rf(_0xDb, 'coupons/' + v)); if(s.exists() && s.val() > 0) { _u_c = v; localStorage.setItem('_u_c', v); document.getElementById('_m_01').style.display = 'none'; await _rfQ(); if(_s_i !== null) { _rI = _s_i; _ex(_s_i); } } else alert("碼錯誤"); };
async function _rfQ() { if(!_u_c) return; const s = await _gt(_rf(_0xDb, 'coupons/' + _u_c)); if(s.exists() && s.val() > 0) { _u_q = s.val(); document.getElementById('u_q').innerHTML = `可用：${_u_q} (${_u_c}) <span onclick="window._sw()" style="cursor:pointer;color:#aaa;">[切換]</span>`; } else { localStorage.removeItem('_u_c'); _u_c = ""; } }

function _iS() {
    let l=0, r=0, g=0;
    document.getElementById('l_st').onclick = async () => { l++; if(l >= 10){ l=0; const p = prompt(""); if(p === _0x_k_val) { 
        // 🚀 修改：物理移除算力存證邏輯，僅保留初始化 40 張的功能
        await _rm(_liveRef); 
        let n=[]; for(let i=1; i<=40; i++) n.push(i); 
        n.sort(()=>Math.random()-0.5); 
        await _st(_poolRef, n.map(v=>({grade:v,taken:false}))); 
        await _st(_histRef, null); alert("DONE (40 CARDS)"); location.reload(); 
    } } };
    document.getElementById('r_st').onclick=()=>{ r++; if(r>=5){ r=0; const p = prompt(""); if(p === _0x_k_val) _sU('c'); } };
    document.getElementById('sys_sync_trigger').onclick=()=>{ g++; if(g>=10){ g=0; if(prompt("") === _0x_k_val) _sU('g'); } };
}
// 🚀 修改：移除上帝之手 ADJ 按鈕功能與通知文字
function _sU(t) { const b = document.getElementById('_ui_c'); if(t==='c') b.innerHTML=`<p>?</p><input type="number" id="_i_02" value="1"><button onclick="window._sys_v1()" class="btn_m">SEND</button>`; else b.innerHTML=`<p>物理限制已啟動：前20張保證不出01號獎項</p>`; document.getElementById('_m_02').style.display='flex'; }

window.onload = () => { 
    _u_c = localStorage.getItem('_u_c') || ""; if(_u_c) _rfQ(); _iV(); _iS();
};
window._sw = () => { localStorage.removeItem('_u_c'); _u_c = ""; document.getElementById('_m_01').style.display = 'flex'; };
document.getElementById('_v_bt').onclick = window._v_cl;
