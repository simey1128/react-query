const axios = require('axios');
exports.createTodo = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos`
  );

  const omitId = data.map((d) => {
    return {
      userId: d.userId,
      content: d.title,
      completed: d.completed,
    };
  });

  for (const d of omitId) {
    await axios.post('http://localhost:1337/api/todos', { data: d });
  }
};

exports.updateTodo = async () => {};

exports.deleteTodos = async () => {
  for (let i = 2; i < 202; i++) {
    await axios.delete(`http://localhost:1337/api/todos/${i}`);
  }
};
