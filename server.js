//server.js
require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/file', fileRoutes);

sequelize.sync({ force: false }) 
    .then(() => console.log('Database synced'))
    .catch((err) => console.error('Database sync error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
