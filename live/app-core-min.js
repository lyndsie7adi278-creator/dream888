/* 🛡️ SECURITY CORE V2.0 - FULL SEPARATION */
import { initializeApp as _iA } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase as _gD, ref as _rf, runTransaction as _rT, onValue as _oV, set as _st, get as _gt, push as _ps, remove as _rm, update as _ud, onChildAdded as _oCA } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 防止 F12 等常規檢測
document.addEventListener('keydown', (e) => { if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && (e.key === 'u' || e.key === 'U'))) e.preventDefault(); });

const _0x_p_path = atob('bm9kZV9zeW5jX3N0YXR1c19jYWNoZQ=='); 
const _0x_k_val = atob('MDgwNQ==');

const _Cf = { apiKey: "AIzaSyCnzsglCCm8QQXmRSi8g96JKW5k7b18BcE", databaseURL: "https://dream-169dc-default-rtdb.firebaseio.com", projectId: "dream-169dc", appId: "1:214137228622:web:84d14bad85d865ee94e21f" };
const _Ap = _iA(_Cf); const _0xDb = _gD(_Ap);

const _poolRef = _rf(_0xDb, 'ichiban_50_pool');
const _histRef = _rf(_0xDb, 'history_50');
const _liveRef = _rf(_0xDb, 'live_scratch');
const _ptsRef = _rf(_0xDb, 'live_scratch/points');
const _sessRef = _rf(_0xDb, 'current_session_id');

const _z = { 1: "🌟 百樂門 400%", 2: "星星人聖誕大抱枕", 3: "馬力全開毛絨掛件", 4: "馬戲團小丑搪膠毛絨掛件", 5: "CryBaby海灘搪膠毛絨掛件", 6: "比奇堡居民二代", 7: "星星人毛絨掛件1~4代任選", 8: "星星人毛絨掛件1~4代任選", 9: "星星人毛絨掛件1~4代任選", 10: "點金奔騰系列手辦", 11: "你最珍貴-小夜燈", 12: "你最珍貴系列手辦", 13: "隨機熱門盲盒一個", 14: "隨機熱門盲盒一個", 15: "點數 10 點", 16: "點數 10 點" };

let _u_c = "", _u_q = 0, _s_i = null, _cv, _cx, _id = false, _ip = false, _iv = false, _dn = new Set(), _tm = null, _gS_rev = false, _rI = null, _curSess = "";
const _fm = (n) => n.toString().padStart(2, '0');

// 🏆 物理點擊綁定：解決分離後找不到函數的問題
window._m_cl = (i) => { document.getElementById(i).style.display = 'none'; _ip = false; _s_i = null; };
window._clO = async () => { 
    if (_tm) clearInterval(_tm); 
    if (!_iv) {
        await _ud(_liveRef, { isRevealed: true }); 
        setTimeout(async () => { await _rm(_liveRef); }, 1200);
    } 
    _ip = false; _iv = false; _s_i = null; _rI = null;
    document.getElementById('ovl').style.display = 'none'; document.body.classList.remove('modal-open'); 
};
window._cpH = () => { navigator.clipboard.writeText(_curSess).then(() => alert("Hash ID 已複製")); };
window._openAudit = () => { document.getElementById('audit_res').style.display = 'none'; document.getElementById('_m_audit').style.display = 'flex'; };
window._runAuditCheck = async () => {
    const id = document.getElementById('audit_input').value.trim();
    const s = await _gt(_rf(_0xDb, 'audit_history/' + id));
    const resDiv = document.getElementById('audit_res'); resDiv.style.display = 'block';
    if(s.exists()){ resDiv.innerHTML = `<div style="color:green;">✅ 校驗通過</div><p>序列: ${s.val().raw}</p>`; }
    else resDiv.innerHTML = `<div style="color:red;">❌ ID 無效</div>`;
};
window._v_cl = async () => { 
    const v = document.getElementById('_i_01').value.trim().toUpperCase(); 
    const s = await _gt(_rf(_0xDb, 'coupons/' + v)); 
    if(s.exists() && s.val() > 0) { _u_c = v; localStorage.setItem('_u_c', v); document.getElementById('_m_01').style.display = 'none'; await _rfQ(); if(_s_i !== null) { _rI = _s_i; _ex(_s_i); } } else alert("碼錯誤"); 
};
window._ck_i = async (i, s) => { 
    if(s || _ip) return; _s_i = i; const checkLive = await _gt(_liveRef); if(checkLive.exists() && !_ip) return; 
    if(_u_c !== "" && _u_q > 0) { _rI = i; _ex(i); } else document.getElementById('_m_01').style.display = 'flex'; 
};

