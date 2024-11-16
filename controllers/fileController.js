//controllers/filecontrollers.js
const File = require('../models/File');
const crypto = require('crypto');
const path = require('path');

exports.uploadFile = async (req, res) => {
    try {
        const { originalname, mimetype, path: filePath } = req.file;

        const encryptedUrl = crypto.randomBytes(16).toString('hex');

        const file = await File.create({
            file_name: originalname,
            file_type: mimetype,
            encrypted_url: encryptedUrl,
            uploaded_by: req.user.id,
        });

        res.status(201).json({ message: 'File uploaded successfully', file });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listFiles = async (req, res) => {
    try {
        const files = await File.findAll({ where: { uploaded_by: req.user.id } });
        res.json(files);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.downloadFile = async (req, res) => {
    // Logic to handle file download
    res.send('File download logic goes here.');
};
