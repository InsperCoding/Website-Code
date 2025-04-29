'use client'

import { ReactTyped } from "react-typed";

export function AnimatedTitle() {
  return (
    <div>
      <h1>
        <span className="text-indigo-600 inline-block">
          <ReactTyped 
            strings={["Tecnologia", "Inovação", "Criatividade", "Liderança"]} 
            typeSpeed={70}
            backSpeed={40}
            backDelay={1000}
            loop
            cursorChar="|"
            showCursor={true}
            className="min-w-[2ch]"
            style={{ display: 'inline-block' }}
          />
        </span>
      </h1>
    </div>
  );
};

export default AnimatedTitle;