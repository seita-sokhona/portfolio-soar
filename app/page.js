import CarteService from "./components/CarteService";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#14112b] text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-bold tracking-tight">Soar Studio</h1>
      <p className="mt-6 text-xl text-[#b9b3e8]">
        Graphiste, designer et motion designer freelance.
      </p>
       <section className="mt-20 grid grid-cols-4 gap-6 max-w-5xl px-6">
        <CarteService titre="Logo" texte="Une identité unique qui vous ressemble." />
        <CarteService titre="Site web" texte="Un site moderne, beau sur ordinateur et téléphone." />
        <CarteService titre="Flyer" texte="Des supports imprimés qui attirent le regard." />
        <CarteService titre="Motion design" texte="Des animations pour donner vie à votre marque." />
      </section>
    </main>
  );
}
