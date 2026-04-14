import './style.css'

document.addEventListener('DOMContentLoaded', () => {
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
  
  const cardLinks = document.querySelectorAll('.card-link');
  
  const destinationData = {
    'Marrakech': {
      img: '/city_marrakech.png',
      desc: 'Discover the heart of Morocco in Marrakech. Wander through the maze-like medina, shop for spices and colorful textiles in the souks, and watch the sun set over the bustling Djemaa el-Fna square. Book a luxury riad or a guided desert expedition today.'
    },
    'Chefchaouen': {
      img: '/city_chefchaouen.png',
      desc: 'Experience serenity in the Blue Pearl of Morocco. Nestled in the Rif Mountains, Chefchaouen is renowned for its striking, blue-washed buildings, relaxed atmosphere, and incredible mountain hiking paths. Plan your tranquil getaway now.'
    },
    'Sahara Desert': {
      img: '/hero_sahara.png',
      desc: 'Embark on an unforgettable adventure into the vast Sahara Desert. Ride camels across golden dunes, listen to traditional Berber music around a campfire, and sleep under a mesmerizing canopy of stars in a luxury desert camp.'
    }
  };

  function openModal(title, img, desc) {
    modalTitle.textContent = title;
    modalImg.src = img;
    modalImg.alt = title;
    modalDesc.textContent = desc;
    modal.classList.add('active');
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  cardLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const card = link.closest('.destination-card');
      const title = card.querySelector('h3').textContent;
      
      const data = destinationData[title] || {
        img: card.querySelector('img').src,
        desc: 'Detailed itinerary and booking options for this amazing destination are currently being prepared.'
      };
      
      openModal(title, data.img, data.desc);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  modalBookBtn.addEventListener('click', closeModal);
});
