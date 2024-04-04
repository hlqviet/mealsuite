import { useQuery } from '@tanstack/react-query';
import { getTickets } from '../../api/ticket';

const useGetTickets = () => {
  return useQuery({
    queryKey: ['tickets'],
    queryFn: getTickets,
  });
};

export default useGetTickets;
