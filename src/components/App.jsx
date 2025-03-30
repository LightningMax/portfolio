import CTAButton from "./CTAButton";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div className="bg-nier-50">
      <header>
        <NavBar />
      </header>
      <div id="app">
        <div className="h-screen flex items-center flex-col justify-center">
          <h1 className="text-nier-400 opacity-90 font-megafield text-6xl pr-96">
            Max Reis
          </h1>
          <div>
            <p className="text-nier-400 opacity-90 font-megafield text-4xl pt-10 w-4xl">
              Je t'aide à créer des Applications Web premium et minimaliste.
            </p>

            <CTAButton message="Hello!"/>
          </div>

        </div>
      </div>
    </div>
  );
}
