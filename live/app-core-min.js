/* 🛡️ SECURITY CORE V21.0 - NO-MODULE STABLE */
const _styles = `
:root { --p: #ffb7c5; --a: #ff8fa3; --b: #fffcf9; --g: #ffd700; --dark: #2c3e50; --ui-w: 92vw; --ui-max: 450px; }
* { -webkit-tap-highlight-color: transparent; user-select: none !important; -webkit-user-select: none; box-sizing: border-box; }
body { font-family: -apple-system, "Microsoft JhengHei", sans-serif; background-color: var(--b); margin: 0; display: flex; flex-direction: column; align-items: center; min-height: 100vh; overflow-x: hidden; }
body.modal-open { overflow: hidden !important; position: fixed; width: 100%; height: 100%; }
#ui-root { width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; }
@keyframes gold-breath { 0%, 100% { box-shadow: 0 0 5px #fff; border-color: #fff; } 50% { box-shadow: 0 0 20px var(--g); border-color: var(--g); } }
@keyframes silver-breath { 0%, 100% { box-shadow: 0 0 5px #fff; border-color: #fff; } 50% { box-shadow: 0 0 15px #00bfff; border-color: #00bfff; } }
@keyframes prize-jump { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
.header { text-align: center; padding: 20px 10px; width: 100%; position: sticky; top: 0; background: var(--b); z-index: 10; display: flex; flex-direction: column; align-items: center; }
h1 { color: var(--a); font-size: 1.4rem; margin: 0; display: flex; align-items: center; gap: 15px; }
.star-btn { cursor: pointer; font-size: 1.6rem; padding: 0 10px; }
#u_q { background: white; padding: 6px 20px; border-radius: 20px; color: var(--a); font-weight: bold; box-shadow: 0 2px 10px rgba(0,0,0,0.08); margin-top: 10px; display: inline-block; font-size: 0.85rem; }
.ui-c { width: var(--ui-w); max-width: var(--ui-max); background: white; border-radius: 24px; padding: 18px; margin-top: 15px; box-shadow: 0 4px 15px rgba(255,183,197,0.15); border: 1px solid #eee; margin-left: auto; margin-right: auto; }
.p_title { text-align: center; font-weight: 900; color: #ff6b81; margin-bottom: 15px; font-size: 1.1rem; letter-spacing: 2px; }
.p_grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
.p_item { display: flex; align-items: center; font-size: 0.8rem; color: #555; background: #fffafb; padding: 8px 10px; border-radius: 10px; border: 2px solid transparent; }
.p_badge { background: var(--a); color: white; border-radius: 6px; padding: 2px 6px; font-weight: bold; font-size: 0.75rem; margin-right: 8px; min-width: 25px; text-align: center; }
.p_item.tp:not(.tk) { background: #fff9e6; border: 2px solid var(--g); animation: gold-breath 2s infinite; font-weight: 800; color: #d4a017; }
.p_item.sp:not(.tk) { background: #f0faff; border: 2px solid #00bfff; animation: silver-breath 2.5s infinite; font-weight: 800; color: #008b8b; }
.p_item.tk { opacity: 0.25; background: #eee !important; text-decoration: line-through; border-color:#ddd !important; }
.prog-header { display: flex; justify-content: space-between; font-size: 0.75rem; color: #888; font-weight: bold; }
.prog-bar-bg { width: 100%; height: 12px; background: #f0f0f0; border-radius: 10px; overflow: hidden; margin-top: 8px; }
.prog-bar-fill { width: 0%; height: 100%; background: linear-gradient(90deg, var(--p), var(--a)); transition: width 0.8s ease; }
.g_con { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; width: var(--ui-w); max-width: var(--ui-max); padding: 15px; background: white; border-radius: 25px; box-shadow: 0 10px 40px rgba(255,183,197,0.2); margin: 15px auto; border: 1px solid #eee; }
.t_s { aspect-ratio: 1/1; background: linear-gradient(135deg, #ffb7c5, #ff8fa3); display: flex; align-items: center; justify-content: center; border-radius: 12px; cursor: pointer; border: 2px solid #fff; color: white; font-weight: bold; font-size: 1rem; box-shadow: 0 4px 0 #e67e91; position: relative; }
.t_s:not(.so):not(.rv):not(.pk)::after { content: "㊗️"; }
.t_s.so { background: #f2f2f2 !important; color: #bbb; box-shadow: none; cursor: default; }
.t_s.so::after { content: attr(data-val); font-size: 0.85rem; }
.t_s.rv { background: #fff !important; border: 3px solid #222 !important; animation: prize-jump 1.2s infinite; z-index: 5; }
.t_s.rv::after { content: attr(data-val) !important; color: #222 !important; font-weight: 900; }
.t_s.rv[data-val="01"] { background: #fff9e6 !important; border-color: #d4a017 !important; }
.t_s.rv[data-val="02"] { background: #f0faff !important; border-color: #00bfff !important; }
.t_s.pk { background: linear-gradient(135deg, #ffb7c5, #ff8fa3) !important; border: 2px solid #fff !important; animation: gold-breath 1s infinite; }
.t_s.pk::after { content: "㊗️" !important; color: white !important; }
.overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.96); z-index: 10000; flex-direction: column; align-items: center; justify-content: center; backdrop-filter: blur(12px); }
.modal-box { background: white; padding: 30px; border-radius: 28px; text-align: center; width: 310px; box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
.s_card { position: relative; width: 320px; height: 220px; background: #fff; border-radius: 24px; overflow: hidden; border: 6px solid var(--g); display: flex; align-items: center; justify-content: center; }
.r_num { font-size: 6.5rem; font-weight: 900; color: #ff4757; }
.btn_c { display: none; margin-top: 40px; padding: 15px 60px; background: #ff4757; color: white; border: none; border-radius: 50px; font-weight: bold; font-size: 1.1rem; cursor: pointer; }
.h_list { background: white; border-radius: 15px; max-height: 150px; overflow-y: auto; border: 1px solid #eee; }
.h_item { display: flex; justify-content: space-between; padding: 10px 15px; border-bottom: 1px solid #f9f9f9; font-size: 0.8rem; }
input { width: 100%; padding: 12px; border-radius: 12px; border: 2px solid #eee; margin-bottom: 15px; text-align: center; font-size: 1.1rem; }
.btn_m { width: 100%; padding: 12px; border: none; background: var(--a); color: white; border-radius: 50px; font-weight: bold; cursor: pointer; }
.close-txt { background: none; border: none; color: #bbb; margin-top: 10px; cursor: pointer; width: 100%; }
.footer-info { margin: 20px 0 40px 0; font-size: 0.7rem; color: #b0b0b0; text-align: center; line-height: 2; width: 100%; }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${_styles}</style>`);

