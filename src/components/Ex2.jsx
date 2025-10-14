// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8 items-center flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
        <div className="flex justify-center items-center gap-2">
          <div className="w-[50px] h-[50px] bg-blue-500 items-center ">
              
          </div>
          <div className="w-[50px] h-[50px] bg-violet-500 items-center ">
              
          </div>
          <div className="w-[50px] h-[50px] bg-amber-400 items-center ">
              
          </div>
        </div>
    </div>
  );
}
