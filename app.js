const { sequelize } = require('./models/index.js');
const express = require('express'); // 프레임워크
const app = express();
const port = 3050;

const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.js');

// const connect = require('./schemas'); //
// connect();

app.use(express.json()); // req.body() 문법을 사용하기 위함이다.
app.use(express.urlencoded({ extended: false })); // URL_encoded형식으로 전송된 데이터를 해석하여 req.body에 저장
app.use(cookieParser());
app.use('/', [indexRouter]);

app.get('/', (req, res) => {
    console.log('1차 확인');
    res.status(200).json({ msg: 'hi' });
});

async function main() {
    // model을 이용해 데이터베이스에 테이블을 삭제 후 생성합니다.
    await sequelize.sync({ force: true });
}

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});

main();
