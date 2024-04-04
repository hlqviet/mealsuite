import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import styles from './app.module.css';
import Tickets from './tickets/tickets';
import TicketDetails from './ticket-details/ticket-details';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles['app']}>
        <h1>Ticketing App</h1>
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/:id" element={<TicketDetails />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
