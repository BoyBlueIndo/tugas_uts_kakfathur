'use client';

import { useState } from "react";
import { FormEvent } from "react";
// import Image from "next/image";
// import mockup from "images/mockup.jpg";

export function Hero() {
    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Email submitted:", email);
    };

    return (
        // <div className="flex items-center justify-start min-h-screen p-6">
        //     <section className="flex-1 flex flex-col justify-center items-start max-w-xl">
        //         <h1 className="text-4xl font-bold mb-4 text-[#fff]">
        //             Instant collaboration for remote teams
        //         </h1>
        //         <p className="text-lg mb-6 ">
        //             All-in-one place for your remote team to chat, collaborate and track project progress.
        //         </p>
        //         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
        //             <input
        //                 type="email"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 placeholder="Enter your email"
        //                 className="p-2 border border-gray-300 rounded"
        //                 required
        //             />
        //             <button
        //                 type="submit"
        //                 className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        //             >
        //                 Get Early Access
        //             </button>
        //         </form>
        //     </section>
        // </div>
        <div className="pt-32">
            <div className="px-[20px]">
                <h1 className="text-left text-[60px] leading-[100px] font-bold text-[#f5f5f5]">Instant collaboration for remote teams</h1>
                <p className="text-left text-[30px] pt-1 text-[#f5f5f5]">
                All-in-one place for your remote team to chat, collaborate and track project progress.
                </p><br />
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-purple-600 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Get Early Access
                    </button>
                </form>
            </div>
        </div>
    );
}
