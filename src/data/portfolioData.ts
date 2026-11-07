/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Centralized Portfolio Configuration for EKA YULITA
 * All personal details, links, projects, and education can be easily updated here.
 */

export interface SkillItem {
  id: string;
  name: string;
  category: 'office' | 'creative' | 'technical';
  categoryLabel: string;
  description: string;
  iconName: string; // Lucide icon identifier
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDetails: string;
  tools: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  date: string;
  status: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  institutionShort: string;
  program: string;
  degree: string;
  period: string;
  status: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  description: string;
  image: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Eka Yulita",
    preferredName: "Eka",
    role: "Information Systems Student",
    university: "Universitas Komputama (UNIKMA)",
    studyProgram: "Sistem Informasi",
    semester: "Semester 1",
    greeting: "Hello, Welcome to My Portfolio!",
    primaryTagline: "Learning Today, Creating Tomorrow.",
    motto: "Go with the flow, but don't forget your goal.",
    defaultAvatar: "/assets/aistudio/IMG-20261024-WA0001_7ae7c5bd.jpg",
    location: "Jawa Tengah, Indonesia",
    bioEnglish: "Hi! I am Eka Yulita, a first-semester Information Systems student at Universitas Komputama (UNIKMA). I have a growing curiosity and passion for digital technology, data management, and creative design. I am actively developing my foundations in system analysis, office productivity, and modern digital tools to bridge creativity with practical technology.",
    bioIndonesian: "Halo! Saya Eka Yulita, mahasiswa semester 1 Program Studi Sistem Informasi di Universitas Komputama (UNIKMA). Saya memiliki antusiasme tinggi dalam mempelajari teknologi informasi, pengelolaan data, dan desain digital yang estetis dan fungsional.",
  },

  contact: {
    email: "ekayulita756@gmail.com",
    emailSubject: "Hello Eka, Let's Connect!",
    emailBody: "Hello Eka, I would like to get in touch with you.",
    whatsappNumber: "+62 888-0911-6923",
    whatsappCleanNumber: "6288809116923",
    whatsappMessage: "Halo Eka! Saya mengunjungi website portofolio kamu dan ingin menghubungi kamu.",
    whatsappUrl: "https://wa.me/6288809116923?text=Halo%20Eka!%20Saya%20mengunjungi%20website%20portofolio%20kamu%20dan%20ingin%20menghubungi%20kamu.",
  },

  socials: [
    {
      name: "WhatsApp",
      url: "https://wa.me/6288809116923?text=Halo%20Eka!%20Saya%20mengunjungi%20website%20portofolio%20kamu%20dan%20ingin%20menghubungi%20kamu.",
      handle: "+62 888-0911-6923",
      type: "whatsapp"
    },
    {
      name: "Email",
      url: "mailto:ekayulita756@gmail.com?subject=Hello%20Eka,%20Let's%20Connect!&body=Hello%20Eka,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.",
      handle: "ekayulita756@gmail.com",
      type: "email"
    }
  ],

  educationList: [
    {
      id: "unikma-si",
      institution: "Universitas Komputama (UNIKMA)",
      institutionShort: "UNIKMA",
      program: "Sistem Informasi (Information Systems)",
      degree: "S1 (Sarjana Komputer / S.Kom)",
      period: "2024 - Sekarang",
      status: "Mahasiswa Aktif (Semester 1)",
      location: "Indonesia",
      description: "Mempelajari integrasi teknologi informasi, arsitektur sistem bisnis, manajemen basis data, algoritma dasar pemrograman, dan transformasi digital.",
      highlights: [
        "Pengantar Sistem Informasi & Logika Komputasi",
        "Aplikasi Perkantoran & Manajemen Data",
        "Eksplorasi UI/UX & Kreativitas Digital"
      ]
    },
    {
      id: "ma-muhammadiyah-majenang",
      institution: "MA Muhammadiyah Majenang",
      institutionShort: "MAM Majenang",
      program: "Jurusan MIPA (Matematika & Ilmu Pengetahuan Alam)",
      degree: "Madrasah Aliyah",
      period: "Alumni Lulusan",
      status: "Lulusan MIPA Berwawasan Teknologi",
      location: "Majenang, Cilacap, Jawa Tengah",
      description: "Menempuh pendidikan menengah sains alam (IPA) yang terintegrasi dengan pemanfaatan teknologi informasi, logika komputasi sains, dan penerapan aplikasi digital dalam pengolahan data serta pelaporan praktikum.",
      highlights: [
        "Penerapan Logika Matematika & Sains untuk Pemecahan Masalah",
        "Pemanfaatan Komputer & Perangkat Lunak untuk Olah Data Sains",
        "Literasi Teknologi Informasi & Komunikasi (TIK) dalam Pembelajaran",
        "Ketelitian Analisis Data Praktikum & Eksperimen Laboratorium"
      ]
    }
  ] as EducationItem[],

  skills: [
    {
      id: "word",
      name: "Microsoft Word",
      category: "office",
      categoryLabel: "Office & Productivity",
      description: "Penyusunan dokumen akademik, laporan terstruktur, makalah rapi, dan format formal surat menyurat.",
      iconName: "FileText",
      highlights: ["Academic Formatting", "Table & Index Structuring", "Document Layouting"]
    },
    {
      id: "excel",
      name: "Microsoft Excel",
      category: "office",
      categoryLabel: "Office & Data",
      description: "Pengolahan data tabular, kalkulasi fungsi formula dasar, pembuatan tabel dinamis, dan visualisasi grafik.",
      iconName: "Table",
      highlights: ["Formula & Functions", "Data Sorting & Filtering", "Chart Visualization"]
    },
    {
      id: "sheets",
      name: "Google Sheets",
      category: "office",
      categoryLabel: "Cloud Productivity",
      description: "Kolaborasi spreadsheet berbasis cloud secara real-time untuk input data terkoordinasi dan pencatatan tim.",
      iconName: "FileSpreadsheet",
      highlights: ["Real-time Cloud Sync", "Collaborative Work", "Data Organization"]
    },
    {
      id: "canva",
      name: "Canva",
      category: "creative",
      categoryLabel: "Creative Design",
      description: "Desain presentasi estetis, infografis visual, konten media sosial berkarakter lembut, dan branding visual.",
      iconName: "Palette",
      highlights: ["Presentation Decks", "Infographic Design", "Social Media Layouts"]
    },
    {
      id: "programming",
      name: "Basic Programming",
      category: "technical",
      categoryLabel: "Tech & Systems",
      description: "Pemahaman logika komputasi dasar, struktur algoritma, pengenalan tag HTML/CSS, dan alur sistem.",
      iconName: "Code2",
      highlights: ["Computational Logic", "HTML/CSS Fundamentals", "Algorithm Flowcharts"]
    },
    {
      id: "creative-thinking",
      name: "Digital Creativity & Systems",
      category: "creative",
      categoryLabel: "Creative Design",
      description: "Penerapan konsep desain modern yang bersih, estetis, dan berorientasi pada kemudahan pengguna.",
      iconName: "Sparkles",
      highlights: ["Aesthetic Harmony", "Color Coordination", "User-Friendly Design"]
    }
  ] as SkillItem[],

  projects: [
    {
      id: "academic-portal-concept",
      title: "Desain Konsep Portal Mahasiswa UNIKMA",
      subtitle: "Academic Information System UX Concept",
      category: "Information Systems",
      description: "Eksplorasi antarmuka portal akademik mahasiswa yang bersih dengan navigasi jadwal kuliah, pencatatan nilai, dan ringkasan tugas semester.",
      fullDetails: "Proyek eksplorasi mandiri berfokus pada kemudahan akses informasi bagi mahasiswa baru. Mengedepankan struktur kartu bernuansa soft blue yang rapi, kontras yang nyaman dimata, dan pengelompokan menu esensial seperti jadwal kuliah mingguan, indeks prestasi semester, dan pengumuman kampus.",
      tools: ["Canva", "UI/UX Layout", "Sistem Informasi"],
      image: "/src/assets/images/project_academic_portal_1794027407385.jpg",
      date: "Semester 1 — 2024",
      status: "Featured Concept"
    },
    {
      id: "student-data-analytics",
      title: "Template Analisis Data Tabular Mahasiswa",
      subtitle: "Data Management & Calculation Model",
      category: "Data & Office",
      description: "Model spreadsheet untuk pencatatan dan kalkulasi otomatis data aktivitas belajar, presensi, dan rekapitulasi nilai mata kuliah.",
      fullDetails: "Dibuat menggunakan kombinasi formula Excel dan Google Sheets untuk memudahkan pencatatan nilai harian, pembobotan persentase tugas, UTS, UAS, serta visualisasi grafik batang dan diagram lingkaran untuk memantau performa akademik secara berkala.",
      tools: ["Microsoft Excel", "Google Sheets", "Data Formatting"],
      image: "/src/assets/images/project_data_sheets_1794027407920.jpg",
      date: "Semester 1 — 2024",
      status: "Completed Workbook"
    },
    {
      id: "creative-brand-kit",
      title: "Koleksi Desain Kreatif & Presentasi Digital",
      subtitle: "Pastel Blue Digital Presentation & Graphics",
      category: "Digital Creativity",
      description: "Kumpulan template presentasi kuliah, infografis teknologi sistem informasi, dan grafis visual bertema soft blue modern.",
      fullDetails: "Mendesain materi slide presentasi yang terstruktur dengan hierarki tipografi yang jelas, palet warna pastel blue yang menenangkan, serta elemen visual modern untuk mendukung presentasi tugas kuliah agar tampil profesional dan menarik.",
      tools: ["Canva", "Digital Typography", "Visual Assets"],
      image: "/src/assets/images/project_canva_creative_1794027408136.jpg",
      date: "Semester 1 — 2024",
      status: "Creative Portfolio"
    }
  ] as ProjectItem[],

  certificates: [
    {
      id: "cert-unikma-orientation",
      title: "Pelatihan & Orientasi Teknologi Informasi UNIKMA",
      issuer: "Universitas Komputama",
      issueDate: "2024",
      credentialId: "UNIKMA-SI-2024-0891",
      description: "Partisipasi aktif dalam pengenalan infrastruktur teknologi kampus, literasi sistem informasi akademik, dan etika komputasi.",
      image: "/src/assets/images/certificate_academic_achievement_1794027407572.jpg",
      skills: ["Information Systems Orientation", "Digital Literacy", "Academic Tools"]
    }
  ] as CertificateItem[]
};
