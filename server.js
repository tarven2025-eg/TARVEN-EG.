const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// تشغيل الملفات من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// توجيه أي طلب للصفحة الرئيسية
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('TARVEN Server is running!'));

module.exports = app;
