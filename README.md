# Admin Dashboard - Organic Shop

แดชบอร์ดจัดการร้านค้าออร์แกนิกสำหรับผู้ดูแลระบบ พัฒนาด้วย React + TypeScript + Vite

## ✨ ฟีเจอร์หลัก

- **🔐 ระบบ Authentication** - Login สำหรับผู้ดูแลระบบ
- **📊 แดชบอร์ด** - ภาพรวมร้านค้า E-Commerce พร้อมกราฟและสถิติ
- **📦 จัดการสินค้า** - เพิ่ม, แก้ไข, ลบ และดูรายการสินค้า
- **🏷️ จัดการหมวดหมู่** - จัดการหมวดหมู่สินค้า (CRUD)
- **🛒 จัดการคำสั่งซื้อ** - ติดตามและอัปเดตสถานะคำสั่งซื้อ
- **👥 จัดการลูกค้า** - ดูข้อมูลและประวัติลูกค้า
- **📞 จัดการการติดต่อ** - รับและตอบข้อความจากลูกค้า

## 🚀 เทคโนโลยีที่ใช้

- **React 18** - ไลบรารีสร้าง UI
- **TypeScript** - ภาษาโปรแกรมมิ่งแบบมี Type Safety
- **Vite** - Build Tool ที่รวดเร็ว
- **Tailwind CSS** - Framework CSS สำหรับการออกแบบ
- **Material UI (MUI)** - ชุดคอมโพเนนต์ UI
- **MUI X Charts** - กราฟและแผนภูมิ
- **React Router DOM** - จัดการ Routing
- **Axios** - HTTP Client สำหรับเรียก API

## 📋 ความต้องการของระบบ

- Node.js >= 20.11.0

## 🛠️ การติดตั้งและรันโปรเจค

### 1. ดาวน์โหลด Source Code
```bash
git clone https://github.com/Natthawut-jps/DashboadAdmin-Shop-Organic.git
cd DashboadAdmin-Shop-Organic
```

### 2. ติดตั้ง Dependencies
```bash
npm install
```

### 3. ตั้งค่า Environment Variables

สร้างไฟล์ `.env.local` ใน root directory และเพิ่ม:
```
VITE_BASE_API=http://localhost:3001
```

### 4. รัน Development Server
```bash
npm run dev
```

### 5. เข้าใช้งานระบบ

เปิดเบราว์เซอร์ที่: http://localhost:5174/admin/login

**ข้อมูลเข้าสู่ระบบ:**
- Username: `admin`
- Password: `0000`

## 📜 Scripts ที่ใช้ได้

| Command | คำอธิบาย |
|---------|---------|
| `npm run dev` | รัน Development Server |
| `npm run build` | Build โปรเจคสำหรับ Production |
| `npm run preview` | Preview Production Build |
| `npm run lint` | ตรวจสอบ Code ด้วย ESLint |

## 📁 โครงสร้างโปรเจค

```
src/
├── assets/        # รูปภาพ และไฟล์สตาติก
├── pages/         # หน้าต่างๆ ของแอปพลิเคชัน
├── App.tsx        # คอมโพเนนต์หลัก
├── main.tsx       # Entry point
└── tailwind.css   # Tailwind CSS styles
```

## 📦 Dependencies หลัก

- `@mui/material` - Material UI Components
- `@mui/x-charts` - กราฟและแผนภูมิ
- `@react-pdf/renderer` - สร้าง PDF
- `exceljs` & `file-saver` - ส่งออก Excel
- `axios` - HTTP Client
- `react-cookie` - จัดการ Cookies

## 📝 License

ดูไฟล์ [LICENSE](./LICENSE) สำหรับรายละเอียด
