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
        tracks: []
      });
  };

  const addTrack = (playlist, track, snippet = null) => {
    return firebase
      .firestore()
      .collection('playlists')
      .doc(playlist)
      .get()
      .then(doc => {
        const data = doc.data();
        firebase
          .firestore()
          .collection('playlists')
          .doc(playlist)
          .update({
            tracks: [
              ...data.tracks,
              {
                ref: firebase.firestore().doc(`/media/${track}`),
                snippet
              }
            ]
          });
      });
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
