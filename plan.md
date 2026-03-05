# Plan Pembuatan Website Undangan Pernikahan Digital

## 1. Ringkasan Proyek

Pembuatan website undangan pernikahan digital yang modern, responsif, dan elegan. Website ini akan memiliki animasi halus dan desain yang menarik.

**Lokasi Proyek:** `i:/Aksan_undangan`
**Teknologi Utama:**

- **Framework:** React + Vite
- **Styling:** Tailwind CSS v3.4.17
- **Animasi:** Framer Motion
- **Kesiapan Deploy:** Proyek ini akan disiapkan agar langsung bisa di-deploy ke platform Modern Hosting (seperti Vercel, Netlify, atau Cloudflare Pages) secara langsung dari repositori Git sehingga dapat dilakukan "tanpa perlu build manual" di komputer lokal.

---

## 2. Struktur Halaman & Fitur Utama (UI/UX)

1. **Opening Modal (Sampul / Pintu Masuk):**
   - Menampilkan Nama pasangan.
   - Tombol "Buka Undangan" (Sekaligus men-trigger pemutaran lagu / _autoplay audio bypass_).
2. **Hero Section:** Foto utama pasangan, hitung mundur (countdown) menuju tanggal acara.
3. **Audio Player:** Musik latar yang mengalun selama pengguna melihat undangan, dilengkapi dengan tombol putar/jeda (play/pause).
4. **Mempelai (Couple Profile):** Detail kedua mempelai (Nama lengkap, akun IG, foto, dan nama orang tua).
5. **Detail Acara (Event Info):**
   - Waktu dan tempat (Akad Nikah & Resepsi).
   - Tombol integrasi _Google Maps_.
   - Tombol _Add to Google Calendar_.
6. **Galeri (Gallery):** Menampilkan foto-foto pre-wedding dalam bentuk _grid/masonry_ dengan efek _hover_ dan _lightbox_.
7. **RSVP & Ucapan (Wishes):**
   - Form untuk mengirimkan pesan/ucapan & RSVP.
   - Pengiriman form bisa langsung diteruskan ke WhatsApp pribadi mempelai (agar tidak memerlukan backend database tambahan).
8. **Penutup:** Ucapan terima kasih dan permohonan doa restu.

---

## 3. Rencana Struktur Folder Project

Agar kode tetap rapi dan _maintenance_ menjadi mudah:

```text
Aksan_undangan/
├── public/                 # File statis murni
│   ├── background-music.mp3# File audio latar
│   └── favicon.svg
├── src/
│   ├── assets/             # Gambar, ilustrasi, font lokal
│   │   ├── images/
│   │   └── icons/
│   ├── components/         # Komponen UI React
│   │   ├── OpeningModal.jsx
│   │   ├── Hero.jsx
│   │   ├── CoupleInfo.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Gallery.jsx
│   │   ├── RSVP.jsx
│   │   └── AudioController.jsx
│   ├── config/
│   │   └── data.js         # JSON/Variabel data mempelai, jadwal, alamat (agar gampang diedit)
│   ├── utils/
│   │   └── helpers.js      # Fungsi untuk penghitung waktu mundur dsb.
│   ├── App.jsx             # Root layout / Penggabungan semua section
│   ├── index.css           # Global CSS & Tailwind imports
│   └── main.jsx            # Entry point React
├── index.html              # Template DOM
├── tailwind.config.js      # Konfigurasi Tailwind & Theming (Warna & Font)
├── vite.config.js          # Konfigurasi Module Bundler
└── package.json            # Daftar Dependencies
```

---

## 4. Langkah-Langkah Implementasi (_Step-by-Step_)

### Tahap 1: Setup Proyek & Instalasi Dependencies

