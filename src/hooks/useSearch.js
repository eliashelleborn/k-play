import { useEffect, useState } from 'react';
import firebase from '../firebase';
import useDebounce from './useDebounce';

const useSearch = (input, sort, type /* , category */) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState([]);

  const debouncedInput = useDebounce(input, 300);

  const performQuery = data => {
    return data.filter(
      m => m.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
    );
  };

  useEffect(() => {
    if (debouncedInput !== '') {
      setLoading(true);

      let query = firebase.firestore().collection('media');

      if (type !== 'ALL') {
        query = query.where('type', '==', type);
      }

      query
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
  }, [debouncedInput, sort, type]);

  return { error, loading, media };
};

export default useSearch;
