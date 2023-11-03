import React from 'react';

type Props = {
  onClick?: () => void;
  login: string;
  className?: string;
};

const UserField: React.FC<any> = ({ onClick, login, className }: Props) => {
  return (
    <div className={className} onClick={onClick}>
      {login}
    </div>
  );
};

export default UserField;
