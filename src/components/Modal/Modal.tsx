import React, { useState } from 'react';
import './modal.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getIsActiveModal } from '../../store/user/userSelectors';
import { setModal } from '../../store/user/infoUserSlice';
import ReactDOM from 'react-dom';
import { formModal } from '../../store/user/types';

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  const dispatch = useDispatch();
  const isActiveModal = useSelector(getIsActiveModal);
  const domElement = React.useRef(document.getElementById('portal'));
  return ReactDOM.createPortal(
    <div
      className={isActiveModal ? 'backdrop active' : 'backdrop'}
      onClick={() => dispatch(setModal({ isActiveModal: false, formModal: formModal.login }))}
    >
      <div
        className={isActiveModal ? 'modal-container active' : 'modal-container'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    // document.getElementById('portal') as HTMLElement,
    domElement.current as HTMLElement,
    // document.root.nextElementSibling,
  );
}