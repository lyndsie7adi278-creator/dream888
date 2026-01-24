/* 🛡️ ENGINE V42.0 - ENCRYPTED & RESTRAINED */
import { initializeApp as _0x1 } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase as _0x2, ref as _0x3, runTransaction as _0x4, onValue as _0x5, set as _0x6, get as _0x7, push as _0x8, remove as _0x9, update as _0xa, onChildAdded as _0xb } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Anti-Inspection
document.addEventListener('keydown', (e) => { if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && (e.key === 'u' || e.key === 'U'))) e.preventDefault(); });

const _0xc = { k1: "AIzaSyCnzsglCCm8QQXmRSi8g96JKW5k7b18BcE", k2: "https://dream-169dc-default-rtdb.firebaseio.com", k3: "dream-169dc", k4: "1:214137228622:web:84d14bad85d865ee94e21f" };
const _0xd = _0x1({ apiKey: _0xc.k1, databaseURL: _0xc.k2, projectId: _0xc.k3, appId: _0xc.k4 });
const _0xe = _0x2(_0xd);
const _0xf = _0x3(_0xe, 'ichiban_50_pool');
const _0x10 = _0x3(_0xe, 'history_50');
const _0x11 = _0x3(_0xe, 'live_scratch');
const _0x12 = _0x3(_0xe, 'live_scratch/points');

const _0x13 = { 1: "\uD83C\uDF1F \u767E\u6A02\u9580 400%", 2: "\u661F\u661F\u4EBA\u8056\u8A95\u5927\u62B1\u6795", 3: "\u99AC\u529B\u5168\u958B\u6B0B\u7D68\u639B\u4EF6", 4: "\u99AC\u6232\u5718\u5C0F\u4E11\u642A\u81A0\u6B0B\u7D68\u639B\u4EF6", 5: "CryBaby\u6D77\u8056\u642A\u81A0\u6B0B\u7D68\u639B\u4EF6", 6: "\u6BD4\u5947\u5821\u5C45\u6C11\u4E8C\u4EE3", 7: "\u661F\u661F\u4EBA\u6B0B\u7D68\u639B\u4EF61~4\u4EE3\u4EFB\u9078", 8: "\u661F\u661F\u4EBA\u6B0B\u7D68\u639B\u4EF61~4\u4EE3\u4EFB\u9078", 9: "\u661F\u661F\u4EBA\u6B0B\u7D68\u639B\u4EF61~4\u4EE3\u4EFB\u9078", 10: "\u9EDE\u9111\u5954\u9A30\u7CFB\u5217\u624B\u8FA6", 11: "\u4F60\u6700\u73CD\u8CB4-\u5C0F\u591C\u71C8", 12: "\u4F60\u6700\u73CD\u8CB4\u7CFB\u5217\u624B\u8FA6", 13: "\u96A8\u6A5F\u71B1\u9580\u76F2\u76D2\u4E00\u500B", 14: "\u96A8\u6A5F\u71B1\u9580\u76F2\u76D2\u4E00\u500B", 15: "\u9EDE\u6578 10 \u9EDE", 16: "\u9EDE\u6578 10 \u9EDE" };

let _0x14 = localStorage.getItem('_u_c') || "", _0x15 = 0, _0x16 = null, _0x17, _0x18, _0x19 = false, _0x1a = true, _0x1b = false, _0x1c = new Set(), _0x1d = null, _0x1e = false, _0x1f = null;
const _0x20 = (n) => n.toString().padStart(2, '0');

window._ck_i = (i, s) => { if(s || _0x1a) return; _0x16 = i; if(_0x14 !== "" && _0x15 > 0) { _0x1f = i; _0x21(i); } else document.getElementById('_m_01').style.display = 'flex'; };
window._clO = async () => { if (_0x1d) clearInterval(_0x1d); if (!_0x1b) { await _0xa(_0x11, { isRevealed: true }); setTimeout(() => _0x9(_0x11), 1200); } _0x1a = false; _0x1b = false; _0x16 = null; _0x1f = null; document.getElementById('ovl').style.display = 'none'; document.body.classList.remove('modal-open'); };
window._v_cl = async () => { const v = document.getElementById('_i_01').value.trim().toUpperCase(); const s = await _0x7(_0x3(_0xe, 'coupons/' + v)); if(s.exists() && s.val() > 0) { _0x14 = v; localStorage.setItem('_u_c', v); document.getElementById('_m_01').style.display = 'none'; await _0x22(); if(_0x16 !== null) _0x21(_0x16); } else alert("\u78BC\u932F\u8AA4"); };
window._m_cl = (i) => { document.getElementById(i).style.display = 'none'; _0x1a = false; };

