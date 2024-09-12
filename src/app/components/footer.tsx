export function Footer() {
    return (
        <footer className="bg-[#232340] text-white py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Bagian 1: Logo dan Deskripsi */}
                <div className="col-span-1">
                    <h2 className="text-4xl font-bold text-white mb-4">team<span className="text-blue-500">.</span></h2>
                    <p className="text-gray-400">
                        Collaboration platform for modern team
                    </p>
                </div>

                {/* Bagian 2: Links Company */}
                <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Product</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                    </ul>
                </div>

                {/* Bagian 3: Links Features */}
                <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-4">Features</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Screen Sharing</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">iOS & Android Apps</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">File Sharing</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">User Management</a></li>
                    </ul>
                </div>

                {/* Bagian 4: Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>info@teamapp.com</li>
                        <li>1-800-200-300</li>
                        <li>1010 Sunset Blvd. Palo Alto, California</li>
                    </ul>
                </div>

                {/* Bagian 5: Stay up to date */}
                <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-4">Stay up to date</h3>
                    <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md">
                            <span className="text-white">→</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center text-gray-500">
                © Copyright Team Inc.
            </div>
        </footer>
    );
}
