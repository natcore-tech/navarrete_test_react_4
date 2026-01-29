import React from "react";

export default function AboutTW() {
  return (
    <main className="bg-slate-950 min-h-[70vh]">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-white text-2xl font-extrabold">Información del Sistema</h1>
        <p className="mt-2 text-white/70">Este sistema permite gestionar productos y realizar cálculos básicos como valor total, IVA y descuentos. En la sección “Productos”, se consume una API pública de Dragon Ball que incluye imágenes en el campo image. </p>


      </div>
    </main>
  );
}