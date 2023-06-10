'use client'
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';

type Props = {
  children: ReactNode,
  className?: string,
}

const Header = ({ children, className }: Props) => {
  const router = useRouter();

  const handleLogout = () => {};
  return (
    <>
      <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
        <div className="flex items-center justify-between w-full mb-4">
          <div className="items-center hidden md:flex gap-x-2">
            <button onClick={() => router.back()} className="flex items-center justify-center transition bg-black rounded-full hover:opacity-75">
              <RxCaretLeft className='text-white' size={36} />
            </button>
            <button onClick={() => router.forward()} className="flex items-center justify-center transition bg-black rounded-full hover:opacity-75">
              <RxCaretRight className='text-white' size={36} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header