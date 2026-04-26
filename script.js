/* TangoTrack — script.js */

const EMAILJS_SERVICE_ID  = 'service_8ogk0rq';
const EMAILJS_TEMPLATE_ID = 'template_bxn1coy';
const EMAILJS_PUBLIC_KEY  = 'yLAcbddLzRPXMMcYj';

document.addEventListener('DOMContentLoaded', () => {

  /* ── EmailJS init ── */
  emailjs.init(EMAILJS_PUBLIC_KEY);

  /* ── Scroll Reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => io.observe(el));

  /* ── Nav shadow on scroll ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), { passive: true });

  /* ── Mobile menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    const s = hamburger.querySelectorAll('span');
    if (open) { s[0].style.transform='translateY(7px) rotate(45deg)'; s[1].style.opacity='0'; s[2].style.transform='translateY(-7px) rotate(-45deg)'; }
    else       { s[0].style.transform=''; s[1].style.opacity=''; s[2].style.transform=''; }
  });
  document.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const s = hamburger.querySelectorAll('span');
    s[0].style.transform=''; s[1].style.opacity=''; s[2].style.transform='';
  }));

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
    });
  });

  /* ────────────────────────────────────────
     MODAL
  ──────────────────────────────────────── */
  const overlay     = document.getElementById('modalOverlay');
  const modalTitle  = document.getElementById('modalTitle');
  const modalSub    = document.getElementById('modalSubtitle');
  const modalClose  = document.getElementById('modalClose');
  const form        = document.getElementById('contactForm');
  const successEl   = document.getElementById('modalSuccess');
  const submitBtn   = document.getElementById('submitBtn');
  const submitText  = document.getElementById('submitText');
  const submitSpin  = document.getElementById('submitSpin');

  const CTA = {
    demo: {
      title:    'Book Your Demo',
      subtitle: "Tell us about your team and we'll arrange a personalised demo.",
      msgHint:  'Tell us about your team size and what you hope to achieve…',
      type:     'Book a Demo'
    },
    contact: {
      title:    'Get in Touch',
      subtitle: "Have a question? We'd love to hear from you.",
      msgHint:  'What would you like to know about TangoTrack?',
      type:     'Contact Us'
    }
  };

  function openModal(key) {
    const c = CTA[key] || CTA.demo;
    modalTitle.textContent = c.title;
    modalSub.textContent   = c.subtitle;
    document.getElementById('inputMessage').placeholder = c.msgHint;
    overlay.dataset.ctaType = c.type;
    /* reset */
    form.reset();
    form.style.display = '';
    successEl.classList.remove('show');
    document.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => el.classList.remove('error'));
    submitBtn.disabled = false;
    submitText.style.display = '';
    submitSpin.style.display = 'none';
    /* open */
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('inputName').focus(), 300);
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* Trigger open on any .cta-btn */
  document.querySelectorAll('.cta-btn').forEach(btn =>
    btn.addEventListener('click', () => openModal(btn.dataset.cta))
  );

  /* Close triggers */
  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });

  /* ── Validation helper ── */
  function validate(inputId, errorId, checkFn) {
    const inp = document.getElementById(inputId);
    const err = document.getElementById(errorId);
    const ok  = checkFn(inp.value.trim());
    inp.classList.toggle('error', !ok);
    err.classList.toggle('show', !ok);
    return ok;
  }

  /* ── Form submit ── */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const okName    = validate('inputName',    'nameError',    v => v.length > 0);
    const okCompany = validate('inputCompany', 'companyError', v => v.length > 0);
    const okEmail   = validate('inputEmail',   'emailError',   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    if (!okName || !okCompany || !okEmail) return;

    /* Sending state */
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitSpin.style.display = 'inline';

    const params = {
      cta_type:   overlay.dataset.ctaType,
      from_name:  document.getElementById('inputName').value.trim(),
      company:    document.getElementById('inputCompany').value.trim(),
      from_email: document.getElementById('inputEmail').value.trim(),
      mobile:     document.getElementById('inputMobile').value.trim() || 'Not provided',
      message:    document.getElementById('inputMessage').value.trim() || '(no message)',
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
      form.style.display = 'none';
      successEl.classList.add('show');
      setTimeout(closeModal, 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      submitBtn.disabled = false;
      submitText.style.display = '';
      submitSpin.style.display = 'none';
      alert('Something went wrong. Please try again or email us directly.');
    }
  });

  /* ── Live validation on blur ── */
  document.getElementById('inputName').addEventListener('blur',    () => validate('inputName',    'nameError',    v => v.length > 0));
  document.getElementById('inputCompany').addEventListener('blur', () => validate('inputCompany', 'companyError', v => v.length > 0));
  document.getElementById('inputEmail').addEventListener('blur',   () => validate('inputEmail',   'emailError',   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)));

});
