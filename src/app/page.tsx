'use client';

import Image from "next/image";
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


interface Fragrance {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  selectedSize?: string;
}

const fragrances: Fragrance[] = [...Array(10)].map((_, index) => ({
  id: index,
  name: `Fragrance ${index + 1}`,
  price: '$49.00',
  image: `/perfumes/perfume${index + 1}.png`,
  description: 'A luxurious summer fragrance with floral and citrus notes.',
}));

export default function Home() {
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offset = (windowHeight - rect.top) / windowHeight;
        const clampedOffset = Math.max(0.9, Math.min(1.1, 1 + offset * 0.05)); // control zoom range
        setScale(clampedOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Background Video */}
      <div className="font-spirits-soft relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="/WEBSITE-HOME-VIDEO.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Discover Your Signature Scent</h1>
          <p className="text-lg sm:text-xl max-w-xl mb-8">
            Unleash luxury fragrances that speak your soul.
          </p>
          <div className="flex gap-4">
            <a href="/perfumes" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Shop Now
            </a>
            <a href="/perfumes" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              View Collection
            </a>
          </div>
        </div>
      </div>

      {/* Summer Fragrance Collection */}
      <section id="collection" className="shop_dd bg-white py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-wide uppercase text-center mb-10 font-spirits-soft">
            Summer Fragrance Collection
          </h2>

          <div className="overflow-x-auto">
            <div className="flex gap-6 w-max">
              {fragrances.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[250px] sm:min-w-[300px] group overflow-hidden rounded-3xl border border-gray-200 relative"
                >
                  <div className="overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={400}
                      className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md text-black px-4 py-3 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out flex justify-between items-center">
                    <div>
                      <h3 className="text-base font-medium">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.price}</p>
                    </div>
                    <button
                      onClick={() => setSelectedFragrance({ ...item, selectedSize: '100ml' })}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    >
                      <Eye className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedFragrance && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end md:items-center justify-center"
          onClick={() => setSelectedFragrance(null)}
        >
          <div
            className="bg-white rounded-t-2xl md:rounded-2xl w-full md:w-[90vw] max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full">
              <Image
                src={selectedFragrance.image}
                alt={selectedFragrance.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between text-black font-spirits-soft">
              <div>
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                  onClick={() => setSelectedFragrance(null)}
                >
                  ✕
                </button>
                <h3 className="text-2xl font-semibold mb-2">{selectedFragrance.name}</h3>
                <p className="text-sm text-gray-600 mb-2">₹420.00 – ₹1,800.00</p>

                <div className="mb-3 spirits">
                  <label className="font-medium block mb-1">QUANTITY</label>
                  <div className="flex gap-4">
                    {['20ml', '60ml', '100ml'].map((size) => (
                      <label key={size} className="flex items-center gap-1 text-sm">
                        <input
                          type="radio"
                          name="size"
                          value={size}
                          checked={selectedFragrance.selectedSize === size}
                          onChange={(e) => setSelectedFragrance({ ...selectedFragrance, selectedSize: e.target.value })}
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="block text-sm mb-1">Price:</label>
                  <p className="font-semibold">
                    {selectedFragrance.selectedSize === '20ml'
                      ? '₹420.00'
                      : selectedFragrance.selectedSize === '60ml'
                        ? '₹1,050.00'
                        : '₹1,800.00'}
                  </p>
                </div>

                <div className="mb-3">
                  <label className="block text-sm mb-1">Quantity:</label>
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="w-20 border border-gray-300 rounded px-2 py-1"
                  />
                </div>

                <a
                  href={`https://wa.me/918424889694?text=Hi,%20I%20need%20some%20help`}
                  target="_blank"
                  className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 mb-4 hover:bg-green-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326a7.766 7.766 0 0 0-11.38.88c-1.9 2.25-1.884 5.532.036 7.8L.57 14.47a.548.548 0 0 0 .695.755l3.643-1.167a7.696 7.696 0 0 0 3.608.92 7.762 7.762 0 0 0 5.337-2.13c2.153-2.15 2.419-5.647.746-8.02a7.745 7.745 0 0 0-1.998-2.303ZM8 14.307a6.27 6.27 0 0 1-3.244-.883.52.52 0 0 0-.395-.04l-2.52.806.837-2.313a.524.524 0 0 0-.078-.493 6.269 6.269 0 0 1 .12-7.491 6.229 6.229 0 0 1 9.14-.707 6.247 6.247 0 0 1-.167 8.804A6.256 6.256 0 0 1 8 14.307Zm3.178-4.325-.003-.002a.456.456 0 0 0-.161-.152l-1.63-.9c-.167-.092-.389-.067-.533.06l-.543.494a.364.364 0 0 1-.439.04c-.13-.08-.444-.218-.883-.62-.326-.296-.543-.565-.666-.755a.37.37 0 0 1 .037-.466l.47-.53c.13-.146.157-.358.072-.535l-.732-1.51a.45.45 0 0 0-.366-.258.467.467 0 0 0-.417.157c-.484.55-.764 1.073-.84 1.594-.091.64.072 1.267.484 1.887.313.473.76.939 1.33 1.388.53.417 1.028.698 1.497.845.54.17 1.042.184 1.497.046.514-.158.998-.54 1.45-1.136a.457.457 0 0 0 .053-.48Z" />
                  </svg>
                  Order Now
                </a>

                <div className="text-sm text-gray-600">
                  <p><strong>SKU ID:</strong> SKUTMPRO319</p>
                  <p><strong>Categories:</strong> All Perfumes, Fresh perfumes, Most Selling Perfumes, TM PERFUMES HOUSE</p>
                </div>

                <Link href={`/product/${selectedFragrance.id}`} className="text-blue-600 underline mt-4 block text-sm">
                  View Product Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* THE SCENTED WORLD OF MYRASA */}
      <section className="bg-[#f7f7f7] py-16 px-6 sm:px-12 font-spirits-soft">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: YouTube Video */}
          <div className="aspect-video w-full">

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/cRSDPUipYQA?si=7i444oog0uyij_1r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cRSDPUipYQA?si=7i444oog0uyij_1r"
              title="The Scented World of Myrasa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl w-full h-full"
            />
          </div>

          {/* Right: Title & Description */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-spirits-soft font-light mb-4 uppercase items-center-menus">
              The Scented World of Myrasa
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Step into the scented world of Myrasa, where every fragrance tells a story. Our handpicked selection of luxurious perfumes brings out the true essence of your personality.
            </p>
          </div>
        </div>
      </section>

      {/* Product Specifications Section */}
      <section className="bg-white py-16 px-6 sm:px-12 font-spirits-soft">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* 100% ORIGINAL */}
            <div className="flex items-center md:w-1/3">
              <img
                src="https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dw4c8d2fe4/images/Badge.svg"
                alt="100% Original"
                className="w-20 h-20 mr-6"
              />
              <div className="text-left">
                <h6 className="text-lg sm:text-xl font-semibold text-gray-900">100% ORIGINAL</h6>
                <p className="text-sm sm:text-base text-gray-600">All products are original and go through strict quality check.</p>
              </div>
            </div>

            {/* 7 Day Return */}
            <div className="flex items-center md:w-1/3">
              <img
                src="https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dwdc1ea61c/images/Untitled-1-07.svg"
                alt="7 Day Return"
                className="w-20 h-20 mr-6"
              />
              <div className="text-left">
                <h6 className="text-lg sm:text-xl font-semibold text-gray-900">7 DAY RETURN</h6>
                <p className="text-sm sm:text-base text-gray-600">Use our hassle-free method to return.</p>
              </div>
            </div>

            {/* Free Shipping */}
            <div className="flex items-center md:w-1/3">
              <img
                src="https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dw481d1e49/images/Product_delivery.svg"
                alt="Free Shipping"
                className="w-20 h-20 mr-6"
              />
              <div className="text-left">
                <h6 className="text-lg sm:text-xl font-semibold text-gray-900">Shipping</h6>
                <p className="text-sm sm:text-base text-gray-600">Free Shipping & Returns all across India.</p>
              </div>
            </div>
          </div>
        </div>


      </section>


      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="flex-1 overflow-hidden">
            <img
              ref={imageRef}
              src="/myrasa-store.webp"
              alt="Inside MyRasa Store"
              style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 shop_dd text-center lg:text-left">
            <h2 className="text-4xl text-black-600 font-bold leading-tight">
              <span className="text-orange-600">Why We Do, </span> What We Do
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              At <strong>MyRasa</strong>, we believe that fragrance is not just a scent, it’s an experience.
              We craft our perfumes with a deep understanding of emotion and individuality—because no two people are alike.
              Our mission is to bring high-quality, long-lasting fragrances that resonate with your unique identity.
              With expert-curated blends and exceptional oil concentration, every bottle of MyRasa is designed to make a lasting impression.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center mt-6 px-5 py-2 bg-orange-600 text-white rounded-lg font-semibold shadow hover:bg-grey-700 transition"
            >
              CONTACT US
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>






      {/* CATEGORY BANNER GRID */}
      <section className="bg-white py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="media-grid grid grid-cols-12 gap-6">
            {/* Repeatable banner item */}
            <a href="/collections/eau-de-parfum" className="col-span-12 md:col-span-6 row-span-3">
              <img src="//in.ajmal.com/cdn/shop/files/category-banner-1-_3.jpg?v=1744009861" alt="Eau De Parfum" className="w-full h-full object-cover rounded-xl" />
            </a>
            <a href="/collections/concentrated-perfume" className="col-span-12 md:col-span-6 row-span-2">
              <img src="//in.ajmal.com/cdn/shop/files/category-banner-2-_4.jpg?v=1744009989" alt="Concentrated Perfume" className="w-full h-full object-cover rounded-xl" />
            </a>
            <a href="/collections/dakhoon" className="col-span-12 md:col-span-6 row-span-2">
              <img src="//in.ajmal.com/cdn/shop/files/category-banner-2-_6.jpg?v=1744010043" alt="Dakhoon" className="w-full h-full object-cover rounded-xl" />
            </a>
            <a href="/collections/deodorants" className="col-span-12 md:col-span-6 row-span-3">
              <img src="//in.ajmal.com/cdn/shop/files/category-banner-1-_4.jpg?v=1744009947" alt="Deodorants" className="w-full h-full object-cover rounded-xl" />
            </a>
            <a href="/collections/gifting" className="col-span-12 md:col-span-6 row-span-2">
              <img src="//in.ajmal.com/cdn/shop/files/category-banner-2-_5_10de1540-a555-49ee-9a3a-49079c0cece9.jpg?v=1744114424" alt="Gifting" className="w-full h-full object-cover rounded-xl" />
            </a>
          </div>
        </div>
      </section>






    </>
  );
}