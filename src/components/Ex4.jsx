// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      <div className="mx-2 md:w-96 bg-gray-200 shadow-lg rounded-xl min-h-[200px] h-auto p-2 flex justify-between flex-col items-center">
        <h1 className="text-xl font-bold">Title</h1>
        <p className="text-[14px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante
          dui, sollicitudin id enim vel, blandit ullamcorper libero. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Pellentesque{" "}
        </p>
        <button className="w-[50%] bg-gray-300">add </button>
      </div>
    </div>
  );
}
