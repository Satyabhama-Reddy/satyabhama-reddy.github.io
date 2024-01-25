module.exports = {
  siteTitle: 'Gundam Satyabhama Reddy | Software Developer',
  siteDescription:
    'Gundam Satyabhama Reddy holds a Bachelors degree in Computer Science from PES University and is pursuing Masters in Computer Science(May\'24) at Texas A&M University, College Station.',
  siteKeywords:
    'Gundam Satyabhama Reddy, Satyabhama, Reddy, Satya , satyabhama, Software Developer, Software Engineer, Competitive Programmer, Java Developer, Akamai Technologies, Texas A&M University, College Station, TAMU',
  siteUrl: 'https://satyabhama.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Gundam Satyabhama Reddy',
  location: 'Texas A&M University',
  email: 'satyabhama@tamu.edu',
  github: 'https://github.com/Satyabhama-Reddy',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Satyabhama-Reddy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gsbreddy/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/satyabhamareddy/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
