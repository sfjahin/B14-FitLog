
import React from 'react';
import Card from './Card';

const LibraryData = async()=> {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const LibraryCards = async() => {
    const cards = await LibraryData();
    console.log(cards);
    return (
        <div className='grid grid-cols-3 container mx-auto'>
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default LibraryCards;