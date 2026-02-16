import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between bg-white text-black p-6 md:p-16 overflow-x-hidden">
      {/* Header / Logo */}
      <header className="w-full max-w-7xl flex justify-center md:justify-start z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
        <Image
          src="/logo.jpeg"
          alt="Topmost Logo"
          width={150}
          height={50}
          className="object-contain md:w-[180px]"
          priority
        />
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10 md:gap-24 z-10 py-12 md:py-0">
        {/* Product Image Section */}
        <div className="relative w-full max-w-[280px] sm:max-w-md aspect-[3/4] md:max-w-xl animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="absolute inset-0 bg-gray-100 rounded-[1.5rem] md:rounded-[2rem] -rotate-2 scale-95 z-0" />
          <div className="relative z-10 w-full h-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100">
            <Image
              src="/image-1.jpeg"
              alt="Topmost Soft Luggage"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-orange-500/10 rounded-full blur-xl md:blur-2xl" />
          <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 bg-blue-500/5 rounded-full blur-2xl md:blur-3xl" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-black text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full">
            Coming Soon
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Premium Bags <br />
            <span className="text-gray-400 italic">Redefined</span>
          </h1>
          <p className="text-base md:text-xl text-gray-500 max-w-lg font-light leading-relaxed px-4 md:px-0">
            Discover the perfect blend of durability and style. Our exclusive collection of soft luggage is designed to complement your lifestyle.
          </p>
          <div className="h-1 w-16 md:w-20 bg-black rounded-full" />
        </div>
      </div>

      {/* Footer / Decorative */}
      <footer className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
        <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-0 text-gray-300">
          <span>Innovation</span>
          <span>•</span>
          <span>Quality</span>
          <span>•</span>
          <span>Excellence</span>
        </div>
        <div className="text-gray-300 text-center md:text-left">
          © {new Date().getFullYear()} Topmost Soft Luggage
        </div>
      </footer>

      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-50/50 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-50/50 blur-[100px] -z-10" />
    </main>
  );
}
