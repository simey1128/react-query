import axios from 'axios';
import { useQuery } from 'react-query';
import { User } from '../utils/types';

const getUserByName = async (name: string): Promise<User> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users?name=${name}`
  );
  return {
    id: data[0].id,
    name: data[0].name,
  };
};

export const useGetUser = (name: string) => {
  return useQuery(['user', name], () => getUserByName(name), {
    enabled: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
