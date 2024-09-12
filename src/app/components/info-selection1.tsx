// import Link from 'next/link';
import Image from "next/image";

export function InfoSelection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
            {/* Bagian Kiri: Gambar */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8"> {/* Tambahkan md:pr-8 */}
                <Image 
                    src="/images/selection.png"
                    alt="Work and something"
                    width={600}
                    height={600}
                    className="object-cover"
                />
            </div>

            {/* Bagian Kanan: Teks */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8"> {/* Tambahkan md:pl-8 */}
                <h1 className="text-left text-[35px] md:text-[50px] leading-[45px] md:leading-[65px] font-bold text-[#232340] mb-4 md:mb-6">
                    Chats for your distributed teams
                </h1>
                <p className="text-left text-md md:text-lg leading-6 md:leading-7 text-gray-600">
                    Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
                </p>
                <a href="#" className="text-blue-400 border-b border-blue-400 leading-10 text-lg">Learn More</a>
            </div>
        </section>
    );
}
