import CarteService from "./components/CarteService";
import CarteProjet from "./components/CarteProjet";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#14112b] text-white flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tight">Soar Studio</h1>
      <p className="mt-6 text-xl text-[#b9b3e8]">
        Graphiste, designer et motion designer freelance.
      </p>
       <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl px-6">
        <CarteService titre="Logo" texte="Une identité unique qui vous ressemble." />
        <CarteService titre="Site web" texte="Un site moderne, beau sur ordinateur et téléphone." />
        <CarteService titre="Flyer" texte="Des supports imprimés qui attirent le regard." />
        <CarteService titre="Motion design" texte="Des animations pour donner vie à votre marque." />
      </section>
        <h2 className="mt-24 text-4xl font-bold">Mes projets</h2>
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <CarteProjet
          titre="Soar Studio, ma première page"
          categorie="Site web"
          description="Ma première page codée en HTML, CSS et JavaScript, mise en ligne sur GitHub Pages."
          degrade="from-[#7b5cff] to-[#14112b]"
          lien="https://seita-sokhona.github.io/ma-premiere-page/"
        />
        <CarteProjet
          titre="Projet 2 : identité visuelle"
          categorie="Logo"
          description="Visuel à venir."
          degrade="from-pink-500 to-orange-400"
          lien="#"
        />
        <CarteProjet
          titre="Projet 3 : affiche"
          categorie="Flyer"
          description="Visuel à venir."
          degrade="from-fuchsia-600 to-pink-400"
          lien="#"
        />
        <CarteProjet
          titre="Projet 4 : animation"
          categorie="Motion design"
          description="Visuel à venir."
          degrade="from-cyan-400 to-blue-700"
          lien="#"
        />
      </section>
    </main>
  );
}
