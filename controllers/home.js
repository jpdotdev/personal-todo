const TodoTask = require('../models/todo')

module.exports = {
  getIndex: async (req, res) => {
    try {
        const tasks = await
        TodoTask.find()
        res.render('index.ejs', {
        todoTasks: tasks });
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  },
  createTask: async (req,res) => {
    const addedTask = new TodoTask(
      {
        title: req.body.title,
        content: req.body.content
      });
    try {
      await addedTask.save()
      console.log(addedTask)
      res.redirect('/')
    } catch(err) {
      if (err) return res.status(500).send(err)
      res.redirect('/')
    }
  }
}
