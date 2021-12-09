import React from 'react';
import { useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useGetTodos } from '../hooks/useGetTodos';
import { useGetUser } from '../hooks/useGetUser';
import { userState } from '../stores/user';
import { Todo, User } from '../utils/types';
import ProgressBar from './progressBar';
import TodoItem from './TodoItem';

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = ({}) => {
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
  width: 100%;
  padding: 10px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  overflow-y: scroll;
`;
