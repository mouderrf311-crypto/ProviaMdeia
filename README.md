# Provia Company — موقع الوكالة الإعلانية

موقع إلكتروني احترافي من صفحة واحدة (Single Page Application) لشركة **Provia Company** — وكالة إعلانية ورقمية في السويداء، سوريا، تخدم السوق المحلي والإمارات والمنطقة العربية.

![Provia](https://img.shields.io/badge/Provia-Company-6366f1) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![RTL](https://img.shields.io/badge/Lang-RTL%20Arabic-success)

## ✨ المميزات

- 🎨 تصميم عصري 2026 — Glassmorphism, Gradients, Micro-interactions
- 📱 Responsive 100% (Mobile-first)
- 🌐 دعم كامل للعربية و RTL
- ⚡ Smooth Scroll + Scroll Animations (AOS)
- 🎯 Sticky Navbar مع `backdrop-blur`
- 📊 Hero مع عدّاد إحصائيات متحرّك
- 🖼️ Portfolio مع فلترة ديناميكية
- 📩 نموذج تواصل (جاهز للربط بـ Formspree)
- 💬 WhatsApp floating button
- ⬆️ Back to top
- 🔍 SEO + Open Graph Meta Tags

## 🛠️ التقنيات

- HTML5 Semantic
- CSS3 (Variables, Grid, Flexbox, Animations)
- Vanilla JavaScript (No framework)
- Google Fonts: Cairo + Tajawal
- Font Awesome 6
- AOS Library (Animate On Scroll)

## 📁 هيكل المشروع

```
provia-website/
├── index.html          # الصفحة الرئيسية (كل الأقسام)
├── css/
│   └── style.css       # كل التنسيقات
├── js/
│   └── script.js       # كل الـ JavaScript
├── images/             # الصور (placeholders حالياً)
│   └── team/
└── README.md
```

## 🚀 التشغيل

افتح `index.html` مباشرة في المتصفح، أو شغّل سيرفر محلي:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

ثم افتح `http://localhost:8000`.

## 🔗 ربط نموذج التواصل

1. سجّل في [Formspree](https://formspree.io)
2. احصل على رابط الـ endpoint
3. عدّل في `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📞 تعديل معلومات التواصل

- **WhatsApp**: ابحث عن `wa.me/963000000000` في `index.html` وضع رقمك
- **Email**: استبدل `info@provia.company`
- **Facebook**: الرابط الحالي: https://www.facebook.com/people/provia-company/61582484055788/

## 🎨 الألوان

```css
--c-primary:   #6366f1   /* بنفسجي مزرق */
--c-secondary: #a855f7   /* بنفسجي */
--c-accent:    #ec4899   /* وردي */
```

## 📍 العنوان

السويداء، سوريا — نخدم: السويداء، الإمارات، والمنطقة العربية

---

© 2026 Provia Company. صُمّم وطُوّر في السويداء بحب.
