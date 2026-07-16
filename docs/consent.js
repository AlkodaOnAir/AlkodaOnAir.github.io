/* Alkoda OnAir — Consent Manager v20260716-1
 * Google Analytics 4 · G-7CB706LQZ8
 * No tracking before explicit user acceptance.
 */
(function(){
  'use strict';

  var GA_ID='G-7CB706LQZ8';
  var CONSENT_KEY='alkoda_consent';
  var LANG_KEY='alkoda_lang';
  var CONSENT_TTL=180*24*60*60*1000; // 180 days in ms

  var _gaLoaded=false;
  var _pageViewSent=false;
  var _lang='fr';
  var _bannerVisible=false;
  var _openedFromLink=false;

  var STR={
    fr:{
      title:'Cookies statistiques',
      text:'Alkoda OnAir utilise Google Analytics uniquement avec votre accord pour mesurer les visites et améliorer le site.',
      accept:'Accepter les statistiques',
      refuse:'Refuser',
      manage:'Gérer les cookies',
      privacy:'Confidentialité et cookies'
    },
    en:{
      title:'Analytics cookies',
      text:'Alkoda OnAir uses Google Analytics only with your permission to measure visits and improve the website.',
      accept:'Accept analytics',
      refuse:'Refuse',
      manage:'Cookie settings',
      privacy:'Privacy and cookies'
    }
  };

  function s(k){return(STR[_lang]||STR.fr)[k]||'';}

  /* ── STORAGE ────────────────────────────────────────────── */
  function saveConsent(v){
    try{
      localStorage.setItem(CONSENT_KEY,JSON.stringify({value:v,expires:Date.now()+CONSENT_TTL}));
    }catch(e){}
  }
  function readConsent(){
    try{
      var raw=localStorage.getItem(CONSENT_KEY);
      if(!raw)return null;
      var d=JSON.parse(raw);
      if(!d||!d.value||!d.expires)return null;
      if(Date.now()>d.expires){localStorage.removeItem(CONSENT_KEY);return null;}
      if(d.value!=='accepted'&&d.value!=='refused')return null;
      return d.value;
    }catch(e){return null;}
  }

  /* ── ANALYTICS ──────────────────────────────────────────── */
  function loadGA(){
    if(_gaLoaded)return;
    _gaLoaded=true;
    window['ga-disable-'+GA_ID]=false;
    window.dataLayer=window.dataLayer||[];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag=gtag;
    gtag('js',new Date());
    gtag('config',GA_ID,{send_page_view:false});
    var scr=document.createElement('script');
    scr.async=true;
    scr.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;
    scr.onload=function(){
      if(!_pageViewSent){_pageViewSent=true;window.gtag('event','page_view');}
    };
    document.head.appendChild(scr);
  }

  function disableGA(){
    window['ga-disable-'+GA_ID]=true;
    _gaLoaded=false;
    _pageViewSent=false;
    document.querySelectorAll('script[src*="googletagmanager.com"]').forEach(function(el){el.remove();});
    // Delete _ga and _ga_* cookies across relevant domains and paths
    var domains=[location.hostname,'.'+location.hostname,'alkoda-onair.com','.alkoda-onair.com'];
    var paths=['/','/page_valise','/wires',''];
    var cookies=document.cookie.split(';');
    cookies.forEach(function(c){
      var name=c.split('=')[0].trim();
      if(name==='_ga'||name.indexOf('_ga_')===0){
        domains.forEach(function(domain){
          paths.forEach(function(path){
            document.cookie=name+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain='+domain+';path='+path+';SameSite=Lax';
          });
        });
      }
    });
  }

  /* ── BANNER CSS ─────────────────────────────────────────── */
  var CSS=[
    '#alkoda-cb{position:fixed;bottom:0;left:0;right:0;z-index:99990;display:flex;justify-content:center;padding:16px 16px 20px;pointer-events:none}',
    '#alkoda-cb-card{background:#0d1627;border:1px solid #22314f;border-radius:16px;box-shadow:0 18px 60px rgba(0,0,0,.6);padding:22px 24px;max-width:720px;width:100%;pointer-events:all;font-family:Inter,system-ui,sans-serif}',
    '#alkoda-cb-title{font-size:15px;font-weight:700;color:#e8eefb;margin:0 0 8px;letter-spacing:-.01em}',
    '#alkoda-cb-text{font-size:14px;font-weight:300;color:#9db0d0;line-height:1.6;margin:0 0 18px}',
    '#alkoda-cb-btns{display:flex;gap:10px}',
    '#alkoda-cb-accept,#alkoda-cb-refuse{flex:1;min-height:44px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer;border:1px solid #00d2ff;transition:.2s;font-family:inherit;line-height:1;background:transparent;color:#e8eefb}',
    '#alkoda-cb-accept:hover,#alkoda-cb-refuse:hover{background:rgba(0,210,255,.12);color:#fff;border-color:#00d2ff}',
    '#alkoda-cb-accept:focus-visible,#alkoda-cb-refuse:focus-visible{outline:2px solid #00d2ff;outline-offset:3px}',
    '.alkoda-cookie-btn{background:none;border:none;cursor:pointer;padding:0;font-size:inherit;color:inherit;font-family:inherit;text-decoration:none;display:inline;line-height:inherit}',
    '.alkoda-cookie-btn:hover,.alkoda-privacy-link:hover{color:#00d2ff!important}',
    '@media(max-width:540px){#alkoda-cb-btns{flex-direction:column}#alkoda-cb-accept,#alkoda-cb-refuse{flex:none}}'
  ].join('');

  /* ── BANNER DOM ─────────────────────────────────────────── */
  function injectBanner(){
    if(document.getElementById('alkoda-cb'))return;
    var st=document.createElement('style');
    st.id='alkoda-cb-css';
    st.textContent=CSS;
    document.head.appendChild(st);
    var el=document.createElement('div');
    el.id='alkoda-cb';
    el.setAttribute('role','dialog');
    el.setAttribute('aria-modal','false');
    el.setAttribute('aria-labelledby','alkoda-cb-title');
    el.innerHTML=
      '<div id="alkoda-cb-card">'+
        '<h3 id="alkoda-cb-title"></h3>'+
        '<p id="alkoda-cb-text"></p>'+
        '<div id="alkoda-cb-btns">'+
          '<button id="alkoda-cb-accept"></button>'+
          '<button id="alkoda-cb-refuse"></button>'+
        '</div>'+
      '</div>';
    document.body.appendChild(el);
    updateTexts();
    document.getElementById('alkoda-cb-accept').addEventListener('click',onAccept);
    document.getElementById('alkoda-cb-refuse').addEventListener('click',onRefuse);
    document.addEventListener('keydown',function(e){
      if(_bannerVisible&&e.key==='Escape')onRefuse();
    });
  }

  function updateTexts(){
    var t=document.getElementById('alkoda-cb-title');
    var p=document.getElementById('alkoda-cb-text');
    var ba=document.getElementById('alkoda-cb-accept');
    var br=document.getElementById('alkoda-cb-refuse');
    if(t)t.textContent=s('title');
    if(p)p.textContent=s('text');
    if(ba)ba.textContent=s('accept');
    if(br)br.textContent=s('refuse');
    document.querySelectorAll('.alkoda-cookie-btn').forEach(function(el){el.textContent=s('manage');});
    document.querySelectorAll('.alkoda-privacy-link').forEach(function(el){el.textContent=s('privacy');});
  }

  function showBanner(){
    injectBanner();
    var el=document.getElementById('alkoda-cb');
    if(el)el.style.display='flex';
    _bannerVisible=true;
    setTimeout(function(){var b=document.getElementById('alkoda-cb-accept');if(b)b.focus();},80);
  }

  function hideBanner(){
    var el=document.getElementById('alkoda-cb');
    if(el)el.style.display='none';
    _bannerVisible=false;
    if(_openedFromLink){
      var btn=document.querySelector('.alkoda-cookie-btn');
      if(btn)btn.focus();
      _openedFromLink=false;
    }
  }

  function onAccept(){saveConsent('accepted');hideBanner();loadGA();}
  function onRefuse(){saveConsent('refused');hideBanner();disableGA();}
  function openBanner(){_openedFromLink=true;showBanner();}

  /* ── LANGUAGE ───────────────────────────────────────────── */
  function updateLang(lang){
    if(lang==='fr'||lang==='en')_lang=lang;
    updateTexts();
  }
  function initLang(){
    try{
      var l=localStorage.getItem(LANG_KEY);
      if(l==='fr'||l==='en'){_lang=l;return;}
    }catch(e){}
    _lang=(navigator.language||'').startsWith('fr')?'fr':'en';
  }

  /* ── INIT ───────────────────────────────────────────────── */
  function init(){
    initLang();
    var choice=readConsent();
    if(choice==='accepted'){
      loadGA();
    } else if(choice===null){
      if(document.readyState==='loading'){
        document.addEventListener('DOMContentLoaded',showBanner);
      } else {
        showBanner();
      }
    }
    // choice==='refused' : nothing — no banner, no GA
  }

  /* ── PUBLIC API ─────────────────────────────────────────── */
  window.alkodaConsent={open:openBanner,updateLang:updateLang};
  window._alkodaConsentLang=updateLang; // hook for each page's setLang

  init();
})();
