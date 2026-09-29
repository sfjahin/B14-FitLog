
import { Clock9 } from 'lucide-react';
import { Flame } from 'lucide-react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ card }) => {
    return (
        <Link href={`/excercise/${card.id}`} className='flex flex-col bg-[#15171D] rounded-2xl'>
            <Image className='w-full h-64 object-cover object-center rounded-t-2xl'
                src={card.image}
                height={300}
                width={300}
                alt={card.name}
            />

            <div className='flex flex-col gap-2 p-4 rounded-2xl'>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {
                        card.muscleGroups.map((muscle, index) => (
                            <span key={index} className='text-black text-md px-4 py-1 bg-green-500 rounded-full'>{muscle}</span>
                        ))
                    }
                </div>
                <div>
                    <h2 className='text-xl font-bold'>{card.name}</h2>
                </div>
                <div>
                    <p className='text-gray-500'>{card.equipment}</p>
                </div>
                <hr className='my-4 text-gray-800' />
                <div className='flex justify-start gap-2 items-center'>
                    <div className='flex justify-start gap-2 items-center'>
                        <Clock9 className='text-gray-500 w-5 h-5' />
                        <p className='text-gray-500'>{card.duration} mins</p>
                    </div>
                    <div className='flex justify-start gap-2 items-center'>
                        <Flame className='text-gray-500 w-5 h-5' />
                        <p className='text-gray-500'>{card.duration} mins</p>
                    </div>
                    <div className='flex justify-start gap-2 items-center'>
                        <Star className='text-gray-500 w-5 h-5' />
                        <p className='text-gray-500'>{card.rating}</p>
                    </div>
                </div>
            </div>


        </Link>
    );
};

export default Card;