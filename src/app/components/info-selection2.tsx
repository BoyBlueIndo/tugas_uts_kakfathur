import Image from "next/image";

export function InfoSelection2() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12">
            {/* Bagian Kiri: Teks */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
                <h1 className="text-[35px] md:text-[50px] leading-[45px] md:leading-[65px] font-bold text-[#232340] mb-4 md:mb-6">
                    Move faster with your Team tools
                </h1>
                <p className="text-lg leading-7 text-gray-600">
                With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.
                </p>
                <a href="#" className="text-blue-400 border-b border-blue-400 leading-10 text-lg">Learn More</a>
            </div>

            {/* Bagian Kanan: Gambar */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <Image 
                    src="/images/mockup.jpg"
                    alt="Work and something"
                    width={600}
                    height={600}
                    className="object-cover"
                />
            </div>
        </section>
    );
}
