export function Hero(): React.ReactElement {
  return (
    <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
      <div className="container flex justify-center">
        <div className="w-11/12 sm:w-10/12">
          <h1 className="animate-fade-in-down animation-delay-[600ms] to-accent-pink mb-4 bg-gradient-to-br from-primary bg-clip-text text-5xl font-black text-transparent opacity-0 sm:text-6xl md:mb-6 md:text-7xl lg:text-8xl">
            Full-Stack Developer Based in Atlanta, GA
          </h1>
          <p className="animate-fade-in-down animation-delay-[600ms] mb-4 text-xl/snug font-light opacity-0 md:mb-6 md:text-2xl/snug lg:text-3xl/snug xl:text-4xl/snug">
            I work with small businesses and public organizations across the world to craft engaging
            digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
