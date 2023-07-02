'use client';

import React, { ReactNode, useState } from 'react';
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

type Props = {
  children: ReactNode;
};

const SupabaseProvider = ({ children }: Props) => {
  const [supabaseClient, setSupabaseClient] = useState(() => createClientComponentClient<Database>());
  return (
    <>
      <SessionContextProvider supabaseClient={supabaseClient}>
        {children}
      </SessionContextProvider>
    </>
  );
};

export default SupabaseProvider;
