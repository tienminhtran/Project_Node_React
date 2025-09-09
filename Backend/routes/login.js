const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// API Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin" });
  }

  try {
    const conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT * FROM accounts WHERE username = ? AND pass = ? LIMIT 1",
      [username, password] // Có thể dùng md5 hoặc bcrypt nếu muốn
    );
    conn.release();

    if (rows.length > 0) {
      res.json({ success: true, message: "Đăng nhập thành công", user: rows[0] });
    } else {
      res.status(401).json({ success: false, message: "Sai tài khoản hoặc mật khẩu" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

module.exports = router;
