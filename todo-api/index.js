const express = require('express');


const app = express();


app.use(express.json());

app.get("/", (req, res) => {
     res.send(`Welcome to todo API`);
});

let todos = []

app.put("/todos", (req, res) => {
     const { title, description } = req.body;

     if (!title || !description) {
          return res.status(400).json({ error: "Title and description are required" });
     }
     const todosItem = {
          title,
          description
     };
     todos.push(todosItem);
     res.status(201).json(todosItem)
});


app.get("/todos", (req, res) => {
     res.json(todos);
})

app.listen(3000, () => {
     console.log(`Server is running on http://localhost:3000`)
})