# 🏗️ StaticsPlay - แพลตฟอร์มสุ่มโจทย์และฝึกทำข้อสอบวิชาสถิตยศาสตร์วิศวกรรม
> **Engineering Mechanics: Statics Practice Hub (Hibbeler 14th Edition)**  
> รวมคลังโจทย์และเฉลยวิธีทำอย่างละเอียดกว่า 285 ข้อ ครบทั้ง 11 บทเรียน พร้อมสมการคณิตศาสตร์แท้ 100%

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Engine: KaTeX](https://img.shields.io/badge/Math%20Engine-KaTeX-orange.svg)](https://katex.org/)
[![UI Style: Claymorphism](https://img.shields.io/badge/Design-Claymorphism%203D-purple.svg)](https://uupm.cc/)

---

## 🌟 จุดเด่นของแพลตฟอร์ม (Key Features)

- 🎲 **ระบบสุ่มโจทย์อัจฉริยะ (Smart Problem Randomizer):**
  - กรองระดับความยากได้ 3 ระดับ: **🟢 ง่าย (Easy)**, **🟡 ปานกลาง (Medium)**, **🔴 ยาก (Hard)**
  - เลือกแยกทำโจทย์ตามบทเรียนได้อิสระ **บทที่ 1 ถึง 11** หรือเลือกสุ่มรวมทุกบท
- 📐 **สมการคณิตศาสตร์แท้ 100% (Pure KaTeX Math):**
  - แสดงผลเศษส่วน เครื่องหมายกรณฑ์ (Square Root) เลขยกกำลัง และสัญลักษณ์เวกเตอร์แบบคณิตศาสตร์แท้ ไม่ใช้เครื่องหมายทับ (`/`) หรือขีดกวนสายตา
- 💡 **เฉลยวิธีทำทีละขั้นตอน (Step-by-Step Solution):**
  - แสดงขั้นตอนการคำนวณอย่างละเอียด พร้อมไฮไลต์คำตอบสุดท้าย
  - แนบภาพเฉลยอย่างเป็นทางการจาก **คู่มืออาจารย์ Hibbeler 14th Edition** เพื่อความถูกต้อง 100%
- ⏱️ **เครื่องมือช่วยจับเวลาสอบ (Exam Simulation Timer):**
  - ตัวจับเวลาถอยหลัง 30 นาที สามารถกดเริ่ม หยุดชั่วคราว หรือรีเซ็ตได้
- 🎨 **ดีไซน์ Claymorphism 3D + Dark Mode:**
  - การ์ดสไตล์ 3D นุ่มนวล โทนสีสดใสตามหลัก UI/UX Pro Max สลับโหมดมืด (Dark Mode) ได้สบายตา
- 🚀 **ไม่ต้องลงทะเบียน & Offline Ready 100%:**
  - เปิดใช้งานได้ทันทีบนเว็บเบราว์เซอร์ ไม่ต้องติดตั้งเซิร์ฟเวอร์ฐานข้อมูลภายนอก

---

## 📚 สารบัญบทเรียน 11 บท (Course Catalog)

| บทที่ | ชื่อบทเรียน (ภาษาไทย) | Chapter Title (English) |
|:---:|:---|:---|
| **1** | หลักการทั่วไปและหน่วยวัด | General Principles & SI Units |
| **2** | เวกเตอร์ของแรงและระบบ 2D/3D | Force Vectors & Components |
| **3** | สมดุลของอนุภาค | Equilibrium of a Particle |
| **4** | ระบบแรงลัพธ์และโมเมนต์ | Force System Resultants & Moments |
| **5** | สมดุลของวัตถุเกร็ง | Equilibrium of a Rigid Body |
| **6** | การวิเคราะห์โครงสร้าง (โครงถัก/เฟรม) | Structural Analysis (Trusses & Frames) |
| **7** | แรงภายในในคานและโครงสร้าง | Internal Forces, Shear & Moment Diagrams |
| **8** | แรงเสียดทานและความฝืด | Friction & Impending Motion |
| **9** | จุดศูนย์ถ่วงและเซนทรอยด์ | Center of Gravity & Centroids |
| **10** | โมเมนต์ความเฉื่อยของพื้นที่ | Moments of Inertia & Parallel-Axis |
| **11** | งานเสมือนและความเสถียร | Virtual Work & Stability |

---

## 🚀 วิธีนำขึ้น GitHub Pages ใช้งานฟรี (Step-by-Step Deployment)

1. **สร้าง Repository ใหม่บน GitHub:**
   - ไปที่ [github.com/new](https://github.com/new)
   - ตั้งชื่อคลัง (เช่น `statics-hub` หรือ `statics-practice`)
   - เลือกเป็น **Public**
2. **อัปโหลดไฟล์ในโฟลเดอร์นี้ทั้งหมด:**
   - ลากไฟล์และโฟลเดอร์ทั้งหมด (`index.html`, `style.css`, `app.js`, `data/`, `images/`, `lib/`, `README.md`) ขึ้นไปยัง Repository
   - หรือใช้คำสั่ง Git:
     ```bash
     git init
     git add .
     git commit -m "Initial commit: Statics Practice Hub"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/statics-hub.git
     git push -u origin main
     ```
3. **เปิดใช้งาน GitHub Pages:**
   - ในหน้า Repository คลิกแท็บ **Settings** ด้านบน
   - เลื่อนแถบเมนูด้านซ้ายไปที่ **Pages**
   - ในหัวข้อ **Build and deployment**:
     - **Source:** เลือก `Deploy from a branch`
     - **Branch:** เลือก `main` และโฟลเดอร์ `/ (root)`
     - คลิก **Save**
4. **เสร็จสิ้น!** รอประมาณ 1-2 นาที คุณจะได้ URL เว็บไซต์ฟรี เช่น:
   ```
   https://YOUR_USERNAME.github.io/statics-hub/
   ```

---

## 💻 วิธีเปิดใช้งานในเครื่องคอมพิวเตอร์ (Local Offline)

คุณสามารถดับเบิลคลิกเปิดไฟล์ `index.html` บนเบราว์เซอร์อย่าง Google Chrome, Edge หรือ Firefox ได้ทันที  
หรือดับเบิลคลิกไฟล์ `run_local.bat` เพื่อรัน Local HTTP Server ที่พอร์ต `8000`

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
statics-practice-hub/
├── index.html              # หน้าเว็บหลัก Responsive SPA
├── style.css               # สไตล์ชีต Claymorphism 3D & Tailwind Theme
├── app.js                  # ระบบสุ่มโจทย์ ตัวกรอง และเรนเดอร์ KaTeX
├── run_local.bat           # สคริปต์เปิดเว็บในเครื่องคอมพิวเตอร์
├── README.md               # คู่มือการใช้งานและนำขึ้น GitHub Pages
├── LICENSE                 # ใบอนุญาต MIT License
├── .gitignore              # ไฟล์ยกเว้นไฟล์ขนาดใหญ่สำหรับ Git
├── data/
│   ├── problems.json       # ฐานข้อมูลโจทย์ 285 ข้อ (JSON Format)
│   └── problems.js         # ตัวแปรโจทย์สำหรับรันแบบ Offline
├── images/
│   ├── problems/           # รูปภาพผังโจทย์ (Diagrams WebP)
│   └── solutions/          # ภาพเฉลยทางการจากคู่มืออาจารย์ (WebP)
└── lib/
    └── katex/              # ไลบรารีเรนเดอร์สมการคณิตศาสตร์ออฟไลน์
```

---

## ⚖️ License & Acknowledgements

- **Source Material:** โจทย์และแผนภาพอ้างอิงจากแบบเรียน *Engineering Mechanics: Statics (14th Edition)* โดย R.C. Hibbeler เพื่อประโยชน์ทางการศึกษา
- **Engine:** [KaTeX](https://katex.org/) โดย Khan Academy (MIT License)
- **Icons:** [Font Awesome 6 Free](https://fontawesome.com/)
- **License:** จัดทำขึ้นภายใต้ [MIT License](LICENSE) เพื่อส่งเสริมการเรียนรู้ของนิสิต นักศึกษาวิศวกรรมศาสตร์
