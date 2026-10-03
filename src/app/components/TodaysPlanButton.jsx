'use client';
import { SquarePlus } from 'lucide-react';
import React, { useContext } from 'react';
import { PlansContext } from '../context/PlansContext';

const TodaysPlanButton = ({ exercise }) => {
    const { plans, setPlans } = useContext(PlansContext);
    const handlePlanButtonClick = () => {
        setPlans([...plans, exercise]);
        alert(`${exercise.name} has been added to your plan!`);
    }
    return (
        <div>
            <button className="bg-green-500 text-black px-4 py-2 rounded-full flex items-center gap-2"
                onClick={() => handlePlanButtonClick()}>
                <SquarePlus />
                Add to Today's plan
            </button>
        </div>
    );
};

export default TodaysPlanButton;