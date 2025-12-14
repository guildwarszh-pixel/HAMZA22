// Minimal interactivity: WhatsApp order + FR/AR toggle

(function(){
  const phone = "212600000000"; // replace with your number
  const form = document.getElementById('orderForm');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.querySelector('input[type="text"]').value.trim();
      const phoneInput = form.querySelector('input[type="tel"]').value.trim();
      const address = form.querySelector('textarea').value.trim();
      const service = form.querySelector('#serviceType').value;
      const product = form.querySelector('#productSelect').value;
      const size = form.querySelector('[data-key="size-select"]').value;
      const color = form.querySelector('[data-key="color-select"]').value;
      const region = (form.querySelector('#printRegion')||{}).value || '';
      const msg = [
        "Bonjour Rabat Product | طلب جديد",
        `Nom/الاسم: ${name}`,
        `Tel: ${phoneInput}`,
        `Service: ${service}`,
        `Produit/SKU: ${product}`,
        `Taille: ${size}`,
        `Couleur: ${color}`,
        `Région: ${region}`,
        `Adresse: ${address}`
      ].join(" %0A ");
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }

  // Simple language map using data-key attributes
  const translations = {
    ar: {
      "home":"Accueil","products":"Produits","services":"Services","contact":"Contact",
      "welcome":"Rabat Product — طباعة وملابس رياضية",
      "hero-text":"تصاميم جاهزة وطبعات حسب الطلب للرباط، سلا والمناطق. جودة عالية وأسعار تنافسية.",
      "shop-now":"تسوق الآن","order-print":"اطلب طبعة",
      "tshirt":"T-shirt","hoodie":"Hoodie","pants":"Pantalon",
      "latest-designs":"Derniers Designs","order":"Commander / طلب","submit":"Commander / إرسال الطلب",
      "footer":"© 2026 Rabat Product. Tous droits réservés."
    },
    fr: {
      "home":"Accueil","products":"Produits","services":"Services","contact":"Contact",
      "welcome":"Rabat Product — Sportswear & Impression",
      "hero-text":"Designs prêts et impressions sur demande pour Rabat, Salé et régions.",
      "shop-now":"Shop Now","order-print":"Order Print",
      "tshirt":"T-shirt","hoodie":"Hoodie","pants":"Pantalon",
      "latest-designs":"Latest Designs","order":"Order","submit":"Send Order",
      "footer":"© 2026 Rabat Product. All rights reserved."
    }
  };

  function setLang(lang){
    document.querySelectorAll('[data-key]').forEach(el=>{
      const key = el.getAttribute('data-key');
      if(translations[lang] && translations[lang][key]){
        el.textContent = translations[lang][key];
      }
    });
  }

  const btnAr = document.getElementById('lang-ar');
  const btnFr = document.getElementById('lang-fr');
  if(btnAr) btnAr.addEventListener('click',()=>setLang('ar'));
  if(btnFr) btnFr.addEventListener('click',()=>setLang('fr'));
})();
