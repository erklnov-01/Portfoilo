export default {
  nav: { home: 'Bosh sahifa', about: 'Men haqimda', skills: "Ko'nikmalar", projects: 'Loyihalar', contact: 'Aloqa', menu: 'Menyu' },
  hero: {
    greeting: 'Salom, men',
    role: 'Front-End dasturchi',
    intro: 'Veb-ilovalarni React, Redux Toolkit va Supabase bilan yarataman.',
    viewProjects: "Loyihalarni ko'rish",
    count: 'joylangan loyiha',
    contactMe: "Bog'lanish",
  },
  about: {
    title: 'Men haqimda',
    body: "Men Erkinov Muhammad, Front-End dasturchiman. Veb-ilovalarni React, Redux Toolkit va Supabase bilan yarataman. Portfolioda Mathverse, Messenger, AirBnbn-Clone, Music-App, Restaurant Management va Latte Cafe Clone loyihalarim bor, hammasi internetga joylangan.",
  },
  skills: { title: "Ko'nikmalar", subtitle: 'Men ishlaydigan texnologiyalar' },
  projects: {
    title: 'Loyihalar',
    subtitle: "Jonli demolar va manba kodi",
    code: "Kodni ko'rish",
    live: 'Jonli demo',
    items: {
      mathverse:
        "Node.js serverli veb-ilova. Ro'yxatdan o'tgan birinchi akkaunt admin bo'ladi va 12 ta namunaviy masalani import qila oladi. Server bo'lmasa, ma'lumotlar brauzerda saqlanadigan mehmon rejimiga o'tadi.",
      messenger: 'React, Vite, Redux Toolkit, React Router, Supabase va Material UI bilan yaratilgan Messenger ilovasi.',
      airbnb: 'Airbnb klon.',
      music: 'Musiqa ilovasi.',
      restaurant: 'Restoran boshqaruvi veb-ilovasi.',
      latte: "Latte kafe veb-sayti: qahva sotadi va u haqida ma'lumot beradi.",
    },
  },
  contact: {
    title: 'Aloqa',
    subtitle: 'Menga xabar yuboring, javob beraman.',
    name: 'Ism',
    email: 'Email',
    message: 'Xabar',
    send: 'Xabar yuborish',
    sending: 'Yuborilmoqda...',
    success: 'Rahmat! Xabaringiz yuborildi.',
    errors: {
      name: 'Ismingizni kiriting (kamida 2 belgi).',
      email: "To'g'ri email manzil kiriting.",
      message: "Xabar kamida 10 belgidan iborat bo'lishi kerak.",
      config: "Xabar xizmati hali sozlanmagan. Iltimos, to'g'ridan-to'g'ri email yuboring.",
      network: "Xabarni yuborib bo'lmadi. Keyinroq qayta urinib ko'ring.",
    },
  },
  footer: { rights: 'Barcha huquqlar himoyalangan.' },
}
