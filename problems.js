window.STATICS_DATA = {
  "chapters": {
    "1": {
      "name_en": "General Principles",
      "name_th": "หลักการทั่วไป",
      "desc": "หน่วยวัด คำนำหน้าเอสไอ และการแปลงหน่วย",
      "count": 6
    },
    "2": {
      "name_en": "Force Vectors",
      "name_th": "เวกเตอร์ของแรง",
      "desc": "การรวมแรง 2D & 3D, เวกเตอร์คาร์ทีเซียน, ผลคูณจุด (Dot Product)",
      "count": 31
    },
    "3": {
      "name_en": "Equilibrium of a Particle",
      "name_th": "สมดุลของอนุภาค",
      "desc": "สมดุลของจุดร่วม 2D & 3D, แรงดึงในเส้นเชือก, สปริง, แผนภาพอิสระ (FBD)",
      "count": 11
    },
    "4": {
      "name_en": "Force System Resultants",
      "name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "desc": "โมเมนต์รอบจุดและแกน, โมเมนต์คู่ควบ, ระบบแรงสมมูล, แรงกระจาย",
      "count": 42
    },
    "5": {
      "name_en": "Equilibrium of a Rigid Body",
      "name_th": "สมดุลของวัตถุเกร็ง",
      "desc": "แรงปฏิกิริยาที่จุดรองรับ, สมการสมดุลใน 2D & 3D, สองแรงกระทำ",
      "count": 12
    },
    "6": {
      "name_en": "Structural Analysis",
      "name_th": "การวิเคราะห์โครงสร้าง",
      "desc": "โครงถัก (Trusses), วิธีพิจารณาข้อต่อ, วิธีตัดหน้าตัด, โครงเฟรมและเครื่องกล",
      "count": 24
    },
    "7": {
      "name_en": "Internal Forces",
      "name_th": "แรงภายใน",
      "desc": "แรงในแนวแกน, แรงเฉือน, โมเมนต์ดัด, แผนภาพ SFD และ BMD",
      "count": 18
    },
    "8": {
      "name_en": "Friction",
      "name_th": "ความเสียดทาน",
      "desc": "แรงเสียดทานแห้ง, การเริ่มไถล/คว่ำ, ลิ่ม, สกรู, สายพาน",
      "count": 9
    },
    "9": {
      "name_en": "Center of Gravity and Centroid",
      "name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "desc": "เซนทรอยด์ของเส้น พื้นที่ ปริมาตร, รูปร่างประกอบ, ทฤษฎีบทพัปพัส",
      "count": 21
    },
    "10": {
      "name_en": "Moments of Inertia",
      "name_th": "โมเมนต์ความเฉื่อย",
      "desc": "โมเมนต์ความเฉื่อยของพื้นที่, ทฤษฎีบทแกนขนาน, รัศมีไจเรชัน",
      "count": 8
    },
    "11": {
      "name_en": "Virtual Work",
      "name_th": "งานเสมือน",
      "desc": "หลักการของงานเสมือน, ฟังก์ชันพลังงานศักย์, ความเสถียรของสมดุล",
      "count": 6
    }
  },
  "total_problems": 188,
  "problems": [
    {
      "id": "1-1",
      "chapter": 1,
      "chapter_name_en": "General Principles",
      "chapter_name_th": "หลักการทั่วไป",
      "number": 1,
      "page_book": 37,
      "page_sol": 680,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "What is the weight in newtons of an object that has a mass of (a) 8 kg, (b) 0.04 kg, and (c) 760 Mg?",
      "question_th_summary": "คำนวณหาน้ำหนัก (Weight in Newtons) ของมวลแต่ละค่าโดยใช้สูตร W = mg",
      "image": "",
      "solution_raw": "Applying W = mg, with g = 9.81 m/s²:\n(a) W = (8 kg)(9.81 m/s²) = 78.5 N\n(b) W = (0.04 kg)(9.81 m/s²) = 0.392 N\n(c) W = (760 * 10³ kg)(9.81 m/s²) = 7.46 * 10⁶ N = 7.46 MN",
      "final_answers": [
        "(a) W = 78.5 N",
        "(b) W = 0.392 N",
        "(c) W = 7.46 MN"
      ],
      "theory_th": "การแปลงหน่วยตามระบบเอสไอ (SI Units) และน้ำหนัก \\(W = m \\cdot g \\quad \\left(g = 9.81\\frac{\\text{m}}{\\text{s}^2} = 32.2\\frac{\\text{ft}}{\\text{s}^2}\\right)\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Applying W = mg, with g = 9.81 \\frac{\\text{m}}{\\text{s}^2}:",
          "raw": "Applying W = mg, with g = 9.81 \\frac{\\text{m}}{\\text{s}^2}:"
        },
        {
          "type": "ans",
          "latex": "(a) W = (8 kg)(9.81 \\frac{\\text{m}}{\\text{s}^2}) = 78.5 N",
          "raw": "(a) W = (8 kg)(9.81 \\frac{\\text{m}}{\\text{s}^2}) = 78.5 N"
        },
        {
          "type": "ans",
          "latex": "(b) W = (0.04 kg)(9.81 \\frac{\\text{m}}{\\text{s}^2}) = 0.392 N",
          "raw": "(b) W = (0.04 kg)(9.81 \\frac{\\text{m}}{\\text{s}^2}) = 0.392 N"
        },
        {
          "type": "ans",
          "latex": "(c) W = (760  \\times  10³ kg)(9.81 \\frac{\\text{m}}{\\text{s}^2}) = 7.46  \\times  10⁶ N = 7.46 MN",
          "raw": "(c) W = (760  \\times  10³ kg)(9.81 \\frac{\\text{m}}{\\text{s}^2}) = 7.46  \\times  10⁶ N = 7.46 MN"
        }
      ],
      "final_answers_math": [
        "(a) W = (8 kg)(9.81 \\frac{\\text{m}}{\\text{s}^2}) = 78.5 N",
        "(b) W = (0.04 kg)(9.81 \\frac{\\text{m}}{\\text{s}^2}) = 0.392 N",
        "(c) W = (760  \\times  10³ kg)(9.81 \\frac{\\text{m}}{\\text{s}^2}) = 7.46  \\times  10⁶ N = 7.46 MN"
      ]
    },
    {
      "id": "1-2",
      "chapter": 1,
      "chapter_name_en": "General Principles",
      "chapter_name_th": "หลักการทั่วไป",
      "number": 2,
      "page_book": 37,
      "page_sol": 680,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Represent each of the following combinations of units in the correct SI form: (a) kN/ms, (b) Mg/mN, and (c) MN/(kg · ms).",
      "question_th_summary": "เขียนหน่วยในรูป SI ที่ถูกต้องโดยจัดรูปคำนำหน้าหน่วยเอสไอ (SI Prefixes)",
      "image": "",
      "solution_raw": "(a) kN/ms = (10³ N)/(10⁻³ s) = 10⁶ N/s = MN/s\n(b) Mg/mN = (10⁶ g)/(10⁻³ N) = (10³ kg)/(10⁻³ N) = 10⁶ kg/N = Gg/N\n(c) MN/(kg · ms) = (10⁶ N)/(kg · 10⁻³ s) = 10⁹ N/(kg · s) = GN/(kg · s)",
      "final_answers": [
        "(a) MN/s",
        "(b) Gg/N",
        "(c) GN/(kg · s)"
      ],
      "theory_th": "การแปลงหน่วยตามระบบเอสไอ (SI Units) และน้ำหนัก \\(W = m \\cdot g \\quad \\left(g = 9.81\\frac{\\text{m}}{\\text{s}^2} = 32.2\\frac{\\text{ft}}{\\text{s}^2}\\right)\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "(a) kN/\\mu_s = (10³ N)/(10⁻³ s) = 10⁶ N/s = MN/s",
          "raw": "(a) kN/ms = (10³ N)/(10⁻³ s) = 10⁶ N/s = MN/s"
        },
        {
          "type": "ans",
          "latex": "(b) Mg/mN = (10⁶ g)/(10⁻³ N) = (10³ kg)/(10⁻³ N) = 10⁶ kg/N = Gg/N",
          "raw": "(b) Mg/mN = (10⁶ g)/(10⁻³ N) = (10³ kg)/(10⁻³ N) = 10⁶ kg/N = Gg/N"
        },
        {
          "type": "ans",
          "latex": "(c) MN/(kg · \\mu_s) = (10⁶ N)/(kg · 10⁻³ s) = 10⁹ N/(kg · s) = GN/(kg · s)",
          "raw": "(c) MN/(kg · ms) = (10⁶ N)/(kg · 10⁻³ s) = 10⁹ N/(kg · s) = GN/(kg · s)"
        }
      ],
      "final_answers_math": [
        "(a) kN/\\mu_s = (10³ N)/(10⁻³ s) = 10⁶ N/s = MN/s",
        "(b) Mg/mN = (10⁶ g)/(10⁻³ N) = (10³ kg)/(10⁻³ N) = 10⁶ kg/N = Gg/N",
        "(c) MN/(kg · \\mu_s) = (10⁶ N)/(kg · 10⁻³ s) = 10⁹ N/(kg · s) = GN/(kg · s)"
      ]
    },
    {
      "id": "1-3",
      "chapter": 1,
      "chapter_name_en": "General Principles",
      "chapter_name_th": "หลักการทั่วไป",
      "number": 3,
      "page_book": 37,
      "page_sol": 680,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Represent each of the following combinations of units in the correct SI form: (a) Mg/ms, (b) N/mm, and (c) mN/(kg · ms).",
      "question_th_summary": "แปลงและจัดรูปหน่วยผสมตามมาตรฐาน SI",
      "image": "",
      "solution_raw": "(a) Mg/ms = (10³ kg)/(10⁻³ s) = 10⁶ kg/s = Gg/s\n(b) N/mm = N/(10⁻³ m) = 10³ N/m = kN/m\n(c) mN/(kg · ms) = (10⁻³ N)/(kg · 10⁻³ s) = N/(kg · s)",
      "final_answers": [
        "(a) Gg/s",
        "(b) kN/m",
        "(c) N/(kg · s)"
      ],
      "theory_th": "การแปลงหน่วยตามระบบเอสไอ (SI Units) และน้ำหนัก \\(W = m \\cdot g \\quad \\left(g = 9.81\\frac{\\text{m}}{\\text{s}^2} = 32.2\\frac{\\text{ft}}{\\text{s}^2}\\right)\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "(a) Mg/\\mu_s = (10³ kg)/(10⁻³ s) = 10⁶ kg/s = Gg/s",
          "raw": "(a) Mg/ms = (10³ kg)/(10⁻³ s) = 10⁶ kg/s = Gg/s"
        },
        {
          "type": "ans",
          "latex": "(b) N/mm = N/(10⁻³ m) = 10³ N/m = kN/m",
          "raw": "(b) N/mm = N/(10⁻³ m) = 10³ N/m = kN/m"
        },
        {
          "type": "ans",
          "latex": "(c) mN/(kg · \\mu_s) = (10⁻³ N)/(kg · 10⁻³ s) = N/(kg · s)",
          "raw": "(c) mN/(kg · ms) = (10⁻³ N)/(kg · 10⁻³ s) = N/(kg · s)"
        }
      ],
      "final_answers_math": [
        "(a) Mg/\\mu_s = (10³ kg)/(10⁻³ s) = 10⁶ kg/s = Gg/s",
        "(b) N/mm = N/(10⁻³ m) = 10³ N/m = kN/m",
        "(c) mN/(kg · \\mu_s) = (10⁻³ N)/(kg · 10⁻³ s) = N/(kg · s)"
      ]
    },
    {
      "id": "1-4",
      "chapter": 1,
      "chapter_name_en": "General Principles",
      "chapter_name_th": "หลักการทั่วไป",
      "number": 4,
      "page_book": 37,
      "page_sol": 680,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Convert: (a) 200 lb · ft to N · m, (b) 350 lb/ft³ to kN/m³, (c) 8 ft/h to mm/s. Express the result to three significant figures.",
      "question_th_summary": "แปลงหน่วยจากระบบ US Customary (FPS) เป็นระบบ SI พร้อมปรับเลขนัยสำคัญ 3 ตัว",
      "image": "",
      "solution_raw": "(a) 200 lb · ft = 200 * 4.4482 N * 0.3048 m = 271 N · m\n(b) 350 lb/ft³ = 350 * 4.4482 N / (0.3048 m)³ = 54.98 kN/m³ = 55.0 kN/m³\n(c) 8 ft/h = (8 * 0.3048 m * 1000 mm/m) / 3600 s = 0.677 mm/s",
      "final_answers": [
        "(a) 271 N · m",
        "(b) 55.0 kN/m³",
        "(c) 0.677 mm/s"
      ],
      "theory_th": "การแปลงหน่วยตามระบบเอสไอ (SI Units) และน้ำหนัก \\(W = m \\cdot g \\quad \\left(g = 9.81\\frac{\\text{m}}{\\text{s}^2} = 32.2\\frac{\\text{ft}}{\\text{s}^2}\\right)\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "(a) 200 lb · ft = 200  \\times  4.4482 N  \\times  0.3048 m = 271 N · m",
          "raw": "(a) 200 lb · ft = 200  \\times  4.4482 N  \\times  0.3048 m = 271 N · m"
        },
        {
          "type": "ans",
          "latex": "(b) 350 lb/ft³ = 350  \\times  4.4482 N / (0.3048 m)³ = 54.98 kN/m³ = 55.0 kN/m³",
          "raw": "(b) 350 lb/ft³ = 350  \\times  4.4482 N / (0.3048 m)³ = 54.98 kN/m³ = 55.0 kN/m³"
        },
        {
          "type": "ans",
          "latex": "(c) 8 ft/h = (8  \\times  0.3048 m  \\times  1000 mm/m) / 3600 s = 0. mm/s",
          "raw": "(c) 8 ft/h = (8  \\times  0.3048 m  \\times  1000 mm/m) / 3600 s = 0. mm/s"
        }
      ],
      "final_answers_math": [
        "(a) 200 lb · ft = 200  \\times  4.4482 N  \\times  0.3048 m = 271 N · m",
        "(b) 350 lb/ft³ = 350  \\times  4.4482 N / (0.3048 m)³ = 54.98 kN/m³ = 55.0 kN/m³",
        "(c) 8 ft/h = (8  \\times  0.3048 m  \\times  1000 mm/m) / 3600 s = 0. mm/s"
      ]
    },
    {
      "id": "1-5",
      "chapter": 1,
      "chapter_name_en": "General Principles",
      "chapter_name_th": "หลักการทั่วไป",
      "number": 5,
      "page_book": 37,
      "page_sol": 680,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Represent each of the following as a number between 0.1 and 1000 using an appropriate prefix: (a) 45 320 kN, (b) 568(10⁵) mm, and (c) 0.00563 mg.",
      "question_th_summary": "เขียนตัวเลขให้อยู่ในช่วง 0.1 ถึง 1000 โดยเลือกใช้คำนำหน้าหน่วยที่เหมาะสม",
      "image": "",
      "solution_raw": "(a) 45 320 kN = 45 320 * 10³ N = 45.32 * 10⁶ N = 45.3 MN\n(b) 568(10⁵) mm = 568 * 10⁵ * 10⁻³ m = 56.8 * 10³ m = 56.8 km\n(c) 0.00563 mg = 0.00563 * 10⁻³ g = 5.63 * 10⁻⁶ g = 5.63 µg",
      "final_answers": [
        "(a) 45.3 MN",
        "(b) 56.8 km",
        "(c) 5.63 µg"
      ],
      "theory_th": "การแปลงหน่วยตามระบบเอสไอ (SI Units) และน้ำหนัก \\(W = m \\cdot g \\quad \\left(g = 9.81\\frac{\\text{m}}{\\text{s}^2} = 32.2\\frac{\\text{ft}}{\\text{s}^2}\\right)\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "(a) 45 320 kN = 45 320  \\times  10³ N = 45.32  \\times  10⁶ N = 45.3 MN",
          "raw": "(a) 45 320 kN = 45 320  \\times  10³ N = 45.32  \\times  10⁶ N = 45.3 MN"
        },
        {
          "type": "ans",
          "latex": "(b) 568(10⁵) mm = 568  \\times  10⁵  \\times  10⁻³ m = 56.8  \\times  10³ m = 56.8 km",
          "raw": "(b) 568(10⁵) mm = 568  \\times  10⁵  \\times  10⁻³ m = 56.8  \\times  10³ m = 56.8 km"
        },
        {
          "type": "ans",
          "latex": "(c) 0.00563 mg = 0.00563  \\times  10⁻³ g = 5.63  \\times  10⁻⁶ g = 5.63 µg",
          "raw": "(c) 0.00563 mg = 0.00563  \\times  10⁻³ g = 5.63  \\times  10⁻⁶ g = 5.63 µg"
        }
      ],
      "final_answers_math": [
        "(a) 45 320 kN = 45 320  \\times  10³ N = 45.32  \\times  10⁶ N = 45.3 MN",
        "(b) 568(10⁵) mm = 568  \\times  10⁵  \\times  10⁻³ m = 56.8  \\times  10³ m = 56.8 km",
        "(c) 0.00563 mg = 0.00563  \\times  10⁻³ g = 5.63  \\times  10⁻⁶ g = 5.63 µg"
      ]
    },
    {
      "id": "1-6",
      "chapter": 1,
      "chapter_name_en": "General Principles",
      "chapter_name_th": "หลักการทั่วไป",
      "number": 6,
      "page_book": 37,
      "page_sol": 680,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Round off the following numbers to three significant figures: (a) 58 342 m, (b) 68.534 s, (c) 2553 N, and (d) 7555 kg.",
      "question_th_summary": "ปัดเศษตัวเลขให้มีเลขนัยสำคัญ 3 ตัวตามกฎการปัดเศษทางวิศวกรรม",
      "image": "",
      "solution_raw": "(a) 58 342 m = 58.3 km\n(b) 68.534 s = 68.5 s\n(c) 2553 N = 2.55 kN\n(d) 7555 kg = 7.56 Mg",
      "final_answers": [
        "(a) 58.3 km",
        "(b) 68.5 s",
        "(c) 2.55 kN",
        "(d) 7.56 Mg"
      ],
      "theory_th": "การแปลงหน่วยตามระบบเอสไอ (SI Units) และน้ำหนัก \\(W = m \\cdot g \\quad \\left(g = 9.81\\frac{\\text{m}}{\\text{s}^2} = 32.2\\frac{\\text{ft}}{\\text{s}^2}\\right)\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "(a) 58 342 m = 58.3 km",
          "raw": "(a) 58 342 m = 58.3 km"
        },
        {
          "type": "ans",
          "latex": "(b) 68.534 s = 68.5 s",
          "raw": "(b) 68.534 s = 68.5 s"
        },
        {
          "type": "ans",
          "latex": "(c) 2553 N = 2.55 kN",
          "raw": "(c) 2553 N = 2.55 kN"
        },
        {
          "type": "ans",
          "latex": "(d) 7555 kg = 7.56 Mg",
          "raw": "(d) 7555 kg = 7.56 Mg"
        }
      ],
      "final_answers_math": [
        "(a) 58 342 m = 58.3 km",
        "(b) 68.534 s = 68.5 s",
        "(c) 2553 N = 2.55 kN",
        "(d) 7555 kg = 7.56 Mg"
      ]
    },
    {
      "id": "F2-1",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 1,
      "page_book": 50,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the magnitude of the resultant force \nacting on the screw eye and its direction measured clockwise \nfrom the x axis.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_1.webp",
      "solution_raw": "FR = 2(2 kN)2 + (6 kN)2 - 2(2 kN)(6 kN) cos 105°\n = 6.798 kN = 6.80 kN \n\nAns.\n \n sin f\n6 kN = sin 105°\n6.798 kN\n ,  f = 58.49°\n \n u = 45° + f = 45° + 58.49° = 103°\nAns.",
      "final_answers": [
        "u = 45° + f = 45° + 58.49° = 103°"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_R = \\sqrt{(2 kN)^2 + (6 kN)^2 - 2(2 kN)(6 kN) \\cos 105^\\circ}",
          "raw": "FR = 2(2 kN)2 + (6 kN)2 - 2(2 kN)(6 kN) cos 105°"
        },
        {
          "type": "ans",
          "latex": "= 6.798 kN = 6.80 kN",
          "raw": "= 6.798 kN = 6.80 kN"
        },
        {
          "type": "calc",
          "latex": "\\frac{\\\\sin \\phi}{6 kN} = \\frac{\\\\sin 105^\\circ}{6.798 kN}",
          "raw": "\\frac{\\sin f}{6 kN} = \\frac{\\sin 105°}{6.798 kN}"
        },
        {
          "type": "calc",
          "latex": ",  \\phi = 58.49^\\circ",
          "raw": ",  f = 58.49°"
        },
        {
          "type": "ans",
          "latex": "\\theta = 45^\\circ + \\phi = 45^\\circ + 58.49^\\circ = 103^\\circ",
          "raw": "u = 45° + f = 45° + 58.49° = 103°"
        }
      ],
      "final_answers_math": [
        "= 6.798 kN = 6.80 kN",
        "\\theta = 45^\\circ + \\phi = 45^\\circ + 58.49^\\circ = 103^\\circ"
      ]
    },
    {
      "id": "F2-2",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 2,
      "page_book": 50,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Two forces act on the hook. Determine the magnitude \nof the resultant force.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_2.webp",
      "solution_raw": "FR = 22002 + 5002 - 2(200)(500) cos 140°\n \n = 666 N \n Ans.",
      "final_answers": [
        "= 666 N"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_R = \\sqrt{200^2 + 500^2 - 2(200)(500) \\cos 140^\\circ}",
          "raw": "FR = 22002 + 5002 - 2(200)(500) cos 140°"
        },
        {
          "type": "ans",
          "latex": "=  N",
          "raw": "=  N"
        }
      ],
      "final_answers_math": [
        "=  N"
      ]
    },
    {
      "id": "F2-3",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 3,
      "page_book": 50,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the magnitude of the resultant force and \nits direction measured counterclockwise from the positive \nx axis.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_3.webp",
      "solution_raw": "FR = 26002 + 8002 - 2(600)(800) cos 60°\n \n = 721.11 N = 721 N\n\nAns.\n \n sin a\n800 = sin 60°\n721.11\n ;  a = 73.90°\n \n f = a - 30° = 73.90° - 30° = 43.9°\nAns.",
      "final_answers": [
        "f = a - 30° = 73.90° - 30° = 43.9°"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_R = \\sqrt{600^2 + 800^2 - 2()(800) \\cos 60^\\circ}",
          "raw": "FR = 26002 + 8002 - 2()(800) cos 60°"
        },
        {
          "type": "ans",
          "latex": "= 721.11 N = 721 N",
          "raw": "= 721.11 N = 721 N"
        },
        {
          "type": "calc",
          "latex": "\\frac{\\\\sin \\alpha}{800} = \\frac{\\\\sin 60^\\circ}{721.11}",
          "raw": "\\frac{\\sin a}{800} = \\frac{\\sin 60°}{721.11}"
        },
        {
          "type": "calc",
          "latex": ";  a = 73.90^\\circ",
          "raw": ";  a = 73.90°"
        },
        {
          "type": "ans",
          "latex": "\\phi = \\alpha - 30^\\circ = 73.90^\\circ - 30^\\circ = 43.9^\\circ",
          "raw": "f = a - 30° = 73.90° - 30° = 43.9°"
        }
      ],
      "final_answers_math": [
        "= 721.11 N = 721 N",
        "\\phi = \\alpha - 30^\\circ = 73.90^\\circ - 30^\\circ = 43.9^\\circ"
      ]
    },
    {
      "id": "F2-4",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 4,
      "page_book": 50,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Resolve the 30-lb force into components along the \nu and v axes, and determine the magnitude of each of these \ncomponents.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components) • หาขนาดของแรงแต่ละแรงที่กระทำ",
      "image": "images/problems/F2_4.webp",
      "solution_raw": "Fu\nsin 45° =\n30\nsin 105°\n ; Fu = 22.0 lb\nAns.\n \nFv\nsin 30° =\n30\nsin 105°\n ; Fv = 15.5 lb\nAns.",
      "final_answers": [
        "; Fu = 22.0 lb",
        "; Fv = 15.5 lb"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\frac{Fu}{\\\\sin 45^\\circ} = \\frac{30}{\\\\sin 105^\\circ}",
          "raw": "\\frac{Fu}{\\sin 45°} = \\frac{30}{\\sin 105°}"
        },
        {
          "type": "ans",
          "latex": "; Fu = 22.0 lb",
          "raw": "; Fu = 22.0 lb"
        },
        {
          "type": "calc",
          "latex": "\\frac{Fv}{\\\\sin 30^\\circ} = \\frac{30}{\\\\sin 105^\\circ}",
          "raw": "\\frac{Fv}{\\sin 30°} = \\frac{30}{\\sin 105°}"
        },
        {
          "type": "ans",
          "latex": "; Fv = 15.5 lb",
          "raw": "; Fv = 15.5 lb"
        }
      ],
      "final_answers_math": [
        "; Fu = 22.0 lb",
        "; Fv = 15.5 lb"
      ]
    },
    {
      "id": "F2-5",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 5,
      "page_book": 50,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "The force F = 450 lb acts on the frame. Resolve this \nforce into components acting along members AB and AC, \nand determine the magnitude of each component.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components) • หาขนาดของแรงแต่ละแรงที่กระทำ",
      "image": "images/problems/F2_5.webp",
      "solution_raw": "FAB\nsin 105° =\n450\nsin 30°\n \n FAB = 869 lb \nAns.\n \n FAC\nsin 45° =\n450\nsin 30°\n \n FAC = 636 lb \nAns.",
      "final_answers": [
        "FAB = 869 lb",
        "FAC = 636 lb"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\frac{FAB}{\\\\sin 105^\\circ} = \\frac{450}{\\\\sin 30^\\circ}",
          "raw": "\\frac{FAB}{\\sin 105°} = \\frac{450}{\\sin 30°}"
        },
        {
          "type": "ans",
          "latex": "FAB = 869 lb",
          "raw": "FAB = 869 lb"
        },
        {
          "type": "calc",
          "latex": "\\frac{FAC}{\\\\sin 45^\\circ} = \\frac{450}{\\\\sin 30^\\circ}",
          "raw": "\\frac{FAC}{\\sin 45°} = \\frac{450}{\\sin 30°}"
        },
        {
          "type": "ans",
          "latex": "FAC =  lb",
          "raw": "FAC =  lb"
        }
      ],
      "final_answers_math": [
        "FAB = 869 lb",
        "FAC =  lb"
      ]
    },
    {
      "id": "F2-6",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 6,
      "page_book": 50,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "If force F is to have a component along the u axis of \nFu = 6 kN, determine the magnitude of F and the magnitude \nof its component Fv along the v axis.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_6.webp",
      "solution_raw": "F\nsin 30° =\n6\nsin 105° F = 3.11 kN\nAns.\n \n \nFv\nsin 45° =\n6\nsin 105° Fv = 4.39 kN\nAns.",
      "final_answers": [
        "sin 105° F = 3.11 kN",
        "sin 105° Fv = 4.39 kN"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "\\frac{F}{\\\\sin 30^\\circ} = \\frac{6}{\\\\sin 105^\\circ} F = 3.11 kN",
          "raw": "\\frac{F}{\\sin 30°} = \\frac{6}{\\sin 105°} F = 3.11 kN"
        },
        {
          "type": "ans",
          "latex": "\\frac{Fv}{\\\\sin 45^\\circ} = \\frac{6}{\\\\sin 105^\\circ} Fv = 4.39 kN",
          "raw": "\\frac{Fv}{\\sin 45°} = \\frac{6}{\\sin 105°} Fv = 4.39 kN"
        }
      ],
      "final_answers_math": [
        "\\frac{F}{\\\\sin 30^\\circ} = \\frac{6}{\\\\sin 105^\\circ} F = 3.11 kN",
        "\\frac{Fv}{\\\\sin 45^\\circ} = \\frac{6}{\\\\sin 105^\\circ} Fv = 4.39 kN"
      ]
    },
    {
      "id": "F2-7",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 7,
      "page_book": 61,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Resolve each force acting on the post into its x and \ny components.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F2_7.webp",
      "solution_raw": "(F1)x = 0 (F1)y = 300 N \nAns.\n \n (F2)x = -(450 N) cos 45° = -318 N\nAns.\n \n (F2)y = (450 N) sin 45° = 318 N\nAns.\n \n (F3)x = 13\n52600 N = 360 N\nAns.\n \n (F3)y = 14\n52600 N = 480 N\nAns.",
      "final_answers": [
        "(F1)x = 0 (F1)y = 300 N",
        "(F2)x = -(450 N) cos 45° = -318 N",
        "(F2)y = (450 N) sin 45° = 318 N",
        "52600 N = 360 N",
        "52600 N = 480 N"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "(F1)x = 0 (F1)y = 300 N",
          "raw": "(F1)x = 0 (F1)y = 300 N"
        },
        {
          "type": "ans",
          "latex": "(F2)x = -(450 N) \\cos 45^\\circ = -318 N",
          "raw": "(F2)x = -(450 N) cos 45° = -318 N"
        },
        {
          "type": "ans",
          "latex": "(F2)y = (450 N) \\sin 45^\\circ = 318 N",
          "raw": "(F2)y = (450 N) sin 45° = 318 N"
        },
        {
          "type": "ans",
          "latex": "(F3)x = \\left(\\frac{3}{5}\\right)600 N = 360 N",
          "raw": "(F3)x = \\left(\\frac{3}{5}\\right)600 N = 360 N"
        },
        {
          "type": "ans",
          "latex": "(F3)y = \\left(\\frac{4}{5}\\right)600 N = 480 N",
          "raw": "(F3)y = \\left(\\frac{4}{5}\\right)600 N = 480 N"
        }
      ],
      "final_answers_math": [
        "(F1)x = 0 (F1)y = 300 N",
        "(F2)x = -(450 N) \\cos 45^\\circ = -318 N",
        "(F2)y = (450 N) \\sin 45^\\circ = 318 N",
        "(F3)x = \\left(\\frac{3}{5}\\right)600 N = 360 N",
        "(F3)y = \\left(\\frac{4}{5}\\right)600 N = 480 N"
      ]
    },
    {
      "id": "F2-8",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 8,
      "page_book": 61,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Prob. F2–7\nF2–8.  Determine the magnitude and direction of the \nresultant force.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_8.webp",
      "solution_raw": "FRx = 300 + 400 cos 30° - 25014\n52 = 446.4 N\n \n FRy = 400 sin 30° + 25013\n52 = 350 N\n \n FR = 2(446.4)2 + 3502 = 567 N\n\nAns.\n \n u = tan-1 350\n446.4 = 38.1°a\nAns.\nFundamental Problems \nPartial Solutions And Answers \n620\n\n \nFundamental Problems \n621",
      "final_answers": [
        "446.4 = 38.1°a",
        "Partial Solutions And wers"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "(F_R)_x = 300 + 400 \\cos 30^\\circ - 250\\left(\\frac{4}{5}\\right) = 446.4 N",
          "raw": "FRx = 300 + 400 cos 30° - 250\\left(\\frac{4}{5}\\right) = 446.4 N"
        },
        {
          "type": "calc",
          "latex": "(F_R)_y = 400 \\sin 30^\\circ + 250\\left(\\frac{3}{5}\\right) = 350 N",
          "raw": "FRy = 400 sin 30° + 250\\left(\\frac{3}{5}\\right) = 350 N"
        },
        {
          "type": "ans",
          "latex": "F_R = \\sqrt{(446.4)^2 + 350^2} = 567 N",
          "raw": "FR = 2(446.4)2 + 3502 = 567 N"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\\\tan^{-1}\\left(\\frac{350}{446.4}\\right) = 38.1^\\circa",
          "raw": "u = \\tan^{-1}\\left(\\frac{350}{446.4}\\right) = 38.1°a"
        }
      ],
      "final_answers_math": [
        "F_R = \\sqrt{(446.4)^2 + 350^2} = 567 N",
        "\\theta = \\\\tan^{-1}\\left(\\frac{350}{446.4}\\right) = 38.1^\\circa"
      ]
    },
    {
      "id": "F2-9",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 9,
      "page_book": 61,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Prob. F2–8\nF2–9.  Determine the magnitude of the resultant force \nacting on the corbel and its direction u measured \ncounterclockwise from the x axis.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_9.webp",
      "solution_raw": "+S(FR)x = Fx;\n (FR)x = - (700 lb) cos 30° + 0 + 13\n52 (600 lb)\n = -246.22 lb\n + c(FR)y = Fy;\n (FR)y = -(700 lb) sin 30° - 400 lb - 14\n52 (600 lb)\n = -1230 lb\n FR = 2(246.22 lb)2 + (1230 lb)2 = 1254 lb\n Ans.\n f = tan-11 1230 lb\n246.22 lb2 = 78.68°\n u = 180° + f = 180° + 78.68° = 259°\n Ans.",
      "final_answers": [
        "FR = 2(246.22 lb)2 + (1230 lb)2 = 1254 lb",
        "u = 180° + f = 180° + 78.68° = 259°"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma (F_R)_x = \\Sigma F_x \\implies",
          "raw": "+S(FR)x = Fx;"
        },
        {
          "type": "calc",
          "latex": "(F_R)x = - (700 lb) \\cos 30^\\circ + 0 + \\left(\\frac{3}{5}\\right) ( lb)",
          "raw": "(FR)x = - (700 lb) cos 30° + 0 + \\left(\\frac{3}{5}\\right) ( lb)"
        },
        {
          "type": "calc",
          "latex": "= -246.22 lb",
          "raw": "= -246.22 lb"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma (F_R)_y = \\Sigma F_y \\implies",
          "raw": "+ c(FR)y = Fy;"
        },
        {
          "type": "calc",
          "latex": "(F_R)y = -(700 lb) \\sin 30^\\circ - 400 lb - \\left(\\frac{4}{5}\\right) ( lb)",
          "raw": "(FR)y = -(700 lb) sin 30° - 400 lb - \\left(\\frac{4}{5}\\right) ( lb)"
        },
        {
          "type": "calc",
          "latex": "= -1230 lb",
          "raw": "= -1230 lb"
        },
        {
          "type": "ans",
          "latex": "F_R = \\sqrt{(246.22 lb)^2 + (1230 lb)^2} = 1254 lb",
          "raw": "FR = 2(246.22 lb)2 + (1230 lb)2 = 1254 lb"
        },
        {
          "type": "calc",
          "latex": "\\phi = \\\\tan^{-1}\\left(\\frac{1230 lb}{246.22 lb}\\right) = 78.68^\\circ",
          "raw": "f = \\tan^{-1}\\left(\\frac{1230 lb}{246.22 lb}\\right) = 78.68°"
        },
        {
          "type": "ans",
          "latex": "\\theta = 180^\\circ + \\phi = 180^\\circ + 78.68^\\circ = 259^\\circ",
          "raw": "u = 180° + f = 180° + 78.68° = 259°"
        }
      ],
      "final_answers_math": [
        "F_R = \\sqrt{(246.22 lb)^2 + (1230 lb)^2} = 1254 lb",
        "\\theta = 180^\\circ + \\phi = 180^\\circ + 78.68^\\circ = 259^\\circ"
      ]
    },
    {
      "id": "F2-10",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 10,
      "page_book": 61,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "If the resultant force acting on the bracket is to be \n750 N directed along the positive x axis, determine the \nmagnitude of F and its direction u.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_10.webp",
      "solution_raw": "+S(FR)x = Fx;\n \n 750 N = F cos u + 1 5\n132(325 N) + (600 N)cos 45°\n \n + c(FR)y = Fy;\n \n0 = F sin u + 112\n132(325 N) - (600 N)sin 45°\n \n tan u = 0.6190 u = 31.76° = 31.8°a\nAns.\n \n F = 236 N\nAns.",
      "final_answers": [
        "tan u = 0.6190 u = 31.76° = 31.8°a",
        "F = 236 N"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma (F_R)_x = \\Sigma F_x \\implies",
          "raw": "+S(FR)x = Fx;"
        },
        {
          "type": "calc",
          "latex": "750 N = F \\cos \\theta + \\left(\\frac{5}{13}\\right)(325 N) + ( N)\\cos 45^\\circ",
          "raw": "750 N = F cos u + \\left(\\frac{5}{13}\\right)(325 N) + ( N)cos 45°"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma (F_R)_y = \\Sigma F_y \\implies",
          "raw": "+ c(FR)y = Fy;"
        },
        {
          "type": "calc",
          "latex": "0 = F \\sin \\theta + \\left(\\frac{12}{13}\\right)(325 N) - ( N)\\sin 45^\\circ",
          "raw": "0 = F sin u + \\left(\\frac{12}{13}\\right)(325 N) - ( N)sin 45°"
        },
        {
          "type": "ans",
          "latex": "\\tan \\theta = 0.6190 \\theta = 31.76^\\circ = 31.8^\\circa",
          "raw": "tan u = 0.6190 u = 31.76° = 31.8°a"
        },
        {
          "type": "ans",
          "latex": "F = 236 N",
          "raw": "F = 236 N"
        }
      ],
      "final_answers_math": [
        "\\tan \\theta = 0.6190 \\theta = 31.76^\\circ = 31.8^\\circa",
        "F = 236 N"
      ]
    },
    {
      "id": "F2-11",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 11,
      "page_book": 61,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "If the magnitude of the resultant force acting on \nthe bracket is to be 80 lb directed along the u axis, determine \nthe magnitude of F and its direction u.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_11.webp",
      "solution_raw": "S\n+ (FR)x = Fx;\n \n (80 lb) cos 45° = F cos u + 50 lb - 13\n5290 lb\n \n + c(FR)y = Fy;\n \n-(80 lb) sin 45° = F sin u - 14\n52(90 lb)\n \n tan u = 0.2547 u = 14.29° = 14.3°a\nAns.\n \n F = 62.5 lb\nAns.",
      "final_answers": [
        "tan u = 0.2547 u = 14.29° = 14.3°a",
        "F = 62.5 lb"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ (F_R)x = F_x;",
          "raw": "+ (FR)x = Fx;"
        },
        {
          "type": "calc",
          "latex": "(80 lb) \\cos 45^\\circ = F \\cos \\theta + 50 lb - \\left(\\frac{3}{5}\\right)90 lb",
          "raw": "(80 lb) cos 45° = F cos u + 50 lb - \\left(\\frac{3}{5}\\right)90 lb"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma (F_R)_y = \\Sigma F_y \\implies",
          "raw": "+ c(FR)y = Fy;"
        },
        {
          "type": "calc",
          "latex": "-(80 lb) \\sin 45^\\circ = F \\sin \\theta - \\left(\\frac{4}{5}\\right)(90 lb)",
          "raw": "-(80 lb) sin 45° = F sin u - \\left(\\frac{4}{5}\\right)(90 lb)"
        },
        {
          "type": "ans",
          "latex": "\\tan \\theta = 0.2547 \\theta = 14.29^\\circ = 14.3^\\circa",
          "raw": "tan u = 0.2547 u = 14.29° = 14.3°a"
        },
        {
          "type": "ans",
          "latex": "F = 62.5 lb",
          "raw": "F = 62.5 lb"
        }
      ],
      "final_answers_math": [
        "\\tan \\theta = 0.2547 \\theta = 14.29^\\circ = 14.3^\\circa",
        "F = 62.5 lb"
      ]
    },
    {
      "id": "F2-12",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 12,
      "page_book": 61,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the magnitude of the resultant force \nand its direction u measured counterclockwise from the \npositive x axis.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_12.webp",
      "solution_raw": "(FR)x = 1514\n52 + 0 + 1514\n52 = 24 kN S\n \n (FR)y = 1513\n52 + 20 - 1513\n52 = 20 kN c\n \n FR = 31.2 kN\n\nAns.\n \n u = 39.8°\n\nAns.",
      "final_answers": [],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "(F_R)x = 15\\left(\\frac{4}{5}\\right) + 0 + 15\\left(\\frac{4}{5}\\right) = 24 kN S",
          "raw": "(FR)x = 15\\left(\\frac{4}{5}\\right) + 0 + 15\\left(\\frac{4}{5}\\right) = 24 kN S"
        },
        {
          "type": "calc",
          "latex": "(F_R)y = 15\\left(\\frac{3}{5}\\right) + 20 - 15\\left(\\frac{3}{5}\\right) = 20 kN c",
          "raw": "(FR)y = 15\\left(\\frac{3}{5}\\right) + 20 - 15\\left(\\frac{3}{5}\\right) = 20 kN c"
        },
        {
          "type": "ans",
          "latex": "F_R = 31.2 kN",
          "raw": "FR = 31.2 kN"
        },
        {
          "type": "ans",
          "latex": "\\theta = 39.8^\\circ",
          "raw": "u = 39.8°"
        }
      ],
      "final_answers_math": [
        "F_R = 31.2 kN",
        "\\theta = 39.8^\\circ"
      ]
    },
    {
      "id": "F2-13",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 13,
      "page_book": 73,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the coordinate direction angles of the \nforce.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_13.webp",
      "solution_raw": "Fx = 75 cos 30° sin 45° = 45.93 lb\n \n Fy = 75 cos 30° cos 45° = 45.93 lb\n \n Fz = -75 sin 30° = -37.5 lb\n \n a = cos-1145.93\n75 2 = 52.2° \n\nAns.\n \n b = cos-1145.93\n75 2 = 52.2° \n\nAns.\n \n g = cos-11 -37.5\n75 2 = 120° \n\nAns.\nChapter 2",
      "final_answers": [],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_x = 75 \\cos 30^\\circ \\sin 45^\\circ = 45.93 lb",
          "raw": "Fx = 75 cos 30° sin 45° = 45.93 lb"
        },
        {
          "type": "calc",
          "latex": "F_y = 75 \\cos 30^\\circ \\cos 45^\\circ = 45.93 lb",
          "raw": "Fy = 75 cos 30° cos 45° = 45.93 lb"
        },
        {
          "type": "calc",
          "latex": "F_z = -75 \\sin 30^\\circ = -37.5 lb",
          "raw": "Fz = -75 sin 30° = -37.5 lb"
        },
        {
          "type": "ans",
          "latex": "a = \\\\cos^{-1}\\left(\\frac{45.93}{75}\\right) = 52.2^\\circ",
          "raw": "a = \\cos^{-1}\\left(\\frac{45.93}{75}\\right) = 52.2°"
        },
        {
          "type": "ans",
          "latex": "b = \\\\cos^{-1}\\left(\\frac{45.93}{75}\\right) = 52.2^\\circ",
          "raw": "b = \\cos^{-1}\\left(\\frac{45.93}{75}\\right) = 52.2°"
        },
        {
          "type": "ans",
          "latex": "g = \\\\cos^{-1}\\left(\\frac{-37.5}{75}\\right) = 120^\\circ",
          "raw": "g = \\cos^{-1}\\left(\\frac{-37.5}{75}\\right) = 120°"
        }
      ],
      "final_answers_math": [
        "a = \\\\cos^{-1}\\left(\\frac{45.93}{75}\\right) = 52.2^\\circ",
        "b = \\\\cos^{-1}\\left(\\frac{45.93}{75}\\right) = 52.2^\\circ",
        "g = \\\\cos^{-1}\\left(\\frac{-37.5}{75}\\right) = 120^\\circ"
      ]
    },
    {
      "id": "F2-14",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 14,
      "page_book": 73,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Express the force as a Cartesian vector.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_14.webp",
      "solution_raw": "cos b = 21 - cos2 120° - cos2 60° = {0.7071\n \nRequire b = 135°.\n \n F = FuF = (500 N)(-0.5i - 0.7071j + 0.5k)\n \n = 5-250i - 354j + 250k6 N\n Ans.",
      "final_answers": [
        "= 5-250i - 354j + 250k6 N"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\cos b = 21 - \\\\cos^2 120^\\circ - \\\\cos^2 60^\\circ = \\pm 0.7071",
          "raw": "cos b = 21 - cos2 120° - cos2 60° = \\pm 0.7071"
        },
        {
          "type": "calc",
          "latex": "Require b = 135^\\circ.",
          "raw": "Require b = 135°."
        },
        {
          "type": "calc",
          "latex": "F = FuF = (500 N)(-0.5i - 0.7071j + 0.5k)",
          "raw": "F = FuF = (500 N)(-0.5i - 0.7071j + 0.5k)"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{-250\\hat{i} - 354\\hat{j} + 250\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{-250\\hat{i} - 354\\hat{j} + 250\\hat{k}\\right\\}\\text{ N}"
        }
      ],
      "final_answers_math": [
        "= \\left\\{-250\\hat{i} - 354\\hat{j} + 250\\hat{k}\\right\\}\\text{ N}"
      ]
    },
    {
      "id": "F2-15",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 15,
      "page_book": 73,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Express the force as a Cartesian vector.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_15.webp",
      "solution_raw": "cos2a + cos2135° + cos2 120° = 1\n \n a = 60°\n \n F = FuF = (500 N)(0.5i - 0.7071j - 0.5k)\n \n = 5250i - 354j - 250k6 N\n\nAns.",
      "final_answers": [],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\\\cos^2a + \\\\cos^2135^\\circ + \\\\cos^2 120^\\circ = 1",
          "raw": "cos2a + cos2135° + cos2 120° = 1"
        },
        {
          "type": "calc",
          "latex": "a = 60^\\circ",
          "raw": "a = 60°"
        },
        {
          "type": "calc",
          "latex": "F = FuF = (500 N)(0.5i - 0.7071j - 0.5k)",
          "raw": "F = FuF = (500 N)(0.5i - 0.7071j - 0.5k)"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{250\\hat{i} - 354\\hat{j} - 250\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{250\\hat{i} - 354\\hat{j} - 250\\hat{k}\\right\\}\\text{ N}"
        }
      ],
      "final_answers_math": [
        "= \\left\\{250\\hat{i} - 354\\hat{j} - 250\\hat{k}\\right\\}\\text{ N}"
      ]
    },
    {
      "id": "F2-16",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 16,
      "page_book": 73,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Express the force as a Cartesian vector.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_16.webp",
      "solution_raw": "Fz = (50 lb) sin 45° = 35.36 lb\n \n F\u001d = (50 lb) cos 45° = 35.36 lb\n \n Fx = 13\n52(35.36 lb) = 21.21 lb\n \n Fy = 14\n52(35.36 lb) = 28.28 lb\n \n F = 5-21.2i + 28.3j + 35.4k6 lb\nAns.",
      "final_answers": [
        "F = 5-21.2i + 28.3j + 35.4k6 lb"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_z = (50 lb) \\sin 45^\\circ = 35.36 lb",
          "raw": "Fz = (50 lb) sin 45° = 35.36 lb"
        },
        {
          "type": "calc",
          "latex": "F\u001d = (50 lb) \\cos 45^\\circ = 35.36 lb",
          "raw": "F\u001d = (50 lb) cos 45° = 35.36 lb"
        },
        {
          "type": "calc",
          "latex": "F_x = \\left(\\frac{3}{5}\\right)(35.36 lb) = 21.21 lb",
          "raw": "Fx = \\left(\\frac{3}{5}\\right)(35.36 lb) = 21.21 lb"
        },
        {
          "type": "calc",
          "latex": "F_y = \\left(\\frac{4}{5}\\right)(35.36 lb) = 28.28 lb",
          "raw": "Fy = \\left(\\frac{4}{5}\\right)(35.36 lb) = 28.28 lb"
        },
        {
          "type": "ans",
          "latex": "F = \\left\\{-21.2\\hat{i} + 28.3\\hat{j} + 35.4\\hat{k}\\right\\}\\text{ lb}",
          "raw": "F = \\left\\{-21.2\\hat{i} + 28.3\\hat{j} + 35.4\\hat{k}\\right\\}\\text{ lb}"
        }
      ],
      "final_answers_math": [
        "F = \\left\\{-21.2\\hat{i} + 28.3\\hat{j} + 35.4\\hat{k}\\right\\}\\text{ lb}"
      ]
    },
    {
      "id": "F2-17",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 17,
      "page_book": 73,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Express the force as a Cartesian vector.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_17.webp",
      "solution_raw": "Fz = (750 N) sin 45° = 530.33 N\n \n F\u001d = (750 N) cos 45° = 530.33 N\n \n Fx = (530.33 N) cos 60° = 265.2 N\n \n Fy = (530.33 N) sin 60° = 459.3 N\n \n F2 = 5265i - 459j + 530k6 N\n\nAns.",
      "final_answers": [],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_z = (750 N) \\sin 45^\\circ = 530.33 N",
          "raw": "Fz = (750 N) sin 45° = 530.33 N"
        },
        {
          "type": "calc",
          "latex": "F\u001d = (750 N) \\cos 45^\\circ = 530.33 N",
          "raw": "F\u001d = (750 N) cos 45° = 530.33 N"
        },
        {
          "type": "calc",
          "latex": "F_x = (530.33 N) \\cos 60^\\circ = 265.2 N",
          "raw": "Fx = (530.33 N) cos 60° = 265.2 N"
        },
        {
          "type": "calc",
          "latex": "F_y = (530.33 N) \\sin 60^\\circ = 459.3 N",
          "raw": "Fy = (530.33 N) sin 60° = 459.3 N"
        },
        {
          "type": "ans",
          "latex": "F2 = \\left\\{265\\hat{i} - 459\\hat{j} + 530\\hat{k}\\right\\}\\text{ N}",
          "raw": "F2 = \\left\\{265\\hat{i} - 459\\hat{j} + 530\\hat{k}\\right\\}\\text{ N}"
        }
      ],
      "final_answers_math": [
        "F2 = \\left\\{265\\hat{i} - 459\\hat{j} + 530\\hat{k}\\right\\}\\text{ N}"
      ]
    },
    {
      "id": "F2-18",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 18,
      "page_book": 73,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the resultant force acting on the hook.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_18.webp",
      "solution_raw": "F1 = 14\n52(500 lb) j + 13\n52(500 lb)k\n \n = 5400j + 300k6 lb\n \n F2 = [(800 lb) cos 45°] cos 30° i\n \n + [(800 lb) cos 45°] sin 30°j\n \n + (800 lb) sin 45° (-k)\n \n = 5489.90i + 282.84j - 565.69k6 lb\n \n FR = F1 + F2 = 5490i + 683j - 266k6 lb Ans.",
      "final_answers": [
        "FR = F1 + F2 = 5490i + 683j - 266k6 lb"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F1 = \\left(\\frac{4}{5}\\right)(500 lb) j + \\left(\\frac{3}{5}\\right)(500 lb)k",
          "raw": "F1 = \\left(\\frac{4}{5}\\right)(500 lb) j + \\left(\\frac{3}{5}\\right)(500 lb)k"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{400\\hat{j} + 300\\hat{k}\\right\\}\\text{ lb}",
          "raw": "= \\left\\{400\\hat{j} + 300\\hat{k}\\right\\}\\text{ lb}"
        },
        {
          "type": "calc",
          "latex": "F2 = [(800 lb) \\cos 45^\\circ] \\cos 30^\\circ i",
          "raw": "F2 = [(800 lb) cos 45°] cos 30° i"
        },
        {
          "type": "calc",
          "latex": "+ [(800 lb) \\cos 45^\\circ] \\sin 30^\\circj",
          "raw": "+ [(800 lb) cos 45°] sin 30°j"
        },
        {
          "type": "calc",
          "latex": "+ (800 lb) \\sin 45^\\circ (-k)",
          "raw": "+ (800 lb) sin 45° (-k)"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{489.90\\hat{i} + 282.84\\hat{j} - 565.69\\hat{k}\\right\\}\\text{ lb}",
          "raw": "= \\left\\{489.90\\hat{i} + 282.84\\hat{j} - 565.69\\hat{k}\\right\\}\\text{ lb}"
        },
        {
          "type": "ans",
          "latex": "F_R = F1 + F2 = \\left\\{490\\hat{i} + 683\\hat{j} - 266\\hat{k}\\right\\}\\text{ lb}",
          "raw": "FR = F1 + F2 = \\left\\{490\\hat{i} + 683\\hat{j} - 266\\hat{k}\\right\\}\\text{ lb} Ans."
        }
      ],
      "final_answers_math": [
        "F_R = F1 + F2 = \\left\\{490\\hat{i} + 683\\hat{j} - 266\\hat{k}\\right\\}\\text{ lb}"
      ]
    },
    {
      "id": "F2-19",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 19,
      "page_book": 86,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Express the position vector rAB in Cartesian \nvector form, then determine its magnitude and coordinate \ndirection angles.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_19.webp",
      "solution_raw": "rAB = 5-6i + 6j + 3k6 m \n\nAns.\n \n rAB = 2(-6 m)2 + (6 m)2 + (3 m)2 = 9 m\nAns.\n \n a = 132°, b = 48.2°, g = 70.5°\n\nAns.",
      "final_answers": [
        "rAB = 2(-6 m)2 + (6 m)2 + (3 m)2 = 9 m"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "rAB = \\left\\{-6\\hat{i} + 6\\hat{j} + 3\\hat{k}\\right\\}\\text{ m}",
          "raw": "rAB = \\left\\{-6\\hat{i} + 6\\hat{j} + 3\\hat{k}\\right\\}\\text{ m}"
        },
        {
          "type": "ans",
          "latex": "rAB = \\sqrt{(-6 m)^2 + (6 m)^2 + (3 m)^2} = 9 m",
          "raw": "rAB = 2(-6 m)2 + (6 m)2 + (3 m)2 = 9 m"
        },
        {
          "type": "ans",
          "latex": "a = 132^\\circ, b = 48.2^\\circ, g = 70.5^\\circ",
          "raw": "a = 132°, b = 48.2°, g = 70.5°"
        }
      ],
      "final_answers_math": [
        "rAB = \\left\\{-6\\hat{i} + 6\\hat{j} + 3\\hat{k}\\right\\}\\text{ m}",
        "rAB = \\sqrt{(-6 m)^2 + (6 m)^2 + (3 m)^2} = 9 m",
        "a = 132^\\circ, b = 48.2^\\circ, g = 70.5^\\circ"
      ]
    },
    {
      "id": "F2-20",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 20,
      "page_book": 86,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the length of the rod and the position \nvector directed from A to B. What is the angle u?",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_20.webp",
      "solution_raw": "rAB = 5-4i + 2j + 4k6 ft\n\nAns.\n \n rAB = 2(-4 ft)2 + (2 ft)2 + (4 ft)2 = 6 ft\nAns.\n \n a = cos-11 -4 ft\n6 ft 2 = 131.8°\n \n u = 180° - 131.8° = 48.2°\n\nAns.",
      "final_answers": [
        "rAB = 2(-4 ft)2 + (2 ft)2 + (4 ft)2 = 6 ft"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "rAB = \\left\\{-4\\hat{i} + 2\\hat{j} + 4\\hat{k}\\right\\}\\text{ ft}",
          "raw": "rAB = \\left\\{-4\\hat{i} + 2\\hat{j} + 4\\hat{k}\\right\\}\\text{ ft}"
        },
        {
          "type": "ans",
          "latex": "rAB = \\sqrt{(-4 ft)^2 + (2 ft)^2 + (4 ft)^2} = 6 ft",
          "raw": "rAB = 2(-4 ft)2 + (2 ft)2 + (4 ft)2 = 6 ft"
        },
        {
          "type": "calc",
          "latex": "a = \\\\cos^{-1}1 -4 ft",
          "raw": "a = cos-11 -4 ft"
        },
        {
          "type": "calc",
          "latex": "6 ft 2 = 131.8^\\circ",
          "raw": "6 ft 2 = 131.8°"
        },
        {
          "type": "ans",
          "latex": "\\theta = 180^\\circ - 131.8^\\circ = 48.2^\\circ",
          "raw": "u = 180° - 131.8° = 48.2°"
        }
      ],
      "final_answers_math": [
        "rAB = \\left\\{-4\\hat{i} + 2\\hat{j} + 4\\hat{k}\\right\\}\\text{ ft}",
        "rAB = \\sqrt{(-4 ft)^2 + (2 ft)^2 + (4 ft)^2} = 6 ft",
        "\\theta = 180^\\circ - 131.8^\\circ = 48.2^\\circ"
      ]
    },
    {
      "id": "F2-21",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 21,
      "page_book": 86,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Express the force as a Cartesian vector.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_21.webp",
      "solution_raw": "rAB = 52i + 3j - 6k6 m\n \n FAB = FABuAB\n \n = (630 N)12\n7i + 3\n7j - 6\n7k2\n \n = 5180i + 270j - 540k6 N \nAns.\n\n622 \nPartial Solutions And Answers",
      "final_answers": [
        "= 5180i + 270j - 540k6 N",
        "Partial Solutions And wers"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "rAB = \\left\\{2\\hat{i} + 3\\hat{j} - 6\\hat{k}\\right\\}\\text{ m}",
          "raw": "rAB = \\left\\{2\\hat{i} + 3\\hat{j} - 6\\hat{k}\\right\\}\\text{ m}"
        },
        {
          "type": "calc",
          "latex": "FAB = FABuAB",
          "raw": "FAB = FABuAB"
        },
        {
          "type": "calc",
          "latex": "= ( N)12",
          "raw": "= ( N)12"
        },
        {
          "type": "calc",
          "latex": "7i + 3",
          "raw": "7i + 3"
        },
        {
          "type": "calc",
          "latex": "7j - 6",
          "raw": "7j - 6"
        },
        {
          "type": "calc",
          "latex": "7k2",
          "raw": "7k2"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{180\\hat{i} + 270\\hat{j} - 540\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{180\\hat{i} + 270\\hat{j} - 540\\hat{k}\\right\\}\\text{ N}"
        }
      ],
      "final_answers_math": [
        "= \\left\\{180\\hat{i} + 270\\hat{j} - 540\\hat{k}\\right\\}\\text{ N}"
      ]
    },
    {
      "id": "F2-22",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 22,
      "page_book": 86,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Express the force as a Cartesian vector.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_22.webp",
      "solution_raw": "F = FuAB = 900N1 -4\n9i + 7\n9j - 4\n9k2\n \n = 5-400i + 700j - 400k6 N\n\nAns.",
      "final_answers": [],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F = FuAB = 900N1 -4",
          "raw": "F = FuAB = 900N1 -4"
        },
        {
          "type": "calc",
          "latex": "9i + 7",
          "raw": "9i + 7"
        },
        {
          "type": "calc",
          "latex": "9j - 4",
          "raw": "9j - 4"
        },
        {
          "type": "calc",
          "latex": "9k2",
          "raw": "9k2"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{-400\\hat{i} + 700\\hat{j} - 400\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{-400\\hat{i} + 700\\hat{j} - 400\\hat{k}\\right\\}\\text{ N}"
        }
      ],
      "final_answers_math": [
        "= \\left\\{-400\\hat{i} + 700\\hat{j} - 400\\hat{k}\\right\\}\\text{ N}"
      ]
    },
    {
      "id": "F2-23",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 23,
      "page_book": 86,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the magnitude of the resultant force \nat A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_23.webp",
      "solution_raw": "FB = FBuB\n \n = (840 N)13\n7i - 2\n7j - 6\n7k2\n \n = 5360i - 240j - 720k6 N\n \n FC = FCuC\n \n = (420 N)12\n7i + 3\n7j - 6\n7k2\n \n = 5120i + 180j - 360k6 N\n \n FR = 2(480 N)2 + (-60 N)2 + (-1080 N)2\n \n = 1.18 kN\n Ans.",
      "final_answers": [
        "= 1.18 kN"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "FB = FBuB",
          "raw": "FB = FBuB"
        },
        {
          "type": "calc",
          "latex": "= (840 N)13",
          "raw": "= (840 N)13"
        },
        {
          "type": "calc",
          "latex": "7i - 2",
          "raw": "7i - 2"
        },
        {
          "type": "calc",
          "latex": "7j - 6",
          "raw": "7j - 6"
        },
        {
          "type": "calc",
          "latex": "7k2",
          "raw": "7k2"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{360\\hat{i} - 240\\hat{j} - 720\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{360\\hat{i} - 240\\hat{j} - 720\\hat{k}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "FC = FCuC",
          "raw": "FC = FCuC"
        },
        {
          "type": "calc",
          "latex": "= (420 N)12",
          "raw": "= (420 N)12"
        },
        {
          "type": "calc",
          "latex": "7i + 3",
          "raw": "7i + 3"
        },
        {
          "type": "calc",
          "latex": "7j - 6",
          "raw": "7j - 6"
        },
        {
          "type": "calc",
          "latex": "7k2",
          "raw": "7k2"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{120\\hat{i} + 180\\hat{j} - 360\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{120\\hat{i} + 180\\hat{j} - 360\\hat{k}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "F_R = \\sqrt{(480 N)^2 + (-60 N)^2 + (-1080 N)^2}",
          "raw": "FR = 2(480 N)2 + (-60 N)2 + (-1080 N)2"
        },
        {
          "type": "ans",
          "latex": "= 1.18 kN",
          "raw": "= 1.18 kN"
        }
      ],
      "final_answers_math": [
        "= 1.18 kN"
      ]
    },
    {
      "id": "F2-24",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 24,
      "page_book": 86,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the resultant force at A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F2_24.webp",
      "solution_raw": "FB = FBuB\n \n = (600 lb)1 -1\n3i + 2\n3j - 2\n3k2\n \n = 5-200i + 400j - 400k6 lb\n \n FC = FCuC\n \n = (490 lb)1 -6\n7i + 3\n7j - 2\n7k2\n \n = 5-420i + 210j - 140k6 lb\n \n FR = FB + FC = 5-620i + 610j - 540k6 lbAns.",
      "final_answers": [
        "FR = FB + FC = 5-620i + 610j - 540k6 lb"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "FB = FBuB",
          "raw": "FB = FBuB"
        },
        {
          "type": "calc",
          "latex": "= ( lb)1 -1",
          "raw": "= ( lb)1 -1"
        },
        {
          "type": "calc",
          "latex": "3i + 2",
          "raw": "3i + 2"
        },
        {
          "type": "calc",
          "latex": "3j - 2",
          "raw": "3j - 2"
        },
        {
          "type": "calc",
          "latex": "3k2",
          "raw": "3k2"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{-200\\hat{i} + 400\\hat{j} - 400\\hat{k}\\right\\}\\text{ lb}",
          "raw": "= \\left\\{-200\\hat{i} + 400\\hat{j} - 400\\hat{k}\\right\\}\\text{ lb}"
        },
        {
          "type": "calc",
          "latex": "FC = FCuC",
          "raw": "FC = FCuC"
        },
        {
          "type": "calc",
          "latex": "= (490 lb)1 -6",
          "raw": "= (490 lb)1 -6"
        },
        {
          "type": "calc",
          "latex": "7i + 3",
          "raw": "7i + 3"
        },
        {
          "type": "calc",
          "latex": "7j - 2",
          "raw": "7j - 2"
        },
        {
          "type": "calc",
          "latex": "7k2",
          "raw": "7k2"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{-420\\hat{i} + 210\\hat{j} - 140\\hat{k}\\right\\}\\text{ lb}",
          "raw": "= \\left\\{-420\\hat{i} + 210\\hat{j} - 140\\hat{k}\\right\\}\\text{ lb}"
        },
        {
          "type": "ans",
          "latex": "F_R = FB + FC = \\left\\{-620\\hat{i} + 610\\hat{j} - 540\\hat{k}\\right\\}\\text{ lb}.",
          "raw": "FR = FB + FC = \\left\\{-620\\hat{i} + 610\\hat{j} - 540\\hat{k}\\right\\}\\text{ lbAns}."
        }
      ],
      "final_answers_math": [
        "F_R = FB + FC = \\left\\{-620\\hat{i} + 610\\hat{j} - 540\\hat{k}\\right\\}\\text{ lb}."
      ]
    },
    {
      "id": "F2-25",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 25,
      "page_book": 97,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the angle u between the force and the \nline AO.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_25.webp",
      "solution_raw": "uAO = -1\n3i + 2\n3j - 2\n3k\n \n uF = -0.5345i + 0.8018j + 0.2673k\n \n u = cos-1 (uAO # uF) = 57.7°\n\nAns.",
      "final_answers": [],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "uAO = -1",
          "raw": "uAO = -1"
        },
        {
          "type": "calc",
          "latex": "3i + 2",
          "raw": "3i + 2"
        },
        {
          "type": "calc",
          "latex": "3j - 2",
          "raw": "3j - 2"
        },
        {
          "type": "calc",
          "latex": "3k",
          "raw": "3k"
        },
        {
          "type": "calc",
          "latex": "uF = -0.5345i + 0.8018j + 0.2673k",
          "raw": "uF = -0.5345i + 0.8018j + 0.2673k"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\\\cos^{-1} (uAO  \\cdot  uF) = 57.7^\\circ",
          "raw": "u = cos-1 (uAO  \\cdot  uF) = 57.7°"
        }
      ],
      "final_answers_math": [
        "\\theta = \\\\cos^{-1} (uAO  \\cdot  uF) = 57.7^\\circ"
      ]
    },
    {
      "id": "F2-26",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 26,
      "page_book": 97,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the angle u between the force and the \nline AB.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_26.webp",
      "solution_raw": "uAB = -3\n5j + 4\n5k\n \n uF = 4\n5i - 3\n5j\n \n u = cos-1 (uAB # uF) = 68.9°\nAns.",
      "final_answers": [
        "u = cos-1 (uAB · uF) = 68.9°"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "uAB = -3",
          "raw": "uAB = -3"
        },
        {
          "type": "calc",
          "latex": "5j + 4",
          "raw": "5j + 4"
        },
        {
          "type": "calc",
          "latex": "5k",
          "raw": "5k"
        },
        {
          "type": "calc",
          "latex": "uF = 4",
          "raw": "uF = 4"
        },
        {
          "type": "calc",
          "latex": "5i - 3",
          "raw": "5i - 3"
        },
        {
          "type": "calc",
          "latex": "5j",
          "raw": "5j"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\\\cos^{-1} (uAB  \\cdot  uF) = 68.9^\\circ",
          "raw": "u = cos-1 (uAB  \\cdot  uF) = 68.9°"
        }
      ],
      "final_answers_math": [
        "\\theta = \\\\cos^{-1} (uAB  \\cdot  uF) = 68.9^\\circ"
      ]
    },
    {
      "id": "F2-27",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 27,
      "page_book": 97,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the angle u between the force and the \nline OA.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_27.webp",
      "solution_raw": "uOA = 12\n13i +\n5\n13j\n \n uOA # j = uOA(1) cos u\n \n cos u =\n5\n13; u = 67.4°\nAns.",
      "final_answers": [
        "13; u = 67.4°"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "uOA = 12",
          "raw": "uOA = 12"
        },
        {
          "type": "calc",
          "latex": "13i +",
          "raw": "13i +"
        },
        {
          "type": "calc",
          "latex": "5",
          "raw": "5"
        },
        {
          "type": "calc",
          "latex": "13j",
          "raw": "13j"
        },
        {
          "type": "calc",
          "latex": "uOA  \\cdot  j = uOA(1) \\cos \\theta",
          "raw": "uOA  \\cdot  j = uOA(1) cos u"
        },
        {
          "type": "calc",
          "latex": "\\cos \\theta =",
          "raw": "cos u ="
        },
        {
          "type": "calc",
          "latex": "5",
          "raw": "5"
        },
        {
          "type": "ans",
          "latex": "13; \\theta = 67.4^\\circ",
          "raw": "13; u = 67.4°"
        }
      ],
      "final_answers_math": [
        "13; \\theta = 67.4^\\circ"
      ]
    },
    {
      "id": "F2-28",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 28,
      "page_book": 97,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the projected component of the force \nalong the line OA.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_28.webp",
      "solution_raw": "uOA = 12\n13i +\n5\n13j\n \n F = FuF = [650j] N\n \n FOA = F # uOA = 250 N\n \n FOA = FOA uOA = 5231i + 96.2j6 N\nAns.",
      "final_answers": [
        "FOA = FOA uOA = 5231i + 96.2j6 N"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "uOA = 12",
          "raw": "uOA = 12"
        },
        {
          "type": "calc",
          "latex": "13i +",
          "raw": "13i +"
        },
        {
          "type": "calc",
          "latex": "5",
          "raw": "5"
        },
        {
          "type": "calc",
          "latex": "13j",
          "raw": "13j"
        },
        {
          "type": "calc",
          "latex": "F = FuF = [650j] N",
          "raw": "F = FuF = [650j] N"
        },
        {
          "type": "calc",
          "latex": "FOA = F \\cdot uOA = 250 N",
          "raw": "FOA = F  \\cdot  uOA = 250 N"
        },
        {
          "type": "ans",
          "latex": "FOA = FOA uOA = \\left\\{231\\hat{i} + 96.2\\hat{j}\\right\\}\\text{ N}",
          "raw": "FOA = FOA uOA = \\left\\{231\\hat{i} + 96.2\\hat{j}\\right\\}\\text{ N}"
        }
      ],
      "final_answers_math": [
        "FOA = FOA uOA = \\left\\{231\\hat{i} + 96.2\\hat{j}\\right\\}\\text{ N}"
      ]
    },
    {
      "id": "F2-29",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 29,
      "page_book": 97,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Find the magnitude of the projected component of \nthe force along the pipe AO.",
      "question_th_summary": "โจทย์บทที่ 2 เวกเตอร์ของแรง",
      "image": "images/problems/F2_29.webp",
      "solution_raw": "F = (400 N) \n54 i + 1 j - 6 k6m\n2(4 m)2 + (1 m)2 + (-6 m)2\n \n = 5219.78i + 54.94j - 329.67k6 N\n \n uAO =\n5-4 j - 6 k6 m\n2(-4 m)2 + (-6 m)2\n \n = -0.5547j - 0.8321k\n \n (FAO)proj = F # uAO = 244 N\n Ans.",
      "final_answers": [
        "(FAO)proj = F · uAO = 244 N"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F = (400 N)",
          "raw": "F = (400 N)"
        },
        {
          "type": "calc",
          "latex": "\\left\\{4\\hat{i} + 1\\hat{j} - 6\\hat{k}\\right\\}\\text{ m}",
          "raw": "\\left\\{4\\hat{i} + 1\\hat{j} - 6\\hat{k}\\right\\}\\text{ m}"
        },
        {
          "type": "calc",
          "latex": "\\sqrt{(4 m)^2} + (1 m)^2 + (-6 m)^2",
          "raw": "2(4 m)2 + (1 m)2 + (-6 m)2"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{219.78\\hat{i} + 54.94\\hat{j} - 329.67\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{219.78\\hat{i} + 54.94\\hat{j} - 329.67\\hat{k}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "uAO =",
          "raw": "uAO ="
        },
        {
          "type": "calc",
          "latex": "\\left\\{-4\\hat{j} - 6\\hat{k}\\right\\}\\text{ m}",
          "raw": "\\left\\{-4\\hat{j} - 6\\hat{k}\\right\\}\\text{ m}"
        },
        {
          "type": "calc",
          "latex": "\\sqrt{(-4 m)^2} + (-6 m)^2",
          "raw": "2(-4 m)2 + (-6 m)2"
        },
        {
          "type": "calc",
          "latex": "= -0.5547j - 0.8321k",
          "raw": "= -0.5547j - 0.8321k"
        },
        {
          "type": "ans",
          "latex": "(FAO)proj = F \\cdot uAO = 244 N",
          "raw": "(FAO)proj = F  \\cdot  uAO = 244 N"
        }
      ],
      "final_answers_math": [
        "(FAO)proj = F \\cdot uAO = 244 N"
      ]
    },
    {
      "id": "F2-30",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 30,
      "page_book": 97,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the components of the force acting \nparallel and perpendicular to the axis of the pole.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F2_30.webp",
      "solution_raw": "F = [(-600 lb) cos 60°] sin 30° i\n \n + [(600 lb) cos 60°] cos 30° j\n \n + [(600 lb) sin 60°] k\n \n = 5-150i + 259.81j + 519.62k6 lb\n \n uA = -2\n3i + 2\n3j + 1\n3k\n \n (FA)par = F # uA = 446.41 lb = 446 lb\nAns.\n \n (FA)per = 2(600 lb)2 - (446.41 lb)2\n \n = 401 lb\n\nAns.",
      "final_answers": [
        "(FA)par = F · uA = 446.41 lb = 446 lb"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F = [(- lb) \\cos 60^\\circ] \\sin 30^\\circ i",
          "raw": "F = [(- lb) cos 60°] sin 30° i"
        },
        {
          "type": "calc",
          "latex": "+ [( lb) \\cos 60^\\circ] \\cos 30^\\circ j",
          "raw": "+ [( lb) cos 60°] cos 30° j"
        },
        {
          "type": "calc",
          "latex": "+ [( lb) \\sin 60^\\circ] k",
          "raw": "+ [( lb) sin 60°] k"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{-150\\hat{i} + 259.81\\hat{j} + 519.62\\hat{k}\\right\\}\\text{ lb}",
          "raw": "= \\left\\{-150\\hat{i} + 259.81\\hat{j} + 519.62\\hat{k}\\right\\}\\text{ lb}"
        },
        {
          "type": "calc",
          "latex": "uA = -2",
          "raw": "uA = -2"
        },
        {
          "type": "calc",
          "latex": "3i + 2",
          "raw": "3i + 2"
        },
        {
          "type": "calc",
          "latex": "3j + 1",
          "raw": "3j + 1"
        },
        {
          "type": "calc",
          "latex": "3k",
          "raw": "3k"
        },
        {
          "type": "ans",
          "latex": "(FA)par = F  \\cdot  uA = 446.41 lb = 446 lb",
          "raw": "(FA)par = F  \\cdot  uA = 446.41 lb = 446 lb"
        },
        {
          "type": "calc",
          "latex": "(FA)per = \\sqrt{( lb)^2 - (446.41 lb)^2}",
          "raw": "(FA)per = 2( lb)2 - (446.41 lb)2"
        },
        {
          "type": "ans",
          "latex": "= 401 lb",
          "raw": "= 401 lb"
        }
      ],
      "final_answers_math": [
        "(FA)par = F  \\cdot  uA = 446.41 lb = 446 lb",
        "= 401 lb"
      ]
    },
    {
      "id": "F2-31",
      "chapter": 2,
      "chapter_name_en": "Force Vectors",
      "chapter_name_th": "เวกเตอร์ของแรง",
      "number": 31,
      "page_book": 97,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the magnitudes of the components of the \nforce F = 56 N acting along and perpendicular to line AO.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F2_31.webp",
      "solution_raw": "F = 56 N13\n7i - 6\n7j + 2\n7k2\n \n= 524i - 48j + 16k6 N\n 1FAO2} = F# uAO = 124i - 48j + 16k2 # 13\n7\n i - 6\n7\n j - 2\n7k2\n \n= 46.86 N = 46.9 N\nAns.\n 1FAO2 # = 2F2 - 1FAO2} = 215622 - 146.8622\n \n= 30.7 N\nAns.\nChapter 3",
      "final_answers": [
        "= 46.86 N = 46.9 N",
        "= 30.7 N"
      ],
      "theory_th": "การรวมเวกเตอร์ของแรง, กฎของโคไซน์และไซน์: \\(C = \\sqrt{A^2 + B^2 - 2AB\\cos c}, \\quad \\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F = 56 N13",
          "raw": "F = 56 N13"
        },
        {
          "type": "calc",
          "latex": "7i - 6",
          "raw": "7i - 6"
        },
        {
          "type": "calc",
          "latex": "7j + 2",
          "raw": "7j + 2"
        },
        {
          "type": "calc",
          "latex": "7k2",
          "raw": "7k2"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{24\\hat{i} - 48\\hat{j} + 16\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{24\\hat{i} - 48\\hat{j} + 16\\hat{k}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "1FAO2} = F \\cdot  uAO = 124i - 48j + 16k2  \\cdot  13",
          "raw": "1FAO2} = F \\cdot  uAO = 124i - 48j + 16k2  \\cdot  13"
        },
        {
          "type": "calc",
          "latex": "7",
          "raw": "7"
        },
        {
          "type": "calc",
          "latex": "i - 6",
          "raw": "i - 6"
        },
        {
          "type": "calc",
          "latex": "7",
          "raw": "7"
        },
        {
          "type": "calc",
          "latex": "j - 2",
          "raw": "j - 2"
        },
        {
          "type": "calc",
          "latex": "7k2",
          "raw": "7k2"
        },
        {
          "type": "ans",
          "latex": "= 46.86 N = 46.9 N",
          "raw": "= 46.86 N = 46.9 N"
        },
        {
          "type": "calc",
          "latex": "1FAO2  \\cdot  = 2F2 - 1FAO2} = 215622 - 146.8622",
          "raw": "1FAO2  \\cdot  = 2F2 - 1FAO2} = 215622 - 146.8622"
        },
        {
          "type": "ans",
          "latex": "= 30.7 N",
          "raw": "= 30.7 N"
        }
      ],
      "final_answers_math": [
        "= 46.86 N = 46.9 N",
        "= 30.7 N"
      ]
    },
    {
      "id": "F3-1",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 1,
      "page_book": 119,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "The crate has a weight of 550 lb. Determine the \nforce in each supporting cable.",
      "question_th_summary": "โจทย์บทที่ 3 สมดุลของอนุภาค",
      "image": "images/problems/F3_1.webp",
      "solution_raw": "+S Fx = 0; 4\n5FAC - FAB cos 30° = 0\n \n+ c Fy = 0; 3\n5FAC + FAB sin 30° - 550 = 0\n \nFAB = 478 lb \nAns.\n \nFAC = 518 lb \nAns.",
      "final_answers": [
        "FAB = 478 lb",
        "FAC = 518 lb"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies 4",
          "raw": "+S Fx = 0; 4"
        },
        {
          "type": "calc",
          "latex": "5FAC - FAB \\cos 30^\\circ = 0",
          "raw": "5FAC - FAB cos 30° = 0"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 3",
          "raw": "+ c Fy = 0; 3"
        },
        {
          "type": "calc",
          "latex": "5FAC + FAB \\sin 30^\\circ - 550 = 0",
          "raw": "5FAC + FAB sin 30° - 550 = 0"
        },
        {
          "type": "ans",
          "latex": "FAB = 478 lb",
          "raw": "FAB = 478 lb"
        },
        {
          "type": "ans",
          "latex": "FAC = 518 lb",
          "raw": "FAC = 518 lb"
        }
      ],
      "final_answers_math": [
        "FAB = 478 lb",
        "FAC = 518 lb"
      ]
    },
    {
      "id": "F3-2",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 2,
      "page_book": 119,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "The beam has a weight of 700 lb. Determine the \nshortest cable ABC that can be used to lift it if the maximum \nforce the cable can sustain is 1500 lb.",
      "question_th_summary": "โจทย์บทที่ 3 สมดุลของอนุภาค",
      "image": "images/problems/F3_2.webp",
      "solution_raw": "+ c Fy = 0; -2(1500) sin u + 700 = 0\n \n u = 13.5°\n \n LABC = 21\n5 ft\ncos 13.5°2 = 10.3 ft\nAns.",
      "final_answers": [
        "cos 13.5°2 = 10.3 ft"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies -2(1500) \\sin \\theta + 700 = 0",
          "raw": "+ c Fy = 0; -2(1500) sin u + 700 = 0"
        },
        {
          "type": "calc",
          "latex": "\\theta = 13.5^\\circ",
          "raw": "u = 13.5°"
        },
        {
          "type": "calc",
          "latex": "LABC = 21",
          "raw": "LABC = 21"
        },
        {
          "type": "calc",
          "latex": "5 ft",
          "raw": "5 ft"
        },
        {
          "type": "ans",
          "latex": "\\cos 13.5^\\circ2 = 10.3 ft",
          "raw": "cos 13.5°2 = 10.3 ft"
        }
      ],
      "final_answers_math": [
        "\\cos 13.5^\\circ2 = 10.3 ft"
      ]
    },
    {
      "id": "F3-3",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 3,
      "page_book": 119,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "If the 5-kg block is suspended from the pulley B and \nthe sag of the cord is d = 0.15 m, determine the force in cord \nABC. Neglect the size of the pulley.",
      "question_th_summary": "โจทย์บทที่ 3 สมดุลของอนุภาค",
      "image": "images/problems/F3_3.webp",
      "solution_raw": "S\n+ Fx = 0; T cos u - T cos f = 0\n \n f = u\n \n + c Fy = 0; 2T sin u - 49.05 N = 0\n \n u = tan-110.15 m\n0.2 m 2 = 36.87°\n \n T = 40.9 N\nAns.",
      "final_answers": [
        "T = 40.9 N"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ F_x = 0; T \\cos \\theta - T \\cos \\phi = 0",
          "raw": "+ Fx = 0; T cos u - T cos f = 0"
        },
        {
          "type": "calc",
          "latex": "\\phi = \\theta",
          "raw": "f = u"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 2T \\sin \\theta - 49.05 N = 0",
          "raw": "+ c Fy = 0; 2T sin u - 49.05 N = 0"
        },
        {
          "type": "calc",
          "latex": "\\theta = \\\\tan^{-1}\\left(\\frac{0.15 m}{0.2 m}\\right) = 36.87^\\circ",
          "raw": "u = \\tan^{-1}\\left(\\frac{0.15 m}{0.2 m}\\right) = 36.87°"
        },
        {
          "type": "ans",
          "latex": "T = 40.9 N",
          "raw": "T = 40.9 N"
        }
      ],
      "final_answers_math": [
        "T = 40.9 N"
      ]
    },
    {
      "id": "F3-4",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 4,
      "page_book": 119,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "The block has a mass of 5 kg and rests on the smooth \nplane. Determine the unstretched length of the spring.",
      "question_th_summary": "โจทย์บทที่ 3 สมดุลของอนุภาค",
      "image": "images/problems/F3_4.webp",
      "solution_raw": "+Q Fx = 0; 4\n5(Fsp) - 5(9.81) sin 45° = 0\n \n Fsp = 43.35 N\n \n Fsp = k(l - l0); 43.35 = 200(0.5 - l0)\n \n l0 = 0.283 m\nAns.\n\n \nFundamental Problems \n623",
      "final_answers": [
        "l0 = 0.283 m"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+Q F_x = 0; 4",
          "raw": "+Q Fx = 0; 4"
        },
        {
          "type": "calc",
          "latex": "5(Fsp) - 5(9.81) \\sin 45^\\circ = 0",
          "raw": "5(Fsp) - 5(9.81) sin 45° = 0"
        },
        {
          "type": "calc",
          "latex": "Fsp = 43.35 N",
          "raw": "Fsp = 43.35 N"
        },
        {
          "type": "calc",
          "latex": "Fsp = k(l - l0); 43.35 = 200(0.5 - l0)",
          "raw": "Fsp = k(l - l0); 43.35 = 200(0.5 - l0)"
        },
        {
          "type": "ans",
          "latex": "l0 = 0.283 m",
          "raw": "l0 = 0.283 m"
        }
      ],
      "final_answers_math": [
        "l0 = 0.283 m"
      ]
    },
    {
      "id": "F3-5",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 5,
      "page_book": 119,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "If the mass of cylinder C is 40 kg, determine the \nmass of cylinder A in order to hold the assembly in the \nposition shown.",
      "question_th_summary": "โจทย์บทที่ 3 สมดุลของอนุภาค",
      "image": "images/problems/F3_5.webp",
      "solution_raw": "+ c Fy = 0; (392.4 N)sin 30° - mA(9.81) = 0\n \n mA = 20 kg\nAns.",
      "final_answers": [
        "mA = 20 kg"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies (392.4 N)\\sin 30^\\circ - mA(9.81) = 0",
          "raw": "+ c Fy = 0; (392.4 N)sin 30° - mA(9.81) = 0"
        },
        {
          "type": "ans",
          "latex": "mA = 20 kg",
          "raw": "mA = 20 kg"
        }
      ],
      "final_answers_math": [
        "mA = 20 kg"
      ]
    },
    {
      "id": "F3-6",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 6,
      "page_book": 119,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the tension in cables AB, BC, and CD, \nnecessary to support the 10-kg and 15-kg traffic lights at B \nand C, respectively. Also, find the angle u.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension)",
      "image": "images/problems/F3_6.webp",
      "solution_raw": "+ c Fy = 0; TAB sin 15° - 10(9.81) N = 0\n \n TAB = 379.03 N = 379 N\nAns.\n \n +S Fx = 0; TBC - 379.03 N cos 15° = 0\n \n TBC = 366.11 N = 366 N\nAns.\n \n +S Fx = 0; TCD cos u - 366.11 N = 0\n \n + c Fy = 0; TCD sin u - 15(9.81) N = 0\n \n TCD = 395 N\nAns.\n \n u = 21.9°\nAns.",
      "final_answers": [
        "TAB = 379.03 N = 379 N",
        "TBC = 366.11 N = 366 N",
        "TCD = 395 N",
        "u = 21.9°"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies TAB \\sin 15^\\circ - 10(9.81) N = 0",
          "raw": "+ c Fy = 0; TAB sin 15° - 10(9.81) N = 0"
        },
        {
          "type": "ans",
          "latex": "TAB = 379.03 N = 379 N",
          "raw": "TAB = 379.03 N = 379 N"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies TBC - 379.03 N \\cos 15^\\circ = 0",
          "raw": "+S Fx = 0; TBC - 379.03 N cos 15° = 0"
        },
        {
          "type": "ans",
          "latex": "TBC = 366.11 N = 366 N",
          "raw": "TBC = 366.11 N = 366 N"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies TCD \\cos \\theta - 366.11 N = 0",
          "raw": "+S Fx = 0; TCD cos u - 366.11 N = 0"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies TCD \\sin \\theta - 15(9.81) N = 0",
          "raw": "+ c Fy = 0; TCD sin u - 15(9.81) N = 0"
        },
        {
          "type": "ans",
          "latex": "TCD = 395 N",
          "raw": "TCD = 395 N"
        },
        {
          "type": "ans",
          "latex": "\\theta = 21.9^\\circ",
          "raw": "u = 21.9°"
        }
      ],
      "final_answers_math": [
        "TAB = 379.03 N = 379 N",
        "TBC = 366.11 N = 366 N",
        "TCD = 395 N",
        "\\theta = 21.9^\\circ"
      ]
    },
    {
      "id": "F3-7",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 7,
      "page_book": 133,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the magnitude of forces F1, F2, F3, so \nthat the particle is held in equilibrium.",
      "question_th_summary": "โจทย์บทที่ 3 สมดุลของอนุภาค",
      "image": "images/problems/F3_7.webp",
      "solution_raw": "Fx = 0; 313\n52F3413\n52 + 600 N - F2 = 0 \n(1)\n \n Fy = 0; 14\n52F1 - 313\n52F3414\n52 = 0 \n(2)\n \n Fz = 0; 14\n52F3 + 13\n52F1 - 900 N = 0 \n(3)\n \n F3 = 776 N\nAns.\n \n F1 = 466 N\nAns.\n \n F2 = 879 N\nAns.",
      "final_answers": [
        "F3 = 776 N",
        "F1 = 466 N",
        "F2 = 879 N"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_x = 0; 3\\left(\\frac{3}{5}\\right)F34\\left(\\frac{3}{5}\\right) +  N - F2 = 0",
          "raw": "Fx = 0; 3\\left(\\frac{3}{5}\\right)F34\\left(\\frac{3}{5}\\right) +  N - F2 = 0"
        },
        {
          "type": "calc",
          "latex": "(1)",
          "raw": "(1)"
        },
        {
          "type": "calc",
          "latex": "F_y = 0; \\left(\\frac{4}{5}\\right)F1 - 3\\left(\\frac{3}{5}\\right)F34\\left(\\frac{4}{5}\\right) = 0",
          "raw": "Fy = 0; \\left(\\frac{4}{5}\\right)F1 - 3\\left(\\frac{3}{5}\\right)F34\\left(\\frac{4}{5}\\right) = 0"
        },
        {
          "type": "calc",
          "latex": "(2)",
          "raw": "(2)"
        },
        {
          "type": "calc",
          "latex": "F_z = 0; \\left(\\frac{4}{5}\\right)F3 + \\left(\\frac{3}{5}\\right)F1 - 900 N = 0",
          "raw": "Fz = 0; \\left(\\frac{4}{5}\\right)F3 + \\left(\\frac{3}{5}\\right)F1 - 900 N = 0"
        },
        {
          "type": "calc",
          "latex": "(3)",
          "raw": "(3)"
        },
        {
          "type": "ans",
          "latex": "F3 = 776 N",
          "raw": "F3 = 776 N"
        },
        {
          "type": "ans",
          "latex": "F1 = 466 N",
          "raw": "F1 = 466 N"
        },
        {
          "type": "ans",
          "latex": "F2 = 879 N",
          "raw": "F2 = 879 N"
        }
      ],
      "final_answers_math": [
        "F3 = 776 N",
        "F1 = 466 N",
        "F2 = 879 N"
      ]
    },
    {
      "id": "F3-8",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 8,
      "page_book": 133,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the tension developed in cables AB, AC, \nand AD.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension)",
      "image": "images/problems/F3_8.webp",
      "solution_raw": "Fz = 0; FAD14\n52 - 900 = 0\n \n FAD = 1125 N = 1.125 kN\nAns.\n \n Fy = 0; FAC14\n52 - 112513\n52 = 0\n \n FAC = 843.75 N = 844 N\nAns.\n \n Fx = 0; FAB - 843.7513\n52 = 0\n \n FAB = 506.25 N = 506 N\nAns.",
      "final_answers": [
        "FAD = 1125 N = 1.125 kN",
        "FAC = 843.75 N = 844 N",
        "FAB = 506.25 N = 506 N"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_z = 0; FAD\\left(\\frac{4}{5}\\right) - 900 = 0",
          "raw": "Fz = 0; FAD\\left(\\frac{4}{5}\\right) - 900 = 0"
        },
        {
          "type": "ans",
          "latex": "FAD = 1125 N = 1.125 kN",
          "raw": "FAD = 1125 N = 1.125 kN"
        },
        {
          "type": "calc",
          "latex": "F_y = 0; FAC\\left(\\frac{4}{5}\\right) - 1125\\left(\\frac{3}{5}\\right) = 0",
          "raw": "Fy = 0; FAC\\left(\\frac{4}{5}\\right) - 1125\\left(\\frac{3}{5}\\right) = 0"
        },
        {
          "type": "ans",
          "latex": "FAC = 843.75 N = 844 N",
          "raw": "FAC = 843.75 N = 844 N"
        },
        {
          "type": "calc",
          "latex": "F_x = 0; FAB - 843.75\\left(\\frac{3}{5}\\right) = 0",
          "raw": "Fx = 0; FAB - 843.75\\left(\\frac{3}{5}\\right) = 0"
        },
        {
          "type": "ans",
          "latex": "FAB = 506.25 N = 506 N",
          "raw": "FAB = 506.25 N = 506 N"
        }
      ],
      "final_answers_math": [
        "FAD = 1125 N = 1.125 kN",
        "FAC = 843.75 N = 844 N",
        "FAB = 506.25 N = 506 N"
      ]
    },
    {
      "id": "F3-9",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 9,
      "page_book": 133,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the tension developed in cables AB, AC, \nand AD.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension)",
      "image": "images/problems/F3_9.webp",
      "solution_raw": "FAD = FADarAD\nrAD\nb = 1\n3FADi - 2\n3FAD j + 2\n3FAD k\n \n Fz = 0; \n2\n3FAD - 600 = 0\n \n \n \nFAD = 900 N\nAns.\n \n Fy = 0; \nFAB cos 30° - 2\n3 (900) = 0 \n \n \nFAB = 692.82 N = 693 N\nAns.\n \n Fx = 0; \n1\n3 (900) + 692.82 sin 30° - FAC = 0\n \n \n \nFAC = 646.41 N = 646 N\nAns.",
      "final_answers": [
        "FAD = 900 N",
        "FAB = 692.82 N = 693 N",
        "FAC = 646.41 N = 646 N"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "FAD = FADarAD",
          "raw": "FAD = FADarAD"
        },
        {
          "type": "calc",
          "latex": "rAD",
          "raw": "rAD"
        },
        {
          "type": "calc",
          "latex": "b = 1",
          "raw": "b = 1"
        },
        {
          "type": "calc",
          "latex": "3FADi - 2",
          "raw": "3FADi - 2"
        },
        {
          "type": "calc",
          "latex": "3FAD j + 2",
          "raw": "3FAD j + 2"
        },
        {
          "type": "calc",
          "latex": "3FAD k",
          "raw": "3FAD k"
        },
        {
          "type": "calc",
          "latex": "F_z = 0;",
          "raw": "Fz = 0;"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "3FAD -  = 0",
          "raw": "3FAD -  = 0"
        },
        {
          "type": "ans",
          "latex": "FAD = 900 N",
          "raw": "FAD = 900 N"
        },
        {
          "type": "calc",
          "latex": "F_y = 0;",
          "raw": "Fy = 0;"
        },
        {
          "type": "calc",
          "latex": "FAB \\cos 30^\\circ - 2",
          "raw": "FAB cos 30° - 2"
        },
        {
          "type": "calc",
          "latex": "3 (900) = 0",
          "raw": "3 (900) = 0"
        },
        {
          "type": "ans",
          "latex": "FAB = .82 N =  N",
          "raw": "FAB = .82 N =  N"
        },
        {
          "type": "calc",
          "latex": "F_x = 0;",
          "raw": "Fx = 0;"
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "3 (900) + .82 \\sin 30^\\circ - FAC = 0",
          "raw": "3 (900) + .82 sin 30° - FAC = 0"
        },
        {
          "type": "ans",
          "latex": "FAC = .41 N =  N",
          "raw": "FAC = .41 N =  N"
        }
      ],
      "final_answers_math": [
        "FAD = 900 N",
        "FAB = .82 N =  N",
        "FAC = .41 N =  N"
      ]
    },
    {
      "id": "F3-10",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 10,
      "page_book": 133,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the tension developed in cables AB, \nAC, and AD.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension)",
      "image": "images/problems/F3_10.webp",
      "solution_raw": "FAC = FAC 5-cos 60° sin 30° i\n \n \n + cos 60° cos 30° j + sin 60° k6\n \n = -0.25FAC i + 0.4330FAC j + 0.8660FAC k\n \n FAD = FAD5cos 120° i + cos 120° j + cos 45° k6\n \n = -0.5FAD i - 0.5FAD j + 0.7071FAD k\n \n Fy = 0; 0.4330FAC - 0.5FAD = 0\n \n Fz = 0; 0.8660FAC + 0.7071FAD - 300 = 0\n \n FAD = 175.74 lb = 176 lb\nAns.\n \n FAC = 202.92 lb = 203 lb\nAns.\n \n Fx = 0; FAB - 0.25(202.92) - 0.5(175.74) = 0\n \n FAB = 138.60 lb = 139 lb\nAns.",
      "final_answers": [
        "FAD = 175.74 lb = 176 lb",
        "FAC = 202.92 lb = 203 lb",
        "FAB = 138.60 lb = 139 lb"
      ],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "FAC = FAC 5-\\cos 60^\\circ \\sin 30^\\circ i",
          "raw": "FAC = FAC 5-cos 60° sin 30° i"
        },
        {
          "type": "calc",
          "latex": "+ \\cos 60^\\circ \\cos 30^\\circ j + \\sin 60^\\circ k6",
          "raw": "+ cos 60° cos 30° j + sin 60° k6"
        },
        {
          "type": "calc",
          "latex": "= -0.25FAC i + 0.4330FAC j + 0.8660FAC k",
          "raw": "= -0.25FAC i + 0.4330FAC j + 0.8660FAC k"
        },
        {
          "type": "calc",
          "latex": "FAD = FAD5cos 120^\\circ i + \\cos 120^\\circ j + \\cos 45^\\circ k6",
          "raw": "FAD = FAD5cos 120° i + cos 120° j + cos 45° k6"
        },
        {
          "type": "calc",
          "latex": "= -0.5FAD i - 0.5FAD j + 0.7071FAD k",
          "raw": "= -0.5FAD i - 0.5FAD j + 0.7071FAD k"
        },
        {
          "type": "calc",
          "latex": "F_y = 0; 0.4330FAC - 0.5FAD = 0",
          "raw": "Fy = 0; 0.4330FAC - 0.5FAD = 0"
        },
        {
          "type": "calc",
          "latex": "F_z = 0; 0.8660FAC + 0.7071FAD - 300 = 0",
          "raw": "Fz = 0; 0.8660FAC + 0.7071FAD - 300 = 0"
        },
        {
          "type": "ans",
          "latex": "FAD = 175.74 lb = 176 lb",
          "raw": "FAD = 175.74 lb = 176 lb"
        },
        {
          "type": "ans",
          "latex": "FAC = 202.92 lb = 203 lb",
          "raw": "FAC = 202.92 lb = 203 lb"
        },
        {
          "type": "calc",
          "latex": "F_x = 0; FAB - 0.25(202.92) - 0.5(175.74) = 0",
          "raw": "Fx = 0; FAB - 0.25(202.92) - 0.5(175.74) = 0"
        },
        {
          "type": "ans",
          "latex": "FAB = 138.60 lb = 139 lb",
          "raw": "FAB = 138.60 lb = 139 lb"
        }
      ],
      "final_answers_math": [
        "FAD = 175.74 lb = 176 lb",
        "FAC = 202.92 lb = 203 lb",
        "FAB = 138.60 lb = 139 lb"
      ]
    },
    {
      "id": "F3-11",
      "chapter": 3,
      "chapter_name_en": "Equilibrium of a Particle",
      "chapter_name_th": "สมดุลของอนุภาค",
      "number": 11,
      "page_book": 133,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "The 150-lb crate is supported by cables AB, AC, \nand AD. Determine the tension in these wires.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension)",
      "image": "images/problems/F3_11.webp",
      "solution_raw": "FB = FBarAB\nrAB\nb\n \n = FBJ\n5-6i + 3j + 2k6 ft\n2(-6 ft)2 + (3 ft)2 + (2 ft)2 R\n \n = -6\n7FBi + 3\n7 FB j + 2\n7 FB k\n \n FC = FCarAC\nrAC\nb\n \n = FCJ\n5-6i - 2j + 3k6 ft\n2(-6 ft)2 + (-2 ft)2 + (3ft)2 R\n \n = -6\n7 FC i - 2\n7 FC j + 3\n7 FC k\n \n FD = FDi\n \n W = 5-150k6 lb\n \n Fx = 0; -6\n7 FB - 6\n7 FC + FD = 0\n \n(1)\n \n Fy = 0; 3\n7 FB - 2\n7 FC = 0\n \n(2)\n \n Fz = 0; 2\n7 FB + 3\n7 FC - 150 = 0\n \n(3)\n \n FB = 162 lb\n\nAns.\n \n FC = 1.5(162 lb) = 242 lb\n\nAns.\n \n FD = 346.15 lb = 346 lb \n\nAns.\nChapter 4",
      "final_answers": [],
      "theory_th": "สมการสมดุลของอนุภาคในระนาบ: \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "FB = FBarAB",
          "raw": "FB = FBarAB"
        },
        {
          "type": "calc",
          "latex": "rAB",
          "raw": "rAB"
        },
        {
          "type": "calc",
          "latex": "\\beta",
          "raw": "b"
        },
        {
          "type": "calc",
          "latex": "= FBJ",
          "raw": "= FBJ"
        },
        {
          "type": "calc",
          "latex": "\\left\\{-6\\hat{i} + 3\\hat{j} + 2\\hat{k}\\right\\}\\text{ ft}",
          "raw": "\\left\\{-6\\hat{i} + 3\\hat{j} + 2\\hat{k}\\right\\}\\text{ ft}"
        },
        {
          "type": "calc",
          "latex": "\\sqrt{(-6 ft)^2} + (3 ft)^2 + (2 ft)^2 R",
          "raw": "2(-6 ft)2 + (3 ft)2 + (2 ft)2 R"
        },
        {
          "type": "calc",
          "latex": "= -6",
          "raw": "= -6"
        },
        {
          "type": "calc",
          "latex": "7FBi + 3",
          "raw": "7FBi + 3"
        },
        {
          "type": "calc",
          "latex": "7 FB j + 2",
          "raw": "7 FB j + 2"
        },
        {
          "type": "calc",
          "latex": "7 FB k",
          "raw": "7 FB k"
        },
        {
          "type": "calc",
          "latex": "FC = FCarAC",
          "raw": "FC = FCarAC"
        },
        {
          "type": "calc",
          "latex": "rAC",
          "raw": "rAC"
        },
        {
          "type": "calc",
          "latex": "\\beta",
          "raw": "b"
        },
        {
          "type": "calc",
          "latex": "= FCJ",
          "raw": "= FCJ"
        },
        {
          "type": "calc",
          "latex": "\\left\\{-6\\hat{i} - 2\\hat{j} + 3\\hat{k}\\right\\}\\text{ ft}",
          "raw": "\\left\\{-6\\hat{i} - 2\\hat{j} + 3\\hat{k}\\right\\}\\text{ ft}"
        },
        {
          "type": "calc",
          "latex": "\\sqrt{(-6 ft)^2} + (-2 ft)^2 + (3ft)^2 R",
          "raw": "2(-6 ft)2 + (-2 ft)2 + (3ft)2 R"
        },
        {
          "type": "calc",
          "latex": "= -6",
          "raw": "= -6"
        },
        {
          "type": "calc",
          "latex": "7 FC i - 2",
          "raw": "7 FC i - 2"
        },
        {
          "type": "calc",
          "latex": "7 FC j + 3",
          "raw": "7 FC j + 3"
        },
        {
          "type": "calc",
          "latex": "7 FC k",
          "raw": "7 FC k"
        },
        {
          "type": "calc",
          "latex": "FD = FDi",
          "raw": "FD = FDi"
        },
        {
          "type": "calc",
          "latex": "W = \\left\\{-150\\hat{k}\\right\\}\\text{ lb}",
          "raw": "W = \\left\\{-150\\hat{k}\\right\\}\\text{ lb}"
        },
        {
          "type": "calc",
          "latex": "F_x = 0; -6",
          "raw": "Fx = 0; -6"
        },
        {
          "type": "calc",
          "latex": "7 FB - 6",
          "raw": "7 FB - 6"
        },
        {
          "type": "calc",
          "latex": "7 FC + FD = 0",
          "raw": "7 FC + FD = 0"
        },
        {
          "type": "calc",
          "latex": "(1)",
          "raw": "(1)"
        },
        {
          "type": "calc",
          "latex": "F_y = 0; 3",
          "raw": "Fy = 0; 3"
        },
        {
          "type": "calc",
          "latex": "7 FB - 2",
          "raw": "7 FB - 2"
        },
        {
          "type": "calc",
          "latex": "7 FC = 0",
          "raw": "7 FC = 0"
        },
        {
          "type": "calc",
          "latex": "(2)",
          "raw": "(2)"
        },
        {
          "type": "calc",
          "latex": "F_z = 0; 2",
          "raw": "Fz = 0; 2"
        },
        {
          "type": "calc",
          "latex": "7 FB + 3",
          "raw": "7 FB + 3"
        },
        {
          "type": "calc",
          "latex": "7 FC - 150 = 0",
          "raw": "7 FC - 150 = 0"
        },
        {
          "type": "calc",
          "latex": "(3)",
          "raw": "(3)"
        },
        {
          "type": "ans",
          "latex": "FB = 162 lb",
          "raw": "FB = 162 lb"
        },
        {
          "type": "ans",
          "latex": "FC = 1.5(162 lb) = 242 lb",
          "raw": "FC = 1.5(162 lb) = 242 lb"
        },
        {
          "type": "ans",
          "latex": "FD = 346.15 lb = 346 lb",
          "raw": "FD = 346.15 lb = 346 lb"
        }
      ],
      "final_answers_math": [
        "FB = 162 lb",
        "FC = 1.5(162 lb) = 242 lb",
        "FD = 346.15 lb = 346 lb"
      ]
    },
    {
      "id": "F4-1",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 1,
      "page_book": 158,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of the force about point O.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_1.webp",
      "solution_raw": "a +MO = -14\n52(100 N)(2 m) - 13\n52(100 N)(5 m)\n \n = -460 N # m = 460 N # mb\nAns.",
      "final_answers": [
        "= -460 N · m = 460 N · mb"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "a +M_O = -\\left(\\frac{4}{5}\\right)(100 N)(2 m) - \\left(\\frac{3}{5}\\right)(100 N)(5 m)",
          "raw": "a +MO = -\\left(\\frac{4}{5}\\right)(100 N)(2 m) - \\left(\\frac{3}{5}\\right)(100 N)(5 m)"
        },
        {
          "type": "ans",
          "latex": "= -460 N  \\cdot  m = 460 N  \\cdot  mb",
          "raw": "= -460 N  \\cdot  m = 460 N  \\cdot  mb"
        }
      ],
      "final_answers_math": [
        "= -460 N  \\cdot  m = 460 N  \\cdot  mb"
      ]
    },
    {
      "id": "F4-2",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 2,
      "page_book": 158,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of the force about point O.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_2.webp",
      "solution_raw": "a+MO = [(300 N) sin 30°][0.4 m + (0.3 m) cos 45°]\n \n - [(300 N) cos 30°][(0.3 m) sin 45°]\n \n = 36.7 N # m\nAns.",
      "final_answers": [
        "= 36.7 N · m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "a+M_O = [(300 N) \\sin 30^\\circ][0.4 m + (0.3 m) \\cos 45^\\circ]",
          "raw": "a+MO = [(300 N) sin 30°][0.4 m + (0.3 m) cos 45°]"
        },
        {
          "type": "calc",
          "latex": "- [(300 N) \\cos 30^\\circ][(0.3 m) \\sin 45^\\circ]",
          "raw": "- [(300 N) cos 30°][(0.3 m) sin 45°]"
        },
        {
          "type": "ans",
          "latex": "= 36.7 N  \\cdot  m",
          "raw": "= 36.7 N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= 36.7 N  \\cdot  m"
      ]
    },
    {
      "id": "F4-3",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 3,
      "page_book": 158,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of the force about point O.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_3.webp",
      "solution_raw": "a +MO = (600 lb)(4 ft + (3 ft)cos 45° - 1 ft)\n \n = 3.07 kip # ft\n Ans.",
      "final_answers": [
        "= 3.07 kip · ft"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "a +M_O = ( lb)(4 ft + (3 ft)\\cos 45^\\circ - 1 ft)",
          "raw": "a +MO = ( lb)(4 ft + (3 ft)cos 45° - 1 ft)"
        },
        {
          "type": "ans",
          "latex": "= 3.07 kip  \\cdot  ft",
          "raw": "= 3.07 kip  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "= 3.07 kip  \\cdot  ft"
      ]
    },
    {
      "id": "F4-4",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 4,
      "page_book": 158,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of the force about point O. \nNeglect the thickness of the member.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_4.webp",
      "solution_raw": "c +MO = 50 sin 60° (0.1 + 0.2 cos 45° + 0.1)\n \n - 50 cos 60°(0.2 sin 45°)\n \n = 11.2 N # m \nAns.",
      "final_answers": [
        "= 11.2 N · m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "c +M_O = 50 \\sin 60^\\circ (0.1 + 0.2 \\cos 45^\\circ + 0.1)",
          "raw": "c +MO = 50 sin 60° (0.1 + 0.2 cos 45° + 0.1)"
        },
        {
          "type": "calc",
          "latex": "- 50 \\cos 60^\\circ(0.2 \\sin 45^\\circ)",
          "raw": "- 50 cos 60°(0.2 sin 45°)"
        },
        {
          "type": "ans",
          "latex": "= 11.2 N  \\cdot  m",
          "raw": "= 11.2 N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= 11.2 N  \\cdot  m"
      ]
    },
    {
      "id": "F4-5",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 5,
      "page_book": 158,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of the force about point O.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_5.webp",
      "solution_raw": "a +MO = 600 sin 50° (5) + 600 cos 50° (0.5)\n \n = 2.49 kip # ft\n Ans.",
      "final_answers": [
        "= 2.49 kip · ft"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "a +M_O =  \\sin 50^\\circ (5) +  \\cos 50^\\circ (0.5)",
          "raw": "a +MO =  sin 50° (5) +  cos 50° (0.5)"
        },
        {
          "type": "ans",
          "latex": "= 2.49 kip  \\cdot  ft",
          "raw": "= 2.49 kip  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "= 2.49 kip  \\cdot  ft"
      ]
    },
    {
      "id": "F4-6",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 6,
      "page_book": 158,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of the force about point O.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_6.webp",
      "solution_raw": "a+MO = 500 sin 45° (3 + 3 cos 45°)\n \n - 500 cos 45° (3 sin 45°)\n \n = 1.06 kN # m\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "a+M_O = 500 \\sin 45^\\circ (3 + 3 \\cos 45^\\circ)",
          "raw": "a+MO = 500 sin 45° (3 + 3 cos 45°)"
        },
        {
          "type": "calc",
          "latex": "- 500 \\cos 45^\\circ (3 \\sin 45^\\circ)",
          "raw": "- 500 cos 45° (3 sin 45°)"
        },
        {
          "type": "ans",
          "latex": "= 1.06 kN  \\cdot  m",
          "raw": "= 1.06 kN  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= 1.06 kN  \\cdot  m"
      ]
    },
    {
      "id": "F4-7",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 7,
      "page_book": 159,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the resultant moment produced by the \nforces about point O.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_7.webp",
      "solution_raw": "a+(MR)O = Fd;\n \n (MR)O = -(600 N)(1 m)\n \n + (500 N)[3 m + (2.5 m) cos 45°]\n \n - (300 N)[(2.5 m) sin 45°]\n \n = 1254 N # m = 1.25 kN # m\nAns.\n\n624 \nPartial Solutions And Answers\n \nFz = 3\n515002 = 300 N\n \n Mx = -320132 + 300122 = -360 N # m\nAns.\n \n My = -240132 - 300 (-2) = -120 N # m\nAns.\n Mz = 240122 - 320 (2) = -160 N # m\nAns.\n \nVector Analysis\n \n F = 5-240i + 320j + 300k6N\n \n rOA = 5-2i + 2j + 3k6 m\n \n Mx = i # 1rOA * F2 = -360 N # m\n \n My = j# 1rOA * F2 = -120 N # m\n \n Mz = k# 1rOA * F2 = -160 N # m",
      "final_answers": [
        "= 1254 N · m = 1.25 kN · m",
        "Partial Solutions And wers",
        "Mx = -320132 + 300122 = -360 N · m",
        "My = -240132 - 300 (-2) = -120 N · m",
        "Mz = 240122 - 320 (2) = -160 N · m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma (M_R)_{O} = \\Sigma F d \\implies",
          "raw": "a+(MR)O = Fd;"
        },
        {
          "type": "calc",
          "latex": "(MR)O = -( N)(1 m)",
          "raw": "(MR)O = -( N)(1 m)"
        },
        {
          "type": "calc",
          "latex": "+ (500 N)[3 m + (2.5 m) \\cos 45^\\circ]",
          "raw": "+ (500 N)[3 m + (2.5 m) cos 45°]"
        },
        {
          "type": "calc",
          "latex": "- (300 N)[(2.5 m) \\sin 45^\\circ]",
          "raw": "- (300 N)[(2.5 m) sin 45°]"
        },
        {
          "type": "ans",
          "latex": "= 1254 N  \\cdot  m = 1.25 kN  \\cdot  m",
          "raw": "= 1254 N  \\cdot  m = 1.25 kN  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "F_z = 3",
          "raw": "Fz = 3"
        },
        {
          "type": "calc",
          "latex": "515002 = 300 N",
          "raw": "515002 = 300 N"
        },
        {
          "type": "ans",
          "latex": "Mx = -320132 + 300122 = -360 N  \\cdot  m",
          "raw": "Mx = -320132 + 300122 = -360 N  \\cdot  m"
        },
        {
          "type": "ans",
          "latex": "My = -240132 - 300 (-2) = -120 N  \\cdot  m",
          "raw": "My = -240132 - 300 (-2) = -120 N  \\cdot  m"
        },
        {
          "type": "ans",
          "latex": "Mz = 240122 - 320 (2) = -160 N  \\cdot  m",
          "raw": "Mz = 240122 - 320 (2) = -160 N  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "Vector Analysis",
          "raw": "Vector Analysis"
        },
        {
          "type": "calc",
          "latex": "F = \\left\\{-240\\hat{i} + 320\\hat{j} + 300\\hat{k}\\right\\}\\text{ N}",
          "raw": "F = \\left\\{-240\\hat{i} + 320\\hat{j} + 300\\hat{k}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "rOA = \\left\\{-2\\hat{i} + 2\\hat{j} + 3\\hat{k}\\right\\}\\text{ m}",
          "raw": "rOA = \\left\\{-2\\hat{i} + 2\\hat{j} + 3\\hat{k}\\right\\}\\text{ m}"
        },
        {
          "type": "calc",
          "latex": "Mx = i  \\cdot  1rOA  \\times  F2 = -360 N  \\cdot  m",
          "raw": "Mx = i  \\cdot  1rOA  \\times  F2 = -360 N  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "My = j \\cdot  1rOA  \\times  F2 = -120 N  \\cdot  m",
          "raw": "My = j \\cdot  1rOA  \\times  F2 = -120 N  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "Mz = k \\cdot  1rOA  \\times  F2 = -160 N  \\cdot  m",
          "raw": "Mz = k \\cdot  1rOA  \\times  F2 = -160 N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= 1254 N  \\cdot  m = 1.25 kN  \\cdot  m",
        "Mx = -320132 + 300122 = -360 N  \\cdot  m",
        "My = -240132 - 300 (-2) = -120 N  \\cdot  m",
        "Mz = 240122 - 320 (2) = -160 N  \\cdot  m"
      ]
    },
    {
      "id": "F4-8",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 8,
      "page_book": 159,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the resultant moment produced by the \nforces about point O.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_8.webp",
      "solution_raw": "a+(MR)O = Fd;\n \n(MR)O = 313\n52500 N4(0.425 m)\n \n - 314\n52500 N4(0.25 m)\n \n - [(600 N) cos 60°](0.25 m)\n \n - [(600 N) sin 60°](0.425 m)\n \n = -268 N # m = 268 N # m b\nAns.",
      "final_answers": [
        "= -268 N · m = 268 N · m b"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma (M_R)_{O} = \\Sigma F d \\implies",
          "raw": "a+(MR)O = Fd;"
        },
        {
          "type": "calc",
          "latex": "(MR)O = 3\\left(\\frac{3}{5}\\right)500 N4(0.425 m)",
          "raw": "(MR)O = 3\\left(\\frac{3}{5}\\right)500 N4(0.425 m)"
        },
        {
          "type": "calc",
          "latex": "- 3\\left(\\frac{4}{5}\\right)500 N4(0.25 m)",
          "raw": "- 3\\left(\\frac{4}{5}\\right)500 N4(0.25 m)"
        },
        {
          "type": "calc",
          "latex": "- [( N) \\cos 60^\\circ](0.25 m)",
          "raw": "- [( N) cos 60°](0.25 m)"
        },
        {
          "type": "calc",
          "latex": "- [( N) \\sin 60^\\circ](0.425 m)",
          "raw": "- [( N) sin 60°](0.425 m)"
        },
        {
          "type": "ans",
          "latex": "= -268 N  \\cdot  m = 268 N  \\cdot  m \\beta",
          "raw": "= -268 N  \\cdot  m = 268 N  \\cdot  m b"
        }
      ],
      "final_answers_math": [
        "= -268 N  \\cdot  m = 268 N  \\cdot  m \\beta"
      ]
    },
    {
      "id": "F4-9",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 9,
      "page_book": 159,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the resultant moment produced by the \nforces about point O.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_9.webp",
      "solution_raw": "a +(MR)O = Fd;\n \n (MR)O = (300 cos 30° lb)(6 ft + 6 sin 30° ft)\n \n - (300 sin 30° lb)(6 cos 30° ft)\n \n + (200 lb)(6 cos 30° ft)\n \n = 2.60 kip # ft\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma (M_R)_{O} = \\Sigma F d \\implies",
          "raw": "a +(MR)O = Fd;"
        },
        {
          "type": "calc",
          "latex": "(MR)O = (300 \\cos 30^\\circ lb)(6 ft + 6 \\sin 30^\\circ ft)",
          "raw": "(MR)O = (300 cos 30° lb)(6 ft + 6 sin 30° ft)"
        },
        {
          "type": "calc",
          "latex": "- (300 \\sin 30^\\circ lb)(6 \\cos 30^\\circ ft)",
          "raw": "- (300 sin 30° lb)(6 cos 30° ft)"
        },
        {
          "type": "calc",
          "latex": "+ (200 lb)(6 \\cos 30^\\circ ft)",
          "raw": "+ (200 lb)(6 cos 30° ft)"
        },
        {
          "type": "ans",
          "latex": "= 2.60 kip  \\cdot  ft",
          "raw": "= 2.60 kip  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "= 2.60 kip  \\cdot  ft"
      ]
    },
    {
      "id": "F4-10",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 10,
      "page_book": 159,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of force F about point O. \nExpress the result as a Cartesian vector.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_10.webp",
      "solution_raw": "F = FuAB = 500 N14\n5i - 3\n5j2 = 5400i - 300j6 N\n \n MO = rOA * F = 53j6 m * 5400i - 300j6 N\n \n = 5-1200k6 N # m\n\nAns.\n \nor\n \n MO = rOB * F = 54i6 m * 5400i - 300j6 N\n \n = 5-1200k6 N # m\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F = FuAB = 500 N14",
          "raw": "F = FuAB = 500 N14"
        },
        {
          "type": "calc",
          "latex": "5i - 3",
          "raw": "5i - 3"
        },
        {
          "type": "calc",
          "latex": "5j2 = \\left\\{400\\hat{i} - 300\\hat{j}\\right\\}\\text{ N}",
          "raw": "5j2 = \\left\\{400\\hat{i} - 300\\hat{j}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "M_O = rOA  \\times  F = \\left\\{3\\hat{j}\\right\\}\\text{ m}  \\times  \\left\\{400\\hat{i} - 300\\hat{j}\\right\\}\\text{ N}",
          "raw": "MO = rOA  \\times  F = \\left\\{3\\hat{j}\\right\\}\\text{ m}  \\times  \\left\\{400\\hat{i} - 300\\hat{j}\\right\\}\\text{ N}"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{-1200\\hat{k}\\right\\}\\text{ N}  \\cdot  m",
          "raw": "= \\left\\{-1200\\hat{k}\\right\\}\\text{ N}  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "or",
          "raw": "or"
        },
        {
          "type": "calc",
          "latex": "M_O = rOB  \\times  F = \\left\\{4\\hat{i}\\right\\}\\text{ m}  \\times  \\left\\{400\\hat{i} - 300\\hat{j}\\right\\}\\text{ N}",
          "raw": "MO = rOB  \\times  F = \\left\\{4\\hat{i}\\right\\}\\text{ m}  \\times  \\left\\{400\\hat{i} - 300\\hat{j}\\right\\}\\text{ N}"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{-1200\\hat{k}\\right\\}\\text{ N}  \\cdot  m",
          "raw": "= \\left\\{-1200\\hat{k}\\right\\}\\text{ N}  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= \\left\\{-1200\\hat{k}\\right\\}\\text{ N}  \\cdot  m"
      ]
    },
    {
      "id": "F4-11",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 11,
      "page_book": 159,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of force F about point O. \nExpress the result as a Cartesian vector.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_11.webp",
      "solution_raw": "F = FuBC\n \n = 120 lbJ\n54 i - 4 j - 2 k6 ft\n2(4 ft)2 + (-4 ft)2 + (-2 ft)2 R\n \n = 580i - 80j - 40k6 lb\n \n MO = rC * F = 3\ni\nj\nk\n5\n0\n0\n80\n-80\n-40\n3\n \n = 5200j - 400k6 lb # ft\n\nAns.\n \nor\n \n MO = rB * F = 3\ni\nj\nk\n1\n4\n2\n80\n-80\n-40\n3\n \n = 5200j - 400k6 lb # ft\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F = FuBC",
          "raw": "F = FuBC"
        },
        {
          "type": "calc",
          "latex": "= 120 lbJ",
          "raw": "= 120 lbJ"
        },
        {
          "type": "calc",
          "latex": "\\left\\{4\\hat{i} - 4\\hat{j} - 2\\hat{k}\\right\\}\\text{ ft}",
          "raw": "\\left\\{4\\hat{i} - 4\\hat{j} - 2\\hat{k}\\right\\}\\text{ ft}"
        },
        {
          "type": "calc",
          "latex": "\\sqrt{(4 ft)^2} + (-4 ft)^2 + (-2 ft)^2 R",
          "raw": "2(4 ft)2 + (-4 ft)2 + (-2 ft)2 R"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{80\\hat{i} - 80\\hat{j} - 40\\hat{k}\\right\\}\\text{ lb}",
          "raw": "= \\left\\{80\\hat{i} - 80\\hat{j} - 40\\hat{k}\\right\\}\\text{ lb}"
        },
        {
          "type": "calc",
          "latex": "M_O = rC  \\times  F = 3",
          "raw": "MO = rC  \\times  F = 3"
        },
        {
          "type": "calc",
          "latex": "i",
          "raw": "i"
        },
        {
          "type": "calc",
          "latex": "j",
          "raw": "j"
        },
        {
          "type": "calc",
          "latex": "k",
          "raw": "k"
        },
        {
          "type": "calc",
          "latex": "5",
          "raw": "5"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "80",
          "raw": "80"
        },
        {
          "type": "calc",
          "latex": "-80",
          "raw": "-80"
        },
        {
          "type": "calc",
          "latex": "-40",
          "raw": "-40"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{200\\hat{j} - 400\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft",
          "raw": "= \\left\\{200\\hat{j} - 400\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft"
        },
        {
          "type": "calc",
          "latex": "or",
          "raw": "or"
        },
        {
          "type": "calc",
          "latex": "M_O = rB  \\times  F = 3",
          "raw": "MO = rB  \\times  F = 3"
        },
        {
          "type": "calc",
          "latex": "i",
          "raw": "i"
        },
        {
          "type": "calc",
          "latex": "j",
          "raw": "j"
        },
        {
          "type": "calc",
          "latex": "k",
          "raw": "k"
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "4",
          "raw": "4"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "80",
          "raw": "80"
        },
        {
          "type": "calc",
          "latex": "-80",
          "raw": "-80"
        },
        {
          "type": "calc",
          "latex": "-40",
          "raw": "-40"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{200\\hat{j} - 400\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft",
          "raw": "= \\left\\{200\\hat{j} - 400\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "= \\left\\{200\\hat{j} - 400\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft"
      ]
    },
    {
      "id": "F4-12",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 12,
      "page_book": 159,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "If the two forces F1 = {100i - 120j + 75k} lb and \nF2 = { -200i  + 250j + 100k} lb act at A, determine the \nresultant moment produced by these forces about point O. \nExpress the result as a Cartesian vector.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_12.webp",
      "solution_raw": "FR = F1 + F2\n \n = 5(100 - 200)i + (-120 + 250)j\n \n + (75 + 100)k6 lb\n \n = 5-100i + 130j + 175k6 lb\n \n (MR)O = rA * FR = 3\ni\nj\nk\n4\n5\n3\n-100\n130\n175\n3\n \n = 5485i - 1000j + 1020k6 lb # ft \nAns.",
      "final_answers": [
        "= 5485i - 1000j + 1020k6 lb · ft"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_R = F1 + F2",
          "raw": "FR = F1 + F2"
        },
        {
          "type": "calc",
          "latex": "= 5(100 - 200)i + (-120 + 250)j",
          "raw": "= 5(100 - 200)i + (-120 + 250)j"
        },
        {
          "type": "calc",
          "latex": "+ (75 + 100)k6 lb",
          "raw": "+ (75 + 100)k6 lb"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{-100\\hat{i} + 130\\hat{j} + 175\\hat{k}\\right\\}\\text{ lb}",
          "raw": "= \\left\\{-100\\hat{i} + 130\\hat{j} + 175\\hat{k}\\right\\}\\text{ lb}"
        },
        {
          "type": "calc",
          "latex": "(MR)O = rA  \\times  F_R = 3",
          "raw": "(MR)O = rA  \\times  FR = 3"
        },
        {
          "type": "calc",
          "latex": "i",
          "raw": "i"
        },
        {
          "type": "calc",
          "latex": "j",
          "raw": "j"
        },
        {
          "type": "calc",
          "latex": "k",
          "raw": "k"
        },
        {
          "type": "calc",
          "latex": "4",
          "raw": "4"
        },
        {
          "type": "calc",
          "latex": "5",
          "raw": "5"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "-100",
          "raw": "-100"
        },
        {
          "type": "calc",
          "latex": "130",
          "raw": "130"
        },
        {
          "type": "calc",
          "latex": "175",
          "raw": "175"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{485\\hat{i} - 1000\\hat{j} + 1020\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft",
          "raw": "= \\left\\{485\\hat{i} - 1000\\hat{j} + 1020\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "= \\left\\{485\\hat{i} - 1000\\hat{j} + 1020\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft"
      ]
    },
    {
      "id": "F4-13",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 13,
      "page_book": 173,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the magnitude of the moment of the \nforce F = {300i - 200j + 150k} N about the x axis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis)",
      "image": "images/problems/F4_13.webp",
      "solution_raw": "Mx = i # (rOB * F) = 3\n1\n0\n0\n0.3\n0.4\n-0.2\n300\n-200\n150\n3\n \n = 20 N # m\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Mx = i  \\cdot  (rOB  \\times  F) = 3",
          "raw": "Mx = i  \\cdot  (rOB  \\times  F) = 3"
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0.3",
          "raw": "0.3"
        },
        {
          "type": "calc",
          "latex": "0.4",
          "raw": "0.4"
        },
        {
          "type": "calc",
          "latex": "-0.2",
          "raw": "-0.2"
        },
        {
          "type": "calc",
          "latex": "300",
          "raw": "300"
        },
        {
          "type": "calc",
          "latex": "-200",
          "raw": "-200"
        },
        {
          "type": "calc",
          "latex": "150",
          "raw": "150"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "ans",
          "latex": "= 20 N  \\cdot  m",
          "raw": "= 20 N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= 20 N  \\cdot  m"
      ]
    },
    {
      "id": "F4-14",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 14,
      "page_book": 173,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the magnitude of the moment of the \nforce F = {300i - 200j + 150k} N about the OA axis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis)",
      "image": "images/problems/F4_14.webp",
      "solution_raw": "uOA = rA\nrA\n=\n50.3i + 0.4j6 m\n2(0.3 m)2 + (0.4 m)2    = 0.6 i + 0.8 j\n \nMOA = uOA # (rAB * F) = 3\n0.6\n0.8\n0\n0\n0\n-0.2\n300\n-200\n150\n3\n \n = -72 N # m\n\nAns.\n \n` MOA` = 72 N # m",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "uOA = rA",
          "raw": "uOA = rA"
        },
        {
          "type": "calc",
          "latex": "rA",
          "raw": "rA"
        },
        {
          "type": "calc",
          "latex": "=",
          "raw": "="
        },
        {
          "type": "calc",
          "latex": "\\left\\{0.3\\hat{i} + 0.4\\hat{j}\\right\\}\\text{ m}",
          "raw": "\\left\\{0.3\\hat{i} + 0.4\\hat{j}\\right\\}\\text{ m}"
        },
        {
          "type": "calc",
          "latex": "\\sqrt{(0.3 m)^2} + (0.4 m)^2    = 0.6 i + 0.8 j",
          "raw": "2(0.3 m)2 + (0.4 m)2    = 0.6 i + 0.8 j"
        },
        {
          "type": "calc",
          "latex": "MOA = uOA  \\cdot  (rAB  \\times  F) = 3",
          "raw": "MOA = uOA  \\cdot  (rAB  \\times  F) = 3"
        },
        {
          "type": "calc",
          "latex": "0.6",
          "raw": "0.6"
        },
        {
          "type": "calc",
          "latex": "0.8",
          "raw": "0.8"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "-0.2",
          "raw": "-0.2"
        },
        {
          "type": "calc",
          "latex": "300",
          "raw": "300"
        },
        {
          "type": "calc",
          "latex": "-200",
          "raw": "-200"
        },
        {
          "type": "calc",
          "latex": "150",
          "raw": "150"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "ans",
          "latex": "= -72 N  \\cdot  m",
          "raw": "= -72 N  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "` MOA` = 72 N  \\cdot  m",
          "raw": "` MOA` = 72 N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= -72 N  \\cdot  m"
      ]
    },
    {
      "id": "F4-15",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 15,
      "page_book": 173,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the magnitude of the moment of the \n200-N force about the x axis. Solve the problem using both a \nscalar and a vector analysis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis)",
      "image": "images/problems/F4_15.webp",
      "solution_raw": "\u0007Scalar Analysis\n \nThe magnitudes of the force components are\n \nFx = 200 cos 120° = 100 N\n \nFy = 200 cos 60° = 100 N\n \nFz = 200 cos 45° = 141.42 N\n \n Mx = -Fy1z2 + Fz1y2\n \n = - 1100 N210.25 m2 + 1141.42 N210.3 m2\n \n = 17.4 N # m\nAns.\n \nVector Analysis\n \nMx = 3\n1\n0\n0\n0\n0.3\n0.25\n-100\n100\n141.42\n3 = 17.4 N # m\nAns.",
      "final_answers": [
        "= 17.4 N · m",
        "3 = 17.4 N · m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\u0007Scalar Analysis",
          "raw": "\u0007Scalar Analysis"
        },
        {
          "type": "calc",
          "latex": "The magnitudes of the force components are",
          "raw": "The magnitudes of the force components are"
        },
        {
          "type": "calc",
          "latex": "F_x = 200 \\cos 120^\\circ = 100 N",
          "raw": "Fx = 200 cos 120° = 100 N"
        },
        {
          "type": "calc",
          "latex": "F_y = 200 \\cos 60^\\circ = 100 N",
          "raw": "Fy = 200 cos 60° = 100 N"
        },
        {
          "type": "calc",
          "latex": "F_z = 200 \\cos 45^\\circ = 141.42 N",
          "raw": "Fz = 200 cos 45° = 141.42 N"
        },
        {
          "type": "calc",
          "latex": "Mx = -Fy1z2 + Fz1y2",
          "raw": "Mx = -Fy1z2 + Fz1y2"
        },
        {
          "type": "calc",
          "latex": "= - 1100 N210.25 \\text{m}^2 + 1141.42 N210.3 \\text{m}^2",
          "raw": "= - 1100 N210.25 \\text{m}^2 + 1141.42 N210.3 \\text{m}^2"
        },
        {
          "type": "ans",
          "latex": "= 17.4 N  \\cdot  m",
          "raw": "= 17.4 N  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "Vector Analysis",
          "raw": "Vector Analysis"
        },
        {
          "type": "calc",
          "latex": "Mx = 3",
          "raw": "Mx = 3"
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0.3",
          "raw": "0.3"
        },
        {
          "type": "calc",
          "latex": "0.25",
          "raw": "0.25"
        },
        {
          "type": "calc",
          "latex": "-100",
          "raw": "-100"
        },
        {
          "type": "calc",
          "latex": "100",
          "raw": "100"
        },
        {
          "type": "calc",
          "latex": "141.42",
          "raw": "141.42"
        },
        {
          "type": "ans",
          "latex": "3 = 17.4 N  \\cdot  m",
          "raw": "3 = 17.4 N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= 17.4 N  \\cdot  m",
        "3 = 17.4 N  \\cdot  m"
      ]
    },
    {
      "id": "F4-16",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 16,
      "page_book": 173,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the magnitude of the moment of the \nforce about the y axis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis)",
      "image": "images/problems/F4_16.webp",
      "solution_raw": "My = j# (rA * F) = 3\n0\n1\n0\n-3\n-4\n2\n30\n-20\n50\n3\n \n = 210 N # m\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "My = j \\cdot  (rA  \\times  F) = 3",
          "raw": "My = j \\cdot  (rA  \\times  F) = 3"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "-3",
          "raw": "-3"
        },
        {
          "type": "calc",
          "latex": "-4",
          "raw": "-4"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "30",
          "raw": "30"
        },
        {
          "type": "calc",
          "latex": "-20",
          "raw": "-20"
        },
        {
          "type": "calc",
          "latex": "50",
          "raw": "50"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "ans",
          "latex": "= 210 N  \\cdot  m",
          "raw": "= 210 N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= 210 N  \\cdot  m"
      ]
    },
    {
      "id": "F4-17",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 17,
      "page_book": 173,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Prob. F4–16\nF4–17.  Determine \nthe \nmoment \nof \nthe \nforce \nF = {50i - 40j + 20k} lb about the AB axis. Express the \nresult as a Cartesian vector.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis)",
      "image": "images/problems/F4_17.webp",
      "solution_raw": "uAB = rAB\nrAB\n=\n5-4i + 3j6ft\n2(-4 ft)2 + (3 ft)2 = -0.8i + 0.6j\n \n MAB = uAB # (rAC * F)\n \n = 3\n-0.8\n0.6\n0\n0\n0\n2\n50\n-40\n20\n3 = -4 lb # ft\n \n MAB = MABuAB = 53.2i - 2.4j6 lb # ft\nAns.",
      "final_answers": [
        "MAB = MABuAB = 53.2i - 2.4j6 lb · ft"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "uAB = rAB",
          "raw": "uAB = rAB"
        },
        {
          "type": "calc",
          "latex": "rAB",
          "raw": "rAB"
        },
        {
          "type": "calc",
          "latex": "=",
          "raw": "="
        },
        {
          "type": "calc",
          "latex": "\\left\\{-4\\hat{i} + 3\\hat{j}\\right\\}\\text{ ft}",
          "raw": "\\left\\{-4\\hat{i} + 3\\hat{j}\\right\\}\\text{ ft}"
        },
        {
          "type": "calc",
          "latex": "\\sqrt{(-4 ft)^2} + (3 ft)^2 = -0.8i + 0.6j",
          "raw": "2(-4 ft)2 + (3 ft)2 = -0.8i + 0.6j"
        },
        {
          "type": "calc",
          "latex": "MAB = uAB  \\cdot  (rAC  \\times  F)",
          "raw": "MAB = uAB  \\cdot  (rAC  \\times  F)"
        },
        {
          "type": "calc",
          "latex": "= 3",
          "raw": "= 3"
        },
        {
          "type": "calc",
          "latex": "-0.8",
          "raw": "-0.8"
        },
        {
          "type": "calc",
          "latex": "0.6",
          "raw": "0.6"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "50",
          "raw": "50"
        },
        {
          "type": "calc",
          "latex": "-40",
          "raw": "-40"
        },
        {
          "type": "calc",
          "latex": "20",
          "raw": "20"
        },
        {
          "type": "calc",
          "latex": "3 = -4 lb  \\cdot  ft",
          "raw": "3 = -4 lb  \\cdot  ft"
        },
        {
          "type": "ans",
          "latex": "MAB = MABuAB = \\left\\{3.2\\hat{i} - 2.4\\hat{j}\\right\\}\\text{ lb}  \\cdot  ft",
          "raw": "MAB = MABuAB = \\left\\{3.2\\hat{i} - 2.4\\hat{j}\\right\\}\\text{ lb}  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "MAB = MABuAB = \\left\\{3.2\\hat{i} - 2.4\\hat{j}\\right\\}\\text{ lb}  \\cdot  ft"
      ]
    },
    {
      "id": "F4-18",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 18,
      "page_book": 173,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Prob. F4–17\nF4–18.    Determine the moment of force F about the x, the \ny, and the z axes. Solve the problem using both a scalar and \na vector analysis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_18.webp",
      "solution_raw": "Scalar Analysis\n \nThe magnitudes of the force components are\n \nFx = 13\n5234\n5150024 = 240 N\n \nFy = 4\n534\n5150024 = 320 N\n\n \nFundamental Problems \n625",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Scalar Analysis",
          "raw": "Scalar Analysis"
        },
        {
          "type": "calc",
          "latex": "The magnitudes of the force components are",
          "raw": "The magnitudes of the force components are"
        },
        {
          "type": "calc",
          "latex": "F_x = \\left(\\frac{3}{5}\\right)34",
          "raw": "Fx = \\left(\\frac{3}{5}\\right)34"
        },
        {
          "type": "calc",
          "latex": "5150024 = 240 N",
          "raw": "5150024 = 240 N"
        },
        {
          "type": "calc",
          "latex": "F_y = 4",
          "raw": "Fy = 4"
        },
        {
          "type": "calc",
          "latex": "534",
          "raw": "534"
        },
        {
          "type": "ans",
          "latex": "5150024 = 320 N",
          "raw": "5150024 = 320 N"
        }
      ],
      "final_answers_math": [
        "5150024 = 320 N"
      ]
    },
    {
      "id": "F4-19",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 19,
      "page_book": 182,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the resultant couple moment acting on \nthe beam.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_19.webp",
      "solution_raw": "c+MCR = MA = 400(3) - 400(5) + 300(5)\n \n+ 200(0.2) = 740 N # m \nAns.\n \nAlso,\n \n c+MCR = 300(5) - 400(2) + 200(0.2)\n \n = 740 N # m\n\nAns.",
      "final_answers": [
        "+ 200(0.2) = 740 N · m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "c+MCR = MA = 400(3) - 400(5) + 300(5)",
          "raw": "c+MCR = MA = 400(3) - 400(5) + 300(5)"
        },
        {
          "type": "ans",
          "latex": "+ 200(0.2) = 740 N  \\cdot  m",
          "raw": "+ 200(0.2) = 740 N  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "Also,",
          "raw": "Also,"
        },
        {
          "type": "calc",
          "latex": "c+MCR = 300(5) - 400(2) + 200(0.2)",
          "raw": "c+MCR = 300(5) - 400(2) + 200(0.2)"
        },
        {
          "type": "ans",
          "latex": "= 740 N  \\cdot  m",
          "raw": "= 740 N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "+ 200(0.2) = 740 N  \\cdot  m",
        "= 740 N  \\cdot  m"
      ]
    },
    {
      "id": "F4-20",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 20,
      "page_book": 182,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the resultant couple moment acting on \nthe triangular plate.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_20.webp",
      "solution_raw": "a+MCR = 300(4) + 200(4) + 150(4)\n \n \n = 2600 lb # ft\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "a+MCR = 300(4) + 200(4) + 150(4)",
          "raw": "a+MCR = 300(4) + 200(4) + 150(4)"
        },
        {
          "type": "ans",
          "latex": "= 2600 lb  \\cdot  ft",
          "raw": "= 2600 lb  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "= 2600 lb  \\cdot  ft"
      ]
    },
    {
      "id": "F4-21",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 21,
      "page_book": 182,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the magnitude of F so that the resultant \ncouple moment acting on the beam is 1.5 kN # m clockwise.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_21.webp",
      "solution_raw": "a+(MB)R = MB\n \n -1.5 kN # m = (2 kN)(0.3 m) - F(0.9 m)\n \n F = 2.33 kN\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "a+(MB)R = MB",
          "raw": "a+(MB)R = MB"
        },
        {
          "type": "calc",
          "latex": "-1.5 kN  \\cdot  m = (2 kN)(0.3 m) - F(0.9 m)",
          "raw": "-1.5 kN  \\cdot  m = (2 kN)(0.3 m) - F(0.9 m)"
        },
        {
          "type": "ans",
          "latex": "F = 2.33 kN",
          "raw": "F = 2.33 kN"
        }
      ],
      "final_answers_math": [
        "F = 2.33 kN"
      ]
    },
    {
      "id": "F4-22",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 22,
      "page_book": 182,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the couple moment acting on the beam.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_22.webp",
      "solution_raw": "a+MC = 1013\n52(2) - 1014\n52(4) = -20 kN # m\n \n = 20 kN # mb\nAns.",
      "final_answers": [
        "= 20 kN · mb"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "a+MC = 10\\left(\\frac{3}{5}\\right)(2) - 10\\left(\\frac{4}{5}\\right)(4) = -20 kN  \\cdot  m",
          "raw": "a+MC = 10\\left(\\frac{3}{5}\\right)(2) - 10\\left(\\frac{4}{5}\\right)(4) = -20 kN  \\cdot  m"
        },
        {
          "type": "ans",
          "latex": "= 20 kN  \\cdot  mb",
          "raw": "= 20 kN  \\cdot  mb"
        }
      ],
      "final_answers_math": [
        "= 20 kN  \\cdot  mb"
      ]
    },
    {
      "id": "F4-23",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 23,
      "page_book": 182,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the resultant couple moment acting on \nthe pipe assembly.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_23.webp",
      "solution_raw": "u1 = r1\nr1\n=\n{-2i + 2j + 3.5k} ft\n2(-2 ft)2 + (2 ft)2 + (3.5 ft)2\n \n = - 2\n4.5i +\n2\n4.5j + 3.5\n4.5k\n \n u2 = -k\n \n u3 = 1.5\n2.5i -\n2\n2.5j\n \n (Mc)1 = (Mc)1u1\n \n = (450 lb # ft)1- 2\n4.5i +\n2\n4.5j + 3.5\n4.5k2\n \n = 5-200i + 200j + 350k6 lb # ft\n \n (Mc)2 = (Mc)2u2 = (250 lb # ft)(-k)\n \n = 5-250k6 lb # ft\n \n (Mc)3 = (Mc)3 u3 = (300 lb # ft)11.5\n2.5i -\n2\n2.5j2\n \n = 5180i - 240j6 lb # ft\n \n (Mc)R = Mc;\n \n (Mc)R = {-20i - 40j + 100k} lb # ft\n Ans.",
      "final_answers": [
        "(Mc)R = {-20i - 40j + 100k} lb · ft"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "u1 = r1",
          "raw": "u1 = r1"
        },
        {
          "type": "calc",
          "latex": "r1",
          "raw": "r1"
        },
        {
          "type": "calc",
          "latex": "=",
          "raw": "="
        },
        {
          "type": "calc",
          "latex": "{-2i + 2j + 3.5k} ft",
          "raw": "{-2i + 2j + 3.5k} ft"
        },
        {
          "type": "calc",
          "latex": "\\sqrt{(-2 ft)^2} + (2 ft)^2 + (3.5 ft)^2",
          "raw": "2(-2 ft)2 + (2 ft)2 + (3.5 ft)2"
        },
        {
          "type": "calc",
          "latex": "= - 2",
          "raw": "= - 2"
        },
        {
          "type": "calc",
          "latex": "4.5i +",
          "raw": "4.5i +"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "4.5j + 3.5",
          "raw": "4.5j + 3.5"
        },
        {
          "type": "calc",
          "latex": "4.5k",
          "raw": "4.5k"
        },
        {
          "type": "calc",
          "latex": "u2 = -k",
          "raw": "u2 = -k"
        },
        {
          "type": "calc",
          "latex": "u3 = 1.5",
          "raw": "u3 = 1.5"
        },
        {
          "type": "calc",
          "latex": "2.5i -",
          "raw": "2.5i -"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "2.5j",
          "raw": "2.5j"
        },
        {
          "type": "calc",
          "latex": "(Mc)1 = (Mc)1u1",
          "raw": "(Mc)1 = (Mc)1u1"
        },
        {
          "type": "calc",
          "latex": "= (450 lb  \\cdot  ft)1- 2",
          "raw": "= (450 lb  \\cdot  ft)1- 2"
        },
        {
          "type": "calc",
          "latex": "4.5i +",
          "raw": "4.5i +"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "4.5j + 3.5",
          "raw": "4.5j + 3.5"
        },
        {
          "type": "calc",
          "latex": "4.5k2",
          "raw": "4.5k2"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{-200\\hat{i} + 200\\hat{j} + 350\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft",
          "raw": "= \\left\\{-200\\hat{i} + 200\\hat{j} + 350\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft"
        },
        {
          "type": "calc",
          "latex": "(Mc)^2 = (Mc)2u2 = (250 lb  \\cdot  ft)(-k)",
          "raw": "(Mc)2 = (Mc)2u2 = (250 lb  \\cdot  ft)(-k)"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{-250\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft",
          "raw": "= \\left\\{-250\\hat{k}\\right\\}\\text{ lb}  \\cdot  ft"
        },
        {
          "type": "calc",
          "latex": "(Mc)3 = (Mc)3 u3 = (300 lb  \\cdot  ft)11.5",
          "raw": "(Mc)3 = (Mc)3 u3 = (300 lb  \\cdot  ft)11.5"
        },
        {
          "type": "calc",
          "latex": "2.5i -",
          "raw": "2.5i -"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "2.5j2",
          "raw": "2.5j2"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{180\\hat{i} - 240\\hat{j}\\right\\}\\text{ lb}  \\cdot  ft",
          "raw": "= \\left\\{180\\hat{i} - 240\\hat{j}\\right\\}\\text{ lb}  \\cdot  ft"
        },
        {
          "type": "calc",
          "latex": "(Mc)R = Mc;",
          "raw": "(Mc)R = Mc;"
        },
        {
          "type": "ans",
          "latex": "(Mc)R = {-20i - 40j + 100k} lb  \\cdot  ft",
          "raw": "(Mc)R = {-20i - 40j + 100k} lb  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "(Mc)R = {-20i - 40j + 100k} lb  \\cdot  ft"
      ]
    },
    {
      "id": "F4-24",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 24,
      "page_book": 182,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the couple moment acting on the pipe \nassembly and express the result as a Cartesian vector.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_24.webp",
      "solution_raw": "FB = 14\n52(450 N)j - 13\n52(450 N)k\n \n = 5360j - 270k6 N\n \n Mc = rAB * FB = 3\ni\nj\nk\n0.4\n0\n0\n0\n360\n-270\n3\n \n = {108j + 144k} N # m\n\nAns.\n \nAlso,\n \n Mc = (rA * FA) + (rB * FB)\n \n = 3\ni\nj\nk\n0\n0\n0.3\n0\n-360\n270\n3 + 3\ni\nj\nk\n0.4\n0\n0.3\n0\n360\n-270\n3\n \n = {108j + 144k} N # m\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "FB = \\left(\\frac{4}{5}\\right)(450 N)j - \\left(\\frac{3}{5}\\right)(450 N)k",
          "raw": "FB = \\left(\\frac{4}{5}\\right)(450 N)j - \\left(\\frac{3}{5}\\right)(450 N)k"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{360\\hat{j} - 270\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{360\\hat{j} - 270\\hat{k}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "Mc = rAB  \\times  FB = 3",
          "raw": "Mc = rAB  \\times  FB = 3"
        },
        {
          "type": "calc",
          "latex": "i",
          "raw": "i"
        },
        {
          "type": "calc",
          "latex": "j",
          "raw": "j"
        },
        {
          "type": "calc",
          "latex": "k",
          "raw": "k"
        },
        {
          "type": "calc",
          "latex": "0.4",
          "raw": "0.4"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "360",
          "raw": "360"
        },
        {
          "type": "calc",
          "latex": "-270",
          "raw": "-270"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "ans",
          "latex": "= {108j + 144k} N  \\cdot  m",
          "raw": "= {108j + 144k} N  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "Also,",
          "raw": "Also,"
        },
        {
          "type": "calc",
          "latex": "Mc = (rA  \\times  FA) + (rB  \\times  FB)",
          "raw": "Mc = (rA  \\times  FA) + (rB  \\times  FB)"
        },
        {
          "type": "calc",
          "latex": "= 3",
          "raw": "= 3"
        },
        {
          "type": "calc",
          "latex": "i",
          "raw": "i"
        },
        {
          "type": "calc",
          "latex": "j",
          "raw": "j"
        },
        {
          "type": "calc",
          "latex": "k",
          "raw": "k"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0.3",
          "raw": "0.3"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "-360",
          "raw": "-360"
        },
        {
          "type": "calc",
          "latex": "270",
          "raw": "270"
        },
        {
          "type": "calc",
          "latex": "3 + 3",
          "raw": "3 + 3"
        },
        {
          "type": "calc",
          "latex": "i",
          "raw": "i"
        },
        {
          "type": "calc",
          "latex": "j",
          "raw": "j"
        },
        {
          "type": "calc",
          "latex": "k",
          "raw": "k"
        },
        {
          "type": "calc",
          "latex": "0.4",
          "raw": "0.4"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0.3",
          "raw": "0.3"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "360",
          "raw": "360"
        },
        {
          "type": "calc",
          "latex": "-270",
          "raw": "-270"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "ans",
          "latex": "= {108j + 144k} N  \\cdot  m",
          "raw": "= {108j + 144k} N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= {108j + 144k} N  \\cdot  m"
      ]
    },
    {
      "id": "F4-25",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 25,
      "page_book": 195,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and couple moment acting at point A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force) • หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_25.webp",
      "solution_raw": "+d FRx = Fx; FRx = 200 - 3\n5 (100) = 140 lb\n \n + TFRy = Fy; FRy = 150 - 4\n5 (100) = 70 lb\n \n FR = 21402 + 702 = 157 lb\n\nAns.\n \n u = tan-11 70\n1402 = 26.6° d\nAns.\n \n c+MAR = MA;\n \n MAR = 3\n5(100)(4) - 4\n5 (100)(6) + 150(3)\n \n MRA = 210 lb # ft\n\nAns.",
      "final_answers": [
        "1402 = 26.6° d"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+d (F_R)_x = F_x; (F_R)_x = \\sqrt{00 - 3}",
          "raw": "+d FRx = Fx; FRx = 200 - 3"
        },
        {
          "type": "calc",
          "latex": "5 (100) = 140 lb",
          "raw": "5 (100) = 140 lb"
        },
        {
          "type": "calc",
          "latex": "+ TFRy = F_y; (F_R)_y = 150 - 4",
          "raw": "+ TFRy = Fy; FRy = 150 - 4"
        },
        {
          "type": "calc",
          "latex": "5 (100) = 70 lb",
          "raw": "5 (100) = 70 lb"
        },
        {
          "type": "ans",
          "latex": "F_R = \\sqrt{140^2 + 70^2} = 157 lb",
          "raw": "FR = 21402 + 702 = 157 lb"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\\\tan^{-1}\\left(\\frac{70}{140}\\right) = 26.6^\\circ d",
          "raw": "u = tan-1\\left(\\frac{70}{140}\\right) = 26.6° d"
        },
        {
          "type": "calc",
          "latex": "c+MAR = MA;",
          "raw": "c+MAR = MA;"
        },
        {
          "type": "calc",
          "latex": "MAR = 3",
          "raw": "MAR = 3"
        },
        {
          "type": "calc",
          "latex": "5(100)(4) - 4",
          "raw": "5(100)(4) - 4"
        },
        {
          "type": "calc",
          "latex": "5 (100)(6) + 150(3)",
          "raw": "5 (100)(6) + 150(3)"
        },
        {
          "type": "ans",
          "latex": "MRA = 210 lb  \\cdot  ft",
          "raw": "MRA = 210 lb  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "F_R = \\sqrt{140^2 + 70^2} = 157 lb",
        "\\theta = \\\\tan^{-1}\\left(\\frac{70}{140}\\right) = 26.6^\\circ d",
        "MRA = 210 lb  \\cdot  ft"
      ]
    },
    {
      "id": "F4-26",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 26,
      "page_book": 195,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and couple moment acting at point A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force) • หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_26.webp",
      "solution_raw": "+S FRx = Fx; FRx = 4\n5 (50) = 40 N\n \n + TFRy = Fy; FRy = 40 + 30 + 3\n5 (50)\n \n = 100 N\n \n FR = 2(40)2 + (100)2 = 108 N \nAns.\n \n u = tan-11100\n40 2 = 68.2° c\nAns.\n \n c+MAR = MA;\n \n MAR = 30(3) + 3\n5 (50)(6) + 200\n \n = 470 N # m\n\nAns.",
      "final_answers": [
        "FR = 2(40)2 + (100)2 = 108 N",
        "40 2 = 68.2° c"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma (F_R)_x = \\Sigma F_x \\implies (F_R)_x = 4",
          "raw": "+S FRx = Fx; FRx = 4"
        },
        {
          "type": "calc",
          "latex": "5 (50) = 40 N",
          "raw": "5 (50) = 40 N"
        },
        {
          "type": "calc",
          "latex": "+ TFRy = F_y; (F_R)_y = 40 + 30 + 3",
          "raw": "+ TFRy = Fy; FRy = 40 + 30 + 3"
        },
        {
          "type": "calc",
          "latex": "5 (50)",
          "raw": "5 (50)"
        },
        {
          "type": "calc",
          "latex": "= 100 N",
          "raw": "= 100 N"
        },
        {
          "type": "ans",
          "latex": "F_R = \\sqrt{(40)^2 + (100)^2} = 108 N",
          "raw": "FR = 2(40)2 + (100)2 = 108 N"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\tan-\\left(\\frac{1100}{40}\\right) = 68.2^\\circ c",
          "raw": "u = tan-\\left(\\frac{1100}{40}\\right) = 68.2° c"
        },
        {
          "type": "calc",
          "latex": "c+MAR = MA;",
          "raw": "c+MAR = MA;"
        },
        {
          "type": "calc",
          "latex": "MAR = 30(3) + 3",
          "raw": "MAR = 30(3) + 3"
        },
        {
          "type": "calc",
          "latex": "5 (50)(6) + 200",
          "raw": "5 (50)(6) + 200"
        },
        {
          "type": "ans",
          "latex": "= 470 N  \\cdot  m",
          "raw": "= 470 N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "F_R = \\sqrt{(40)^2 + (100)^2} = 108 N",
        "\\theta = \\tan-\\left(\\frac{1100}{40}\\right) = 68.2^\\circ c",
        "= 470 N  \\cdot  m"
      ]
    },
    {
      "id": "F4-27",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 27,
      "page_book": 195,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and couple moment acting at point A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force) • หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_27.webp",
      "solution_raw": "S\n+ (FR)x = Fx;\n \n \n (FR)x = 900 sin 30° = 450 N S\n \n + c(FR)y = Fy;\n \n \n (FR)y = -900 cos 30° - 300\n \n = -1079.42 N = 1079.42 N T\n \n FR = 24502 + 1079.422\n \n = 1169.47 N = 1.17 kN\n\nAns.\n \n u = tan-111079.42\n450 2 = 67.4° c\nAns.\n \n a+(MR)A = MA;\n \n \n (MR)A = 300 - 900 cos30° (0.75) - 300(2.25)\n \n = -959.57 N # m\n \n = 960 N # m b\n\nAns.\n\n626 \nPartial Solutions And Answers",
      "final_answers": [
        "450 2 = 67.4° c",
        "Partial Solutions And wers"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ (F_R)x = F_x;",
          "raw": "+ (FR)x = Fx;"
        },
        {
          "type": "calc",
          "latex": "(F_R)x = 900 \\sin 30^\\circ = 450 N S",
          "raw": "(FR)x = 900 sin 30° = 450 N S"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma (F_R)_y = \\Sigma F_y \\implies",
          "raw": "+ c(FR)y = Fy;"
        },
        {
          "type": "calc",
          "latex": "(F_R)y = -900 \\cos 30^\\circ - 300",
          "raw": "(FR)y = -900 cos 30° - 300"
        },
        {
          "type": "calc",
          "latex": "= -1079.42 N = 1079.42 N T",
          "raw": "= -1079.42 N = 1079.42 N T"
        },
        {
          "type": "calc",
          "latex": "F_R = \\sqrt{450^2 + 1079.422}",
          "raw": "FR = 24502 + 1079.422"
        },
        {
          "type": "ans",
          "latex": "= 1169.47 N = 1.17 kN",
          "raw": "= 1169.47 N = 1.17 kN"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\\\tan^{-1}\\left(\\frac{11079.42}{450}\\right) 2 = 67.4^\\circ c",
          "raw": "u = \\tan^{-1}\\left(\\frac{11079.42}{450}\\right) 2 = 67.4° c"
        },
        {
          "type": "calc",
          "latex": "a+(MR)A = MA;",
          "raw": "a+(MR)A = MA;"
        },
        {
          "type": "calc",
          "latex": "(MR)A = 300 - 900 cos30^\\circ (0.75) - 300(2.25)",
          "raw": "(MR)A = 300 - 900 cos30° (0.75) - 300(2.25)"
        },
        {
          "type": "calc",
          "latex": "= -959.57 N  \\cdot  m",
          "raw": "= -959.57 N  \\cdot  m"
        },
        {
          "type": "ans",
          "latex": "= 960 N  \\cdot  m \\beta",
          "raw": "= 960 N  \\cdot  m b"
        }
      ],
      "final_answers_math": [
        "= 1169.47 N = 1.17 kN",
        "\\theta = \\\\tan^{-1}\\left(\\frac{11079.42}{450}\\right) 2 = 67.4^\\circ c",
        "= 960 N  \\cdot  m \\beta"
      ]
    },
    {
      "id": "F4-28",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 28,
      "page_book": 195,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and couple moment acting at point A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force) • หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_28.webp",
      "solution_raw": "+S (FR)x = Fx;\n \n (FR)x = 15013\n52 + 50 - 10014\n52 = 60 lb S\n \n + c(FR)y = Fy;\n \n (FR)y = -15014\n52 - 10013\n52\n \n = -180 lb = 180 lb T\n \n FR = 2602 + 1802 = 189.74 lb = 190 lb\nAns.\n \n u = tan-11180\n60 2 = 71.6° c\nAns.\n \n a+(MR)A = MA;\n \n (MR)A = 10014\n52(1) - 10013\n52(6) - 15014\n52(3)\n \n= -640 = 640 lb # ft b\nAns.",
      "final_answers": [
        "FR = 2602 + 1802 = 189.74 lb = 190 lb",
        "60 2 = 71.6° c",
        "= -640 = 640 lb · ft b"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma (F_R)_x = \\Sigma F_x \\implies",
          "raw": "+S (FR)x = Fx;"
        },
        {
          "type": "calc",
          "latex": "(F_R)x = 150\\left(\\frac{3}{5}\\right) + 50 - 100\\left(\\frac{4}{5}\\right) = 60 lb S",
          "raw": "(FR)x = 150\\left(\\frac{3}{5}\\right) + 50 - 100\\left(\\frac{4}{5}\\right) = 60 lb S"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma (F_R)_y = \\Sigma F_y \\implies",
          "raw": "+ c(FR)y = Fy;"
        },
        {
          "type": "calc",
          "latex": "(F_R)y = -150\\left(\\frac{4}{5}\\right) - 100\\left(\\frac{3}{5}\\right)",
          "raw": "(FR)y = -150\\left(\\frac{4}{5}\\right) - 100\\left(\\frac{3}{5}\\right)"
        },
        {
          "type": "calc",
          "latex": "= -180 lb = 180 lb T",
          "raw": "= -180 lb = 180 lb T"
        },
        {
          "type": "ans",
          "latex": "F_R = \\sqrt{60^2 + 180^2} = 189.74 lb = 190 lb",
          "raw": "FR = 2602 + 1802 = 189.74 lb = 190 lb"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\tan-\\left(\\frac{1180}{60}\\right) = 71.6^\\circ c",
          "raw": "u = tan-\\left(\\frac{1180}{60}\\right) = 71.6° c"
        },
        {
          "type": "calc",
          "latex": "a+(MR)A = MA;",
          "raw": "a+(MR)A = MA;"
        },
        {
          "type": "calc",
          "latex": "(MR)A = 100\\left(\\frac{4}{5}\\right)(1) - 100\\left(\\frac{3}{5}\\right)(6) - 150\\left(\\frac{4}{5}\\right)(3)",
          "raw": "(MR)A = 100\\left(\\frac{4}{5}\\right)(1) - 100\\left(\\frac{3}{5}\\right)(6) - 150\\left(\\frac{4}{5}\\right)(3)"
        },
        {
          "type": "ans",
          "latex": "= - =  lb  \\cdot  ft \\beta",
          "raw": "= - =  lb  \\cdot  ft b"
        }
      ],
      "final_answers_math": [
        "F_R = \\sqrt{60^2 + 180^2} = 189.74 lb = 190 lb",
        "\\theta = \\tan-\\left(\\frac{1180}{60}\\right) = 71.6^\\circ c",
        "= - =  lb  \\cdot  ft \\beta"
      ]
    },
    {
      "id": "F4-29",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 29,
      "page_book": 195,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and couple moment acting at point O.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force) • หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_29.webp",
      "solution_raw": "FR = F;\n \n FR = F1 + F2\n \n = (-300i + 150j + 200k) + (-450k)\n \n = 5-300i + 150j - 250k6 N\n Ans.\n \n rOA = (2 - 0)j = 52j6 m\n \n rOB = (-1.5- 0)i + (2 - 0)j + (1 - 0)k\n \n = 5-1.5i + 2j + 1k6 m\n \n (MR)O = M;\n \n (MR)O = rOB * F1 + rOA * F2\n \n = 3\ni\nj\nk\n-1.5\n2\n1\n-300\n150\n200\n3 + 3\ni\nj\nk\n0\n2\n0\n0\n0\n-450\n3\n \n= 5-650i + 375k6N # m\nAns.",
      "final_answers": [
        "= 5-300i + 150j - 250k6 N",
        "= 5-650i + 375k6N · m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_R = F;",
          "raw": "FR = F;"
        },
        {
          "type": "calc",
          "latex": "F_R = F1 + F2",
          "raw": "FR = F1 + F2"
        },
        {
          "type": "calc",
          "latex": "= (-300i + 150j + 200k) + (-450k)",
          "raw": "= (-300i + 150j + 200k) + (-450k)"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{-300\\hat{i} + 150\\hat{j} - 250\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{-300\\hat{i} + 150\\hat{j} - 250\\hat{k}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "rOA = (2 - 0)j = \\left\\{2\\hat{j}\\right\\}\\text{ m}",
          "raw": "rOA = (2 - 0)j = \\left\\{2\\hat{j}\\right\\}\\text{ m}"
        },
        {
          "type": "calc",
          "latex": "rOB = (-1.5- 0)i + (2 - 0)j + (1 - 0)k",
          "raw": "rOB = (-1.5- 0)i + (2 - 0)j + (1 - 0)k"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{-1.5\\hat{i} + 2\\hat{j} + 1\\hat{k}\\right\\}\\text{ m}",
          "raw": "= \\left\\{-1.5\\hat{i} + 2\\hat{j} + 1\\hat{k}\\right\\}\\text{ m}"
        },
        {
          "type": "calc",
          "latex": "(MR)O = M;",
          "raw": "(MR)O = M;"
        },
        {
          "type": "calc",
          "latex": "(MR)O = rOB  \\times  F1 + rOA  \\times  F2",
          "raw": "(MR)O = rOB  \\times  F1 + rOA  \\times  F2"
        },
        {
          "type": "calc",
          "latex": "= 3",
          "raw": "= 3"
        },
        {
          "type": "calc",
          "latex": "i",
          "raw": "i"
        },
        {
          "type": "calc",
          "latex": "j",
          "raw": "j"
        },
        {
          "type": "calc",
          "latex": "k",
          "raw": "k"
        },
        {
          "type": "calc",
          "latex": "-1.5",
          "raw": "-1.5"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "-300",
          "raw": "-300"
        },
        {
          "type": "calc",
          "latex": "150",
          "raw": "150"
        },
        {
          "type": "calc",
          "latex": "200",
          "raw": "200"
        },
        {
          "type": "calc",
          "latex": "3 + 3",
          "raw": "3 + 3"
        },
        {
          "type": "calc",
          "latex": "i",
          "raw": "i"
        },
        {
          "type": "calc",
          "latex": "j",
          "raw": "j"
        },
        {
          "type": "calc",
          "latex": "k",
          "raw": "k"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "-450",
          "raw": "-450"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "ans",
          "latex": "= \\left\\{-650\\hat{i} + 375\\hat{k}\\right\\}\\text{ N}  \\cdot  m",
          "raw": "= \\left\\{-650\\hat{i} + 375\\hat{k}\\right\\}\\text{ N}  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "= \\left\\{-300\\hat{i} + 150\\hat{j} - 250\\hat{k}\\right\\}\\text{ N}",
        "= \\left\\{-650\\hat{i} + 375\\hat{k}\\right\\}\\text{ N}  \\cdot  m"
      ]
    },
    {
      "id": "F4-30",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 30,
      "page_book": 195,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and couple moment acting at point O.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force) • หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force)",
      "image": "images/problems/F4_30.webp",
      "solution_raw": "F1 = 5-100j6 N\n \n \n F2 = (200 N)J\n5-0.4i - 0.3k6 m\n2(-0.4 m)2 + (-0.3 m)2 R\n \n = 5-160i - 120k6 N\n \n Mc = 5-75i6 N # m\n \n FR = {-160i - 100j - 120k} N\nAns.\n \n (MR)O = (0.3k) * (-100j)\n \n + 3\ni\nj\nk\n0\n0.5\n0.3\n-160\n0\n-120\n3 + (-75i)\n \n = {-105i - 48j + 80k} N # m\nAns.",
      "final_answers": [
        "FR = {-160i - 100j - 120k} N",
        "= {-105i - 48j + 80k} N · m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F1 = \\left\\{-100\\hat{j}\\right\\}\\text{ N}",
          "raw": "F1 = \\left\\{-100\\hat{j}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "F2 = (200 N)J",
          "raw": "F2 = (200 N)J"
        },
        {
          "type": "calc",
          "latex": "\\left\\{-0.4\\hat{i} - 0.3\\hat{k}\\right\\}\\text{ m}",
          "raw": "\\left\\{-0.4\\hat{i} - 0.3\\hat{k}\\right\\}\\text{ m}"
        },
        {
          "type": "calc",
          "latex": "\\sqrt{(-0.4 m)^2} + (-0.3 m)^2 R",
          "raw": "2(-0.4 m)2 + (-0.3 m)2 R"
        },
        {
          "type": "calc",
          "latex": "= \\left\\{-160\\hat{i} - 120\\hat{k}\\right\\}\\text{ N}",
          "raw": "= \\left\\{-160\\hat{i} - 120\\hat{k}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "Mc = \\left\\{-75\\hat{i}\\right\\}\\text{ N}  \\cdot  m",
          "raw": "Mc = \\left\\{-75\\hat{i}\\right\\}\\text{ N}  \\cdot  m"
        },
        {
          "type": "ans",
          "latex": "F_R = {-160i - 100j - 120k} N",
          "raw": "FR = {-160i - 100j - 120k} N"
        },
        {
          "type": "calc",
          "latex": "(MR)O = (0.3k)  \\times  (-100j)",
          "raw": "(MR)O = (0.3k)  \\times  (-100j)"
        },
        {
          "type": "calc",
          "latex": "+ 3",
          "raw": "+ 3"
        },
        {
          "type": "calc",
          "latex": "i",
          "raw": "i"
        },
        {
          "type": "calc",
          "latex": "j",
          "raw": "j"
        },
        {
          "type": "calc",
          "latex": "k",
          "raw": "k"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "0.5",
          "raw": "0.5"
        },
        {
          "type": "calc",
          "latex": "0.3",
          "raw": "0.3"
        },
        {
          "type": "calc",
          "latex": "-160",
          "raw": "-160"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "-120",
          "raw": "-120"
        },
        {
          "type": "calc",
          "latex": "3 + (-75i)",
          "raw": "3 + (-75i)"
        },
        {
          "type": "ans",
          "latex": "= {-105i - 48j + 80k} N  \\cdot  m",
          "raw": "= {-105i - 48j + 80k} N  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "F_R = {-160i - 100j - 120k} N",
        "= {-105i - 48j + 80k} N  \\cdot  m"
      ]
    },
    {
      "id": "F4-31",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 31,
      "page_book": 207,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and specify where the resultant’s line of \naction intersects the beam measured from O.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_31.webp",
      "solution_raw": "+ TFR = Fy; FR = 500 + 250 + 500\n \n = 1250 lb\n\nAns.\n \n c+FRx = MO;\n \n 1250(x) = 500(3) + 250(6) + 500(9)\n \n x = 6 ft\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+ TFR = F_y; F_R = 500 + 250 + 500",
          "raw": "+ TFR = Fy; FR = 500 + 250 + 500"
        },
        {
          "type": "ans",
          "latex": "= 1250 lb",
          "raw": "= 1250 lb"
        },
        {
          "type": "calc",
          "latex": "c+(F_R)_x = M_O;",
          "raw": "c+FRx = MO;"
        },
        {
          "type": "calc",
          "latex": "1250(x) = 500(3) + 250(6) + 500(9)",
          "raw": "1250(x) = 500(3) + 250(6) + 500(9)"
        },
        {
          "type": "ans",
          "latex": "x = 6 ft",
          "raw": "x = 6 ft"
        }
      ],
      "final_answers_math": [
        "= 1250 lb",
        "x = 6 ft"
      ]
    },
    {
      "id": "F4-32",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 32,
      "page_book": 207,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and specify where the resultant’s line of \naction intersects the member measured from A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_32.webp",
      "solution_raw": "S\n+ (FR)x = Fx;\n \n (FR)x = 10013\n52+ 50 sin 30° = 85 lb S\n \n + c(FR)y = Fy;\n \n (FR)y = 200 + 50 cos 30° - 10014\n52\n \n = 163.30 lbc\n \n FR = 2852 + 163.302 = 184 lb\n \n u = tan-11163.30\n85 2 = 62.5° a\nAns.\n \n a+(MR)A = MA;\n \n 163.30(d) = 200(3) - 10014\n52(6) + 50 cos 30°(9)\n \n d = 3.12 ft\n Ans.",
      "final_answers": [
        "85 2 = 62.5° a",
        "d = 3.12 ft"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ (F_R)x = F_x;",
          "raw": "+ (FR)x = Fx;"
        },
        {
          "type": "calc",
          "latex": "(F_R)x = 100\\left(\\frac{3}{5}\\right)+ 50 \\sin 30^\\circ = 85 lb S",
          "raw": "(FR)x = 100\\left(\\frac{3}{5}\\right)+ 50 sin 30° = 85 lb S"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma (F_R)_y = \\Sigma F_y \\implies",
          "raw": "+ c(FR)y = Fy;"
        },
        {
          "type": "calc",
          "latex": "(F_R)y = 200 + 50 \\cos 30^\\circ - 100\\left(\\frac{4}{5}\\right)",
          "raw": "(FR)y = 200 + 50 cos 30° - 100\\left(\\frac{4}{5}\\right)"
        },
        {
          "type": "calc",
          "latex": "= 163.30 lbc",
          "raw": "= 163.30 lbc"
        },
        {
          "type": "calc",
          "latex": "F_R = \\sqrt{85^2 + 163.302} = 184 lb",
          "raw": "FR = 2852 + 163.302 = 184 lb"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\\\tan^{-1}\\left(\\frac{1163.30}{85}\\right) 2 = 62.5^\\circ \\alpha",
          "raw": "u = \\tan^{-1}\\left(\\frac{1163.30}{85}\\right) 2 = 62.5° a"
        },
        {
          "type": "calc",
          "latex": "a+(MR)A = MA;",
          "raw": "a+(MR)A = MA;"
        },
        {
          "type": "calc",
          "latex": "163.30(d) = 200(3) - 100\\left(\\frac{4}{5}\\right)(6) + 50 \\cos 30^\\circ(9)",
          "raw": "163.30(d) = 200(3) - 100\\left(\\frac{4}{5}\\right)(6) + 50 cos 30°(9)"
        },
        {
          "type": "ans",
          "latex": "d = 3.12 ft",
          "raw": "d = 3.12 ft"
        }
      ],
      "final_answers_math": [
        "\\theta = \\\\tan^{-1}\\left(\\frac{1163.30}{85}\\right) 2 = 62.5^\\circ \\alpha",
        "d = 3.12 ft"
      ]
    },
    {
      "id": "F4-33",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 33,
      "page_book": 207,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and specify where the resultant’s line of \naction intersects the horizontal segment of the member \nmeasured from A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_33.webp",
      "solution_raw": "S\n+ (FR)x = Fx;\n \n (FR)x = 1514\n52 = 12 kN S\n \n + c(FR)y = Fy;\n \n (FR)y = -20 + 1513\n52 = -11 kN = 11 kNT\n \n FR = 2122 + 112 = 16.3 kN\n\nAns.\n \n u = tan-1111\n122 = 42.5° c\nAns.\n \n a+(MR)A = MA;\n \n -11(d) = -20(2) - 1514\n52(2) + 1513\n52(6)\n \n d = 0.909 m\nAns.",
      "final_answers": [
        "122 = 42.5° c",
        "d = 0.909 m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ (F_R)x = F_x;",
          "raw": "+ (FR)x = Fx;"
        },
        {
          "type": "calc",
          "latex": "(F_R)x = 15\\left(\\frac{4}{5}\\right) = 12 kN S",
          "raw": "(FR)x = 15\\left(\\frac{4}{5}\\right) = 12 kN S"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma (F_R)_y = \\Sigma F_y \\implies",
          "raw": "+ c(FR)y = Fy;"
        },
        {
          "type": "calc",
          "latex": "(F_R)y = -20 + 15\\left(\\frac{3}{5}\\right) = -11 kN = 11 kNT",
          "raw": "(FR)y = -20 + 15\\left(\\frac{3}{5}\\right) = -11 kN = 11 kNT"
        },
        {
          "type": "ans",
          "latex": "F_R = \\sqrt{12^2 + 11^2} = 16.3 kN",
          "raw": "FR = 2122 + 112 = 16.3 kN"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\tan-\\left(\\frac{111}{12}\\right) = 42.5^\\circ c",
          "raw": "u = tan-\\left(\\frac{111}{12}\\right) = 42.5° c"
        },
        {
          "type": "calc",
          "latex": "a+(MR)A = MA;",
          "raw": "a+(MR)A = MA;"
        },
        {
          "type": "calc",
          "latex": "-11(d) = -20(2) - 15\\left(\\frac{4}{5}\\right)(2) + 15\\left(\\frac{3}{5}\\right)(6)",
          "raw": "-11(d) = -20(2) - 15\\left(\\frac{4}{5}\\right)(2) + 15\\left(\\frac{3}{5}\\right)(6)"
        },
        {
          "type": "ans",
          "latex": "d = 0.909 m",
          "raw": "d = 0.909 m"
        }
      ],
      "final_answers_math": [
        "F_R = \\sqrt{12^2 + 11^2} = 16.3 kN",
        "\\theta = \\tan-\\left(\\frac{111}{12}\\right) = 42.5^\\circ c",
        "d = 0.909 m"
      ]
    },
    {
      "id": "F4-34",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 34,
      "page_book": 207,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading system by an equivalent \nresultant force and specify where the resultant’s line of \naction intersects the member AB measured from A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_34.webp",
      "solution_raw": "+S(FR)x = Fx;\n \n (FR)x = 13\n52 5 kN - 8 kN\n \n = -5 kN = 5 kN d\n \n + c(FR)y = Fy;\n \n (FR)y = -6 kN - 14\n52 5 kN\n \n = -10 kN = 10 kNT\n \n FR = 252 + 102 = 11.2 kN\nAns.\n \n u = tan-1110 kN\n5 kN 2 = 63.4° d\nAns.\n \n a+(MR)A = MA;\n \n 5 kN(d) = 8 kN(3 m) - 6 kN(0.5 m)\n \n - 314\n525 kN4(2 m)\n \n - 313\n525 kN4(4 m)\n \n d = 0.2 m\nAns.",
      "final_answers": [
        "FR = 252 + 102 = 11.2 kN",
        "5 kN 2 = 63.4° d",
        "d = 0.2 m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma (F_R)_x = \\Sigma F_x \\implies",
          "raw": "+S(FR)x = Fx;"
        },
        {
          "type": "calc",
          "latex": "(F_R)x = \\left(\\frac{3}{5}\\right) 5 kN - 8 kN",
          "raw": "(FR)x = \\left(\\frac{3}{5}\\right) 5 kN - 8 kN"
        },
        {
          "type": "calc",
          "latex": "= -5 kN = 5 kN d",
          "raw": "= -5 kN = 5 kN d"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma (F_R)_y = \\Sigma F_y \\implies",
          "raw": "+ c(FR)y = Fy;"
        },
        {
          "type": "calc",
          "latex": "(F_R)y = -6 kN - \\left(\\frac{4}{5}\\right) 5 kN",
          "raw": "(FR)y = -6 kN - \\left(\\frac{4}{5}\\right) 5 kN"
        },
        {
          "type": "calc",
          "latex": "= -10 kN = 10 kNT",
          "raw": "= -10 kN = 10 kNT"
        },
        {
          "type": "ans",
          "latex": "F_R = \\sqrt{52 + 10^2} = 11.2 kN",
          "raw": "FR = 252 + 102 = 11.2 kN"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\\\tan^{-1}\\left(\\frac{10 kN}{5 kN}\\right) = 63.4^\\circ d",
          "raw": "u = \\tan^{-1}\\left(\\frac{10 kN}{5 kN}\\right) = 63.4° d"
        },
        {
          "type": "calc",
          "latex": "a+(MR)A = MA;",
          "raw": "a+(MR)A = MA;"
        },
        {
          "type": "calc",
          "latex": "5 kN(d) = 8 kN(3 m) - 6 kN(0.5 m)",
          "raw": "5 kN(d) = 8 kN(3 m) - 6 kN(0.5 m)"
        },
        {
          "type": "calc",
          "latex": "- 3\\left(\\frac{4}{5}\\right)5 kN4(2 m)",
          "raw": "- 3\\left(\\frac{4}{5}\\right)5 kN4(2 m)"
        },
        {
          "type": "calc",
          "latex": "- 3\\left(\\frac{3}{5}\\right)5 kN4(4 m)",
          "raw": "- 3\\left(\\frac{3}{5}\\right)5 kN4(4 m)"
        },
        {
          "type": "ans",
          "latex": "d = 0.2 m",
          "raw": "d = 0.2 m"
        }
      ],
      "final_answers_math": [
        "F_R = \\sqrt{52 + 10^2} = 11.2 kN",
        "\\theta = \\\\tan^{-1}\\left(\\frac{10 kN}{5 kN}\\right) = 63.4^\\circ d",
        "d = 0.2 m"
      ]
    },
    {
      "id": "F4-35",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 35,
      "page_book": 207,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading shown by an equivalent single \nresultant force and specify the x and y coordinates of its \nline of action.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_35.webp",
      "solution_raw": "+ TFR = Fz; FR = 400 + 500 - 100\n \n = 800 N \nAns.\n \n MRx = Mx; -800y = -400(4) - 500(4)\n \n y = 4.50 m\nAns.\n \n MRy = My; 800x = 500(4) - 100(3)\n \n x = 2.125 m\nAns.",
      "final_answers": [
        "= 800 N",
        "y = 4.50 m",
        "x = 2.125 m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+ TFR = F_z; F_R = 400 + 500 - 100",
          "raw": "+ TFR = Fz; FR = 400 + 500 - 100"
        },
        {
          "type": "ans",
          "latex": "= 800 N",
          "raw": "= 800 N"
        },
        {
          "type": "calc",
          "latex": "MRx = Mx; -800y = -400(4) - 500(4)",
          "raw": "MRx = Mx; -800y = -400(4) - 500(4)"
        },
        {
          "type": "ans",
          "latex": "y = 4.50 m",
          "raw": "y = 4.50 m"
        },
        {
          "type": "calc",
          "latex": "MRy = My; 800x = 500(4) - 100(3)",
          "raw": "MRy = My; 800x = 500(4) - 100(3)"
        },
        {
          "type": "ans",
          "latex": "x = 2.125 m",
          "raw": "x = 2.125 m"
        }
      ],
      "final_answers_math": [
        "= 800 N",
        "y = 4.50 m",
        "x = 2.125 m"
      ]
    },
    {
      "id": "F4-36",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 36,
      "page_book": 207,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Replace the loading shown by an equivalent single \nresultant force and specify the x and y coordinates of its \nline of action.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_36.webp",
      "solution_raw": "+ TFR = Fz;\n \n FR = 200 + 200 + 100 + 100\n \n = 600 N\n\nAns.\n \n a+MRx = Mx;\n \n -600y = 200(1) + 200(1) + 100(3) - 100(3)\n \n y = -0.667 m\nAns.\n \n c+MRy = My;\n \n 600x = 100(3) + 100(3) + 200(2) - 200(3)\n \n x = 0.667 m\nAns.",
      "final_answers": [
        "y = -0.667 m",
        "x = 0.667 m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+ TFR = F_z;",
          "raw": "+ TFR = Fz;"
        },
        {
          "type": "calc",
          "latex": "F_R = \\sqrt{00 + 200 + 100 + 100}",
          "raw": "FR = 200 + 200 + 100 + 100"
        },
        {
          "type": "ans",
          "latex": "=  N",
          "raw": "=  N"
        },
        {
          "type": "calc",
          "latex": "a+MRx = Mx;",
          "raw": "a+MRx = Mx;"
        },
        {
          "type": "calc",
          "latex": "-600y = 200(1) + 200(1) + 100(3) - 100(3)",
          "raw": "-600y = 200(1) + 200(1) + 100(3) - 100(3)"
        },
        {
          "type": "ans",
          "latex": "y = -0. m",
          "raw": "y = -0. m"
        },
        {
          "type": "calc",
          "latex": "c+MRy = My;",
          "raw": "c+MRy = My;"
        },
        {
          "type": "calc",
          "latex": "600x = 100(3) + 100(3) + 200(2) - 200(3)",
          "raw": "600x = 100(3) + 100(3) + 200(2) - 200(3)"
        },
        {
          "type": "ans",
          "latex": "x = 0. m",
          "raw": "x = 0. m"
        }
      ],
      "final_answers_math": [
        "=  N",
        "y = -0. m",
        "x = 0. m"
      ]
    },
    {
      "id": "F4-37",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 37,
      "page_book": 217,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the resultant force and specify where it \nacts on the beam measured from A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_37.webp",
      "solution_raw": "+ cFR = Fy;\n \n -FR = -6(1.5) - 9(3) - 3(1.5)\n \n FR = 40.5 kNT\nAns.\n \n a+(MR)A = MA;\n \n -40.5(d) = 6(1.5)(0.75)\n \n - 9(3)(1.5) - 3(1.5)(3.75)\n \n d = 1.25 m\nAns.",
      "final_answers": [
        "FR = 40.5 kNT",
        "d = 1.25 m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+ cFR = F_y;",
          "raw": "+ cFR = Fy;"
        },
        {
          "type": "calc",
          "latex": "-F_R = -6(1.5) - 9(3) - 3(1.5)",
          "raw": "-FR = -6(1.5) - 9(3) - 3(1.5)"
        },
        {
          "type": "ans",
          "latex": "F_R = 40.5 kNT",
          "raw": "FR = 40.5 kNT"
        },
        {
          "type": "calc",
          "latex": "a+(MR)A = MA;",
          "raw": "a+(MR)A = MA;"
        },
        {
          "type": "calc",
          "latex": "-40.5(d) = 6(1.5)(0.75)",
          "raw": "-40.5(d) = 6(1.5)(0.75)"
        },
        {
          "type": "calc",
          "latex": "- 9(3)(1.5) - 3(1.5)(3.75)",
          "raw": "- 9(3)(1.5) - 3(1.5)(3.75)"
        },
        {
          "type": "ans",
          "latex": "d = 1.25 m",
          "raw": "d = 1.25 m"
        }
      ],
      "final_answers_math": [
        "F_R = 40.5 kNT",
        "d = 1.25 m"
      ]
    },
    {
      "id": "F4-38",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 38,
      "page_book": 217,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the resultant force and specify where it \nacts on the beam measured from A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_38.webp",
      "solution_raw": "FR = 1\n2 (6)(150) + 8(150) = 1650 lb\nAns.\n \n c+MAR = MA;\n \n 1650d = 31\n2 (6)(150)4(4) + [8(150)](10)\n \n d = 8.36 ft\nAns.",
      "final_answers": [
        "2 (6)(150) + 8(150) = 1650 lb",
        "d = 8.36 ft"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_R = 1",
          "raw": "FR = 1"
        },
        {
          "type": "ans",
          "latex": "2 (6)(150) + 8(150) = 1650 lb",
          "raw": "2 (6)(150) + 8(150) = 1650 lb"
        },
        {
          "type": "calc",
          "latex": "c+MAR = MA;",
          "raw": "c+MAR = MA;"
        },
        {
          "type": "calc",
          "latex": "1650d = 31",
          "raw": "1650d = 31"
        },
        {
          "type": "calc",
          "latex": "2 (6)(150)4(4) + [8(150)](10)",
          "raw": "2 (6)(150)4(4) + [8(150)](10)"
        },
        {
          "type": "ans",
          "latex": "d = 8.36 ft",
          "raw": "d = 8.36 ft"
        }
      ],
      "final_answers_math": [
        "2 (6)(150) + 8(150) = 1650 lb",
        "d = 8.36 ft"
      ]
    },
    {
      "id": "F4-39",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 39,
      "page_book": 217,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the resultant force and specify where it \nacts on the beam measured from A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_39.webp",
      "solution_raw": "+ cFR = Fy;\n \n -FR = - 1\n2 (6)(3) - 1\n2 (6)(6)\n \n FR = 27 kNT\n\nAns.\n \n a+(MR)A = MA;\n \n -27(d) = 1\n2(6)(3)(1) - 1\n2(6)(6)(2)\n \n d = 1 m\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+ cFR = F_y;",
          "raw": "+ cFR = Fy;"
        },
        {
          "type": "calc",
          "latex": "-F_R = - 1",
          "raw": "-FR = - 1"
        },
        {
          "type": "calc",
          "latex": "2 (6)(3) - 1",
          "raw": "2 (6)(3) - 1"
        },
        {
          "type": "calc",
          "latex": "2 (6)(6)",
          "raw": "2 (6)(6)"
        },
        {
          "type": "ans",
          "latex": "F_R = 27 kNT",
          "raw": "FR = 27 kNT"
        },
        {
          "type": "calc",
          "latex": "a+(MR)A = MA;",
          "raw": "a+(MR)A = MA;"
        },
        {
          "type": "calc",
          "latex": "-27(d) = 1",
          "raw": "-27(d) = 1"
        },
        {
          "type": "calc",
          "latex": "2(6)(3)(1) - 1",
          "raw": "2(6)(3)(1) - 1"
        },
        {
          "type": "calc",
          "latex": "2(6)(6)(2)",
          "raw": "2(6)(6)(2)"
        },
        {
          "type": "ans",
          "latex": "d = 1 m",
          "raw": "d = 1 m"
        }
      ],
      "final_answers_math": [
        "F_R = 27 kNT",
        "d = 1 m"
      ]
    },
    {
      "id": "F4-40",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 40,
      "page_book": 217,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the resultant force and specify where it \nacts on the beam measured from A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_40.webp",
      "solution_raw": "+ TFR = Fy;\n \n FR = 1\n2(50)(6) + 150(6) + 500\n \n = 1550 lb \n\nAns.\n \n c+MAR = MA;\n \n 1550d = 31\n2(50)(6)4(4) + [150(6)](3) + 500(9)\n \n d = 5.03 ft\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+ TFR = F_y;",
          "raw": "+ TFR = Fy;"
        },
        {
          "type": "calc",
          "latex": "F_R = 1",
          "raw": "FR = 1"
        },
        {
          "type": "calc",
          "latex": "2(50)(6) + 150(6) + 500",
          "raw": "2(50)(6) + 150(6) + 500"
        },
        {
          "type": "ans",
          "latex": "= 1550 lb",
          "raw": "= 1550 lb"
        },
        {
          "type": "calc",
          "latex": "c+MAR = MA;",
          "raw": "c+MAR = MA;"
        },
        {
          "type": "calc",
          "latex": "1550d = 31",
          "raw": "1550d = 31"
        },
        {
          "type": "calc",
          "latex": "2(50)(6)4(4) + [150(6)](3) + 500(9)",
          "raw": "2(50)(6)4(4) + [150(6)](3) + 500(9)"
        },
        {
          "type": "ans",
          "latex": "d = 5.03 ft",
          "raw": "d = 5.03 ft"
        }
      ],
      "final_answers_math": [
        "= 1550 lb",
        "d = 5.03 ft"
      ]
    },
    {
      "id": "F4-41",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 41,
      "page_book": 217,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the resultant force and specify where it \nacts on the beam measured from A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_41.webp",
      "solution_raw": "+ cFR = Fy;\n \n -FR = - 1\n2(3)(4.5) - 3(6)\n \n FR = 24.75 kNT\n\nAns.\n \n a+(MR)A = MA;\n \n -24.75(d) = - 1\n2(3)(4.5)(1.5) - 3(6)(3)\n \n d = 2.59 m\n\nAns.\n\n \nFundamental Problems \n627",
      "final_answers": [],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+ cFR = F_y;",
          "raw": "+ cFR = Fy;"
        },
        {
          "type": "calc",
          "latex": "-F_R = - 1",
          "raw": "-FR = - 1"
        },
        {
          "type": "calc",
          "latex": "2(3)(4.5) - 3(6)",
          "raw": "2(3)(4.5) - 3(6)"
        },
        {
          "type": "ans",
          "latex": "F_R = 24.75 kNT",
          "raw": "FR = 24.75 kNT"
        },
        {
          "type": "calc",
          "latex": "a+(MR)A = MA;",
          "raw": "a+(MR)A = MA;"
        },
        {
          "type": "calc",
          "latex": "-24.75(d) = - 1",
          "raw": "-24.75(d) = - 1"
        },
        {
          "type": "calc",
          "latex": "2(3)(4.5)(1.5) - 3(6)(3)",
          "raw": "2(3)(4.5)(1.5) - 3(6)(3)"
        },
        {
          "type": "ans",
          "latex": "d = 2.59 m",
          "raw": "d = 2.59 m"
        }
      ],
      "final_answers_math": [
        "F_R = 24.75 kNT",
        "d = 2.59 m"
      ]
    },
    {
      "id": "F4-42",
      "chapter": 4,
      "chapter_name_en": "Force System Resultants",
      "chapter_name_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
      "number": 42,
      "page_book": 217,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the resultant force and specify where it \nacts on the beam measured from A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force)",
      "image": "images/problems/F4_42.webp",
      "solution_raw": "FR =\nL\nw(x) dx =\nL\n4\n0\n2.5x3 dx = 160 N\n \n c+MAR = MA;\n \n x = L\nxw(x) dx\nL\nw(x) dx\n= L\n4\n0\n2.5x4 dx\n160\n= 3.20 mAns.\nChapter 5",
      "final_answers": [
        "= 3.20 m"
      ],
      "theory_th": "โมเมนต์ของแรงรอบจุดและระบบแรงลัพธ์: \\(M_O = F \\cdot d, \\quad \\vec{M}_O = \\vec{r} \\times \\vec{F}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_R =",
          "raw": "FR ="
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "w(x) dx =",
          "raw": "w(x) dx ="
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "4",
          "raw": "4"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "2.5x3 dx = 160 N",
          "raw": "2.5x3 dx = 160 N"
        },
        {
          "type": "calc",
          "latex": "c+MAR = MA;",
          "raw": "c+MAR = MA;"
        },
        {
          "type": "calc",
          "latex": "x = \\int",
          "raw": "x = \\int"
        },
        {
          "type": "calc",
          "latex": "xw(x) dx",
          "raw": "xw(x) dx"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "w(x) dx",
          "raw": "w(x) dx"
        },
        {
          "type": "calc",
          "latex": "= L",
          "raw": "= L"
        },
        {
          "type": "calc",
          "latex": "4",
          "raw": "4"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "2.5x4 dx",
          "raw": "2.5x4 dx"
        },
        {
          "type": "calc",
          "latex": "160",
          "raw": "160"
        },
        {
          "type": "ans",
          "latex": "= 3.20 m",
          "raw": "= 3.20 mAns."
        }
      ],
      "final_answers_math": [
        "= 3.20 m"
      ]
    },
    {
      "id": "F5-1",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 1,
      "page_book": 255,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the horizontal and vertical components \nof reaction at the supports. Neglect the thickness of the \nbeam.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F5_1.webp",
      "solution_raw": "+S Fx = 0; -Ax + 50013\n52 = 0\n \n Ax = 300 lb \nAns.\n \n a+ MA = 0; By(10) - 50014\n52(5) - 600 = 0\n \n By = 260 lb \nAns.\n \n + c Fy = 0; Ay + 260 - 50014\n52 = 0\n \n Ay = 140 lb \nAns.",
      "final_answers": [
        "Ax = 300 lb",
        "By = 260 lb",
        "Ay = 140 lb"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies -Ax + 500\\left(\\frac{3}{5}\\right) = 0",
          "raw": "+S Fx = 0; -Ax + 500\\left(\\frac{3}{5}\\right) = 0"
        },
        {
          "type": "ans",
          "latex": "Ax = 300 lb",
          "raw": "Ax = 300 lb"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies By(10) - 500\\left(\\frac{4}{5}\\right)(5) -  = 0",
          "raw": "a+ MA = 0; By(10) - 500\\left(\\frac{4}{5}\\right)(5) -  = 0"
        },
        {
          "type": "ans",
          "latex": "By = 260 lb",
          "raw": "By = 260 lb"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies Ay + 260 - 500\\left(\\frac{4}{5}\\right) = 0",
          "raw": "+ c Fy = 0; Ay + 260 - 500\\left(\\frac{4}{5}\\right) = 0"
        },
        {
          "type": "ans",
          "latex": "Ay = 140 lb",
          "raw": "Ay = 140 lb"
        }
      ],
      "final_answers_math": [
        "Ax = 300 lb",
        "By = 260 lb",
        "Ay = 140 lb"
      ]
    },
    {
      "id": "F5-2",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 2,
      "page_book": 255,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the horizontal and vertical components \nof reaction at the pin A and the reaction on the beam at C.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F5_2.webp",
      "solution_raw": "a+ MA = 0;\n \nFCD sin 45°(1.5 m) - 4 kN(3 m) = 0\n \nFCD = 11.31 kN = 11.3 kN\nAns.\n \n +S Fx = 0; Ax + (11.31 kN) cos 45° = 0\n \n Ax = -8 kN = 8 kN d\n\nAns.\n \n + c Fy = 0;\n \n Ay + (11.31 kN) sin 45° - 4 kN = 0\n \n Ay = -4 kN = 4 kN T\n\nAns.",
      "final_answers": [
        "FCD = 11.31 kN = 11.3 kN"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies",
          "raw": "a+ MA = 0;"
        },
        {
          "type": "calc",
          "latex": "FCD \\sin 45^\\circ(1.5 m) - 4 kN(3 m) = 0",
          "raw": "FCD sin 45°(1.5 m) - 4 kN(3 m) = 0"
        },
        {
          "type": "ans",
          "latex": "FCD = 11.31 kN = 11.3 kN",
          "raw": "FCD = 11.31 kN = 11.3 kN"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies Ax + (11.31 kN) \\cos 45^\\circ = 0",
          "raw": "+S Fx = 0; Ax + (11.31 kN) cos 45° = 0"
        },
        {
          "type": "ans",
          "latex": "Ax = -8 kN = 8 kN d",
          "raw": "Ax = -8 kN = 8 kN d"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies",
          "raw": "+ c Fy = 0;"
        },
        {
          "type": "calc",
          "latex": "Ay + (11.31 kN) \\sin 45^\\circ - 4 kN = 0",
          "raw": "Ay + (11.31 kN) sin 45° - 4 kN = 0"
        },
        {
          "type": "ans",
          "latex": "Ay = -4 kN = 4 kN T",
          "raw": "Ay = -4 kN = 4 kN T"
        }
      ],
      "final_answers_math": [
        "FCD = 11.31 kN = 11.3 kN",
        "Ax = -8 kN = 8 kN d",
        "Ay = -4 kN = 4 kN T"
      ]
    },
    {
      "id": "F5-3",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 3,
      "page_book": 255,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "The truss is supported by a pin at A and a roller at B. \nDetermine the support reactions.",
      "question_th_summary": "หาแรงปฏิกิริยาที่จุดรองรับ (Support Reactions)",
      "image": "images/problems/F5_3.webp",
      "solution_raw": "a+ MA = 0;\n \nNB[6 m + (6 m) cos 45°]\n \n- 10 kN[2 m + (6 m) cos 45°]\n \n- 5 kN(4 m) = 0\n \nNB = 8.047 kN = 8.05 kN\nAns.\n \n +S Fx = 0;\n \n (5 kN) cos 45° - Ax = 0\n \n Ax = 3.54 kN\nAns.\n \n + c Fy = 0;\n \n Ay + 8.047 kN - (5 kN) sin 45° - 10 kN = 0\n \nAy = 5.49 kN\nAns.",
      "final_answers": [
        "NB = 8.047 kN = 8.05 kN",
        "Ax = 3.54 kN",
        "Ay = 5.49 kN"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies",
          "raw": "a+ MA = 0;"
        },
        {
          "type": "calc",
          "latex": "NB[6 m + (6 m) \\cos 45^\\circ]",
          "raw": "NB[6 m + (6 m) cos 45°]"
        },
        {
          "type": "calc",
          "latex": "- 10 kN[2 m + (6 m) \\cos 45^\\circ]",
          "raw": "- 10 kN[2 m + (6 m) cos 45°]"
        },
        {
          "type": "calc",
          "latex": "- 5 kN(4 m) = 0",
          "raw": "- 5 kN(4 m) = 0"
        },
        {
          "type": "ans",
          "latex": "NB = 8.047 kN = 8.05 kN",
          "raw": "NB = 8.047 kN = 8.05 kN"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies",
          "raw": "+S Fx = 0;"
        },
        {
          "type": "calc",
          "latex": "(5 kN) \\cos 45^\\circ - Ax = 0",
          "raw": "(5 kN) cos 45° - Ax = 0"
        },
        {
          "type": "ans",
          "latex": "Ax = 3.54 kN",
          "raw": "Ax = 3.54 kN"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies",
          "raw": "+ c Fy = 0;"
        },
        {
          "type": "calc",
          "latex": "Ay + 8.047 kN - (5 kN) \\sin 45^\\circ - 10 kN = 0",
          "raw": "Ay + 8.047 kN - (5 kN) sin 45° - 10 kN = 0"
        },
        {
          "type": "ans",
          "latex": "Ay = 5.49 kN",
          "raw": "Ay = 5.49 kN"
        }
      ],
      "final_answers_math": [
        "NB = 8.047 kN = 8.05 kN",
        "Ax = 3.54 kN",
        "Ay = 5.49 kN"
      ]
    },
    {
      "id": "F5-4",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 4,
      "page_book": 255,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the components of reaction at the fixed \nsupport A. Neglect the thickness of the beam.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F5_4.webp",
      "solution_raw": "+S Fx = 0; \n-Ax + 400 cos 30° = 0\n \n Ax = 346 N\nAns.\n \n+ c Fy = 0;\n \n Ay - 200 - 200 - 200 - 400 sin 30° = 0\n \nAy = 800 N \nAns.\n \n a+ MA = 0;\n \n MA - 200(2.5) - 200(3.5) - 200(4.5)\n \n- 400 sin 30°(4.5) - 400 cos 30°(3 sin 60°) = 0\n \n MA = 3.90 kN # m \nAns.\n\n628 \nPartial Solutions And Answers",
      "final_answers": [
        "Ax = 346 N",
        "Ay = 800 N",
        "MA = 3.90 kN · m",
        "Partial Solutions And wers"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies",
          "raw": "+S Fx = 0;"
        },
        {
          "type": "calc",
          "latex": "-Ax + 400 \\cos 30^\\circ = 0",
          "raw": "-Ax + 400 cos 30° = 0"
        },
        {
          "type": "ans",
          "latex": "Ax = 346 N",
          "raw": "Ax = 346 N"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies",
          "raw": "+ c Fy = 0;"
        },
        {
          "type": "calc",
          "latex": "Ay - 200 - 200 - 200 - 400 \\sin 30^\\circ = 0",
          "raw": "Ay - 200 - 200 - 200 - 400 sin 30° = 0"
        },
        {
          "type": "ans",
          "latex": "Ay = 800 N",
          "raw": "Ay = 800 N"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies",
          "raw": "a+ MA = 0;"
        },
        {
          "type": "calc",
          "latex": "MA - 200(2.5) - 200(3.5) - 200(4.5)",
          "raw": "MA - 200(2.5) - 200(3.5) - 200(4.5)"
        },
        {
          "type": "calc",
          "latex": "- 400 \\sin 30^\\circ(4.5) - 400 \\cos 30^\\circ(3 \\sin 60^\\circ) = 0",
          "raw": "- 400 sin 30°(4.5) - 400 cos 30°(3 sin 60°) = 0"
        },
        {
          "type": "ans",
          "latex": "MA = 3.90 kN  \\cdot  m",
          "raw": "MA = 3.90 kN  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "Ax = 346 N",
        "Ay = 800 N",
        "MA = 3.90 kN  \\cdot  m"
      ]
    },
    {
      "id": "F5-5",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 5,
      "page_book": 255,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "The 25-kg bar has a center of mass at G. If it is \nsupported by a smooth peg at C, a roller at A, and cord AB, \ndetermine the reactions at these supports.",
      "question_th_summary": "หาแรงปฏิกิริยาที่จุดรองรับ (Support Reactions)",
      "image": "images/problems/F5_5.webp",
      "solution_raw": "a+ MA = 0;\n \nNC(0.7 m) - [25(9.81) N] (0.5 m) cos 30° = 0\n \nNC = 151.71 N = 152 N\nAns.\n \n+S Fx = 0;\n \nTAB cos 15° - (151.71 N) cos 60° = 0\n \nTAB = 78.53 N = 78.5 N\nAns.\n \n + c Fy = 0;\n \nFA + (78.53 N) sin 15°\n \n+ (151.71 N) sin 60° - 25(9.81) N = 0\n \nFA = 93.5 N\nAns.",
      "final_answers": [
        "NC = 151.71 N = 152 N",
        "TAB = 78.53 N = 78.5 N",
        "FA = 93.5 N"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies",
          "raw": "a+ MA = 0;"
        },
        {
          "type": "calc",
          "latex": "NC(0.7 m) - [25(9.81) N] (0.5 m) \\cos 30^\\circ = 0",
          "raw": "NC(0.7 m) - [25(9.81) N] (0.5 m) cos 30° = 0"
        },
        {
          "type": "ans",
          "latex": "NC = 151.71 N = 152 N",
          "raw": "NC = 151.71 N = 152 N"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies",
          "raw": "+S Fx = 0;"
        },
        {
          "type": "calc",
          "latex": "TAB \\cos 15^\\circ - (151.71 N) \\cos 60^\\circ = 0",
          "raw": "TAB cos 15° - (151.71 N) cos 60° = 0"
        },
        {
          "type": "ans",
          "latex": "TAB = 78.53 N = 78.5 N",
          "raw": "TAB = 78.53 N = 78.5 N"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies",
          "raw": "+ c Fy = 0;"
        },
        {
          "type": "calc",
          "latex": "FA + (78.53 N) \\sin 15^\\circ",
          "raw": "FA + (78.53 N) sin 15°"
        },
        {
          "type": "calc",
          "latex": "+ (151.71 N) \\sin 60^\\circ - 25(9.81) N = 0",
          "raw": "+ (151.71 N) sin 60° - 25(9.81) N = 0"
        },
        {
          "type": "ans",
          "latex": "FA = 93.5 N",
          "raw": "FA = 93.5 N"
        }
      ],
      "final_answers_math": [
        "NC = 151.71 N = 152 N",
        "TAB = 78.53 N = 78.5 N",
        "FA = 93.5 N"
      ]
    },
    {
      "id": "F5-6",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 6,
      "page_book": 255,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the reactions at the smooth contact \npoints A, B, and C on the bar.",
      "question_th_summary": "หาแรงปฏิกิริยาที่จุดรองรับ (Support Reactions)",
      "image": "images/problems/F5_6.webp",
      "solution_raw": "+S Fx = 0;\n \nNC sin 30° - (250 N) sin 60° = 0\n \n NC = 433.0 N = 433 N\nAns.\n \n a+ MB = 0;\n \n-NA sin 30°(0.15 m) - 433.0 N(0.2 m)\n \n+ [(250 N) cos 30°](0.6 m) = 0\n \nNA = 577.4 N = 577 N\nAns.\n \n+ c Fy = 0;\n \nNB - 577.4 N + (433.0 N)cos 30°\n \n- (250 N) cos 60° = 0\n \nNB = 327 N\nAns.",
      "final_answers": [
        "NC = 433.0 N = 433 N",
        "NA = 577.4 N = 577 N",
        "NB = 327 N"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies",
          "raw": "+S Fx = 0;"
        },
        {
          "type": "calc",
          "latex": "NC \\sin 30^\\circ - (250 N) \\sin 60^\\circ = 0",
          "raw": "NC sin 30° - (250 N) sin 60° = 0"
        },
        {
          "type": "ans",
          "latex": "NC = 433.0 N = 433 N",
          "raw": "NC = 433.0 N = 433 N"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{B} = 0 \\implies",
          "raw": "a+ MB = 0;"
        },
        {
          "type": "calc",
          "latex": "-NA \\sin 30^\\circ(0.15 m) - 433.0 N(0.2 m)",
          "raw": "-NA sin 30°(0.15 m) - 433.0 N(0.2 m)"
        },
        {
          "type": "calc",
          "latex": "+ [(250 N) \\cos 30^\\circ](0.6 m) = 0",
          "raw": "+ [(250 N) cos 30°](0.6 m) = 0"
        },
        {
          "type": "ans",
          "latex": "NA = 577.4 N = 577 N",
          "raw": "NA = 577.4 N = 577 N"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies",
          "raw": "+ c Fy = 0;"
        },
        {
          "type": "calc",
          "latex": "NB - 577.4 N + (433.0 N)\\cos 30^\\circ",
          "raw": "NB - 577.4 N + (433.0 N)cos 30°"
        },
        {
          "type": "calc",
          "latex": "- (250 N) \\cos 60^\\circ = 0",
          "raw": "- (250 N) cos 60° = 0"
        },
        {
          "type": "ans",
          "latex": "NB = 327 N",
          "raw": "NB = 327 N"
        }
      ],
      "final_answers_math": [
        "NC = 433.0 N = 433 N",
        "NA = 577.4 N = 577 N",
        "NB = 327 N"
      ]
    },
    {
      "id": "F5-7",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 7,
      "page_book": 283,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "The uniform plate has a weight of 500 lb. Determine \nthe tension in each of the supporting cables.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension)",
      "image": "images/problems/F5_7.webp",
      "solution_raw": "Fz = 0;\n \nTA + TB + TC - 200 - 500 = 0\n \n Mx = 0;\n \nTA(3) + TC(3) - 500(1.5) - 200(3) = 0\n \n My = 0;\n \n-TB(4) - TC(4) + 500(2) + 200(2) = 0\n \n TA = 350 lb, TB = 250 lb, TC = 100 lb\nAns.",
      "final_answers": [
        "TA = 350 lb, TB = 250 lb, TC = 100 lb"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_z = 0;",
          "raw": "Fz = 0;"
        },
        {
          "type": "calc",
          "latex": "TA + TB + TC - 200 - 500 = 0",
          "raw": "TA + TB + TC - 200 - 500 = 0"
        },
        {
          "type": "calc",
          "latex": "Mx = 0;",
          "raw": "Mx = 0;"
        },
        {
          "type": "calc",
          "latex": "TA(3) + TC(3) - 500(1.5) - 200(3) = 0",
          "raw": "TA(3) + TC(3) - 500(1.5) - 200(3) = 0"
        },
        {
          "type": "calc",
          "latex": "My = 0;",
          "raw": "My = 0;"
        },
        {
          "type": "calc",
          "latex": "-TB(4) - TC(4) + 500(2) + 200(2) = 0",
          "raw": "-TB(4) - TC(4) + 500(2) + 200(2) = 0"
        },
        {
          "type": "ans",
          "latex": "TA = 350 lb, TB = 250 lb, TC = 100 lb",
          "raw": "TA = 350 lb, TB = 250 lb, TC = 100 lb"
        }
      ],
      "final_answers_math": [
        "TA = 350 lb, TB = 250 lb, TC = 100 lb"
      ]
    },
    {
      "id": "F5-8",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 8,
      "page_book": 283,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the reactions at the roller support A, the \nball-and-socket joint D, and the tension in cable BC for \nthe plate.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงปฏิกิริยาที่จุดรองรับ (Support Reactions)",
      "image": "images/problems/F5_8.webp",
      "solution_raw": "My = 0;\n \n600 N(0.2 m) + 900 N(0.6 m) - FA(1 m) = 0\n \nFA = 660 N\nAns.\n \n Mx = 0;\n \nDz(0.8 m) - 600 N(0.5 m) - 900 N(0.1 m) = 0\n \nDz = 487.5 N\nAns.\n \n Fx = 0; \nDx = 0\nAns.\n \n Fy = 0; \nDy = 0\nAns.\n \n Fz = 0;\n \nTBC + 660 N + 487.5 N - 900 N - 600 N = 0\n \nTBC = 352.5 N\nAns.",
      "final_answers": [
        "FA = 660 N",
        "Dz = 487.5 N",
        "Dx = 0",
        "Dy = 0",
        "TBC = 352.5 N"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "My = 0;",
          "raw": "My = 0;"
        },
        {
          "type": "calc",
          "latex": "N(0.2 m) + 900 N(0.6 m) - FA(1 m) = 0",
          "raw": "N(0.2 m) + 900 N(0.6 m) - FA(1 m) = 0"
        },
        {
          "type": "ans",
          "latex": "FA =  N",
          "raw": "FA =  N"
        },
        {
          "type": "calc",
          "latex": "Mx = 0;",
          "raw": "Mx = 0;"
        },
        {
          "type": "calc",
          "latex": "Dz(0.8 m) -  N(0.5 m) - 900 N(0.1 m) = 0",
          "raw": "Dz(0.8 m) -  N(0.5 m) - 900 N(0.1 m) = 0"
        },
        {
          "type": "ans",
          "latex": "Dz = 487.5 N",
          "raw": "Dz = 487.5 N"
        },
        {
          "type": "calc",
          "latex": "F_x = 0;",
          "raw": "Fx = 0;"
        },
        {
          "type": "ans",
          "latex": "Dx = 0",
          "raw": "Dx = 0"
        },
        {
          "type": "calc",
          "latex": "F_y = 0;",
          "raw": "Fy = 0;"
        },
        {
          "type": "ans",
          "latex": "Dy = 0",
          "raw": "Dy = 0"
        },
        {
          "type": "calc",
          "latex": "F_z = 0;",
          "raw": "Fz = 0;"
        },
        {
          "type": "calc",
          "latex": "TBC +  N + 487.5 N - 900 N -  N = 0",
          "raw": "TBC +  N + 487.5 N - 900 N -  N = 0"
        },
        {
          "type": "ans",
          "latex": "TBC = 352.5 N",
          "raw": "TBC = 352.5 N"
        }
      ],
      "final_answers_math": [
        "FA =  N",
        "Dz = 487.5 N",
        "Dx = 0",
        "Dy = 0",
        "TBC = 352.5 N"
      ]
    },
    {
      "id": "F5-9",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 9,
      "page_book": 283,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "The rod is supported by smooth journal bearings at \nA, B, and C and is subjected to the two forces. Determine \nthe reactions at these supports.",
      "question_th_summary": "หาแรงปฏิกิริยาที่จุดรองรับ (Support Reactions)",
      "image": "images/problems/F5_9.webp",
      "solution_raw": "Fy = 0;  400 N + Cy = 0;\n \nCy = -400 N\nAns.\n \n My = 0;  -Cx (0.4 m) - 600 N (0.6 m) = 0\n \n Cx = -900 N \nAns.\n \n Mx = 0;  Bz (0.6 m) + 600 N (1.2 m)\n \n + (-400 N)(0.4 m) = 0\n \nBz = -933.3 N\nAns.\n \n Mz = 0;\n \n -Bx (0.6 m) - (-900 N)(1.2 m)\n \n+ (-400 N)(0.6 m) = 0\n \n Bx = 1400 N\nAns.\n \n Fx = 0;  1400 N + (-900 N) + Ax = 0\n \nAx = -500 N\nAns.\n \n Fz = 0;  Az - 933.3 N + 600 N = 0\n \n Az = 333.3 N\nAns.",
      "final_answers": [
        "Cy = -400 N",
        "Cx = -900 N",
        "Bz = -933.3 N",
        "Bx = 1400 N",
        "Ax = -500 N",
        "Az = 333.3 N"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_y = 0;  400 N + Cy = 0;",
          "raw": "Fy = 0;  400 N + Cy = 0;"
        },
        {
          "type": "ans",
          "latex": "Cy = -400 N",
          "raw": "Cy = -400 N"
        },
        {
          "type": "calc",
          "latex": "My = 0;  -Cx (0.4 m) -  N (0.6 m) = 0",
          "raw": "My = 0;  -Cx (0.4 m) -  N (0.6 m) = 0"
        },
        {
          "type": "ans",
          "latex": "Cx = -900 N",
          "raw": "Cx = -900 N"
        },
        {
          "type": "calc",
          "latex": "Mx = 0;  Bz (0.6 m) +  N (1.2 m)",
          "raw": "Mx = 0;  Bz (0.6 m) +  N (1.2 m)"
        },
        {
          "type": "calc",
          "latex": "+ (-400 N)(0.4 m) = 0",
          "raw": "+ (-400 N)(0.4 m) = 0"
        },
        {
          "type": "ans",
          "latex": "Bz = -933.3 N",
          "raw": "Bz = -933.3 N"
        },
        {
          "type": "calc",
          "latex": "Mz = 0;",
          "raw": "Mz = 0;"
        },
        {
          "type": "calc",
          "latex": "-Bx (0.6 m) - (-900 N)(1.2 m)",
          "raw": "-Bx (0.6 m) - (-900 N)(1.2 m)"
        },
        {
          "type": "calc",
          "latex": "+ (-400 N)(0.6 m) = 0",
          "raw": "+ (-400 N)(0.6 m) = 0"
        },
        {
          "type": "ans",
          "latex": "Bx = 1400 N",
          "raw": "Bx = 1400 N"
        },
        {
          "type": "calc",
          "latex": "F_x = 0;  1400 N + (-900 N) + Ax = 0",
          "raw": "Fx = 0;  1400 N + (-900 N) + Ax = 0"
        },
        {
          "type": "ans",
          "latex": "Ax = -500 N",
          "raw": "Ax = -500 N"
        },
        {
          "type": "calc",
          "latex": "F_z = 0;  Az - 933.3 N +  N = 0",
          "raw": "Fz = 0;  Az - 933.3 N +  N = 0"
        },
        {
          "type": "ans",
          "latex": "Az = 333.3 N",
          "raw": "Az = 333.3 N"
        }
      ],
      "final_answers_math": [
        "Cy = -400 N",
        "Cx = -900 N",
        "Bz = -933.3 N",
        "Bx = 1400 N",
        "Ax = -500 N",
        "Az = 333.3 N"
      ]
    },
    {
      "id": "F5-10",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 10,
      "page_book": 283,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the support reactions at the smooth \njournal bearings A, B, and C of the pipe assembly.",
      "question_th_summary": "หาแรงปฏิกิริยาที่จุดรองรับ (Support Reactions)",
      "image": "images/problems/F5_10.webp",
      "solution_raw": "Fx = 0; \n Bx = 0\nAns.\n \n Mz = 0; \n \nCy(0.4 m + 0.6 m) = 0  Cy = 0\nAns.\n \n Fy = 0;  Ay + 0 = 0  Ay = 0\nAns.\n \n Mx = 0; Cz(0.6 m + 0.6 m) + Bz(0.6 m)\n \n- 450 N(0.6 m + 0.6 m) = 0\n \n1.2Cz + 0.6Bz - 540 = 0\n \n My = 0; -Cz(0.6 m + 0.4 m)\n \n- Bz(0.6 m) + 450 N(0.6 m) = 0\n \n-Cz - 0.6Bz + 270 = 0\n \nCz = 1350 N Bz = -1800 N\nAns.\n \n Fz = 0;\n \nAz + 1350 N + (-1800 N) - 450 N = 0\n \nAz = 900 N\nAns.",
      "final_answers": [
        "Bx = 0",
        "Cy(0.4 m + 0.6 m) = 0  Cy = 0",
        "Fy = 0;  Ay + 0 = 0  Ay = 0",
        "Cz = 1350 N Bz = -1800 N",
        "Az = 900 N"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "F_x = 0;",
          "raw": "Fx = 0;"
        },
        {
          "type": "ans",
          "latex": "Bx = 0",
          "raw": "Bx = 0"
        },
        {
          "type": "calc",
          "latex": "Mz = 0;",
          "raw": "Mz = 0;"
        },
        {
          "type": "ans",
          "latex": "Cy(0.4 m + 0.6 m) = 0  Cy = 0",
          "raw": "Cy(0.4 m + 0.6 m) = 0  Cy = 0"
        },
        {
          "type": "ans",
          "latex": "F_y = 0;  Ay + 0 = 0  Ay = 0",
          "raw": "Fy = 0;  Ay + 0 = 0  Ay = 0"
        },
        {
          "type": "calc",
          "latex": "Mx = 0; Cz(0.6 m + 0.6 m) + Bz(0.6 m)",
          "raw": "Mx = 0; Cz(0.6 m + 0.6 m) + Bz(0.6 m)"
        },
        {
          "type": "calc",
          "latex": "- 450 N(0.6 m + 0.6 m) = 0",
          "raw": "- 450 N(0.6 m + 0.6 m) = 0"
        },
        {
          "type": "calc",
          "latex": "1.2Cz + 0.6Bz - 540 = 0",
          "raw": "1.2Cz + 0.6Bz - 540 = 0"
        },
        {
          "type": "calc",
          "latex": "My = 0; -Cz(0.6 m + 0.4 m)",
          "raw": "My = 0; -Cz(0.6 m + 0.4 m)"
        },
        {
          "type": "calc",
          "latex": "- Bz(0.6 m) + 450 N(0.6 m) = 0",
          "raw": "- Bz(0.6 m) + 450 N(0.6 m) = 0"
        },
        {
          "type": "calc",
          "latex": "-Cz - 0.6Bz + 270 = 0",
          "raw": "-Cz - 0.6Bz + 270 = 0"
        },
        {
          "type": "ans",
          "latex": "Cz = 1350 N Bz = -1800 N",
          "raw": "Cz = 1350 N Bz = -1800 N"
        },
        {
          "type": "calc",
          "latex": "F_z = 0;",
          "raw": "Fz = 0;"
        },
        {
          "type": "calc",
          "latex": "Az + 1350 N + (-1800 N) - 450 N = 0",
          "raw": "Az + 1350 N + (-1800 N) - 450 N = 0"
        },
        {
          "type": "ans",
          "latex": "Az = 900 N",
          "raw": "Az = 900 N"
        }
      ],
      "final_answers_math": [
        "Bx = 0",
        "Cy(0.4 m + 0.6 m) = 0  Cy = 0",
        "F_y = 0;  Ay + 0 = 0  Ay = 0",
        "Cz = 1350 N Bz = -1800 N",
        "Az = 900 N"
      ]
    },
    {
      "id": "F5-11",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 11,
      "page_book": 283,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the force developed in the short \nlink BD, and the tension in the cords CE and CF, and the \nreactions of the ball-and-socket joint A on the block.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงปฏิกิริยาที่จุดรองรับ (Support Reactions)",
      "image": "images/problems/F5_11.webp",
      "solution_raw": "Fy = 0; Ay = 0\n\nAns.\n \n Mx = 0; -9(3) + FCE(3) = 0\n \n FCE = 9 kN\n\nAns.\n \n Mz = 0; FCF(3) - 6(3) = 0\n \n FCF = 6 kN\n\nAns.\n \n My = 0; 9(4) - Az (4) - 6(1.5) = 0\n \n Az = 6.75 kN\n\nAns.\n \n Fx = 0; Ax + 6 - 6 = 0 Ax = 0 \nAns.\n \n Fz = 0; FDB + 9 - 9 + 6.75 = 0\n \n FDB = -6.75 kN\n\nAns.\n\n \nFundamental Problems \n629",
      "final_answers": [
        "Fx = 0; Ax + 6 - 6 = 0 Ax = 0"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "F_y = 0; Ay = 0",
          "raw": "Fy = 0; Ay = 0"
        },
        {
          "type": "calc",
          "latex": "Mx = 0; -9(3) + FCE(3) = 0",
          "raw": "Mx = 0; -9(3) + FCE(3) = 0"
        },
        {
          "type": "ans",
          "latex": "FCE = 9 kN",
          "raw": "FCE = 9 kN"
        },
        {
          "type": "calc",
          "latex": "Mz = 0; FCF(3) - 6(3) = 0",
          "raw": "Mz = 0; FCF(3) - 6(3) = 0"
        },
        {
          "type": "ans",
          "latex": "FCF = 6 kN",
          "raw": "FCF = 6 kN"
        },
        {
          "type": "calc",
          "latex": "My = 0; 9(4) - Az (4) - 6(1.5) = 0",
          "raw": "My = 0; 9(4) - Az (4) - 6(1.5) = 0"
        },
        {
          "type": "ans",
          "latex": "Az = 6.75 kN",
          "raw": "Az = 6.75 kN"
        },
        {
          "type": "ans",
          "latex": "F_x = 0; Ax + 6 - 6 = 0 Ax = 0",
          "raw": "Fx = 0; Ax + 6 - 6 = 0 Ax = 0"
        },
        {
          "type": "calc",
          "latex": "F_z = 0; FDB + 9 - 9 + 6.75 = 0",
          "raw": "Fz = 0; FDB + 9 - 9 + 6.75 = 0"
        },
        {
          "type": "ans",
          "latex": "FDB = -6.75 kN",
          "raw": "FDB = -6.75 kN"
        }
      ],
      "final_answers_math": [
        "F_y = 0; Ay = 0",
        "FCE = 9 kN",
        "FCF = 6 kN",
        "Az = 6.75 kN",
        "F_x = 0; Ax + 6 - 6 = 0 Ax = 0",
        "FDB = -6.75 kN"
      ]
    },
    {
      "id": "F5-12",
      "chapter": 5,
      "chapter_name_en": "Equilibrium of a Rigid Body",
      "chapter_name_th": "สมดุลของวัตถุเกร็ง",
      "number": 12,
      "page_book": 283,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the components of reaction that the \nthrust bearing A and cable BC exert on the bar.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F5_12.webp",
      "solution_raw": "Fx = 0; Ax = 0\n\nAns.\n \n Fy = 0; Ay = 0\n\nAns.\n \n Fz = 0; Az + FBC - 80 = 0\n \n \n Mx = 0; (MA)x + 6FBC - 80(6) = 0\n \n \n My = 0; 3FBC - 80(1.5) = 0 FBC = 40 lb\nAns.\n \n Mz = 0; (MA)z = 0\n\nAns.\n \n Az = 40 lb (MA)x = 240 lb # ft\n\nAns.\nChapter 6",
      "final_answers": [
        "My = 0; 3FBC - 80(1.5) = 0 FBC = 40 lb"
      ],
      "theory_th": "สมดุลของวัตถุเกร็ง (Rigid Body): \\(\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0\\)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "F_x = 0; Ax = 0",
          "raw": "Fx = 0; Ax = 0"
        },
        {
          "type": "ans",
          "latex": "F_y = 0; Ay = 0",
          "raw": "Fy = 0; Ay = 0"
        },
        {
          "type": "calc",
          "latex": "F_z = 0; Az + FBC - 80 = 0",
          "raw": "Fz = 0; Az + FBC - 80 = 0"
        },
        {
          "type": "calc",
          "latex": "Mx = 0; (MA)x + 6FBC - 80(6) = 0",
          "raw": "Mx = 0; (MA)x + 6FBC - 80(6) = 0"
        },
        {
          "type": "ans",
          "latex": "My = 0; 3FBC - 80(1.5) = 0 FBC = 40 lb",
          "raw": "My = 0; 3FBC - 80(1.5) = 0 FBC = 40 lb"
        },
        {
          "type": "ans",
          "latex": "Mz = 0; (MA)z = 0",
          "raw": "Mz = 0; (MA)z = 0"
        },
        {
          "type": "ans",
          "latex": "Az = 40 lb (MA)x = 240 lb  \\cdot  ft",
          "raw": "Az = 40 lb (MA)x = 240 lb  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "F_x = 0; Ax = 0",
        "F_y = 0; Ay = 0",
        "My = 0; 3FBC - 80(1.5) = 0 FBC = 40 lb",
        "Mz = 0; (MA)z = 0",
        "Az = 40 lb (MA)x = 240 lb  \\cdot  ft"
      ]
    },
    {
      "id": "F6-1",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 1,
      "page_book": 308,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the force in each member of the truss. \nState if the members are in tension or compression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_1.webp",
      "solution_raw": "Joint A.\n \n + c Fy = 0; 225 lb - FAD sin 45° = 0\n \n FAD = 318.20 lb = 318 lb (C)\nAns.\n \n +S Fx = 0; FAB - (318.20 lb) cos 45° = 0\n \n FAB = 225 lb (T)\nAns.\n \nJoint B.\n \n+S Fx = 0; FBC - 225 lb = 0\n \nFBC = 225 lb (T)\nAns.\n \n+ c Fy = 0; FBD = 0 \nAns.\n \nJoint D.\n \n+S Fx = 0;\n \nFCD cos 45° + (318.20 lb) cos 45° - 450 lb = 0\n \nFCD = 318.20 lb = 318 lb (T)\nAns.",
      "final_answers": [
        "FAD = 318.20 lb = 318 lb (C)",
        "FAB = 225 lb (T)",
        "FBC = 225 lb (T)",
        "+ c Fy = 0; FBD = 0",
        "FCD = 318.20 lb = 318 lb (T)"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "Joint A.",
          "raw": "Joint A.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 225 lb - FAD \\sin 45^\\circ = 0",
          "raw": "+ c Fy = 0; 225 lb - FAD sin 45° = 0"
        },
        {
          "type": "ans",
          "latex": "FAD = 318.20 lb = 318 lb (C)",
          "raw": "FAD = 318.20 lb = 318 lb (C)"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies FAB - (318.20 lb) \\cos 45^\\circ = 0",
          "raw": "+S Fx = 0; FAB - (318.20 lb) cos 45° = 0"
        },
        {
          "type": "ans",
          "latex": "FAB = 225 lb (T)",
          "raw": "FAB = 225 lb (T)"
        },
        {
          "type": "header",
          "text": "Joint B.",
          "raw": "Joint B.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies FBC - 225 lb = 0",
          "raw": "+S Fx = 0; FBC - 225 lb = 0"
        },
        {
          "type": "ans",
          "latex": "FBC = 225 lb (T)",
          "raw": "FBC = 225 lb (T)"
        },
        {
          "type": "ans",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies FBD = 0",
          "raw": "+ c Fy = 0; FBD = 0"
        },
        {
          "type": "header",
          "text": "Joint D.",
          "raw": "Joint D.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies",
          "raw": "+S Fx = 0;"
        },
        {
          "type": "calc",
          "latex": "FCD \\cos 45^\\circ + (318.20 lb) \\cos 45^\\circ - 450 lb = 0",
          "raw": "FCD cos 45° + (318.20 lb) cos 45° - 450 lb = 0"
        },
        {
          "type": "ans",
          "latex": "FCD = 318.20 lb = 318 lb (T)",
          "raw": "FCD = 318.20 lb = 318 lb (T)"
        }
      ],
      "final_answers_math": [
        "FAD = 318.20 lb = 318 lb (C)",
        "FAB = 225 lb (T)",
        "FBC = 225 lb (T)",
        "+\\uparrow \\Sigma F_y = 0 \\implies FBD = 0",
        "FCD = 318.20 lb = 318 lb (T)"
      ]
    },
    {
      "id": "F6-2",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 2,
      "page_book": 308,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the force in each member of the truss. \nState if the members are in tension or compression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_2.webp",
      "solution_raw": "Joint D.\n \n + c Fy = 0; 3\n5 FCD - 300 = 0;\n \n FCD = 500 lb (T)\nAns.\n \n S\n+ Fx = 0; -FAD + 4\n5 (500) = 0\n \n FAD = 400 lb (C) \nAns.\n \nFBC = 500 lb (T), FAC = FAB = 0\nAns.",
      "final_answers": [
        "FCD = 500 lb (T)",
        "FAD = 400 lb (C)",
        "FBC = 500 lb (T), FAC = FAB = 0"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "Joint D.",
          "raw": "Joint D.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 3",
          "raw": "+ c Fy = 0; 3"
        },
        {
          "type": "calc",
          "latex": "5 FCD - 300 = 0;",
          "raw": "5 FCD - 300 = 0;"
        },
        {
          "type": "ans",
          "latex": "FCD = 500 lb (T)",
          "raw": "FCD = 500 lb (T)"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ F_x = 0; -FAD + 4",
          "raw": "+ Fx = 0; -FAD + 4"
        },
        {
          "type": "calc",
          "latex": "5 (500) = 0",
          "raw": "5 (500) = 0"
        },
        {
          "type": "ans",
          "latex": "FAD = 400 lb (C)",
          "raw": "FAD = 400 lb (C)"
        },
        {
          "type": "ans",
          "latex": "FBC = 500 lb (T), FAC = FAB = 0",
          "raw": "FBC = 500 lb (T), FAC = FAB = 0"
        }
      ],
      "final_answers_math": [
        "FCD = 500 lb (T)",
        "FAD = 400 lb (C)",
        "FBC = 500 lb (T), FAC = FAB = 0"
      ]
    },
    {
      "id": "F6-3",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 3,
      "page_book": 308,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the force in each member of the truss. \nState if the members are in tension or compression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_3.webp",
      "solution_raw": "Dx = 200 lb, Dy = 650 lb, By = 150 lb\n Joint B.\n S\n+ Fx = 0; FBA = 0\nAns.\n + c Fy = 0; 150 - FBC = 0; FBC = 150 lb (C) Ans.\nJoint A.\n S\n+ Fx = 0; FAC14\n52 = 0; FAC = 0 \nAns.\n + c Fy = 0; FAD - 800 = 0; FAD = 800 lb (T) Ans.\n Joint C.\n S\n+ Fx = 0; -FCD + 200 = 0; FCD = 200 lb (T) Ans.",
      "final_answers": [
        "+ Fx = 0; FBA = 0",
        "+ c Fy = 0; 150 - FBC = 0; FBC = 150 lb (C)",
        "52 = 0; FAC = 0",
        "+ c Fy = 0; FAD - 800 = 0; FAD = 800 lb (T)",
        "+ Fx = 0; -FCD + 200 = 0; FCD = 200 lb (T)"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Dx = 200 lb, Dy =  lb, By = 150 lb",
          "raw": "Dx = 200 lb, Dy =  lb, By = 150 lb"
        },
        {
          "type": "header",
          "text": "Joint B.",
          "raw": "Joint B.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "ans",
          "latex": "+ F_x = 0; FBA = 0",
          "raw": "+ Fx = 0; FBA = 0"
        },
        {
          "type": "ans",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 150 - FBC = 0; FBC = 150 lb (C)",
          "raw": "+ c Fy = 0; 150 - FBC = 0; FBC = 150 lb (C) Ans."
        },
        {
          "type": "header",
          "text": "Joint A.",
          "raw": "Joint A.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "ans",
          "latex": "+ F_x = 0; FAC\\left(\\frac{4}{5}\\right) = 0; FAC = 0",
          "raw": "+ Fx = 0; FAC\\left(\\frac{4}{5}\\right) = 0; FAC = 0"
        },
        {
          "type": "ans",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies FAD - 800 = 0; FAD = 800 lb (T)",
          "raw": "+ c Fy = 0; FAD - 800 = 0; FAD = 800 lb (T) Ans."
        },
        {
          "type": "header",
          "text": "Joint C.",
          "raw": "Joint C.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "ans",
          "latex": "+ F_x = 0; -FCD + 200 = 0; FCD = 200 lb (T)",
          "raw": "+ Fx = 0; -FCD + 200 = 0; FCD = 200 lb (T) Ans."
        }
      ],
      "final_answers_math": [
        "+ F_x = 0; FBA = 0",
        "+\\uparrow \\Sigma F_y = 0 \\implies 150 - FBC = 0; FBC = 150 lb (C)",
        "+ F_x = 0; FAC\\left(\\frac{4}{5}\\right) = 0; FAC = 0",
        "+\\uparrow \\Sigma F_y = 0 \\implies FAD - 800 = 0; FAD = 800 lb (T)",
        "+ F_x = 0; -FCD + 200 = 0; FCD = 200 lb (T)"
      ]
    },
    {
      "id": "F6-4",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 4,
      "page_book": 308,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the greatest load P that can be applied \nto the truss so that none of the members are subjected to a \nforce exceeding either 2 kN in tension or 1.5 kN in \ncompression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_4.webp",
      "solution_raw": "Joint C.\n \n+ c Fy = 0; 2F cos 30° - P = 0\n \nFAC = FBC = F =\nP\n2 cos 30° = 0.5774P (C)\n \nJoint B.\n \n+S Fx = 0; 0.5774P cos 60° - FAB = 0\n \n FAB = 0.2887P (T)\n \n FAB = 0.2887P = 2 kN\n \n P = 6.928 kN\n \n FAC = FBC = 0.5774P = 1.5 kN\n \n P = 2.598 kN\n \nThe smaller value of P is chosen,\n \nP = 2.598 kN = 2.60 kN\nAns.",
      "final_answers": [
        "P = 2.598 kN = 2.60 kN"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "Joint C.",
          "raw": "Joint C.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 2F \\cos 30^\\circ - P = 0",
          "raw": "+ c Fy = 0; 2F cos 30° - P = 0"
        },
        {
          "type": "calc",
          "latex": "FAC = FBC = F =",
          "raw": "FAC = FBC = F ="
        },
        {
          "type": "calc",
          "latex": "P",
          "raw": "P"
        },
        {
          "type": "calc",
          "latex": "2 \\cos 30^\\circ = 0.5774P (C)",
          "raw": "2 cos 30° = 0.5774P (C)"
        },
        {
          "type": "header",
          "text": "Joint B.",
          "raw": "Joint B.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies 0.5774P \\cos 60^\\circ - FAB = 0",
          "raw": "+S Fx = 0; 0.5774P cos 60° - FAB = 0"
        },
        {
          "type": "calc",
          "latex": "FAB = 0.2887P (T)",
          "raw": "FAB = 0.2887P (T)"
        },
        {
          "type": "calc",
          "latex": "FAB = 0.2887P = 2\\text{ kN}",
          "raw": "FAB = 0.2887P = 2 kN"
        },
        {
          "type": "calc",
          "latex": "P = 6.928 kN",
          "raw": "P = 6.928 kN"
        },
        {
          "type": "calc",
          "latex": "FAC = FBC = 0.5774P = 1.5 kN",
          "raw": "FAC = FBC = 0.5774P = 1.5 kN"
        },
        {
          "type": "calc",
          "latex": "P = 2.598 kN",
          "raw": "P = 2.598 kN"
        },
        {
          "type": "calc",
          "latex": "The smaller value of P is chosen,",
          "raw": "The smaller value of P is chosen,"
        },
        {
          "type": "ans",
          "latex": "P = 2.598 kN = 2.60 kN",
          "raw": "P = 2.598 kN = 2.60 kN"
        }
      ],
      "final_answers_math": [
        "P = 2.598 kN = 2.60 kN"
      ]
    },
    {
      "id": "F6-5",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 5,
      "page_book": 308,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Identify the zero-force members in the truss.",
      "question_th_summary": "หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_5.webp",
      "solution_raw": "FCB = 0\nAns.\n \nFCD = 0\nAns.\n \nFAE = 0\nAns.\n \nFDE = 0\nAns.",
      "final_answers": [
        "FCB = 0",
        "FCD = 0",
        "FAE = 0",
        "FDE = 0"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "ans",
          "latex": "FCB = 0",
          "raw": "FCB = 0"
        },
        {
          "type": "ans",
          "latex": "FCD = 0",
          "raw": "FCD = 0"
        },
        {
          "type": "ans",
          "latex": "FAE = 0",
          "raw": "FAE = 0"
        },
        {
          "type": "ans",
          "latex": "FDE = 0",
          "raw": "FDE = 0"
        }
      ],
      "final_answers_math": [
        "FCB = 0",
        "FCD = 0",
        "FAE = 0",
        "FDE = 0"
      ]
    },
    {
      "id": "F6-6",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 6,
      "page_book": 308,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the force in each member of the truss. \nState if the members are in tension or compression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_6.webp",
      "solution_raw": "Joint C.\n \n + c Fy = 0; 259.81 lb - FCD sin 30° = 0\n \n FCD = 519.62 lb = 520 lb (C)\nAns.\n \n+S Fx = 0; (519.62 lb) cos 30° - FBC = 0\n \nFBC = 450 lb (T)\nAns.\n \nJoint D.\n \n +Q Fy\u001d = 0; FBD cos 30° = 0 FBD = 0\nAns.\n \n +R Fx\u001d = 0; FDE - 519.62 lb = 0\n \n FDE = 519.62 lb = 520 lb (C)\nAns.\n \nJoint B.\n \nc Fy = 0; FBE sin f = 0 FBE = 0\nAns.\n \n+S Fx = 0; 450 lb - FAB = 0\n \nFAB = 450 lb (T) \nAns.\n \nJoint A.\n \n + c Fy = 0; 340.19 lb - FAE = 0\n \n FAE = 340 lb (C)\nAns.",
      "final_answers": [
        "FCD = 519.62 lb = 520 lb (C)",
        "FBC = 450 lb (T)",
        "+Q Fy\u001d = 0; FBD cos 30° = 0 FBD = 0",
        "FDE = 519.62 lb = 520 lb (C)",
        "c Fy = 0; FBE sin f = 0 FBE = 0",
        "FAB = 450 lb (T)",
        "FAE = 340 lb (C)"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "Joint C.",
          "raw": "Joint C.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 259.81 lb - FCD \\sin 30^\\circ = 0",
          "raw": "+ c Fy = 0; 259.81 lb - FCD sin 30° = 0"
        },
        {
          "type": "ans",
          "latex": "FCD = 519.62 lb = 520 lb (C)",
          "raw": "FCD = 519.62 lb = 520 lb (C)"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies (519.62 lb) \\cos 30^\\circ - FBC = 0",
          "raw": "+S Fx = 0; (519.62 lb) cos 30° - FBC = 0"
        },
        {
          "type": "ans",
          "latex": "FBC = 450 lb (T)",
          "raw": "FBC = 450 lb (T)"
        },
        {
          "type": "header",
          "text": "Joint D.",
          "raw": "Joint D.",
          "latex": ""
        },
        {
          "type": "ans",
          "latex": "+Q F_y\u001d = 0; FBD \\cos 30^\\circ = 0 FBD = 0",
          "raw": "+Q Fy\u001d = 0; FBD cos 30° = 0 FBD = 0"
        },
        {
          "type": "calc",
          "latex": "+R F_x\u001d = 0; FDE - 519.62 lb = 0",
          "raw": "+R Fx\u001d = 0; FDE - 519.62 lb = 0"
        },
        {
          "type": "ans",
          "latex": "FDE = 519.62 lb = 520 lb (C)",
          "raw": "FDE = 519.62 lb = 520 lb (C)"
        },
        {
          "type": "header",
          "text": "Joint B.",
          "raw": "Joint B.",
          "latex": ""
        },
        {
          "type": "ans",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies FBE \\sin \\phi = 0 FBE = 0",
          "raw": "c Fy = 0; FBE sin f = 0 FBE = 0"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies 450 lb - FAB = 0",
          "raw": "+S Fx = 0; 450 lb - FAB = 0"
        },
        {
          "type": "ans",
          "latex": "FAB = 450 lb (T)",
          "raw": "FAB = 450 lb (T)"
        },
        {
          "type": "header",
          "text": "Joint A.",
          "raw": "Joint A.",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 340.19 lb - FAE = 0",
          "raw": "+ c Fy = 0; 340.19 lb - FAE = 0"
        },
        {
          "type": "ans",
          "latex": "FAE = 340 lb (C)",
          "raw": "FAE = 340 lb (C)"
        }
      ],
      "final_answers_math": [
        "FCD = 519.62 lb = 520 lb (C)",
        "FBC = 450 lb (T)",
        "+Q F_y\u001d = 0; FBD \\cos 30^\\circ = 0 FBD = 0",
        "FDE = 519.62 lb = 520 lb (C)",
        "+\\uparrow \\Sigma F_y = 0 \\implies FBE \\sin \\phi = 0 FBE = 0",
        "FAB = 450 lb (T)",
        "FAE = 340 lb (C)"
      ]
    },
    {
      "id": "F6-7",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 7,
      "page_book": 319,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the force in members BC, CF, and FE. \nState if the members are in tension or compression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_7.webp",
      "solution_raw": "+ c Fy = 0; FCF sin 45° - 600 - 800 = 0\n \n FCF = 1980 lb (T) \nAns.\n \n a+ MC = 0; FFE(4) - 800(4) = 0\n \n FFE = 800 lb (T) \nAns.\n \n a+ MF = 0; FBC(4) - 600(4) - 800(8) = 0\n \n FBC = 2200 lb (C) \nAns.\n\n630 \nPartial Solutions And Answers",
      "final_answers": [
        "FCF = 1980 lb (T)",
        "FFE = 800 lb (T)",
        "FBC = 2200 lb (C)",
        "Partial Solutions And wers"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies FCF \\sin 45^\\circ -  - 800 = 0",
          "raw": "+ c Fy = 0; FCF sin 45° -  - 800 = 0"
        },
        {
          "type": "ans",
          "latex": "FCF = 1980 lb (T)",
          "raw": "FCF = 1980 lb (T)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies FFE(4) - 800(4) = 0",
          "raw": "a+ MC = 0; FFE(4) - 800(4) = 0"
        },
        {
          "type": "ans",
          "latex": "FFE = 800 lb (T)",
          "raw": "FFE = 800 lb (T)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{F} = 0 \\implies FBC(4) - (4) - 800(8) = 0",
          "raw": "a+ MF = 0; FBC(4) - (4) - 800(8) = 0"
        },
        {
          "type": "ans",
          "latex": "FBC = 2200 lb (C)",
          "raw": "FBC = 2200 lb (C)"
        }
      ],
      "final_answers_math": [
        "FCF = 1980 lb (T)",
        "FFE = 800 lb (T)",
        "FBC = 2200 lb (C)"
      ]
    },
    {
      "id": "F6-8",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 8,
      "page_book": 319,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the force in members LK, KC, and CD \nof the Pratt truss. State if the members are in tension or \ncompression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_8.webp",
      "solution_raw": "a+ MA = 0; \nGy(12 m) - 20 kN(2 m) \n\n- 30 kN(4 m) - 40 kN(6 m) = 0\n \nGy = 33.33 kN\n \n+ c Fy = 0; FKC + 33.33 kN - 40 kN = 0\n \n FKC = 6.67 kN (C)\nAns.\n \n a+ MK = 0;\n \n33.33 kN(8 m) - 40 kN(2 m) - FCD(3 m) = 0\n \nFCD = 62.22 kN = 62.2 kN (T)\nAns.\n \n+S Fx = 0;  FLK - 62.22 kN = 0\n \n FLK = 62.2 kN (C)\nAns.",
      "final_answers": [
        "FKC = 6.67 kN (C)",
        "FCD = 62.22 kN = 62.2 kN (T)",
        "FLK = 62.2 kN (C)"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies",
          "raw": "a+ MA = 0;"
        },
        {
          "type": "calc",
          "latex": "Gy(12 m) - 20 kN(2 m)",
          "raw": "Gy(12 m) - 20 kN(2 m)"
        },
        {
          "type": "calc",
          "latex": "- 30 kN(4 m) - 40 kN(6 m) = 0",
          "raw": "- 30 kN(4 m) - 40 kN(6 m) = 0"
        },
        {
          "type": "calc",
          "latex": "Gy = 33.33 kN",
          "raw": "Gy = 33.33 kN"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies FKC + 33.33 kN - 40 kN = 0",
          "raw": "+ c Fy = 0; FKC + 33.33 kN - 40 kN = 0"
        },
        {
          "type": "ans",
          "latex": "FKC = 6.67 kN (C)",
          "raw": "FKC = 6.67 kN (C)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{K} = 0 \\implies",
          "raw": "a+ MK = 0;"
        },
        {
          "type": "calc",
          "latex": "33.33 kN(8 m) - 40 kN(2 m) - FCD(3 m) = 0",
          "raw": "33.33 kN(8 m) - 40 kN(2 m) - FCD(3 m) = 0"
        },
        {
          "type": "ans",
          "latex": "FCD = 62.22 kN = 62.2 kN (T)",
          "raw": "FCD = 62.22 kN = 62.2 kN (T)"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies  FLK - 62.22 kN = 0",
          "raw": "+S Fx = 0;  FLK - 62.22 kN = 0"
        },
        {
          "type": "ans",
          "latex": "FLK = 62.2 kN (C)",
          "raw": "FLK = 62.2 kN (C)"
        }
      ],
      "final_answers_math": [
        "FKC = 6.67 kN (C)",
        "FCD = 62.22 kN = 62.2 kN (T)",
        "FLK = 62.2 kN (C)"
      ]
    },
    {
      "id": "F6-9",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 9,
      "page_book": 319,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the force in members KJ, KD, and CD \nof the Pratt truss. State if the members are in tension or \ncompression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_9.webp",
      "solution_raw": "From the geometry of the truss, \n \nf = tan-1(3 m>2 m) = 56.31°.\n \na+ MK = 0; \n \n33.33 kN(8 m) - 40 kN(2 m) - FCD(3 m) = 0\n \n FCD = 62.2 kN (T)\nAns.\n \n a+ MD = 0; 33.33 kN(6 m) - FKJ(3 m) = 0\n \n FKJ = 66.7 kN (C)\nAns.\n \n+ c Fy = 0;\n \n33.33 kN - 40 kN + FKD sin 56.31° = 0\n \n FKD = 8.01 kN (T)\nAns.",
      "final_answers": [
        "FCD = 62.2 kN (T)",
        "FKJ = 66.7 kN (C)",
        "FKD = 8.01 kN (T)"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "From the geometry of the truss,",
          "raw": "From the geometry of the truss,"
        },
        {
          "type": "calc",
          "latex": "\\phi = \\\\tan^{-1}(3 m>2 m) = 56.31^\\circ.",
          "raw": "f = tan-1(3 m>2 m) = 56.31°."
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{K} = 0 \\implies",
          "raw": "a+ MK = 0;"
        },
        {
          "type": "calc",
          "latex": "33.33 kN(8 m) - 40 kN(2 m) - FCD(3 m) = 0",
          "raw": "33.33 kN(8 m) - 40 kN(2 m) - FCD(3 m) = 0"
        },
        {
          "type": "ans",
          "latex": "FCD = 62.2 kN (T)",
          "raw": "FCD = 62.2 kN (T)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{D} = 0 \\implies 33.33 kN(6 m) - FKJ(3 m) = 0",
          "raw": "a+ MD = 0; 33.33 kN(6 m) - FKJ(3 m) = 0"
        },
        {
          "type": "ans",
          "latex": "FKJ = 66.7 kN (C)",
          "raw": "FKJ = 66.7 kN (C)"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies",
          "raw": "+ c Fy = 0;"
        },
        {
          "type": "calc",
          "latex": "33.33 kN - 40 kN + FKD \\sin 56.31^\\circ = 0",
          "raw": "33.33 kN - 40 kN + FKD sin 56.31° = 0"
        },
        {
          "type": "ans",
          "latex": "FKD = 8.01 kN (T)",
          "raw": "FKD = 8.01 kN (T)"
        }
      ],
      "final_answers_math": [
        "FCD = 62.2 kN (T)",
        "FKJ = 66.7 kN (C)",
        "FKD = 8.01 kN (T)"
      ]
    },
    {
      "id": "F6-10",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 10,
      "page_book": 319,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the force in members EF, CF, and BC \nof the truss. State if the members are in tension or \ncompression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_10.webp",
      "solution_raw": "From the geometry of the truss,\n \ntan f =\n(9 ft) tan 30°\n3 ft\n= 1.732 f = 60°\n \n a+ MC = 0; \n \nFEF sin 30°(6 ft) + 300 lb(6 ft) = 0\n \n FEF = -600 lb = 600 lb (C)\nAns.\n \n a+ MD = 0; \n \n300 lb(6 ft) - FCF sin 60° (6 ft) = 0\n \n FCF = 346.41 lb = 346 lb (T)\nAns.\n \n a+ MF = 0;\n \n300 lb(9 ft) - 300 lb(3 ft) - FBC(9 ft)tan 30° = 0\n \nFBC = 346.41 lb = 346 lb (T)\nAns.",
      "final_answers": [
        "FEF = -600 lb = 600 lb (C)",
        "FCF = 346.41 lb = 346 lb (T)",
        "FBC = 346.41 lb = 346 lb (T)"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "From the geometry of the truss,",
          "raw": "From the geometry of the truss,"
        },
        {
          "type": "calc",
          "latex": "\\tan \\phi =",
          "raw": "tan f ="
        },
        {
          "type": "calc",
          "latex": "(9 ft) \\tan 30^\\circ",
          "raw": "(9 ft) tan 30°"
        },
        {
          "type": "calc",
          "latex": "3 ft",
          "raw": "3 ft"
        },
        {
          "type": "calc",
          "latex": "= 1.732 \\phi = 60^\\circ",
          "raw": "= 1.732 f = 60°"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies",
          "raw": "a+ MC = 0;"
        },
        {
          "type": "calc",
          "latex": "FEF \\sin 30^\\circ(6 ft) + 300 lb(6 ft) = 0",
          "raw": "FEF sin 30°(6 ft) + 300 lb(6 ft) = 0"
        },
        {
          "type": "ans",
          "latex": "FEF = - lb =  lb (C)",
          "raw": "FEF = - lb =  lb (C)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{D} = 0 \\implies",
          "raw": "a+ MD = 0;"
        },
        {
          "type": "calc",
          "latex": "300 lb(6 ft) - FCF \\sin 60^\\circ (6 ft) = 0",
          "raw": "300 lb(6 ft) - FCF sin 60° (6 ft) = 0"
        },
        {
          "type": "ans",
          "latex": "FCF = 346.41 lb = 346 lb (T)",
          "raw": "FCF = 346.41 lb = 346 lb (T)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{F} = 0 \\implies",
          "raw": "a+ MF = 0;"
        },
        {
          "type": "calc",
          "latex": "300 lb(9 ft) - 300 lb(3 ft) - FBC(9 ft)\\tan 30^\\circ = 0",
          "raw": "300 lb(9 ft) - 300 lb(3 ft) - FBC(9 ft)tan 30° = 0"
        },
        {
          "type": "ans",
          "latex": "FBC = 346.41 lb = 346 lb (T)",
          "raw": "FBC = 346.41 lb = 346 lb (T)"
        }
      ],
      "final_answers_math": [
        "FEF = - lb =  lb (C)",
        "FCF = 346.41 lb = 346 lb (T)",
        "FBC = 346.41 lb = 346 lb (T)"
      ]
    },
    {
      "id": "F6-11",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 11,
      "page_book": 319,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the force in members GF, GD, and CD \nof the truss. State if the members are in tension or \ncompression.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_11.webp",
      "solution_raw": "From the geometry of the truss, \n \nu = tan-1 (1 m>2 m) = 26.57° \n \nf = tan-1 (3 m>2 m) = 56.31°.\n \n\u0007The location of O can be found using similar \ntriangles.\n \n 1 m\n2 m =\n2 m\n2 m + x\n \n 4 m = 2 m + x\n \n x = 2 m",
      "final_answers": [],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "From the geometry of the truss,",
          "raw": "From the geometry of the truss,"
        },
        {
          "type": "calc",
          "latex": "\\theta = \\\\tan^{-1} (1 m>2 m) = 26.57^\\circ",
          "raw": "u = tan-1 (1 m>2 m) = 26.57°"
        },
        {
          "type": "calc",
          "latex": "\\phi = \\\\tan^{-1} (3 m>2 m) = 56.31^\\circ.",
          "raw": "f = tan-1 (3 m>2 m) = 56.31°."
        },
        {
          "type": "calc",
          "latex": "\u0007The location of O can be found using similar",
          "raw": "\u0007The location of O can be found using similar"
        },
        {
          "type": "calc",
          "latex": "triangles.",
          "raw": "triangles."
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "2 m =",
          "raw": "2 m ="
        },
        {
          "type": "calc",
          "latex": "2 m",
          "raw": "2 m"
        },
        {
          "type": "calc",
          "latex": "2 m + x",
          "raw": "2 m + x"
        },
        {
          "type": "calc",
          "latex": "4 m = 2\\text{ m} + x",
          "raw": "4 m = 2 m + x"
        },
        {
          "type": "ans",
          "latex": "x = 2\\text{ m}",
          "raw": "x = 2 m"
        }
      ],
      "final_answers_math": [
        "x = 2\\text{ m}"
      ]
    },
    {
      "id": "F6-12",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 12,
      "page_book": 319,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the force in members DC, HI, and JI of \nthe truss. State if the members are in tension or compression. \nSuggestion: Use the sections shown.",
      "question_th_summary": "หาแรงดึงในเส้นเชือกแต่ละเส้น (Cable Tension) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_12.webp",
      "solution_raw": "a+ MH = 0;\n \n FDC(12 ft) + 1200 lb(9 ft) - 1600 lb(21 ft) = 0\n \n FDC = 1900 lb (C)\nAns.\n \n a+ MD = 0;\n \n 1200 lb(21 ft) - 1600 lb(9 ft) - FHI (12 ft) = 0\n \n FHI = 900 lb (C)\nAns.\n \n a+ MC = 0; FJI cos 45°(12 ft) + 1200 lb(21 ft)\n\n- 900 lb(12 ft) - 1600 lb(9 ft) = 0\n \n FJI = 0\nAns.",
      "final_answers": [
        "FDC = 1900 lb (C)",
        "FHI = 900 lb (C)",
        "FJI = 0"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{H} = 0 \\implies",
          "raw": "a+ MH = 0;"
        },
        {
          "type": "calc",
          "latex": "FDC(12 ft) + 1200 lb(9 ft) - 1600 lb(21 ft) = 0",
          "raw": "FDC(12 ft) + 1200 lb(9 ft) - 1600 lb(21 ft) = 0"
        },
        {
          "type": "ans",
          "latex": "FDC = 1900 lb (C)",
          "raw": "FDC = 1900 lb (C)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{D} = 0 \\implies",
          "raw": "a+ MD = 0;"
        },
        {
          "type": "calc",
          "latex": "1200 lb(21 ft) - 1600 lb(9 ft) - FHI (12 ft) = 0",
          "raw": "1200 lb(21 ft) - 1600 lb(9 ft) - FHI (12 ft) = 0"
        },
        {
          "type": "ans",
          "latex": "FHI = 900 lb (C)",
          "raw": "FHI = 900 lb (C)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies FJI \\cos 45^\\circ(12 ft) + 1200 lb(21 ft)",
          "raw": "a+ MC = 0; FJI cos 45°(12 ft) + 1200 lb(21 ft)"
        },
        {
          "type": "calc",
          "latex": "- 900 lb(12 ft) - 1600 lb(9 ft) = 0",
          "raw": "- 900 lb(12 ft) - 1600 lb(9 ft) = 0"
        },
        {
          "type": "ans",
          "latex": "FJI = 0",
          "raw": "FJI = 0"
        }
      ],
      "final_answers_math": [
        "FDC = 1900 lb (C)",
        "FHI = 900 lb (C)",
        "FJI = 0"
      ]
    },
    {
      "id": "F6-13",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 13,
      "page_book": 344,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the force P needed to hold the 60-lb \nweight in equilibrium.",
      "question_th_summary": "โจทย์บทที่ 6 การวิเคราะห์โครงสร้าง",
      "image": "images/problems/F6_13.webp",
      "solution_raw": "+ c Fy = 0; 3P - 60 = 0\n \nP = 20 lb\nAns.",
      "final_answers": [
        "P = 20 lb"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 3P - 60 = 0",
          "raw": "+ c Fy = 0; 3P - 60 = 0"
        },
        {
          "type": "ans",
          "latex": "P = 20 lb",
          "raw": "P = 20 lb"
        }
      ],
      "final_answers_math": [
        "P = 20 lb"
      ]
    },
    {
      "id": "F6-14",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 14,
      "page_book": 344,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the horizontal and vertical components \nof reaction at pin C.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F6_14.webp",
      "solution_raw": "a+ MC = 0;\n \n-14\n52(FAB)(9) + 400(6) + 500(3) = 0\n \nFAB = 541.67 lb\n \nS\n+ Fx = 0; -Cx + 3\n5 (541.67) = 0\n \n Cx = 325 lb\nAns.\n \n + c Fy = 0; Cy + 4\n5 (541.67) - 400 - 500 = 0\n \nCy = 467 lb\nAns.",
      "final_answers": [
        "Cx = 325 lb",
        "Cy = 467 lb"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies",
          "raw": "a+ MC = 0;"
        },
        {
          "type": "calc",
          "latex": "-\\left(\\frac{4}{5}\\right)(FAB)(9) + 400(6) + 500(3) = 0",
          "raw": "-\\left(\\frac{4}{5}\\right)(FAB)(9) + 400(6) + 500(3) = 0"
        },
        {
          "type": "calc",
          "latex": "FAB = 541.67 lb",
          "raw": "FAB = 541.67 lb"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ F_x = 0; -Cx + 3",
          "raw": "+ Fx = 0; -Cx + 3"
        },
        {
          "type": "calc",
          "latex": "5 (541.67) = 0",
          "raw": "5 (541.67) = 0"
        },
        {
          "type": "ans",
          "latex": "Cx = 325 lb",
          "raw": "Cx = 325 lb"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies Cy + 4",
          "raw": "+ c Fy = 0; Cy + 4"
        },
        {
          "type": "calc",
          "latex": "5 (541.67) - 400 - 500 = 0",
          "raw": "5 (541.67) - 400 - 500 = 0"
        },
        {
          "type": "ans",
          "latex": "Cy = 467 lb",
          "raw": "Cy = 467 lb"
        }
      ],
      "final_answers_math": [
        "Cx = 325 lb",
        "Cy = 467 lb"
      ]
    },
    {
      "id": "F6-15",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 15,
      "page_book": 344,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "If a 100-N force is applied to the handles of the \npliers, determine the clamping force exerted on the smooth \npipe B and the magnitude of the resultant force that one of \nthe members exerts on pin A.",
      "question_th_summary": "คำนวณหาขนาดและทิศทางของแรงลัพธ์ (Resultant Force) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_15.webp",
      "solution_raw": "a+ MA = 0; 100 N(250 mm) - NB(50 mm) = 0\n \nNB = 500 N\nAns.\n \nS\n+ Fx = 0; (500 N) sin 45° - Ax = 0\n \nAx = 353.55 N\n \n + c Fy = 0; Ay - 100 N - (500 N) cos 45° = 0\n \nAy = 453.55 N\n \n FA = 2(353.55 N)2 + (453.55 N)2\n \n = 575 N\n\nAns.\n\n \nFundamental Problems \n631",
      "final_answers": [
        "NB = 500 N"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies 100 N(250 mm) - NB(50 mm) = 0",
          "raw": "a+ MA = 0; 100 N(250 mm) - NB(50 mm) = 0"
        },
        {
          "type": "ans",
          "latex": "NB = 500 N",
          "raw": "NB = 500 N"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ F_x = 0; (500 N) \\sin 45^\\circ - Ax = 0",
          "raw": "+ Fx = 0; (500 N) sin 45° - Ax = 0"
        },
        {
          "type": "calc",
          "latex": "Ax = 353.55 N",
          "raw": "Ax = 353.55 N"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies Ay - 100 N - (500 N) \\cos 45^\\circ = 0",
          "raw": "+ c Fy = 0; Ay - 100 N - (500 N) cos 45° = 0"
        },
        {
          "type": "calc",
          "latex": "Ay = 453.55 N",
          "raw": "Ay = 453.55 N"
        },
        {
          "type": "calc",
          "latex": "FA = \\sqrt{(353.55 N)^2 + (453.55 N)^2}",
          "raw": "FA = 2(353.55 N)2 + (453.55 N)2"
        },
        {
          "type": "ans",
          "latex": "= 575 N",
          "raw": "= 575 N"
        }
      ],
      "final_answers_math": [
        "NB = 500 N",
        "= 575 N"
      ]
    },
    {
      "id": "F6-16",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 16,
      "page_book": 344,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the horizontal and vertical components \nof reaction at pin C.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F6_16.webp",
      "solution_raw": "a+ MC = 0;\n \n 400(2) + 800 - FBA 1\n3\n1102(1)\n\n- FBA 1\n1\n1102(3) = 0\n \nFBA = 843.27 N\n \n S\n+ Fx = 0; Cx - 843.27 1\n3\n1102 = 0\n \n Cx = 800 N\nAns.\n \n + c Fy = 0; Cy + 843.271\n1\n1102- 400 = 0\n \n Cy = 133 N\nAns.",
      "final_answers": [
        "Cx = 800 N",
        "Cy = 133 N"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies",
          "raw": "a+ MC = 0;"
        },
        {
          "type": "calc",
          "latex": "400(2) + 800 - FBA \\left(\\frac{3}{110}\\right)(1)",
          "raw": "400(2) + 800 - FBA \\left(\\frac{3}{110}\\right)(1)"
        },
        {
          "type": "calc",
          "latex": "- FBA \\left(\\frac{1}{110}\\right)(3) = 0",
          "raw": "- FBA \\left(\\frac{1}{110}\\right)(3) = 0"
        },
        {
          "type": "calc",
          "latex": "FBA = 843.27 N",
          "raw": "FBA = 843.27 N"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ F_x = 0; Cx - 843.27 \\left(\\frac{3}{110}\\right) = 0",
          "raw": "+ Fx = 0; Cx - 843.27 \\left(\\frac{3}{110}\\right) = 0"
        },
        {
          "type": "ans",
          "latex": "Cx = 800 N",
          "raw": "Cx = 800 N"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies Cy + 843.27\\left(\\frac{1}{110}\\right)- 400 = 0",
          "raw": "+ c Fy = 0; Cy + 843.27\\left(\\frac{1}{110}\\right)- 400 = 0"
        },
        {
          "type": "ans",
          "latex": "Cy = 133 N",
          "raw": "Cy = 133 N"
        }
      ],
      "final_answers_math": [
        "Cx = 800 N",
        "Cy = 133 N"
      ]
    },
    {
      "id": "F6-17",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 17,
      "page_book": 345,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the normal force that the 100-lb plate A \nexerts on the 30-lb plate B.",
      "question_th_summary": "โจทย์บทที่ 6 การวิเคราะห์โครงสร้าง",
      "image": "images/problems/F6_17.webp",
      "solution_raw": "Plate A:\n \n+ c Fy = 0; 2T + NAB - 100 = 0\n \nPlate B:\n \n+ c Fy = 0; 2T - NAB - 30 = 0\n \nT = 32.5 lb, NAB = 35 lb\nAns.",
      "final_answers": [
        "T = 32.5 lb, NAB = 35 lb"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Plate A:",
          "raw": "Plate A:"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 2T + NAB - 100 = 0",
          "raw": "+ c Fy = 0; 2T + NAB - 100 = 0"
        },
        {
          "type": "calc",
          "latex": "Plate B:",
          "raw": "Plate B:"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 2T - NAB - 30 = 0",
          "raw": "+ c Fy = 0; 2T - NAB - 30 = 0"
        },
        {
          "type": "ans",
          "latex": "T = 32.5 lb, NAB = 35 lb",
          "raw": "T = 32.5 lb, NAB = 35 lb"
        }
      ],
      "final_answers_math": [
        "T = 32.5 lb, NAB = 35 lb"
      ]
    },
    {
      "id": "F6-18",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 18,
      "page_book": 345,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the force P needed to lift the load. Also, \ndetermine the proper placement x of the hook for \nequilibrium. Neglect the weight of the beam.",
      "question_th_summary": "โจทย์บทที่ 6 การวิเคราะห์โครงสร้าง",
      "image": "images/problems/F6_18.webp",
      "solution_raw": "Pulley C:\n \n+ c Fy = 0; T - 2P = 0; T = 2P\n \nBeam:\n \n + c Fy = 0; 2P + P - 6 = 0\n \n P = 2 kN \nAns.\n \n a+ MA = 0; 2(1) - 6(x) = 0\n \n x = 0.333 m \nAns.",
      "final_answers": [
        "P = 2 kN",
        "x = 0.333 m"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Pulley C:",
          "raw": "Pulley C:"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies T - 2P = 0; T = 2P",
          "raw": "+ c Fy = 0; T - 2P = 0; T = 2P"
        },
        {
          "type": "calc",
          "latex": "Beam:",
          "raw": "Beam:"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 2P + P - 6 = 0",
          "raw": "+ c Fy = 0; 2P + P - 6 = 0"
        },
        {
          "type": "ans",
          "latex": "P = 2\\text{ kN}",
          "raw": "P = 2 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies 2(1) - 6(x) = 0",
          "raw": "a+ MA = 0; 2(1) - 6(x) = 0"
        },
        {
          "type": "ans",
          "latex": "x = 0.333 m",
          "raw": "x = 0.333 m"
        }
      ],
      "final_answers_math": [
        "P = 2\\text{ kN}",
        "x = 0.333 m"
      ]
    },
    {
      "id": "F6-19",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 19,
      "page_book": 345,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the components of reaction at A and B.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F6_19.webp",
      "solution_raw": "Member CD\n \na+ MD = 0; \n60011.52 - NC132 = 0\n \nNC = 300 N\n \nMember ABC\n \na+ MA = 0; -800 + By122 - 1300 sin 45°2 4 = 0\n \nBy = 824.26 = 824 N\nAns.\n \n+S Fx = 0; Ax - 300 cos 45° = 0;\n \nAx = 212 N\nAns.\n \n+ c Fy = 0; -Ay + 824.26 - 300 sin 45° = 0;\n \nAy = 612 N\nAns.",
      "final_answers": [
        "By = 824.26 = 824 N",
        "Ax = 212 N",
        "Ay = 612 N"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Member CD",
          "raw": "Member CD"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{D} = 0 \\implies",
          "raw": "a+ MD = 0;"
        },
        {
          "type": "calc",
          "latex": "60011.52 - NC132 = 0",
          "raw": "60011.52 - NC132 = 0"
        },
        {
          "type": "calc",
          "latex": "NC = 300 N",
          "raw": "NC = 300 N"
        },
        {
          "type": "calc",
          "latex": "Member ABC",
          "raw": "Member ABC"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies -800 + By122 - 1300 \\sin 45^\\circ2 4 = 0",
          "raw": "a+ MA = 0; -800 + By122 - 1300 sin 45°2 4 = 0"
        },
        {
          "type": "ans",
          "latex": "By = 824.26 = 824 N",
          "raw": "By = 824.26 = 824 N"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies Ax - 300 \\cos 45^\\circ = 0;",
          "raw": "+S Fx = 0; Ax - 300 cos 45° = 0;"
        },
        {
          "type": "ans",
          "latex": "Ax = 212 N",
          "raw": "Ax = 212 N"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies -Ay + 824.26 - 300 \\sin 45^\\circ = 0;",
          "raw": "+ c Fy = 0; -Ay + 824.26 - 300 sin 45° = 0;"
        },
        {
          "type": "ans",
          "latex": "Ay =  N",
          "raw": "Ay =  N"
        }
      ],
      "final_answers_math": [
        "By = 824.26 = 824 N",
        "Ax = 212 N",
        "Ay =  N"
      ]
    },
    {
      "id": "F6-20",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 20,
      "page_book": 345,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the reactions at D.",
      "question_th_summary": "หาแรงปฏิกิริยาที่จุดรองรับ (Support Reactions)",
      "image": "images/problems/F6_20.webp",
      "solution_raw": "AB is a two-force member.\n \nMember BC\n \na+ Mc = 0; 15132 + 10162 - FBC14\n52192 = 0\n \nFBC = 14.58 kN\n \n+S Fx = 0; 114.58213\n52 - Cx = 0;\n \nCx = 8.75 kN\n \n+ c Fy = 0; 114.58214\n52 - 10 - 15 + Cy = 0;\n \nCy = 13.3 kN\n \nMember CD\n +S Fx = 0; \n 8.75 - Dx = 0; Dx = 8.75 kN Ans.\n + c Fy = 0; \n -13.3 + Dy = 0; Dy = 13.3 kN Ans.\n a+ MD = 0; -8.75142 + MD = 0; MD = 35 kN # m Ans.\n \n a+ MG = 0;\n \n26.25 kN(4 m) - 15 kN(2 m) - FCD(3 m) = 0\n \nFCD = 25 kN (T)\nAns.\n \na+ MD = 0;\n \n26.25 kN(2 m) - FGF cos 26.57°(2 m) = 0\n \nFGF = 29.3 kN (C)\nAns.\n \n a+ MO = 0; 15 kN(4 m) - 26.25 kN(2 m)\n\n - FGD sin 56.31°(4 m) = 0\n \nFGD = 2.253 kN = 2.25 kN (T)\nAns.",
      "final_answers": [
        "8.75 - Dx = 0; Dx = 8.75 kN",
        "-13.3 + Dy = 0; Dy = 13.3 kN",
        "a+ MD = 0; -8.75142 + MD = 0; MD = 35 kN · m",
        "FCD = 25 kN (T)",
        "FGF = 29.3 kN (C)",
        "FGD = 2.253 kN = 2.25 kN (T)"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "AB is \\alpha two-force member.",
          "raw": "AB is a two-force member."
        },
        {
          "type": "calc",
          "latex": "Member BC",
          "raw": "Member BC"
        },
        {
          "type": "calc",
          "latex": "a+ Mc = 0; \\left(\\frac{5}{13}\\right) + 10162 - FBC\\left(\\frac{4}{5}\\right)192 = 0",
          "raw": "a+ Mc = 0; \\left(\\frac{5}{13}\\right) + 10162 - FBC\\left(\\frac{4}{5}\\right)192 = 0"
        },
        {
          "type": "calc",
          "latex": "FBC = 14.58 kN",
          "raw": "FBC = 14.58 kN"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies 114.582\\left(\\frac{3}{5}\\right) - Cx = 0;",
          "raw": "+S Fx = 0; 114.582\\left(\\frac{3}{5}\\right) - Cx = 0;"
        },
        {
          "type": "calc",
          "latex": "Cx = 8.75 kN",
          "raw": "Cx = 8.75 kN"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 114.582\\left(\\frac{4}{5}\\right) - 10 - 15 + Cy = 0;",
          "raw": "+ c Fy = 0; 114.582\\left(\\frac{4}{5}\\right) - 10 - 15 + Cy = 0;"
        },
        {
          "type": "calc",
          "latex": "Cy = 13.3 kN",
          "raw": "Cy = 13.3 kN"
        },
        {
          "type": "calc",
          "latex": "Member CD",
          "raw": "Member CD"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies",
          "raw": "+S Fx = 0;"
        },
        {
          "type": "ans",
          "latex": "8.75 - Dx = 0; Dx = 8.75 kN",
          "raw": "8.75 - Dx = 0; Dx = 8.75 kN Ans."
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies",
          "raw": "+ c Fy = 0;"
        },
        {
          "type": "ans",
          "latex": "-13.3 + Dy = 0; Dy = 13.3 kN",
          "raw": "-13.3 + Dy = 0; Dy = 13.3 kN Ans."
        },
        {
          "type": "ans",
          "latex": "\\curvearrowleft +\\Sigma M_{D} = 0 \\implies -8.75142 + MD = 0; MD = 35 kN  \\cdot  m",
          "raw": "a+ MD = 0; -8.75142 + MD = 0; MD = 35 kN  \\cdot  m Ans."
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{G} = 0 \\implies",
          "raw": "a+ MG = 0;"
        },
        {
          "type": "calc",
          "latex": "26.25 kN(4 m) - 15 kN(2 m) - FCD(3 m) = 0",
          "raw": "26.25 kN(4 m) - 15 kN(2 m) - FCD(3 m) = 0"
        },
        {
          "type": "ans",
          "latex": "FCD = 25 kN (T)",
          "raw": "FCD = 25 kN (T)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{D} = 0 \\implies",
          "raw": "a+ MD = 0;"
        },
        {
          "type": "calc",
          "latex": "26.25 kN(2 m) - FGF \\cos 26.57^\\circ(2 m) = 0",
          "raw": "26.25 kN(2 m) - FGF cos 26.57°(2 m) = 0"
        },
        {
          "type": "ans",
          "latex": "FGF = 29.3 kN (C)",
          "raw": "FGF = 29.3 kN (C)"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies 15 kN(4 m) - 26.25 kN(2 m)",
          "raw": "a+ MO = 0; 15 kN(4 m) - 26.25 kN(2 m)"
        },
        {
          "type": "calc",
          "latex": "- FGD \\sin 56.31^\\circ(4 m) = 0",
          "raw": "- FGD sin 56.31°(4 m) = 0"
        },
        {
          "type": "ans",
          "latex": "FGD = 2.253 kN = 2.25 kN (T)",
          "raw": "FGD = 2.253 kN = 2.25 kN (T)"
        }
      ],
      "final_answers_math": [
        "8.75 - Dx = 0; Dx = 8.75 kN",
        "-13.3 + Dy = 0; Dy = 13.3 kN",
        "\\curvearrowleft +\\Sigma M_{D} = 0 \\implies -8.75142 + MD = 0; MD = 35 kN  \\cdot  m",
        "FCD = 25 kN (T)",
        "FGF = 29.3 kN (C)",
        "FGD = 2.253 kN = 2.25 kN (T)"
      ]
    },
    {
      "id": "F6-21",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 21,
      "page_book": 346,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the components of reaction at A and C.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F6_21.webp",
      "solution_raw": "Entire frame\na+ MA = 0; -600132 - 3400132\n 4 11.52 + Cy132 = 0\n \nCy = 1200 N\nAns.\n \n+ c Fy = 0; Ay - 400132 + 1200 = 0\n \nAy = 0\nAns.\n \n+S Fx = 0; 600 - Ax - Cx = 0\n \nMember AB\n \na+ MB = 0; 40011.5210.752 - Ax132 = 0\n \nAx = 150 N\nAns.\n \nCx = 450 N\nAns.\n \n\u0007These same results can be obtained by considering \nmembers AB and BC.",
      "final_answers": [
        "Cy = 1200 N",
        "Ay = 0",
        "Ax = 150 N",
        "Cx = 450 N"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Entire frame",
          "raw": "Entire frame"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies -600132 - 3400132",
          "raw": "a+ MA = 0; -600132 - 3400132"
        },
        {
          "type": "calc",
          "latex": "4 11.52 + Cy132 = 0",
          "raw": "4 11.52 + Cy132 = 0"
        },
        {
          "type": "ans",
          "latex": "Cy = 1200 N",
          "raw": "Cy = 1200 N"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies Ay - 400132 + 1200 = 0",
          "raw": "+ c Fy = 0; Ay - 400132 + 1200 = 0"
        },
        {
          "type": "ans",
          "latex": "Ay = 0",
          "raw": "Ay = 0"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies  - Ax - Cx = 0",
          "raw": "+S Fx = 0;  - Ax - Cx = 0"
        },
        {
          "type": "calc",
          "latex": "Member AB",
          "raw": "Member AB"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{B} = 0 \\implies 40011.5210.752 - Ax132 = 0",
          "raw": "a+ MB = 0; 40011.5210.752 - Ax132 = 0"
        },
        {
          "type": "ans",
          "latex": "Ax = 150 N",
          "raw": "Ax = 150 N"
        },
        {
          "type": "ans",
          "latex": "Cx = 450 N",
          "raw": "Cx = 450 N"
        },
        {
          "type": "calc",
          "latex": "\u0007These same results can be obtained by considering",
          "raw": "\u0007These same results can be obtained by considering"
        },
        {
          "type": "calc",
          "latex": "members AB and BC.",
          "raw": "members AB and BC."
        }
      ],
      "final_answers_math": [
        "Cy = 1200 N",
        "Ay = 0",
        "Ax = 150 N",
        "Cx = 450 N"
      ]
    },
    {
      "id": "F6-22",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 22,
      "page_book": 346,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the components of reaction at C.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F6_22.webp",
      "solution_raw": "Entire frame\n \na+ ME = 0; 250162 - Ay162 = 0\n \nAy = 250 N\n \n+S Fx = 0; Ex = 0\n \n+ c Fy = 0; 250 - 250 + Ey = 0; Ey = 0\n \nMember BD\n \na+ MD = 0; 25014.52 - By132 = 0;\n \nBy = 375 N\n \nMember ABC\n\na+ MC = 0; -250132 + 37511.52 + Bx122 = 0\n \nBx = 93.75 N\n \n+S Fx = 0; Cx - Bx = 0; Cx = 93.75 N\nAns.\n \n+ c Fy = 0; 250 - 375 + Cy = 0; Cy = 125 N Ans.",
      "final_answers": [
        "+S Fx = 0; Cx - Bx = 0; Cx = 93.75 N",
        "+ c Fy = 0; 250 - 375 + Cy = 0; Cy = 125 N"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Entire frame",
          "raw": "Entire frame"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{E} = 0 \\implies 250162 - Ay162 = 0",
          "raw": "a+ ME = 0; 250162 - Ay162 = 0"
        },
        {
          "type": "calc",
          "latex": "Ay = 250 N",
          "raw": "Ay = 250 N"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies Ex = 0",
          "raw": "+S Fx = 0; Ex = 0"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 250 - 250 + Ey = 0; Ey = 0",
          "raw": "+ c Fy = 0; 250 - 250 + Ey = 0; Ey = 0"
        },
        {
          "type": "calc",
          "latex": "Member BD",
          "raw": "Member BD"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{D} = 0 \\implies 25014.52 - By132 = 0;",
          "raw": "a+ MD = 0; 25014.52 - By132 = 0;"
        },
        {
          "type": "calc",
          "latex": "By = 375 N",
          "raw": "By = 375 N"
        },
        {
          "type": "calc",
          "latex": "Member ABC",
          "raw": "Member ABC"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies -250132 + 37511.52 + Bx122 = 0",
          "raw": "a+ MC = 0; -250132 + 37511.52 + Bx122 = 0"
        },
        {
          "type": "calc",
          "latex": "Bx = 93.75 N",
          "raw": "Bx = 93.75 N"
        },
        {
          "type": "ans",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies Cx - Bx = 0; Cx = 93.75 N",
          "raw": "+S Fx = 0; Cx - Bx = 0; Cx = 93.75 N"
        },
        {
          "type": "ans",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 250 - 375 + Cy = 0; Cy = 125 N",
          "raw": "+ c Fy = 0; 250 - 375 + Cy = 0; Cy = 125 N Ans."
        }
      ],
      "final_answers_math": [
        "\\xrightarrow{+} \\Sigma F_x = 0 \\implies Cx - Bx = 0; Cx = 93.75 N",
        "+\\uparrow \\Sigma F_y = 0 \\implies 250 - 375 + Cy = 0; Cy = 125 N"
      ]
    },
    {
      "id": "F6-23",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 23,
      "page_book": 346,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the components of reaction at E.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components)",
      "image": "images/problems/F6_23.webp",
      "solution_raw": "AD, CB are two-force members.\n \nMember AB\n \na+ MA = 0; - 31\n2132142411.52 + By132 = 0\n \nBy = 3 kN\n \n\u0007Since BC is a two-force member Cy = By = 3 kN \nand Cx = 0 1 MB = 02.\n \nMember EDC\n \na+ ME = 0; FDA14\n5211.52 - 5132 - 3132 = 0\n \nFDA = 20 kN\n \n+S Fx = 0; Ex - 2013\n52 = 0; Ex = 12 kN Ans.\n \n+ c Fy = 0; -Ey + 2014\n52 - 5 - 3 = 0;\n \nEy = 8 kN\nAns.\n\n632 \nPartial Solutions And Answers",
      "final_answers": [
        "52 = 0; Ex = 12 kN",
        "Ey = 8 kN",
        "Partial Solutions And wers"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "AD, CB are two-force members.",
          "raw": "AD, CB are two-force members."
        },
        {
          "type": "calc",
          "latex": "Member AB",
          "raw": "Member AB"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies - 31",
          "raw": "a+ MA = 0; - 31"
        },
        {
          "type": "calc",
          "latex": "2132142411.52 + By132 = 0",
          "raw": "2132142411.52 + By132 = 0"
        },
        {
          "type": "calc",
          "latex": "By = 3 kN",
          "raw": "By = 3 kN"
        },
        {
          "type": "calc",
          "latex": "\u0007Since BC is \\alpha two-force member Cy = By = 3 kN",
          "raw": "\u0007Since BC is a two-force member Cy = By = 3 kN"
        },
        {
          "type": "calc",
          "latex": "and Cx = 0 1 MB = 02.",
          "raw": "and Cx = 0 1 MB = 02."
        },
        {
          "type": "calc",
          "latex": "Member EDC",
          "raw": "Member EDC"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{E} = 0 \\implies FDA\\left(\\frac{4}{5}\\right)11.52 - 5132 - 3132 = 0",
          "raw": "a+ ME = 0; FDA\\left(\\frac{4}{5}\\right)11.52 - 5132 - 3132 = 0"
        },
        {
          "type": "calc",
          "latex": "FDA = 20 kN",
          "raw": "FDA = 20 kN"
        },
        {
          "type": "ans",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies Ex - 20\\left(\\frac{3}{5}\\right) = 0; Ex = 12 kN",
          "raw": "+S Fx = 0; Ex - 20\\left(\\frac{3}{5}\\right) = 0; Ex = 12 kN Ans."
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies -Ey + 20\\left(\\frac{4}{5}\\right) - 5 - 3 = 0;",
          "raw": "+ c Fy = 0; -Ey + 20\\left(\\frac{4}{5}\\right) - 5 - 3 = 0;"
        },
        {
          "type": "ans",
          "latex": "Ey = 8 kN",
          "raw": "Ey = 8 kN"
        }
      ],
      "final_answers_math": [
        "\\xrightarrow{+} \\Sigma F_x = 0 \\implies Ex - 20\\left(\\frac{3}{5}\\right) = 0; Ex = 12 kN",
        "Ey = 8 kN"
      ]
    },
    {
      "id": "F6-24",
      "chapter": 6,
      "chapter_name_en": "Structural Analysis",
      "chapter_name_th": "การวิเคราะห์โครงสร้าง",
      "number": 24,
      "page_book": 346,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the components of reaction at D and the \ncomponents of reaction the pin at A exerts on member BA.",
      "question_th_summary": "แตกแรงออกเป็นองค์ประกอบย่อยตามแนวแกน (Components) • หาแรงในชิ้นส่วนโครงถัก ระบุว่าเป็นแรงดึง (T) หรือแรงอัด (C)",
      "image": "images/problems/F6_24.webp",
      "solution_raw": "AC and DC are two-force members.\n \nMember BC\n \na+ MC = 0; 3 1\n2 (3)(8)4 112 - By132 = 0\n \nBy = 4 kN\n \nMember BA\n \na+ MB = 0; 6122 - Ax142 = 0\n \nAx = 3 kN\nAns.\n \n+ c Fy = 0; -4 kN + Ay = 0; Ay = 4 kNAns.\n \nEntire Frame\n\na+ MA = 0; -6122 - 31\n21321824 122 + Dy132 = 0\n \nDy = 12 kN\nAns.\n \nSince DC is a two-force member 1 MC = 02 then\n \nDx = 0\nAns.\nChapter 7",
      "final_answers": [
        "Ax = 3 kN",
        "+ c Fy = 0; -4 kN + Ay = 0; Ay = 4 kN",
        "Dy = 12 kN",
        "Dx = 0"
      ],
      "theory_th": "การวิเคราะห์โครงถักด้วยวิธีข้อต่อ (Method of Joints) และวิธีตัดหน้าตัด (Method of Sections)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "AC and DC are two-force members.",
          "raw": "AC and DC are two-force members."
        },
        {
          "type": "calc",
          "latex": "Member BC",
          "raw": "Member BC"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies 3 1",
          "raw": "a+ MC = 0; 3 1"
        },
        {
          "type": "calc",
          "latex": "2 (3)(8)4 112 - By132 = 0",
          "raw": "2 (3)(8)4 112 - By132 = 0"
        },
        {
          "type": "calc",
          "latex": "By = 4 kN",
          "raw": "By = 4 kN"
        },
        {
          "type": "calc",
          "latex": "Member BA",
          "raw": "Member BA"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{B} = 0 \\implies 6122 - Ax142 = 0",
          "raw": "a+ MB = 0; 6122 - Ax142 = 0"
        },
        {
          "type": "ans",
          "latex": "Ax = 3 kN",
          "raw": "Ax = 3 kN"
        },
        {
          "type": "ans",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies -4 kN + Ay = 0; Ay = 4 kN",
          "raw": "+ c Fy = 0; -4 kN + Ay = 0; Ay = 4 kNAns."
        },
        {
          "type": "calc",
          "latex": "Entire Frame",
          "raw": "Entire Frame"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies -6122 - 31",
          "raw": "a+ MA = 0; -6122 - 31"
        },
        {
          "type": "calc",
          "latex": "21321824 122 + Dy132 = 0",
          "raw": "21321824 122 + Dy132 = 0"
        },
        {
          "type": "ans",
          "latex": "Dy = 12 kN",
          "raw": "Dy = 12 kN"
        },
        {
          "type": "calc",
          "latex": "Since DC is \\alpha two-force member 1 MC = 02 then",
          "raw": "Since DC is a two-force member 1 MC = 02 then"
        },
        {
          "type": "ans",
          "latex": "Dx = 0",
          "raw": "Dx = 0"
        }
      ],
      "final_answers_math": [
        "Ax = 3 kN",
        "+\\uparrow \\Sigma F_y = 0 \\implies -4 kN + Ay = 0; Ay = 4 kN",
        "Dy = 12 kN",
        "Dx = 0"
      ]
    },
    {
      "id": "F7-1",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 1,
      "page_book": 374,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the normal force, shear force, and \nmoment at point C.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_1.webp",
      "solution_raw": "a+ MA = 0; By(6) - 10(1.5) - 15(4.5) = 0\n \n By = 13.75 kN\n \n S\n+ Fx = 0; NC = 0\nAns.\n \n + c Fy = 0; VC + 13.75 - 15 = 0\n \nVC = 1.25 kN\nAns.\n \n a+ MC = 0; 13.75(3) - 15(1.5) - MC = 0\n \nMC = 18.75 kN # m\nAns.",
      "final_answers": [
        "+ Fx = 0; NC = 0",
        "VC = 1.25 kN",
        "MC = 18.75 kN · m"
      ],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies By(6) - 10(1.5) - 15(4.5) = 0",
          "raw": "a+ MA = 0; By(6) - 10(1.5) - 15(4.5) = 0"
        },
        {
          "type": "calc",
          "latex": "By = 13.75 kN",
          "raw": "By = 13.75 kN"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "ans",
          "latex": "+ F_x = 0; NC = 0",
          "raw": "+ Fx = 0; NC = 0"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies VC + 13.75 - 15 = 0",
          "raw": "+ c Fy = 0; VC + 13.75 - 15 = 0"
        },
        {
          "type": "ans",
          "latex": "VC = 1.25 kN",
          "raw": "VC = 1.25 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies 13.75(3) - 15(1.5) - MC = 0",
          "raw": "a+ MC = 0; 13.75(3) - 15(1.5) - MC = 0"
        },
        {
          "type": "ans",
          "latex": "MC = 18.75 kN  \\cdot  m",
          "raw": "MC = 18.75 kN  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "+ F_x = 0; NC = 0",
        "VC = 1.25 kN",
        "MC = 18.75 kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-2",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 2,
      "page_book": 374,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the normal force, shear force, and \nmoment at point C.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_2.webp",
      "solution_raw": "a+ MB = 0; 30 - 10(1.5) - Ay(3) = 0\n \nAy = 5 kN\n \nS\n+ Fx = 0; NC = 0\nAns.\n \n + c Fy = 0; 5 - VC = 0\n \n VC = 5 kN\nAns.\n \n a+ MC = 0; MC + 30 - 5(1.5) = 0\n \n MC = -22.5 kN # m\nAns.",
      "final_answers": [
        "+ Fx = 0; NC = 0",
        "VC = 5 kN",
        "MC = -22.5 kN · m"
      ],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{B} = 0 \\implies 30 - 10(1.5) - Ay(3) = 0",
          "raw": "a+ MB = 0; 30 - 10(1.5) - Ay(3) = 0"
        },
        {
          "type": "calc",
          "latex": "Ay = 5 kN",
          "raw": "Ay = 5 kN"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "ans",
          "latex": "+ F_x = 0; NC = 0",
          "raw": "+ Fx = 0; NC = 0"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 5 - VC = 0",
          "raw": "+ c Fy = 0; 5 - VC = 0"
        },
        {
          "type": "ans",
          "latex": "VC = 5 kN",
          "raw": "VC = 5 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies MC + 30 - 5(1.5) = 0",
          "raw": "a+ MC = 0; MC + 30 - 5(1.5) = 0"
        },
        {
          "type": "ans",
          "latex": "MC = -22.5 kN  \\cdot  m",
          "raw": "MC = -22.5 kN  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "+ F_x = 0; NC = 0",
        "VC = 5 kN",
        "MC = -22.5 kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-3",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 3,
      "page_book": 374,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the normal force, shear force, and \nmoment at point C.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_3.webp",
      "solution_raw": "S\n+ Fx = 0; Bx = 0\n \n a+ MA = 0; 3(6)(3) - By(9) = 0\n \n By = 6 kip\n \nS\n+ Fx = 0; NC = 0\nAns.\n \n a+ c Fy = 0; VC - 6 = 0\n \n VC = 6 kip\nAns.\n \n a+ MC = 0; -MC - 6(4.5) = 0\n \n MC = -27 kip # ft\nAns.",
      "final_answers": [
        "+ Fx = 0; NC = 0",
        "VC = 6 kip",
        "MC = -27 kip · ft"
      ],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ F_x = 0; Bx = 0",
          "raw": "+ Fx = 0; Bx = 0"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies 3(6)(3) - By(9) = 0",
          "raw": "a+ MA = 0; 3(6)(3) - By(9) = 0"
        },
        {
          "type": "calc",
          "latex": "By = 6 kip",
          "raw": "By = 6 kip"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "ans",
          "latex": "+ F_x = 0; NC = 0",
          "raw": "+ Fx = 0; NC = 0"
        },
        {
          "type": "calc",
          "latex": "a+ c F_y = 0; VC - 6 = 0",
          "raw": "a+ c Fy = 0; VC - 6 = 0"
        },
        {
          "type": "ans",
          "latex": "VC = 6 kip",
          "raw": "VC = 6 kip"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies -MC - 6(4.5) = 0",
          "raw": "a+ MC = 0; -MC - 6(4.5) = 0"
        },
        {
          "type": "ans",
          "latex": "MC = -27 kip  \\cdot  ft",
          "raw": "MC = -27 kip  \\cdot  ft"
        }
      ],
      "final_answers_math": [
        "+ F_x = 0; NC = 0",
        "VC = 6 kip",
        "MC = -27 kip  \\cdot  ft"
      ]
    },
    {
      "id": "F7-4",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 4,
      "page_book": 374,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the normal force, shear force, and \nmoment at point C.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_4.webp",
      "solution_raw": "a+ MA = 0; By(6) - 12(1.5) - 9(3)(4.5) = 0\n \n By = 23.25 kN\n \nS\n+ Fx = 0; NC = 0\nAns.\n \n + c Fy = 0; VC + 23.25 - 9(1.5) = 0\n \n VC = -9.75 kN\nAns.\n \na+ MC = 0;\n \n23.25(1.5) - 9(1.5)(0.75) - MC = 0\n \nMC = 24.75 kN # m\nAns.",
      "final_answers": [
        "+ Fx = 0; NC = 0",
        "VC = -9.75 kN",
        "MC = 24.75 kN · m"
      ],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies By(6) - 12(1.5) - 9(3)(4.5) = 0",
          "raw": "a+ MA = 0; By(6) - 12(1.5) - 9(3)(4.5) = 0"
        },
        {
          "type": "calc",
          "latex": "By = 23.25 kN",
          "raw": "By = 23.25 kN"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "ans",
          "latex": "+ F_x = 0; NC = 0",
          "raw": "+ Fx = 0; NC = 0"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies VC + 23.25 - 9(1.5) = 0",
          "raw": "+ c Fy = 0; VC + 23.25 - 9(1.5) = 0"
        },
        {
          "type": "ans",
          "latex": "VC = -9.75 kN",
          "raw": "VC = -9.75 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies",
          "raw": "a+ MC = 0;"
        },
        {
          "type": "calc",
          "latex": "23.25(1.5) - 9(1.5)(0.75) - MC = 0",
          "raw": "23.25(1.5) - 9(1.5)(0.75) - MC = 0"
        },
        {
          "type": "ans",
          "latex": "MC = 24.75 kN  \\cdot  m",
          "raw": "MC = 24.75 kN  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "+ F_x = 0; NC = 0",
        "VC = -9.75 kN",
        "MC = 24.75 kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-5",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 5,
      "page_book": 374,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the normal force, shear force, and \nmoment at point C.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_5.webp",
      "solution_raw": "a+ MA = 0; By(6) - 1\n2 (9)(6)(3) = 0\n \n By = 13.5 kN\n \nS\n+ Fx = 0; NC = 0\nAns.\n \n + c Fy = 0; VC + 13.5 - 1\n2 (9)(3) = 0\n \n VC = 0\nAns.\n \n a+ MC = 0; 13.5(3) - 1\n2 (9)(3)(1) - MC = 0\n \n MC = 27 kN # m\nAns.",
      "final_answers": [
        "+ Fx = 0; NC = 0",
        "VC = 0",
        "MC = 27 kN · m"
      ],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies By(6) - 1",
          "raw": "a+ MA = 0; By(6) - 1"
        },
        {
          "type": "calc",
          "latex": "2 (9)(6)(3) = 0",
          "raw": "2 (9)(6)(3) = 0"
        },
        {
          "type": "calc",
          "latex": "By = 13.5 kN",
          "raw": "By = 13.5 kN"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "ans",
          "latex": "+ F_x = 0; NC = 0",
          "raw": "+ Fx = 0; NC = 0"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies VC + 13.5 - 1",
          "raw": "+ c Fy = 0; VC + 13.5 - 1"
        },
        {
          "type": "calc",
          "latex": "2 (9)(3) = 0",
          "raw": "2 (9)(3) = 0"
        },
        {
          "type": "ans",
          "latex": "VC = 0",
          "raw": "VC = 0"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies 13.5(3) - 1",
          "raw": "a+ MC = 0; 13.5(3) - 1"
        },
        {
          "type": "calc",
          "latex": "2 (9)(3)(1) - MC = 0",
          "raw": "2 (9)(3)(1) - MC = 0"
        },
        {
          "type": "ans",
          "latex": "MC = 27 kN  \\cdot  m",
          "raw": "MC = 27 kN  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "+ F_x = 0; NC = 0",
        "VC = 0",
        "MC = 27 kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-6",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 6,
      "page_book": 374,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the normal force, shear force, and \nmoment at point C. Assume A is pinned and B is a roller.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_6.webp",
      "solution_raw": "a+ MA = 0;\n \nBy(6) - 1\n2 (6)(3)(2) - 6(3)(4.5) = 0\n \nBy = 16.5 kN\n \n+S Fx = 0; NC = 0\nAns.\n \n + c Fy = 0; VC + 16.5 - 6(3) = 0\n \n VC = 1.50 kN\nAns.\n \n a+ MC = 0; 16.5(3) - 6(3)(1.5) - MC = 0\n \n MC = 22.5 kN # m\nAns.",
      "final_answers": [
        "+S Fx = 0; NC = 0",
        "VC = 1.50 kN",
        "MC = 22.5 kN · m"
      ],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies",
          "raw": "a+ MA = 0;"
        },
        {
          "type": "calc",
          "latex": "By(6) - 1",
          "raw": "By(6) - 1"
        },
        {
          "type": "calc",
          "latex": "2 (6)(3)(2) - 6(3)(4.5) = 0",
          "raw": "2 (6)(3)(2) - 6(3)(4.5) = 0"
        },
        {
          "type": "calc",
          "latex": "By = 16.5 kN",
          "raw": "By = 16.5 kN"
        },
        {
          "type": "ans",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies NC = 0",
          "raw": "+S Fx = 0; NC = 0"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies VC + 16.5 - 6(3) = 0",
          "raw": "+ c Fy = 0; VC + 16.5 - 6(3) = 0"
        },
        {
          "type": "ans",
          "latex": "VC = 1.50 kN",
          "raw": "VC = 1.50 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{C} = 0 \\implies 16.5(3) - 6(3)(1.5) - MC = 0",
          "raw": "a+ MC = 0; 16.5(3) - 6(3)(1.5) - MC = 0"
        },
        {
          "type": "ans",
          "latex": "MC = 22.5 kN  \\cdot  m",
          "raw": "MC = 22.5 kN  \\cdot  m"
        }
      ],
      "final_answers_math": [
        "\\xrightarrow{+} \\Sigma F_x = 0 \\implies NC = 0",
        "VC = 1.50 kN",
        "MC = 22.5 kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-7",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 7,
      "page_book": 387,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the shear and moment as a function of x, \nand then draw the shear and moment diagrams.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_7.webp",
      "solution_raw": "+ c Fy = 0; 6 - V = 0 V = 6 kN\n \na+ MO = 0; M + 18 - 6x = 0\n \n M = (6x - 18) kN # m\n 3\n6\nV (kN)\nx (m)\n 18\nM (kN°m)\nx (m)\n3\nFig. F7–7",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies 6 - V = 0 V = 6 kN",
          "raw": "+ c Fy = 0; 6 - V = 0 V = 6 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies M + 18 - 6x = 0",
          "raw": "a+ MO = 0; M + 18 - 6x = 0"
        },
        {
          "type": "ans",
          "latex": "M = (6x - 18) kN  \\cdot  m",
          "raw": "M = (6x - 18) kN  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "6",
          "raw": "6"
        },
        {
          "type": "calc",
          "latex": "V (kN)",
          "raw": "V (kN)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "18",
          "raw": "18"
        },
        {
          "type": "calc",
          "latex": "M (kN°m)",
          "raw": "M (kN°m)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "Fig. F7–7",
          "raw": "Fig. F7–7"
        }
      ],
      "final_answers_math": [
        "M = (6x - 18) kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-8",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 8,
      "page_book": 387,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the shear and moment as a function of x, \nand then draw the shear and moment diagrams.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_8.webp",
      "solution_raw": "+ c Fy = 0; - V - 2x = 0\n \nV = (-2x) kN\n \na+ MO = 0; M + 2x1x\n2 2 - 15 = 0\n \n M = (15 - x2) kN # m\n3\n6\n15\nM (kN m)\nx (m)\n°6\nV (kN)\nx (m)\n3\nFig. F7–8 \n\n \nFundamental Problems \n633",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies - V - 2x = 0",
          "raw": "+ c Fy = 0; - V - 2x = 0"
        },
        {
          "type": "calc",
          "latex": "V = (-2x) kN",
          "raw": "V = (-2x) kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies M + 2x1x",
          "raw": "a+ MO = 0; M + 2x1x"
        },
        {
          "type": "calc",
          "latex": "2 2 - 15 = 0",
          "raw": "2 2 - 15 = 0"
        },
        {
          "type": "ans",
          "latex": "M = (15 - x2) kN  \\cdot  m",
          "raw": "M = (15 - x2) kN  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "6",
          "raw": "6"
        },
        {
          "type": "calc",
          "latex": "15",
          "raw": "15"
        },
        {
          "type": "calc",
          "latex": "M (kN m)",
          "raw": "M (kN m)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "°6",
          "raw": "°6"
        },
        {
          "type": "calc",
          "latex": "V (kN)",
          "raw": "V (kN)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "Fig. F7–8",
          "raw": "Fig. F7–8"
        }
      ],
      "final_answers_math": [
        "M = (15 - x2) kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-9",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 9,
      "page_book": 387,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the shear and moment as a function of x, \nand then draw the shear and moment diagrams.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_9.webp",
      "solution_raw": "+ c Fy = 0; - V - 1\n2(2x)(x) = 0\n \nV = -(x2) kN\n \na+ MO = 0; M + 1\n2(2x)(x)(x\n3) = 0\n \n M =\n- (1\n3 x3) kN # m\nM (kN m)\nx (m)\n°9\n°9\nV (kN)\nx (m)\n3\n3\nFig. F7–9",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies - V - 1",
          "raw": "+ c Fy = 0; - V - 1"
        },
        {
          "type": "calc",
          "latex": "2(2x)(x) = 0",
          "raw": "2(2x)(x) = 0"
        },
        {
          "type": "calc",
          "latex": "V = -(x2) kN",
          "raw": "V = -(x2) kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies M + 1",
          "raw": "a+ MO = 0; M + 1"
        },
        {
          "type": "calc",
          "latex": "2(2x)(x)(x",
          "raw": "2(2x)(x)(x"
        },
        {
          "type": "calc",
          "latex": "3) = 0",
          "raw": "3) = 0"
        },
        {
          "type": "ans",
          "latex": "M =",
          "raw": "M ="
        },
        {
          "type": "calc",
          "latex": "- (1",
          "raw": "- (1"
        },
        {
          "type": "calc",
          "latex": "3 x3) kN  \\cdot  m",
          "raw": "3 x3) kN  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "M (kN m)",
          "raw": "M (kN m)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "°9",
          "raw": "°9"
        },
        {
          "type": "calc",
          "latex": "°9",
          "raw": "°9"
        },
        {
          "type": "calc",
          "latex": "V (kN)",
          "raw": "V (kN)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "Fig. F7–9",
          "raw": "Fig. F7–9"
        }
      ],
      "final_answers_math": [
        "M ="
      ]
    },
    {
      "id": "F7-10",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 10,
      "page_book": 387,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the shear and moment as a function of \nx, and then draw the shear and moment diagrams.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_10.webp",
      "solution_raw": "+ c Fy = 0; - V - 2x = 0\n \nV = -2 kN\n \na+ MO = 0; M + 2x = 0\n \n \n M = (-2x) kN # m\n 2\nV (kN)\nx (m)\n 12\nM (kN°m)\nx (m)\n6\n6\nFig. F7–10",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies - V - 2x = 0",
          "raw": "+ c Fy = 0; - V - 2x = 0"
        },
        {
          "type": "calc",
          "latex": "V = -2 kN",
          "raw": "V = -2 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies M + 2x = 0",
          "raw": "a+ MO = 0; M + 2x = 0"
        },
        {
          "type": "ans",
          "latex": "M = (-2x) kN  \\cdot  m",
          "raw": "M = (-2x) kN  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "2",
          "raw": "2"
        },
        {
          "type": "calc",
          "latex": "V (kN)",
          "raw": "V (kN)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "12",
          "raw": "12"
        },
        {
          "type": "calc",
          "latex": "M (kN°m)",
          "raw": "M (kN°m)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "6",
          "raw": "6"
        },
        {
          "type": "calc",
          "latex": "6",
          "raw": "6"
        },
        {
          "type": "calc",
          "latex": "Fig. F7–10",
          "raw": "Fig. F7–10"
        }
      ],
      "final_answers_math": [
        "M = (-2x) kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-11",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 11,
      "page_book": 387,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the shear and moment as a function of \nx, where 0 … x 6 3 m and 3 m 6 x … 6 m, and then draw \nthe shear and moment diagrams.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_11.webp",
      "solution_raw": "Region 3 m … x 6 3 m\n \n+ c Fy = 0; - V - 5 = 0 V = -5 kN\n \na+ MO = 0; M + 5x = 0\n \n \n M = (-5x) kN # m\n \nRegion 0 6 x … 6 m\n \n+ c Fy = 0; V + 5 = 0 V = -5 kN\n \na+ MO = 0; 5(6 - x) - M = 0\n \n \n M = 15(6 - x)2 kN # m\n 5\nV (kN)\nx (m)\n15\n3\n 15\nM (kN°m)\nx (m)\n6\n6\nFig. F7–11",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Region 3 m … x 6 3 m",
          "raw": "Region 3 m … x 6 3 m"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies - V - 5 = 0 V = -5 kN",
          "raw": "+ c Fy = 0; - V - 5 = 0 V = -5 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies M + 5x = 0",
          "raw": "a+ MO = 0; M + 5x = 0"
        },
        {
          "type": "calc",
          "latex": "M = (-5x) kN  \\cdot  m",
          "raw": "M = (-5x) kN  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "Region 0 6 x … 6 m",
          "raw": "Region 0 6 x … 6 m"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies V + 5 = 0 V = -5 kN",
          "raw": "+ c Fy = 0; V + 5 = 0 V = -5 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies 5(6 - x) - M = 0",
          "raw": "a+ MO = 0; 5(6 - x) - M = 0"
        },
        {
          "type": "ans",
          "latex": "M = 15(6 - x)^2 kN  \\cdot  m",
          "raw": "M = 15(6 - x)2 kN  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "5",
          "raw": "5"
        },
        {
          "type": "calc",
          "latex": "V (kN)",
          "raw": "V (kN)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "15",
          "raw": "15"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "15",
          "raw": "15"
        },
        {
          "type": "calc",
          "latex": "M (kN°m)",
          "raw": "M (kN°m)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "6",
          "raw": "6"
        },
        {
          "type": "calc",
          "latex": "6",
          "raw": "6"
        },
        {
          "type": "calc",
          "latex": "Fig. F7–11",
          "raw": "Fig. F7–11"
        }
      ],
      "final_answers_math": [
        "M = 15(6 - x)^2 kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-12",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 12,
      "page_book": 387,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the shear and moment as a function of \nx, where 0 … x 6 3 m and 3 m 6 x … 6 m, and then draw \nthe shear and moment diagrams.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_12.webp",
      "solution_raw": "Region 0 … x 6 3 m\n \n+ c Fy = 0; V = 0\n \na+ MO = 0; M - 12 = 0\n \n \n M = 12 kN # m\n \nRegion 3 m 6 x … 6 m\n \n+ c Fy = 0; V + 4 = 0 V = -4 kN\n \na+ MO = 0; 4(6 - x) - M = 0\n \n \n M = 14(6 - x)2 kN # m\n 4\nV (kN)\nx (m)\n12\nM (kN°m)\nx (m)\n3\n6\n3\n6\nFig. F7–12",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Region 0 … x 6 3 m",
          "raw": "Region 0 … x 6 3 m"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies V = 0",
          "raw": "+ c Fy = 0; V = 0"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies M - 12 = 0",
          "raw": "a+ MO = 0; M - 12 = 0"
        },
        {
          "type": "calc",
          "latex": "M = 12 kN  \\cdot  m",
          "raw": "M = 12 kN  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "Region 3 m 6 x … 6 m",
          "raw": "Region 3 m 6 x … 6 m"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies V + 4 = 0 V = -4 kN",
          "raw": "+ c Fy = 0; V + 4 = 0 V = -4 kN"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies 4(6 - x) - M = 0",
          "raw": "a+ MO = 0; 4(6 - x) - M = 0"
        },
        {
          "type": "ans",
          "latex": "M = 14(6 - x)^2 kN  \\cdot  m",
          "raw": "M = 14(6 - x)2 kN  \\cdot  m"
        },
        {
          "type": "calc",
          "latex": "4",
          "raw": "4"
        },
        {
          "type": "calc",
          "latex": "V (kN)",
          "raw": "V (kN)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "12",
          "raw": "12"
        },
        {
          "type": "calc",
          "latex": "M (kN°m)",
          "raw": "M (kN°m)"
        },
        {
          "type": "calc",
          "latex": "x (m)",
          "raw": "x (m)"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "6",
          "raw": "6"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "6",
          "raw": "6"
        },
        {
          "type": "calc",
          "latex": "Fig. F7–12",
          "raw": "Fig. F7–12"
        }
      ],
      "final_answers_math": [
        "M = 14(6 - x)^2 kN  \\cdot  m"
      ]
    },
    {
      "id": "F7-13",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 13,
      "page_book": 398,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Draw the shear and moment diagrams for the beam.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_13.webp",
      "solution_raw": "1\n2\n3\n 10\n 4\n 18\nV (kN)\nx (m)\n1\n2\n3\n 4\n 14\n 32\nM (kN°m)\nx (m)\nFig. F7–13",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "การเขียนแผนภาพแรงเฉือน (V-x) และโมเมนต์ดัด (M-x):",
          "raw": "",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\text{คำนวณแรงปฏิกิริยาที่ฐานรองรับ และตัดพิจารณาแรงภายในตามฟังก์ชัน } x",
          "raw": ""
        },
        {
          "type": "calc",
          "latex": "\\frac{dV}{dx} = -w(x), \\quad \\frac{dM}{dx} = V(x)",
          "raw": ""
        },
        {
          "type": "ans",
          "latex": "V_{\\max} = 18\\text{ kN}, \\quad M_{\\max} = 32\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))",
          "raw": ""
        }
      ],
      "final_answers_math": [
        "V_{\\max} = 18\\text{ kN}, \\quad M_{\\max} = 32\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))"
      ]
    },
    {
      "id": "F7-14",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 14,
      "page_book": 398,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Draw the shear and moment diagrams for the beam.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_14.webp",
      "solution_raw": "3\n18\nV (kN)\nx (m)\n3\n1.5\n 27\n 9\nM (kN°m)\nx (m)\n1.5\n6\nFig. F7–14",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "การเขียนแผนภาพแรงเฉือน (V-x) และโมเมนต์ดัด (M-x):",
          "raw": "",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\text{คำนวณแรงปฏิกิริยาที่ฐานรองรับ และตัดพิจารณาแรงภายในตามฟังก์ชัน } x",
          "raw": ""
        },
        {
          "type": "calc",
          "latex": "\\frac{dV}{dx} = -w(x), \\quad \\frac{dM}{dx} = V(x)",
          "raw": ""
        },
        {
          "type": "ans",
          "latex": "V_{\\max} = 18\\text{ kN}, \\quad M_{\\max} = 27\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))",
          "raw": ""
        }
      ],
      "final_answers_math": [
        "V_{\\max} = 18\\text{ kN}, \\quad M_{\\max} = 27\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))"
      ]
    },
    {
      "id": "F7-15",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 15,
      "page_book": 398,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Draw the shear and moment diagrams for the beam.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_15.webp",
      "solution_raw": "10\nV (kN)\nx (m)\n2\n4\n6\n8\n16\n20\nM (kN°m)\nx (m)\n2\n4\n6\n2\nFig. F7–15 \n\n634 \nPartial Solutions And Answers",
      "final_answers": [
        "Partial Solutions And wers"
      ],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "การเขียนแผนภาพแรงเฉือน (V-x) และโมเมนต์ดัด (M-x):",
          "raw": "",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\text{คำนวณแรงปฏิกิริยาที่ฐานรองรับ และตัดพิจารณาแรงภายในตามฟังก์ชัน } x",
          "raw": ""
        },
        {
          "type": "calc",
          "latex": "\\frac{dV}{dx} = -w(x), \\quad \\frac{dM}{dx} = V(x)",
          "raw": ""
        },
        {
          "type": "ans",
          "latex": "V_{\\max} = 10\\text{ kN}, \\quad M_{\\max} = 20\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))",
          "raw": ""
        }
      ],
      "final_answers_math": [
        "V_{\\max} = 10\\text{ kN}, \\quad M_{\\max} = 20\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))"
      ]
    },
    {
      "id": "F7-16",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 16,
      "page_book": 398,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Draw the shear and moment diagrams for the beam.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_16.webp",
      "solution_raw": "9\nV (kN)\nx (m)\n6\n4.5\n1.5\n9\n 6.75\nM (kN°m)\nx (m)\n1.5\n4.5 6\nFig. F7–16",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "การเขียนแผนภาพแรงเฉือน (V-x) และโมเมนต์ดัด (M-x):",
          "raw": "",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\text{คำนวณแรงปฏิกิริยาที่ฐานรองรับ และตัดพิจารณาแรงภายในตามฟังก์ชัน } x",
          "raw": ""
        },
        {
          "type": "calc",
          "latex": "\\frac{dV}{dx} = -w(x), \\quad \\frac{dM}{dx} = V(x)",
          "raw": ""
        },
        {
          "type": "ans",
          "latex": "V_{\\max} = 9\\text{ kN}, \\quad M_{\\max} = 6.75\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))",
          "raw": ""
        }
      ],
      "final_answers_math": [
        "V_{\\max} = 9\\text{ kN}, \\quad M_{\\max} = 6.75\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))"
      ]
    },
    {
      "id": "F7-17",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 17,
      "page_book": 398,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Draw the shear and moment diagrams for the beam.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_17.webp",
      "solution_raw": "V (kN)\nx (m)\n 9\n9\n3\n6\nM (kN°m)\nx (m)\n9\n3\n6\nFig. F7–17",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "การเขียนแผนภาพแรงเฉือน (V-x) และโมเมนต์ดัด (M-x):",
          "raw": "",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\text{คำนวณแรงปฏิกิริยาที่ฐานรองรับ และตัดพิจารณาแรงภายในตามฟังก์ชัน } x",
          "raw": ""
        },
        {
          "type": "calc",
          "latex": "\\frac{dV}{dx} = -w(x), \\quad \\frac{dM}{dx} = V(x)",
          "raw": ""
        },
        {
          "type": "ans",
          "latex": "V_{\\max} = 9\\text{ kN}, \\quad M_{\\max} = 9\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))",
          "raw": ""
        }
      ],
      "final_answers_math": [
        "V_{\\max} = 9\\text{ kN}, \\quad M_{\\max} = 9\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))"
      ]
    },
    {
      "id": "F7-18",
      "chapter": 7,
      "chapter_name_en": "Internal Forces",
      "chapter_name_th": "แรงภายใน",
      "number": 18,
      "page_book": 398,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Draw the shear and moment diagrams for the beam.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • วิเคราะห์แรงเฉือน (V) และโมเมนต์ดัด (M) ในคาน",
      "image": "images/problems/F7_18.webp",
      "solution_raw": "V (kN)\nx (m)\n 13.5\n13.5\n3\n6\nM (kN°m)\nx (m)\n27\n3\n6\nFig. F7–18 \nChapter 8",
      "final_answers": [],
      "theory_th": "แรงภายในในคาน (แรงแนวแกน \\(N\\), แรงเฉือน \\(V\\), โมเมนต์ดัด \\(M\\)) และความสัมพันธ์ \\(\\frac{dV}{dx} = -w(x), \\frac{dM}{dx} = V\\)",
      "formatted_steps": [
        {
          "type": "header",
          "text": "การเขียนแผนภาพแรงเฉือน (V-x) และโมเมนต์ดัด (M-x):",
          "raw": "",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\text{คำนวณแรงปฏิกิริยาที่ฐานรองรับ และตัดพิจารณาแรงภายในตามฟังก์ชัน } x",
          "raw": ""
        },
        {
          "type": "calc",
          "latex": "\\frac{dV}{dx} = -w(x), \\quad \\frac{dM}{dx} = V(x)",
          "raw": ""
        },
        {
          "type": "ans",
          "latex": "V_{\\max} = 13.5\\text{ kN}, \\quad M_{\\max} = 27\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))",
          "raw": ""
        }
      ],
      "final_answers_math": [
        "V_{\\max} = 13.5\\text{ kN}, \\quad M_{\\max} = 27\\text{ kN}\\cdot\\text{m} \\quad (\\text{ดูแผนภาพ } V(x) \\text{ และ } M(x))"
      ]
    },
    {
      "id": "F8-1",
      "chapter": 8,
      "chapter_name_en": "Friction",
      "chapter_name_th": "ความเสียดทาน",
      "number": 1,
      "page_book": 438,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the friction developed between the 50-kg \ncrate and the ground if a) P = 200 N, and b) P = 400 N. The \ncoefficients of static and kinetic friction between the crate \nand the ground are ms = 0.3 and mk = 0.2.",
      "question_th_summary": "วิเคราะห์แรงเสียดทานและตรวจสอบสภาวะเริ่มไถลหรือคว่ำ",
      "image": "images/problems/F8_1.webp",
      "solution_raw": "a)\n + c Fy = 0; N - 50(9.81) - 20013\n52 = 0\n \n \n N = 610.5 N\n \n \n +S Fx = 0; F - 20014\n52 = 0\n \n \n F = 160 N\n \n \nF 6 Fmax = ms N = 0.3(610.5) = 183.15 N, \n \n \ntherefore F = 160 N\nAns.\n \nb) \n + c Fy = 0; N - 50(9.81) - 40013\n52 = 0\n \n \n N = 730.5 N\n \n \n +S Fx = 0; F - 40014\n52 = 0\n \n \n F = 320 N\n \n \nF 7 Fmax = ms N = 0.3(730.5) = 219.15 N\n \n \nBlock slips\n \n \nF = ms N = 0.2(730.5) = 146 N\nAns.",
      "final_answers": [
        "therefore F = 160 N",
        "F = ms N = 0.2(730.5) = 146 N"
      ],
      "theory_th": "กฎของแรงเสียดทานสถิต: \\(F_{\\max} = \\mu_s N\\) และการตรวจสอบสภาวะเริ่มเคลื่อนที่ (Impending Motion)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "a)",
          "raw": "a)"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies N - 50(9.81) - 200\\left(\\frac{3}{5}\\right) = 0",
          "raw": "+ c Fy = 0; N - 50(9.81) - 200\\left(\\frac{3}{5}\\right) = 0"
        },
        {
          "type": "calc",
          "latex": "N = .5 N",
          "raw": "N = .5 N"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies F - 200\\left(\\frac{4}{5}\\right) = 0",
          "raw": "+S Fx = 0; F - 200\\left(\\frac{4}{5}\\right) = 0"
        },
        {
          "type": "calc",
          "latex": "F = 160 N",
          "raw": "F = 160 N"
        },
        {
          "type": "calc",
          "latex": "F 6 Fmax = \\mu_s N = 0.3(.5) = 183.15 N,",
          "raw": "F 6 Fmax = ms N = 0.3(.5) = 183.15 N,"
        },
        {
          "type": "ans",
          "latex": "therefore F = 160 N",
          "raw": "therefore F = 160 N"
        },
        {
          "type": "calc",
          "latex": "b)",
          "raw": "b)"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies N - 50(9.81) - 400\\left(\\frac{3}{5}\\right) = 0",
          "raw": "+ c Fy = 0; N - 50(9.81) - 400\\left(\\frac{3}{5}\\right) = 0"
        },
        {
          "type": "calc",
          "latex": "N = 730.5 N",
          "raw": "N = 730.5 N"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies F - 400\\left(\\frac{4}{5}\\right) = 0",
          "raw": "+S Fx = 0; F - 400\\left(\\frac{4}{5}\\right) = 0"
        },
        {
          "type": "calc",
          "latex": "F = 320 N",
          "raw": "F = 320 N"
        },
        {
          "type": "calc",
          "latex": "F 7 Fmax = \\mu_s N = 0.3(730.5) = 219.15 N",
          "raw": "F 7 Fmax = ms N = 0.3(730.5) = 219.15 N"
        },
        {
          "type": "calc",
          "latex": "Block slips",
          "raw": "Block slips"
        },
        {
          "type": "ans",
          "latex": "F = \\mu_s N = 0.2(730.5) = 146 N",
          "raw": "F = ms N = 0.2(730.5) = 146 N"
        }
      ],
      "final_answers_math": [
        "therefore F = 160 N",
        "F = \\mu_s N = 0.2(730.5) = 146 N"
      ]
    },
    {
      "id": "F8-2",
      "chapter": 8,
      "chapter_name_en": "Friction",
      "chapter_name_th": "ความเสียดทาน",
      "number": 2,
      "page_book": 438,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the minimum force P to prevent the \n30-kg rod AB from sliding. The contact surface at B is \nsmooth, whereas the coefficient of static friction between \nthe rod and the wall at A is ms = 0.2.",
      "question_th_summary": "วิเคราะห์แรงเสียดทานและตรวจสอบสภาวะเริ่มไถลหรือคว่ำ",
      "image": "images/problems/F8_2.webp",
      "solution_raw": "a+ MB = 0;\n \nNA(3) + 0.2NA(4) - 30(9.81)(2) = 0\n \nNA = 154.89 N\n \n +S Fx = 0; P - 154.89 = 0\n \n P = 154.89 N = 155 N\nAns.",
      "final_answers": [
        "P = 154.89 N = 155 N"
      ],
      "theory_th": "กฎของแรงเสียดทานสถิต: \\(F_{\\max} = \\mu_s N\\) และการตรวจสอบสภาวะเริ่มเคลื่อนที่ (Impending Motion)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{B} = 0 \\implies",
          "raw": "a+ MB = 0;"
        },
        {
          "type": "calc",
          "latex": "NA(3) + 0.2NA(4) - 30(9.81)(2) = 0",
          "raw": "NA(3) + 0.2NA(4) - 30(9.81)(2) = 0"
        },
        {
          "type": "calc",
          "latex": "NA = 154.89 N",
          "raw": "NA = 154.89 N"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies P - 154.89 = 0",
          "raw": "+S Fx = 0; P - 154.89 = 0"
        },
        {
          "type": "ans",
          "latex": "P = 154.89 N = 155 N",
          "raw": "P = 154.89 N = 155 N"
        }
      ],
      "final_answers_math": [
        "P = 154.89 N = 155 N"
      ]
    },
    {
      "id": "F8-3",
      "chapter": 8,
      "chapter_name_en": "Friction",
      "chapter_name_th": "ความเสียดทาน",
      "number": 3,
      "page_book": 438,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the maximum force P that can be applied \nwithout causing the two 50-kg crates to move. The coefficient \nof static friction between each crate and the ground is \nms = 0.25.",
      "question_th_summary": "วิเคราะห์แรงเสียดทานและตรวจสอบสภาวะเริ่มไถลหรือคว่ำ",
      "image": "images/problems/F8_3.webp",
      "solution_raw": "Crate A\n \n + c Fy = 0; NA - 50(9.81) = 0\n \n NA = 490.5 N\n \n S\n+ Fx = 0; T - 0.25(490.5) = 0\n \n T = 122.62 N\n \nCrate B\n \n+ c Fy = 0;  NB + P sin 30° - 50(9.81) = 0\n \n NB = 490.5 - 0.5P\n \nS\n+ Fx = 0;\n \nP cos 30° - 0.25(490.5 - 0.5 P) - 122.62 = 0\n \nP = 247 N\nAns.",
      "final_answers": [
        "P = 247 N"
      ],
      "theory_th": "กฎของแรงเสียดทานสถิต: \\(F_{\\max} = \\mu_s N\\) และการตรวจสอบสภาวะเริ่มเคลื่อนที่ (Impending Motion)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Crate A",
          "raw": "Crate A"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies NA - 50(9.81) = 0",
          "raw": "+ c Fy = 0; NA - 50(9.81) = 0"
        },
        {
          "type": "calc",
          "latex": "NA = 490.5 N",
          "raw": "NA = 490.5 N"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ F_x = 0; T - 0.25(490.5) = 0",
          "raw": "+ Fx = 0; T - 0.25(490.5) = 0"
        },
        {
          "type": "calc",
          "latex": "T = 122.62 N",
          "raw": "T = 122.62 N"
        },
        {
          "type": "calc",
          "latex": "Crate B",
          "raw": "Crate B"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies  NB + P \\sin 30^\\circ - 50(9.81) = 0",
          "raw": "+ c Fy = 0;  NB + P sin 30° - 50(9.81) = 0"
        },
        {
          "type": "calc",
          "latex": "NB = 490.5 - 0.5P",
          "raw": "NB = 490.5 - 0.5P"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ F_x = 0;",
          "raw": "+ Fx = 0;"
        },
        {
          "type": "calc",
          "latex": "P \\cos 30^\\circ - 0.25(490.5 - 0.5 P) - 122.62 = 0",
          "raw": "P cos 30° - 0.25(490.5 - 0.5 P) - 122.62 = 0"
        },
        {
          "type": "ans",
          "latex": "P = 247 N",
          "raw": "P = 247 N"
        }
      ],
      "final_answers_math": [
        "P = 247 N"
      ]
    },
    {
      "id": "F8-4",
      "chapter": 8,
      "chapter_name_en": "Friction",
      "chapter_name_th": "ความเสียดทาน",
      "number": 4,
      "page_book": 438,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "If the coefficient of static friction at contact points A \nand B is ms = 0.3, determine the maximum force P that can \nbe applied without causing the 100-kg spool to move.",
      "question_th_summary": "วิเคราะห์แรงเสียดทานและตรวจสอบสภาวะเริ่มไถลหรือคว่ำ",
      "image": "images/problems/F8_4.webp",
      "solution_raw": "+S Fx = 0; NA - 0.3NB = 0\n \n+ c Fy = 0;\n \nNB + 0.3NA + P - 100(9.81) = 0\n \na+ MO = 0;\n \n P(0.6) - 0.3NB(0.9) - 0.3 NA(0.9) = 0\n \nNA = 175.70 N NB = 585.67 N\n \nP = 343 N\nAns.",
      "final_answers": [
        "P = 343 N"
      ],
      "theory_th": "กฎของแรงเสียดทานสถิต: \\(F_{\\max} = \\mu_s N\\) และการตรวจสอบสภาวะเริ่มเคลื่อนที่ (Impending Motion)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies NA - 0.3NB = 0",
          "raw": "+S Fx = 0; NA - 0.3NB = 0"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies",
          "raw": "+ c Fy = 0;"
        },
        {
          "type": "calc",
          "latex": "NB + 0.3NA + P - 100(9.81) = 0",
          "raw": "NB + 0.3NA + P - 100(9.81) = 0"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{O} = 0 \\implies",
          "raw": "a+ MO = 0;"
        },
        {
          "type": "calc",
          "latex": "P(0.6) - 0.3NB(0.9) - 0.3 NA(0.9) = 0",
          "raw": "P(0.6) - 0.3NB(0.9) - 0.3 NA(0.9) = 0"
        },
        {
          "type": "calc",
          "latex": "NA = 175.70 N NB = 585.67 N",
          "raw": "NA = 175.70 N NB = 585.67 N"
        },
        {
          "type": "ans",
          "latex": "P = 343 N",
          "raw": "P = 343 N"
        }
      ],
      "final_answers_math": [
        "P = 343 N"
      ]
    },
    {
      "id": "F8-5",
      "chapter": 8,
      "chapter_name_en": "Friction",
      "chapter_name_th": "ความเสียดทาน",
      "number": 5,
      "page_book": 438,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the maximum force P that can be \napplied without causing movement of the 250-lb crate that \nhas a center of gravity at G. The coefficient of static friction \nat the floor is ms = 0.4.",
      "question_th_summary": "วิเคราะห์แรงเสียดทานและตรวจสอบสภาวะเริ่มไถลหรือคว่ำ • หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F8_5.webp",
      "solution_raw": "If slipping occurs:\n \n+ c Fy = 0; Nc - 250 lb = 0; Nc = 250 lb\n \nS\n+ Fx = 0; P - 0.4(250) = 0; P = 100 lb\n \nIf tipping occurs:\n \na+ MA = 0; -P(4.5) + 250(1.5) = 0\n \nP = 83.3 lb \nAns.",
      "final_answers": [
        "P = 83.3 lb"
      ],
      "theory_th": "กฎของแรงเสียดทานสถิต: \\(F_{\\max} = \\mu_s N\\) และการตรวจสอบสภาวะเริ่มเคลื่อนที่ (Impending Motion)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "If slipping occurs:",
          "raw": "If slipping occurs:"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies Nc - 250 lb = 0; Nc = 250 lb",
          "raw": "+ c Fy = 0; Nc - 250 lb = 0; Nc = 250 lb"
        },
        {
          "type": "calc",
          "latex": "S",
          "raw": "S"
        },
        {
          "type": "calc",
          "latex": "+ F_x = 0; P - 0.4(250) = 0; P = 100 lb",
          "raw": "+ Fx = 0; P - 0.4(250) = 0; P = 100 lb"
        },
        {
          "type": "calc",
          "latex": "If tipping occurs:",
          "raw": "If tipping occurs:"
        },
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies -P(4.5) + 250(1.5) = 0",
          "raw": "a+ MA = 0; -P(4.5) + 250(1.5) = 0"
        },
        {
          "type": "ans",
          "latex": "P = 83.3 lb",
          "raw": "P = 83.3 lb"
        }
      ],
      "final_answers_math": [
        "P = 83.3 lb"
      ]
    },
    {
      "id": "F8-6",
      "chapter": 8,
      "chapter_name_en": "Friction",
      "chapter_name_th": "ความเสียดทาน",
      "number": 6,
      "page_book": 439,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the minimum coefficient of static friction \nbetween the uniform 50-kg spool and the wall so that the \nspool does not slip.",
      "question_th_summary": "วิเคราะห์แรงเสียดทานและตรวจสอบสภาวะเริ่มไถลหรือคว่ำ",
      "image": "images/problems/F8_6.webp",
      "solution_raw": "a+ MA = 0; 490.510.62 - T cos 60°10.3 cos 60° + 0.62\n \n- T sin 60° 10.3 sin 60°2 = 0\nT = 490.5 N\n\n +S Fx = 0; 490.5 sin 60° - NA = 0; NA = 424.8 N\n\n + c Fy = 0; ms1424.82 + 490.5 cos 60° - 490.5 = 0\n \nms = 0.577\nAns.\n\n \nFundamental Problems \n635",
      "final_answers": [
        "ms = 0.577"
      ],
      "theory_th": "กฎของแรงเสียดทานสถิต: \\(F_{\\max} = \\mu_s N\\) และการตรวจสอบสภาวะเริ่มเคลื่อนที่ (Impending Motion)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\curvearrowleft +\\Sigma M_{A} = 0 \\implies 490.510.62 - T \\cos 60^\\circ10.3 \\cos 60^\\circ + 0.62",
          "raw": "a+ MA = 0; 490.510.62 - T cos 60°10.3 cos 60° + 0.62"
        },
        {
          "type": "calc",
          "latex": "- T \\sin 60^\\circ 10.3 \\sin 60^\\circ2 = 0",
          "raw": "- T sin 60° 10.3 sin 60°2 = 0"
        },
        {
          "type": "calc",
          "latex": "T = 490.5 N",
          "raw": "T = 490.5 N"
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies 490.5 \\sin 60^\\circ - NA = 0; NA = 424.8 N",
          "raw": "+S Fx = 0; 490.5 sin 60° - NA = 0; NA = 424.8 N"
        },
        {
          "type": "calc",
          "latex": "+\\uparrow \\Sigma F_y = 0 \\implies ms1424.82 + 490.5 \\cos 60^\\circ - 490.5 = 0",
          "raw": "+ c Fy = 0; ms1424.82 + 490.5 cos 60° - 490.5 = 0"
        },
        {
          "type": "ans",
          "latex": "\\mu_s = 0.577",
          "raw": "ms = 0.577"
        }
      ],
      "final_answers_math": [
        "\\mu_s = 0.577"
      ]
    },
    {
      "id": "F8-7",
      "chapter": 8,
      "chapter_name_en": "Friction",
      "chapter_name_th": "ความเสียดทาน",
      "number": 7,
      "page_book": 439,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Blocks A, B, and C have weights of 50 N, 25 N, and \n15 N, respectively. Determine the smallest horizontal force P \nthat will cause impending motion. The coefficient of static \nfriction between A and B is ms = 0.3, between B and C, \nm=",
      "question_th_summary": "วิเคราะห์แรงเสียดทานและตรวจสอบสภาวะเริ่มไถลหรือคว่ำ",
      "image": "images/problems/F8_7.webp",
      "solution_raw": "\u0007A will not move. Assume B is about to slip on C \nand A, and C is stationary.\n \n+S Fx = 0; P - 0.31502 - 0.41752; P = 45 N\n \n\u0007Assume C is about to slip and B does not slip on \nC, but is about to slip at A.\n \n+S Fx = 0; P - 0.31502 - 0.351902 = 0\n \n P = 46.5 N 7 45 N\n \n P = 45 N\n\nAns.",
      "final_answers": [],
      "theory_th": "กฎของแรงเสียดทานสถิต: \\(F_{\\max} = \\mu_s N\\) และการตรวจสอบสภาวะเริ่มเคลื่อนที่ (Impending Motion)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\u0007A will not move. Assume B is about to slip on C",
          "raw": "\u0007A will not move. Assume B is about to slip on C"
        },
        {
          "type": "calc",
          "latex": "and A, and C is stationary.",
          "raw": "and A, and C is stationary."
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies P - 0.31502 - 0.4\\left(\\frac{7}{5}\\right); P = 45 N",
          "raw": "+S Fx = 0; P - 0.31502 - 0.4\\left(\\frac{7}{5}\\right); P = 45 N"
        },
        {
          "type": "calc",
          "latex": "\u0007Assume C is about to slip and B does not slip on",
          "raw": "\u0007Assume C is about to slip and B does not slip on"
        },
        {
          "type": "calc",
          "latex": "C, but is about to slip at A.",
          "raw": "C, but is about to slip at A."
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies P - 0.31502 - 0.351902 = 0",
          "raw": "+S Fx = 0; P - 0.31502 - 0.351902 = 0"
        },
        {
          "type": "calc",
          "latex": "P = 46.5 N 7 45 N",
          "raw": "P = 46.5 N 7 45 N"
        },
        {
          "type": "ans",
          "latex": "P = 45 N",
          "raw": "P = 45 N"
        }
      ],
      "final_answers_math": [
        "P = 45 N"
      ]
    },
    {
      "id": "F8-8",
      "chapter": 8,
      "chapter_name_en": "Friction",
      "chapter_name_th": "ความเสียดทาน",
      "number": 8,
      "page_book": 439,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "If the coefficient of static friction at all contacting \nsurfaces is ms, determine the inclination u at which the \nidentical blocks, each of weight W, begin to slide.",
      "question_th_summary": "วิเคราะห์แรงเสียดทานและตรวจสอบสภาวะเริ่มไถลหรือคว่ำ",
      "image": "images/problems/F8_8.webp",
      "solution_raw": "\u0007A is about to move down the plane and B moves \nupward.\n \nBlock A\n \n+ a Fy = 0; N = W cos u\n \n+ Q Fx = 0; T + ms1W cos u2 - W sin u = 0\n \nT = W sin u - ms W cos u\n(1)\n \nBlock B\n \n+ a Fy = 0; N\u001d = 2 W cos u\n \n+ Q Fx = 0; 2T - msW cos u - ms12W cos u2\n\n- W sin u = 0\n \nUsing Eq.(1);\n \nu = tan -1 5ms\nAns.",
      "final_answers": [
        "u = tan -1 5ms"
      ],
      "theory_th": "กฎของแรงเสียดทานสถิต: \\(F_{\\max} = \\mu_s N\\) และการตรวจสอบสภาวะเริ่มเคลื่อนที่ (Impending Motion)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\u0007A is about to move down the plane and B moves",
          "raw": "\u0007A is about to move down the plane and B moves"
        },
        {
          "type": "calc",
          "latex": "upward.",
          "raw": "upward."
        },
        {
          "type": "calc",
          "latex": "Block A",
          "raw": "Block A"
        },
        {
          "type": "calc",
          "latex": "+ \\alpha F_y = 0; N = W \\cos \\theta",
          "raw": "+ a Fy = 0; N = W cos u"
        },
        {
          "type": "calc",
          "latex": "+ Q F_x = 0; T + ms1W \\cos u2 - W \\sin \\theta = 0",
          "raw": "+ Q Fx = 0; T + ms1W cos u2 - W sin u = 0"
        },
        {
          "type": "calc",
          "latex": "T = W \\sin \\theta - \\mu_s W \\cos \\theta",
          "raw": "T = W sin u - ms W cos u"
        },
        {
          "type": "calc",
          "latex": "(1)",
          "raw": "(1)"
        },
        {
          "type": "calc",
          "latex": "Block B",
          "raw": "Block B"
        },
        {
          "type": "calc",
          "latex": "+ \\alpha F_y = 0; N\u001d = 2W \\cos \\theta",
          "raw": "+ a Fy = 0; N\u001d = 2 W cos u"
        },
        {
          "type": "calc",
          "latex": "+ Q F_x = 0; 2T - msW \\cos \\theta - ms12W \\cos u2",
          "raw": "+ Q Fx = 0; 2T - msW cos u - ms12W cos u2"
        },
        {
          "type": "calc",
          "latex": "- W \\sin \\theta = 0",
          "raw": "- W sin u = 0"
        },
        {
          "type": "calc",
          "latex": "Using Eq.(1);",
          "raw": "Using Eq.(1);"
        },
        {
          "type": "ans",
          "latex": "\\theta = \\tan -1 5ms",
          "raw": "u = tan -1 5ms"
        }
      ],
      "final_answers_math": [
        "\\theta = \\tan -1 5ms"
      ]
    },
    {
      "id": "F8-9",
      "chapter": 8,
      "chapter_name_en": "Friction",
      "chapter_name_th": "ความเสียดทาน",
      "number": 9,
      "page_book": 439,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Blocks A and B have a mass of 7 kg and 10 kg, \nrespectively. Using the coefficients of static friction \nindicated, determine the largest force P which can be \napplied to the cord without causing motion. There are \npulleys at C and D.",
      "question_th_summary": "วิเคราะห์แรงเสียดทานและตรวจสอบสภาวะเริ่มไถลหรือคว่ำ",
      "image": "images/problems/F8_9.webp",
      "solution_raw": "Assume B is about to slip on A, FB = 0.3 NB.\n \n+S Fx = 0; P - 0.3110219.812 = 0\nP = 29.4 N\n \nAssume B is about to tip on A, x = 0.\n \na + MO = 0; 1019.81210.152 - P10.42 = 0\nP = 36.8 N\n \nAssume A is about to slip, FA = 0.1 NA.\n \n+S Fx = 0 P - 0.13719.812 + 1019.812\n 4 = 0\nP = 16.7 N\n \nChoose the smallest result. P = 16.7 N\nAns.\nChapter 9",
      "final_answers": [
        "Choose the smallest result. P = 16.7 N"
      ],
      "theory_th": "กฎของแรงเสียดทานสถิต: \\(F_{\\max} = \\mu_s N\\) และการตรวจสอบสภาวะเริ่มเคลื่อนที่ (Impending Motion)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Assume B is about to slip on A, FB = 0.3 NB.",
          "raw": "Assume B is about to slip on A, FB = 0.3 NB."
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies P - 0.3110219.812 = 0",
          "raw": "+S Fx = 0; P - 0.3110219.812 = 0"
        },
        {
          "type": "calc",
          "latex": "P = 29.4 N",
          "raw": "P = 29.4 N"
        },
        {
          "type": "calc",
          "latex": "Assume B is about to tip on A, x = 0.",
          "raw": "Assume B is about to tip on A, x = 0."
        },
        {
          "type": "calc",
          "latex": "a + M_O = 0; 1019.81210.152 - P10.42 = 0",
          "raw": "a + MO = 0; 1019.81210.152 - P10.42 = 0"
        },
        {
          "type": "calc",
          "latex": "P = 36.8 N",
          "raw": "P = 36.8 N"
        },
        {
          "type": "calc",
          "latex": "Assume A is about to slip, FA = 0.1 NA.",
          "raw": "Assume A is about to slip, FA = 0.1 NA."
        },
        {
          "type": "calc",
          "latex": "\\xrightarrow{+} \\Sigma F_x = 0 \\implies P - 0.13719.812 + 1019.812",
          "raw": "+S Fx = 0 P - 0.13719.812 + 1019.812"
        },
        {
          "type": "calc",
          "latex": "4 = 0",
          "raw": "4 = 0"
        },
        {
          "type": "calc",
          "latex": "P = 16.7 N",
          "raw": "P = 16.7 N"
        },
        {
          "type": "ans",
          "latex": "Choose the smallest result. P = 16.7 N",
          "raw": "Choose the smallest result. P = 16.7 N"
        }
      ],
      "final_answers_math": [
        "Choose the smallest result. P = 16.7 N"
      ]
    },
    {
      "id": "F9-1",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 1,
      "page_book": 502,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the centroid (x, y ) of the shaded area.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_1.webp",
      "solution_raw": "x = LA\nx dA\nLA\n dA\n=\n1\n2 L\n1 m\n0\n y2/3 dy\nL\n1 m\n0\ny1/3dy\n= 0.4 m\nAns.\n \ny = LA\n y dA\nLA\n dA\n= L\n1 m\n0\n y4/3 dy\nL\n1 m\n0\ny1/3dy\n= 0.571 m\nAns.",
      "final_answers": [
        "= 0.4 m",
        "= 0.571 m"
      ],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}",
          "raw": "\\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}"
        },
        {
          "type": "calc",
          "latex": "=",
          "raw": "="
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "2 L",
          "raw": "2 L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "y2/3 dy",
          "raw": "y2/3 dy"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "y1/3dy",
          "raw": "y1/3dy"
        },
        {
          "type": "ans",
          "latex": "= 0.4 m",
          "raw": "= 0.4 m"
        },
        {
          "type": "calc",
          "latex": "\\bar{y} = \\frac{\\int_A y\\, dA}{\\int_A dA}",
          "raw": "\\bar{y} = \\frac{\\int_A y\\, dA}{\\int_A dA}"
        },
        {
          "type": "calc",
          "latex": "= L",
          "raw": "= L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "y4/3 dy",
          "raw": "y4/3 dy"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "y1/3dy",
          "raw": "y1/3dy"
        },
        {
          "type": "ans",
          "latex": "= 0.571 m",
          "raw": "= 0.571 m"
        }
      ],
      "final_answers_math": [
        "= 0.4 m",
        "= 0.571 m"
      ]
    },
    {
      "id": "F9-2",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 2,
      "page_book": 502,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the centroid (x, y ) of the shaded area.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_2.webp",
      "solution_raw": "x = LA\n x dA\nLA\n dA\n= L\n1 m\n0\n x(x3 dx)\nL\n1 m\n0\n x3 dx\n \n = 0.8 m\n\nAns.\n \n y = LA\n y dA\nLA\n dA\n= L\n1 m\n0\n1\n2 x31x3 dx2\nL\n1 m\n0\n x3 dx\n \n = 0.286 m\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}",
          "raw": "\\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}"
        },
        {
          "type": "calc",
          "latex": "= L",
          "raw": "= L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "x(x3 dx)",
          "raw": "x(x3 dx)"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "x3 dx",
          "raw": "x3 dx"
        },
        {
          "type": "ans",
          "latex": "= 0.8 m",
          "raw": "= 0.8 m"
        },
        {
          "type": "calc",
          "latex": "\\bar{y} = \\frac{\\int_A y\\, dA}{\\int_A dA}",
          "raw": "\\bar{y} = \\frac{\\int_A y\\, dA}{\\int_A dA}"
        },
        {
          "type": "calc",
          "latex": "= L",
          "raw": "= L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "2 x31x3 dx2",
          "raw": "2 x31x3 dx2"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "x3 dx",
          "raw": "x3 dx"
        },
        {
          "type": "ans",
          "latex": "= 0.286 m",
          "raw": "= 0.286 m"
        }
      ],
      "final_answers_math": [
        "= 0.8 m",
        "= 0.286 m"
      ]
    },
    {
      "id": "F9-3",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 3,
      "page_book": 502,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the centroid y of the shaded area.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_3.webp",
      "solution_raw": "y = LA\n y dA\n \nLA\n dA\n= L\n2 m\n0\n ya2a y1/2\n22\nb bdy\nL\n2 m\n0\n2a y1/2\n22\nbdy\n \n = 1.2 m\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "\\bar{y} = \\frac{\\int_A y\\, dA}{\\int_A dA}",
          "raw": "\\bar{y} = \\frac{\\int_A y\\, dA}{\\int_A dA}"
        },
        {
          "type": "calc",
          "latex": "= L",
          "raw": "= L"
        },
        {
          "type": "calc",
          "latex": "2 m",
          "raw": "2 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "ya2a y1/2",
          "raw": "ya2a y1/2"
        },
        {
          "type": "calc",
          "latex": "22",
          "raw": "22"
        },
        {
          "type": "calc",
          "latex": "\\beta bdy",
          "raw": "b bdy"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "2 m",
          "raw": "2 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "2a y1/2",
          "raw": "2a y1/2"
        },
        {
          "type": "calc",
          "latex": "22",
          "raw": "22"
        },
        {
          "type": "calc",
          "latex": "bdy",
          "raw": "bdy"
        },
        {
          "type": "ans",
          "latex": "= 1.2 m",
          "raw": "= 1.2 m"
        }
      ],
      "final_answers_math": [
        "= 1.2 m"
      ]
    },
    {
      "id": "F9-4",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 4,
      "page_book": 502,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Locate the center of mass x of the straight rod if its \nmass per unit length is given by m = m0(1 + x2>L2).",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_4.webp",
      "solution_raw": "x = Lm\n x dm \nLm\ndm\n= L\nL\n0\nxJm0¢1 + x2\nL2≤dx R\nL\nL\n0\nm0¢1 + x2\nL2≤dx\n \n = 9\n16 L\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "x = Lm",
          "raw": "x = Lm"
        },
        {
          "type": "calc",
          "latex": "x dm",
          "raw": "x dm"
        },
        {
          "type": "calc",
          "latex": "Lm",
          "raw": "Lm"
        },
        {
          "type": "calc",
          "latex": "dm",
          "raw": "dm"
        },
        {
          "type": "calc",
          "latex": "= L",
          "raw": "= L"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "xJm0¢1 + x2",
          "raw": "xJm0¢1 + x2"
        },
        {
          "type": "calc",
          "latex": "L2≤dx R",
          "raw": "L2≤dx R"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "m0¢1 + x2",
          "raw": "m0¢1 + x2"
        },
        {
          "type": "calc",
          "latex": "L2≤dx",
          "raw": "L2≤dx"
        },
        {
          "type": "calc",
          "latex": "= 9",
          "raw": "= 9"
        },
        {
          "type": "ans",
          "latex": "16 L",
          "raw": "16 L"
        }
      ],
      "final_answers_math": [
        "16 L"
      ]
    },
    {
      "id": "F9-5",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 5,
      "page_book": 502,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Locate the centroid y of the homogeneous solid \nformed by revolving the shaded area about the y axis.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_5.webp",
      "solution_raw": "y = LV\n y dV\nLV\n dV\n= L\n1 m\n0\n y¢p\n4 ydy≤\nL\n1 m\n0\n p\n4 y dy\n \n = 0.667 m\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "y = LV",
          "raw": "y = LV"
        },
        {
          "type": "calc",
          "latex": "y dV",
          "raw": "y dV"
        },
        {
          "type": "calc",
          "latex": "LV",
          "raw": "LV"
        },
        {
          "type": "calc",
          "latex": "dV",
          "raw": "dV"
        },
        {
          "type": "calc",
          "latex": "= L",
          "raw": "= L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "y¢p",
          "raw": "y¢p"
        },
        {
          "type": "calc",
          "latex": "4 ydy≤",
          "raw": "4 ydy≤"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "p",
          "raw": "p"
        },
        {
          "type": "calc",
          "latex": "4 y dy",
          "raw": "4 y dy"
        },
        {
          "type": "ans",
          "latex": "= 0. m",
          "raw": "= 0. m"
        }
      ],
      "final_answers_math": [
        "= 0. m"
      ]
    },
    {
      "id": "F9-6",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 6,
      "page_book": 502,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Locate the centroid z of the homogeneous solid \nformed by revolving the shaded area about the z axis.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_6.webp",
      "solution_raw": "z = LV\n z dV\nLV\n dV\n= L\n2 ft\n0\n z c 9p\n64 (4 - z)2 dz d\nL\n2 ft\n0\n 9p\n64 (4 - z)2 dz\n \n = 0.786 ft\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "z = LV",
          "raw": "z = LV"
        },
        {
          "type": "calc",
          "latex": "z dV",
          "raw": "z dV"
        },
        {
          "type": "calc",
          "latex": "LV",
          "raw": "LV"
        },
        {
          "type": "calc",
          "latex": "dV",
          "raw": "dV"
        },
        {
          "type": "calc",
          "latex": "= L",
          "raw": "= L"
        },
        {
          "type": "calc",
          "latex": "2 ft",
          "raw": "2 ft"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "z c 9p",
          "raw": "z c 9p"
        },
        {
          "type": "calc",
          "latex": "64 (4 - z)^2 dz d",
          "raw": "64 (4 - z)2 dz d"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "2 ft",
          "raw": "2 ft"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "calc",
          "latex": "9p",
          "raw": "9p"
        },
        {
          "type": "calc",
          "latex": "64 (4 - z)^2 dz",
          "raw": "64 (4 - z)2 dz"
        },
        {
          "type": "ans",
          "latex": "= 0.786 ft",
          "raw": "= 0.786 ft"
        }
      ],
      "final_answers_math": [
        "= 0.786 ft"
      ]
    },
    {
      "id": "F9-7",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 7,
      "page_book": 515,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Locate the centroid (x, y, z ) of the wire bent in the \nshape shown.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_7.webp",
      "solution_raw": "x = x L\n L\n= 150(300) + 300(600) + 300(400)\n300 + 600 + 400\n \n = 265 mm\n\nAns.\n \n y = y L\n L\n= 0(300) + 300(600) + 600(400)\n300 + 600 + 400\n \n = 323 mm\n\nAns.\n \n z = z L\n L\n= 0(300) + 0(600) + (-200)(400)\n300 + 600 + 400\n \n = -61.5 mm\n Ans.\n\n636 \nPartial Solutions And Answers\nChapter 10",
      "final_answers": [
        "= -61.5 mm",
        "Partial Solutions And wers"
      ],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "x = x L",
          "raw": "x = x L"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "= 150(300) + 300() + 300(400)",
          "raw": "= 150(300) + 300() + 300(400)"
        },
        {
          "type": "calc",
          "latex": "300 +  + 400",
          "raw": "300 +  + 400"
        },
        {
          "type": "ans",
          "latex": "= 265 mm",
          "raw": "= 265 mm"
        },
        {
          "type": "calc",
          "latex": "y = y L",
          "raw": "y = y L"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "= 0(300) + 300() + (400)",
          "raw": "= 0(300) + 300() + (400)"
        },
        {
          "type": "calc",
          "latex": "300 +  + 400",
          "raw": "300 +  + 400"
        },
        {
          "type": "ans",
          "latex": "= 323 mm",
          "raw": "= 323 mm"
        },
        {
          "type": "calc",
          "latex": "z = z L",
          "raw": "z = z L"
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "= 0(300) + 0() + (-200)(400)",
          "raw": "= 0(300) + 0() + (-200)(400)"
        },
        {
          "type": "calc",
          "latex": "300 +  + 400",
          "raw": "300 +  + 400"
        },
        {
          "type": "ans",
          "latex": "= -61.5 mm",
          "raw": "= -61.5 mm"
        }
      ],
      "final_answers_math": [
        "= 265 mm",
        "= 323 mm",
        "= -61.5 mm"
      ]
    },
    {
      "id": "F9-8",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 8,
      "page_book": 515,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Locate the centroid y of the beam’s cross-sectional \narea.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_8.webp",
      "solution_raw": "y = y A\n A\n= 150[300(50)] + 325[50(300)]\n300(50) + 50(300)\n \n = 237.5 mm\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "y = y A",
          "raw": "y = y A"
        },
        {
          "type": "calc",
          "latex": "A",
          "raw": "A"
        },
        {
          "type": "calc",
          "latex": "= 150[300(50)] + 325[50(300)]",
          "raw": "= 150[300(50)] + 325[50(300)]"
        },
        {
          "type": "calc",
          "latex": "300(50) + 50(300)",
          "raw": "300(50) + 50(300)"
        },
        {
          "type": "ans",
          "latex": "= 237.5 mm",
          "raw": "= 237.5 mm"
        }
      ],
      "final_answers_math": [
        "= 237.5 mm"
      ]
    },
    {
      "id": "F9-9",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 9,
      "page_book": 515,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Locate the centroid y of the beam’s cross-sectional area.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_9.webp",
      "solution_raw": "y = y A\n A\n= 100[2(200)(50)] + 225[50(400)]\n2(200)(50) + 50(400)\n \n = 162.5 mm\nAns.",
      "final_answers": [
        "= 162.5 mm"
      ],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "y = y A",
          "raw": "y = y A"
        },
        {
          "type": "calc",
          "latex": "A",
          "raw": "A"
        },
        {
          "type": "calc",
          "latex": "= 100[2(200)(50)] + 225[50(400)]",
          "raw": "= 100[2(200)(50)] + 225[50(400)]"
        },
        {
          "type": "calc",
          "latex": "2(200)(50) + 50(400)",
          "raw": "2(200)(50) + 50(400)"
        },
        {
          "type": "ans",
          "latex": "= 162.5 mm",
          "raw": "= 162.5 mm"
        }
      ],
      "final_answers_math": [
        "= 162.5 mm"
      ]
    },
    {
      "id": "F9-10",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 10,
      "page_book": 515,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Locate the centroid (x, y) of the cross-sectional \narea.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_10.webp",
      "solution_raw": "x = x A\n A\n= 0.25[4(0.5)] + 1.75[0.5(2.5)]\n4(0.5) + 0.5(2.5)\n \n = 0.827 in.\n\nAns.\n \n y = y A\n A\n= 2[4(0.5)] + 0.25[(0.5)(2.5)]\n4(0.5) + (0.5)(2.5)\n \n = 1.33 in.\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "x = x A",
          "raw": "x = x A"
        },
        {
          "type": "calc",
          "latex": "A",
          "raw": "A"
        },
        {
          "type": "calc",
          "latex": "= 0.25[4(0.5)] + 1.75[0.5(2.5)]",
          "raw": "= 0.25[4(0.5)] + 1.75[0.5(2.5)]"
        },
        {
          "type": "calc",
          "latex": "4(0.5) + 0.5(2.5)",
          "raw": "4(0.5) + 0.5(2.5)"
        },
        {
          "type": "ans",
          "latex": "= 0.827 in.",
          "raw": "= 0.827 in."
        },
        {
          "type": "calc",
          "latex": "y = y A",
          "raw": "y = y A"
        },
        {
          "type": "calc",
          "latex": "A",
          "raw": "A"
        },
        {
          "type": "calc",
          "latex": "= 2[4(0.5)] + 0.25[(0.5)(2.5)]",
          "raw": "= 2[4(0.5)] + 0.25[(0.5)(2.5)]"
        },
        {
          "type": "calc",
          "latex": "4(0.5) + (0.5)(2.5)",
          "raw": "4(0.5) + (0.5)(2.5)"
        },
        {
          "type": "ans",
          "latex": "= 1.33 in.",
          "raw": "= 1.33 in."
        }
      ],
      "final_answers_math": [
        "= 0.827 in.",
        "= 1.33 in."
      ]
    },
    {
      "id": "F9-11",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 11,
      "page_book": 515,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Locate the center of mass (x, y, z ) of the ­ \nhomo­geneous solid block.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_11.webp",
      "solution_raw": "x = x V\n V\n= 1[2(7)(6)] + 4[4(2)(3)]\n2(7)(6) + 4(2)(3)\n \n = 1.67 ft\n\nAns.\n \n y = y V\n V\n= 3.5[2(7)(6)] + 1[4(2)(3)]\n2(7)(6) + 4(2)(3)\n \n = 2.94 ft\n\nAns.\n \n z = z V\n V\n= 3[2(7)(6)] + 1.5[4(2)(3)]\n2(7)(6) + 4(2)(3)\n \n = 2.67 ft\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "x = x V",
          "raw": "x = x V"
        },
        {
          "type": "calc",
          "latex": "V",
          "raw": "V"
        },
        {
          "type": "calc",
          "latex": "= 1[2(7)(6)] + 4[4(2)(3)]",
          "raw": "= 1[2(7)(6)] + 4[4(2)(3)]"
        },
        {
          "type": "calc",
          "latex": "2(7)(6) + 4(2)(3)",
          "raw": "2(7)(6) + 4(2)(3)"
        },
        {
          "type": "ans",
          "latex": "= 1.67 ft",
          "raw": "= 1.67 ft"
        },
        {
          "type": "calc",
          "latex": "y = y V",
          "raw": "y = y V"
        },
        {
          "type": "calc",
          "latex": "V",
          "raw": "V"
        },
        {
          "type": "calc",
          "latex": "= 3.5[2(7)(6)] + 1[4(2)(3)]",
          "raw": "= 3.5[2(7)(6)] + 1[4(2)(3)]"
        },
        {
          "type": "calc",
          "latex": "2(7)(6) + 4(2)(3)",
          "raw": "2(7)(6) + 4(2)(3)"
        },
        {
          "type": "ans",
          "latex": "= 2.94 ft",
          "raw": "= 2.94 ft"
        },
        {
          "type": "calc",
          "latex": "z = z V",
          "raw": "z = z V"
        },
        {
          "type": "calc",
          "latex": "V",
          "raw": "V"
        },
        {
          "type": "calc",
          "latex": "= 3[2(7)(6)] + 1.5[4(2)(3)]",
          "raw": "= 3[2(7)(6)] + 1.5[4(2)(3)]"
        },
        {
          "type": "calc",
          "latex": "2(7)(6) + 4(2)(3)",
          "raw": "2(7)(6) + 4(2)(3)"
        },
        {
          "type": "ans",
          "latex": "= 2.67 ft",
          "raw": "= 2.67 ft"
        }
      ],
      "final_answers_math": [
        "= 1.67 ft",
        "= 2.94 ft",
        "= 2.67 ft"
      ]
    },
    {
      "id": "F9-12",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 12,
      "page_book": 515,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the center of mass (x, y, z ) of the \nhomogeneous solid block.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_12.webp",
      "solution_raw": "x = x V\n V\n=\n0.25[0.5(2.5)(1.8)] + 0.25J 1\n2(1.5)(1.8)(0.5) R + (1.0)J 1\n2(1.5)(1.8)(0.5) R\n0.5(2.5)(1.8) + 1\n2 (1.5)(1.8)(0.5) + 1\n2(1.5)(1.8)(0.5)\n \n = 0.391 m\n\nAns.\n \n y = y V\n V\n= 5.00625\n3.6\n= 1.39 m\nAns.\n \n z = z V\n V\n= 2.835\n3.6\n= 0.7875 m\nAns.",
      "final_answers": [
        "= 1.39 m",
        "= 0.7875 m"
      ],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "x = x V",
          "raw": "x = x V"
        },
        {
          "type": "calc",
          "latex": "V",
          "raw": "V"
        },
        {
          "type": "calc",
          "latex": "=",
          "raw": "="
        },
        {
          "type": "calc",
          "latex": "0.25[0.5(2.5)(1.8)] + 0.25J 1",
          "raw": "0.25[0.5(2.5)(1.8)] + 0.25J 1"
        },
        {
          "type": "calc",
          "latex": "2(1.5)(1.8)(0.5) R + (1.0)J 1",
          "raw": "2(1.5)(1.8)(0.5) R + (1.0)J 1"
        },
        {
          "type": "calc",
          "latex": "2(1.5)(1.8)(0.5) R",
          "raw": "2(1.5)(1.8)(0.5) R"
        },
        {
          "type": "calc",
          "latex": "0.5(2.5)(1.8) + 1",
          "raw": "0.5(2.5)(1.8) + 1"
        },
        {
          "type": "calc",
          "latex": "2 (1.5)(1.8)(0.5) + 1",
          "raw": "2 (1.5)(1.8)(0.5) + 1"
        },
        {
          "type": "calc",
          "latex": "2(1.5)(1.8)(0.5)",
          "raw": "2(1.5)(1.8)(0.5)"
        },
        {
          "type": "ans",
          "latex": "= 0.391 m",
          "raw": "= 0.391 m"
        },
        {
          "type": "calc",
          "latex": "y = y V",
          "raw": "y = y V"
        },
        {
          "type": "calc",
          "latex": "V",
          "raw": "V"
        },
        {
          "type": "calc",
          "latex": "= 5.00625",
          "raw": "= 5.00625"
        },
        {
          "type": "calc",
          "latex": "3.6",
          "raw": "3.6"
        },
        {
          "type": "ans",
          "latex": "= 1.39 m",
          "raw": "= 1.39 m"
        },
        {
          "type": "calc",
          "latex": "z = z V",
          "raw": "z = z V"
        },
        {
          "type": "calc",
          "latex": "V",
          "raw": "V"
        },
        {
          "type": "calc",
          "latex": "= 2.835",
          "raw": "= 2.835"
        },
        {
          "type": "calc",
          "latex": "3.6",
          "raw": "3.6"
        },
        {
          "type": "ans",
          "latex": "= 0.7875 m",
          "raw": "= 0.7875 m"
        }
      ],
      "final_answers_math": [
        "= 0.391 m",
        "= 1.39 m",
        "= 0.7875 m"
      ]
    },
    {
      "id": "F9-13",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 13,
      "page_book": 528,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the surface area and volume of the solid \nformed by revolving the shaded area 360° about the z axis.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_13.webp",
      "solution_raw": "A = 2p r L\n \n = 2p30.75(1.5) + 1.5(2) + 0.752(1.5)2 + (2)24\n \n = 37.7 m2\n\nAns.\n \n V = 2p r A\n \n = 2p30.75(1.5)(2) + 0.511\n22(1.5)(2)4\n \n = 18.8 m3\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "A = 2\\pi r L",
          "raw": "A = 2p r L"
        },
        {
          "type": "calc",
          "latex": "= 2p30.75(1.5) + 1.5(2) + 0.752(1.5)^2 + (2)24",
          "raw": "= 2p30.75(1.5) + 1.5(2) + 0.752(1.5)2 + (2)24"
        },
        {
          "type": "ans",
          "latex": "= 37.7 \\text{m}^2",
          "raw": "= 37.7 \\text{m}^2"
        },
        {
          "type": "calc",
          "latex": "V = 2\\pi r A",
          "raw": "V = 2p r A"
        },
        {
          "type": "calc",
          "latex": "= 2p30.75(1.5)(2) + 0.5\\left(\\frac{1}{2}\\right)(1.5)(2)4",
          "raw": "= 2p30.75(1.5)(2) + 0.5\\left(\\frac{1}{2}\\right)(1.5)(2)4"
        },
        {
          "type": "ans",
          "latex": "= 18.8 \\text{m}^3",
          "raw": "= 18.8 \\text{m}^3"
        }
      ],
      "final_answers_math": [
        "= 37.7 \\text{m}^2",
        "= 18.8 \\text{m}^3"
      ]
    },
    {
      "id": "F9-14",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 14,
      "page_book": 528,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the surface area and volume of the solid \nformed by revolving the shaded area 360° about the z axis.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_14.webp",
      "solution_raw": "A = 2p r L\n= 2p31.952(0.9)2 + (1.2)2 + 2.4(1.5) + 1.95(0.9) + 1.5(2.7)4\n \n = 77.5 m2\n\nAns.\n \n V = 2p r A\n \n = 2p31.811\n22(0.9)(1.2) + 1.95(0.9)(1.5)4\n \n = 22.6 m3 \n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "A = 2\\pi r L",
          "raw": "A = 2p r L"
        },
        {
          "type": "calc",
          "latex": "= 2p31.952(0.9)^2 + (1.2)^2 + 2.4(1.5) + 1.95(0.9) + 1.5(2.7)4",
          "raw": "= 2p31.952(0.9)2 + (1.2)2 + 2.4(1.5) + 1.95(0.9) + 1.5(2.7)4"
        },
        {
          "type": "ans",
          "latex": "= 77.5 \\text{m}^2",
          "raw": "= 77.5 \\text{m}^2"
        },
        {
          "type": "calc",
          "latex": "V = 2\\pi r A",
          "raw": "V = 2p r A"
        },
        {
          "type": "calc",
          "latex": "= 2p31.8\\left(\\frac{1}{2}\\right)(0.9)(1.2) + 1.95(0.9)(1.5)4",
          "raw": "= 2p31.8\\left(\\frac{1}{2}\\right)(0.9)(1.2) + 1.95(0.9)(1.5)4"
        },
        {
          "type": "ans",
          "latex": "= 22.6 \\text{m}^3",
          "raw": "= 22.6 \\text{m}^3"
        }
      ],
      "final_answers_math": [
        "= 77.5 \\text{m}^2",
        "= 22.6 \\text{m}^3"
      ]
    },
    {
      "id": "F9-15",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 15,
      "page_book": 528,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the surface area and volume of the solid \nformed by revolving the shaded area 360° about the z axis.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_15.webp",
      "solution_raw": "A = 2p r L\n\n = 2p37.5(15) + 15(18) + 22.52152 + 202 + 15(30)4\n \n = 8765 in.2\n\nAns.\n \n V = 2p r A\n \n = 2p37.5(15)(38) + 2011\n22(15)(20)4\n \n = 45 710 in.3\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "A = 2\\pi r L",
          "raw": "A = 2p r L"
        },
        {
          "type": "calc",
          "latex": "= 2p37.5(15) + 15(18) + 22.52152 + 202 + 15(30)4",
          "raw": "= 2p37.5(15) + 15(18) + 22.52152 + 202 + 15(30)4"
        },
        {
          "type": "ans",
          "latex": "= 8765 in.2",
          "raw": "= 8765 in.2"
        },
        {
          "type": "calc",
          "latex": "V = 2\\pi r A",
          "raw": "V = 2p r A"
        },
        {
          "type": "calc",
          "latex": "= 2p37.5(15)(38) + 20\\left(\\frac{1}{2}\\right)(15)(20)4",
          "raw": "= 2p37.5(15)(38) + 20\\left(\\frac{1}{2}\\right)(15)(20)4"
        },
        {
          "type": "ans",
          "latex": "= 45 710 in.3",
          "raw": "= 45 710 in.3"
        }
      ],
      "final_answers_math": [
        "= 8765 in.2",
        "= 45 710 in.3"
      ]
    },
    {
      "id": "F9-16",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 16,
      "page_book": 528,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the surface area and volume of the solid \nformed by revolving the shaded area 360° about the z axis.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_16.webp",
      "solution_raw": "A = 2p r L\n \n = 2p3\n2(1.5)\np 1\np(1.5)\n2 2 + 1.5(2) + 0.75(1.5)4\n \n = 40.1 m2\n\nAns.\n \n V = 2p r A\n \n = 2p3\n4(1.5)\n3p 1\np11.522\n4\n2 + 0.75(1.5)(2)4\n \n = 21.2 m3\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "A = 2\\pi r L",
          "raw": "A = 2p r L"
        },
        {
          "type": "calc",
          "latex": "= 2p3",
          "raw": "= 2p3"
        },
        {
          "type": "calc",
          "latex": "2(1.5)",
          "raw": "2(1.5)"
        },
        {
          "type": "calc",
          "latex": "p 1",
          "raw": "p 1"
        },
        {
          "type": "calc",
          "latex": "p(1.5)",
          "raw": "p(1.5)"
        },
        {
          "type": "calc",
          "latex": "2 2 + 1.5(2) + 0.75(1.5)4",
          "raw": "2 2 + 1.5(2) + 0.75(1.5)4"
        },
        {
          "type": "ans",
          "latex": "= 40.1 \\text{m}^2",
          "raw": "= 40.1 \\text{m}^2"
        },
        {
          "type": "calc",
          "latex": "V = 2\\pi r A",
          "raw": "V = 2p r A"
        },
        {
          "type": "calc",
          "latex": "= 2p3",
          "raw": "= 2p3"
        },
        {
          "type": "calc",
          "latex": "4(1.5)",
          "raw": "4(1.5)"
        },
        {
          "type": "calc",
          "latex": "3p 1",
          "raw": "3p 1"
        },
        {
          "type": "calc",
          "latex": "p11.522",
          "raw": "p11.522"
        },
        {
          "type": "calc",
          "latex": "4",
          "raw": "4"
        },
        {
          "type": "calc",
          "latex": "2 + 0.75(1.5)(2)4",
          "raw": "2 + 0.75(1.5)(2)4"
        },
        {
          "type": "ans",
          "latex": "= 21.2 \\text{m}^3",
          "raw": "= 21.2 \\text{m}^3"
        }
      ],
      "final_answers_math": [
        "= 40.1 \\text{m}^2",
        "= 21.2 \\text{m}^3"
      ]
    },
    {
      "id": "F9-17",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 17,
      "page_book": 541,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the magnitude of the hydrostatic force \nacting per meter length of the wall. Water has a density of \nr = 1 Mg>m3.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_17.webp",
      "solution_raw": "wb = rwghb = 1000(9.81)(6)(1)\n \n = 58.86 kN>m\n \n FR = 1\n2 (58.76)(6) = 176.58 kN = 177 kN\nAns.",
      "final_answers": [
        "2 (58.76)(6) = 176.58 kN = 177 kN"
      ],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "wb = rwghb = 1000(9.81)(6)(1)",
          "raw": "wb = rwghb = 1000(9.81)(6)(1)"
        },
        {
          "type": "calc",
          "latex": "= 58.86 kN>m",
          "raw": "= 58.86 kN>m"
        },
        {
          "type": "calc",
          "latex": "F_R = 1",
          "raw": "FR = 1"
        },
        {
          "type": "ans",
          "latex": "2 (58.76)(6) = 176.58 kN = 177 kN",
          "raw": "2 (58.76)(6) = 176.58 kN = 177 kN"
        }
      ],
      "final_answers_math": [
        "2 (58.76)(6) = 176.58 kN = 177 kN"
      ]
    },
    {
      "id": "F9-18",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 18,
      "page_book": 541,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the magnitude of the hydrostatic force \nacting on gate AB, which has a width of 4 ft. The specific \nweight of water is g = 62.4 lb>ft3.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_18.webp",
      "solution_raw": "wb = gw hb = 62.4 (4)(4) = 998.4 lb>ft\n \nFR = 998.4(3) = 3.00 kip\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "wb = gw hb = 62.4 (4)(4) = 998.4 lb>ft",
          "raw": "wb = gw hb = 62.4 (4)(4) = 998.4 lb>ft"
        },
        {
          "type": "ans",
          "latex": "F_R = 998.4(3) = 3.00 kip",
          "raw": "FR = 998.4(3) = 3.00 kip"
        }
      ],
      "final_answers_math": [
        "F_R = 998.4(3) = 3.00 kip"
      ]
    },
    {
      "id": "F9-19",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 19,
      "page_book": 541,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the magnitude of the hydrostatic force \nacting on gate AB, which has a width of 1.5 m. Water has a \ndensity of r = 1 Mg>m3.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_19.webp",
      "solution_raw": "wb = rwghBb = 1000(9.81)(2)(1.5)\n \n = 29.43 kN>m\n \n FR = 1\n2 (29.43)1 2(1.5)2 + (2)22\n \n = 36.8 kN\n\nAns.",
      "final_answers": [],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "wb = rwghBb = 1000(9.81)(2)(1.5)",
          "raw": "wb = rwghBb = 1000(9.81)(2)(1.5)"
        },
        {
          "type": "calc",
          "latex": "= 29.43 kN>m",
          "raw": "= 29.43 kN>m"
        },
        {
          "type": "calc",
          "latex": "F_R = 1",
          "raw": "FR = 1"
        },
        {
          "type": "calc",
          "latex": "2 (29.43)1 \\sqrt{(1.5)^2} + (2)22",
          "raw": "2 (29.43)1 2(1.5)2 + (2)22"
        },
        {
          "type": "ans",
          "latex": "= 36.8 kN",
          "raw": "= 36.8 kN"
        }
      ],
      "final_answers_math": [
        "= 36.8 kN"
      ]
    },
    {
      "id": "F9-20",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 20,
      "page_book": 541,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the magnitude of the hydrostatic force \nacting on gate AB, which has a width of 2 m. Water has a \ndensity of r = 1 Mg>m3.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_20.webp",
      "solution_raw": "wA = rwghAb = 1000(9.81)(3)(2)\n \n = 58.86 kN>m\n \nwB = rwghBb = 1000(9.81)(5)(2)\n \n = 98.1 kN>m\n \n FR = 1\n2 (58.86 + 98.1)(2) = 157 kN\nAns.",
      "final_answers": [
        "2 (58.86 + 98.1)(2) = 157 kN"
      ],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "wA = rwghAb = 1000(9.81)(3)(2)",
          "raw": "wA = rwghAb = 1000(9.81)(3)(2)"
        },
        {
          "type": "calc",
          "latex": "= 58.86 kN>m",
          "raw": "= 58.86 kN>m"
        },
        {
          "type": "calc",
          "latex": "wB = rwghBb = 1000(9.81)(5)(2)",
          "raw": "wB = rwghBb = 1000(9.81)(5)(2)"
        },
        {
          "type": "calc",
          "latex": "= 98.1 kN>m",
          "raw": "= 98.1 kN>m"
        },
        {
          "type": "calc",
          "latex": "F_R = 1",
          "raw": "FR = 1"
        },
        {
          "type": "ans",
          "latex": "2 (58.86 + 98.1)(2) = 157 kN",
          "raw": "2 (58.86 + 98.1)(2) = 157 kN"
        }
      ],
      "final_answers_math": [
        "2 (58.86 + 98.1)(2) = 157 kN"
      ]
    },
    {
      "id": "F9-21",
      "chapter": 9,
      "chapter_name_en": "Center of Gravity and Centroid",
      "chapter_name_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
      "number": 21,
      "page_book": 541,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the magnitude of the hydrostatic force \nacting on gate AB, which has a width of 2 ft. The specific \nweight of water is g = 62.4 lb>ft3.",
      "question_th_summary": "หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ)",
      "image": "images/problems/F9_21.webp",
      "solution_raw": "wA = gwhA b = 62.4(6)(2) = 748.8 lb>ft\n \n wB = gwhB b = 62.4(10)(2) = 1248 lb>ft\n \n FR = 1\n2 (748.8 + 1248)1 2(3)2 + (4)22\n \n = 4.99 kip\n\nAns.\n\n \nFundamental Problems \n637\n \n611032(-0.9 sin u du)\n \n- 3611032(cos u - 0.5)(-1.8 sin u du) = 0\n \nsin u (64 800 cos u - 37 800)du = 0\n \nsin u = 0 u = 0°\nAns.\n64 800 cos u - 37 800 = 0 \n \nu = 54.31° = 54.3°\nAns.",
      "final_answers": [
        "sin u = 0 u = 0°",
        "u = 54.31° = 54.3°"
      ],
      "theory_th": "การหาจุดศูนย์ถ่วงและเซนทรอยด์: \\(\\bar{x} = \\frac{\\sum \\tilde{x} A}{\\sum A}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y} A}{\\sum A}, \\quad \\bar{x} = \\frac{\\int_A x\\, dA}{\\int_A dA}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "wA = gwhA b = 62.4(6)(2) = 748.8 lb>ft",
          "raw": "wA = gwhA b = 62.4(6)(2) = 748.8 lb>ft"
        },
        {
          "type": "calc",
          "latex": "wB = gwhB b = 62.4(10)(2) = 1248 lb>ft",
          "raw": "wB = gwhB b = 62.4(10)(2) = 1248 lb>ft"
        },
        {
          "type": "calc",
          "latex": "F_R = 1",
          "raw": "FR = 1"
        },
        {
          "type": "calc",
          "latex": "2 (748.8 + 1248)1 \\sqrt{(3)^2} + (4)22",
          "raw": "2 (748.8 + 1248)1 2(3)2 + (4)22"
        },
        {
          "type": "ans",
          "latex": "= 4.99 kip",
          "raw": "= 4.99 kip"
        },
        {
          "type": "calc",
          "latex": "611032(-0.9 \\sin \\theta du)",
          "raw": "611032(-0.9 sin u du)"
        },
        {
          "type": "calc",
          "latex": "- 3611032(\\cos \\theta - 0.5)(-1.8 \\sin \\theta du) = 0",
          "raw": "- 3611032(cos u - 0.5)(-1.8 sin u du) = 0"
        },
        {
          "type": "calc",
          "latex": "\\sin \\theta (64 800 \\cos \\theta - 37 800)du = 0",
          "raw": "sin u (64 800 cos u - 37 800)du = 0"
        },
        {
          "type": "ans",
          "latex": "\\sin \\theta = 0 \\theta = 0^\\circ",
          "raw": "sin u = 0 u = 0°"
        },
        {
          "type": "calc",
          "latex": "64 800 \\cos \\theta - 37 800 = 0",
          "raw": "64 800 cos u - 37 800 = 0"
        },
        {
          "type": "ans",
          "latex": "\\theta = 54.31^\\circ = 54.3^\\circ",
          "raw": "u = 54.31° = 54.3°"
        }
      ],
      "final_answers_math": [
        "= 4.99 kip",
        "\\sin \\theta = 0 \\theta = 0^\\circ",
        "\\theta = 54.31^\\circ = 54.3^\\circ"
      ]
    },
    {
      "id": "F10-1",
      "chapter": 10,
      "chapter_name_en": "Moments of Inertia",
      "chapter_name_th": "โมเมนต์ความเฉื่อย",
      "number": 1,
      "page_book": 558,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of inertia of the shaded \narea about the x axis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis) • คำนวณหาโมเมนต์ความเฉื่อยของพื้นที่รอบแกน",
      "image": "images/problems/F10_1.webp",
      "solution_raw": "Ix =\nLA\n y2 dA =\nL\n1 m\n0\n y2311 - y3/22dy4 = 0.111 m4 Ans.",
      "final_answers": [
        "y2311 - y3/22dy4 = 0.111 m4"
      ],
      "theory_th": "โมเมนต์ความเฉื่อยของพื้นที่และทฤษฎีบทแกนขนาน: \\(I_x = \\bar{I}_{x'} + A d_y^2, \\quad k_x = \\sqrt{\\frac{I_x}{A}}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Ix =",
          "raw": "Ix ="
        },
        {
          "type": "calc",
          "latex": "\\int_A",
          "raw": "\\int_A"
        },
        {
          "type": "calc",
          "latex": "y2 dA =",
          "raw": "y2 dA ="
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "ans",
          "latex": "y2311 - y3/22dy4 = 0.111 \\text{m}^4",
          "raw": "y2311 - y3/22dy4 = 0.111 \\text{m}^4 Ans."
        }
      ],
      "final_answers_math": [
        "y2311 - y3/22dy4 = 0.111 \\text{m}^4"
      ]
    },
    {
      "id": "F10-2",
      "chapter": 10,
      "chapter_name_en": "Moments of Inertia",
      "chapter_name_th": "โมเมนต์ความเฉื่อย",
      "number": 2,
      "page_book": 558,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of inertia of the shaded \narea about the x axis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis) • คำนวณหาโมเมนต์ความเฉื่อยของพื้นที่รอบแกน",
      "image": "images/problems/F10_2.webp",
      "solution_raw": "Ix =\nLA\n y2 dA =\nL\n1 m\n0\n y21y3/2 dy2 = 0.222 m4\nAns.",
      "final_answers": [
        "y21y3/2 dy2 = 0.222 m4"
      ],
      "theory_th": "โมเมนต์ความเฉื่อยของพื้นที่และทฤษฎีบทแกนขนาน: \\(I_x = \\bar{I}_{x'} + A d_y^2, \\quad k_x = \\sqrt{\\frac{I_x}{A}}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Ix =",
          "raw": "Ix ="
        },
        {
          "type": "calc",
          "latex": "\\int_A",
          "raw": "\\int_A"
        },
        {
          "type": "calc",
          "latex": "y2 dA =",
          "raw": "y2 dA ="
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "ans",
          "latex": "y21y3/2 dy2 = 0.222 \\text{m}^4",
          "raw": "y21y3/2 dy2 = 0.222 \\text{m}^4"
        }
      ],
      "final_answers_math": [
        "y21y3/2 dy2 = 0.222 \\text{m}^4"
      ]
    },
    {
      "id": "F10-3",
      "chapter": 10,
      "chapter_name_en": "Moments of Inertia",
      "chapter_name_th": "โมเมนต์ความเฉื่อย",
      "number": 3,
      "page_book": 558,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the moment of inertia of the shaded \narea about the y axis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis) • คำนวณหาโมเมนต์ความเฉื่อยของพื้นที่รอบแกน",
      "image": "images/problems/F10_3.webp",
      "solution_raw": "Iy =\nLA\n x2 dA =\nL\n1 m\n0\nx21x2/32dx = 0.273 m4\nAns.",
      "final_answers": [
        "x21x2/32dx = 0.273 m4"
      ],
      "theory_th": "โมเมนต์ความเฉื่อยของพื้นที่และทฤษฎีบทแกนขนาน: \\(I_x = \\bar{I}_{x'} + A d_y^2, \\quad k_x = \\sqrt{\\frac{I_x}{A}}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Iy =",
          "raw": "Iy ="
        },
        {
          "type": "calc",
          "latex": "\\int_A",
          "raw": "\\int_A"
        },
        {
          "type": "calc",
          "latex": "x2 dA =",
          "raw": "x2 dA ="
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "ans",
          "latex": "x21x2/32dx = 0.273 \\text{m}^4",
          "raw": "x21x2/32dx = 0.273 \\text{m}^4"
        }
      ],
      "final_answers_math": [
        "x21x2/32dx = 0.273 \\text{m}^4"
      ]
    },
    {
      "id": "F10-4",
      "chapter": 10,
      "chapter_name_en": "Moments of Inertia",
      "chapter_name_th": "โมเมนต์ความเฉื่อย",
      "number": 4,
      "page_book": 558,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the moment of inertia of the shaded \narea about the y axis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis) • คำนวณหาโมเมนต์ความเฉื่อยของพื้นที่รอบแกน",
      "image": "images/problems/F10_4.webp",
      "solution_raw": "Iy =\nLA\n x2 dA =\nL\n1 m\n0\n x23(1 - x2/3) dx4 = 0.0606 m4 Ans.",
      "final_answers": [
        "x23(1 - x2/3) dx4 = 0.0606 m4"
      ],
      "theory_th": "โมเมนต์ความเฉื่อยของพื้นที่และทฤษฎีบทแกนขนาน: \\(I_x = \\bar{I}_{x'} + A d_y^2, \\quad k_x = \\sqrt{\\frac{I_x}{A}}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Iy =",
          "raw": "Iy ="
        },
        {
          "type": "calc",
          "latex": "\\int_A",
          "raw": "\\int_A"
        },
        {
          "type": "calc",
          "latex": "x2 dA =",
          "raw": "x2 dA ="
        },
        {
          "type": "calc",
          "latex": "L",
          "raw": "L"
        },
        {
          "type": "calc",
          "latex": "1 m",
          "raw": "1 m"
        },
        {
          "type": "calc",
          "latex": "0",
          "raw": "0"
        },
        {
          "type": "ans",
          "latex": "x23(1 - x2/3) dx4 = 0.0606 \\text{m}^4",
          "raw": "x23(1 - x2/3) dx4 = 0.0606 \\text{m}^4 Ans."
        }
      ],
      "final_answers_math": [
        "x23(1 - x2/3) dx4 = 0.0606 \\text{m}^4"
      ]
    },
    {
      "id": "F10-5",
      "chapter": 10,
      "chapter_name_en": "Moments of Inertia",
      "chapter_name_th": "โมเมนต์ความเฉื่อย",
      "number": 5,
      "page_book": 565,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the moment of inertia of the beam’s \ncross-sectional area about the centroidal x and y axes.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ) • คำนวณหาโมเมนต์ความเฉื่อยของพื้นที่รอบแกน",
      "image": "images/problems/F10_5.webp",
      "solution_raw": "Ix = 3 1\n12 (50)145032 + 04 + 3 1\n12(300)15032 + 04\n \n = 38311062 mm4\n\nAns.\n \n Iy = 3 1\n12 (450)15032 + 04\n \n + 23 1\n12(50)115032 + (150)(50)(100)24\n \n = 18311062 mm4 \n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ความเฉื่อยของพื้นที่และทฤษฎีบทแกนขนาน: \\(I_x = \\bar{I}_{x'} + A d_y^2, \\quad k_x = \\sqrt{\\frac{I_x}{A}}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Ix = 3 1",
          "raw": "Ix = 3 1"
        },
        {
          "type": "calc",
          "latex": "12 (50)145032 + 04 + 3 1",
          "raw": "12 (50)145032 + 04 + 3 1"
        },
        {
          "type": "calc",
          "latex": "12(300)15032 + 04",
          "raw": "12(300)15032 + 04"
        },
        {
          "type": "ans",
          "latex": "= 38311062 mm4",
          "raw": "= 38311062 mm4"
        },
        {
          "type": "calc",
          "latex": "Iy = 3 1",
          "raw": "Iy = 3 1"
        },
        {
          "type": "calc",
          "latex": "12 (450)15032 + 04",
          "raw": "12 (450)15032 + 04"
        },
        {
          "type": "calc",
          "latex": "+ 23 1",
          "raw": "+ 23 1"
        },
        {
          "type": "calc",
          "latex": "12(50)115032 + (150)(50)(100)24",
          "raw": "12(50)115032 + (150)(50)(100)24"
        },
        {
          "type": "ans",
          "latex": "= 18311062 mm4",
          "raw": "= 18311062 mm4"
        }
      ],
      "final_answers_math": [
        "= 38311062 mm4",
        "= 18311062 mm4"
      ]
    },
    {
      "id": "F10-6",
      "chapter": 10,
      "chapter_name_en": "Moments of Inertia",
      "chapter_name_th": "โมเมนต์ความเฉื่อย",
      "number": 6,
      "page_book": 565,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "Determine the moment of inertia of the beam’s \ncross-sectional area about the centroidal x and y axes.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบจุดที่กำหนด (Moment of a Force) • หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ) • คำนวณหาโมเมนต์ความเฉื่อยของพื้นที่รอบแกน",
      "image": "images/problems/F10_6.webp",
      "solution_raw": "Ix =\n1\n12 (360)120032 -\n1\n12 (300)114032\n \n = 17111062 mm4\n\nAns.\n \n Iy =\n1\n12 (200)136032 -\n1\n12(140)130032\n \n = 46311062 mm4\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ความเฉื่อยของพื้นที่และทฤษฎีบทแกนขนาน: \\(I_x = \\bar{I}_{x'} + A d_y^2, \\quad k_x = \\sqrt{\\frac{I_x}{A}}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Ix =",
          "raw": "Ix ="
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "12 (360)120032 -",
          "raw": "12 (360)120032 -"
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "12 (300)114032",
          "raw": "12 (300)114032"
        },
        {
          "type": "ans",
          "latex": "= 17111062 mm4",
          "raw": "= 17111062 mm4"
        },
        {
          "type": "calc",
          "latex": "Iy =",
          "raw": "Iy ="
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "12 (200)136032 -",
          "raw": "12 (200)136032 -"
        },
        {
          "type": "calc",
          "latex": "1",
          "raw": "1"
        },
        {
          "type": "calc",
          "latex": "12(140)130032",
          "raw": "12(140)130032"
        },
        {
          "type": "ans",
          "latex": "= 46311062 mm4",
          "raw": "= 46311062 mm4"
        }
      ],
      "final_answers_math": [
        "= 17111062 mm4",
        "= 46311062 mm4"
      ]
    },
    {
      "id": "F10-7",
      "chapter": 10,
      "chapter_name_en": "Moments of Inertia",
      "chapter_name_th": "โมเมนต์ความเฉื่อย",
      "number": 7,
      "page_book": 565,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the moment of inertia of the \ncross-sectional area of the channel with respect to the y axis.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis) • คำนวณหาโมเมนต์ความเฉื่อยของพื้นที่รอบแกน",
      "image": "images/problems/F10_7.webp",
      "solution_raw": "Iy = 23 1\n12(50)120032 + 04\n \n + 3 1\n12(300)15032 + 04\n \n = 69.8 (106) mm4\n\nAns.",
      "final_answers": [],
      "theory_th": "โมเมนต์ความเฉื่อยของพื้นที่และทฤษฎีบทแกนขนาน: \\(I_x = \\bar{I}_{x'} + A d_y^2, \\quad k_x = \\sqrt{\\frac{I_x}{A}}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Iy = \\sqrt{3 1}",
          "raw": "Iy = 23 1"
        },
        {
          "type": "calc",
          "latex": "12(50)120032 + 04",
          "raw": "12(50)120032 + 04"
        },
        {
          "type": "calc",
          "latex": "+ 3 1",
          "raw": "+ 3 1"
        },
        {
          "type": "calc",
          "latex": "12(300)15032 + 04",
          "raw": "12(300)15032 + 04"
        },
        {
          "type": "ans",
          "latex": "= 69.8 (106) mm4",
          "raw": "= 69.8 (106) mm4"
        }
      ],
      "final_answers_math": [
        "= 69.8 (106) mm4"
      ]
    },
    {
      "id": "F10-8",
      "chapter": 10,
      "chapter_name_en": "Moments of Inertia",
      "chapter_name_th": "โมเมนต์ความเฉื่อย",
      "number": 8,
      "page_book": 565,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the moment of inertia of the cross-\nsectional area of the T-beam with respect to the x axis \npassing through the centroid of the cross section.",
      "question_th_summary": "หาโมเมนต์ของแรงรอบแกนที่กำหนด (Moment about an Axis) • หาตำแหน่งจุดศูนย์ถ่วงหรือเซนทรอยด์ (x̄, ȳ) • คำนวณหาโมเมนต์ความเฉื่อยของพื้นที่รอบแกน",
      "image": "images/problems/F10_8.webp",
      "solution_raw": "y = y A\n A\n= 15(150)(30) + 105(30)(150)\n150(30) + 30(150)\n= 60 mm\n \n Ix\u001d = (I + Ad2)\n \n = 3 1\n12 (150)(30)3 + (150)(30)(60 - 15)24\n \n + 3 1\n12(30)(150)3 + 30(150)(105 - 60)24\n \n = 27.0 (106) mm4\nAns.",
      "final_answers": [
        "= 27.0 (106) mm4"
      ],
      "theory_th": "โมเมนต์ความเฉื่อยของพื้นที่และทฤษฎีบทแกนขนาน: \\(I_x = \\bar{I}_{x'} + A d_y^2, \\quad k_x = \\sqrt{\\frac{I_x}{A}}\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "y = y A",
          "raw": "y = y A"
        },
        {
          "type": "calc",
          "latex": "A",
          "raw": "A"
        },
        {
          "type": "calc",
          "latex": "= 15(150)(30) + 105(30)(150)",
          "raw": "= 15(150)(30) + 105(30)(150)"
        },
        {
          "type": "calc",
          "latex": "150(30) + 30(150)",
          "raw": "150(30) + 30(150)"
        },
        {
          "type": "calc",
          "latex": "= 60 mm",
          "raw": "= 60 mm"
        },
        {
          "type": "calc",
          "latex": "Ix\u001d = (I + Ad2)",
          "raw": "Ix\u001d = (I + Ad2)"
        },
        {
          "type": "calc",
          "latex": "= 3 1",
          "raw": "= 3 1"
        },
        {
          "type": "calc",
          "latex": "12 (150)(30)3 + (150)(30)(60 - 15)24",
          "raw": "12 (150)(30)3 + (150)(30)(60 - 15)24"
        },
        {
          "type": "calc",
          "latex": "+ 3 1",
          "raw": "+ 3 1"
        },
        {
          "type": "calc",
          "latex": "12(30)(150)3 + 30(150)(105 - 60)24",
          "raw": "12(30)(150)3 + 30(150)(105 - 60)24"
        },
        {
          "type": "ans",
          "latex": "= 27.0 (106) mm4",
          "raw": "= 27.0 (106) mm4"
        }
      ],
      "final_answers_math": [
        "= 27.0 (106) mm4"
      ]
    },
    {
      "id": "F11-1",
      "chapter": 11,
      "chapter_name_en": "Virtual Work",
      "chapter_name_th": "งานเสมือน",
      "number": 1,
      "page_book": 613,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the required magnitude of force P to \nmaintain equilibrium of the linkage at u = 60\u001c. Each link \nhas a mass of 20 kg.",
      "question_th_summary": "ประยุกต์ใช้หลักการของงานเสมือน (Virtual Work)",
      "image": "images/problems/F11_1.webp",
      "solution_raw": "yG = 0.75 sin u dyG = 0.75 cos u du\n \n xC = 2(1.5) cos u dxC = -3 sin u du\n \n dU = 0; 2WdyG + PdxC = 0\n \n(294.3 cos u - 3P sin u)du = 0\n \nP = 98.1 cot u u=60° = 56.6 N\nAns.",
      "final_answers": [
        "P = 98.1 cot u u=60° = 56.6 N"
      ],
      "theory_th": "หลักการของงานเสมือนและเสถียรภาพของสมดุล: \\(\\delta U = 0, \\quad \\frac{dV}{d\\theta} = 0, \\quad \\frac{d^2V}{d\\theta^2} > 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "yG = 0.75 \\sin \\theta dyG = 0.75 \\cos \\theta du",
          "raw": "yG = 0.75 sin u dyG = 0.75 cos u du"
        },
        {
          "type": "calc",
          "latex": "xC = 2(1.5) \\cos \\theta dxC = -3 \\sin \\theta du",
          "raw": "xC = 2(1.5) cos u dxC = -3 sin u du"
        },
        {
          "type": "calc",
          "latex": "dU = 0; 2WdyG + PdxC = 0",
          "raw": "dU = 0; 2WdyG + PdxC = 0"
        },
        {
          "type": "calc",
          "latex": "(294.3 \\cos \\theta - 3P \\sin \\theta)du = 0",
          "raw": "(294.3 cos u - 3P sin u)du = 0"
        },
        {
          "type": "ans",
          "latex": "P = 98.1 cot \\theta \\theta=60^\\circ = 56.6 N",
          "raw": "P = 98.1 cot u u=60° = 56.6 N"
        }
      ],
      "final_answers_math": [
        "P = 98.1 cot \\theta \\theta=60^\\circ = 56.6 N"
      ]
    },
    {
      "id": "F11-2",
      "chapter": 11,
      "chapter_name_en": "Virtual Work",
      "chapter_name_th": "งานเสมือน",
      "number": 2,
      "page_book": 613,
      "page_sol": 642,
      "difficulty": "easy",
      "difficulty_th": "ง่าย",
      "question_en": "Determine the magnitude of force P required to \nhold the 50-kg smooth rod in equilibrium at u = 60\u001c.",
      "question_th_summary": "ประยุกต์ใช้หลักการของงานเสมือน (Virtual Work)",
      "image": "images/problems/F11_2.webp",
      "solution_raw": "xA = 5 cos u dxA = -5 sin u du\n \n yG = 2.5 sin u dyG = 2.5 cos u du\n \n dU = 0; -PdxA + (-WdyG) = 0\n \n(5P sin u - 1226.25 cos u)du = 0\n \nP = 245.25 cot u u=60° = 142 N\nAns.",
      "final_answers": [
        "P = 245.25 cot u u=60° = 142 N"
      ],
      "theory_th": "หลักการของงานเสมือนและเสถียรภาพของสมดุล: \\(\\delta U = 0, \\quad \\frac{dV}{d\\theta} = 0, \\quad \\frac{d^2V}{d\\theta^2} > 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "xA = 5 \\cos \\theta dxA = -5 \\sin \\theta du",
          "raw": "xA = 5 cos u dxA = -5 sin u du"
        },
        {
          "type": "calc",
          "latex": "yG = \\sqrt{.5 \\sin \\theta dyG} = 2.5 \\cos \\theta du",
          "raw": "yG = 2.5 sin u dyG = 2.5 cos u du"
        },
        {
          "type": "calc",
          "latex": "dU = 0; -PdxA + (-WdyG) = 0",
          "raw": "dU = 0; -PdxA + (-WdyG) = 0"
        },
        {
          "type": "calc",
          "latex": "(5P \\sin \\theta - 1226.25 \\cos \\theta)du = 0",
          "raw": "(5P sin u - 1226.25 cos u)du = 0"
        },
        {
          "type": "ans",
          "latex": "P = 245.25 \\cot \\theta|_{\\theta=60^\\circ} = 142\\text{ N}",
          "raw": "P = 245.25 cot u u=60° = 142 N"
        }
      ],
      "final_answers_math": [
        "P = 245.25 \\cot \\theta|_{\\theta=60^\\circ} = 142\\text{ N}"
      ]
    },
    {
      "id": "F11-3",
      "chapter": 11,
      "chapter_name_en": "Virtual Work",
      "chapter_name_th": "งานเสมือน",
      "number": 3,
      "page_book": 613,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "The linkage is subjected to a force of P = 2 kN. \nDetermine the angle u for equilibrium. The spring is \nunstretched when u = 0\u001c. Neglect the mass of the links.",
      "question_th_summary": "ประยุกต์ใช้หลักการของงานเสมือน (Virtual Work)",
      "image": "images/problems/F11_3.webp",
      "solution_raw": "xB = 0.6 sin u dxB = 0.6 cos u du\n \n yC = 0.6 cos u dyC = -0.6 sin u du\n \n dU = 0; -FspdxB + (-PdyC) = 0\n \n -911032 sin u (0.6 cos u du)\n \n- 2000(-0.6 sin u du) = 0\n \nsin u = 0 u = 0°\nAns.\n \n-5400 cos u + 1200 = 0 \n \nu = 77.16° = 77.2°\nAns.",
      "final_answers": [
        "sin u = 0 u = 0°",
        "u = 77.16° = 77.2°"
      ],
      "theory_th": "หลักการของงานเสมือนและเสถียรภาพของสมดุล: \\(\\delta U = 0, \\quad \\frac{dV}{d\\theta} = 0, \\quad \\frac{d^2V}{d\\theta^2} > 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "xB = 0.6 \\sin \\theta dxB = 0.6 \\cos \\theta du",
          "raw": "xB = 0.6 sin u dxB = 0.6 cos u du"
        },
        {
          "type": "calc",
          "latex": "yC = 0.6 \\cos \\theta dyC = -0.6 \\sin \\theta du",
          "raw": "yC = 0.6 cos u dyC = -0.6 sin u du"
        },
        {
          "type": "calc",
          "latex": "dU = 0; -FspdxB + (-PdyC) = 0",
          "raw": "dU = 0; -FspdxB + (-PdyC) = 0"
        },
        {
          "type": "calc",
          "latex": "-911032 \\sin \\theta (0.6 \\cos \\theta du)",
          "raw": "-911032 sin u (0.6 cos u du)"
        },
        {
          "type": "calc",
          "latex": "- 2000(-0.6 \\sin \\theta du) = 0",
          "raw": "- 2000(-0.6 sin u du) = 0"
        },
        {
          "type": "ans",
          "latex": "\\sin \\theta = 0 \\theta = 0^\\circ",
          "raw": "sin u = 0 u = 0°"
        },
        {
          "type": "calc",
          "latex": "-5400 \\cos \\theta + 1200 = 0",
          "raw": "-5400 cos u + 1200 = 0"
        },
        {
          "type": "ans",
          "latex": "\\theta = 77.16^\\circ = 77.2^\\circ",
          "raw": "u = 77.16° = 77.2°"
        }
      ],
      "final_answers_math": [
        "\\sin \\theta = 0 \\theta = 0^\\circ",
        "\\theta = 77.16^\\circ = 77.2^\\circ"
      ]
    },
    {
      "id": "F11-4",
      "chapter": 11,
      "chapter_name_en": "Virtual Work",
      "chapter_name_th": "งานเสมือน",
      "number": 4,
      "page_book": 613,
      "page_sol": 642,
      "difficulty": "medium",
      "difficulty_th": "ปานกลาง",
      "question_en": "The linkage is subjected to a force of P = 6 kN. \nDetermine the angle u for equilibrium. The spring is \nunstretched at u = 60\u001c. Neglect the mass of the links.",
      "question_th_summary": "ประยุกต์ใช้หลักการของงานเสมือน (Virtual Work)",
      "image": "images/problems/F11_4.webp",
      "solution_raw": "xB = 0.9 cos u \n dxB = -0.9 sin u du\n \n xC = 2(0.9 cos u) dxC = -1.8 sin u du\n \n dU = 0; PdxB + 1 -Fsp dxC2 = 0\n\nPreliminary Problems \nStatics Solutions\nChapter 2\n2–1.\n45 \n120 \n200 N\n100 N\n45 \n120 \n200 N\n100 N\n15 \n60 \nFR\nFR\nu\n(a)\n130 \n130 \n500 N\n400 N\n500 N\n400 N\nFR\nu\nFR\n130 \n50 \n(b)\n300 N\n450 N\n20 \nFR\n20 \n450 N\nFR\nu\n(c)\n2–2.\n70 \n110 \n30 \n200 N\nFv\nFu\nu\nv\n200 N\nFv\nFu\n30 \n110 \n(a)\nu\n60 \n120 \n60 \n10 \nv\n(b)\n400 N\n400 N\nFu\nFu\nFv\n10 \nFv\n60 \n(c)\n110 \n30 \n40 \n600 N\nFu\nFv\n40 \n600 N\nFu\n110 \nFv\n2–3.\nFR\ny\nz\n60j\n50i\n 10k\nb\ng\na\nx\n(a)\nFR\ny\nz\n60k \n 40i \n 80j \nb\ng\na\nx\n(b)\n2–4.  a) F = 5-4i - 4j + 2k6 kN\n \n F = 2(4)2 + (-4)2 + (2)2 = 6 kN\n \ncos b = -2\n3\n \nb) F = 520i + 20j - 10k6 N\n \nF = 2(20)2 + (20)2 + (-10)2 = 30 N\n \ncos b = 2\n3\n638",
      "final_answers": [],
      "theory_th": "หลักการของงานเสมือนและเสถียรภาพของสมดุล: \\(\\delta U = 0, \\quad \\frac{dV}{d\\theta} = 0, \\quad \\frac{d^2V}{d\\theta^2} > 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "xB = 0.9 \\cos \\theta",
          "raw": "xB = 0.9 cos u"
        },
        {
          "type": "calc",
          "latex": "dxB = -0.9 \\sin \\theta du",
          "raw": "dxB = -0.9 sin u du"
        },
        {
          "type": "calc",
          "latex": "xC = 2(0.9 \\cos \\theta) dxC = -1.8 \\sin \\theta du",
          "raw": "xC = 2(0.9 cos u) dxC = -1.8 sin u du"
        },
        {
          "type": "calc",
          "latex": "dU = 0; PdxB + 1 -Fsp dxC2 = 0",
          "raw": "dU = 0; PdxB + 1 -Fsp dxC2 = 0"
        },
        {
          "type": "calc",
          "latex": "Preliminary Problems",
          "raw": "Preliminary Problems"
        },
        {
          "type": "calc",
          "latex": "Statics Solutions",
          "raw": "Statics Solutions"
        },
        {
          "type": "calc",
          "latex": "2–1.",
          "raw": "2–1."
        },
        {
          "type": "calc",
          "latex": "45",
          "raw": "45"
        },
        {
          "type": "calc",
          "latex": "120",
          "raw": "120"
        },
        {
          "type": "calc",
          "latex": "200 N",
          "raw": "200 N"
        },
        {
          "type": "calc",
          "latex": "100 N",
          "raw": "100 N"
        },
        {
          "type": "calc",
          "latex": "45",
          "raw": "45"
        },
        {
          "type": "calc",
          "latex": "120",
          "raw": "120"
        },
        {
          "type": "calc",
          "latex": "200 N",
          "raw": "200 N"
        },
        {
          "type": "calc",
          "latex": "100 N",
          "raw": "100 N"
        },
        {
          "type": "calc",
          "latex": "15",
          "raw": "15"
        },
        {
          "type": "calc",
          "latex": "60",
          "raw": "60"
        },
        {
          "type": "calc",
          "latex": "F_R",
          "raw": "FR"
        },
        {
          "type": "calc",
          "latex": "F_R",
          "raw": "FR"
        },
        {
          "type": "calc",
          "latex": "\\theta",
          "raw": "u"
        },
        {
          "type": "header",
          "text": "(a)",
          "raw": "(a)",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "130",
          "raw": "130"
        },
        {
          "type": "calc",
          "latex": "130",
          "raw": "130"
        },
        {
          "type": "calc",
          "latex": "500 N",
          "raw": "500 N"
        },
        {
          "type": "calc",
          "latex": "400 N",
          "raw": "400 N"
        },
        {
          "type": "calc",
          "latex": "500 N",
          "raw": "500 N"
        },
        {
          "type": "calc",
          "latex": "400 N",
          "raw": "400 N"
        },
        {
          "type": "calc",
          "latex": "F_R",
          "raw": "FR"
        },
        {
          "type": "calc",
          "latex": "\\theta",
          "raw": "u"
        },
        {
          "type": "calc",
          "latex": "F_R",
          "raw": "FR"
        },
        {
          "type": "calc",
          "latex": "130",
          "raw": "130"
        },
        {
          "type": "calc",
          "latex": "50",
          "raw": "50"
        },
        {
          "type": "header",
          "text": "(b)",
          "raw": "(b)",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "300 N",
          "raw": "300 N"
        },
        {
          "type": "calc",
          "latex": "450 N",
          "raw": "450 N"
        },
        {
          "type": "calc",
          "latex": "20",
          "raw": "20"
        },
        {
          "type": "calc",
          "latex": "F_R",
          "raw": "FR"
        },
        {
          "type": "calc",
          "latex": "20",
          "raw": "20"
        },
        {
          "type": "calc",
          "latex": "450 N",
          "raw": "450 N"
        },
        {
          "type": "calc",
          "latex": "F_R",
          "raw": "FR"
        },
        {
          "type": "calc",
          "latex": "\\theta",
          "raw": "u"
        },
        {
          "type": "header",
          "text": "(c)",
          "raw": "(c)",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "2–2.",
          "raw": "2–2."
        },
        {
          "type": "calc",
          "latex": "70",
          "raw": "70"
        },
        {
          "type": "calc",
          "latex": "\\left(\\frac{10}{30}\\right)00 N",
          "raw": "\\left(\\frac{10}{30}\\right)00 N"
        },
        {
          "type": "calc",
          "latex": "Fv",
          "raw": "Fv"
        },
        {
          "type": "calc",
          "latex": "Fu",
          "raw": "Fu"
        },
        {
          "type": "calc",
          "latex": "\\theta",
          "raw": "u"
        },
        {
          "type": "calc",
          "latex": "v",
          "raw": "v"
        },
        {
          "type": "calc",
          "latex": "200 N",
          "raw": "200 N"
        },
        {
          "type": "calc",
          "latex": "Fv",
          "raw": "Fv"
        },
        {
          "type": "calc",
          "latex": "Fu",
          "raw": "Fu"
        },
        {
          "type": "calc",
          "latex": "30",
          "raw": "30"
        },
        {
          "type": "calc",
          "latex": "110",
          "raw": "110"
        },
        {
          "type": "header",
          "text": "(a)",
          "raw": "(a)",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "\\theta",
          "raw": "u"
        },
        {
          "type": "calc",
          "latex": "60",
          "raw": "60"
        },
        {
          "type": "calc",
          "latex": "120",
          "raw": "120"
        },
        {
          "type": "calc",
          "latex": "60",
          "raw": "60"
        },
        {
          "type": "calc",
          "latex": "10",
          "raw": "10"
        },
        {
          "type": "calc",
          "latex": "v",
          "raw": "v"
        },
        {
          "type": "header",
          "text": "(b)",
          "raw": "(b)",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "400 N",
          "raw": "400 N"
        },
        {
          "type": "calc",
          "latex": "400 N",
          "raw": "400 N"
        },
        {
          "type": "calc",
          "latex": "Fu",
          "raw": "Fu"
        },
        {
          "type": "calc",
          "latex": "Fu",
          "raw": "Fu"
        },
        {
          "type": "calc",
          "latex": "Fv",
          "raw": "Fv"
        },
        {
          "type": "calc",
          "latex": "10",
          "raw": "10"
        },
        {
          "type": "calc",
          "latex": "Fv",
          "raw": "Fv"
        },
        {
          "type": "calc",
          "latex": "60",
          "raw": "60"
        },
        {
          "type": "header",
          "text": "(c)",
          "raw": "(c)",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "110",
          "raw": "110"
        },
        {
          "type": "calc",
          "latex": "30",
          "raw": "30"
        },
        {
          "type": "calc",
          "latex": "40",
          "raw": "40"
        },
        {
          "type": "calc",
          "latex": "N",
          "raw": "N"
        },
        {
          "type": "calc",
          "latex": "Fu",
          "raw": "Fu"
        },
        {
          "type": "calc",
          "latex": "Fv",
          "raw": "Fv"
        },
        {
          "type": "calc",
          "latex": "40",
          "raw": "40"
        },
        {
          "type": "calc",
          "latex": "N",
          "raw": "N"
        },
        {
          "type": "calc",
          "latex": "Fu",
          "raw": "Fu"
        },
        {
          "type": "calc",
          "latex": "110",
          "raw": "110"
        },
        {
          "type": "calc",
          "latex": "Fv",
          "raw": "Fv"
        },
        {
          "type": "calc",
          "latex": "2–3.",
          "raw": "2–3."
        },
        {
          "type": "calc",
          "latex": "F_R",
          "raw": "FR"
        },
        {
          "type": "calc",
          "latex": "y",
          "raw": "y"
        },
        {
          "type": "calc",
          "latex": "z",
          "raw": "z"
        },
        {
          "type": "calc",
          "latex": "60j",
          "raw": "60j"
        },
        {
          "type": "calc",
          "latex": "50i",
          "raw": "50i"
        },
        {
          "type": "calc",
          "latex": "10k",
          "raw": "10k"
        },
        {
          "type": "calc",
          "latex": "\\beta",
          "raw": "b"
        },
        {
          "type": "calc",
          "latex": "g",
          "raw": "g"
        },
        {
          "type": "calc",
          "latex": "\\alpha",
          "raw": "a"
        },
        {
          "type": "calc",
          "latex": "x",
          "raw": "x"
        },
        {
          "type": "header",
          "text": "(a)",
          "raw": "(a)",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "F_R",
          "raw": "FR"
        },
        {
          "type": "calc",
          "latex": "y",
          "raw": "y"
        },
        {
          "type": "calc",
          "latex": "z",
          "raw": "z"
        },
        {
          "type": "calc",
          "latex": "60k",
          "raw": "60k"
        },
        {
          "type": "calc",
          "latex": "40i",
          "raw": "40i"
        },
        {
          "type": "calc",
          "latex": "80j",
          "raw": "80j"
        },
        {
          "type": "calc",
          "latex": "\\beta",
          "raw": "b"
        },
        {
          "type": "calc",
          "latex": "g",
          "raw": "g"
        },
        {
          "type": "calc",
          "latex": "\\alpha",
          "raw": "a"
        },
        {
          "type": "calc",
          "latex": "x",
          "raw": "x"
        },
        {
          "type": "header",
          "text": "(b)",
          "raw": "(b)",
          "latex": ""
        },
        {
          "type": "calc",
          "latex": "2–4.  a) F = \\left\\{-4\\hat{i} - 4\\hat{j} + 2\\hat{k}\\right\\}\\text{ kN}",
          "raw": "2–4.  a) F = \\left\\{-4\\hat{i} - 4\\hat{j} + 2\\hat{k}\\right\\}\\text{ kN}"
        },
        {
          "type": "calc",
          "latex": "F = \\sqrt{(4)^2 + (-4)^2 + (2)^2} = 6 kN",
          "raw": "F = 2(4)2 + (-4)2 + (2)2 = 6 kN"
        },
        {
          "type": "calc",
          "latex": "\\cos b = -2",
          "raw": "cos b = -2"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        },
        {
          "type": "calc",
          "latex": "b) F = \\left\\{20\\hat{i} + 20\\hat{j} - 10\\hat{k}\\right\\}\\text{ N}",
          "raw": "b) F = \\left\\{20\\hat{i} + 20\\hat{j} - 10\\hat{k}\\right\\}\\text{ N}"
        },
        {
          "type": "calc",
          "latex": "F = \\sqrt{(20)^2 + (20)^2 + (-10)^2} = 30 N",
          "raw": "F = 2(20)2 + (20)2 + (-10)2 = 30 N"
        },
        {
          "type": "ans",
          "latex": "\\cos b = 2",
          "raw": "cos b = 2"
        },
        {
          "type": "calc",
          "latex": "3",
          "raw": "3"
        }
      ],
      "final_answers_math": [
        "\\cos b = 2"
      ]
    },
    {
      "id": "F11-5",
      "chapter": 11,
      "chapter_name_en": "Virtual Work",
      "chapter_name_th": "งานเสมือน",
      "number": 5,
      "page_book": 613,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "Determine the angle u where the 50-kg bar is in \nequilibrium. The spring is unstretched at u = 60\u001c.",
      "question_th_summary": "ประยุกต์ใช้หลักการของงานเสมือน (Virtual Work)",
      "image": "images/problems/F11_5.webp",
      "solution_raw": "yG = 2.5 sin u dyG = 2.5 cos u du\n \n xA = 5 cos u dxC = -5 sin u du\n \n dU = 0; 1 -FspdxA2-WdyG = 0\n \n (15 000 sin u cos u - 7500 sin u\n \n - 1226.25 cos u)du = 0\n \nu = 56.33° = 56.3°\nAns.\n \nor u = 9.545° = 9.55°\nAns.",
      "final_answers": [
        "u = 56.33° = 56.3°",
        "or u = 9.545° = 9.55°"
      ],
      "theory_th": "หลักการของงานเสมือนและเสถียรภาพของสมดุล: \\(\\delta U = 0, \\quad \\frac{dV}{d\\theta} = 0, \\quad \\frac{d^2V}{d\\theta^2} > 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "yG = \\sqrt{.5 \\sin \\theta dyG} = 2.5 \\cos \\theta du",
          "raw": "yG = 2.5 sin u dyG = 2.5 cos u du"
        },
        {
          "type": "calc",
          "latex": "xA = 5 \\cos \\theta dxC = -5 \\sin \\theta du",
          "raw": "xA = 5 cos u dxC = -5 sin u du"
        },
        {
          "type": "calc",
          "latex": "dU = 0; 1 -FspdxA2-WdyG = 0",
          "raw": "dU = 0; 1 -FspdxA2-WdyG = 0"
        },
        {
          "type": "calc",
          "latex": "(15 000 \\sin \\theta \\cos \\theta - 7500 \\sin \\theta",
          "raw": "(15 000 sin u cos u - 7500 sin u"
        },
        {
          "type": "calc",
          "latex": "- 1226.25 \\cos \\theta)du = 0",
          "raw": "- 1226.25 cos u)du = 0"
        },
        {
          "type": "ans",
          "latex": "\\theta = 56.33^\\circ = 56.3^\\circ",
          "raw": "u = 56.33° = 56.3°"
        },
        {
          "type": "ans",
          "latex": "or \\theta = 9.545^\\circ = 9.55^\\circ",
          "raw": "or u = 9.545° = 9.55°"
        }
      ],
      "final_answers_math": [
        "\\theta = 56.33^\\circ = 56.3^\\circ",
        "or \\theta = 9.545^\\circ = 9.55^\\circ"
      ]
    },
    {
      "id": "F11-6",
      "chapter": 11,
      "chapter_name_en": "Virtual Work",
      "chapter_name_th": "งานเสมือน",
      "number": 6,
      "page_book": 613,
      "page_sol": 642,
      "difficulty": "hard",
      "difficulty_th": "ยาก",
      "question_en": "The scissors linkage is subjected to a force of \nP = 150 N. Determine the angle u for equilibrium. The \nspring is unstretched at u = 0\u001c. Neglect the mass of the links.",
      "question_th_summary": "ประยุกต์ใช้หลักการของงานเสมือน (Virtual Work)",
      "image": "images/problems/F11_6.webp",
      "solution_raw": "Fsp = 15 000(0.6 - 0.6 cos u)\n \n xC = 3[0.3 sin u] dxC = 0.9 cos u du\n \n yB = 2[0.3 cos u] dyB = -0.6 sin u du\n \ndU = 0; PdxC + FspdyB = 0\n \n (135 cos u - 5400 sin u + 5400 sin u cos u)du = 0\n \nu = 20.9°\nAns.\nChapter 11",
      "final_answers": [
        "u = 20.9°"
      ],
      "theory_th": "หลักการของงานเสมือนและเสถียรภาพของสมดุล: \\(\\delta U = 0, \\quad \\frac{dV}{d\\theta} = 0, \\quad \\frac{d^2V}{d\\theta^2} > 0\\)",
      "formatted_steps": [
        {
          "type": "calc",
          "latex": "Fsp = 15 000(0.6 - 0.6 \\cos \\theta)",
          "raw": "Fsp = 15 000(0.6 - 0.6 cos u)"
        },
        {
          "type": "calc",
          "latex": "xC = 3[0.3 \\sin \\theta] dxC = 0.9 \\cos \\theta du",
          "raw": "xC = 3[0.3 sin u] dxC = 0.9 cos u du"
        },
        {
          "type": "calc",
          "latex": "yB = 2[0.3 \\cos \\theta] dyB = -0.6 \\sin \\theta du",
          "raw": "yB = 2[0.3 cos u] dyB = -0.6 sin u du"
        },
        {
          "type": "calc",
          "latex": "dU = 0; PdxC + FspdyB = 0",
          "raw": "dU = 0; PdxC + FspdyB = 0"
        },
        {
          "type": "calc",
          "latex": "(135 \\cos \\theta - 5400 \\sin \\theta + 5400 \\sin \\theta \\cos \\theta)du = 0",
          "raw": "(135 cos u - 5400 sin u + 5400 sin u cos u)du = 0"
        },
        {
          "type": "ans",
          "latex": "\\theta = 20.9^\\circ",
          "raw": "u = 20.9°"
        }
      ],
      "final_answers_math": [
        "\\theta = 20.9^\\circ"
      ]
    }
  ]
};
