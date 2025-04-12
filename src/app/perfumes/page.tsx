'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye, X } from 'lucide-react';
import { useState } from 'react';

const products = [
    { id: 1, name: 'Fragrance Butter 1', price: { '20ml': 20, '60ml': 35, '100ml': 50 }, image: '/perfumes/perfume1.png', description: 'Luxurious fragrance butter with floral notes.' },
    { id: 2, name: 'Fragrance Butter 2', price: { '20ml': 18, '60ml': 32, '100ml': 45 }, image: '/perfumes/perfume2.png', description: 'A rich fragrance butter with citrus undertones.' },
    { id: 3, name: 'Fragrance Butter 3', price: { '20ml': 22, '60ml': 38, '100ml': 55 }, image: '/perfumes/perfume3.png', description: 'Indulge in this creamy fragrance butter with sweet aromas.' },
    { id: 4, name: 'Fragrance Butter 4', price: { '20ml': 19, '60ml': 34, '100ml': 48 }, image: '/perfumes/perfume4.png', description: 'A luxurious blend of spices and florals.' },
    { id: 5, name: 'Fragrance Butter 5', price: { '20ml': 21, '60ml': 36, '100ml': 52 }, image: '/perfumes/perfume5.png', description: 'Exquisite fragrance with woody and floral notes.' },
    { id: 6, name: 'Fragrance Butter 6', price: { '20ml': 20, '60ml': 35, '100ml': 50 }, image: '/perfumes/perfume6.png', description: 'A fragrant blend with a hint of vanilla and lavender.' },
    { id: 7, name: 'Fragrance Butter 7', price: { '20ml': 22, '60ml': 38, '100ml': 55 }, image: '/perfumes/perfume7.png', description: 'Citrus-based fragrance butter with a refreshing twist.' },
    { id: 8, name: 'Fragrance Butter 8', price: { '20ml': 25, '60ml': 42, '100ml': 60 }, image: '/perfumes/perfume8.png', description: 'Elegant fragrance with hints of jasmine and rose.' },
    { id: 9, name: 'Fragrance Butter 9', price: { '20ml': 18, '60ml': 30, '100ml': 47 }, image: '/perfumes/perfume9.png', description: 'Floral and fresh fragrance for everyday wear.' },
    { id: 10, name: 'Fragrance Butter 10', price: { '20ml': 23, '60ml': 40, '100ml': 58 }, image: '/perfumes/perfume10.png', description: 'A luxurious butter with a hint of sandalwood.' },
    { id: 11, name: 'Fragrance Butter 11', price: { '20ml': 24, '60ml': 42, '100ml': 59 }, image: '/perfumes/perfume11.png', description: 'Fruity and floral notes combined into one fragrance.' },
    { id: 12, name: 'Fragrance Butter 12', price: { '20ml': 26, '60ml': 45, '100ml': 62 }, image: '/perfumes/perfume12.png', description: 'A rich, sweet scent with a touch of musk.' },
    { id: 13, name: 'Fragrance Butter 13', price: { '20ml': 28, '60ml': 48, '100ml': 65 }, image: '/perfumes/perfume13.png', description: 'Sophisticated fragrance butter with floral nuances.' },
    { id: 14, name: 'Fragrance Butter 14', price: { '20ml': 24, '60ml': 42, '100ml': 56 }, image: '/perfumes/perfume14.png', description: 'A vibrant scent with notes of bergamot and jasmine.' },
    { id: 15, name: 'Fragrance Butter 15', price: { '20ml': 22, '60ml': 37, '100ml': 53 }, image: '/perfumes/perfume15.png', description: 'A refreshing, minty fragrance that soothes the senses.' },
    { id: 16, name: 'Fragrance Butter 16', price: { '20ml': 25, '60ml': 42, '100ml': 60 }, image: '/perfumes/perfume16.png', description: 'Sandalwood and vanilla blend for a comforting scent.' },
    { id: 17, name: 'Fragrance Butter 17', price: { '20ml': 20, '60ml': 35, '100ml': 50 }, image: '/perfumes/perfume17.png', description: 'A tropical fragrance with coconut and pineapple.' },
    { id: 18, name: 'Fragrance Butter 18', price: { '20ml': 18, '60ml': 30, '100ml': 45 }, image: '/perfumes/perfume18.png', description: 'An elegant floral fragrance with hints of lavender.' },
    { id: 19, name: 'Fragrance Butter 19', price: { '20ml': 23, '60ml': 40, '100ml': 57 }, image: '/perfumes/perfume19.png', description: 'A soft, subtle fragrance perfect for any occasion.' },
    { id: 20, name: 'Fragrance Butter 20', price: { '20ml': 26, '60ml': 44, '100ml': 63 }, image: '/perfumes/perfume20.png', description: 'A creamy fragrance butter with exotic floral notes.' },
    { id: 21, name: 'Fragrance Butter 21', price: { '20ml': 27, '60ml': 45, '100ml': 66 }, image: '/perfumes/perfume21.png', description: 'A rich, creamy butter with amber and patchouli.' },
    { id: 22, name: 'Fragrance Butter 22', price: { '20ml': 25, '60ml': 43, '100ml': 61 }, image: '/perfumes/perfume22.png', description: 'A fruity, sweet scent with fresh citrus notes.' },
    // { id: 23, name: 'Fragrance Butter 23', price: { '20ml': 26, '60ml': 44, '100ml': 64 }, image: '/perfumes/perfume23.png', description: 'A sophisticated blend of musky and floral notes.' },
    // { id: 24, name: 'Fragrance Butter 24', price: { '20ml': 22, '60ml': 38, '100ml': 55 }, image: '/perfumes/perfume24.png', description: 'Soft and floral with hints of sweet fruit.' },
    // { id: 25, name: 'Fragrance Butter 25', price: { '20ml': 24, '60ml': 42, '100ml': 59 }, image: '/perfumes/perfume25.png', description: 'Exotic fragrance with a hint of spice and amber.' },
];

