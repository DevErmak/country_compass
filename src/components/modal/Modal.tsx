import React, { useState } from 'react';
import './modal.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getIsActiveModal } from '../../store/user/userSelectors';
import { setActiveModal } from '../../store/user/infoUserSlice';
import ReactDOM from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export default function Login({ children }: Props) {
  const dispatch = useDispatch();
  const isActiveModal = useSelector(getIsActiveModal);
  console.log('---------------->isActiveModalinportal', isActiveModal);
  if (isActiveModal) {
    return ReactDOM.createPortal(
      <div className="modal-container active" onClick={() => dispatch(setActiveModal(false))}>
        <div className="modal-content active" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.getElementById('portal') as HTMLElement,
    );
  } else
    return ReactDOM.createPortal(
      <div className="modal-container" onClick={() => dispatch(setActiveModal(false))}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.getElementById('portal') as HTMLElement,
    );
}
