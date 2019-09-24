import { useEffect, useState } from 'react';
import firebase from '../firebase';

const useMyPlaylists = () => {
  const [loading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = () => {
    setLoading(true);
    firebase
      .firestore()
      .collection('playlists')
      .where('owner', '==', firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        const data = [];
        snapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setLoading(false);
        setPlaylists(data);
      });
  };

  const createPlaylist = name => {
    return firebase
      .firestore()
      .collection('playlists')
      .add({
        owner: firebase.auth().currentUser.uid,
        name,
        numberOfTracks: 0
      });
  };

  const addTrack = (playlist, track) => {
    return firebase
      .firestore()
      .collection('playlists')
      .doc(playlist)
      .set(
        {
          tracks: [firebase.firestore().doc(`/media/${track}`)]
        },
        { merge: true }
      );
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return {
    loading,
    playlists,
    fetchPlaylists,
    createPlaylist,
    addTrack
  };
};

export default useMyPlaylists;
