# Project_Node_React

Dự án mẫu kết hợp **React (Frontend)** và **Node.js + Express (Backend)** với cơ sở dữ liệu **MariaDB/MySQL**.  
Chức năng chính: **Đăng ký** và **Đăng nhập** người dùng.

---

## 1. Công nghệ sử dụng
- **Frontend:** React (CRA hoặc Vite)
- **Backend:** Node.js + Express
- **Database:** MariaDB / MySQL
- **Thư viện hỗ trợ:** axios, body-parser, cors, md5

---

## 2. Chức năng nổi bật
- Tạo tài khoản (Register)
- Đăng nhập (Login) qua API backend
- Kiểm tra thông tin đăng nhập với database
- Lưu trạng thái đăng nhập trên client
- Điều hướng giữa màn hình **Login** và **Home**
- Mã hóa mật khẩu bằng **md5**

---

## 3. Cấu trúc thư mục

### Frontend (React)
frontend/
┣ src/
┃ ┣ pages/
┃ ┃ ┣ LoginPage.jsx
┃ ┃ ┣ HomePage.jsx
┃ ┣ api/
┃ ┃ ┣ auth.js
┃ ┣ App.jsx
┗ package.json

shell


### Backend (Node.js + Express)
backend/
┣ routes/
┃ ┣ auth.js
┣ config/
┃ ┣ db.js
┣ server.js
┗ package.json

yaml


---

## 4. Hướng dẫn cài đặt

### Backend
```bash
cd backend
npm install
npm start
Mặc định chạy tại: http://localhost:3000

Frontend
bash

cd frontend
npm install
npm start
Mặc định chạy tại: http://localhost:3001 hoặc http://localhost:5173 nếu dùng Vite.

5. API Backend
Đăng nhập
Endpoint: POST /api/login

Request body:

json

{
  "username": "testuser",
  "password": "123456"
}
Response:

json

{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "testuser"
  }
}
6. Cơ sở dữ liệu
Tạo bảng users để lưu tài khoản:


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

7. Tác giả
Trần Minh Tiến

Email: minhtien.dev.iuh.edu@gmail.com
