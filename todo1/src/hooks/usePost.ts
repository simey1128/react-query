import axios from 'axios';
import { useQuery } from 'react-query';
import { Post } from '../utils/types';

const getPostById = async (id: number): Promise<Post> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

export const usePost = (postId: number) => {
  return useQuery(['post', postId], () => getPostById(postId), {
    enabled: !!postId,
  });
};
