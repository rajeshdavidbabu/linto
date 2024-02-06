import InputPrompt from "./input-url";
import { BackgroundBeams } from "./ui/background-beams";

interface BackgroundBeamsDemoProps {
    children: React.ReactNode;
}


export function BackgroundBeamsDemo({ children }: BackgroundBeamsDemoProps) {
  return (
    <div className="relativ flex-1 flex flex-col items-center justify-center antialiased">
      <div className="container z-[100] flex flex-col justify-start items-center px-4 md:px-6 flex-1 mt-24">
        <div className="flex flex-col items-center space-y-4 text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Enter your {" "}
            <span className="px-1 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Linkedin URL
            </span>{" "}
            <br />
            and see the magic happen
          </h1>

          {children}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