async function _0x21(i) {
    if(_0x1a) return; _0x1a = true;
    _0x4(_0xf, (v) => {
        if (!v || v[i].taken) return v;
        let _0x23 = v[i].grade;
        let _0x24 = v.filter(x => x.taken).length;
        // 🔒 Logic: First 20 Restriction
        if (parseInt(_0x23) === 1 && _0x24 < 20) {
            let _0x25 = v.findIndex(z => parseInt(z.grade) !== 1 && !z.taken && z !== v[i]);
            if (_0x25 !== -1) { [v[i].grade, v[_0x25].grade] = [v[_0x25].grade, v[i].grade]; _0x23 = v[i].grade; }
        }
        v[i].taken = true; window._l_w = _0x23; return v;
    }).then(async r => {
        if(r.committed) {
            await _0x4(_0x3(_0xe, 'coupons/' + _0x14), c => (c > 0) ? c - 1 : 0);
            await _0x6(_0x8(_0x10), { c: _0x14, g: window._l_w });
            await _0x6(_0x11, { winNum: window._l_w, isRevealed: false });
            _0x22(); _0x26();
        } else _0x1a = false;
    });
}

function _0x27(n, r) { 
    document.body.classList.add('modal-open'); document.getElementById('ovl').style.display = 'flex'; 
    const c = document.getElementById('c_con'); const o = c.querySelector('canvas'); if(o) o.remove(); 
    const cv = document.createElement('canvas'); cv.width = c.offsetWidth; cv.height = c.offsetHeight;
    cv.style.position = 'absolute'; cv.style.zIndex = '2'; c.appendChild(cv); _0x17 = cv; _0x18 = cv.getContext('2d'); 
    _0x18.fillStyle = '#C0C0C0'; _0x18.fillRect(0, 0, cv.width, cv.height); if (r) cv.style.display = 'none';
    document.getElementById('w_t').innerText = n;
}

function _0x26() { 
    _0x27(_0x20(window._l_w), false); 
    _0x17.onmousedown = (e) => { if(_0x1b) return; _0x19 = true; _0x28(e); }; _0x17.ontouchstart = (e) => { if(_0x1b) return; _0x19 = true; _0x28(e); };
    window.onmousemove = _0x28; window.ontouchmove = _0x28; window.onmouseup = () => { if(_0x19) { _0x19 = false; _0x29(); } }; window.ontouchend = () => { if(_0x19) { _0x19 = false; _0x29(); } };
}

function _0x28(e) { if(!_0x19 || !_0x18 || _0x1b) return; if (e.cancelable) e.preventDefault(); const r = _0x17.getBoundingClientRect(); const x = (e.clientX || (e.touches?e.touches[0].clientX:0)) - r.left; const y = (e.clientY || (e.touches?e.touches[0].clientY:0)) - r.top; _0x18.globalCompositeOperation = 'destination-out'; _0x18.beginPath(); _0x18.arc(x, y, 28, 0, Math.PI * 2); _0x18.fill(); if(!_0x1b) _0x8(_0x12, { x: Math.round(x), y: Math.round(y) }); }
function _0x29() { const d = _0x18.getImageData(0, 0, _0x17.width, _0x17.height).data; let c = 0; for (let i=3; i<d.length; i+=4) if(d[i]===0) c++; if (c > (d.length/4)*0.45) { _0x17.style.display = 'none'; document.getElementById('c_btn').style.display = 'block'; if (!_0x1b) { _0xa(_0x11, { isRevealed: true }); if (window._l_w <= 16) confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } }); _0x2a(); } } }
function _0x2a() { if(_0x1d) clearInterval(_0x1d); let s=10; const b = document.getElementById('c_btn'); _0x1d=setInterval(()=>{ s--; b.innerText=`\u78BA\u8A8D\u7D50\u679C (${s}s)`; if(s<=0){ clearInterval(_0x1d); window._clO(); } },1000); }
async function _0x22() { if(!_0x14) return; const s = await _0x7(_0x3(_0xe, 'coupons/' + _0x14)); if(s.exists() && s.val() > 0) { _0x15 = s.val(); document.getElementById('u_q').innerHTML = `\u53EF\u7528\uFF1A${_0x15} (${_0x14}) <span id="sw_btn" style="cursor:pointer;color:#aaa;">[\u5207\u63DB]</span>`; document.getElementById('sw_btn').onclick = () => { localStorage.removeItem('_u_c'); _0x14 = ""; document.getElementById('_m_01').style.display = 'flex'; }; } else { localStorage.removeItem('_u_c'); _0x14 = ""; } }

