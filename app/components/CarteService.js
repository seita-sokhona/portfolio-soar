export default function CarteService({ titre, texte }) {
  return (
    <div className="bg-white shadow-md border border-[#e3decb] rounded-4xl p-8 text-left transition hover:-translate-y-2 hover:border-[#4182a5]">
      <h3 className="text-2xl font-bold">{titre}</h3>
      <p className="mt-3 text-[#246a98]">{texte}</p>
    </div>
  );
}