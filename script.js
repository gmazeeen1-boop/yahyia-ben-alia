/* =====================================================
   script.js – ابتدائية يحي بن علية
   ===================================================== */

// ── Navbar scroll effect ──────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile nav toggle ─────────────────────────────────
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Animated counters (stats section) ────────────────
const counters = document.querySelectorAll('.stat-num');
let counted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'), 10);
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, duration / steps);
  });
}

const statsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !counted) {
    counted = true;
    animateCounters();
  }
}, { threshold: 0.4 });

const statsSection = document.querySelector('.stats');
if (statsSection) statsObserver.observe(statsSection);

// ── Scroll reveal animations ──────────────────────────
const revealEls = document.querySelectorAll(
  '.about-grid, .stat-card, .gallery-item, .contact-card, .contact-form, .notebook-preview'
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(32px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  revealObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // small delay so CSS loads first
  setTimeout(() => {
    document.querySelectorAll('.revealed, .stat-card').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 100);
});

// ── Flipbook data ─────────────────────────────────────
const pages = [
  {
    icon: '🏫',
    title: 'مرحباً بكم في ابتدائية يحي بن علية',
    content: `
      <p>يُسعدنا ترحيبكم في هذه الصفحات التي تحكي عن مسيرة تعليمية رائدة.</p>
      <p>هذا الكراس المصور يجمع أبرز اللحظات والدروس والأنشطة التي تزخر بها مدرستنا.</p>
      <p>نأمل أن تجدوا فيه ما يُسعدكم ويُعرّفكم بعالمنا التعليمي الجميل.</p>
    `
  },
  {
    icon: '📚',
    title: 'المواد الدراسية',
    content: `
      <p>✦ اللغة العربية – أساس التعبير والتواصل</p>
      <p>✦ الرياضيات – منطق التفكير والاستدلال</p>
      <p>✦ التربية الإسلامية – منهج الحياة القويم</p>
      <p>✦ العلوم الطبيعية – استكشاف الكون</p>
      <p>✦ التاريخ والجغرافيا – هوية ووطن</p>
      <p>✦ التربية البدنية – صحة وحيوية</p>
    `
  },
  {
    icon: '🎨',
    title: 'الأنشطة والفعاليات',
    content: `
      <p>✦ مسابقات القراءة والإلقاء الشعري</p>
      <p>✦ ورشات الرسم والتعبير الفني</p>
      <p>✦ الدوريات الرياضية بين الأقسام</p>
      <p>✦ المعارض العلمية السنوية</p>
      <p>✦ الرحلات التعليمية والثقافية</p>
      <p>✦ احتفالات المناسبات الوطنية</p>
    `
  },
  {
    icon: '🌟',
    title: 'قيمنا ومبادئنا',
    content: `
      <p>نؤمن بأن التعليم الجيد يبدأ بغرس القيم الأصيلة في نفوس أبنائنا.</p>
      <p>✦ الانتماء للوطن والفخر بالهوية</p>
      <p>✦ احترام المعلم والزميل</p>
      <p>✦ الجدية والمثابرة في التحصيل</p>
      <p>✦ التعاون والعمل الجماعي</p>
      <p>✦ الإبداع والتميز في الأداء</p>
    `
  },
  {
    icon: '🏆',
    title: 'إنجازاتنا وتميزنا',
    content: `
      <p>نفخر بمسيرة حافلة من الإنجازات والتميز على مستوى الولاية والوطن:</p>
      <p>✦ نسبة نجاح تتجاوز 98% في شهادة التعليم الابتدائي</p>
      <p>✦ جوائز في مسابقات القراءة الوطنية</p>
      <p>✦ التميز في أنشطة الكشافة الإسلامية</p>
      <p>✦ أوائل على مستوى الولاية في الرياضيات</p>
    `
  },
  {
    icon: '💌',
    title: 'رسالة للتلاميذ والأولياء',
    content: `
      <p>أعزّاءنا الآباء والأمهات،</p>
      <p>شراكتكم معنا هي الركيزة الأساسية لنجاح أبنائكم.</p>
      <p>نحن نفتح أبوابنا دائماً لكم، ونرحّب بمقترحاتكم وتواصلكم.</p>
      <p>معاً نبني جيلاً واعداً يحمل مشعل العلم والتحضر.</p>
      <p style="text-align:center; margin-top:12px; font-weight:700; color: #1a5276;">
        إدارة ابتدائية يحي بن علية
      </p>
    `
  }
];

// ── Flipbook state ────────────────────────────────────
let currentPage = 0;

function buildFlipbook() {
  const viewer     = document.getElementById('flipbookViewer');
  const thumbsEl   = document.getElementById('thumbnails');

  viewer.innerHTML   = '';
  thumbsEl.innerHTML = '';

  pages.forEach((page, i) => {
    // page card
    const div = document.createElement('div');
    div.className = 'flipbook-page' + (i === 0 ? ' active' : '');
    div.dataset.page = i;
    div.innerHTML = `
      <div class="page-card">
        <div class="page-inner">
          <div class="page-icon">${page.icon}</div>
          <h2 class="page-title">${page.title}</h2>
          <div class="page-body">${page.content}</div>
        </div>
        <div class="page-num">صفحة ${i + 1} من ${pages.length}</div>
      </div>
    `;
    viewer.appendChild(div);

    // thumbnail
    const thumb = document.createElement('div');
    thumb.className = 'thumb' + (i === 0 ? ' active' : '');
    thumb.dataset.page = i;
    thumb.innerHTML = `<i class="fas fa-file-alt"></i><span>${i + 1}</span>`;
    thumb.addEventListener('click', () => goToPage(i));
    thumbsEl.appendChild(thumb);
  });

  updateControls();
}

function goToPage(index) {
  const allPages = document.querySelectorAll('.flipbook-page');
  const allThumbs = document.querySelectorAll('.thumb');

  if (index < 0 || index >= pages.length) return;

  // exit current
  allPages[currentPage].classList.remove('active');
  allPages[currentPage].classList.add('exit');
  allThumbs[currentPage].classList.remove('active');

  setTimeout(() => {
    allPages[currentPage].classList.remove('exit');
  }, 400);

  currentPage = index;

  // enter new
  allPages[currentPage].classList.add('active');
  allThumbs[currentPage].classList.add('active');

  // scroll thumb into view
  allThumbs[currentPage].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  updateControls();
}

function updateControls() {
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  const indicator = document.getElementById('pageIndicator');

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
  indicator.textContent = `الصفحة ${currentPage + 1} / ${pages.length}`;
}

// ── Open / Close modal ────────────────────────────────
const modal     = document.getElementById('flipbookModal');
const openBtns  = document.querySelectorAll('#openNotebook, .open-btn');

function openModal() {
  currentPage = 0;
  buildFlipbook();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

openBtns.forEach(btn => btn.addEventListener('click', openModal));

document.getElementById('closeBtn').addEventListener('click', closeModal);
document.getElementById('closeModal').addEventListener('click', closeModal);

document.getElementById('prevPage').addEventListener('click', () => goToPage(currentPage - 1));
document.getElementById('nextPage').addEventListener('click', () => goToPage(currentPage + 1));

// keyboard navigation
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowDown')  goToPage(currentPage + 1);
  if (e.key === 'ArrowRight' || e.key === 'ArrowUp')    goToPage(currentPage - 1);
  if (e.key === 'Escape') closeModal();
});

// ── Contact form ──────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  showToast('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
  e.target.reset();
}

// ── Toast helper ──────────────────────────────────────
function showToast(msg) {
  const toast   = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ── Smooth scroll reveal on load ──────────────────────
window.addEventListener('load', () => {
  document.querySelectorAll('.about-grid, .gallery-item, .contact-card, .contact-form, .notebook-preview').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.about-grid, .gallery-item, .contact-card, .contact-form, .notebook-preview, .stat-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity .65s ease, transform .65s ease';
    io.observe(el);
  });
});
