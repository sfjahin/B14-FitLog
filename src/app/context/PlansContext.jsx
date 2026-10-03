'use client';

import React, { createContext, useState } from 'react';

export const PlansContext = createContext({});

const PlansContextPage = ( {children} ) => {
    const [plans, setPlans] = useState([]);
    const [savedPlans, setSavedPlans] = useState([]);

    const sharedData = {
        plans,
        setPlans,   
        savedPlans,
        setSavedPlans,
    }

    return <PlansContext.Provider value={sharedData}>{children}</PlansContext.Provider>
};

export default PlansContextPage;