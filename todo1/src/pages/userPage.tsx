import React, { Fragment, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import styled, { createGlobalStyle } from 'styled-components';
import { useGetUser } from '../hooks/useGetUser';
import { userState } from '../stores/user';

interface UserPageProps {}

const UserPage: React.FC<UserPageProps> = ({}) => {
  const [name, setName] = useState('');
  const [isSignIn, setSignIn] = useState(false);

  const { refetch, data } = useGetUser(name); // no automatic refetching
  const setUserState = useSetRecoilState(userState);
  const queryClient = useQueryClient();

  useEffect(() => {
    // for making user as global state

    if (data?.id) {
      setUserState({
        id: data?.id as number,
        name: data?.name as string,
      });
      setSignIn(true);
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
    setSignIn(false);
    setName(''); // set local state to default
    queryClient.setQueryData(['user'], { id: 0, name: '' }); // set server state to defualt
  };

  return (
    <MainContainer>
      <h5 style={{ color: 'white' }}>TodoList of</h5>
      <TitleContainer>
        <Title>TodoList of</Title>
        {isSignIn ? (
          <Title margin={0} color="#DC6822">
            {name}
          </Title>
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

export default UserPage;

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

const Title = styled.h2<{ margin?: number; color?: string }>`
  margin: ${(props) => `${props.margin}px`};
  color: ${(props) => props.color};
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
