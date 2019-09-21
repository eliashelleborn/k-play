import { useEffect, useState } from 'react';
import firebase from '../firebase';

const useCategories = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('categories')
      .get()
      .then(
        snapshot => {
          const data = [];
          snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
          });
          setLoading(false);
          setCategories(data);
        },
        err => {
          setError(err);
        }
      );

    return () => unsubscribe();
  }, []);

  return {
    error,
    loading,
    categories
  };
};

export default useCategories;
