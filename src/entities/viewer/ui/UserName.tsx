import React from 'react';
import UserField from '../../../shared/ui/user-field';

type Props = {
  onClick: () => void;
  data: User;
  className?: string;
};

const UserName: React.FC<any> = ({ onClick, data, className }: Props) => {
  return <UserField login={data.userName} />;
};

export default UserName;
