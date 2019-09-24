import { useEffect, useState } from 'react';
import firebase from '../firebase';
import useDebounce from './useDebounce';

const useSearch = (input, sort, type, category) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState([]);
  const [previousCategory, setPreviousCategory] = useState(null);

  const debouncedInput = useDebounce(input, 300);

  const performQuery = data => {
    return data.filter(
      m => m.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
    );
  };

  useEffect(() => {
    const debouncedInputNotEmpty = debouncedInput !== '';

    if (previousCategory !== category) {
      setMedia([]);
    }

    if (debouncedInputNotEmpty || category) {
      setLoading(true);
      setPreviousCategory(category);

      let query = firebase.firestore().collection('media');

      if (type !== 'ALL') {
        query = query.where('type', '==', type);
      }
      if (category) {
        const categoryDocRef = firebase
          .firestore()
          .collection('categories')
          .doc(category);
        query = query.where('category', '==', categoryDocRef);
      }

      query
        .get()
        .then(snap => {
          const data = [];
          snap.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
          });
          setMedia(debouncedInputNotEmpty ? performQuery(data) : data);
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
  }, [debouncedInput, sort, type, category]);

  return { error, loading, media };
};

export default useSearch;
