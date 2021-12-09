import axios from 'axios';
import { useQuery } from 'react-query';
import { Post } from '../utils/types';

const getPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/`
  );
  return data;
};

export const usePosts = () => {
  return useQuery(['posts'], getPosts);
};
