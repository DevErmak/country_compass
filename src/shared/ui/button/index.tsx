import React from 'react';

type Props = {
  onClick: () => void;
  title: string;
  icon: any;
  className?: string;
};

const Button: React.FC<any> = ({ onClick, title, icon, className }: Props) => {
  return (
    <div className={className} onClick={onClick}>
      {title ? title : icon}
    </div>
  );
};

export default Button;
