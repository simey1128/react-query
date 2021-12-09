import axios from 'axios';
import { useQuery } from 'react-query';
import { User } from '../utils/types';

const getUserByName = async (name: string): Promise<User | undefined> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users?name=${name}`
  );
  if (!data.length) {
    return undefined;
  }

  return {
    id: data[0].id,
    name: data[0].name,
  };
};

export const useGetUser = (name: string) => {
  return useQuery(['user'], () => getUserByName(name), {
    enabled: false,
    refetchOnWindowFocus: false,
  });
};
