import SaveForLaterButton from '@/app/components/SaveForLaterButton';
import TodaysPlanButton from '@/app/components/TodaysPlanButton';
import { Bookmark, SquarePlus } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { useContext } from 'react';

const getExerciseDetails = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}


const ExerciseDetails = async ({ params }) => {
    const { id } = await params;
    const exerciseData = await getExerciseDetails();
    const exercise = exerciseData.find((item) => String(item.id) === id);

    if (!exercise) {
        notFound();
    }

    return (
        <div className="container mx-auto p-4 my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* LEFT - IMAGE */}
                <div className="w-full h-[600px]">
                    <Image
                        className="w-full h-full rounded-2xl object-cover"
                        src={exercise.image}
                        alt={exercise.name}
                        width={800}
                        height={1200}
                    />
                </div>

                {/* RIGHT - CONTENT */}
                <div className="w-full flex flex-col gap-4 p-4">

                    <h1 className="text-3xl font-bold">
                        {exercise.name}
                    </h1>

                    <p>{exercise.description}</p>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {exercise.muscleGroups.map((muscle, index) => (
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
                            <p>{exercise.equipment}</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>DIFFICULTY</p>
                            <p>{exercise.difficulty}</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>SETS</p>
                            <p>{exercise.sets}</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>REPS</p>
                            <p>{exercise.reps}</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>DURATION</p>
                            <p>{exercise.duration} mins</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>CALORIES</p>
                            <p>{exercise.caloriesBurned} kcal</p>
                        </div>

                        <hr className="my-4 text-gray-800" />

                        <div className="flex justify-between items-center">
                            <p>RATING</p>
                            <p>{exercise.rating}</p>
                        </div>

                    </div>

                    <h2 className="text-2xl font-bold">
                        INSTRUCTIONS
                    </h2>

                    <div>
                        {exercise.instructions.map((step, index) => (
                            <p key={index}>
                                {index + 1}. {step}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 p-4">
                        <TodaysPlanButton exercise={exercise} />
                        <SaveForLaterButton exercise={exercise} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;