import React, { useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../utils/types';

interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const [completed, completeItem] = useState(item.completed);
  return (
    <MainContainer completed={completed}>
      <CheckBox
        checked={completed}
        type="checkbox"
        onChange={() => {
          completeItem(!completed);
        }}
      />

      <ContentContainer>{item.content}</ContentContainer>
    </MainContainer>
  );
};

export default TodoItem;

const MainContainer = styled.div<{ completed: boolean }>`
  width: 300px;
  height: 100px;
  border: solid 3px ${(props) => (props.completed ? '#007FAA' : '#f6f5f1')};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background: #f6f5f1;
  flex-direction: row;
`;

const ContentContainer = styled.div``;
const CheckBox = styled.input`
  color: black;
`;
