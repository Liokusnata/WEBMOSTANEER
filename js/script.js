// script.js

// Tunggu sampai semua elemen dimuat
document.addEventListener('DOMContentLoaded', () => {
  setupContactFormValidation();
  addScrollTopButton();
});

// Fungsi: Validasi form kontak
function setupContactFormValidation() {
  const contactForm = document.querySelector('.contact-form form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Harap lengkapi semua kolom!');
      e.preventDefault();
    } else if (!validateEmail(email)) {
      alert('Format email tidak valid!');
      e.preventDefault();
    }
  });
}

// Fungsi: Validasi email sederhana
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Fungsi: Tambahkan tombol scroll ke atas
function addScrollTopButton() {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerText = '↑';
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    fontSize: '20px',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: '#1e7d68',
    color: '#fff',
    cursor: 'pointer',
    display: 'none',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    zIndex: '999'
  });
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
function sendToWhatsApp() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Harap lengkapi semua kolom!');
    return;
  }

  const whatsappNumber = '6283875222635';
  const text = `Halo, saya ingin menghubungi:\n\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
}
