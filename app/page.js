import CarteService from "./components/CarteService";
import CarteProjet from "./components/CarteProjet";
import LogoAnime from "./components/LogoAnime";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfcf8] text-[#133f67] flex flex-col items-center justify-center text-center px-6 py-20">
       <LogoAnime taille={180} />
      <h1 className="apparait delai-1 text-5xl md:text-8xl font-bold tracking-tight">Soar Studio</h1>
      <p className="apparait delai-2 mt-6 text-xl text-[#246a98]">
        Graphiste, designer et motion designer freelance.
      </p>
       <section className="apparait delai-3 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl px-6">
        <CarteService titre="Logo" texte="Une identité unique qui vous ressemble." />
        <CarteService titre="Site web" texte="Un site moderne, beau sur ordinateur et téléphone." />
        <CarteService titre="Flyer" texte="Des supports imprimés qui attirent le regard." />
        <CarteService titre="Motion design" texte="Des animations pour donner vie à votre marque." />
      </section>
      <h2 className="apparait delai-4 mt-24 text-4xl font-bold">Mes projets</h2>
      <section className="apparait delai-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <CarteProjet
          titre="Soar Studio, ma première page"
          categorie="Site web"
          description="Ma première page codée en HTML, CSS et JavaScript, mise en ligne sur GitHub Pages."
          degrade="from-[#246a98] to-[#133f67]"
          lien="https://seita-sokhona.github.io/ma-premiere-page/"
        />
        <CarteProjet
          titre="Projet 2 : identité visuelle"
          categorie="Logo"
          description="Visuel à venir."
          degrade="from-[#7da6a8] to-[#b7b99a]"
          lien="#"
        />
        <CarteProjet
          titre="Projet 3 : affiche"
          categorie="Flyer"
          description="Visuel à venir."
          degrade="from-[#4182a5] to-[#7da6a8]"
          lien="#"
        />
        <CarteProjet
          titre="Projet 4 : animation"
          categorie="Motion design"
          description="Visuel à venir."
          degrade="from-[#133f67] to-[#4182a5]"
          lien="#"
        />
      </section>
    </main>
  );
}
