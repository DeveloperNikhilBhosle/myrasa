'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={clsx(
                'fixed top-0 w-full z-50 transition-transform duration-300',
                show ? 'translate-y-0' : '-translate-y-full'
            )}
        >
            {/* Top announcement bar */}
            <div className="bg-black text-white text-sm text-center py-2">
                Free shipping on all orders above ₹999
            </div>

            {/* Main nav bar */}
            <div className=" ">
                <div className="max-w-7xl mx-auto px-4 flex items-center-menus justify-between">
                    {/* <div className="text-2xl font-bold"> </div> */}
                    <div className="cursor-pointer w-[120px] h-auto" onClick={() => window.location.href = '/'}>
                        <img
                            src="/logo1.png"
                            alt="MyRasa Logo"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <nav className="space-x-6 font-spirits-soft  items-up text-lg font-medium">
                        <a href="/" className="hover:text-gray-600">Home</a>
                        <a href="/perfumes" className="hover:text-gray-600">Shop</a>

                        <a href="/offers" className="hover:text-gray-600">Offers</a>
                        <a href="/contact" className="hover:text-gray-600">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
