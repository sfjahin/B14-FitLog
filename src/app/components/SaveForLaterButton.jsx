'use client';
import { Bookmark, SquarePlus } from 'lucide-react';
import React, { useContext } from 'react';
import { PlansContext } from '../context/PlansContext';

const SaveForLaterButton = ({ exercise }) => {
    const { savedPlans, setSavedPlans } = useContext(PlansContext);
    const handleSaveButtonClick = () => {
        setSavedPlans([...savedPlans, exercise]);
        alert(`${exercise.name} has been saved for later!`);
    }
    return (
        <div>
            <button className="border-2 border-gray-500 text-gray-500 px-4 py-2 rounded-full flex items-center gap-2" onClick={() => handleSaveButtonClick()}>
                <Bookmark />
                Save for later
            </button>
        </div>
    );
};

export default SaveForLaterButton;