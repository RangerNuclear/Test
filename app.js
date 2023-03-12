//код написан благодаря практическому занятию
const express = require('express');
const { init, User, Post } = require('./models/init');

const app = express();

app.get('/posts', async(req, res) => {
    const posts = await Post.findAll({});
    return res.status(200).json({
        items: posts,
        meta: {}
    })
})

app.get('/', async (req, res) => {
    const items = await User.findAll({
        include: Post
    });
    return res.json(items);
});

app.get('/posts/:id', async (req, res) => {
    const items = await Post.findOne({
        where: {
            id: req.params.id
        },
        include: User
    });
    return res.json(items);
});

app.post('/posts', async (req, res) => {
    const data = req.body;
    const post = await Post.create(data);
    return res.json(post);
});

app.patch('/posts/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
        return res.status(404).json({message: 'Not found'});
    }

    const data = req.body;

    if (data.title) post.title = data.title;
    if (data.body) post.body = data.body;

    await post.save();
})

app.delete('/posts/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (!post){
        return res.status(404).json({message: 'Not found'});
    }

    await post.destroy();
    return res.sendStatus(204);
});

app.listen(3000, async () => {
    await init();
});