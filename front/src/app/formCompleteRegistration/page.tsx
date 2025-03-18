"use client"
import { FormCompleteRegistrationView } from '@/views/FormCompleteRegistrationView'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

const Page = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <FormCompleteRegistrationView />
    </div>
  );
};

export default Page;
