import { useQuery } from '@tanstack/react-query';
import { getTicket } from '../api/ticket';

const useGetTicket = (id: number) => {
  return useQuery({
    queryKey: ['ticket', id],
    queryFn: () => getTicket(id),
    enabled: !!id,
  });
};

export default useGetTicket;
