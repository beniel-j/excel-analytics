const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const fileRoutes = require('./routes/fileRoutes');
app.use('/api/file', fileRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend server is running!");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
  });
}).catch(err => {
  console.error("❌ MongoDB connection failed:", err);
});

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
