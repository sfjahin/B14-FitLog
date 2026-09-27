import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center justify-center container mx-auto p-4'>
            <div className='flex justify-center items-center container mx-auto bg-[#15171D] p-10 rounded-4xl'>
                <div className='flex justify-between items-center container mx-auto'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-green-500'>WORKOUT LIBRARY</p>
                        <h1 className='text-6xl font-bold'>TRAIN WITH INTENT. LOG <br />
                            EVERY SET.</h1>
                        <p className='text-gray-500 text-wrap'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                            into today's plan, and watch the week's work add up.</p>
                        <button className='w-fit py-3 px-5 bg-green-500 rounded-lg'>BROWSE WORKOUTS</button>
                    </div>
                    <Image src='/assets/banner.png' width={300} height={850}></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;