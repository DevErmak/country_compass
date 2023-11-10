import { Outlet } from 'react-router-dom';
import Header from '../header';
import Modal from '../Modal/Modal';
import { formModal } from '../../entities/viewer/model/user/types';
import FormLogin from '../Login/FormLogin';
import FormRegister from '../Register/FormRegister';
import { useSelector } from 'react-redux';
import { getFormModal } from '../../entities/viewer/model/user/userSelectors';
import { useDispatch } from 'react-redux';

type Props = {};

export default function DefaultLayout({}: Props) {
  const stateModal = useSelector(getFormModal);

  return (
    <>
      <Header />
      <Outlet />
      <Modal>{stateModal === formModal.login ? <FormLogin /> : <FormRegister />}</Modal>;
    </>
  );
}
