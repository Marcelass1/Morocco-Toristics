import './style.css'


const translations = {
  en: {
    nav_home: "Home",
    nav_dest: "Destinations",
    nav_tours: "Tours",
    nav_exp: "Experiences",
    nav_about: "About",
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
    dest_fes: "Fes",
    dest_fes_sub: "The Spiritual Capital. Wander through the world's largest car-free medina and ancient madrasas.",
    dest_casablanca: "Casablanca",
    dest_casablanca_sub: "The White City. Marvel at the Hassan II Mosque and explore Morocco's vibrant cosmopolitan hub.",
    dest_rabat: "Rabat",
    dest_rabat_sub: "The Royal Capital. Explore the Hassan Tower, Mohammed V Mausoleum, and the ancient Kasbah des Oudaias.",
    dest_essaouira: "Essaouira",
    dest_essaouira_sub: "The Wind City. A breezy Atlantic gem with blue ramparts, a UNESCO medina, and world-class windsurfing.",
    dest_tangier: "Tangier",
    dest_tangier_sub: "Gateway to Africa. Where Europe meets Africa — a city of legends, art, and dramatic sea views.",
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
    desc_fes: "Step into the medieval heart of Morocco in Fes el-Bali, a UNESCO World Heritage city. Explore the labyrinthine alleyways, visit the world's oldest university Al-Qarawiyyin, witness the famous leather tanneries, and immerse yourself in centuries of living history.",
    desc_casablanca: "Experience the vibrant energy of Morocco's economic capital. Discover the breathtaking Hassan II Mosque — one of the world's largest mosques built over the Atlantic Ocean — stroll the corniche, admire art deco architecture, and enjoy Morocco's finest modern dining and nightlife.",
    desc_rabat: "Discover Morocco's elegant capital city. Marvel at the iconic Hassan Tower and the magnificent Mohammed V Mausoleum, explore the ancient Kasbah des Oudaias overlooking the ocean, and stroll the wide boulevards of this UNESCO-listed city.",
    desc_essaouira: "Escape to the breezy Atlantic coast in Essaouira, the Moroccan 'Wind City'. Explore the dramatic 18th-century sea ramparts, browse the vibrant port fish market, wander the blue-and-white medina alleys, and catch the world-famous kitesurfing and windsurfing scene.",
    desc_tangier: "Stand at the crossroads of two continents in Tangier. Gaze across the Strait of Gibraltar from the clifftop Kasbah, lose yourself in the legendary medina, explore the colourful Cap Spartel lighthouse, and soak up the unique blend of Moroccan and European culture.",
    test_header_title: "What Travelers Say",
    test_header_sub: "Real stories from real adventurers who explored Morocco with us.",
    test_1_quote: '"The Sahara desert camp was the highlight of our lives. Sleeping under the stars with traditional Berber music was pure magic!"',
    test_1_name: "Sarah M.",
    test_1_loc: "London, UK",
    test_2_quote: '"Chefchaouen blew our minds. The blue streets, the mountain hikes, and the incredible food \u2014 MedinaraTravel planned every detail perfectly."',
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
    faq_a5: "Absolutely! We specialize in tailor-made trips. Just tell us your interests, budget, and travel dates, and our experts will craft a personalized adventure just for you.",
    tours_header_title: "Our Tour Packages",
    tours_header_sub: "Handcrafted itineraries designed by local experts. Pick your adventure.",
    tour_badge_pop: "Popular",
    tour_badge_best: "Best Value",
    tour_badge_adv: "Premium",
    tour_from: "From",
    tour_per_person: "/ person",
    tour_1_name: "3-Day Sahara Express",
    tour_1_f1: "✓ Private 4x4 transport from Marrakech",
    tour_1_f2: "✓ Camel trek & luxury Sahara camp",
    tour_1_f3: "✓ Visit Ouarzazate & Aït Benhaddou",
    tour_1_f4: "✓ Breakfast & dinner included",
    tour_2_name: "7-Day Imperial Cities",
    tour_2_f1: "✓ Marrakech, Fes, Meknes & Rabat",
    tour_2_f2: "✓ Boutique riad accommodation (4★)",
    tour_2_f3: "✓ Private guide & air-conditioned vehicle",
    tour_2_f4: "✓ All breakfasts & airport transfers",
    tour_3_name: "10-Day Grand Morocco",
    tour_3_f1: "✓ Imperial cities + Sahara + Atlantic coast",
    tour_3_f2: "✓ Atlas Mountains & Essaouira beach day",
    tour_3_f3: "✓ Luxury 5★ riads & glamping desert camp",
    tour_3_f4: "✓ Private guide, all meals & transport",
    tour_badge_new: "New",
    tour_badge_nature: "Nature",
    tour_4_name: "4-Day Desert Discovery",
    tour_4_f1: "✓ Sunset camel trek in Merzouga",
    tour_4_f2: "✓ Luxury desert camp experience",
    tour_4_f3: "✓ Dades Valley & Todra Gorge",
    tour_4_f4: "✓ Traditional Berber music at campfire",
    tour_5_name: "5-Day Atlas Mountains Trek",
    tour_5_f1: "✓ Guided trekking in High Atlas",
    tour_5_f2: "✓ Mount Toubkal base camp",
    tour_5_f3: "✓ Stay in authentic Berber villages",
    tour_5_f4: "✓ Mules for luggage & local guide",
    tour_book: "Book This Tour",
    about_header_title: "Why MedinaraTravel?",
    about_header_sub: "We are a team of passionate Moroccan locals dedicated to sharing the beauty of our homeland.",
    about_p1: "Founded in Marrakech, MedinaraTravel was born from a deep love for Morocco's culture, landscapes, and people. Our team of local guides and travel experts has been crafting unforgettable journeys for over a decade.",
    about_p2: "We believe travel should be authentic, personal, and transformative. Every itinerary we design is tailored to your interests \u2014 whether you seek adventure in the Sahara, tranquility in the mountains, or immersion in ancient medinas.",
    about_stat1: "Tours Completed",
    about_stat2: "Years Experience",
    about_stat3: "Happy Travelers",
    about_stat4: "Average Rating"
  },
  fr: {
    nav_home: "Accueil",
    nav_dest: "Destinations",
    nav_tours: "Circuits",
    nav_exp: "Expériences",
    nav_about: "À propos",
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
    dest_fes: "Fès",
    dest_fes_sub: "La Capitale Spirituelle. Explorez la plus grande médina piétonne du monde et ses anciennes medersa.",
    dest_casablanca: "Casablanca",
    dest_casablanca_sub: "La Ville Blanche. Admirez la Mosquée Hassan II et explorez le hub cosmopolite du Maroc.",
    dest_rabat: "Rabat",
    dest_rabat_sub: "La Capitale Royale. Explorez la Tour Hassan, le Mausolée Mohammed V et l'antique Kasbah des Oudaias.",
    dest_essaouira: "Essaouira",
    dest_essaouira_sub: "La Cité des Vents. Un joyau atlantique aux remparts bleus, médina UNESCO et sports nautiques.",
    dest_tangier: "Tanger",
    dest_tangier_sub: "La Porte de l'Afrique. Où l'Europe rencontre l'Afrique — une ville de légendes et de panoramas marins.",
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
    desc_fes: "Plongez au cœur médiéval du Maroc dans Fès el-Bali, classée au patrimoine mondial de l'UNESCO. Explorez les ruelles labyrinthiques, visitez la plus ancienne université du monde Al-Qarawiyyin et admirez les célèbres tanneries.",
    desc_casablanca: "Vivez l'énergie vibrante de la capitale économique du Maroc. Découvrez la majestueuse Mosquée Hassan II, l'une des plus grandes au monde construite sur l'Atlantique, et profitez de la gastronomie et de la vie nocturne modernes.",
    desc_rabat: "Découvrez l'élégante capitale du Maroc. Admirez la Tour Hassan et le Mausolée Mohammed V, explorez la Kasbah des Oudaias sur l'océan, et flânez dans cette ville classée au patrimoine UNESCO.",
    desc_essaouira: "Évadez-vous sur la côte atlantique ventuse d'Essaouira. Explorez les remparts maritimes du XVIIIe siècle, flirtez avec le marché aux poissons, et profitez du kitesurf et du windsurf mondialement réputés.",
    desc_tangier: "Tenez-vous à la croisée de deux continents à Tanger. Admirez le détroit de Gibraltar depuis la Kasbah, perdez-vous dans la médina légendaire et découvrez le mélange unique de cultures marocaine et européenne.",
    test_header_title: "Ce que disent nos voyageurs",
    test_header_sub: "Des histoires vraies d'aventuriers qui ont exploré le Maroc avec nous.",
    test_1_quote: '"Le camp dans le Sahara a été le point fort de notre vie. Dormir sous les étoiles avec la musique berbère traditionnelle était magique !"',
    test_1_name: "Sarah M.",
    test_1_loc: "Londres, Royaume-Uni",
    test_2_quote: '"Chefchaouen nous a émerveillés. Les rues bleues, les randonnées et la nourriture incroyable \u2014 MedinaraTravel a planifié chaque détail."',
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
    faq_a5: "Absolument ! Nous nous spécialisons dans les voyages sur mesure. Dites-nous vos intérêts et nos experts créeront l'aventure parfaite.",
    tours_header_title: "Nos Forfaits",
    tours_header_sub: "Des itinéraires sur mesure conçus par des experts locaux.",
    tour_badge_pop: "Populaire",
    tour_badge_best: "Meilleur rapport",
    tour_badge_adv: "Premium",
    tour_from: "À partir de",
    tour_per_person: "/ personne",
    tour_1_name: "3 Jours — Sahara Express",
    tour_1_f1: "✓ Transport privé 4x4 depuis Marrakech",
    tour_1_f2: "✓ Trek chameau & camp de luxe au Sahara",
    tour_1_f3: "✓ Visite de Ouarzazate & Aït Benhaddou",
    tour_1_f4: "✓ Petit-déjeuner et dîner inclus",
    tour_2_name: "7 Jours — Villes Impériales",
    tour_2_f1: "✓ Marrakech, Fès, Meknès & Rabat",
    tour_2_f2: "✓ Riad boutique (4★)",
    tour_2_f3: "✓ Guide privé & véhicule climatisé",
    tour_2_f4: "✓ Petits-déjeuners & transferts aéroport",
    tour_3_name: "10 Jours — Grand Maroc",
    tour_3_f1: "✓ Villes impériales + Sahara + côte Atlantique",
    tour_3_f2: "✓ Atlas Mountains & journée à Essaouira",
    tour_3_f3: "✓ Riads 5★ & glamping Sahara de luxe",
    tour_3_f4: "✓ Guide privé, tous repas & transport",
    tour_badge_new: "Nouveau",
    tour_badge_nature: "Nature",
    tour_4_name: "Découverte du Désert de 4 Jours",
    tour_4_f1: "✓ Randonnée à dos de chameau au coucher du soleil à Merzouga",
    tour_4_f2: "✓ Expérience en camp du désert de luxe",
    tour_4_f3: "✓ Vallée du Dadès et Gorges de Todra",
    tour_4_f4: "✓ Musique traditionnelle berbère au feu de camp",
    tour_5_name: "Trek de 5 Jours dans l'Atlas",
    tour_5_f1: "✓ Trekking guidé dans le Haut Atlas",
    tour_5_f2: "✓ Camp de base du Mont Toubkal",
    tour_5_f3: "✓ Séjour dans d'authentiques villages berbères",
    tour_5_f4: "✓ Mules pour les bagages et guide local",
    tour_book: "Réserver ce tour",
    about_header_title: "Pourquoi MedinaraTravel ?",
    about_header_sub: "Une équipe de Marocains passionnés, dédiés à partager la beauté de notre pays.",
    about_p1: "Fondée à Marrakech, MedinaraTravel est née d'un amour profond pour la culture, les paysages et les gens du Maroc. Notre équipe crée des voyages inoubliables depuis plus de dix ans.",
    about_p2: "Nous croyons que le voyage doit être authentique, personnel et transformateur. Chaque itinéraire que nous concevons est adapté à vos intérêts.",
    about_stat1: "Tours Réalisés",
    about_stat2: "Ans d'Expérience",
    about_stat3: "Voyageurs Heureux",
    about_stat4: "Note Moyenne"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_dest: "الوجهات",
    nav_tours: "الجولات",
    nav_exp: "التجارب",
    nav_about: "عنا",
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
    dest_fes: "فاس",
    dest_fes_sub: "العاصمة الروحية. تجول في أكبر مدينة قديمة خالية من السيارات في العالم وزر مدارسها الأثرية.",
    dest_casablanca: "الدار البيضاء",
    dest_casablanca_sub: "المدينة البيضاء. أبهرك بمسجد الحسن الثاني واستكشف المركز الكوزموبوليتاني النابض بالحياة في المغرب.",
    dest_rabat: "الرباط",
    dest_rabat_sub: "العاصمة الملكية. استكشف صومعة حسان وضريح محمد الخامس وقصبة الودايا العريقة.",
    dest_essaouira: "الصويرة",
    dest_essaouira_sub: "مدينة الرياح. جوهرة أطلسية بأسوار زرقاء ومدينة يونسكو ورياضة ركوب الأمواج.",
    dest_tangier: "طنجة",
    dest_tangier_sub: "بوابة أفريقيا. حيث تلتقي أوروبا وأفريقيا — مدينة الأساطير والفن والمشاهد البحرية الخلابة.",
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
    desc_fes: "ادخل إلى القلب العريق لفاس البالي، مدينة التراث العالمي لليونسكو. استكشف الأزقة المتشعبة وزر جامعة القرويين الأقدم في العالم وشاهد المدابغ الشهيرة.",
    desc_casablanca: "اختبر الطاقة النابضة بالحياة في العاصمة الاقتصادية للمغرب. اكتشف مسجد الحسن الثاني المهيب المبني فوق المحيط الأطلسي واستمتع بأرقى المطاعم العصرية.",
    desc_rabat: "اكتشف عاصمة المغرب الراقية. أبهر صومعة حسان وضريح محمد الخامس وقصبة الودايا المشرفة على المحيط.",
    desc_essaouira: "استمتع بالساحل الأطلسي في الصويرة. استكشف أسوار البحر وسوق السمك وأزقة المدينة الزرقاء وممارسة رياضة ركوب الأمواج الشهيرة.",
    desc_tangier: "قف عند مفترق قارتين في طنجة. تمتع بمنظر مضيق جبل طارق من القصبة وضع في المدينة الأسطورية واستمتع بالمزيج الثقافي الفريد.",
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
    faq_a5: "بالتأكيد! نحن متخصصون في الرحلات المخصصة. أخبرنا باهتماماتك وسنصمم لك المغامرة المثالية.",
    tours_header_title: "باقات الرحلات",
    tours_header_sub: "برامج مصممة بعناية من خبراء محليين. اختر مغامرتك.",
    tour_badge_pop: "شائع",
    tour_badge_best: "الأفضل قيمة",
    tour_badge_adv: "مميز",
    tour_from: "ابتداءً من",
    tour_per_person: "للشخص",
    tour_1_name: "3 أيام — صحراء اكسبريس",
    tour_1_f1: "✓ نقل خاص 4x4 من مراكش",
    tour_1_f2: "✓ الجمال ومخيم فاخر في الصحراء",
    tour_1_f3: "✓ زيارة ورزازات وآيت بن حدو",
    tour_1_f4: "✓ الإفطار والعشاء مشمولان",
    tour_2_name: "7 أيام — المدن الإمبراطورية",
    tour_2_f1: "✓ مراكش، فاس، مكناس والرباط",
    tour_2_f2: "✓ رياض بوتيك (4★)",
    tour_2_f3: "✓ مرشد خاص وسيارة مكيفة",
    tour_2_f4: "✓ الإفطارات والتنقلات مشمولة",
    tour_3_name: "10 أيام — المغرب الكبير",
    tour_3_f1: "✓ مدن إمبراطورية + صحراء + ساحل أطلسي",
    tour_3_f2: "✓ جبال الأطلس & يوم على شاطئ الصويرة",
    tour_3_f3: "✓ رياض 5★ وغلامبينغ في الصحراء",
    tour_3_f4: "✓ مرشد خاص وجميع الوجبات & التنقل",
    tour_book: "احجز هذه الرحلة",
    about_header_title: "لماذا MedinaraTravel؟",
    about_header_sub: "فريق من المغاربة الشغوفين المكرسين لمشاركة جمال وطننا.",
    about_p1: "تأسست MedinaraTravel في مراكش من حب عميق لثقافة المغرب ومناظره وأهله. فريقنا يصمم رحلات لا تُنسى منذ أكثر من عقد.",
    about_p2: "نؤمن بأن السفر يجب أن يكون أصيلاً وشخصياً ومحولاً. كل برنامج نصممه مصمم حسب اهتماماتك.",
    about_stat1: "رحلة مكتملة",
    about_stat2: "سنوات خبرة",
    about_stat3: "مسافر سعيد",
    about_stat4: "متوسط التقييم"
  },
  nl: {
    nav_home: "Home",
    nav_dest: "Bestemmingen",
    nav_tours: "Reizen",
    nav_exp: "Ervaringen",
    nav_about: "Over ons",
    nav_plan: "Plan je reis",
    hero_title: "Ontdek de <br><span class=\"text-gradient\">Magie van Marokko</span>",
    hero_sub: "Dwaal door eeuwenoude medina's, adem de berglucht in en slaap onder de Saharasterren.",
    hero_btn_exp: "Ontdek bestemmingen",
    hero_btn_view: "Bekijk ervaringen",
    dest_header_title: "Populaire bestemmingen",
    dest_header_sub: "Ontdek de rijke geschiedenis en levendige kleuren van onze mooiste steden en landschappen.",
    dest_marrakech: "Marrakesh",
    dest_marrakech_sub: "De Rode Stad. Verdwaal in de bruisende souks en het levendige Djemaa el-Fna plein.",
    card_discover: "Ontdekken →",
    dest_chefchaouen: "Chefchaouen",
    dest_chefchaouen_sub: "De Blauwe Parel. Een rustig bergstadje beroemd om zijn schilderachtige blauw geschilderde gebouwen.",
    dest_sahara: "Sahara Woestijn",
    dest_sahara_sub: "Merzouga & verder. Rijd op kamelen over gouden duinen en kampeer onder een betoverende sterrenhemel.",
    dest_fes: "Fes",
    dest_fes_sub: "De Spirituele Hoofdstad. Dwaal door 's werelds grootste autovrije medina en eeuwenoude madrasas.",
    dest_casablanca: "Casablanca",
    dest_casablanca_sub: "De Witte Stad. Bewonder de Hassan II-moskee en ontdek Marokko's levendige kosmopolitische hub.",
    dest_rabat: "Rabat",
    dest_rabat_sub: "De Koninklijke Hoofdstad. Verken de Hassantoren, het mausoleum van Mohammed V en de oude Kasbah des Oudaias.",
    dest_essaouira: "Essaouira",
    dest_essaouira_sub: "De Windstad. Een Atlantisch juweel met blauwe wallen, een UNESCO medina en geweldig surfen.",
    dest_tangier: "Tanger",
    dest_tangier_sub: "Poort naar Afrika. Waar Europa Afrika ontmoet — een stad vol legendes, kunst en dramatische zeevergezichten.",
    exp_header_title: "Authentieke ervaringen",
    exp_header_sub: "Dompel jezelf onder in de lokale cultuur, keuken en tradities van Marokko.",
    exp_riad: "Verblijf in een traditionele Riad",
    exp_riad_sub: "Ervaar de rust van een traditioneel Marokkaans binnenplaatshuis. Achter bescheiden deuren in de kronkelende steegjes van de oude medina bevinden zich prachtige paleizen met ingewikkeld tegelwerk (Zellij), gebeeldhouwd pleisterwerk en vredige fonteinen.",
    exp_food: "Proef de Marokkaanse keuken",
    exp_food_sub: "Proef de wereldberoemde langzaam gegaarde tajines, luchtige couscous en verfrissende muntthee. De Marokkaanse keuken is een levendige mix van Arabische, Andalusische en Berberse tradities.",
    footer_desc: "Uw ultieme gids voor het verkennen van de ongeëvenaarde schoonheid en rijke cultuur van Marokko.",
    footer_quick: "Snelle links",
    footer_contact: "Contact",
    footer_email: "E-mail:",
    footer_phone: "Telefoon:",
    footer_address: "Adres:",
    modal_book_now: "Nu boeken",
    modal_form_intro: "Uitstekende keuze! We helpen u graag deze prachtige bestemming te ontdekken. Vertel ons over uw reisplannen en onze lokale experts zullen contact opnemen.",
    placeholder_name: "Volledige naam",
    placeholder_email: "E-mailadres",
    placeholder_phone: "Telefoonnummer",
    placeholder_guests: "Gasten",
    placeholder_msg: "Speciale verzoeken of bericht",
    modal_back: "Terug",
    modal_confirm: "Boeking bevestigen",
    modal_success_title: "Boeking bevestigd!",
    modal_success_desc: "We nemen binnenkort contact met u op met de details van uw reisplan. Maak u klaar voor een onvergetelijk Marokkaans avontuur!",
    desc_marrakech: "Ontdek het hart van Marokko in Marrakesh. Dwaal door de labyrintische medina, koop kruiden en kleurrijke textiel in de souks en geniet van de zonsondergang boven het bruisende Djemaa el-Fna plein.",
    desc_chefchaouen: "Ervaar de sereniteit in de Blauwe Parel van Marokko. Genesteld in het Rifgebergte staat Chefchaouen bekend om zijn opvallende blauw geschilderde gebouwen en ontspannen sfeer.",
    desc_sahara: "Ga op een onvergetelijk avontuur in de uitgestrekte Sahara. Rijd op kamelen door gouden duinen, luister naar traditionele Berbermuziek bij een kampvuur en slaap onder een betoverende sterrenhemel.",
    desc_fes: "Stap het middeleeuwse hart van Marokko binnen in Fes el-Bali, een UNESCO Werelderfgoedstad. Verken de labyrintische steegjes, bezoek de oudste universiteit ter wereld Al-Qarawiyyin en aanschouw de beroemde leerlooierijen.",
    desc_casablanca: "Ervaar de levendige energie van Marokko's economische hoofdstad. Ontdek de adembenemende Hassan II-moskee — een van 's werelds grootste moskeeën gebouwd boven de Atlantische Oceaan — en geniet van moderne Marokkaanse gastronomie.",
    desc_rabat: "Ontdek Marokko's elegante hoofdstad. Bewonder de Hassantoren en het Mausoleum van Mohammed V, verken de Kasbah des Oudaias aan de oceaan en wandel door deze UNESCO-stad.",
    desc_essaouira: "Ontsnap naar de winderige Atlantische kust van Essaouira. Verken de dramatische zeewallen, bezoek de vismarkt, dwaal door de blauwe medina en geniet van het wereldberoemde kitesurf- en windsurfscene.",
    desc_tangier: "Sta op het kruispunt van twee continenten in Tanger. Bewonder de Straat van Gibraltar vanuit de Kasbah, verdwaal in de legendarische medina en geniet van de unieke mix van Marokkaanse en Europese cultuur.",
    test_header_title: "Wat reizigers zeggen",
    test_header_sub: "Echte verhalen van echte avonturiers die Marokko met ons hebben ontdekt.",
    test_1_quote: '"Het Sahara woestijnkamp was het hoogtepunt van ons leven. Slapen onder de sterren met traditionele Berbermuziek was pure magie!"',
    test_1_name: "Sarah M.",
    test_1_loc: "Londen, VK",
    test_2_quote: '"Chefchaouen blies ons omver. De blauwe straten, de bergwandelingen en het ongelooflijke eten — MedinaraTravel plantte elk detail perfect."',
    test_2_name: "Jean D.",
    test_2_loc: "Parijs, Frankrijk",
    test_3_quote: '"Van de bruisende souks van Marrakesh tot de rustige riads — deze reis overtrof alle verwachtingen. We plannen al onze terugkeer!"',
    test_3_name: "Ahmed K.",
    test_3_loc: "Dubai, VAE",
    faq_header_title: "Veelgestelde vragen",
    faq_header_sub: "Alles wat u moet weten vóór uw Marokkaans avontuur.",
    faq_q1: 'Heb ik een visum nodig voor Marokko? <span class="faq-icon">+</span>',
    faq_a1: "Veel nationaliteiten kunnen Marokko visumloos bezoeken voor maximaal 90 dagen, waaronder burgers van de VS, het VK, EU, Canada en Australië.",
    faq_q2: 'Wanneer is de beste tijd om te bezoeken? <span class="faq-icon">+</span>',
    faq_a2: "De beste tijden zijn lente (maart–mei) en herfst (september–november) wanneer het weer warm maar aangenaam is. Zomers kan het erg heet zijn in de woestijn.",
    faq_q3: 'Zijn maaltijden inbegrepen in de tours? <span class="faq-icon">+</span>',
    faq_a3: "De meeste van onze pakketten zijn inclusief ontbijt en diner. De lunch is doorgaans voor eigen rekening zodat u lokale straatrestaurants kunt verkennen.",
    faq_q4: 'Is Marokko veilig voor soloreiziger? <span class="faq-icon">+</span>',
    faq_a4: "Ja! Marokko is een van de veiligste landen in Afrika voor toeristen. Onze gidsen zijn locals die de cultuur kennen.",
    faq_q5: 'Kan ik mijn reisplan aanpassen? <span class="faq-icon">+</span>',
    faq_a5: "Absoluut! We zijn gespecialiseerd in reizen op maat. Vertel ons uw interesses, budget en reisdata, en onze experts zullen een persoonlijk avontuur voor u samenstellen.",
    tours_header_title: "Onze tourpakketten",
    tours_header_sub: "Handgemaakte reisplannen ontworpen door lokale experts. Kies uw avontuur.",
    tour_badge_pop: "Populair",
    tour_badge_best: "Beste waarde",
    tour_badge_adv: "Premium",
    tour_from: "Vanaf",
    tour_per_person: "/ persoon",
    tour_1_name: "3-daagse Sahara Express",
    tour_1_f1: "✓ Privé 4x4 vervoer vanuit Marrakesh",
    tour_1_f2: "✓ Kameelrit & luxe Sahara kamp",
    tour_1_f3: "✓ Bezoek Ouarzazate & Aït Benhaddou",
    tour_1_f4: "✓ Ontbijt & diner inbegrepen",
    tour_2_name: "7-daagse Keizerlijke Steden",
    tour_2_f1: "✓ Marrakesh, Fes, Meknes & Rabat",
    tour_2_f2: "✓ Boutique riad accommodatie (4★)",
    tour_2_f3: "✓ Privégids & airconditioning voertuig",
    tour_2_f4: "✓ Alle ontbijten & luchthaventransfers",
    tour_3_name: "10-daags Groot Marokko",
    tour_3_f1: "✓ Keizerlijke steden + Sahara + Atlantische kust",
    tour_3_f2: "✓ Atlasgebergte & Essaouira stranddag",
    tour_3_f3: "✓ Luxe 5★ riads & glamping woestijnkamp",
    tour_3_f4: "✓ Privégids, alle maaltijden & vervoer",
    tour_badge_new: "Nieuw",
    tour_badge_nature: "Natuur",
    tour_4_name: "4-Daagse Woestijnontdekking",
    tour_4_f1: "✓ Kamelentocht bij zonsondergang in Merzouga",
    tour_4_f2: "✓ Luxe woestijnkamp ervaring",
    tour_4_f3: "✓ Dades Vallei & Todra Kloof",
    tour_4_f4: "✓ Traditionele Berbermuziek bij het kampvuur",
    tour_5_name: "5-Daagse Atlasgebergte Trekking",
    tour_5_f1: "✓ Begeleide trekking in de Hoge Atlas",
    tour_5_f2: "✓ Toubkal basiskamp",
    tour_5_f3: "✓ Verblijf in authentieke Berberdorpen",
    tour_5_f4: "✓ Muildieren voor bagage & lokale gids",
    tour_book: "Boek deze tour",
    about_header_title: "Waarom MedinaraTravel?",
    about_header_sub: "Wij zijn een team van gepassioneerde Marokkaanse locals die de schoonheid van ons thuisland willen delen.",
    about_p1: "MedinaraTravel werd opgericht in Marrakesh vanuit een diepe liefde voor de cultuur, landschappen en mensen van Marokko. Ons team van lokale gidsen en reisexperts maakt al meer dan tien jaar onvergetelijke reizen.",
    about_p2: "Wij geloven dat reizen authentiek, persoonlijk en transformerend moet zijn. Elk reisplan dat we ontwerpen is afgestemd op uw interesses — of u nu avontuur zoekt in de Sahara, rust in de bergen of onderdompeling in eeuwenoude medina's.",
    about_stat1: "Voltooide tours",
    about_stat2: "Jaar ervaring",
    about_stat3: "Blije reizigers",
    about_stat4: "Gemiddelde beoordeling"
  },
  de: {
    nav_home: "Startseite",
    nav_dest: "Reiseziele",
    nav_tours: "Touren",
    nav_exp: "Erlebnisse",
    nav_about: "Über uns",
    nav_plan: "Reise planen",
    hero_title: "Erleben Sie die <br><span class=\"text-gradient\">Magie Marokkos</span>",
    hero_sub: "Erkunden Sie uralte Medinas, atmen Sie die Bergluft und schlafen Sie unter den Sternen der Sahara.",
    hero_btn_exp: "Reiseziele entdecken",
    hero_btn_view: "Erlebnisse ansehen",
    dest_header_title: "Beliebte Reiseziele",
    dest_header_sub: "Entdecken Sie die reiche Geschichte und leuchtenden Farben unserer schönsten Städte und Landschaften.",
    dest_marrakech: "Marrakesch",
    dest_marrakech_sub: "Die Rote Stadt. Verlieren Sie sich in den belebten Souks und dem pulsierenden Djemaa el-Fna-Platz.",
    card_discover: "Entdecken →",
    dest_chefchaouen: "Chefchaouen",
    dest_chefchaouen_sub: "Die Blaue Perle. Ein ruhiges Bergstädtchen, berühmt für seine malerisch blauen Gebäude.",
    dest_sahara: "Sahara-Wüste",
    dest_sahara_sub: "Merzouga & darüber hinaus. Reiten Sie auf Kamelen über goldene Dünen und campen Sie unter einem atemberaubenden Sternenhimmel.",
    dest_fes: "Fès",
    dest_fes_sub: "Die Spirituelle Hauptstadt. Durchstreifen Sie die weltgrößte autofreie Medina und jahrhundertealte Medressen.",
    dest_casablanca: "Casablanca",
    dest_casablanca_sub: "Die Weiße Stadt. Bestaunen Sie die Hassan-II.-Moschee und erkunden Sie Marokkos lebendigen kosmopolitischen Knotenpunkt.",
    dest_rabat: "Rabat",
    dest_rabat_sub: "Die Königliche Hauptstadt. Erkunden Sie den Hassanturm, das Mausoleum Mohammeds V. und die historische Kasbah des Oudaias.",
    dest_essaouira: "Essaouira",
    dest_essaouira_sub: "Die Windstadt. Ein atlantisches Juwel mit blauen Stadtmauern, UNESCO-Medina und Weltklasse-Windsurfen.",
    dest_tangier: "Tanger",
    dest_tangier_sub: "Das Tor zu Afrika. Wo Europa Afrika trifft — eine Stadt voller Legenden, Kunst und dramatischer Meeresblicke.",
    exp_header_title: "Authentische Erlebnisse",
    exp_header_sub: "Tauchen Sie ein in die lokale Kultur, Küche und Traditionen Marokkos.",
    exp_riad: "In einem traditionellen Riad übernachten",
    exp_riad_sub: "Erleben Sie die Stille eines traditionellen marokkanischen Innenhofhauses. Hinter unscheinbaren Türen in den Gassen der alten Medina verbergen sich prächtige Paläste mit filigranem Zellij-Kacheln, geschnitztem Stuck und friedlichen Brunnen.",
    exp_food: "Marokkanische Küche genießen",
    exp_food_sub: "Kosten Sie die weltberühmten langsam gekochten Tajines, lockeren Couscous und erfrischenden Minztee. Die marokkanische Küche ist eine lebendige Mischung aus arabischen, andalusischen und Berbertradtionen.",
    footer_desc: "Ihr ultimativer Guide zur Entdeckung der unvergleichlichen Schönheit und reichen Kultur Marokkos.",
    footer_quick: "Schnelllinks",
    footer_contact: "Kontakt",
    footer_email: "E-Mail:",
    footer_phone: "Telefon:",
    footer_address: "Adresse:",
    modal_book_now: "Jetzt buchen",
    modal_form_intro: "Ausgezeichnete Wahl! Wir helfen Ihnen gerne, dieses wunderschöne Reiseziel zu entdecken. Erzählen Sie uns von Ihren Reiseplänen und unsere lokalen Experten werden sich bei Ihnen melden.",
    placeholder_name: "Vollständiger Name",
    placeholder_email: "E-Mail-Adresse",
    placeholder_phone: "Telefonnummer",
    placeholder_guests: "Gäste",
    placeholder_msg: "Sonderwünsche oder Nachricht",
    modal_back: "Zurück",
    modal_confirm: "Buchung bestätigen",
    modal_success_title: "Buchung bestätigt!",
    modal_success_desc: "Wir werden uns bald mit Ihren Reiseplandetails bei Ihnen melden. Machen Sie sich bereit für ein unvergessliches Marokko-Abenteuer!",
    desc_marrakech: "Entdecken Sie das Herz Marokkos in Marrakesch. Schlendern Sie durch die labyrinthische Medina, kaufen Sie Gewürze und bunte Textilien in den Souks und genießen Sie den Sonnenuntergang über dem belebten Djemaa el-Fna-Platz.",
    desc_chefchaouen: "Erleben Sie die Ruhe in der Blauen Perle Marokkos. Eingebettet in das Rifgebirge ist Chefchaouen für seine auffallend blau gestrichenen Gebäude und die entspannte Atmosphäre bekannt.",
    desc_sahara: "Begeben Sie sich auf ein unvergessliches Abenteuer in die weitläufige Sahara. Reiten Sie auf Kamelen über goldene Dünen, lauschen Sie traditioneller Berbermusik am Lagerfeuer und schlafen Sie unter einem zauberhaften Sternenhimmel.",
    desc_fes: "Treten Sie in das mittelalterliche Herz Marokkos in Fes el-Bali ein, einer UNESCO-Welterbestadt. Erkunden Sie die labyrinthischen Gassen, besuchen Sie die älteste Universität der Welt Al-Qarawiyyin und erleben Sie die berühmten Gerbereien.",
    desc_casablanca: "Erleben Sie die pulsierende Energie von Marokkos Wirtschaftshauptstadt. Entdecken Sie die atemberaubende Hassan-II.-Moschee, eine der größten Moscheen der Welt, die über dem Atlantik erbaut wurde, und genießen Sie moderne Küche und Nightlife.",
    desc_rabat: "Entdecken Sie Marokkos elegante Hauptstadt. Bestaunen Sie den Hassanturm und das Mausoleum Mohammeds V., erkunden Sie die Kasbah des Oudaias am Meer und bummeln Sie durch diese UNESCO-Stadt.",
    desc_essaouira: "Entfliehen Sie an die windige Atlantikküste von Essaouira. Erkunden Sie die dramatischen Seemauern, besuchen Sie den Fischmarkt, schlendern Sie durch die blaue Medina und erleben Sie das weltberühmte Kitesurf-Treiben.",
    desc_tangier: "Stehen Sie am Schnittpunkt zweier Kontinente in Tanger. Bewundern Sie die Straße von Gibraltar von der Kasbah aus, verlieren Sie sich in der legendären Medina und genießen Sie die einzigartige Mischung marokkanischer und europäischer Kultur.",
    test_header_title: "Was Reisende sagen",
    test_header_sub: "Echte Geschichten echter Abenteurer, die Marokko mit uns erkundet haben.",
    test_1_quote: '"Das Sahara-Wüstencamp war der Höhepunkt unseres Lebens. Unter den Sternen mit traditioneller Berbermusik zu schlafen war pure Magie!"',
    test_1_name: "Sarah M.",
    test_1_loc: "London, UK",
    test_2_quote: '"Chefchaouen hat uns umgehauen. Die blauen Gassen, die Bergwanderungen und das unglaubliche Essen — MedinaraTravel hat jedes Detail perfekt geplant."',
    test_2_name: "Jean D.",
    test_2_loc: "Paris, Frankreich",
    test_3_quote: '"Von den belebten Souks Marrakeschs bis zu den friedlichen Riads — diese Reise hat alle Erwartungen übertroffen. Wir planen bereits unsere Rückkehr!"',
    test_3_name: "Ahmed K.",
    test_3_loc: "Dubai, VAE",
    faq_header_title: "Häufig gestellte Fragen",
    faq_header_sub: "Alles, was Sie vor Ihrem Marokko-Abenteuer wissen müssen.",
    faq_q1: 'Benötige ich ein Visum für Marokko? <span class="faq-icon">+</span>',
    faq_a1: "Viele Nationalitäten können Marokko visumfrei für bis zu 90 Tage einreisen, darunter Bürger aus den USA, UK, EU, Kanada und Australien. Bitte informieren Sie sich bei Ihrer Botschaft.",
    faq_q2: 'Wann ist die beste Reisezeit? <span class="faq-icon">+</span>',
    faq_a2: "Am besten reist man im Frühling (März–Mai) und Herbst (September–November), wenn das Wetter warm aber angenehm ist. Sommer kann in der Wüste sehr heiß sein, Winter ist ideal für die Sahara.",
    faq_q3: 'Sind Mahlzeiten in den Touren enthalten? <span class="faq-icon">+</span>',
    faq_a3: "Die meisten unserer Pakete beinhalten Frühstück und Abendessen. Das Mittagessen ist in der Regel selbst zu organisieren, damit Sie lokale Straßenküche und Restaurants erkunden können.",
    faq_q4: 'Ist Marokko sicher für Alleinreisende? <span class="faq-icon">+</span>',
    faq_a4: "Ja! Marokko ist eines der sichersten Länder Afrikas für Touristen. Unsere Guides sind Einheimische, die Kultur, Gelände und Best Practices kennen, um Ihnen ein sicheres Erlebnis zu garantieren.",
    faq_q5: 'Kann ich mein Reiseprogramm anpassen? <span class="faq-icon">+</span>',
    faq_a5: "Absolut! Wir sind auf maßgeschneiderte Reisen spezialisiert. Teilen Sie uns Ihre Interessen, Ihr Budget und Ihre Reisedaten mit, und unsere Experten gestalten ein persönliches Abenteuer für Sie.",
    tours_header_title: "Unsere Reisepakete",
    tours_header_sub: "Handverlesene Reiserouten von lokalen Experten. Wählen Sie Ihr Abenteuer.",
    tour_badge_pop: "Beliebt",
    tour_badge_best: "Bestes Preis-Leistungs-Verhältnis",
    tour_badge_adv: "Premium",
    tour_from: "Ab",
    tour_per_person: "/ Person",
    tour_1_name: "3-Tage Sahara Express",
    tour_1_f1: "✓ Privater 4x4-Transport aus Marrakesch",
    tour_1_f2: "✓ Kamelritt & Luxus-Saharacamp",
    tour_1_f3: "✓ Besuch in Ouarzazate & Aït Benhaddou",
    tour_1_f4: "✓ Frühstück & Abendessen inklusive",
    tour_2_name: "7-Tage Kaiserstädte",
    tour_2_f1: "✓ Marrakesch, Fès, Meknès & Rabat",
    tour_2_f2: "✓ Boutique-Riad-Unterkunft (4★)",
    tour_2_f3: "✓ Privatführer & klimatisiertes Fahrzeug",
    tour_2_f4: "✓ Alle Frühstücke & Flughafentransfers",
    tour_3_name: "10-Tage Großes Marokko",
    tour_3_f1: "✓ Kaiserstädte + Sahara + Atlantikküste",
    tour_3_f2: "✓ Atlasgebirge & Essaouira Strandtag",
    tour_3_f3: "✓ Luxus 5★ Riads & Glamping-Wüstencamp",
    tour_3_f4: "✓ Privatführer, alle Mahlzeiten & Transport",
    tour_badge_new: "Neu",
    tour_badge_nature: "Natur",
    tour_4_name: "4-Tägige Wüstenentdeckung",
    tour_4_f1: "✓ Kamelritt bei Sonnenuntergang in Merzouga",
    tour_4_f2: "✓ Erlebnis in einem Luxus-Wüstencamp",
    tour_4_f3: "✓ Dadesschlucht & Todra-Schlucht",
    tour_4_f4: "✓ Traditionelle Berbermusik am Lagerfeuer",
    tour_5_name: "5-Tägiges Atlasgebirge-Trekking",
    tour_5_f1: "✓ Geführtes Trekking im Hohen Atlas",
    tour_5_f2: "✓ Toubkal Basislager",
    tour_5_f3: "✓ Übernachtung in authentischen Berberdörfern",
    tour_5_f4: "✓ Maultiere für Gepäck & lokaler Reiseführer",
    tour_book: "Diese Tour buchen",
    about_header_title: "Warum MedinaraTravel?",
    about_header_sub: "Wir sind ein Team leidenschaftlicher marokkanischer Einheimischer, die die Schönheit unserer Heimat teilen möchten.",
    about_p1: "MedinaraTravel wurde in Marrakesch aus tiefer Liebe zur Kultur, den Landschaften und Menschen Marokkos gegründet. Unser Team lokaler Guides und Reiseexperten gestaltet seit über einem Jahrzehnt unvergessliche Reisen.",
    about_p2: "Wir glauben, dass Reisen authentisch, persönlich und transformierend sein sollte. Jede Reiseroute, die wir entwerfen, ist auf Ihre Interessen zugeschnitten — ob Abenteuer in der Sahara, Ruhe in den Bergen oder Eintauchen in uralte Medinas.",
    about_stat1: "Abgeschlossene Touren",
    about_stat2: "Jahre Erfahrung",
    about_stat3: "Glückliche Reisende",
    about_stat4: "Durchschnittliche Bewertung"
  },
  it: {
    nav_home: "Home",
    nav_dest: "Destinazioni",
    nav_tours: "Tour",
    nav_exp: "Esperienze",
    nav_about: "Chi siamo",
    nav_plan: "Pianifica il viaggio",
    hero_title: "Vivi la <br><span class=\"text-gradient\">Magia del Marocco</span>",
    hero_sub: "Viaggia tra antiche medine, respira l'aria di montagna e dormi sotto le stelle del Sahara.",
    hero_btn_exp: "Esplora destinazioni",
    hero_btn_view: "Scopri esperienze",
    dest_header_title: "Destinazioni Popolari",
    dest_header_sub: "Scopri la ricca storia e i colori vibranti delle nostre città e paesaggi più amati.",
    dest_marrakech: "Marrakech",
    dest_marrakech_sub: "La Città Rossa. Perditi nei souk animati e nella vivace piazza Djemaa el-Fna.",
    card_discover: "Scopri →",
    dest_chefchaouen: "Chefchaouen",
    dest_chefchaouen_sub: "La Perla Blu. Una tranquilla cittadina di montagna famosa per i suoi pittoreschi edifici tinteggiati di blu.",
    dest_sahara: "Deserto del Sahara",
    dest_sahara_sub: "Merzouga e dintorni. Cavalca dromedari sulle dune dorate e accampati sotto un cielo stellato mozzafiato.",
    dest_fes: "Fes",
    dest_fes_sub: "La Capitale Spirituale. Passeggia nella più grande medina pedonale del mondo e tra le antiche madrasse.",
    dest_casablanca: "Casablanca",
    dest_casablanca_sub: "La Città Bianca. Ammira la Moschea Hassan II e scopri il vivace hub cosmopolita del Marocco.",
    dest_rabat: "Rabat",
    dest_rabat_sub: "La Capitale Reale. Esplora la Torre Hassan, il Mausoleo di Mohammed V e l'antica Kasbah des Oudaias.",
    dest_essaouira: "Essaouira",
    dest_essaouira_sub: "La Città del Vento. Un gioiello atlantico con bastioni blu, medina UNESCO e windsurf di livello mondiale.",
    dest_tangier: "Tangeri",
    dest_tangier_sub: "Il Gateway per l'Africa. Dove l'Europa incontra l'Africa — città di leggende, arte e viste sul mare mozzafiato.",
    exp_header_title: "Esperienze Autentiche",
    exp_header_sub: "Immergiti nella cultura locale, nella cucina e nelle tradizioni del Marocco.",
    exp_riad: "Soggiorna in un Riad Tradizionale",
    exp_riad_sub: "Vivi la tranquillità di una tradizionale casa con cortile marocchina. Dietro porte umili nei vicoli tortuosi della vecchia medina si celano palazzi splendidi con intricati mosaici (Zellij), intonaco scolpito e fontane tranquille.",
    exp_food: "Assapora la Cucina Marocchina",
    exp_food_sub: "Gusta i celebri tajine a cottura lenta, il couscous soffice e il rinfrescante tè alla menta. La cucina marocchina è un vivace mix di tradizioni arabe, andaluse e berbere con complesse miscele di spezie.",
    footer_desc: "La tua guida definitiva per esplorare la bellezza ineguagliabile e la ricca cultura del Marocco.",
    footer_quick: "Link rapidi",
    footer_contact: "Contattaci",
    footer_email: "Email:",
    footer_phone: "Telefono:",
    footer_address: "Indirizzo:",
    modal_book_now: "Prenota ora",
    modal_form_intro: "Scelta eccellente! Siamo lieti di aiutarti a esplorare questa bellissima destinazione. Dicci qualcosa dei tuoi piani di viaggio e i nostri esperti locali ti contatteranno per creare l'itinerario perfetto.",
    placeholder_name: "Nome completo",
    placeholder_email: "Indirizzo email",
    placeholder_phone: "Numero di telefono",
    placeholder_guests: "Ospiti",
    placeholder_msg: "Richieste speciali o messaggio",
    modal_back: "Indietro",
    modal_confirm: "Conferma prenotazione",
    modal_success_title: "Prenotazione confermata!",
    modal_success_desc: "Ti contatteremo presto con i dettagli del tuo itinerario. Preparati per un'indimenticabile avventura marocchina!",
    desc_marrakech: "Scopri il cuore del Marocco a Marrakech. Passeggia nel labirintico medina, acquista spezie e tessuti colorati nei souk e guarda il tramonto sulla vivace piazza Djemaa el-Fna. Prenota oggi un lussuoso riad o un'escursione nel deserto.",
    desc_chefchaouen: "Sperimenta la serenità nella Perla Blu del Marocco. Incastonata nelle montagne del Rif, Chefchaouen è rinomata per i suoi edifici blu, l'atmosfera rilassata e gli incredibili sentieri di montagna.",
    desc_sahara: "Parti per un'avventura indimenticabile nell'immenso Sahara. Cavalca dromedari tra le dune dorate, ascolta la musica berbera tradizionale attorno a un falò e dormi sotto un meraviglioso cielo stellato.",
    desc_fes: "Entra nel cuore medievale del Marocco a Fes el-Bali, città Patrimonio UNESCO. Esplora i vicoli labirintici, visita la più antica università del mondo Al-Qarawiyyin e osserva le famose concerie di pelle.",
    desc_casablanca: "Vivi l'energia vibrante della capitale economica del Marocco. Scopri la mozzafiato Moschea Hassan II, una delle più grandi al mondo costruita sull'Oceano Atlantico, e goditi la moderna gastronomia marocchina.",
    desc_rabat: "Scopri l'elegante capitale del Marocco. Ammira la Torre Hassan e il Mausoleo di Mohammed V, esplora la Kasbah des Oudaias sull'oceano e passeggia per questa città patrimonio UNESCO.",
    desc_essaouira: "Fuggi sulla ventosa costa atlantica di Essaouira. Esplora le drammatiche mura marittime del XVIII secolo, visita il vivace mercato del pesce, passeggia tra i vicoli blu della medina e vivi la scena del kitesurf.",
    desc_tangier: "Fermati all'incrocio di due continenti a Tangeri. Ammira lo Stretto di Gibilterra dalla Kasbah, perditi nella leggendaria medina e assapora l'unica miscela di cultura marocchina ed europea.",
    test_header_title: "Cosa dicono i viaggiatori",
    test_header_sub: "Storie vere di veri avventurieri che hanno esplorato il Marocco con noi.",
    test_1_quote: '"Il campo nel deserto del Sahara è stato il momento più bello della nostra vita. Dormire sotto le stelle con la musica berbera tradizionale era pura magia!"',
    test_1_name: "Sarah M.",
    test_1_loc: "Londra, UK",
    test_2_quote: '"Chefchaouen ci ha stupito. Le strade blu, le escursioni in montagna e il cibo incredibile — MedinaraTravel ha curato ogni dettaglio alla perfezione."',
    test_2_name: "Jean D.",
    test_2_loc: "Parigi, Francia",
    test_3_quote: '"Dai souk animati di Marrakech ai tranquilli riad — questo viaggio ha superato ogni aspettativa. Stiamo già pianificando il nostro ritorno!"',
    test_3_name: "Ahmed K.",
    test_3_loc: "Dubai, EAU",
    faq_header_title: "Domande frequenti",
    faq_header_sub: "Tutto quello che devi sapere prima della tua avventura marocchina.",
    faq_q1: 'Ho bisogno del visto per visitare il Marocco? <span class="faq-icon">+</span>',
    faq_a1: "Molte nazionalità possono entrare in Marocco senza visto per un massimo di 90 giorni, inclusi cittadini di USA, UK, UE, Canada e Australia. Verifica con la tua ambasciata locale.",
    faq_q2: 'Quando è il periodo migliore per visitare? <span class="faq-icon">+</span>',
    faq_a2: "I periodi migliori sono la primavera (marzo–maggio) e l'autunno (settembre–novembre) quando il clima è caldo ma piacevole. L'estate può essere molto calda nel deserto, mentre l'inverno è ideale per il Sahara.",
    faq_q3: 'I pasti sono inclusi nei tour? <span class="faq-icon">+</span>',
    faq_a3: "La maggior parte dei nostri pacchetti include colazione e cena. Il pranzo è solitamente a propria scelta così da poter esplorare lo street food e i ristoranti locali.",
    faq_q4: 'Il Marocco è sicuro per i viaggiatori solitari? <span class="faq-icon">+</span>',
    faq_a4: "Sì! Il Marocco è uno dei paesi più sicuri dell'Africa per i turisti. Le nostre guide sono locali che conoscono cultura, territorio e pratiche migliori per garantire un'esperienza sicura e arricchente.",
    faq_q5: 'Posso personalizzare il mio itinerario? <span class="faq-icon">+</span>',
    faq_a5: "Assolutamente! Siamo specializzati in viaggi su misura. Dicci i tuoi interessi, il budget e le date di viaggio, e i nostri esperti creeranno un'avventura personalizzata solo per te.",
    tours_header_title: "I nostri pacchetti tour",
    tours_header_sub: "Itinerari artigianali progettati da esperti locali. Scegli la tua avventura.",
    tour_badge_pop: "Popolare",
    tour_badge_best: "Miglior rapporto qualità-prezzo",
    tour_badge_adv: "Premium",
    tour_from: "Da",
    tour_per_person: "/ persona",
    tour_1_name: "3 giorni — Sahara Express",
    tour_1_f1: "✓ Trasporto privato 4x4 da Marrakech",
    tour_1_f2: "✓ Escursione in cammello & campo lusso nel Sahara",
    tour_1_f3: "✓ Visita Ouarzazate & Aït Benhaddou",
    tour_1_f4: "✓ Colazione & cena incluse",
    tour_2_name: "7 giorni — Città Imperiali",
    tour_2_f1: "✓ Marrakech, Fès, Meknès & Rabat",
    tour_2_f2: "✓ Sistemazione in riad boutique (4★)",
    tour_2_f3: "✓ Guida privata & veicolo con aria condizionata",
    tour_2_f4: "✓ Tutte le colazioni & transfer aeroportuali",
    tour_3_name: "10 giorni — Gran Marocco",
    tour_3_f1: "✓ Città imperiali + Sahara + costa atlantica",
    tour_3_f2: "✓ Montagne dell'Atlante & giornata a Essaouira",
    tour_3_f3: "✓ Lussuosi riad 5★ & glamping nel deserto",
    tour_3_f4: "✓ Guida privata, tutti i pasti & trasporto",
    tour_badge_new: "Nuovo",
    tour_badge_nature: "Natura",
    tour_4_name: "Scoperta del Deserto di 4 Giorni",
    tour_4_f1: "✓ Escursione a dorso di cammello al tramonto a Merzouga",
    tour_4_f2: "✓ Esperienza in campo tendato di lusso",
    tour_4_f3: "✓ Valle del Dades e Gole del Todra",
    tour_4_f4: "✓ Musica berbera tradizionale attorno al fuoco",
    tour_5_name: "Trekking nell'Atlante di 5 Giorni",
    tour_5_f1: "✓ Trekking guidato nell'Alto Atlante",
    tour_5_f2: "✓ Campo base del Monte Toubkal",
    tour_5_f3: "✓ Soggiorno in autentici villaggi berberi",
    tour_5_f4: "✓ Muli per i bagagli e guida locale",
    tour_book: "Prenota questo tour",
    about_header_title: "Perché MedinaraTravel?",
    about_header_sub: "Siamo un team di appassionati locali marocchini dediti a condividere la bellezza della nostra terra.",
    about_p1: "Fondata a Marrakech, MedinaraTravel è nata da un profondo amore per la cultura, i paesaggi e le persone del Marocco. Il nostro team di guide locali ed esperti di viaggio crea viaggi indimenticabili da oltre un decennio.",
    about_p2: "Crediamo che il viaggio debba essere autentico, personale e trasformativo. Ogni itinerario che progettiamo è cucito sui tuoi interessi — che tu cerchi avventura nel Sahara, tranquillità tra le montagne o immersione nelle antiche medine.",
    about_stat1: "Tour completati",
    about_stat2: "Anni di esperienza",
    about_stat3: "Viaggiatori felici",
    about_stat4: "Valutazione media"
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
    },
    'Fes': {
      img: '/city_fes.png',
      i18nKey: 'desc_fes'
    },
    'Casablanca': {
      img: '/city_casablanca.png',
      i18nKey: 'desc_casablanca'
    },
    'Rabat': {
      img: '/city_rabat.png',
      i18nKey: 'desc_rabat'
    },
    'Essaouira': {
      img: '/city_essaouira.png',
      i18nKey: 'desc_essaouira'
    },
    'Tangier': {
      img: '/city_tangier.png',
      i18nKey: 'desc_tangier'
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

  // Book This Tour buttons → open booking modal directly
  document.querySelectorAll('.tour-book-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourName = btn.closest('.tour-card').querySelector('h3').textContent;
      modalTitle.textContent = tourName;
      modalImg.src = '/hero_sahara.png';
      modalImg.alt = tourName;

      modalInfoView.style.display = 'none';
      modalFormView.style.display = 'block';
      bookingForm.style.display = 'block';
      bookingSuccess.style.display = 'none';
      modalBackBtn.style.display = 'none';
      bookingForm.reset();

      modal.classList.add('active');
    });
  });

  // Initialize Tour Swiper
  if (typeof Swiper !== 'undefined') {
    const tourSwiper = new Swiper('.tour-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });
  }
});
