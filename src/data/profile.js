// All content below is sourced directly from Shaza's CV.
// Edit this file to update site content without touching components.

export const profile = {
  name: 'Shaza Abdulnaser Sayed',
  shortName: 'Shaza Abdulnaser',
  headline: 'AI & Data Science Specialist — Machine Learning · Deep Learning · Computer Vision',
  location: 'Assiut, Egypt',
  phone: '01091731905',
  email: 'shazaabdulnaser20@gmail.com',
  linkedin: 'https://linkedin.com/in/shaza-abdulnaser',
  github: 'https://github.com/ShazaNasser20',
  cvFile: '/Shaza_Abdulnaser_CV.pdf',
  summary:
    'Artificial Intelligence specialist with hands-on experience across Machine Learning, Deep Learning, Computer Vision, and Data Analysis. I build and evaluate ML pipelines end to end — from preprocessing and handling imbalanced data to training classification models and benchmarking their performance. My recent work spans medical image classification, real-time object tracking, and comparative model evaluation, using Python, Scikit-learn, TensorFlow, Keras, and OpenCV.',
}

export const about = {
  paragraphs: [
    'I am a B.Sc. Artificial Intelligence student at Badr University in Assiut (2023–2027), currently building my technical foundation through structured training programs and independent projects.',
    'My work centers on the applied side of AI: turning raw datasets into trained, evaluated models. This has taken me through supervised learning and classification, deep learning architectures for image classification, and real-time computer vision systems for object tracking — usually with a focus on comparing approaches rather than settling for a single result.',
    'I have completed Machine Learning traineeships through the Digital Egypt Pioneers Initiative (Microsoft ML Track) and the National Telecommunication Institute, along with an AI internship at Evergreen.AI focused on data preprocessing and exploratory analysis. Alongside my technical training, a professional internship at CIB gave me exposure to teamwork and real-world business operations.',
    'I am currently focused on strengthening my skills in deep learning and computer vision, and on building a portfolio of projects that demonstrate rigorous, comparative evaluation — the kind of work that holds up under scrutiny, not just a working notebook.',
  ],
}

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'C++', 'JavaScript'],
  },
  {
    category: 'Machine Learning',
    items: [
      'Scikit-learn',
      'Supervised Learning',
      'Regression',
      'Classification',
      'Feature Engineering',
      'SMOTE',
      'Model Evaluation',
    ],
  },
  {
    category: 'Deep Learning',
    items: ['TensorFlow', 'Keras', 'PyTorch', 'CNNs', 'Transfer Learning', 'Neural Networks'],
  },
  {
    category: 'Computer Vision',
    items: ['OpenCV', 'YOLO', 'MediaPipe', 'Face Mesh', 'Object Tracking', 'ByteTrack'],
  },
  {
    category: 'Data Science',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Data Preprocessing'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab'],
  },
]

export const experience = [
  {
    role: 'Machine Learning Trainee',
    org: 'Digital Egypt Pioneers Initiative (DEPI) — Microsoft Machine Learning Track',
    date: '2026',
    location: 'Egypt',
    points: [
      'Developed classification and regression models using Python and Scikit-learn across multiple machine learning tasks.',
      'Applied data preprocessing, feature engineering, supervised learning, and model evaluation techniques to build machine learning workflows.',
    ],
    tech: ['Python', 'Scikit-learn'],
  },
  {
    role: 'AI Intern',
    org: 'Evergreen.AI',
    date: '2026',
    location: 'Assiut, Egypt',
    points: [
      'Performed data preprocessing and exploratory data analysis using Pandas, NumPy, Matplotlib, and Seaborn.',
      'Created data visualizations, extracted dataset insights, and prepared structured data for machine learning tasks.',
    ],
    tech: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    role: 'Machine Learning Trainee',
    org: 'National Telecommunication Institute (NTI)',
    date: '2025',
    location: 'Egypt',
    points: [
      'Built classification and regression models using Python and Scikit-learn across machine learning tasks.',
      'Applied preprocessing, feature engineering, model evaluation, and imbalanced-data handling techniques.',
    ],
    tech: ['Python', 'Scikit-learn'],
  },
  {
    role: 'Summer Intern',
    org: 'CIB',
    date: '2026',
    location: 'Egypt',
    points: [
      'Completed a professional banking internship focused on teamwork, communication, problem-solving, and exposure to real-world business operations and financial services.',
    ],
    tech: [],
  },
]

export const projects = [
  {
    name: 'Brain CT Scan Classification',
    category: 'Deep Learning',
    description:
      'Developed and evaluated deep learning models for brain CT scan image classification using VGG16 and ResNet50, comparing two architectures to assess the impact of transfer learning on classification performance.',
    tech: ['TensorFlow', 'Keras', 'VGG16', 'ResNet50', 'Transfer Learning'],
    metrics: [
      { label: 'VGG16 test accuracy', value: '93.93%' },
      { label: 'ResNet50 test accuracy', value: '96.32%' },
    ],
    github: null,
  },
  {
    name: 'YOLO Object Tracking Speed Comparison',
    category: 'Computer Vision',
    description:
      'Benchmarked three lightweight YOLO models — YOLOv10n, YOLO11n, and YOLO12n — for real-time object tracking using ByteTrack, identifying which model actually meets real-time processing requirements.',
    tech: ['YOLO', 'ByteTrack', 'OpenCV'],
    metrics: [
      { label: 'YOLOv10n', value: '32.80 FPS' },
      { label: 'YOLO11n', value: '28.67 FPS' },
      { label: 'YOLO12n', value: '27.91 FPS' },
    ],
    highlight: 'YOLOv10n was the only model meeting the 30 FPS real-time processing threshold.',
    github: null,
  },
  {
    name: 'MNIST Digit Recognition',
    category: 'Deep Learning',
    description:
      'Developed neural network models for handwritten digit classification on the full MNIST dataset (60,000 training / 10,000 test images), comparing two optimization strategies.',
    tech: ['TensorFlow', 'Keras', 'Neural Networks'],
    metrics: [
      { label: 'Adam optimizer', value: '99.04%' },
      { label: 'SGD optimizer', value: '97.02%' },
    ],
    github: null,
  },
  {
    name: 'Breast Cancer Classification',
    category: 'Machine Learning',
    description:
      'Compared five Logistic Regression approaches — including L1, L2, Elastic Net, and a custom Gradient Descent implementation — to evaluate regularization and optimization strategies for binary classification.',
    tech: ['Scikit-learn', 'Logistic Regression', 'Gradient Descent'],
    metrics: [{ label: 'Best accuracy (custom implementation)', value: '98.25%' }],
    github: null,
  },
]

export const projectCategories = ['All', 'Machine Learning', 'Deep Learning', 'Computer Vision']

export const education = {
  university: 'Badr University in Assiut',
  degree: 'B.Sc. Artificial Intelligence',
  date: '2023 – 2027',
  location: 'Assiut, Egypt',
}

export const activities = [
  {
    org: 'Hult Prize',
    role: 'Vice, Media Committee',
    description:
      'Supported media strategy, content creation, branding, and promotional activities for entrepreneurship and innovation events.',
  },
  {
    org: 'Google Developer Groups (GDG Assiut)',
    role: 'Graphic Designer',
    description: 'Created visual content and branding materials for technology events and community activities.',
  },
  {
    org: 'IEEE Student Branch',
    role: 'Media Committee Member',
    description: 'Supported media coverage, visual content, and promotional activities for technical events.',
  },
  {
    org: 'Rally BUA',
    role: 'Media Committee Vice',
    description: 'Supported marketing, branding, and event media activities for university activities.',
  },
]

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Good' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
]
