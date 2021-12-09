import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Todo, User } from '../utils/types';

export const useUpdateTodo = (userId: number) => {
  const queryClient = useQueryClient();
  useMutation(
    (newTodo: Todo) => {
      return axios.post(
        `http://localhost:1337/api/todos/${newTodo.id}`,
        newTodo
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos', userId]);
      },
    }
  );
};
