export const navLinks = [
  { name: 'Home', href: '#home' },
  {
    name: 'About Us',
    href: '#about',
    submenu: [
      { name: 'Technical Campus', href: '#about' },
      { name: 'Mission & Vision', href: '#mission' },
      { name: 'Management', href: '#about' },
      { name: 'Administration', href: '#about' },
      { name: 'Unique Features', href: '#features' },
    ],
  },
  {
    name: 'Admissions',
    href: '#admissions',
    submenu: [
      { name: 'Courses Offered', href: '#courses' },
      { name: 'Admission Procedure', href: '#admissions' },
      { name: 'Fee Structure', href: '#admissions' },
      { name: 'Apply Online', href: '#admissions' },
    ],
  },
  {
    name: 'Academics',
    href: '#courses',
    submenu: [
      { name: 'B.Tech', href: '#courses' },
      { name: 'M.Tech', href: '#courses' },
      { name: 'Diploma', href: '#courses' },
      { name: '+2 Science', href: '#courses' },
    ],
  },
  {
    name: 'Placements',
    href: '#placements',
    submenu: [
      { name: 'Placement Cell', href: '#placements' },
      { name: 'Training Programs', href: '#placements' },
      { name: 'Seminars & Workshops', href: '#placements' },
    ],
  },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const heroSlides = [
  {
    image: '/images/banners/banner1.png',
    title: 'Welcome to Eastern Academy of Science & Technology',
    subtitle: 'Shaping the future of youth through quality education since 25+ years',
  },
  {
    image: '/images/banners/banner2.jpg',
    title: 'International Collaborations',
    subtitle: 'MoU with Missouri Chancellor for global academic excellence',
  },
  {
    image: '/images/banners/banner-2015.jpg',
    title: 'Seminars & Technical Excellence',
    subtitle: 'Inauguration of national-level seminars on the future of technical education',
  },
  {
    image: '/images/banners/banner7.jpg',
    title: 'Digital Library & Resources',
    subtitle: 'DELNET access, e-journals, and vast collection of research materials',
  },
  {
    image: '/images/banners/banner3.jpg',
    title: 'Wi-Fi Enabled Campus',
    subtitle: 'High-speed internet connectivity across the entire campus',
  },
  {
    image: '/images/banners/banner4.jpg',
    title: 'Modern Computer Labs',
    subtitle: '55+ workstations with latest software for hands-on learning',
  },
  {
    image: '/images/banners/banner5.jpg',
    title: 'Smart Classrooms',
    subtitle: 'ICT-enabled classrooms with projectors and digital tools',
  },
  {
    image: '/images/banners/banner6.jpg',
    title: 'Digital Examination System',
    subtitle: 'Transparent and efficient evaluation process',
  },
];

export const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 5000, suffix: '+', label: 'Alumni Network' },
  { value: 360, suffix: '', label: 'B.Tech Intake' },
  { value: 50, suffix: '+', label: 'Top Recruiters' },
];

export const courses = [
  {
    name: 'B.Tech',
    fullName: 'Bachelor of Technology',
    duration: '4 Years',
    intake: 360,
    icon: '🎓',
    departments: [
      'Mechanical Engineering (120)',
      'Civil Engineering (60)',
      'Computer Science & Engineering (60)',
      'Electrical Engineering (60)',
      'Electronics & Communication (60)',
    ],
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'M.Tech',
    fullName: 'Master of Technology',
    duration: '2 Years',
    intake: 72,
    icon: '🔬',
    departments: [
      'Computer Science & Engineering (18)',
      'Electronics & Communication (18)',
      'Machine Design (18)',
      'Environmental Engineering (18)',
    ],
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    name: 'Diploma',
    fullName: 'Diploma in Engineering',
    duration: '3 Years',
    intake: 120,
    icon: '📐',
    departments: [
      'Mechanical Engineering (60)',
      'Electrical Engineering (60)',
    ],
    color: 'from-amber-600 to-amber-800',
  },
  {
    name: '+2 Science',
    fullName: 'Higher Secondary Science',
    duration: '2 Years',
    intake: 128,
    icon: '🔭',
    departments: [
      'Physics, Chemistry, Mathematics',
      'Biology Stream Available',
    ],
    color: 'from-purple-600 to-purple-800',
  },
];

export const recruiters = [
  { name: 'Infosys', logo: '/images/recruiters/infosys.png' },
  { name: 'L&T', logo: '/images/recruiters/lt.png' },
  { name: 'HCL', logo: '/images/recruiters/hcl.png' },
  { name: 'Bosch', logo: '/images/recruiters/bosh.png' },
  { name: 'Reliance Industries', logo: '/images/recruiters/reliance-industries.png' },
  { name: 'Jindal', logo: '/images/recruiters/jindal.png' },
  { name: 'Mahindra Satyam', logo: '/images/recruiters/mahindra-satyam.png' },
  { name: 'CMS', logo: '/images/recruiters/cms.png' },
  { name: 'WebSpiders', logo: '/images/recruiters/webspiders.png' },
  { name: 'Micro-Tek', logo: '/images/recruiters/micro-teck.png' },
  { name: 'Thriveni', logo: '/images/recruiters/thriveni.png' },
];

