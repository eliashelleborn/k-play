import { useEffect, useState } from 'react';
import firebase from '../firebase';

const playlistImages = [
  'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1475196045479-d7313ffcd5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1569408035581-14a0dba24deb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
  'https://images.unsplash.com/photo-1569402024834-343684796840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1640&q=80',
  'https://images.unsplash.com/photo-1520731884864-de08adaa59b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80',
  'https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
];

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
        image:
          playlistImages[Math.floor(Math.random() * playlistImages.length)],
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
