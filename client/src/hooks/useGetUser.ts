import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/user';

const useGetUser = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};

export default useGetUser;
