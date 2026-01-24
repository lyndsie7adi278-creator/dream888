/* 🛡️ ENGINE V43.0 - ANTI-ELEMENTS INSPECT / 40 CARDS / 20-LIMIT */
import { initializeApp as _iA } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase as _gD, ref as _rf, runTransaction as _rT, onValue as _oV, set as _st, get as _gt, push as _ps, remove as _rm, update as _ud, onChildAdded as _oCA } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const _Cf = { apiKey: "AIzaSyCnzsglCCm8QQXmRSi8g96JKW5k7b18BcE", databaseURL: "https://dream-169dc-default-rtdb.firebaseio.com", projectId: "dream-169dc", appId: "1:214137228622:web:84d14bad85d865ee94e21f" };
const _Ap = _iA(_Cf); const _0xDb = _gD(_Ap);
const _poolRef = _rf(_0xDb, 'ichiban_50_pool');
const _histRef = _rf(_0xDb, 'history_50');
const _liveRef = _rf(_0xDb, 'live_scratch');
const _ptsRef = _rf(_0xDb, 'live_scratch/points');
const _p_key = atob('MDgwNQ=='); 

const _z = { 1: "🌟 百樂門 400%", 2: "星星人聖誕大抱枕", 3: "馬力全開毛絨掛件", 4: "馬戲團小丑搪膠毛絨掛件", 5: "CryBaby海灘搪膠毛絨掛件", 6: "比奇堡居民二代", 7: "星星人毛絨掛件1~4代任選", 8: "星星人毛絨掛件1~4代任選", 9: "星星人毛絨掛件1~4代任選", 10: "點金奔騰系列手辦", 11: "你最珍貴-小夜燈", 12: "你最珍貴系列手辦", 13: "隨機熱門盲盒一個", 14: "隨機熱門盲盒一個", 15: "點數 10 點", 16: "點數 10 點" };

let _u_c = localStorage.getItem('_u_c') || "", _u_q = 0, _s_i = null, _cv, _cx, _id = false, _ip = false, _iv = false, _dn = new Set(), _tm = null, _rI = null, _M_DATA = [];
const _fm = (n) => n.toString().padStart(2, '0');

// 🏆 全域橋接
window._m_cl = (i) => { document.getElementById(i).style.display = 'none'; _ip = false; };
window._clO = async () => { if (_tm) clearInterval(_tm); if (!_iv) { await _ud(_liveRef, { isRevealed: true }); setTimeout(() => _rm(_liveRef), 1200); } _ip = false; _iv = false; _s_i = null; _rI = null; document.getElementById('ovl').style.display = 'none'; document.body.classList.remove('modal-open'); };
window._ck_i_click = (i, s) => { if(s || _ip) return; _s_i = i; if(_u_c !== "" && _u_q > 0) _ex(i); else document.getElementById('_m_01').style.display = 'flex'; };
window._v_cl = async () => { 
    const v = document.getElementById('_i_01').value.trim().toUpperCase(); 
    const s = await _gt(_rf(_0xDb, 'coupons/' + v)); 
    if(s.exists() && s.val() > 0) { _u_c = v; localStorage.setItem('_u_c', v); document.getElementById('_m_01').style.display = 'none'; _rfQ(); if(_s_i !== null) _ex(_s_i); } else alert("ERR"); 
};

async function _ex(i) {
    if(_ip) return; _ip = true;
    const result = await _rT(_poolRef, (v) => {
        if (!v || v[i].taken) return v;
        let cur = v[i].grade; let takenCount = v.filter(x => x.taken).length;
        // 🚀 前 20 張若抽中 1 號，強行物理交換
        if (parseInt(cur) === 1 && takenCount < 20) {
            let p = v.findIndex(z => parseInt(z.grade) !== 1 && !z.taken && z !== v[i]);
            if (p !== -1) { [v[i].grade, v[p].grade] = [v[p].grade, v[i].grade]; cur = v[i].grade; }
        }
        v[i].taken = true; window._l_w = cur; return v;
    });
    if(result.committed) {
        await _rT(_rf(_0xDb, 'coupons/' + _u_c), c => (c > 0) ? c - 1 : 0);
        await _st(_ps(_histRef), { c: _u_c, g: window._l_w });
        await _st(_liveRef, { winNum: window._l_w, isRevealed: false });
        _rfQ(); _pp();
    } else _ip = false;
}

function _sh(n, r) { 
    document.body.classList.add('modal-open'); document.getElementById('ovl').style.display = 'flex'; 
    const c = document.getElementById('c_con'); let cv = c.querySelector('canvas'); 
    if(!cv) { cv = document.createElement('canvas'); cv.style.position = 'absolute'; c.appendChild(cv); }
    cv.width = c.offsetWidth; cv.height = c.offsetHeight;
    _cv = cv; _cx = cv.getContext('2d'); _cx.fillStyle = '#C0C0C0'; _cx.fillRect(0, 0, cv.width, cv.height);
    if (r) cv.style.display = 'none';
    document.getElementById('w_t').innerText = n;
}

function _pp() { 
    _sh(_fm(window._l_w), false); 
    _cv.onmousedown = (e) => { if(_iv) return; _id = true; _s_M(e); }; _cv.ontouchstart = (e) => { if(_iv) return; _id = true; _s_M(e); };
    window.onmousemove = _s_M; window.ontouchmove = _s_M; window.onmouseup = () => { if(_id) { _id = false; _ck(); } }; window.ontouchend = () => { if(_id) { _id = false; _ck(); } };
}

