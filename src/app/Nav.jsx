import Counter from '@/app/components/Counter';
import Image from 'next/image';
import React from 'react';
import Tab from '@/app/components/Tab';
import Link from 'next/link';

const Nav = () => {
    return (
        <div className='container mx-auto p-4'>
            <div className='flex justify-between container mx-auto py-5'>
                <div className='flex gap-2 h-fit items-center'>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image
                            src="/assets/logo.png"
                            width={50}
                            height={50}
                            alt="logo-icon"
                        />
                        <span>FITLOG</span>
                    </Link>
                </div>
                <Tab></Tab>
                <Counter></Counter>
            </div>
        </div>
    );
};

export default Nav;