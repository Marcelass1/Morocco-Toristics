import './style.css'


const translations = {
  en: {
    nav_home: "Home",
    nav_dest: "Destinations",
    nav_exp: "Experiences",
    nav_plan: "Plan Your Trip",
    hero_title: "Experience the <br><span class=\"text-gradient\">Magic of Morocco</span>",
    hero_sub: "Journey through ancient medinas, breathe the mountain air, and sleep under the Saharan stars.",
    hero_btn_exp: "Explore Destinations",
    hero_btn_view: "View Experiences",
    dest_header_title: "Popular Destinations",
    dest_header_sub: "Discover the rich history and vibrant colors of our most beloved cities and landscapes.",
    dest_marrakech: "Marrakech",
    dest_marrakech_sub: "The Red City. Lose yourself in the bustling souks and vibrant Djemaa el-Fna square.",
    card_discover: "Discover →",
    dest_chefchaouen: "Chefchaouen",
    dest_chefchaouen_sub: "The Blue Pearl. A tranquil mountain town famous for its picturesque blue-washed buildings.",
    dest_sahara: "Sahara Desert",
    dest_sahara_sub: "Merzouga & Beyond. Ride camels over massive golden dunes and camp under breathtaking night skies.",
    exp_header_title: "Authentic Experiences",
    exp_header_sub: "Immerse yourself in the local culture, cuisine, and traditions of Morocco.",
    exp_riad: "Stay in a Traditional Riad",
    exp_riad_sub: "Experience the tranquility of a traditional Moroccan courtyard home. Hidden behind modest doors in the winding alleys of the old medina lie stunning palaces featuring intricate tilework (Zellij), carved plaster, and peaceful fountains.",
    exp_food: "Savor Moroccan Cuisine",
    exp_food_sub: "Taste the world-famous slow-cooked Tagines, fluffy couscous, and refreshing mint tea. Moroccan food is a vibrant mix of Arabic, Andalusian, and Berber traditions with complex spice blends like Ras el Hanout.",
    footer_desc: "Your ultimate guide to exploring the unparalleled beauty and rich culture of Morocco.",
    footer_quick: "Quick Links",
    footer_contact: "Contact Us",
    footer_email: "Email:",
    footer_phone: "Phone:",
    footer_address: "Address:",
    modal_book_now: "Book Now",
    modal_form_intro: "Excellent choice! We're thrilled to help you explore this beautiful destination. Tell us a bit about your travel plans, and our local experts will reach out to craft your perfect itinerary.",
    placeholder_name: "Full Name",
    placeholder_email: "Email Address",
    placeholder_phone: "Phone Number",
    placeholder_guests: "Guests",
    placeholder_msg: "Special Requests or Message",
    modal_back: "Back",
    modal_confirm: "Confirm Booking",
    modal_success_title: "Booking Confirmed!",
    modal_success_desc: "We will contact you shortly with your itinerary details. Get ready for an unforgettable Moroccan adventure!",
    desc_marrakech: "Discover the heart of Morocco in Marrakech. Wander through the maze-like medina, shop for spices and colorful textiles in the souks, and watch the sun set over the bustling Djemaa el-Fna square. Book a luxury riad or a guided desert expedition today.",
    desc_chefchaouen: "Experience serenity in the Blue Pearl of Morocco. Nestled in the Rif Mountains, Chefchaouen is renowned for its striking, blue-washed buildings, relaxed atmosphere, and incredible mountain hiking paths. Plan your tranquil getaway now.",
    desc_sahara: "Embark on an unforgettable adventure into the vast Sahara Desert. Ride camels across golden dunes, listen to traditional Berber music around a campfire, and sleep under a mesmerizing canopy of stars in a luxury desert camp.",
    test_header_title: "What Travelers Say",
    test_header_sub: "Real stories from real adventurers who explored Morocco with us.",
    test_1_quote: '"The Sahara desert camp was the highlight of our lives. Sleeping under the stars with traditional Berber music was pure magic!"',
    test_1_name: "Sarah M.",
    test_1_loc: "London, UK",
    test_2_quote: '"Chefchaouen blew our minds. The blue streets, the mountain hikes, and the incredible food \u2014 Torritics planned every detail perfectly."',
    test_2_name: "Jean D.",
    test_2_loc: "Paris, France",
    test_3_quote: '"From the bustling souks of Marrakech to the peaceful riads \u2014 this trip exceeded all expectations. We are already planning our return!"',
    test_3_name: "Ahmed K.",
    test_3_loc: "Dubai, UAE",
    faq_header_title: "Frequently Asked Questions",
    faq_header_sub: "Everything you need to know before your Moroccan adventure.",
    faq_q1: 'Do I need a visa to visit Morocco? <span class="faq-icon">+</span>',
    faq_a1: "Many nationalities can enter Morocco visa-free for up to 90 days, including citizens of the US, UK, EU, Canada, and Australia. Check with your local embassy for specific requirements.",
    faq_q2: 'When is the best time to visit? <span class="faq-icon">+</span>',
    faq_a2: "The best times are spring (March\u2013May) and autumn (September\u2013November) when the weather is warm but comfortable. Summer can be very hot in the desert, and winter is ideal for the Sahara.",
    faq_q3: 'Are meals included in the tours? <span class="faq-icon">+</span>',
    faq_a3: "Most of our packages include breakfast and dinner. Lunch is typically on your own so you can explore local street food and restaurants at your leisure.",
    faq_q4: 'Is Morocco safe for solo travelers? <span class="faq-icon">+</span>',
    faq_a4: "Yes! Morocco is one of the safest countries in Africa for tourists. Our guides are locals who know the culture, terrain, and best practices to ensure you have a safe and enriching experience.",
    faq_q5: 'Can I customize my itinerary? <span class="faq-icon">+</span>',
    faq_a5: "Absolutely! We specialize in tailor-made trips. Just tell us your interests, budget, and travel dates, and our experts will craft a personalized adventure just for you."
  },
  fr: {
    nav_home: "Accueil",
    nav_dest: "Destinations",
    nav_exp: "Expériences",
    nav_plan: "Planifiez",
    hero_title: "Vivez la <br><span class=\"text-gradient\">Magie du Maroc</span>",
    hero_sub: "Parcourez les anciennes médinas, respirez l'air des montagnes et dormez sous les étoiles sahariennes.",
    hero_btn_exp: "Explorer",
    hero_btn_view: "Expériences",
    dest_header_title: "Destinations Populaires",
    dest_header_sub: "Découvrez la riche histoire et les couleurs vibrantes de nos villes et paysages",
    dest_marrakech: "Marrakech",
    dest_marrakech_sub: "La Ville Rouge. Perdez-vous dans les souks animés et la vibrante place Jemaa el-Fna.",
    card_discover: "Découvrir →",
    dest_chefchaouen: "Chefchaouen",
    dest_chefchaouen_sub: "La Perle Bleue. Une ville paisible célèbre pour ses bâtiments aux murs bleus.",
    dest_sahara: "Désert du Sahara",
    dest_sahara_sub: "Merzouga et au-delà. Montez à dos de chameau et campez sous un ciel étoilé époustouflant.",
    exp_header_title: "Expériences Authentiques",
    exp_header_sub: "Plongez dans la culture, la cuisine et les traditions locales du Maroc.",
    exp_riad: "Séjournez dans un Riad",
    exp_riad_sub: "Découvrez la tranquillité d'un grand patio marocain. Derrière de modestes portes se cachent de superbes palais au carrelage Zellij.",
    exp_food: "Savourez la Cuisine",
    exp_food_sub: "Goûtez aux tajines légendaires, au couscous et au thé à la menthe. La cuisine marocaine est un mélange unique de saveurs.",
    footer_desc: "Votre guide ultime pour explorer la beauté incomparable et la riche culture du Maroc.",
    footer_quick: "Liens Rapides",
    footer_contact: "Contactez-nous",
    footer_email: "Email:",
    footer_phone: "Téléphone:",
    footer_address: "Adresse:",
    modal_book_now: "Réserver",
    modal_form_intro: "Excellent choix ! Nous sommes ravis de vous aider. Parlez-nous de vos projets et nos experts élaboreront votre itinéraire parfait.",
    placeholder_name: "Nom complet",
    placeholder_email: "Adresse Email",
    placeholder_phone: "Numéro de tel",
    placeholder_guests: "Personnes",
    placeholder_msg: "Demandes spéciales ou Message",
    modal_back: "Retour",
    modal_confirm: "Confirmer la réservation",
    modal_success_title: "Réservation confirmée !",
    modal_success_desc: "Nous vous contacterons bientôt avec les détails. Préparez-vous pour l'aventure !",
    desc_marrakech: "Découvrez le cœur du Maroc. Promenez-vous dans le labyrinthe de la médina, achetez des épices et admirez le coucher de soleil. Réservez un riad de luxe dès aujourd'hui.",
    desc_chefchaouen: "Découvrez la sérénité dans la Perle Bleue du Maroc. Nichée dans les montagnes du Rif, Chefchaouen est renommée pour son atmosphère détendue.",
    desc_sahara: "Embarquez pour une aventure inoubliable dans le Sahara. Écoutez la musique berbère traditionnelle et dormez sous un ciel étoilé magnifique.",
    test_header_title: "Ce que disent nos voyageurs",
    test_header_sub: "Des histoires vraies d'aventuriers qui ont exploré le Maroc avec nous.",
    test_1_quote: '"Le camp dans le Sahara a été le point fort de notre vie. Dormir sous les étoiles avec la musique berbère traditionnelle était magique !"',
    test_1_name: "Sarah M.",
    test_1_loc: "Londres, Royaume-Uni",
    test_2_quote: '"Chefchaouen nous a émerveillés. Les rues bleues, les randonnées et la nourriture incroyable \u2014 Torritics a planifié chaque détail."',
    test_2_name: "Jean D.",
    test_2_loc: "Paris, France",
    test_3_quote: '"Des souks de Marrakech aux riads paisibles \u2014 ce voyage a dépassé toutes nos attentes. Nous planifions déjà notre retour !"',
    test_3_name: "Ahmed K.",
    test_3_loc: "Dubaï, ÉAU",
    faq_header_title: "Questions Fréquentes",
    faq_header_sub: "Tout ce qu'il faut savoir avant votre aventure marocaine.",
    faq_q1: 'Ai-je besoin d\'un visa ? <span class="faq-icon">+</span>',
    faq_a1: "De nombreuses nationalités peuvent entrer au Maroc sans visa jusqu'à 90 jours. Vérifiez auprès de votre ambassade.",
    faq_q2: 'Quelle est la meilleure période ? <span class="faq-icon">+</span>',
    faq_a2: "Le printemps (mars\u2013mai) et l'automne (sept\u2013nov) sont idéaux. L'été est très chaud dans le désert.",
    faq_q3: 'Les repas sont-ils inclus ? <span class="faq-icon">+</span>',
    faq_a3: "La plupart de nos forfaits incluent le petit-déjeuner et le dîner. Le déjeuner est libre pour explorer la cuisine locale.",
    faq_q4: 'Le Maroc est-il sûr pour les voyageurs seuls ? <span class="faq-icon">+</span>',
    faq_a4: "Oui ! Le Maroc est l'un des pays les plus sûrs d'Afrique pour les touristes. Nos guides locaux assurent une expérience sécurisée.",
    faq_q5: 'Puis-je personnaliser mon itinéraire ? <span class="faq-icon">+</span>',
    faq_a5: "Absolument ! Nous nous spécialisons dans les voyages sur mesure. Dites-nous vos intérêts et nos experts créeront l'aventure parfaite."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_dest: "الوجهات",
    nav_exp: "التجارب",
    nav_plan: "خطط لرحلتك",
    hero_title: "عش <br><span class=\"text-gradient\">سحر المغرب</span>",
    hero_sub: "سافر عبر المدن القديمة، واستنشق هواء الجبال، ونم تحت نجوم الصحراء.",
    hero_btn_exp: "استكشف الوجهات",
    hero_btn_view: "شاهد التجارب",
    dest_header_title: "الوجهات السياحية",
    dest_header_sub: "اكتشف التاريخ الغني والألوان النابضة بالحياة لمدننا ومناظرنا الطبيعية.",
    dest_marrakech: "مراكش",
    dest_marrakech_sub: "المدينة الحمراء. استمتع في الأسواق الصاخبة وساحة جامع الفنا النابضة بالحياة.",
    card_discover: "اكتشف ←",
    dest_chefchaouen: "شفشاون",
    dest_chefchaouen_sub: "الجوهرة الزرقاء. مدينة جبلية هادئة تشتهر بمبانيها الزرقاء الخلابة.",
    dest_sahara: "الصحراء الكبرى",
    dest_sahara_sub: "مرزوكة وما وراءها. اركب الجمال فوق الكثبان الرملية وخيم تحت سماء الليل المرصعة بالنجوم.",
    exp_header_title: "تجارب أصلية",
    exp_header_sub: "انغمس في الثقافة والمأكولات والتقاليد المحلية.",
    exp_riad: "الإقامة في رياض تقليدي",
    exp_riad_sub: "جرب الهدوء في فناء المنزل المغربي التقليدي. تقع القصور المذهلة التي تتميز بالبلاط المعقد (الزليج).",
    exp_food: "تذوق المطبخ المغربي",
    exp_food_sub: "تذوق الطواجن المطبوخة ببطء، والكسكس الرقيق، وشاي النعناع المنعش. مزيج نابض بالحياة من التقاليد.",
    footer_desc: "دليلك النهائي لاستكشاف الجمال الذي لا مثيل له والثقافة الغنية للمغرب.",
    footer_quick: "روابط سريعة",
    footer_contact: "اتصل بنا",
    footer_email: "البريد:",
    footer_phone: "الهاتف:",
    footer_address: "العنوان:",
    modal_book_now: "احجز الان",
    modal_form_intro: "اختيار ممتاز! نحن سعداء بمساعدتك. أخبرنا عن خطط سفرك، وسيتواصل معك خبراؤنا المحليون.",
    placeholder_name: "الاسم الكامل",
    placeholder_email: "البريد الإلكتروني",
    placeholder_phone: "رقم الهاتف",
    placeholder_guests: "عدد الضيوف",
    placeholder_msg: "رسالة أو طلبات خاصة",
    modal_back: "رجوع",
    modal_confirm: "تأكيد الحجز",
    modal_success_title: "تم تأكيد الحجز!",
    modal_success_desc: "سنتصل بك قريبًا بمسار رحلتك. استعد لمغامرة مغربية لا تُنسى!",
    desc_marrakech: "اكتشف قلب المغرب في مراكش. تجول في المدينة المتاهة، واشترِ التوابل والمنسوجات، وشاهد غروب الشمس على ساحة جامع الفنا. احجز مسكنك اليوم.",
    desc_chefchaouen: "استمتع بالصفاء في جوهرة المغرب الزرقاء. تقع في جبال الريف، تشتهر شفشاون بمبانيها، وجوها المريح.",
    desc_sahara: "انطلق في مغامرة لا تُنسى في الصحراء الكبرى. استمع إلى الموسيقى الأمازيغية التقليدية حول نار المخيم ونم تحت النجوم.",
    test_header_title: "ماذا يقول المسافرون",
    test_header_sub: "قصص حقيقية من مغامرين استكشفوا المغرب معنا.",
    test_1_quote: '"\u0643\u0627\u0646 \u0645\u062e\u064a\u0645 \u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0623\u0647\u0645 \u0644\u062d\u0638\u0629 \u0641\u064a \u062d\u064a\u0627\u062a\u0646\u0627. \u0627\u0644\u0646\u0648\u0645 \u062a\u062d\u062a \u0627\u0644\u0646\u062c\u0648\u0645 \u0645\u0639 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0644\u0623\u0645\u0627\u0632\u064a\u063a\u064a\u0629 \u0643\u0627\u0646 \u0633\u062d\u0631\u064b\u0627!"',
    test_1_name: "سارة م.",
    test_1_loc: "لندن، بريطانيا",
    test_2_quote: '"\u0634\u0641\u0634\u0627\u0648\u0646 \u0623\u0628\u0647\u0631\u062a\u0646\u0627. \u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0627\u0644\u0632\u0631\u0642\u0627\u0621 \u0648\u0627\u0644\u0645\u0634\u064a \u0641\u064a \u0627\u0644\u062c\u0628\u0627\u0644 \u0648\u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0631\u0627\u0626\u0639 \u2014 \u062a\u0648\u0631\u064a\u062a\u064a\u0643\u0633 \u062e\u0637\u0637\u062a \u0643\u0644 \u0634\u064a\u0621."',
    test_2_name: "جان د.",
    test_2_loc: "باريس، فرنسا",
    test_3_quote: '"\u0645\u0646 \u0623\u0633\u0648\u0627\u0642 \u0645\u0631\u0627\u0643\u0634 \u0627\u0644\u0635\u0627\u062e\u0628\u0629 \u0625\u0644\u0649 \u0627\u0644\u0631\u064a\u0627\u0636\u0627\u062a \u0627\u0644\u0647\u0627\u062f\u0626\u0629 \u2014 \u0647\u0630\u0647 \u0627\u0644\u0631\u062d\u0644\u0629 \u0641\u0627\u0642\u062a \u0643\u0644 \u0627\u0644\u062a\u0648\u0642\u0639\u0627\u062a!"',
    test_3_name: "أحمد ك.",
    test_3_loc: "دبي، الإمارات",
    faq_header_title: "الأسئلة الشائعة",
    faq_header_sub: "كل ما تحتاج معرفته قبل مغامرتك المغربية.",
    faq_q1: 'هل أحتاج تأشيرة لزيارة المغرب؟ <span class="faq-icon">+</span>',
    faq_a1: "يمكن لكثير من الجنسيات دخول المغرب بدون تأشيرة لمدة 90 يومًا. تحقق من سفارتك.",
    faq_q2: 'ما هو أفضل وقت للزيارة؟ <span class="faq-icon">+</span>',
    faq_a2: "الربيع (مارس\u2013مايو) والخريف (سبتمبر\u2013نوفمبر) هما الأفضل. الصيف حار جدًا في الصحراء.",
    faq_q3: 'هل الوجبات مشمولة؟ <span class="faq-icon">+</span>',
    faq_a3: "تشمل معظم باقاتنا الإفطار والعشاء. الغداء حر لاستكشاف مطاعم الشارع.",
    faq_q4: 'هل المغرب آمن للمسافرين الفرديين؟ <span class="faq-icon">+</span>',
    faq_a4: "نعم! المغرب من أكثر الدول أمانًا في أفريقيا للسياح. مرشدونا محليون يعرفون الثقافة.",
    faq_q5: 'هل يمكنني تخصيص برنامجي؟ <span class="faq-icon">+</span>',
    faq_a5: "بالتأكيد! نحن متخصصون في الرحلات المخصصة. أخبرنا باهتماماتك وسنصمم لك المغامرة المثالية."
  }
};

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Change language direction
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Translate all nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key]; // innerHTML supports <span> tags in hero
    }
  });

  // Translate all input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Setup Language Selector
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      applyTranslations(e.target.value);
    });
  }

  // Dark Mode Toggle
  const darkToggle = document.getElementById('dark-mode-toggle');
  const iconSun = darkToggle.querySelector('.icon-sun');
  const iconMoon = darkToggle.querySelector('.icon-moon');
  
  // Restore saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    iconSun.style.display = 'none';
    iconMoon.style.display = 'inline';
  }

  darkToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      iconSun.style.display = 'inline';
      iconMoon.style.display = 'none';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      iconSun.style.display = 'none';
      iconMoon.style.display = 'inline';
      localStorage.setItem('theme', 'dark');
    }
  });

  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all open FAQ items first
      faqItems.forEach(i => i.classList.remove('active'));
      // Toggle the clicked one
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Update year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Glassmorphism Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth appearance for sections (Intersection Observer)
  const sections = document.querySelectorAll('.destination-card, .exp-item');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
  });

  // Mobile menu toggle (simple implementation)
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  mobileBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
      mobileBtn.style.opacity = '1';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'rgba(255,255,255,0.95)';
      navLinks.style.padding = '20px 0';
      navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      mobileBtn.style.opacity = '0.5';
    }
  });

  // Destination Modal Logic
  const modal = document.getElementById('destination-modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalBookBtn = document.getElementById('modal-book-btn');
  const modalInfoView = document.getElementById('modal-info-view');
  const modalFormView = document.getElementById('modal-form-view');
  const modalBackBtn = document.getElementById('modal-back-btn');
  const bookingForm = document.getElementById('booking-form');
  const bookingSuccess = document.getElementById('booking-success');
  
  const cardLinks = document.querySelectorAll('.card-link');
  
  const destinationData = {
    'Marrakech': {
      img: '/city_marrakech.png',
      i18nKey: 'desc_marrakech'
    },
    'Chefchaouen': {
      img: '/city_chefchaouen.png',
      i18nKey: 'desc_chefchaouen'
    },
    'Sahara Desert': {
      img: '/hero_sahara.png',
      i18nKey: 'desc_sahara'
    }
  };

  function openModal(destKey, img, i18nKey) {
    // Rely exclusively on the data-i18n so that applying translations updates the modal content immediately
    modalTitle.setAttribute('data-i18n', 'dest_' + destKey.toLowerCase().replace(' ', '_'));
    modalDesc.setAttribute('data-i18n', i18nKey);
    modalImg.src = img;
    modalImg.alt = destKey;
    
    // Apply current translations to map the new keys immediately
    const currentLang = document.getElementById('lang-select').value;
    applyTranslations(currentLang);

    // Reset views
    modalInfoView.style.display = 'block';
    modalFormView.style.display = 'none';
    bookingForm.style.display = 'block';
    bookingSuccess.style.display = 'none';
    modalBackBtn.style.display = 'inline-block';
    bookingForm.reset();

    modal.classList.add('active');
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  cardLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const card = link.closest('.destination-card');
      const destKey = card.dataset.dest;
      
      const data = destinationData[destKey] || {
        img: card.querySelector('img').src,
        i18nKey: 'desc_marrakech'
      };
      
      openModal(destKey, data.img, data.i18nKey);
    });
  });

  modalBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalInfoView.style.display = 'none';
    modalFormView.style.display = 'block';
  });

  modalBackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalFormView.style.display = 'none';
    modalInfoView.style.display = 'block';
  });

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    bookingForm.style.display = 'none';
    bookingSuccess.style.display = 'block';
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Plan Your Trip Nav Button Logic
  const navPlanBtn = document.getElementById('nav-plan-btn');
  if (navPlanBtn) {
    navPlanBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalTitle.setAttribute('data-i18n', 'nav_plan');
      modalImg.src = '/hero_sahara.png'; 
      modalImg.alt = 'Plan your trip';
      
      const currentLang = document.getElementById('lang-select') ? document.getElementById('lang-select').value : 'en';
      applyTranslations(currentLang);

      modalInfoView.style.display = 'none';
      modalFormView.style.display = 'block';
      bookingForm.style.display = 'block';
      bookingSuccess.style.display = 'none';
      modalBackBtn.style.display = 'none';
      bookingForm.reset();

      modal.classList.add('active');
      
      // Close mobile menu if open
      const navLinks = document.querySelector('.nav-links');
      if (navLinks && navLinks.style.display === 'flex' && window.innerWidth <= 900) {
        document.querySelector('.mobile-menu-btn').click();
      }
    });
  }
});
