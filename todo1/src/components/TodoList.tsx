import React from 'react';
import { useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useGetTodos } from '../hooks/useGetTodos';
import { useGetUser } from '../hooks/useGetUser';
import { userState } from '../stores/user';
import { Todo, User } from '../utils/types';
import TodoItem from './TodoItem';

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = ({}) => {
  const queryClient = useQueryClient();
  const user = useRecoilValue(userState);
  const { status, error, data } = useGetTodos(user?.id);

  return (
    <MainContainer>
      {data?.map((d) => (
        <TodoItem item={d} />
      ))}
    </MainContainer>
  );
};

export default TodoList;

const MainContainer = styled.div`
  flex-basis: 80%;
  padding: 10px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
