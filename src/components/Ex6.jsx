// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
        <div className="grid grid-rows-3 h-80 justify-items-stretch">
          <div className="bg-amber-300 h-[80px] row-span-1">fafs</div>
          <div className="bg-black row-span-2 ">fasfaf</div>
        
          <div className="bg-amber-300 h-[80px] row-span-1 row-start-4 ">fafsa</div>
        </div>
    </div>
  );
}