export const facilities = [
  {
    title: 'Digital Library',
    description: 'Access to DELNET, e-journals, and vast collection of books and research papers.',
    icon: 'BookOpen',
  },
  {
    title: 'Wi-Fi Campus',
    description: 'High-speed internet connectivity across the entire campus for seamless learning.',
    icon: 'Wifi',
  },
  {
    title: 'Smart Classrooms',
    description: 'ICT-enabled classrooms with projectors and digital learning tools.',
    icon: 'Monitor',
  },
  {
    title: 'Computer Labs',
    description: '55+ workstations with latest software and high-speed internet access.',
    icon: 'Cpu',
  },
  {
    title: 'Workshops & Labs',
    description: 'State-of-the-art workshops and laboratories for hands-on practical training.',
    icon: 'Wrench',
  },
  {
    title: 'Sports Complex',
    description: 'Indoor and outdoor sports facilities for holistic student development.',
    icon: 'Trophy',
  },
];

export const achievements = [
  {
    title: 'ISTE Best Chapter Award',
    year: '2014',
    description: 'Indian Society for Technical Education recognition',
    image: '/images/awards/iste.jpg',
  },
  {
    title: 'Rajiv Gandhi Professional Award',
    year: '2012',
    description: 'Excellence in technical education',
    image: '/images/ranking-img.jpg',
  },
  {
    title: 'BPUT Premier League',
    year: '2012',
    description: 'Outstanding performance in university events',
    image: '/images/awards/bput.jpg',
  },
];

export const announcements = [
  {
    date: 'Ongoing',
    title: 'Admissions Open 2025-26',
    description: 'Apply now for B.Tech, M.Tech, Diploma & +2 Science programs',
    type: 'admission',
  },
  {
    date: 'Upcoming',
    title: 'Webinar: Monitoring of River Pollutants',
    description: 'Using Remote Sensing techniques — Guest lecture series',
    type: 'event',
  },
  {
    date: 'Upcoming',
    title: 'Webinar: Failure Analysis',
    description: 'Case study based workshop for engineering students',
    type: 'event',
  },
  {
    date: 'New',
    title: 'Smart City GIS Mapping Project',
    description: 'Students contribute to national Smart City initiative',
    type: 'achievement',
  },
];

export const galleryImages = [
  {
    src: '/images/gallery/SAM_0111.jpg',
    alt: 'Estrella 2K17 - Annual Festival',
    category: 'events',
  },
  {
    src: '/images/gallery/SAM_0518.jpg',
    alt: 'Campus Activities',
    category: 'campus',
  },
  {
    src: '/images/gallery/SAM_0566.jpg',
    alt: 'Campus Life',
    category: 'campus',
  },
  {
    src: '/images/banners/banner4.jpg',
    alt: 'Computer Lab',
    category: 'facilities',
  },
  {
    src: '/images/banners/banner5.jpg',
    alt: 'Classroom',
    category: 'facilities',
  },
  {
    src: '/images/banners/banner7.jpg',
    alt: 'Digital Library',
    category: 'facilities',
  },
  {
    src: '/images/banners/banner2.jpg',
    alt: 'MoU Signing Ceremony',
    category: 'events',
  },
  {
    src: '/images/banners/banner-2015.jpg',
    alt: 'Seminar Inauguration',
    category: 'events',
  },
  {
    src: '/images/banners/banner3.jpg',
    alt: 'Wi-Fi Campus',
    category: 'campus',
  },
];

export const alumni = [
  {
    name: 'Subhendu Mohanty',
    branch: 'Mechanical Engineering',
    photo: '/images/alumni/student1.jpg',
  },
  {
    name: 'Ruturaj Tiwari',
    branch: 'Mechanical Engineering',
    photo: '/images/alumni/student2.jpg',
  },
  {
    name: 'Rashmi Ranjan Panda',
    branch: 'ACCA January 2011',
    photo: '/images/alumni/student3.jpg',
  },
];

export const footerLinks = {
  'Find Your Way': [
    { name: 'The College', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Management', href: '#about' },
    { name: 'Mission & Vision', href: '#mission' },
    { name: 'Recognitions', href: '#achievements' },
    { name: 'Campus Visual View', href: '#gallery' },
  ],
  'Help & Support': [
    { name: 'Academic Calendar', href: '#' },
    { name: 'Syllabus & Time Table', href: '#' },
    { name: 'Seminar & Workshop', href: '#' },
    { name: 'Prevention of Ragging', href: '#' },
    { name: 'Minimum Disclosure', href: '#' },
    { name: 'Mandatory Disclosure', href: '#' },
  ],
  'Quick Links': [
    { name: 'Directories', href: '#' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Digital Library', href: '#facilities' },
    { name: 'Faculty Evaluation', href: '#' },
    { name: 'Alumni', href: '#' },
    { name: 'Visitors', href: '#' },
  ],
  'Download': [
    { name: 'Admission Form', href: '#admissions' },
    { name: 'College Prospectus', href: '#' },
    { name: 'Results', href: '#' },
    { name: 'Weekly Newsletter', href: '#' },
    { name: 'Press Release', href: '#' },
    { name: 'Student Feedback Form', href: '#contact' },
  ],
};

export const contactInfo = {
  address: 'Prachi Vihar, Anantapur, Phulnakhara, Cuttack, Odisha',
  phone: '+91 671-235 6933',
  email: 'info@eastodissa.ac.in',
  website: 'www.eastodissa.ac.in',
};
