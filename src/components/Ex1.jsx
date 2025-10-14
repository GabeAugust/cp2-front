// Ex1 — Botão estilizado com Tailwind

// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="my-8 items-center flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Ex1 - Botão Estilizado</h1>
        <div className="w-full flex justify-center"> 
          <button className="w-[100px] h-[40px] bg-blue-600 cursor-pointer p-2 flex items-center justify-center rounded-lg hover:bg-blue-950 transition-colors duration-500 ">
            <p className="text-[16px] text-white font-bold">Adicionar </p>
          </button>
        </div>
    </div>
  );
}