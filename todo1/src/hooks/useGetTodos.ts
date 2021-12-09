import axios from 'axios';
import { useQuery } from 'react-query';
import { Todo } from '../utils/types';

const getTodos = async (userId: number): Promise<Todo[]> => {
  const { data } = await axios.get(
    `http://localhost:1337/api/todos?filters[userId][$eq]=${userId}`
  );

  return data.data.map((d: any) => {
    return {
      id: d.id,
      userId: d.attributes.userId,
      content: d.attributes.content,
      completed: d.attributes.completed,
    };
  });
};

export const useGetTodos = (userId: number) => {
  return useQuery(['todos', userId], () => getTodos(userId), {
    enabled: !!userId,
  });
};
