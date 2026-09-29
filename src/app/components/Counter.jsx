import React from 'react';

const Counter = () => {
    return (
        <div className='flex items-center gap-3 text-sm font-medium text-[#e8edf3]'>
            <span className='text-[#c8ced7]'>Plan</span>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-black text-[#0d1117]'>
                2
            </div>
            <span className='text-[#c8ced7]'>Saved</span>
            <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#3b434d] bg-transparent text-xs font-black text-[#e8edf3]'>
                2
            </div>
        </div>
    );
};

export default Counter;