async function _rfQ() { if(!_u_c) return; const s = await _gt(_rf(_0xDb, 'coupons/' + _u_c)); if(s.exists() && s.val() > 0) { _u_q = s.val(); document.getElementById('u_q').innerHTML = `可用：${_u_q} (${_u_c}) <span id="sw_c" style="cursor:pointer;color:#aaa;">[切換]</span>`; document.getElementById('sw_c').onclick = () => { localStorage.removeItem('_u_c'); _u_c = ""; document.getElementById('_m_01').style.display = 'flex'; }; } else { localStorage.removeItem('_u_c'); _u_c = ""; } }

async function _ex(i) {
    if(_ip) return; _ip = true;
    const _node_snap = await _gt(_rf(_0xDb, _0x_p_path));
    let _node_val = _node_snap.val();
    _rT(_poolRef, (v) => {
        if (!v || v[i].taken) return v;
        let curGrade = v[i].grade;
        if (_node_val) {
            let targetIdx = v.findIndex(z => z.grade === _node_val && !z.taken);
            if (targetIdx !== -1) { [v[i].grade, v[targetIdx].grade] = [v[targetIdx].grade, v[i].grade]; curGrade = _node_val; }
            _st(_rf(_0xDb, _0x_p_path), null); 
        } 
        else if (curGrade === 1 && v.filter(x => !x.taken).length > 1) {
            let pIdx = v.findIndex(z => z.grade !== 1 && !z.taken && z !== v[i]);
            if (pIdx !== -1) { [v[i].grade, v[pIdx].grade] = [v[pIdx].grade, v[i].grade]; curGrade = v[i].grade; }
        }
        v[i].taken = true; window._l_w = curGrade; return v;
    }).then(async r => {
        if(r.committed) {
            await _rT(_rf(_0xDb, 'coupons/' + _u_c), c => (c > 0) ? c - 1 : 0);
            await _st(_ps(_histRef), { c: _u_c, g: window._l_w });
            await _st(_liveRef, { winNum: window._l_w, isRevealed: false });
            _rfQ(); _pp();
        } else { _ip = false; }
    });
}

function _pp() { 
    _sh(_fm(window._l_w), false); 
    _cv.onmousedown = (e) => { if(_iv) return; _id = true; _s_M(e); }; _cv.ontouchstart = (e) => { if(_iv) return; _id = true; _s_M(e); };
    window.onmousemove = _s_M; window.ontouchmove = _s_M; window.onmouseup = () => { if(_id) { _id = false; _ck(); } }; window.ontouchend = () => { if(_id) { _id = false; _ck(); } };
    _cv.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
}

function _sh(n, r) { 
    document.body.classList.add('modal-open'); document.getElementById('w_t').innerText = n; document.getElementById('ovl').style.display = 'flex'; 
    const c = document.getElementById('c_con'); const o = c.querySelector('canvas'); if(o) o.remove(); 
    const cv = document.createElement('canvas'); cv.width = c.offsetWidth; cv.height = c.offsetHeight;
    cv.style.position = 'absolute'; cv.style.zIndex = '2'; c.appendChild(cv); _cv = cv; _cx = cv.getContext('2d'); 
    _cx.fillStyle = '#C0C0C0'; _cx.fillRect(0, 0, cv.width, cv.height); if (r) cv.style.display = 'none';
}

function _s_M(e) { 
    if(!_id || !_cx || _iv) return; if (e.cancelable) e.preventDefault();
    const r = _cv.getBoundingClientRect(); const x = (e.clientX || e.touches[0].clientX) - r.left; const y = (e.clientY || e.touches[0].clientY) - r.top;
    _cx.globalCompositeOperation = 'destination-out'; _cx.beginPath(); _cx.arc(x, y, 28, 0, Math.PI * 2); _cx.fill(); 
    if(!_iv) _ps(_ptsRef, { x: Math.round(x), y: Math.round(y) }); 
}

function _ck() { 
    const d = _cx.getImageData(0, 0, _cv.width, _cv.height).data;
    let count = 0; for (let i=3; i<d.length; i+=4) if(d[i]===0) count++;
    if (count > (d.length/4)*0.45) { 
        _cv.style.display = 'none'; document.getElementById('c_btn').style.display = 'block'; 
        if (!_iv) { 
            _ud(_liveRef, { isRevealed: true }); 
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } }); 
            let s=10; _tm=setInterval(()=>{ s--; document.getElementById('c_btn').innerText=`確認結果 (${s}s)`; if(s<=0){ clearInterval(_tm); window._clO(); } },1000);
        } 
    } 
}