_0x5(_0x10, (s) => { const d = s.val(); _0x1c.clear(); if(d) { const r = Object.values(d).reverse(); r.forEach(x => _0x1c.add(parseInt(x.g))); document.getElementById('h_l').innerHTML = r.map(x => `<div class="h_item"><span>👤 <b>${x.c}</b></span><span style="color:#ff4757;font-weight:900;">${_0x20(x.g)}</span></div>`).join(''); } });
_0x5(_0xf, (s) => { 
    const d = s.val(); if(d) { 
        _0x1a = false; const _0x24 = d.filter(x => x.taken).length;
        document.getElementById('d_ct').innerText = _0x24; document.getElementById('p_br').style.width = (_0x24 / 40 * 100) + "%"; 
        document.getElementById('g_d').innerHTML = d.slice(0, 40).map((x, i) => { const ni = parseInt(x.grade); const rv = (_0x1f === i); const lk = (x.taken && !_0x1c.has(ni) && !_0x1e); return `<div class="t_s ${x.taken && !rv && !lk ?'so':''} ${x.taken && ni <= 16 && !rv && !lk ? 'rv' : ''} ${rv || lk ?'pk':''}" data-val="${_0x20(ni)}" onclick="window._ck_i(${i}, ${x.taken})"></div>`; }).join(''); 
    } 
    document.getElementById('p_g').innerHTML = Object.entries(_0x13).map(([n, m]) => { const ni = parseInt(n); const taken = _0x1c.has(ni); let cls = (ni === 1) ? 'tp' : (ni === 2) ? 'sp' : ''; return `<div class="p_item ${cls} ${taken?'tk':''}"><span class="p_badge">${_0x20(ni)}</span> ${m}</div>`; }).join(''); 
    _0x22();
});
_0x5(_0x11, (s) => { const d = s.val(); if (d) { _0x1e = d.isRevealed; if (document.getElementById('ovl').style.display !== 'flex') { _0x1b = true; _0x1a = true; _0x27(_0x20(d.winNum), d.isRevealed); } if (d.isRevealed && _0x17) _0x17.style.display = 'none'; if (d.isRevealed) document.getElementById('c_btn').style.display='block'; } else { _0x1e = false; if (document.getElementById('ovl').style.display === 'flex') window._clO(); } });
_0x0b(_0x12, (s) => { if (_0x18 && _0x1b) { const p = s.val(); _0x18.globalCompositeOperation = 'destination-out'; _0x18.beginPath(); _0x18.arc(p.x, p.y, 25, 0, Math.PI * 2); _0x18.fill(); } });

document.getElementById('l_st').onclick = async () => { if(prompt("") === atob('MDgwNQ==')) { await _0x9(_0x11); let n=[]; for(let i=1; i<=40; i++) n.push(i); n.sort(()=>Math.random()-0.5); await _0x6(_0xf, n.map(v=>({grade:v,taken:false}))); await _0x6(_0x10, null); location.reload(); } };
document.getElementById('r_st').onclick = () => { if(prompt("") === atob('MDgwNQ==')) _0x2b('c'); };
document.getElementById('btn_m1_close').onclick = () => window._m_cl('_m_01');
document.getElementById('btn_m2_close').onclick = () => window._m_cl('_m_02');
document.getElementById('_v_bt').onclick = window._v_cl;
document.getElementById('c_btn').onclick = window._clO;

function _0x2b(t) { const b = document.getElementById('_ui_c'); b.innerHTML=`<input type="number" id="_i_02" value="1"><button id="_0x2c" class="btn_m">SEND</button>`; document.getElementById('_0x2c').onclick=async()=>{ const n=parseInt(document.getElementById('_i_02').value); const c=Math.random().toString(36).substring(2,8).toUpperCase(); await _0x6(_0x3(_0xe,'coupons/'+c),n); alert(c); window._m_cl('_m_02'); }; document.getElementById('_m_02').style.display='flex'; }
