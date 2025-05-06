"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { useCounter } from "./counter"; 

export function Data() {
  const { ref, inView } = useInView({ triggerOnce: false });

  const membros = useCounter(37, inView);
  const capacitacao = useCounter(450, inView);
  const parceiros = useCounter(10, inView);

  return (
    <div ref={ref} className="col-span-1 md:col-span-2 mt-8 bg-white/10 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Atualmente</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-2xl font-bold text-white">+{membros}</p>
          <p className="text-sm text-white/80">Membros</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">+{capacitacao}h</p>
          <p className="text-sm text-white/80">Capacitação Externa</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">+{parceiros}</p>
          <p className="text-sm text-white/80">Parceiros</p>
        </div>
      </div>
    </div>
  );
}
