const {
  getTodos,
  getDev,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./Controller/Todo");

const router = require("express").Router();

router.get("/dev", getDev);

router.get("/gettodos", getTodos);

router.post("/settodos", createTodo);

router.put("/todos/:todoID", updateTodo);

router.delete("/todos/:todoID", deleteTodo);

module.exports = router;
