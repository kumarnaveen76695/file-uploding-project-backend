const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Initialize router
const router = express.Router();

// Middleware for authentication
const authMiddleware = (req, res, next) => {
    // Replace with your actual authentication logic
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }
    next();
};

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// File Upload Controller
const uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.status(201).json({ message: 'File uploaded successfully', file: req.file });
};

// List Files Controller
const listFiles = (req, res) => {
    const directoryPath = path.join(__dirname, '../uploads');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to retrieve files' });
        }
        res.status(200).json({ files });
    });
};

// Download File Controller
const downloadFile = (req, res) => {
    const fileId = req.params.file_id;
    const filePath = path.join(__dirname, '../uploads', fileId);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ error: 'File not found' });
        }
        res.download(filePath, (err) => {
            if (err) {
                res.status(500).json({ error: 'Error while downloading the file' });
            }
        });
    });
};

// Define routes
router.post('/upload', authMiddleware, upload.single('file'), uploadFile);
router.get('/list-files', authMiddleware, listFiles);
router.get('/download-file/:file_id', authMiddleware, downloadFile);

// Export router
module.exports = router;
