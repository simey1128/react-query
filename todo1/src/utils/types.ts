export interface Todo {
  id: number;
  userId: number;
  completed: boolean;
  content: string;
}

export interface User {
  id: number;
  name: string;
}
