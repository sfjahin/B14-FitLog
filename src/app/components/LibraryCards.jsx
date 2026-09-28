
import React from 'react';
import Card from './Card';

const LibraryData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const LibraryCards = async () => {
    const cards = await LibraryData();
    console.log(cards);
    return (

        <div className='flex flex-col justify-start container mx-auto'>
            <h2 className='font-black text-2xl'>THE LIBRARY</h2>
            <p className='text-gray-500'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-3 gap-4 container mx-auto'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>


    );
};

export default LibraryCards;