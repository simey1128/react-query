import React, { useState } from 'react';
import SelectUserButton from './components/selectUserButton';
import { useGetTodos } from './hooks/useGetTodos';
import styled, { createGlobalStyle } from 'styled-components';
function App() {
  const { status, data, error } = useGetTodos(1);
  return (
    <MainContainer>
      <SelectUserButton />
      {/* {data?.map((e) => (
        <h3>{e.content}</h3>
      ))} */}
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