1. Pindah ke direktori target: `cd i:/Aksan_undangan`
2. Inisiasi proyek Vite murni: `npm create vite@latest . -- --template react`
3. Install dependencies inti: `npm install`
4. Install TailwindCSS secara spesifik (v3.4.17): `npm install -D tailwindcss@3.4.17 postcss autoprefixer`
5. Buat file konfigurasi Tailwind: `npx tailwindcss init -p`
6. Install Framer Motion dan ikon (Opsional namun disarankan `react-icons` dan `lucide-react`):
   `npm install framer-motion react-icons`

### Tahap 2: Konfigurasi Tailwind CSS (`tailwind.config.js`)

Di tahap ini, kita akan me-setup tema pernikahan (contoh: _earth tone_, _gold_, atau warna pastel) dan _font_ elegan (serif dan cursive/handwriting).

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#C9A227", // Gold
        Background: "#F8F4E9", // Ivory
        Text: "#2C2C2C", // Dark Gray
        Accent: "#E8DFC8", // Soft Beige
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Cinzel", "Playfair Display", "serif"],
        script: ["Great Vibes", "cursive"], // Untuk inisial dan nama pasangan
      },
    },
  },
  plugins: [],
};
```

### Tahap 3: Styling & Global CSS (`index.css`)

Tambahkan directives tailwind dan _import utilities_ font dari Google Fonts ke dalam `index.css`. Bersihkan default CSS dari Vite.

### Tahap 4: Pengembangan Komponen

1. **Pemisahan Data:** Buat file `src/config/data.js` untuk menampung seluruh nama, tanggal, link maps, no WhatsApp. Memudahkan user mengedit isi website tanpa menelusuri banyak kode HTML/JSX.
2. **Slicing UI per Section:**
   - Bangun `App.jsx` menampung semua komponen menjadi _Single Page Application_ yang panjang (di-scroll ke bawah).
   - Pastikan desain mengedepankan **Mobile-First** (rata-rata undangan digital dibuka di HP).
3. **Integrasi Animasi (Framer Motion):**
   - Gunakan `initial`, `whileInView`, dan `viewport={{ once: true }}` pada elemen `<motion.div>` agar elemen muncul dengan elegan (fade-in up) saat layar di-_scroll_.

### Tahap 5: Fitur Khusus

1. **Audio Autoplay:** Kebijakan browser terkini tidak mengizinkan musik terputar otomatis. Gunakan _Opening Modal_ berukuran layar utuh (_fullscreen_) dengan tombol **Buka Undangan**. Saat diklik, tombol tersebut akan mengatur statenya untuk menyembunyikan modal dan sekaligus memutar musik menggunakan _Audio API_.
2. **Kirim RSVP/Ucapan:** Konversi input form yang telah diisi langsung menuju API WhatsApp: `https://wa.me/<nomor>?text=Halo...` agar efisien tanpa memikirkan integrasi backend/database lokal untuk versi siap deploy ini.

---

## 5. Skema Deployment Paling Efisien (Tanpa Build Lokal)

Berdasarkan permintaan **"siap deploy tanpa build"**, arsitektur kode telah dipersiapkan menggunakan ekosistem Modern Web yang memungkinkan sistem Git-hook Continuous Integration.

1. **Commit ke GitHub:**
   User cukup melakukan inisiasi repositori git lalu mengupload (push) seluruh _source code_ (sertakan `.gitignore` bawaan Vite).
2. **Konek ke Vercel / Netlify:**
   - Kunjungi Vercel.com, pilih Import Project.
   - Sambungkan repositori GitHub yang baru saja di-_push_.
   - Vercel akan **secara otomatis mendeteksi konfigurasi Vite** (termasuk auto-filled _Build Command_ `npm run build` dan _Output Directory_ `dist`).
   - Tekan **Deploy**.
3. **Selesai:** Website langsung tayang (_live_) dan mendapatkan SSL/HTTPS gratis. Setiap ada update di GitHub, server akan mengupdate undangan secara otomatis.

---

_Plan ini dirancang untuk segera dan siap ditindaklanjuti untuk membangun undangan modern yang aesthetic dan sangat ramah performa._
