document.addEventListener('DOMContentLoaded', ()=>{
  // Hamburger
  const btn = document.querySelector('.ca5d34361c5');
  const nav = document.querySelector('.c0b4b38ef9e');
  if (btn && nav) {
    btn.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Auto-fallback cho NEWS_EXCERPT nếu chưa được build (tránh hiện token)
  const newsEl = document.querySelector('[data-news-excerpt]');
  if (newsEl && /\{\{NEWS_EXCERPT\}\}/.test(newsEl.textContent)) {
    const missionRaw = "Dedicated to community services, education, and direct relief, Brolin Family Foundation, Inc. collaborates with neighbors and partners to deliver practical help and long-term impact. Programs are delivered with cultural competence and fiscal transparency.";
    const mission = /\{\{MISSION\}\}/.test(missionRaw) ? "" : missionRaw;
    const fallback = mission
      ? (mission.split('.').slice(0,2).join('. ').trim() + '.')
      : "We share periodic updates on our programs and community impact.";
    newsEl.textContent = fallback;
  }

  // Gắn build id để khác fingerprint
  document.documentElement.setAttribute('data-build','5f9076427d796617a3da92b189c7f377');
});

// pretty-url rewrite for Vercel (only on http/https)
(function(){
  try{
    if (!/^https?:/.test(location.protocol)) return;
    var anchors = document.querySelectorAll('a[href$=".html"]');
    anchors.forEach(function(a){
      var href = a.getAttribute('href') || '';
      if (/^https?:\/\//i.test(href) || href.indexOf('index.html')>-1) return;
      if (!href.startsWith('/') && !href.startsWith('./') && !href.startsWith('../')){
        var clean = href.replace(/\.html$/i,'');
        a.setAttribute('href', '/' + clean.replace(/^\/+/,''));
      }
    });
  }catch(e){}
})();
