const express = require('express');
const router = express.Router();
const pool = require('./db');
const multer = require('multer');
const path = require('path');

// Set up multer storage for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Route to create a new store with image upload
router.post('/stores', upload.single('storeThumbnail'), async (req, res) => {
  const { storeName, storeOwner, storeID } = req.body;
  const storeThumbnailPath = req.file.path.replace("\\", "/");
  console.log(storeThumbnailPath)
  try {
    const query = `
      INSERT INTO stores (store_name, store_owner, store_id, store_thumbnail_url)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [storeName, storeOwner, storeID, storeThumbnailPath];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while creating the store.' });
  }
});

// Route to get all stores
router.get('/stores', async (req, res) => {
  try {
    const query = `
      SELECT * FROM stores;
    `;
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching stores.' });
  }
});

module.exports = router;
 