const express = require('express')
const bosyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {}
app.get('/post/:id/commnets',(reg,res) => {
    res.send(commentsByPostId[reg.params.id] || [])

})

app.post('/post/:id/commnets',(reg,res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body ;
    const comments = commentsByPostId[reg.params.id] || [];
    comments.push({id:commentId,content})
    commentsByPostId [reg.params.id]  = comments;
    res.status(201).send(comments);


    
})

app.listenerCount(4001, () => {
    console.log('Listening on 4001');
})