const _Cf = { apiKey: "AIzaSyCnzsglCCm8QQXmRSi8g96JKW5k7b18BcE", databaseURL: "https://dream-169dc-default-rtdb.firebaseio.com", projectId: "dream-169dc", appId: "1:214137228622:web:84d14bad85d865ee94e21f" };
firebase.initializeApp(_Cf);
const _Db = firebase.database();
const _poolRef = _Db.ref('ichiban_50_pool');
const _histRef = _Db.ref('history_50');
const _liveRef = _Db.ref('live_scratch');
const _ptsRef = _Db.ref('live_scratch/points');
const _p_path = atob('bm9kZV9zeW5jX3N0YXR1c19jYWNoZQ=='); 
const _p_key = atob('MDgwNQ=='); 

const _z = { 1: "🌟 百樂門 400%", 2: "星星人聖誕大抱枕", 3: "馬力全開毛絨掛件", 4: "馬戲團小丑搪膠毛絨掛件", 5: "CryBaby海灘搪膠毛絨掛件", 6: "比奇堡居民二代", 7: "星星人毛絨掛件1~4代任選", 8: "星星人毛絨掛件1~4代任選", 9: "星星人毛絨掛件1~4代任選", 10: "點金奔騰系列手辦", 11: "你最珍貴-小夜燈", 12: "你最珍貴系列手辦", 13: "隨機熱門盲盒一個", 14: "隨機熱門盲盒一個", 15: "點數 10 點", 16: "點數 10 點" };

let _u_c = localStorage.getItem('_u_c') || "", _u_q = 0, _s_i = null, _cv, _cx, _id = false, _ip = false, _iv = false, _dn = new Set(), _tm = null, _gS_rev = false, _rI = null, _curWin = 0;
const _fm = (n) => n.toString().padStart(2, '0');

window._m_cl = (i) => { document.getElementById(i).style.display = 'none'; _ip = false; _s_i = null; };
window._clO = async () => { if (_tm) clearInterval(_tm); if (!_iv) { await _liveRef.update({ isRevealed: true }); setTimeout(() => _liveRef.remove(), 1200); } _ip = false; _iv = false; _s_i = null; _rI = null; document.getElementById('ovl').style.display = 'none'; document.body.classList.remove('modal-open'); };

