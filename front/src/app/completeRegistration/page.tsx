"use client"
import { CompleteRegistration } from '@/views/CompleteRegistration'
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
      <CompleteRegistration />
    </div>
  );
};

export default Page;