function _s_M(e) { if(!_id || !_cx || _iv) return; if (e.cancelable) e.preventDefault(); const r = _cv.getBoundingClientRect(); const x = (e.clientX || (e.touches?e.touches[0].clientX:0)) - r.left; const y = (e.clientY || (e.touches?e.touches[0].clientY:0)) - r.top; _cx.globalCompositeOperation = 'destination-out'; _cx.beginPath(); _cx.arc(x, y, 28, 0, Math.PI * 2); _cx.fill(); if(!_iv) _ps(_ptsRef, { x: Math.round(x), y: Math.round(y) }); }
function _ck() { 
    const d = _cx.getImageData(0, 0, _cv.width, _cv.height).data; let c = 0; for (let i=3; i<d.length; i+=4) if(d[i]===0) c++; 
    if (c > (d.length/4)*0.45) { 
        _cv.style.display = 'none'; document.getElementById('c_btn').style.display = 'block'; 
        if (!_iv) { 
            _ud(_liveRef, { isRevealed: true }); 
            if (parseInt(window._l_w) <= 16) confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            _at(); 
        } 
    } 
}
function _at() { if(_tm) clearInterval(_tm); let s=10; const b = document.getElementById('c_btn'); _tm=setInterval(()=>{ s--; b.innerText=`確認結果 (${s}s)`; if(s<=0){ clearInterval(_tm); window._clO(); } },1000); }
async function _rfQ() { if(!_u_c) return; const s = await _gt(_rf(_0xDb, 'coupons/' + _u_c)); if(s.exists() && s.val() > 0) { _u_q = s.val(); document.getElementById('u_q').innerHTML = `可用：${_u_q} (${_u_c}) <span onclick="window._sw_c()" style="cursor:pointer;color:#aaa;">[切換]</span>`; } else { localStorage.removeItem('_u_c'); _u_c = ""; document.getElementById('u_q').innerText = "點選格子驗證"; } }
window._sw_c = () => { localStorage.removeItem('_u_c'); _u_c = ""; document.getElementById('_m_01').style.display = 'flex'; };

_oV(_histRef, (s) => { const d = s.val(); _dn.clear(); if(d) { const r = Object.values(d).reverse(); r.forEach(x => _dn.add(parseInt(x.g))); document.getElementById('h_l').innerHTML = r.map(x => `<div class="h_item">👤 <b>${x.c}</b> <span>${_fm(x.g)}</span></div>`).join(''); } });
_oV(_poolRef, (s) => { 
    const d = s.val(); if(d) { 
        _ip = false; _M_DATA = d; // 🏆 秘密存儲
        const takenCount = d.filter(x => x.taken).length;
        document.getElementById('d_ct').innerText = takenCount; document.getElementById('p_br').style.width = (takenCount / 40 * 100) + "%"; 
        // 🏆 物理封鎖：Elements 面板現在只會看到空白的 div，看不到 data-val
        document.getElementById('g_d').innerHTML = d.map((x, i) => { 
            const ni = parseInt(x.grade); const rv = (_rI === i); const lk = (x.taken && !_dn.has(ni)); 
            let cls = `t_s ${x.taken && !rv && !lk ?'so':''} ${x.taken && ni <= 16 && !rv && !lk ? 'rv' : ''} ${rv || lk ?'pk':''}`;
            let displayNum = (x.taken && !rv && !lk) ? _fm(ni) : "";
            return `<div class="${cls}" onclick="window._ck_i_click(${i}, ${x.taken})">${displayNum}</div>`; 
        }).join(''); 
    } 
    document.getElementById('p_g').innerHTML = Object.entries(_z).map(([n, m]) => { 
        const ni = parseInt(n); const taken = _dn.has(ni); let cls = (ni === 1) ? 'tp' : (ni === 2) ? 'sp' : ''; 
        return `<div class="p_item ${cls} ${taken?'tk':''}"><span class="p_badge">${_fm(ni)}</span> ${m}</div>`; 
    }).join(''); 
    _rfQ();
});
_oV(_liveRef, (s) => { const d = s.val(); if (d) { if (document.getElementById('ovl').style.display !== 'flex') { _iv = true; _ip = true; _sh(_fm(d.winNum), d.isRevealed); } if (d.isRevealed && _cv) _cv.style.display = 'none'; if (d.isRevealed) document.getElementById('c_btn').style.display='block'; } else { if (document.getElementById('ovl').style.display === 'flex') window._clO(); } });
_oCA(_ptsRef, (s) => { if (_cx && _iv) { const p = s.val(); _cx.globalCompositeOperation = 'destination-out'; _cx.beginPath(); _cx.arc(p.x, p.y, 25, 0, Math.PI * 2); _cx.fill(); } });

// 管理員
window._l_st_ck = async () => { if(prompt("") === _p_key) { await _rm(_liveRef); let n=[]; for(let i=1;i<=40;i++)n.push(i); n.sort(()=>Math.random()-0.5); await _st(_poolRef, n.map(v=>({grade:v,taken:false}))); await _st(_histRef, null); location.reload(); } };
window._r_st_ck = () => { if(prompt("") === _p_key) _sU('c'); };
function _sU(t) { const b = document.getElementById('_ui_c'); b.innerHTML=`<input type="number" id="_i_02" value="1"><button id="b_sc" class="btn_m">SEND</button>`; document.getElementById('b_sc').onclick=async()=>{ const n=parseInt(document.getElementById('_i_02').value); const c=Math.random().toString(36).substring(2,8).toUpperCase(); await _st(_rf(_0xDb,'coupons/'+c),n); alert(c); window._m_cl('_m_02'); }; document.getElementById('_m_02').style.display='flex'; }
