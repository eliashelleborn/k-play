import React from 'react';
import { useAppModals } from '../../context/modals';
import Modal from '../Modals';
import AddToList from '../Modals/AddToList';
import TrackActions from '../Modals/TrackActions';
import Rating from '../Modals/Rating';
import Share from '../Modals/Share';
import AuthShield from '../Modals/AuthShield';

const Modals = () => {
  const {
    open: modalsOpen,
    toggleOpen: modalsToggleOpen,
    content: modalContent
  } = useAppModals();
  return (
    <>
      <Modal
        isShowing={modalsOpen.addToList}
        hide={() => modalsToggleOpen('addToList')}
      >
        <AddToList
          content={modalContent}
          hide={() => modalsToggleOpen('addToList')}
        />
      </Modal>
      <Modal
        isShowing={modalsOpen.trackActions}
        hide={() => modalsToggleOpen('trackActions')}
      >
        <TrackActions
          trackInfo={modalContent}
          hide={() => modalsToggleOpen('trackActions')}
        />
      </Modal>
      <Modal
        isShowing={modalsOpen.rating}
        hide={() => modalsToggleOpen('rating')}
      >
        <Rating
          content={modalContent}
          hide={() => modalsToggleOpen('rating')}
        />
      </Modal>
      <Modal
        isShowing={modalsOpen.share}
        hide={() => modalsToggleOpen('share')}
      >
        <Share content={modalContent} hide={() => modalsToggleOpen('share')} />
      </Modal>
      <Modal
        isShowing={modalsOpen.login}
        hide={() => modalsToggleOpen('login')}
      >
        <AuthShield hide={() => modalsToggleOpen('login')} />
      </Modal>
    </>
  );
};

export default Modals;
