import { AnimatedTitle } from "./slogan-components/animated-title"
import { StaticText } from "./slogan-components/static-text";

export function Slogan() {
    return (
        <div id="home" className="container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6">
                Insper Code
                <AnimatedTitle />
            </h1>
            <div className="h-8 mb-12">
                <StaticText />
            </div>
        </div>
    );
};