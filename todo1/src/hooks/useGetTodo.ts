import axios from 'axios';
import { useQuery } from 'react-query';
import { Todo } from '../utils/types';

const getTodoById = async (id: number): Promise<Todo> => {
  const { data } = await axios.get(`http://localhost:1337/api/todo/${id}`);
  return data;
};

export const useGetTodo = (userId: number, todoId: number) => {
  return useQuery(['todo', userId, todoId], () => getTodoById(todoId), {
    enabled: !!todoId,
  });
};
