'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="bg-neutral-50 min-h-screen ">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" width={152} height={56} alt="Logo" />

          <Button variant="secondary">Sign up</Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">{children}</div>
      </div>
    </main>
  );
};

export default AuthLayout;
