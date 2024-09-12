import Image from "next/image";

export function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            <div>
                <Image src="/images/logo.svg" alt="Logo" width={100} height={50} />
            </div>

            <div className="flex gap-x-5">
                <div className="flex items-center gap-x-3">
                    <span className="hidden font-medium text-[#fff] border-b border-white lg:block">Product</span>
                </div>
                <div className="flex items-center gap-x-3">
                    <h1></h1>
                    <span className="hidden font-medium text-[#fff] border-b border-white lg:block">Blog</span>
                </div>
                <div className="flex items-center gap-x-3">
                    <h1></h1>
                    <span className="hidden font-medium text-[#fff] border-b border-white lg:block">Support</span>
                </div>
                <div className="flex items-center gap-x-3">
                    <h1></h1>
                    <span className="hidden font-medium text-[#fff] border-b border-white lg:block">Login</span>
                </div>
                <div className="flex items-center gap-x-3">
                    <h1></h1>
                    <span className="hidden bg-purple-600/50 px-4 py-2 font-medium text-white lg:block rounded-md">
                        Get Access
                    </span>
                </div>

                <Image src="/images/menu.svg" alt="Logo" width={50} height={50} className="lg:hidden"/>
            </div>
        </nav>
    );
}
