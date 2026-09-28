import { Bookmark, SquarePlus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const getExerciseDetails = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}


const ExerciseDetails = async ({ params }) => {
    const { id } = await params;
    const exerciseData = await getExerciseDetails();
    console.log(id);
    return (
        <div className="container mx-auto p-4 my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* LEFT - IMAGE */}
                <div className="w-full h-[600px]">
                    <Image
                        className="w-full h-full rounded-2xl object-cover"
                        src={exerciseData[id].image}
                        alt={exerciseData[id].name}
                        width={800}
                        height={1200}
                    />
                </div>

                {/* RIGHT - CONTENT */}
                <div className="w-full flex flex-col gap-4 p-4">

                    <h1 className="text-3xl font-bold">
                        {exerciseData[id].name}
                    </h1>

                    <p>{exerciseData[id].description}</p>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {exerciseData[id].muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="text-black text-md px-4 py-1 bg-green-500 rounded-full"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 p-8 rounded-2xl bg-[#15171D]">

                        <div className="flex justify-between items-center">
                            <p>EQUIPMENT</p>
                            <p>{exerciseData[id].equipment}</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>DIFFICULTY</p>
                            <p>{exerciseData[id].difficulty}</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>SETS</p>
                            <p>{exerciseData[id].sets}</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>REPS</p>
                            <p>{exerciseData[id].reps}</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>DURATION</p>
                            <p>{exerciseData[id].duration} mins</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>CALORIES</p>
                            <p>{exerciseData[id].calories} kcal</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>RATING</p>
                            <p>{exerciseData[id].rating}</p>
                        </div>

                    </div>

                    <h2 className="text-2xl font-bold">
                        INSTRUCTIONS
                    </h2>

                    <div>
                        {exerciseData[id].instructions.map((step, index) => (
                            <p key={index}>
                                {index + 1}. {step}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 p-4">
                        <button className="bg-green-500 text-black px-4 py-2 rounded-full flex items-center gap-2">
                            <SquarePlus />
                            Add to today's plan
                        </button>

                        <button className="border-2 border-gray-500 text-gray-500 px-4 py-2 rounded-full flex items-center gap-2">
                            <Bookmark />
                            Save for later
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;