// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      <nav>
        <ul className="bg-blue-400 w-full flex gap-3 flex-col md:justify-center xl:flex-row">
          <li>
            <a href="">aaaaa</a>
          </li>
          <li>
            <a href="">bbbbbb</a>
          </li>
          <li>
            <a href="">ccccc</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
