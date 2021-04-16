const expess = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors');


const app = expess();
const mysql2 = require('mysql2');

const db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cruddatabase'
});

app.use(cors());
app.use(expess.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/api/insert',(req, res) => {
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    const sqlInsert = "INSERT INTO movie_reviews (movieName,movieReview) VALUE (?,?)"
    db.query(sqlInsert, [movieName,movieReview],(err, result) => {
        console.log(result);
    });
});
app.listen(3001,() => {
    console.log('Server start on 3001');
});