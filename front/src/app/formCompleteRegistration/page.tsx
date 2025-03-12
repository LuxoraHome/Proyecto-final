"use client"
import { FormCompleteRegistration } from '@/views/FormCompleteRegistration'
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
      <FormCompleteRegistration />
    </div>
  );
};

export default Page;