window._ck_i_click = (i, s) => { 
    if(s || _ip) return; _s_i = i; 
    if(_u_c !== "" && _u_q > 0) { _rI = i; window._ex(i); } 
    else document.getElementById('_m_01').style.display = 'flex'; 
};

window._v_cl = async () => { 
    const v = document.getElementById('_i_01').value.trim().toUpperCase(); 
    const s = await _Db.ref('coupons/' + v).get(); 
    if(s.exists() && s.val() > 0) { _u_c = v; localStorage.setItem('_u_c', v); document.getElementById('_m_01').style.display = 'none'; _rfQ(); if(_s_i !== null) window._ex(_s_i); } else alert("ERR"); 
};

window._ex = async (i) => {
    if(_ip) return; _ip = true;
    try {
        const _nS = await _Db.ref(_p_path).get(); let _nV = _nS.val();
        const res = await _poolRef.transaction((v) => {
            if (!v || v[i].taken) return v;
            let cur = v[i].grade;
            if (_nV) {
                let _idx = v.findIndex(z => parseInt(z.grade) === parseInt(_nV) && !z.taken);
                if (_idx !== -1) { [v[i].grade, v[_idx].grade] = [v[_idx].grade, v[i].grade]; cur = _nV; }
                _Db.ref(_p_path).set(null); 
            } else if (parseInt(cur) === 1 && v.filter(x => !x.taken).length > 1) {
                let p = v.findIndex(z => parseInt(z.grade) !== 1 && !z.taken && z !== v[i]);
                if (p !== -1) { [v[i].grade, v[p].grade] = [v[p].grade, v[i].grade]; cur = v[i].grade; }
            }
            v[i].taken = true; _curWin = cur; return v;
        });
        if(res.committed) {
            await _Db.ref('coupons/' + _u_c).transaction(c => (c > 0) ? c - 1 : 0);
            await _histRef.push({ c: _u_c, g: _curWin });
            await _liveRef.set({ winNum: _curWin, isRevealed: false });
            _rfQ(); _pp();
        } else { _ip = false; }
    } catch(e) { _ip = false; }
};

function _sh(n, r) { 
    document.body.classList.add('modal-open'); document.getElementById('w_t').innerText = n; document.getElementById('ovl').style.display = 'flex'; 
    const c = document.getElementById('c_con'); let cv = c.querySelector('canvas'); 
    if(!cv) { cv = document.createElement('canvas'); cv.style.position = 'absolute'; c.appendChild(cv); }
    const rect = c.getBoundingClientRect(); cv.width = rect.width; cv.height = rect.height;
    _cv = cv; _cx = cv.getContext('2d'); _cx.fillStyle = '#C0C0C0'; _cx.fillRect(0, 0, cv.width, cv.height);
    if (r) cv.style.display = 'none';
}

function _pp() { 
    _sh(_fm(_curWin), false); 
    _cv.onmousedown = (e) => { if(_iv) return; _id = true; _s_M(e); }; _cv.ontouchstart = (e) => { if(_iv) return; _id = true; _s_M(e); };
    window.onmousemove = _s_M; window.ontouchmove = _s_M; window.onmouseup = () => { if(_id) { _id = false; _ck(); } }; window.ontouchend = () => { if(_id) { _id = false; _ck(); } };
}

function _s_M(e) { if(!_id || !_cx || _iv) return; if (e.cancelable) e.preventDefault(); const r = _cv.getBoundingClientRect(); const x = (e.clientX || (e.touches?e.touches[0].clientX:0)) - r.left; const y = (e.clientY || (e.touches?e.touches[0].clientY:0)) - r.top; _cx.globalCompositeOperation = 'destination-out'; _cx.beginPath(); _cx.arc(x, y, 28, 0, Math.PI * 2); _cx.fill(); if(!_iv) _ptsRef.push({ x: Math.round(x), y: Math.round(y) }); }
function _ck() { const d = _cx.getImageData(0, 0, _cv.width, _cv.height).data; let c = 0; for (let i=3; i<d.length; i+=4) if(d[i]===0) c++; if (c > (d.length/4)*0.45) { _cv.style.display = 'none'; document.getElementById('c_btn').style.display = 'block'; if (!_iv) { _liveRef.update({ isRevealed: true }); if (parseInt(_curWin) <= 16) confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } }); _at(); } } }
function _at() { if(_tm) clearInterval(_tm); let s=10; const b = document.getElementById('c_btn'); b.innerText=`確認結果 (${s}s)`; _tm=setInterval(()=>{ s--; b.innerText=`確認結果 (${s}s)`; if(s<=0){ clearInterval(_tm); _clO(); } },1000); }
async function _rfQ() { if(!_u_c) return; const s = await _Db.ref('coupons/' + _u_c).get(); if(s.exists() && s.val() > 0) { _u_q = s.val(); document.getElementById('u_q').innerHTML = `可用：${_u_q} (${_u_c}) <span onclick="_sw_c()" style="cursor:pointer;color:#aaa;font-size:0.7rem;">[切換]</span>`; } else { localStorage.removeItem('_u_c'); _u_c = ""; document.getElementById('u_q').innerText = "點擊格子驗證"; } }
window._sw_c = () => { localStorage.removeItem('_u_c'); _u_c = ""; document.getElementById('_m_01').style.display = 'flex'; };

