// ── PAGE NAVIGATION ───────────────────────────────────────────────────────────
function showPage(id) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show the target page
    document.getElementById('page-' + id).classList.add('active');

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.dataset.page === id);
    });

    // Close mobile nav if open
    document.getElementById('navLinks').classList.remove('open');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger fade-in animations for the new page
    setTimeout(() => {
        document.querySelectorAll('#page-' + id + ' .fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// ── MOBILE NAV TOGGLE ─────────────────────────────────────────────────────────
function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
}

// ── SCROLL REVEAL (Intersection Observer) ─────────────────────────────────────
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── INITIAL PAGE LOAD ─────────────────────────────────────────────────────────
// Trigger animations for the home page on first load
setTimeout(() => {
    document.querySelectorAll('#page-home .fade-in').forEach(el => {
        el.classList.add('visible');
    });
}, 300);

// ── CONTACT FORM SUBMIT ───────────────────────────────────────────────────────
function handleContactSubmit() {
    const name = document.getElementById('c-name').value.trim();
    const email = document.getElementById('c-email').value.trim();
    const subject = document.getElementById('c-subject').value;
    const message = document.getElementById('c-message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Placeholder — wire up to a backend or service like EmailJS here
    alert('Message sent! Thanks, ' + name + '. Dewmini will get back to you shortly.');
    document.getElementById('c-name').value = '';
    document.getElementById('c-email').value = '';
    document.getElementById('c-subject').value = '';
    document.getElementById('c-message').value = '';
}

// ── NEWSLETTER SUBMIT ─────────────────────────────────────────────────────────
function handleNewsletterSubmit() {
    const input = document.querySelector('.newsletter-input');
    const email = input.value.trim();

    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    // Placeholder — wire up to Mailchimp, ConvertKit, etc.
    alert('You\'re subscribed! Welcome aboard.');
    input.value = '';
}