const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Store file in memory (RAM) instead of disk
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', authMiddleware, upload.single('file'), (req, res) => {
  try {
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    res.status(200).json({ data: jsonData });
  } catch (error) {
    console.error("❌ Error parsing file:", error);
    res.status(500).json({ msg: 'Failed to parse Excel file' });
  }
});

module.exports = router;