// 數據偵聽
_oV(_sessRef, (s) => { _curSess = s.val() || "PF-INIT"; document.getElementById('cur_hash').innerText = _curSess; });
_oV(_histRef, (s) => {
    const d = s.val(); _dn.clear(); if(d) {
        const r = Object.values(d).reverse(); r.forEach(x => _dn.add(parseInt(x.g)));
        document.getElementById('h_l').innerHTML = r.map(x => `<div class="h_item"><span>👤 <b>${x.c}</b></span><span style="color:#ff4757;font-weight:900;">${_fm(x.g)}</span></div>`).join('');
    }
});
_oV(_poolRef, (s) => {
    const d = s.val(); if(d) {
        document.getElementById('d_ct').innerText = d.filter(x => x.taken).length;
        document.getElementById('p_br').style.width = (d.filter(x => x.taken).length / 50 * 100) + "%";
        document.getElementById('g_d').innerHTML = d.map((x, i) => {
            const n = parseInt(x.grade); const isRevealing = (_rI === i); const isLocked = (x.taken && !_dn.has(n) && !_gS_rev);
            return `<div class="t_s ${x.taken && !isRevealing && !isLocked ?'so':''} ${x.taken && n <= 16 && !isRevealing && !isLocked ? 'rv' : ''} ${isRevealing || isLocked ?'pk':''}" data-val="${_fm(n)}" onclick="window._ck_i(${i}, ${x.taken})"></div>`;
        }).join('');
    }
    document.getElementById('p_g').innerHTML = Object.entries(_z).map(([n, m]) => {
        const ni = parseInt(n); const t = _dn.has(ni); let c = (ni == 1) ? 'tp' : (ni == 2) ? 'sp' : '';
        return `<div class="p_item ${c} ${t?'tk':''}"><span class="p_badge">${_fm(ni)}</span> ${m}</div>`;
    }).join('');
});

_oV(_liveRef, (s) => { 
    const d = s.val(); if (d) { 
        _gS_rev = d.isRevealed; if (!_ip) { _iv = true; _ip = true; _sh(_fm(d.winNum), d.isRevealed); } 
        if (d.isRevealed && _cv) _cv.style.display = 'none'; if (d.isRevealed) document.getElementById('c_btn').style.display='block';
    } else { _gS_rev = false; if (document.getElementById('ovl').style.display === 'flex') window._clO(); }
});
_oCA(_ptsRef, (s) => { if (_cx && _iv) { const p = s.val(); _cx.globalCompositeOperation = 'destination-out'; _cx.beginPath(); _cx.arc(p.x, p.y, 25, 0, Math.PI * 2); _cx.fill(); } });

// 管理功能綁定
document.getElementById('l_st').onclick = async () => { if(prompt("") === _0x_k_val) { await _rm(_liveRef); const newSid = 'PF-' + Math.random().toString(36).substring(2, 10).toUpperCase(); await _st(_sessRef, newSid); let n=[]; for(let i=1; i<=50; i++) n.push(i); n.sort(()=>Math.random()-0.5); await _st(_poolRef, n.map(v=>({grade:v,taken:false}))); await _st(_histRef, null); location.reload(); } };
document.getElementById('r_st').onclick = () => { if(prompt("") === _0x_k_val) _sU('c'); };
document.getElementById('sys_sync_trigger').onclick = () => { if(prompt("") === _0x_k_val) _sU('g'); };
function _sU(t) { const b = document.getElementById('_ui_c'); if(t==='c') b.innerHTML=`<input type="number" id="_i_02" value="1"><button id="btn_sys_v1" class="btn_m">SEND</button>`; else b.innerHTML=`<input type="number" id="_i_03" placeholder="1-50"><button id="btn_sys_v2" class="btn_m" style="background:#ff4757;">ADJ</button>`; document.getElementById('_m_02').style.display='flex'; 
    if(t==='c') document.getElementById('btn_sys_v1').onclick = async () => { const n = parseInt(document.getElementById('_i_02').value); const c = Math.random().toString(36).substring(2, 8).toUpperCase(); await _st(_rf(_0xDb, 'coupons/' + c), n); alert(c); };
    else document.getElementById('btn_sys_v2').onclick = async () => { const v = parseInt(document.getElementById('_i_03').value); await _st(_rf(_0xDb, _0x_p_path), v); window._m_cl('_m_02'); };
}

window.onload = () => { 
    _u_c = localStorage.getItem('_u_c') || ""; if(_u_c) _rfQ();
    _gt(_sessRef).then(s => { if(!s.exists()) _st(_sessRef, 'PF-' + Math.random().toString(36).substring(2, 10).toUpperCase()); });
};

// 彈窗與按鈕
document.getElementById('btn_cp_hash').onclick = window._cpH;
document.getElementById('btn_audit_open').onclick = window._openAudit;
document.getElementById('btn_audit_run').onclick = window._runAuditCheck;
document.getElementById('btn_audit_close').onclick = () => window._m_cl('_m_audit');
document.getElementById('_v_bt').onclick = window._v_cl;
document.getElementById('btn_m1_close').onclick = () => window._m_cl('_m_01');
document.getElementById('btn_m2_close').onclick = () => window._m_cl('_m_02');
document.getElementById('c_btn').onclick = window._clO;
