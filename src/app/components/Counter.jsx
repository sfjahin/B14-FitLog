import React from 'react';

const Counter = () => {
    return (
        <div className='flex gap-2 items-center'>
            <p>Plan</p>
            <div className='w-8 h-8 rounded-full bg-green-500 flex items-center justify-center'>
                0
            </div>
            <p>Saved</p>
            <div className='w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center'>
                0
            </div>
        </div>
    );
};

export default Counter;