import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex items-center justify-between container mx-auto border-t border-gray-800'>
            <div className='flex items-center justify-start container mx-auto px-4 py-8 gap-2'>
                <Image className='w-10 h-10 object-cover object-center rounded-full'
                    src="/assets/logo.png"
                    width={50}
                    height={50}
                    alt="logo-icon"
                />
                <span className='text-2xl font-black'>FITLOG</span>
            </div>
            <div className='flex items-center justify-end container mx-auto p-4'>
                <p className='text-gray-500'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;