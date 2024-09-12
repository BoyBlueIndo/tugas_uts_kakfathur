import Image from "next/image";

export function Review() {
    return (
        <section className="px-6 py-12">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-[#232340] mb-12">
                What people say about Team
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/3">
                    <div className="flex justify-center mb-4">
                        {/* Stars */}
                        {Array(5).fill('').map((_, idx) => (
                            <span key={idx} className="text-yellow-500 text-xl">★</span>
                        ))}
                    </div>
                    <p className="text-gray-600 mb-6">
                        Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim.
                    </p>
                    <div className="flex items-center justify-center">
                        {/* Avatar */}
                        <Image 
                            src="/images/chealsea.png"
                            alt="Chealsea Morgan"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div className="ml-4 text-left">
                            <p className="font-bold text-lg">Chealsea Morgan</p>
                            <p className="text-gray-500">CEO at Subway</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/3">
                    <div className="flex justify-center mb-4">
                        {Array(5).fill('').map((_, idx) => (
                            <span key={idx} className="text-yellow-500 text-xl">★</span>
                        ))}
                    </div>
                    <p className="text-gray-600 mb-6">
                        In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat.
                    </p>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/images/nick.png"
                            alt="Nick Cave"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div className="ml-4 text-left">
                            <p className="font-bold text-lg">Nick Cave</p>
                            <p className="text-gray-500">CMO at Nokia</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/3">
                    <div className="flex justify-center mb-4">
                        {Array(5).fill('').map((_, idx) => (
                            <span key={idx} className="text-yellow-500 text-xl">★</span>
                        ))}
                    </div>
                    <p className="text-gray-600 mb-6">
                        Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus.
                    </p>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/images/lana.png"
                            alt="Lana Rosenfeld"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div className="ml-4 text-left">
                            <p className="font-bold text-lg">Lana Rosenfeld</p>
                            <p className="text-gray-500">Senior VP at Pinterest</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
