
import Image from 'next/image';
import React from 'react';

const Card = ({ card }) => {
    return (
        <div className='flex flex-col'>
            <Image className='w-full h-64 object-cover object-center' 
                src={card.image}
                height={300}
                width={300}
                alt={card.name}
            />

            <div>
                <h2>{card.name}</h2>
            </div>
        </div>
    );
};

export default Card;