import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Flex } from '../../components/Util';
import Loading from '../../components/Loading';
import {
  usePlayer,
  PLAYER_SET_CURRENT_MEDIA,
  PLAYER_OPEN
} from '../../context/player';
import firebase from '../../firebase';
import ListPlayerText from '../../components/PlayerText';

const Media = ({ match, location }) => {
  const { state, dispatch } = usePlayer();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const start = searchParams.get('start');
    const end = searchParams.get('end');

    const snippet = start && end ? { start, end } : null;

    if (!state.currentMedia || match.params.id !== state.currentMedia.id) {
      firebase
        .firestore()
        .doc(`/media/${match.params.id}`)
        .get()
        .then(doc => {
          if (doc.exists) {
            dispatch({
              type: PLAYER_SET_CURRENT_MEDIA,
              payload: { id: doc.id, snippet, ...doc.data() }
            });
            dispatch({ type: PLAYER_OPEN });
          } else {
            setNotFound(true);
          }
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <Flex p="5">
        <Loading />
      </Flex>
    );

  if (!loading && notFound)
    return <Flex p="5">Videon/Podcasten du letar efter finns inte.</Flex>;

  return (
    <div>
      <ListPlayerText
        title={state.currentMedia.title}
        subtitle={state.currentMedia.description}
        image={state.currentMedia.image}
        text={state.currentMedia.text}
      />
    </div>
  );
};

export default withRouter(Media);
