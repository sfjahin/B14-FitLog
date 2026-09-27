import React from 'react';


const Tab = () => {
    return (
        <div role="tablist" className="tabs tabs-box bg-transparent border-transparent">
            <a role="tab" className="tab tab-active bg-[#1A2312] rounded-full text-green-500">Workouts</a>
            <a role="tab" className="tab text-gray-500">My Plan</a>
        </div>
    );
};

export default Tab;