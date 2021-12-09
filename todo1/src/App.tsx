import React, { useState } from 'react';
import SelectUserButton from './components/selectUserButton';
import { useGetTodos } from './hooks/useGetTodos';
import styled, { createGlobalStyle } from 'styled-components';
import { userState } from './stores/user';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Todo } from './utils/types';
import { useQueryClient } from 'react-query';
import TodoList from './components/TodoList';
function App() {
  const user = useRecoilValue(userState);
  console.log('user: ', user);

  return (
    <MainContainer>
      <SelectUserButton />
      <TodoList />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  border: solid;
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: flex-start;
`;
