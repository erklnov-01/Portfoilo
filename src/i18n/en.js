export default {
  nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact', menu: 'Menu' },
  hero: {
    greeting: "Hi, I'm",
    role: 'Front-End Developer',
    intro: 'I build web applications with React, Redux Toolkit and Supabase.',
    viewProjects: 'View projects',
    count: 'deployed projects',
    contactMe: 'Contact me',
  },
  about: {
    title: 'About me',
    body: "I'm Erkinov Muhammad, a Front-End developer. I build web applications with React, Redux Toolkit and Supabase. My portfolio includes Mathverse, Messenger, AirBnbn-Clone, Music-App, Restaurant Management and Latte Cafe Clone, all deployed online.",
  },
  skills: { title: 'Skills', subtitle: 'Technologies I work with' },
  projects: {
    title: 'Projects',
    subtitle: 'Live demos and source code',
    code: 'View code',
    live: 'Live demo',
    items: {
      mathverse:
        'A web app with a Node.js server. The first registered account becomes the admin, who can import 12 sample problems. Without the server it falls back to a guest mode that stores data in the browser.',
      messenger: 'A Messenger application built with React, Vite, Redux Toolkit, React Router, Supabase and Material UI.',
      airbnb: 'An Airbnb clone.',
      music: 'A music app.',
      restaurant: 'A restaurant management web app.',
      latte: 'A Latte cafe website that sells coffee and provides information about it.',
    },
  },
  contact: {
    title: 'Contact',
    subtitle: 'Send me a message and I will get back to you.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send message',
    sending: 'Sending...',
    success: 'Thank you! Your message has been sent.',
    errors: {
      name: 'Please enter your name (at least 2 characters).',
      email: 'Please enter a valid email address.',
      message: 'Message must be at least 10 characters.',
      config: 'The message service is not configured yet. Please email me directly.',
      network: 'Could not send the message. Please try again later.',
    },
  },
  footer: { rights: 'All rights reserved.' },
}
