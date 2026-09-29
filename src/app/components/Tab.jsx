'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';


const Tab = () => {
    const pathname = usePathname();
    return (
        <div role="tablist" className="tabs bg-transparent flex items-center">
            <Link href="/" role="tab" className={`tab ${ pathname === '/' ? 'tab-active bg-[#1A2312] text-green-500' : '' } rounded-full text-gray-500`}>Workouts</Link>
            <Link href="/my-plan" role="tab" className={`tab ${ pathname === '/my-plan' ? 'tab-active bg-[#1A2312] text-green-500' : '' } rounded-full text-gray-500`}>My Plan</Link>
        </div>
    );
};

export default Tab;