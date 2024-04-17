import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'default';
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${
        props.variant === 'primary'
          ? 'bg-primary-500 text-white'
          : 'bg-white text-neutral-700'
      } border border-neutral-700 font-semibold `}
    >
      {props.children}
    </button>
  );
};

export default Button;
