window.LESSONS_DATA = {
  "1": {
    "chapter": 1,
    "title_en": "General Principles",
    "title_th": "หลักการทั่วไป",
    "pages": "24–37 (14 หน้า)",
    "total_problems": 16,
    "pdf_file": "pdf_chapters/Chapter_01_General_Principles.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_01_review_p1.webp",
      "images/lesson_reviews/ch_01_review_p2.webp"
    ],
    "overview": "ปูพื้นฐานแนวคิดทางกลศาสตร์ กฎการเคลื่อนที่ของนิวตัน ระบบหน่วยวัดสากล (SI Units vs US Customary) คำนำหน้าหน่วยเอสไอ (Prefixes) และหลักการปัดเศษเลขนัยสำคัญในการคำนวณทางวิศวกรรม",
    "topics": [
      "1.1 Mechanics & Fundamental Concepts (มวล ความยาว เวลา แรง)",
      "1.2 Newton's Three Laws of Motion & Gravitational Attraction",
      "1.3 Units of Measurement (SI Units: N, kg, m, s vs FPS Units: lb, slug, ft, s)",
      "1.4 SI Prefixes (kilo, mega, giga, milli, micro, nano)",
      "1.5 Numerical Calculations & Significant Figures (กฎ 3 เลขนัยสำคัญ)",
      "1.6 General Procedure for Analysis (ขั้นตอนการวิเคราะห์ปัญหาทางสถิตยศาสตร์)"
    ],
    "formulas": [
      {
        "name": "กฎแรงโน้มถ่วงสากล (Universal Gravitation)",
        "latex": "F = G \\frac{m_1 m_2}{r^2}"
      },
      {
        "name": "น้ำหนักของวัตถุ (Weight)",
        "latex": "W = m \\cdot g \\quad (g = 9.81 \\text{ m/s}^2 = 32.2 \\text{ ft/s}^2)"
      },
      {
        "name": "คำนำหน้าเอสไอ (SI Prefixes)",
        "latex": "\\text{k} (10^3), \\quad \\text{M} (10^6), \\quad \\text{G} (10^9), \\quad \\text{m} (10^{-3}), \\quad \\mu (10^{-6}), \\quad \\text{n} (10^{-9})"
      }
    ],
    "procedure": [
      "ตรวจสอบและแปลงหน่วยทุกค่าให้อยู่ในระบบเดียวกันก่อนเริ่มคำนวณ",
      "เขียนสมการในรูปแบบสัญลักษณ์ก่อนแทนค่าตัวเลข",
      "คงทศนิยมอย่างน้อย 4 ตำแหน่งระหว่างขั้นตอนการคำนวณ",
      "ตอบผลลัพธ์สุดท้ายด้วยเลขนัยสำคัญ 3 ตัว (Significant Figures) พร้อมระบุหน่วยให้ถูกต้องเสมอ"
    ]
  },
  "2": {
    "chapter": 2,
    "title_en": "Force Vectors",
    "title_th": "เวกเตอร์ของแรง",
    "pages": "38–107 (70 หน้า)",
    "total_problems": 136,
    "pdf_file": "pdf_chapters/Chapter_02_Force_Vectors.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_02_review_p1.webp",
      "images/lesson_reviews/ch_02_review_p2.webp",
      "images/lesson_reviews/ch_02_review_p3.webp"
    ],
    "overview": "การบวกและแยกแรงใน 2 มิติและ 3 มิติ กฎรูปสี่เหลี่ยมด้านขนาน กฎของไซน์และโคไซน์ เวกเตอร์คาร์ทีเซียน (Cartesian Vectors) มุมและโคไซน์แสดงทิศทาง (Coordinate Direction Angles) เวกเตอร์บอกตำแหน่ง (Position Vectors) แรงตามแนวเส้นตรง และผลคูณจุด (Dot Product) เพื่อหาการฉายแรงและมุมระหว่างเวกเตอร์",
    "topics": [
      "2.1 Scalars and Vectors & Vector Operations",
      "2.2 Vector Addition of Forces (Parallelogram Law & Triangle Rule)",
      "2.3 Coplanar Force Systems & Rectangular Components",
      "2.4 Cartesian Vectors in 3D & Magnitude Calculation",
      "2.5 Coordinate Direction Angles (alpha, beta, gamma)",
      "2.6 Addition of Cartesian Vectors (Sum of components)",
      "2.7 Position Vectors & Force Directed Along a Line",
      "2.8 Dot Product (ผลคูณจุดเพื่อหามุมและการฉายเวกเตอร์)"
    ],
    "formulas": [
      {
        "name": "กฎของโคไซน์ (Law of Cosines)",
        "latex": "C = \\sqrt{A^2 + B^2 - 2AB \\cos c}"
      },
      {
        "name": "กฎของไซน์ (Law of Sines)",
        "latex": "\\frac{A}{\\sin a} = \\frac{B}{\\sin b} = \\frac{C}{\\sin c}"
      },
      {
        "name": "เวกเตอร์หนึ่งหน่วย (Unit Vector in 3D)",
        "latex": "\\mathbf{u}_A = \\frac{\\mathbf{A}}{A} = \\cos\\alpha\\,\\mathbf{i} + \\cos\\beta\\,\\mathbf{j} + \\cos\\gamma\\,\\mathbf{k}"
      },
      {
        "name": "ความสัมพันธ์ของมุมทิศทาง",
        "latex": "\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1"
      },
      {
        "name": "แรงตามแนวเส้นตรง AB",
        "latex": "\\mathbf{F} = F \\cdot \\mathbf{u}_{AB} = F \\left(\\frac{\\mathbf{r}_B - \\mathbf{r}_A}{|\\mathbf{r}_B - \\mathbf{r}_A|}\\right)"
      },
      {
        "name": "ผลคูณสเกลาร์ (Dot Product)",
        "latex": "\\mathbf{A} \\cdot \\mathbf{B} = A B \\cos\\theta = A_x B_x + A_y B_y + A_z B_z"
      }
    ],
    "procedure": [
      "สำหรับ 2D: ใช้กฎสี่เหลี่ยมด้านขนาน หรือแตกแรงลงแกน x และ y ด้วย sin/cos",
      "สำหรับ 3D: เขียนพิกัดจุดเริ่มต้นและปลายทาง หาเวกเตอร์บอกตำแหน่ง r_AB แล้วทำเป็นเวกเตอร์หนึ่งหน่วย u_AB",
      "รวมแรงลัพธ์: รวมแต่ละแกน R_x = sum F_x, R_y = sum F_y, R_z = sum F_z",
      "หาขนาดแรงลัพธ์: R = sqrt(R_x^2 + R_y^2 + R_z^2) และหามุมทิศทางจาก cos(alpha) = R_x / R"
    ]
  },
  "3": {
    "chapter": 3,
    "title_en": "Equilibrium of a Particle",
    "title_th": "สมดุลของอนุภาค",
    "pages": "108–141 (34 หน้า)",
    "total_problems": 62,
    "pdf_file": "pdf_chapters/Chapter_03_Equilibrium_of_a_Particle.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_03_review_p1.webp",
      "images/lesson_reviews/ch_03_review_p2.webp"
    ],
    "overview": "สภาวะสมดุลของอนุภาคที่ไม่มีขนาด (จุดร่วม) เมื่อแรงลัพธ์เป็นศูนย์ การวาดแผนภาพวัตถุอิสระ (Free-Body Diagram: FBD) การคำนวณแรงดึงในสายเคเบิล รอกไร้แรงเสียดทาน แรงสปริงเชิงเส้น (Hooke's Law) และการแก้ระบบสมการสมดุล 2D และ 3D",
    "topics": [
      "3.1 Condition for the Equilibrium of a Particle (F_R = sum F = 0)",
      "3.2 The Free-Body Diagram (FBD) - การแยกอนุภาคและเขียนแรงทุกแรง",
      "3.3 Coplanar Force Systems (2D Equilibrium: sum F_x = 0, sum F_y = 0)",
      "3.4 Linear Elastic Springs (F = k * s = k * (l - l_0))",
      "3.5 Cables and Pulleys (สายเคเบิลส่งผ่านแรงดึงอย่างสม่ำเสมอ)",
      "3.6 Three-Dimensional Force Systems (3D Equilibrium: sum F_x = sum F_y = sum F_z = 0)"
    ],
    "formulas": [
      {
        "name": "สมการสมดุลในระนาบ 2 มิติ",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0"
      },
      {
        "name": "สมการสมดุลใน 3 มิติ",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0"
      },
      {
        "name": "กฎของฮุกสำหรับสปริง (Hooke's Law)",
        "latex": "F_{sp} = k \\cdot s = k (l - l_0)"
      }
    ],
    "procedure": [
      "เลือกอนุภาคจุดร่วมที่มีแรงกระทำมากที่สุดและมีตัวแปรที่ต้องการหา",
      "วาด FBD แสดงแรงที่ทราบค่าและไม่ทราบค่าทั้งหมด (สมมติทิศทางแรงดึงออกจากจุด)",
      "ตั้งแกนพิกัด x-y (หรือ x-y-z) ให้สอดคล้องกับทิศทางแรงส่วนใหญ่เพื่อลดการแตกแรง",
      "ตั้งสมการ sum F_x = 0 และ sum F_y = 0 แล้วแก้ระบบสมการเชิงเส้นหาค่าตัวแปร"
    ]
  },
  "4": {
    "chapter": 4,
    "title_en": "Force System Resultants",
    "title_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
    "pages": "142–227 (86 หน้า)",
    "total_problems": 161,
    "pdf_file": "pdf_chapters/Chapter_04_Force_System_Resultants.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_04_review_p1.webp",
      "images/lesson_reviews/ch_04_review_p2.webp",
      "images/lesson_reviews/ch_04_review_p3.webp"
    ],
    "overview": "โมเมนต์ของแรงรอบจุด (สูตรสเกลาร์ F*d และเวกเตอร์ r x F) ทฤษฎีของวาริญง (Varignon's Theorem) โมเมนต์รอบแกนที่กำหนด โมเมนต์ของคู่ควบ (Couple Moment) การยุบรวมระบบแรงและคู่ควบให้เป็นแรงลัพธ์และโมเมนต์ลัพธ์เดี่ยว และการลดรูประบบแรงกระจาย (Distributed Loading)",
    "topics": [
      "4.1 Moment of a Force - Scalar Formulation (M_O = F * d)",
      "4.2 Cross Product & Vector Formulation (M_O = r x F)",
      "4.3 Principle of Moments (Varignon's Theorem)",
      "4.4 Moment of a Force About a Specified Axis (M_a = u_a . (r x F))",
      "4.5 Moment of a Couple (M = r x F, อิสระจากจุดหมุน)",
      "4.6 Simplification of a Force and Couple System",
      "4.7 Further Reduction of a Force System (Wrench / Screw Resultant)",
      "4.8 Reduction of a Simple Distributed Loading (แรงกระจายรูปสี่เหลี่ยม สามเหลี่ยม พาราโบลา)"
    ],
    "formulas": [
      {
        "name": "โมเมนต์รอบจุด (เวกเตอร์)",
        "latex": "\\mathbf{M}_O = \\mathbf{r} \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ r_x & r_y & r_z \\\\ F_x & F_y & F_z \\end{vmatrix}"
      },
      {
        "name": "โมเมนต์รอบแกนระบุ a-a",
        "latex": "M_a = \\mathbf{u}_a \\cdot (\\mathbf{r} \\times \\mathbf{F})"
      },
      {
        "name": "โมเมนต์คู่ควบ (Couple Moment)",
        "latex": "\\mathbf{M} = \\mathbf{r} \\times \\mathbf{F}"
      },
      {
        "name": "แรงลัพธ์ของแรงกระจาย (Distributed Load)",
        "latex": "F_R = \\int_0^L w(x)\\,dx = \\text{พื้นที่ใต้กราฟ}"
      },
      {
        "name": "ตำแหน่งแรงลัพธ์ของแรงกระจาย",
        "latex": "\\bar{x} = \\frac{\\int_0^L x\\,w(x)\\,dx}{\\int_0^L w(x)\\,dx} = \\text{จุดเซนทรอยด์ของพื้นที่}"
      }
    ],
    "procedure": [
      "หาสเกลาร์: M = F * d เมื่อ d คือระยะตั้งฉากจากจุดหมุนไปยังแนวแรง ใช้กฎมือขวาเพื่อดูทิศทวน/ตามเข็ม",
      "หาเวกเตอร์: ลากเวกเตอร์ตำแหน่ง r จากจุดหมุน O ไปยังจุดใดก็ได้บนแนวแรง F แล้วทำการคูณ Cross Product",
      "แรงกระจาย: หาพื้นที่ใต้กราฟเพื่อเป็นขนาดแรงลัพธ์ F_R และวางที่ตำแหน่งจุดเซนทรอยด์ x̄ ของรูปร่างนั้น"
    ]
  },
  "5": {
    "chapter": 5,
    "title_en": "Equilibrium of a Rigid Body",
    "title_th": "สมดุลของวัตถุเกร็ง",
    "pages": "228–293 (66 หน้า)",
    "total_problems": 69,
    "pdf_file": "pdf_chapters/Chapter_05_Equilibrium_of_a_Rigid_Body.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_05_review_p1.webp",
      "images/lesson_reviews/ch_05_review_p2.webp"
    ],
    "overview": "สมดุลของวัตถุที่มีขนาด (Rigid Body) แผนภาพอิสระ (FBD) ของวัตถุเกร็ง แรงปฏิกิริยาที่จุดรองรับชนิดต่างๆ (ลูกกลิ้ง สลัก ข้อต่อคงที่ ฯลฯ) สมการสมดุลใน 2 มิติและ 3 มิติ ชิ้นส่วนสองแรง (Two-Force Members) และสามแรง (Three-Force Members) และสภาวะโครงสร้างไม่กำหนดทางสถิตศาสตร์ (Statically Indeterminate)",
    "topics": [
      "5.1 Conditions for Rigid-Body Equilibrium (sum F = 0, sum M_O = 0)",
      "5.2 Free-Body Diagrams (การปลดจุดรองรับและใส่แรงปฏิกิริยา)",
      "5.3 Support Reactions in 2D (Roller: 1 แรง, Pin: 2 แรง, Fixed: 2 แรง + 1 โมเมนต์)",
      "5.4 Equations of Equilibrium in 2D (sum F_x = 0, sum F_y = 0, sum M_A = 0)",
      "5.5 Two-Force and Three-Force Members (ชิ้นส่วนสองแรงและสามแรง)",
      "5.6 Support Reactions in 3D (Ball-and-socket, Journal bearing, Hinge, Fixed)",
      "5.7 Equations of Equilibrium in 3D (6 สมการสมดุล)"
    ],
    "formulas": [
      {
        "name": "สมการสมดุลวัตถุเกร็งใน 2 มิติ",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0"
      },
      {
        "name": "สมการสมดุลวัตถุเกร็งใน 3 มิติ",
        "latex": "\\sum \\mathbf{F} = 0, \\quad \\sum \\mathbf{M}_O = 0 \\implies 6 \\text{ สมการสเกลาร์}"
      },
      {
        "name": "ชิ้นส่วนสองแรง (Two-Force Member)",
        "latex": "\\mathbf{F}_A = -\\mathbf{F}_B \\quad (\\text{แรงมีขนาดเท่ากัน แนวแรงผ่านจุดเชื่อมทั้งสอง})"
      }
    ],
    "procedure": [
      "วาด FBD ของวัตถุเกร็งอย่างสมบูรณ์ ปลดจุดยึดและใส่แรงปฏิกิริยาตามประเภทจุดรองรับ",
      "พิจารณาชิ้นส่วนสองแรง (Two-Force Members) เพื่อลดจำนวนตัวแปรที่ไม่ทราบค่า",
      "เลือกจุดเทกโมเมนต์ (sum M = 0) ณ จุดที่มีแรงไม่ทราบค่าตัดผ่านมากที่สุดเพื่อตัดตัวแปร",
      "ใช้สมการ sum F_x = 0 และ sum F_y = 0 เพื่อหาตัวแปรที่เหลือ"
    ]
  },
  "6": {
    "chapter": 6,
    "title_en": "Structural Analysis",
    "title_th": "การวิเคราะห์โครงสร้าง",
    "pages": "294–363 (70 หน้า)",
    "total_problems": 113,
    "pdf_file": "pdf_chapters/Chapter_06_Structural_Analysis.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_06_review_p1.webp",
      "images/lesson_reviews/ch_06_review_p2.webp"
    ],
    "overview": "การวิเคราะห์โครงถักระนาบ (Simple Trusses) วิธีพิจารณาข้อต่อ (Method of Joints) ชิ้นส่วนที่มีแรงเป็นศูนย์ (Zero-Force Members) วิธีตัดหน้าตัด (Method of Sections) โครงสร้างสามมิติ (Space Trusses) และการวิเคราะห์โครงเฟรม (Frames) และเครื่องกล (Machines)",
    "topics": [
      "6.1 Simple Trusses & Assumptions for Design (แรงกระทำที่ข้อต่อ ชิ้นส่วนสองแรง)",
      "6.2 The Method of Joints (สมดุลอนุภาคที่แต่ละข้อต่อ)",
      "6.3 Zero-Force Members (การตรวจหาชิ้นส่วนแรงศูนย์อย่างรวดเร็ว)",
      "6.4 The Method of Sections (ตัดผ่านชิ้นส่วนที่ต้องการหาแรงไม่เกิน 3 ชิ้น)",
      "6.5 Space Trusses (โครงถัก 3 มิติ)",
      "6.6 Frames and Machines (ชิ้นส่วนรับแรงหลายจุด และแรงภายในข้อต่อ)"
    ],
    "formulas": [
      {
        "name": "วิธีข้อต่อ (Method of Joints)",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0 \\quad (\\text{พิจารณาที่แต่ละ Joint})"
      },
      {
        "name": "วิธีตัดหน้าตัด (Method of Sections)",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0 \\quad (\\text{สำหรับส่วนที่ตัด})"
      },
      {
        "name": "การตรวจสอบ Zero-Force Member",
        "latex": "\\text{สองชิ้นไม่ขนานกันไม่มีแรงภายนอก } \\implies F_1 = F_2 = 0"
      }
    ],
    "procedure": [
      "Method of Joints: เหมาะสำหรับหาแรงในชิ้นส่วนเกือบทุกชิ้น เริ่มต้นที่ข้อต่อที่มีตัวแปรไม่ทราบค่าไม่เกิน 2 ตัว",
      "Zero-Force Members: สังเกตข้อต่อที่มี 2 ชิ้นส่วนไม่ขนานกันและไม่มีแรงภายนอก หรือ 3 ชิ้นส่วนโดย 2 ชิ้นร่วมแนวกัน",
      "Method of Sections: ตัดผ่านชิ้นส่วนที่ต้องการหา (ไม่เกิน 3 ชิ้น) วาด FBD ฝั่งใดฝั่งหนึ่ง แล้วเทกโมเมนต์ ณ จุดตัดของ 2 ชิ้นที่ไม่ต้องการ",
      "Frames & Machines: แยกชิ้นส่วนแต่ละชิ้น วาด FBD ของทุกชิ้น แรงกระทำระหว่างชิ้นส่วนจะมีขนาดเท่ากันแต่ทิศตรงข้าม (กฎข้อ 3 ของนิวตัน)"
    ]
  },
  "7": {
    "chapter": 7,
    "title_en": "Internal Forces",
    "title_th": "แรงภายใน",
    "pages": "364–421 (58 หน้า)",
    "total_problems": 109,
    "pdf_file": "pdf_chapters/Chapter_07_Internal_Forces.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_07_review_p1.webp",
      "images/lesson_reviews/ch_07_review_p2.webp"
    ],
    "overview": "แรงภายในที่เกิดขึ้นในชิ้นส่วนโครงสร้าง: แรงในแนวแกน (Axial Force N) แรงเฉือน (Shear Force V) และโมเมนต์ดัด (Bending Moment M) การเขียนฟังก์ชันแรงเฉือนและโมเมนต์ดัด แผนภาพแรงเฉือนและโมเมนต์ดัด (SFD & BMD) ความสัมพันธ์เชิงอนุพันธ์ และการวิเคราะห์สายเคเบิลรับแรง",
    "topics": [
      "7.1 Internal Loadings Developed in Structural Members (N, V, M)",
      "7.2 Sign Conventions (ข้อกำหนดเครื่องหมายบวกสำหรับ N, V, M)",
      "7.3 Shear and Moment Equations and Diagrams (ฟังก์ชัน V(x) และ M(x))",
      "7.4 Relations Between Distributed Load, Shear, and Moment (dV/dx = -w, dM/dx = V)",
      "7.5 Cables Subjected to Concentrated Loads",
      "7.6 Cables Subjected to a Uniform Distributed Load (Parabolic & Catenary Cables)"
    ],
    "formulas": [
      {
        "name": "ความสัมพันธ์อนุพันธ์แรงเฉือนและแรงกระจาย",
        "latex": "\\frac{dV}{dx} = -w(x) \\implies \\Delta V = -\\int w(x)\\,dx"
      },
      {
        "name": "ความสัมพันธ์อนุพันธ์โมเมนต์และแรงเฉือน",
        "latex": "\\frac{dM}{dx} = V \\implies \\Delta M = \\int V\\,dx = \\text{พื้นที่ใต้กราฟ SFD}"
      },
      {
        "name": "ตำแหน่งโมเมนต์ดัดสูงสุด",
        "latex": "M_{\\max} \\text{ เกิดขึ้นที่จุดที่ } V(x) = 0"
      }
    ],
    "procedure": [
      "หาแรงปฏิกิริยาที่จุดรองรับทั้งหมดของคานก่อนเสมอ",
      "ตัดหน้าตัดที่ตำแหน่ง x ใดๆ วาด FBD ใส่ N, V, M ในทิศทางบวกมาตรฐาน",
      "ใช้สมการสมดุล sum F_x = 0, sum F_y = 0, sum M_cut = 0 เพื่อสร้างสมการ V(x) และ M(x)",
      "วาด SFD: เริ่มจากซ้าย แรงกดลงดึงกราฟลง แรงดันขึ้นดึงกราฟขึ้น",
      "วาด BMD: ความชันของกราฟ M คือค่าของ V พื้นที่ใต้กราฟ V คือการเปลี่ยนแปลงของ M"
    ]
  },
  "8": {
    "chapter": 8,
    "title_en": "Friction",
    "title_th": "ความเสียดทาน",
    "pages": "422–485 (64 หน้า)",
    "total_problems": 104,
    "pdf_file": "pdf_chapters/Chapter_08_Friction.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_08_review_p1.webp",
      "images/lesson_reviews/ch_08_review_p2.webp",
      "images/lesson_reviews/ch_08_review_p3.webp"
    ],
    "overview": "ทฤษฎีแรงเสียดทานแห้ง (Coulomb Friction) สภาวะก่อนเริ่มเคลื่อนที่ (Impending Motion) การตรวจสอบการไถล (Slipping) เทียบกับการพลิกคว่ำ (Tipping) การวิเคราะห์ลิ่ม (Wedges) สกรูเกลียว (Screws) แบริ่งสมบูรณ์ (Flat/Collar Bearings) และแรงเสียดทานในสายพาน (Belt Friction)",
    "topics": [
      "8.1 Characteristics of Dry Friction (สถิต vs จลน์, mu_s vs mu_k)",
      "8.2 Problems Involving Dry Friction (สภาวะสมดุล, เริ่มไถล, หรือพลิกคว่ำ)",
      "8.3 Wedges (การวิเคราะห์ลิ่มเพื่อยกของหนัก)",
      "8.4 Frictional Forces on Screws (Square-threaded screws, Self-locking)",
      "8.5 Frictional Forces on Flat Belts (สายพานส่งกำลังรอบเพลา T_2 = T_1 * e^(mu * beta))",
      "8.6 Frictional Forces on Collar Bearings and Disks",
      "8.7 Rolling Resistance (ความต้านทานการกลิ้ง)"
    ],
    "formulas": [
      {
        "name": "แรงเสียดทานสถิตสูงสุด (Max Static Friction)",
        "latex": "F_{\\max} = \\mu_s N"
      },
      {
        "name": "แรงเสียดทานจลน์ (Kinetic Friction)",
        "latex": "F_k = \\mu_k N"
      },
      {
        "name": "มุมเสียดทานสถิต (Angle of Static Friction)",
        "latex": "\\tan\\phi_s = \\mu_s"
      },
      {
        "name": "สูตรแรงเสียดทานสายพาน (Belt Friction)",
        "latex": "T_2 = T_1 \\cdot e^{\\mu \\beta} \\quad (T_2 > T_1, \\, \\beta \\text{ ในหน่วยเรเดียน})"
      },
      {
        "name": "สกรูเกลียวสี่เหลี่ยม (Screw)",
        "latex": "M = W r \\tan(\\theta \\pm \\phi_s)"
      }
    ],
    "procedure": [
      "วาด FBD ใส่แรงปฏิกิริยาตั้งฉาก N และแรงเสียดทาน F ขนานผิวสัมผัสต้านการเคลื่อนที่",
      "ตรวจสอบสมมติฐาน: วัตถุเริ่มไถล (F = mu_s * N) หรือวัตถุเริ่มพลิกคว่ำ (N เลื่อนไปอยู่ที่ขอบ x = b)",
      "คำนวณตำแหน่งแนวแรง N จาก sum M = 0 หากค่า x เกินขอบเขตของวัตถุแสดงว่าจะเกิดการพลิกคว่ำก่อนไถล",
      "สำหรับสายพาน: ตรวจสอบมุมโอบ beta ในหน่วยเรเดียน และกำหนด T_2 ให้เป็นด้านที่มีแรงดึงมากกว่าเสมอ"
    ]
  },
  "9": {
    "chapter": 9,
    "title_en": "Center of Gravity and Centroid",
    "title_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
    "pages": "486–549 (64 หน้า)",
    "total_problems": 119,
    "pdf_file": "pdf_chapters/Chapter_09_Center_of_Gravity_and_Centroid.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_09_review_p1.webp",
      "images/lesson_reviews/ch_09_review_p2.webp"
    ],
    "overview": "จุดศูนย์ถ่วงของวัตถุ (Center of Gravity) จุดศูนย์กลางมวล (Center of Mass) เซนทรอยด์ของเส้น พื้นที่ และปริมาตร (Centroid) การอินทิเกรตหาเซนทรอยด์ รูปร่างประกอบ (Composite Bodies) ทฤษฎีบทของพัปพัส-กูลดินัส (Pappus-Guldinus Theorems) และแรงดันของของไหลสถิตบนพื้นผิว (Hydrostatic Pressure)",
    "topics": [
      "9.1 Center of Gravity, Center of Mass, and the Centroid of a Body",
      "9.2 Composite Bodies (การรวมชิ้นส่วนมาตรฐาน: สี่เหลี่ยม สามเหลี่ยม ครึ่งวงกลม วงกลมกลวง)",
      "9.3 Theorems of Pappus and Guldinus (คำนวณพื้นที่ผิวและปริมาตรจากการหมุน)",
      "9.4 Resultant of a General Distributed Loading",
      "9.5 Fluid Pressure on Flat and Curved Surfaces (แรงดันของเหลว p = rho * g * h)"
    ],
    "formulas": [
      {
        "name": "เซนทรอยด์ของพื้นที่ (การอินทิเกรต)",
        "latex": "\\bar{x} = \\frac{\\int \\tilde{x}\\,dA}{\\int dA}, \\quad \\bar{y} = \\frac{\\int \\tilde{y}\\,dA}{\\int dA}"
      },
      {
        "name": "เซนทรอยด์ของรูปร่างประกอบ (Composite)",
        "latex": "\\bar{X} = \\frac{\\sum \\tilde{x}_i A_i}{\\sum A_i}, \\quad \\bar{Y} = \\frac{\\sum \\tilde{y}_i A_i}{\\sum A_i}"
      },
      {
        "name": "ทฤษฎีพัปพัส: พื้นที่ผิวจากการหมุน",
        "latex": "A = 2\\pi \\bar{y} L \\quad (\\text{หมุนเส้นความยาว } L \\text{ รอบแกน})"
      },
      {
        "name": "ทฤษฎีพัปพัส: ปริมาตรจากการหมุน",
        "latex": "V = 2\\pi \\bar{y} A \\quad (\\text{หมุนพื้นที่ } A \\text{ รอบแกน})"
      }
    ],
    "procedure": [
      "Composite Bodies: แบ่งรูปร่างออกเป็นรูปทรงเรขาคณิตมาตรฐาน กำหนดแกนอ้างอิง (x, y)",
      "สร้างตารางคำนวณ: คอลัมน์ รูปร่าง, พื้นที่ A_i (ถ้าเป็นรูกลวงให้เป็นค่าลบ), พิกัดเซนทรอยด์ (x̃_i, ỹ_i), และผลคูณ x̃_i*A_i, ỹ_i*A_i",
      "หาผลรวม sum A, sum x̃*A, sum ỹ*A แล้วคำนวณ X̄ = sum(x̃*A)/sum(A) และ Ȳ = sum(ỹ*A)/sum(A)",
      "แรงดันของไหล: p = rho*g*h แปรผันตรงกับความลึก คิดเสมือนแรงกระจายรูปสามเหลี่ยมหรือสี่เหลี่ยมคางหมู"
    ]
  },
  "10": {
    "chapter": 10,
    "title_en": "Moments of Inertia",
    "title_th": "โมเมนต์ความเฉื่อย",
    "pages": "550–601 (52 หน้า)",
    "total_problems": 90,
    "pdf_file": "pdf_chapters/Chapter_10_Moments_of_Inertia.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_10_review_p1.webp",
      "images/lesson_reviews/ch_10_review_p2.webp"
    ],
    "overview": "โมเมนต์ความเฉื่อยของพื้นที่ (Area Moment of Inertia I_x, I_y) ทฤษฎีบทแกนขนาน (Parallel-Axis Theorem) รัศมีไจเรชัน (Radius of Gyration) โมเมนต์ความเฉื่อยของพื้นที่ประกอบ ผลคูณความเฉื่อย (Product of Inertia I_xy) การหมุนแกนและแกนหลักความเฉื่อย (Principal Axes & Mohr's Circle)",
    "topics": [
      "10.1 Definition of Moments of Inertia for Areas (I_x = int y^2 dA, I_y = int x^2 dA)",
      "10.2 Parallel-Axis Theorem for an Area (I = I_bar + A * d^2)",
      "10.3 Radius of Gyration of an Area (k = sqrt(I / A))",
      "10.4 Moments of Inertia for Composite Areas (การรวมชิ้นส่วนและคิดแกนขนาน)",
      "10.5 Product of Inertia for an Area (I_xy = int x y dA, เป็นศูนย์ถ้ามีแกนสมมาตร)",
      "10.6 Moments of Inertia for an Area about Inclined Axes",
      "10.7 Mohr's Circle for Moments of Inertia (วงกลมมอร์หาค่าสูงสุด I_max, I_min)"
    ],
    "formulas": [
      {
        "name": "โมเมนต์ความเฉื่อยของพื้นที่",
        "latex": "I_x = \\int y^2\\,dA, \\quad I_y = \\int x^2\\,dA"
      },
      {
        "name": "ทฤษฎีบทแกนขนาน (Parallel-Axis Theorem)",
        "latex": "I_x = \\bar{I}_{x'} + A d_y^2, \\quad I_y = \\bar{I}_{y'} + A d_x^2"
      },
      {
        "name": "โมเมนต์ความเฉื่อยขั้ว (Polar Moment)",
        "latex": "J_O = I_x + I_y = \\int r^2\\,dA"
      },
      {
        "name": "รัศมีไจเรชัน (Radius of Gyration)",
        "latex": "k_x = \\sqrt{\\frac{I_x}{A}}, \\quad k_y = \\sqrt{\\frac{I_y}{A}}"
      },
      {
        "name": "โมเมนต์ความเฉื่อยสี่เหลี่ยมรอบแกนเซนทรอยด์",
        "latex": "\\bar{I}_{x'} = \\frac{1}{12} b h^3, \\quad \\bar{I}_{y'} = \\frac{1}{12} h b^3"
      }
    ],
    "procedure": [
      "แบ่งพื้นที่ออกเป็นชิ้นส่วนมาตรฐาน (สี่เหลี่ยม สามเหลี่ยม วงกลม ฯลฯ)",
      "หาตำแหน่งเซนทรอยด์รวม (X̄, Ȳ) ของพื้นที่ทั้งหมดก่อน",
      "สำหรับแต่ละชิ้นส่วน: หา I_bar รอบแกนเซนทรอยด์ของตัวเอง, คำนวณระยะ d จากแกนเซนทรอยด์ชิ้นส่วนไปยังแกนอ้างอิง",
      "ใช้สูตรแกนขนาน I = I_bar + A * d^2 แล้วนำมารวมกัน (ชิ้นส่วนที่เป็นรูกลวงให้ลบออก)"
    ]
  },
  "11": {
    "chapter": 11,
    "title_en": "Virtual Work",
    "title_th": "งานเสมือน",
    "pages": "602–637 (36 หน้า)",
    "total_problems": 41,
    "pdf_file": "pdf_chapters/Chapter_11_Virtual_Work.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_11_review_p1.webp",
      "images/lesson_reviews/ch_11_review_p2.webp"
    ],
    "overview": "หลักการของงานเสมือน (Principle of Virtual Work dU = 0) การขจัดเสมือน (Virtual Displacement) การวิเคราะห์กลไกและระบบเชื่อมโยงที่เคลื่อนที่ได้ พลังงานศักย์ (Potential Energy V) สภาวะสมดุลจากพลังงานศักย์ (dV/dq = 0) และการตรวจสอบความเสถียรของสภาวะสมดุล (Stability of Equilibrium: เสถียร ไม่เสถียร สะเทิน)",
    "topics": [
      "11.1 Definition of Work and Virtual Work (dU = F . dr, dU = M * dtheta)",
      "11.2 Principle of Virtual Work for an Ideal System of Connected Bodies (delta U = 0)",
      "11.3 Conservative Forces & Potential Energy (V_g = W * y, V_e = 1/2 * k * s^2)",
      "11.4 Energy Criterion for Equilibrium (dV/dtheta = 0)",
      "11.5 Stability of Equilibrium (d^2V/dtheta^2 > 0: เสถียร, < 0: ไม่เสถียร, = 0: สะเทิน)"
    ],
    "formulas": [
      {
        "name": "หลักการงานเสมือน (Virtual Work)",
        "latex": "\\delta U = \\sum \\mathbf{F} \\cdot \\delta\\mathbf{r} + \\sum \\mathbf{M} \\cdot \\delta\\boldsymbol{\\theta} = 0"
      },
      {
        "name": "พลังงานศักย์โน้มถ่วงและสปริง",
        "latex": "V = V_g + V_e = W y + \\frac{1}{2} k s^2"
      },
      {
        "name": "เงื่อนไขสมดุลจากพลังงานศักย์",
        "latex": "\\frac{dV}{dq} = 0 \\quad (q \\text{ คือพิกัดอิสระ เช่น } \\theta)"
      },
      {
        "name": "เกณฑ์ความเสถียรของสมดุล (Stability)",
        "latex": "\\frac{d^2V}{dq^2} > 0 \\implies \\text{เสถียร (Stable)}, \\quad \\frac{d^2V}{dq^2} < 0 \\implies \\text{ไม่เสถียร (Unstable)}"
      }
    ],
    "procedure": [
      "กำหนดพิกัดอิสระ (Coordinate q เช่น มุม theta หรือระยะ x) เพื่ออธิบายตำแหน่งของระบบ",
      "เขียนพิกัดจุดกระทำของแรงทุกแรง (ที่ทำงาน) ในรูปของฟังก์ชันตัวแปร q",
      "หาอนุพันธ์เพื่อหาการขจัดเสมือน delta r = (dr/dq) * delta q",
      "ตั้งสมการงานเสมือน delta U = 0 หรือเขียนฟังก์ชันพลังงานศักย์รวม V(q) แล้วหาอนุพันธ์ dV/dq = 0"
    ]
  }
};
