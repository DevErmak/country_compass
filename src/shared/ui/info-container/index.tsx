import React, { ReactElement } from 'react';

type Props = {
  onClick: () => void;
  title: string;
  icon: any;
  className?: string;
  children: ReactElement;
};

const InfoContainer: React.FC<any> = ({ title, className, children }: Props) => {
  return (
    <div className={className}>
      <div>{title}</div>
      {children}
    </div>
  );
};

export default InfoContainer;
