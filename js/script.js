/* ============================================================
   Provia Company — Main Script
   ============================================================ */

(function () {
    'use strict';

    /* ---------- AOS — init early so elements don't flash off-screen ---------- */
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 80,
            });
        }
    });

    /* ---------- Page Loader ---------- */
    window.addEventListener('load', () => {
        const loader = document.getElementById('pageLoader');
        if (loader) {
            setTimeout(() => loader.classList.add('hide'), 400);
        }

        animateCounters();
    });

    /* ---------- Navbar scroll & active link ---------- */
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const backToTop = document.getElementById('backToTop');

    function onScroll() {
        const y = window.scrollY;

        if (navbar) {
            navbar.classList.toggle('scrolled', y > 30);
        }

        if (backToTop) {
            backToTop.classList.toggle('show', y > 500);
        }

        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (y >= top) current = sec.id;
        });
        if (current) {
            navLinks.forEach(l => {
                l.classList.toggle('active', l.getAttribute('href') === '#' + current);
            });
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Hamburger ---------- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        navMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    /* ---------- Smooth scroll fallback ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href === '#' || href.length < 2) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.scrollY - 70;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ---------- Back to top ---------- */
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- Counter animation ---------- */
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.dataset.count, 10) || 0;
                const duration = 1800;
                const start = performance.now();
                function tick(now) {
                    const p = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - p, 3);
                    el.textContent = Math.floor(eased * target);
                    if (p < 1) requestAnimationFrame(tick);
                    else el.textContent = target;
                }
                requestAnimationFrame(tick);
                observer.unobserve(el);
            });
        }, { threshold: 0.4 });

        counters.forEach(c => observer.observe(c));
    }

    /* ---------- Portfolio filter ---------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const f = btn.dataset.filter;

            portfolioItems.forEach(item => {
                const match = f === 'all' || item.dataset.category === f;
                if (match) {
                    item.classList.remove('hide');
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    /* ---------- Contact form ---------- */
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            if (!status) return;

            status.className = 'form-status';
            status.textContent = '';

            const data = new FormData(form);
            const action = form.getAttribute('action');

            // If Formspree endpoint isn't configured, show local success
            if (!action || action.includes('yourFormId')) {
                status.className = 'form-status success';
                status.textContent = '✓ تم استلام رسالتك! سنتواصل معك قريباً.';
                form.reset();
                setTimeout(() => { status.className = 'form-status'; status.textContent = ''; }, 6000);
                return;
            }

            try {
                const res = await fetch(action, {
                    method: 'POST',
                    body: data,
                    headers: { Accept: 'application/json' }
                });
                if (res.ok) {
                    status.className = 'form-status success';
                    status.textContent = '✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
                    form.reset();
                } else {
                    throw new Error('send failed');
                }
            } catch (err) {
                status.className = 'form-status error';
                status.textContent = '✗ حدث خطأ أثناء الإرسال. حاول مرة أخرى أو تواصل معنا عبر واتساب.';
            }
        });
    }

    /* ---------- Year ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Inject fadeIn keyframes for filter ---------- */
    const style = document.createElement('style');
    style.textContent = '@keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }';
    document.head.appendChild(style);

})();
