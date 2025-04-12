export default function Hero() {
    return (
        <section className="relative h-[80vh] w-full bg-black text-white">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                    backgroundImage: "url('/hero.jpg')", // Add a real image later
                }}
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
                    Premium Inspired Perfumes
                </h1>
                <p className="text-lg md:text-xl max-w-xl">
                    Luxury scents at affordable prices. Unbox your aura today.
                </p>
            </div>

            {/* Overlay backdrop */}
            <div className="absolute inset-0 bg-black opacity-30 z-0" />
        </section>
    );
}
