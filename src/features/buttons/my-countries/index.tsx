import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/ui/button';
import './my-countries.scss';

type Props = {};

const BtnMyCountries: React.FC<any> = ({}: Props) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('my-countries')}
      title={'My countries'}
      className={'my-countries'}
    />
  );
};

export default BtnMyCountries;
