import { User } from '@acme/shared-models';
import { API_PATH } from '../lib/constants';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_PATH}/users`);
  const data = await response.json();

  return data;
};

export const getUser = async (id: number): Promise<User> => {
  const response = await fetch(`${API_PATH}/users/${id}`);

  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json();

  return data;
};
