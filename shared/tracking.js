/* ═══════════════════════════════════════════════
   rewire.school — Landing Page Tracking
   Auto-captures UTM params, stores for lead attribution.
   Include via: <script src="/lp/shared/tracking.js"></script>
   ═══════════════════════════════════════════════ */

(function() {
  // Capture UTM params from URL
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const utm = {};

  utmKeys.forEach(key => {
    const val = params.get(key);
    if (val) utm[key] = val;
  });

  // Store in sessionStorage (persists across page navigations within session)
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem('rewire_utm', JSON.stringify(utm));
  }

  // Also store landing page URL and referrer
  if (!sessionStorage.getItem('rewire_landing_url')) {
    sessionStorage.setItem('rewire_landing_url', window.location.href);
    sessionStorage.setItem('rewire_referrer', document.referrer || 'direct');
    sessionStorage.setItem('rewire_landed_at', new Date().toISOString());
  }

  // Helper: get all tracking data (call this when capturing a lead)
  window.getRewireTracking = function() {
    return {
      utm: JSON.parse(sessionStorage.getItem('rewire_utm') || '{}'),
      landingUrl: sessionStorage.getItem('rewire_landing_url') || '',
      referrer: sessionStorage.getItem('rewire_referrer') || '',
      landedAt: sessionStorage.getItem('rewire_landed_at') || ''
    };
  };

  // ─── Meta Pixel (Facebook) ───
  // Replace YOUR_PIXEL_ID with your actual Pixel ID
  // Uncomment when ready:
  /*
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
  */

  // ─── Google Tag Manager ───
  // Replace GTM-XXXXXXX with your actual GTM ID
  // Uncomment when ready:
  /*
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');
  */

  console.log('[rewire tracking] initialized', utm);
})();
