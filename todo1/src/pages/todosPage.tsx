import React, { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import ProgressBar from '../components/progressBar';
import TodoList from '../components/TodoList';
import { useGetTodos } from '../hooks/useGetTodos';
import { userState } from '../stores/user';

interface TodosPageProps {}

const TodosPage: React.FC<TodosPageProps> = ({}) => {
  const user = useRecoilValue(userState);
  const { status, error, data } = useGetTodos(user?.id);

  if (!user.id || data === undefined) {
    return (
      <NoUserContainer>
        <h2>UnAvailable</h2>
      </NoUserContainer>
    );
  }

  const progressValue =
    (data.filter((d) => d.completed).length / data.length) * 100;
  return (
    <YesUserContainer>
      <ProgressBar value={progressValue} />
      <TodoList />
    </YesUserContainer>
  );
};

export default TodosPage;

const NoUserContainer = styled.div`
  flex-basis: 80%;
  padding: 10px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const YesUserContainer = styled.div`
  flex-basis: 80%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