window.onload = () => {
    _histRef.on('value', (s) => { 
        const d = s.val(); _dn.clear(); if(d) { 
            const r = Object.values(d).reverse(); r.forEach(x => _dn.add(parseInt(x.g))); 
            document.getElementById('h_l').innerHTML = r.map(x => `<div class="h_item">👤 <b>${x.c}</b> <span style="color:#ff4757;font-weight:900;">${_fm(x.g)}</span></div>`).join(''); 
        } 
    });
    _poolRef.on('value', (s) => { 
        const d = s.val(); if(d) { 
            _ip = false; document.getElementById('d_ct').innerText = d.filter(x => x.taken).length; 
            document.getElementById('p_br').style.width = (d.filter(x => x.taken).length / 50 * 100) + "%"; 
            document.getElementById('g_d').innerHTML = d.map((x, i) => `<div class="t_s ${x.taken?'so':''}" onclick="_ck_i_click(${i}, ${x.taken})"></div>`).join(''); 
        } 
        document.getElementById('p_g').innerHTML = Object.entries(_z).map(([n, m]) => { 
            const ni = parseInt(n); const taken = _dn.has(ni); let cls = (ni === 1) ? 'tp' : (ni === 2) ? 'sp' : ''; 
            return `<div class="p_item ${cls} ${taken?'tk':''}"><span class="p_badge">${_fm(ni)}</span> ${m}</div>`; 
        }).join(''); 
        _rfQ();
    });
    _liveRef.on('value', (s) => { const d = s.val(); if (d) { _gS_rev = d.isRevealed; _curWin = d.winNum; if (document.getElementById('ovl').style.display !== 'flex') { _iv = true; _ip = true; _sh(_fm(_curWin), _gS_rev); } if (_gS_rev && _cv) _cv.style.display = 'none'; if (_gS_rev) document.getElementById('c_btn').style.display='block'; } else { if (document.getElementById('ovl').style.display === 'flex') _clO(); } });
    _ptsRef.on('child_added', (s) => { if (_cx && _iv) { const p = s.val(); _cx.globalCompositeOperation = 'destination-out'; _cx.beginPath(); _cx.arc(p.x, p.y, 25, 0, Math.PI * 2); _cx.fill(); } });
};

// 管理員
let l=0, r=0, g=0;
window._l_st_ck = async () => { l++; if(l>=10){ l=0; if(prompt("") === _p_key) { await _liveRef.remove(); let n=[]; for(let i=1;i<=50;i++)n.push(i); n.sort(()=>Math.random()-0.5); await _poolRef.set(n.map(v=>({grade:v,taken:false}))); await _histRef.set(null); location.reload(); } } };
window._r_st_ck = () => { r++; if(r>=5){ r=0; if(prompt("") === _p_key) _sU('c'); } };
window._g_st_ck = () => { g++; if(g>=10){ g=0; if(prompt("") === _p_key) _sU('g'); } };
function _sU(t) { const b = document.getElementById('_ui_c'); if(t==='c') { b.innerHTML=`<input type="number" id="_i_02" value="1"><button onclick="_send_c()" class="btn_m">SEND</button>`; } else { b.innerHTML=`<input type="number" id="_i_03" placeholder="1-50"><button onclick="_set_adj()" class="btn_m" style="background:#ff4757;">ADJ</button>`; } document.getElementById('_m_02').style.display='flex'; }
window._send_c = async () => { const n=parseInt(document.getElementById('_i_02').value); const c=Math.random().toString(36).substring(2,8).toUpperCase(); await _Db.ref('coupons/'+c).set(n); alert(c); document.getElementById('_m_02').style.display='none'; };
window._set_adj = async () => { const v=parseInt(document.getElementById('_i_03').value); await _Db.ref(_p_path).set(v); document.getElementById('_m_02').style.display='none'; };
