const cookieParser = require('cookie-parser');
const express = require('express');

const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');
const commentsRouter = require('./routes/comments.router');

const HOST = '127.0.0.1';
const PORT = 3000;
const app = express();

// 서버 세팅
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // npm i cookie-parser

app.use('/', [usersRouter, postsRouter, commentsRouter]);

app.listen(PORT, HOST, () => {
    console.log('Server is listening...', PORT);
});
