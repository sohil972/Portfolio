/* ============================================
   PORTFOLIO — main.js
   Muhammad Sohail Khan
   ============================================ */

/* ── TYPEWRITER ── */
const phrases = [
  'Angular 18 Developer',
  'Laravel Backend Engineer',
  'Full-Stack Builder',
  'CS Student @ Gomal University',
];
let pi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    ci++;
    tw.innerHTML = phrase.slice(0, ci) + '<span class="cursor"></span>';
    if (ci === phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    ci--;
    tw.innerHTML = phrase.slice(0, ci) + '<span class="cursor"></span>';
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
  }
  setTimeout(type, deleting ? 40 : 65);
}
type();

/* ── SKILLS DATA ── */
const skills = [
  { icon: '🅰️', name: 'Angular 18',  level: 'Advanced'     },
  { icon: '🌐', name: 'HTML5',        level: 'Expert'       },
  { icon: '🎨', name: 'CSS3',         level: 'Advanced'     },
  { icon: '⚡', name: 'JavaScript',   level: 'Advanced'     },
  { icon: '🐘', name: 'PHP',          level: 'Intermediate' },
  { icon: '🔧', name: 'Laravel 8',    level: 'Advanced'     },
  { icon: '🗄️', name: 'MySQL',        level: 'Intermediate' },
  { icon: '🅱️', name: 'Bootstrap 5',  level: 'Expert'       },
  { icon: '💻', name: 'C++',          level: 'Intermediate' },
  { icon: '🔗', name: 'Git & GitHub', level: 'Intermediate' },
  { icon: '🗃️', name: 'ADO.NET',      level: 'Familiar'     },
  { icon: '🏗️', name: 'Entity FW',    level: 'Familiar'     },
];

const skillsGrid = document.getElementById('skillsGrid');
skills.forEach((s, i) => {
  const el = document.createElement('div');
  el.className = 'skill-card reveal';
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
  el.innerHTML = `
    <div class="skill-icon">${s.icon}</div>
    <div class="skill-name">${s.name}</div>
    <div class="skill-level">${s.level}</div>
  `;
  skillsGrid.appendChild(el);
});

/* ── PROJECTS DATA ── */
const projects = [
  {
    icon: '🍔',
    title: 'Bukka Run',
    desc: 'Full-stack food delivery app with Nigerian cuisine theme. Features role-based auth (Admin, Driver, Customer), real-time order tracking, and an admin panel built with Angular 18 + Laravel 8 Sanctum.',
    tags: ['Angular 18', 'Laravel 8', 'MySQL', 'Sanctum', 'Role-Based Auth'],
    link: 'https://github.com/sohil972',
  },
  {
    icon: '🏥',
    title: 'Hospital Management System',
    desc: 'Comprehensive HMS with JWT auth, multi-role access (Admin, Doctor, Patient), DomPDF invoice generation, full CRUD for appointments, medicines, labs, and patient records.',
    tags: ['Laravel 8', 'JWT', 'MySQL', 'DomPDF', 'Blade'],
    link: 'https://github.com/sohil972',
  },
  {
    icon: '📋',
    title: 'Student Result System',
    desc: 'Dual-auth guard system for admin and students. Automatic grade calculation engine, result publishing, Blade-rendered report cards, and secure per-student result views.',
    tags: ['Laravel 8', 'Dual Auth', 'MySQL', 'Blade', 'Grade Engine'],
    link: 'https://github.com/sohil972',
  },
  {
    icon: '🎓',
    title: 'Angular Auth System',
    desc: 'Production-ready Angular 18 authentication featuring route guards (CanActivate, CanDeactivate, Resolve), HTTP interceptors, auto-logout on token expiry, and localStorage session management.',
    tags: ['Angular 18', 'Route Guards', 'HTTP Interceptor', 'AuthService'],
    link: 'https://github.com/sohil972',
  },
  {
    icon: '🌗',
    title: 'Color Theme Switcher',
    desc: 'Dynamic multi-theme switcher built in Angular 18 using standalone components. CSS variables for instant palette swaps, animated transitions, and persistent user preference.',
    tags: ['Angular 18', 'Standalone', 'CSS Variables', 'LocalStorage'],
    link: 'https://github.com/sohil972',
  },
  {
    icon: '🖥️',
    title: 'Developer Portfolio',
    desc: 'This portfolio website — built with pure HTML, CSS, and JavaScript. Typewriter hero, scroll-reveal animations, responsive grid layout, and a contact form with zero dependencies.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    link: '#',
  },
];

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
  const el = document.createElement('div');
  el.className = 'project-card reveal';
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
  el.innerHTML = `
    <div class="project-header">
      <div class="project-icon">${p.icon}</div>
      <div class="project-links">
        <a class="project-link" href="${p.link}" target="_blank">GitHub ↗</a>
      </div>
    </div>
    <div class="project-title">${p.title}</div>
    <div class="project-desc">${p.desc}</div>
    <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
  `;
  projectsGrid.appendChild(el);
});

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

/* ── HAMBURGER MENU ── */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () =>
    document.getElementById('navLinks').classList.remove('open')
  )
);

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── CONTACT FORM ── */
function handleSend() {
  const name    = document.getElementById('fname').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const message = document.getElementById('fmsg').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  setTimeout(() => { success.style.display = 'none'; }, 4000);

  ['fname', 'femail', 'fsubject', 'fmsg'].forEach(id => {
    document.getElementById(id).value = '';
  });
}
