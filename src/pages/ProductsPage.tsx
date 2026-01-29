import React, { useEffect, useState } from "react";

export default function LabTwTable() {
    const [items, setItems] = useState<any[]>([]);
   
    useEffect(() => {
      const load = async () => {
        
  
        try {
          // Sin paginación en UI: pedimos un page_size grande y mostramos lo que venga
          const url =
            " https://dragonball-api.com/api/characters?page=1&limit=10";
          const res = await fetch(url);
          const data = await res.json();
  
          const list = Array.isArray(data?.items) ? data.items : Array.isArray(data) ? data : [];
          setItems(list);
        } catch (e: any) {
          console.error(e);
        } finally {
        }
      };
  
      load();
    }, []);  



  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="text-xl font-extrabold">Listado de Productos (Dragon Ball)</h2>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10">
          <table className="min-w-full text-sm">
            <thead className="bg-white/5 text-white/80">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Nombre</th>
                <th className="px-4 py-3 text-left">Precio (demo)</th>
                <th className="px-4 py-3 text-left">Stock (demo)</th>
                <th className="px-4 py-3 text-left">Foto</th>
              </tr>
            </thead>
            <tbody>
              {items.map((c, idx) => (
                <tr key={c?.id ?? idx} className="border-t border-white/10">
                  <td className="px-4 py-3">{c?.id ?? "-"}</td>
                  <td className="px-4 py-3">{c?.name ?? "-"}</td>
                  <td className="px-4 py-3">${c?.ki ?? "-"}</td>
                  <td className="px-4 py-3">0</td>
                  <td className="px-4 py-3">{c?.image ? (
                    <img
                      src={c.image}
                      alt={c?.name ?? ""}
                      style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 8, border: "1px solid rgba(0,0,0,.15)" }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://via.placeholder.com/80?text=No+Img";
                      }}
                    />
                  ) : (
                    <span style={{ color: "#667085" }}>—</span>
                  )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}