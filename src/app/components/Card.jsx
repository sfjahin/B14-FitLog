
import Image from 'next/image';
import React from 'react';

const Card = ({ card }) => {
    return (
        <div>
            <Image
                src={card.image}
                height={200}
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