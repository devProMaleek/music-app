'use client';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';
import useAuthModal from '@/hooks/useAuthModal';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/hooks/useUser';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

type Props = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: Props) => {
  const router = useRouter();
  const { onOpen } = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Successfully Logged Out')
    }
  };
  return (
    <>
      <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
        <div className="flex items-center justify-between w-full mb-4">
          <div className="items-center hidden md:flex gap-x-2">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center transition bg-black rounded-full hover:opacity-75"
            >
              <RxCaretLeft className="text-white" size={36} />
            </button>
            <button
              onClick={() => router.forward()}
              className="flex items-center justify-center transition bg-black rounded-full hover:opacity-75"
            >
              <RxCaretRight className="text-white" size={36} />
            </button>
          </div>
          <div className="flex items-center md:hidden gap-x-2">
            <button className="flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75">
              <HiHome className="text-black" size={20} />
            </button>
            <button className="flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75">
              <BiSearch className="text-black" size={20} />
            </button>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            {user ? (
              <>
                <div className="flex gap-x-4 items-center">
                  <Button onClick={handleLogout} className='bg-white px-6 py-2'>
                    Logout
                  </Button>
                  <Button onClick={() => router.push('/account')} className='bg-white'>
                    <FaUserAlt />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Button onClick={onOpen} className="font-semibold bg-transparent text-neutral-300">
                    SignUp
                  </Button>
                </div>
                <div>
                  <Button onClick={onOpen} className="px-6 py-2 bg-white ">
                    Login
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Header;
