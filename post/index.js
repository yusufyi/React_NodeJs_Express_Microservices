
const express = require ('express');
const bodyParser = require('body-parser');
const  { randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json());


const posts = {};

app.get('/posts',(reg,res) => {
    res.send(posts);
});
//sd

app.post('/posts',(reg,res) =>{
    const id = randomBytes(4).toString('hex');
    const {title } = reg.body;

    posts[id] = {id,title};
    res.status(201).send(posts[id]);
});

app.listen(4000,() => {
    console.log('Listening on 4000');
});