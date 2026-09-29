import Link from 'next/link';
import React from 'react';

const MyPlanPage = () => {
    return (
        <main className="flex-1 px-6 pb-10 pt-8 text-white md:px-8">
            <div className="mx-auto max-w-6xl">
                <header className="pt-3">
                    <h1 className="text-[4.2rem] font-black uppercase leading-none tracking-[-0.06em] text-white md:text-[6rem]">
                        My Plan
                    </h1>
                    <p className="mt-4 text-[1.1rem] text-[#7d8695] md:text-[1.4rem]">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </header>

                <section className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-[#2a2f3a] bg-[#121821] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d8695]">
                            Exercises
                        </p>
                        <div className="mt-7 flex items-center justify-start">
                            <span className="text-[4rem] font-black leading-none tracking-[-0.06em] text-green-500 md:text-[4.5rem]">
                                2
                            </span> 
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#2a2f3a] bg-[#121821] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d8695]">
                            Minutes
                        </p>
                        <div className="mt-7 text-[4rem] font-black leading-none tracking-[-0.06em] text-white md:text-[4.5rem]">
                            23
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#2a2f3a] bg-[#121821] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d8695]">
                            Calories
                        </p>
                        <div className="mt-7 text-[4rem] font-black leading-none tracking-[-0.06em] text-white md:text-[4.5rem]">
                            190
                        </div>
                    </div>
                </section>

                <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="rounded-xl border border-[#2f3740] bg-[#141b22] px-4 py-2 text-sm font-medium text-[#e7ecf3] transition hover:border-[#404a58]">
                            Today&apos;s Plan
                        </button>
                        <button className="rounded-xl border border-[#2f3740] bg-[#141b22] px-4 py-2 text-sm font-medium text-[#e7ecf3] transition hover:border-[#404a58]">
                            Saved
                        </button>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#e7ecf3]">
                        <button className="rounded-xl border border-[#2f3740] bg-[#141b22] px-4 py-2 font-medium text-[#e7ecf3]">
                            Sort By
                        </button>
                        <button className="rounded-xl border border-[#2f3740] bg-[#141b22] px-4 py-2 font-medium text-[#e7ecf3]">
                            Duration
                        </button>
                    </div>
                </div>

                <section className="mt-8 rounded-2xl border border-dashed border-[#39414d] bg-[#0c1016] px-6 py-16 text-center">
                    <h2 className="text-[2.4rem] font-black uppercase leading-none tracking-[-0.08em] text-white md:text-[4.3rem]">
                        Nothing here yet
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-lg text-[#7d8695]">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-3 text-base font-bold text-[#0c1117]"
                    >
                        Go to workouts
                    </Link>
                </section>
            </div>
        </main>
    );
};

export default MyPlanPage;