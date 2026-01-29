import React from "react";

export default function InventarioHero() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        Bienvenido a la Gestión de Inventario
        </h1>
        <p className="mt-3 text-white/70 max-w-2xl">
        Consulta, registra y realiza cálculos sobre los productos del inventario.
        </p>
        <br></br>

        <img src="https://picsum.photos/id/1084/800/300"/>


      </div>
    </section>
  );
}