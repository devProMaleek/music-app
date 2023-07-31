import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          `w-full rounded-full bg-green-500 border border-transparent px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
          className
        )}
        disabled={disabled}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'MyButton';

export default Button;
