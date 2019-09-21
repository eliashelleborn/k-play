import { useEffect, useState } from 'react';
import firebase from '../firebase';
import useDebounce from './useDebounce';

const useSearch = (query, sort, filter /* , category */) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState([]);

  const debouncedQuery = useDebounce(query, 300);

  const performQuery = data => {
    return data.filter(
      m => m.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
    );
  };

  useEffect(() => {
    if (debouncedQuery !== '') {
      setLoading(true);

      firebase
        .firestore()
        .collection('media')
        .orderBy(sort || 'createdAt')
        .get()
        .then(snap => {
          const data = [];
          snap.forEach(doc => {
            data.push(doc.data());
          });
          setMedia(performQuery(data));
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    } else {
      setMedia([]);
      setLoading(true);
    }
  }, [debouncedQuery, sort, filter]);

  return { error, loading, media };
};

export default useSearch;
