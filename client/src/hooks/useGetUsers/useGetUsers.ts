import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../api/user';

const useGetUsers = () => {
  return useQuery({ queryKey: ['users'], queryFn: getUsers });
};

export default useGetUsers;
