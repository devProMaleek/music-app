'use client';

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
 
interface ModalProviderProps {
}
export default function ModalProvider({}:ModalProviderProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null;
  }
  

  return (
    <>
     <AuthModal />
    </>
  );
}