const agarbatti = [
    { id: 1, name: 'Agarbatti 1', price: { '20ml': 15, '60ml': 25, '100ml': 40 }, image: '/perfumes/perfume23.png', description: 'Traditional incense with a soothing fragrance.' },
    { id: 2, name: 'Agarbatti 2', price: { '20ml': 14, '60ml': 24, '100ml': 38 }, image: '/perfumes/perfume24.png', description: 'A refreshing incense with floral notes.' },
    // more products...
];

const showerGel = [
    { id: 1, name: 'Shower Gel 1', price: { '20ml': 10, '60ml': 20, '100ml': 30 }, image: '/perfumes/perfume14.png', description: 'Gentle and refreshing shower gel.' },
    { id: 2, name: 'Shower Gel 2', price: { '20ml': 12, '60ml': 22, '100ml': 32 }, image: '/perfumes/perfume15.png', description: 'Moisturizing shower gel with lavender fragrance.' },
    // more products...
];


export default function FragranceButterPage() {
    const [selectedCategory, setSelectedCategory] = useState('Perfumes');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('20ml');
    const [inputQty, setInputQty] = useState(1);

    // Select products based on category
    const getProducts = () => {
        if (selectedCategory === 'Perfumes') return products;
        if (selectedCategory === 'Agarbatti') return agarbatti;
        if (selectedCategory === 'Shower Gel') return showerGel;
        return [];
    };

    // Updated getCurrentPrice function
    const getCurrentPrice = (product) => {
        if (!product?.price || !selectedSize) return '';
        const price = product.price[selectedSize];
        return `$${(price * inputQty).toFixed(2)}`;
    };

    return (
        <div className="py-12 px-6">
            <header className="woocommerce-products-header layout-standard text-light products-header-text-light header_bg">
                <div className="bg_shop_header woocommerce-products-header__container konte-container">
                    <h1 className="woocommerce-products-header__title page-title">{selectedCategory}</h1>
                </div>
            </header>

            <div className="flex justify-end mb-4 shop_dd">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="Perfumes">Perfumes</option>
                    <option value="Agarbatti">Agarbatti</option>
                    <option value="Shower Gel">Shower Gel</option>
                </select>
            </div>

            <div className="font-spirits-soft grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 padding10">
                {getProducts().map((product) => (
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

                        <div className="absolute bottom-0 left-0 w-full bg-white px-4 py-3 flex justify-between items-center border-t translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10">
                            <span className="font-bold text-gray-800">${product.price['20ml']}</span>
                            <button className="text-blue-600 hover:text-blue-800" onClick={() => setSelectedProduct(product)}>
                                <Eye className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => {
                        setSelectedProduct(null);
                        setSelectedSize('20ml');
                        setInputQty(1);
                    }}
                >
                    <div
                        className="bg-white shop_popup w-full max-w-4xl mx-auto rounded-lg overflow-hidden flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Left - Image */}
                        <div className="relative w-full md:w-1/2 h-80 md:h-auto">
                            <Image
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        {/* Right - Details */}
                        <div className="w-full md:w-1/2 p-6 space-y-4">
                            <div className="flex justify-between items-start">
                                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                                <button
                                    onClick={() => {
                                        setSelectedProduct(null);
                                        setSelectedSize('20ml');
                                        setInputQty(1);
                                    }}
                                >
                                    <X className="w-6 h-6 text-gray-500 hover:text-black" />
                                </button>
                            </div>

                            <p className="text-gray-600">{selectedProduct.description}</p>
                            <p className="text-xl font-semibold">{getCurrentPrice(selectedProduct)}</p>

                            <div className="space-y-2">
                                {/* Radio (Quantity Size) */}
                                <div>
                                    <label className="font-semibold block mb-1">Select Quantity:</label>
                                    <div className="flex gap-4">
                                        {['20ml', '60ml', '100ml'].map((size) => (
                                            <label key={size}>
                                                <input
                                                    type="radio"
                                                    name="qty"
                                                    value={size}
                                                    checked={selectedSize === size}
                                                    onChange={(e) => setSelectedSize(e.target.value)}
                                                />{' '}
                                                {size}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <input
                                    type="number"
                                    min={1}
                                    value={inputQty}
                                    onChange={(e) => setInputQty(parseInt(e.target.value) || 1)}
                                    placeholder="Enter quantity"
                                    className="w-full border rounded px-3 py-2"
                                />

                                {/* WhatsApp Link */}
                                <a
                                    href={`https://wa.me/918424889694?text=${encodeURIComponent(
                                        `*Product Order Details:*\n\n` +
                                        `*Product:* ${selectedProduct.name}\n` +
                                        `*SKU ID:* SKU-${selectedProduct.id}\n` +
                                        `*Description:* ${selectedProduct.description}\n` +
                                        `*Size:* ${selectedSize}\n` +
                                        `*Quantity:* ${inputQty}\n` +
                                        `*Price:* ${getCurrentPrice(selectedProduct)}\n` +
                                        `*Image:* https://yourdomain.com${selectedProduct.image}\n\n` +
                                        `Please confirm the order.`
                                    )}`}
                                    target="_blank"
                                    className="inline-block bg-green-500 text-white px-4 py-2 rounded font-semibold text-center mt-2"
                                >
                                    Order Now via WhatsApp
                                </a>

                                {/* SKU Info */}
                                <div className="text-sm text-gray-500">
                                    <p>
                                        <strong>SKU ID:</strong> SKU-{selectedProduct.id}
                                    </p>
                                    <p>
                                        <strong>SKU Description:</strong> {selectedProduct.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
