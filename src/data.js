import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/nodejs.png";
import Tools7 from "/assets/tools/github.png";
import Tools8 from "/assets/tools/canva.png";
import Tools9 from "/assets/tools/figma.png";
import Tools10 from "/assets/tools/html.png";
import Tools11 from "/assets/tools/css.png";
import Tools12 from "/assets/tools/flutter.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Github",
    ket: "Repository",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Canva",
    ket: "Design App",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Figma",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "HTML",
    ket: "Markup Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "CSS",
    ket: "Style Sheet",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Flutter",
    ket: "Framework",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Quiz",
    desk: "Sistem kuis interaktif berbasis web dengan tampilan sederhana dan mudah digunakan.",
    ket: "website sederhana quiz pembelajaran interaktif yang dimana digunakan untuk icebreaking saat saya mengajar untuk saudara saya",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Warung Kenna App",
    desk: "plikasi kasir sederhana untuk membantu pencatatan transaksi di Warung Kenna.",
    ket: "aplikasi kasir untuk kegiatan transaksi jual beli yang terhubung dengan printer thermal untuk struknya dan juga menggunakan firebase untuk auth serta menggunakan SQLlite untuk databasenya",
    tools: ["Flutter", "Friebase"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Chatbot Peyakit Jantung",
    desk: "Chatbot edukasi kesehatan jantung berbasis AI dengan Flask dan Python.",
    ket: "menggunakan model llm yang dimana mengambil vector dari pinecone yang dihubung melalui huggingface dan menggunakan data dari pdf yang di ekstrac jadi embedig",
    tools: ["Python", "Flask"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Aplikasi Dan Website Yudha Klinik",
    desk: "Sistem klinik terintegrasi berupa aplikasi mobile dan website untuk kebutuhan layanan pasien.",
    ket: "aplikasi dan website dari yudha klinik yang dihubungkan dengan ip dari webiste ke aplikasi yang di mana webiste berperan menjadi backend dan aplikasi berperan mejadi frontend yang di mana di gunakan oleh suster atau dokter yang bertugas. website bisa diakses dengan web https://YudhaKlinik.my.id",
    tools: ["Flutter", "Laravel", "TablePlus"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website Yun's Collection",
    desk: "Website katalog produk untuk menampilkan koleksi fashion dari Yun's Collection.",
    ket: "website kalatog jualan fashion dari ibu saya yang di jual secara online dan juga ofline",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Website Portfolio",
    desk: "Website portofolio pribadi untuk menampilkan proyek, skill, dan informasi diri.",
    ket: "website yang dimana menjelasakan tentang porotofolio yang sudah di kerjakan oleh saya dan juga tolls atau bahasa pemograman yang saya gunakan",
    tools: ["React JS", "TailwindCSS"],
    dad: "700",
  },
];
