import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
  onSubmit?: (event: any) => void;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', className, icon, onSubmit }) => {
  return (
    <button type={type} className={className} onSubmit={onSubmit}>
      {icon}
      {children}
     
    </button>
  );
};

export default Button;