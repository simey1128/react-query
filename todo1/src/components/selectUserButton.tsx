import React, { Fragment, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import styled, { createGlobalStyle } from 'styled-components';
import { useGetUser } from '../hooks/useGetUser';
import { userState } from '../stores/user';

interface SelectUserButtonProps {}

const SelectUserButton: React.FC<SelectUserButtonProps> = ({}) => {
  const [name, setName] = useState('');
  const [saved, saveName] = useState(false);
  const { refetch, data } = useGetUser(name);
  const setUserState = useSetRecoilState(userState);
  const queryClient = useQueryClient();

  useEffect(() => {
    // for making user global state
    if (data?.id) {
      setUserState({
        id: data?.id as number,
        name: data?.name as string,
      });
      saveName(true);
    } else {
      setUserState({
        id: 0,
        name: '',
      });
    }
  }, [data]);

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onLogin = () => {
    refetch();
  };

  const onLogout = () => {
    saveName(false);
    setName('');
    queryClient.setQueryData(['user'], { id: 0, name: '' });
  };
  return (
    <MainContainer>
      <h5 style={{ color: 'white' }}>TodoList of</h5>
      <TitleContainer>
        <h2>TodoList of</h2>
        {saved ? (
          <h2 style={{ margin: 0, color: '#DC6822' }}>{name}</h2>
        ) : (
          <TextInput type="text" onChange={onChangeName} value={name} />
        )}
      </TitleContainer>
      <ButtonContainer>
        <Button onClick={onLogout}>로그아웃</Button>
        <Button onClick={onLogin}>로그인</Button>
      </ButtonContainer>
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
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;
