import React, { Fragment, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled, { createGlobalStyle } from 'styled-components';
import { useGetUser } from '../hooks/useGetUser';
import { userState } from '../stores/user';

interface SelectUserButtonProps {}

const SelectUserButton: React.FC<SelectUserButtonProps> = ({}) => {
  const [name, setName] = useState('');
  const { refetch, data } = useGetUser(name);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    setUser({
      id: data?.id as number,
      name: data?.name as string,
    });
  }, [data]);

  const onChange = (e: any) => {
    setName(e.target.value);
  };

  const onClick = () => {
    refetch();
  };
  return (
    <MainContainer>
      <h5 style={{ color: 'white' }}>TodoList of</h5>
      <TitleContainer>
        <h2>TodoList of</h2>
        <TextInput type="text" onChange={onChange} value={name} />
      </TitleContainer>
      <Button onClick={onClick}>보기</Button>
    </MainContainer>
  );
};

export default SelectUserButton;

const MainContainer = styled.div`
  border-right: solid;
  flex-basis: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.input`
  height: 30px;
  width: 70%;
`;

const Button = styled.button`
  align-self: flex-end;
  margin-right: 10px;
`;
