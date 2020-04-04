import { useLocation } from 'react-router-dom';

// NOTE. https://reacttraining.com/react-router/web/example/query-parameters
export default function useQuery() {
  return new URLSearchParams(useLocation().search);
}
