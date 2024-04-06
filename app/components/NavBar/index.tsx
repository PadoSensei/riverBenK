'use client';
import { Logo, SignInButton } from '@/app/components';
import React from 'react';

export default function NavBar() {
  return (
    <nav className="container flex w-100 justify-between items-center py-3 sticky top-0 backdrop-blur-sm bg-white bg-opacity-25">
      <Logo width={70} height={70} />
      <SignInButton />
    </nav>
  );
}
