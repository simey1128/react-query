import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  value: number; // 0 ~ 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <Background>
      <Progress value={value} />
    </Background>
  );
};

export default ProgressBar;

const Background = styled.div`
  width: 100%;
  background-color: #efefed;
  height: 20px;
`;
const Progress = styled.div<{ value: number }>`
  width: ${(props) => `${props.value}%`};
  background-color: #007faa;
  height: 20px;
`;
