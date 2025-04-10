import CTAButton from "../ui/CTAButton";

export default function Hero() {
  return (
    <section id="hero" className="hero h-screen w-full place-content-center">
      <div  className="flex items-center flex-col justify-center">
        <h1 className="title  text-nier-400 font-general text-3xl lg:text-8xl">
          SALUT, JE M'APPELLE MAX
        </h1>
        <div className="flex flex-col gap-10">
          <p className="text-nier-400 opacity-90 font-general text-2xl w-full text-center lg:text-6xl pt-10 lg:w-3xl">
          Je conçois des applications web élégantes & performantes.
          </p>
          <div className="flex w-full justify-center">
            <CTAButton message="Contactez-moi!" />
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-10 w-full justify-center animate-pulse">
        <span className="text-nier-400 opacity-90 font-megafield text-4xl">
          portfolio
        </span>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4b413d"
            d="M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
          />
          <path
            fill="#4b413d"
            d="M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
          />
        </svg>
      </div>
    </section>
  );
}
