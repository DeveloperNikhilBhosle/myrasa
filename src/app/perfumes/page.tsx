'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react'; // you can replace with any icon library you use


const products = [
    { id: 1, name: 'Fragrance Butter 1', price: '$50.00', image: '/perfumes/perfume1.png', description: 'Luxurious fragrance butter with floral notes.' },
    { id: 2, name: 'Fragrance Butter 2', price: '$45.00', image: '/perfumes/perfume2.png', description: 'A rich fragrance butter with citrus undertones.' },
    { id: 3, name: 'Fragrance Butter 3', price: '$55.00', image: '/perfumes/perfume3.png', description: 'Indulge in this creamy fragrance butter with sweet aromas.' },
    { id: 4, name: 'Fragrance Butter 4', price: '$48.00', image: '/perfumes/perfume4.png', description: 'A luxurious blend of spices and florals.' },
    { id: 5, name: 'Fragrance Butter 5', price: '$52.00', image: '/perfumes/perfume5.png', description: 'Exquisite fragrance with woody and floral notes.' },
    { id: 6, name: 'Fragrance Butter 6', price: '$50.00', image: '/perfumes/perfume6.png', description: 'A fragrant blend with a hint of vanilla and lavender.' },
    { id: 7, name: 'Fragrance Butter 7', price: '$55.00', image: '/perfumes/perfume7.png', description: 'Citrus-based fragrance butter with a refreshing twist.' },
    { id: 8, name: 'Fragrance Butter 8', price: '$60.00', image: '/perfumes/perfume8.png', description: 'Elegant fragrance with hints of jasmine and rose.' },
    { id: 9, name: 'Fragrance Butter 9', price: '$47.00', image: '/perfumes/perfume9.png', description: 'Floral and fresh fragrance for everyday wear.' },
    { id: 10, name: 'Fragrance Butter 10', price: '$58.00', image: '/perfumes/perfume10.png', description: 'A luxurious butter with a hint of sandalwood.' },
    { id: 11, name: 'Fragrance Butter 11', price: '$59.00', image: '/perfumes/perfume11.png', description: 'Fruity and floral notes combined into one fragrance.' },
    { id: 12, name: 'Fragrance Butter 12', price: '$62.00', image: '/perfumes/perfume12.png', description: 'A rich, sweet scent with a touch of musk.' },
    { id: 13, name: 'Fragrance Butter 13', price: '$65.00', image: '/perfumes/perfume13.png', description: 'Sophisticated fragrance butter with floral nuances.' },
    { id: 14, name: 'Fragrance Butter 14', price: '$56.00', image: '/perfumes/perfume14.png', description: 'A vibrant scent with notes of bergamot and jasmine.' },
    { id: 15, name: 'Fragrance Butter 15', price: '$53.00', image: '/perfumes/perfume15.png', description: 'A refreshing, minty fragrance that soothes the senses.' },
    { id: 16, name: 'Fragrance Butter 16', price: '$60.00', image: '/perfumes/perfume16.png', description: 'Sandalwood and vanilla blend for a comforting scent.' },
    { id: 17, name: 'Fragrance Butter 17', price: '$50.00', image: '/perfumes/perfume17.png', description: 'A tropical fragrance with coconut and pineapple.' },
    { id: 18, name: 'Fragrance Butter 18', price: '$45.00', image: '/perfumes/perfume18.png', description: 'An elegant floral fragrance with hints of lavender.' },
    { id: 19, name: 'Fragrance Butter 19', price: '$57.00', image: '/perfumes/perfume19.png', description: 'A soft, subtle fragrance perfect for any occasion.' },
    { id: 20, name: 'Fragrance Butter 20', price: '$63.00', image: '/perfumes/perfume20.png', description: 'A creamy fragrance butter with exotic floral notes.' },
    { id: 21, name: 'Fragrance Butter 21', price: '$66.00', image: '/perfumes/perfume21.png', description: 'A rich, creamy butter with amber and patchouli.' },
    { id: 22, name: 'Fragrance Butter 22', price: '$61.00', image: '/perfumes/perfume22.png', description: 'A fruity, sweet scent with fresh citrus notes.' },
    { id: 23, name: 'Fragrance Butter 23', price: '$64.00', image: '/perfumes/perfume23.png', description: 'A sophisticated blend of musky and floral notes.' },
    { id: 24, name: 'Fragrance Butter 24', price: '$55.00', image: '/perfumes/perfume24.png', description: 'Soft and floral with hints of sweet fruit.' },
    { id: 25, name: 'Fragrance Butter 25', price: '$59.00', image: '/perfumes/perfume25.png', description: 'Exotic fragrance with a hint of spice and amber.' },
];

export default function FragranceButterPage() {
    return (
        <div className="py-12 px-6">
            <header className="woocommerce-products-header layout-standard text-light products-header-text-light header_bg" >
                <div className="bg_shop_header woocommerce-products-header__container konte-container">
                    <h1 className="woocommerce-products-header__title page-title">Fragrance Butter</h1>

                </div>
            </header>

            <div className="font-spirits-soft grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 padding10">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group overflow-hidden border rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out relative"
                    >
                        <div className="relative w-full h-72">
                            <Image
                                src={product.image}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-500 mb-4">{product.description}</p>
                        </div>

                        {/* Bottom sheet on hover */}
                        <div className="absolute bottom-0 left-0 w-full bg-white px-4 py-3 flex justify-between items-center border-t translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10">
                            <span className="font-bold text-gray-800">{product.price}</span>
                            <button className="text-blue-600 hover:text-blue-800">
                                <Eye className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
