# Hybrid Demo App

Ứng dụng demo Hybrid được viết bằng **HTML / CSS / JavaScript** (Vite), đóng gói thành ứng dụng Android thông qua **Capacitor**.

---

## 📋 Yêu cầu hệ thống

| Công cụ | Phiên bản tối thiểu | Ghi chú |
|---|---|---|
| [Node.js](https://nodejs.org/) | ≥ 18 | Bao gồm npm |
| [Android Studio](https://developer.android.com/studio) | Mới nhất | Cần SDK & Emulator |
| JDK | 17 | Thường đi kèm Android Studio |
| Git | Bất kỳ | Để clone project |

---

## 🚀 Bước 1 — Lấy source code

```bash
git clone https://github.com/nguyendai05/hybrid-demo.git
cd hybrid-demo
```

---

## 📦 Bước 2 — Cài đặt dependencies

```bash
npm install
```

> Lệnh này sẽ tải toàn bộ thư viện cần thiết vào thư mục `node_modules/`.

---

## 🌐 Chạy trên trình duyệt Web

### Bước 3A — Khởi động server phát triển

```bash
npm run dev
```

Sau khi chạy, terminal sẽ hiển thị địa chỉ như:

```
  VITE v8.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

Mở trình duyệt và truy cập:

```
http://localhost:5173
```

> **Lưu ý:** Tính năng **Camera** sẽ không hoạt động trên trình duyệt — chức năng đó chỉ chạy được khi đóng gói thành app Android.

---

## 📱 Chạy trên Android

### Bước 3B — Build web app

```bash
npm run build
```

Lệnh này tạo ra thư mục `dist/` chứa toàn bộ file web đã được biên dịch.

---

### Bước 4 — Đồng bộ code sang Android

```bash
npx cap sync android
```

Lệnh này sao chép toàn bộ thư mục `dist/` vào trong project Android và cập nhật các plugin Capacitor.

---

### Bước 5 — Mở project Android Studio

```bash
npx cap open android
```

Android Studio sẽ tự động mở project trong thư mục `android/`.

> Nếu Android Studio chưa mở được, hãy mở thủ công:  
> **Android Studio → File → Open → chọn thư mục `android/`**

---

### Bước 6 — Cấu hình Emulator hoặc thiết bị thật

**Dùng Emulator (máy ảo):**
1. Trong Android Studio, chọn **Device Manager** (biểu tượng điện thoại ở thanh bên phải)
2. Nhấn **Create Device** → chọn thiết bị (ví dụ: Pixel 6) → chọn Android API 33+
3. Nhấn **Finish** → khởi động emulator bằng nút ▶️

**Dùng thiết bị thật:**
1. Trên điện thoại Android, vào **Cài đặt → Thông tin điện thoại → Số bản dựng** (nhấn 7 lần để bật Developer Mode)
2. Vào **Cài đặt → Tùy chọn nhà phát triển → Bật USB Debugging**
3. Cắm cáp USB vào máy tính → Chấp nhận kết nối trên điện thoại

---

### Bước 7 — Chạy ứng dụng trên Android

Trong Android Studio:

1. Chọn thiết bị (Emulator hoặc điện thoại thật) trên thanh toolbar
2. Nhấn nút **Run ▶️** (hoặc `Shift + F10`)
3. Đợi app build và cài đặt lên thiết bị

✅ App sẽ hiển thị giao diện Hybrid Demo với hai chức năng:
- **Tạo danh sách 300 item** — demo render UI
- **Mở Camera** — chụp ảnh bằng camera thiết bị

---

## 🔄 Quy trình cập nhật code (khi thay đổi giao diện/logic)

Mỗi khi bạn sửa code trong thư mục `src/`, cần thực hiện lại các bước sau để cập nhật lên Android:

```bash
# 1. Build lại web
npm run build

# 2. Đồng bộ sang Android
npx cap sync android

# 3. Chạy lại từ Android Studio (nhấn ▶️)
```

---

## 📁 Cấu trúc thư mục

```
hybrid-demo/
├── src/
│   ├── main.js          # Logic chính của ứng dụng
│   ├── style.css        # Giao diện CSS
│   └── assets/          # Tài nguyên tĩnh
├── android/             # Project Android (do Capacitor tạo)
├── dist/                # Web đã build (do `npm run build` tạo)
├── public/              # File tĩnh public
├── index.html           # Entry point HTML
├── package.json         # Cấu hình npm
└── capacitor.config.json # Cấu hình Capacitor
```

---

## ❓ Xử lý lỗi thường gặp

| Lỗi | Nguyên nhân | Cách khắc phục |
|---|---|---|
| `npm: command not found` | Chưa cài Node.js | Tải và cài [Node.js](https://nodejs.org/) |
| `npx cap: command not found` | Chưa cài dependencies | Chạy `npm install` |
| Android Studio không tìm thấy SDK | Chưa cài Android SDK | Vào **SDK Manager** trong Android Studio và cài Android SDK |
| Không thấy thiết bị trong Android Studio | USB Debugging chưa bật | Kiểm tra lại Bước 6 |
| Camera không hoạt động trên web | Giới hạn của Capacitor | Camera chỉ hoạt động trên Android app |
| Build lỗi Gradle | JDK không đúng phiên bản | Đảm bảo dùng JDK 17 |