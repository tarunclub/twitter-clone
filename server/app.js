require('dotenv').config();
const express = require('express');
const app = express();

// middlewares
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const likeRoutes = require('./routes/likes');
const commentRoutes = require('./routes/comments');
const authRoutes = require('./routes/auth');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);

module.exports = app;
