import { useContext } from 'react';
import { RouterContext } from '../components/CustomRouter';

export default function useRouter() {
  return useContext(RouterContext);
}
