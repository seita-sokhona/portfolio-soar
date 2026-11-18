export default function CarteService({ titre, texte }) {
  return (
    <div className="bg-[#1f1a40] border border-[#3a3270] rounded-4xl p-8 text-left transition hover:-translate-y-2 hover:border-[#7b5cff]">
      <h3 className="text-2xl font-bold">{titre}</h3>
      <p className="mt-3 text-[#b9b3e8]">{texte}</p>
    </div>
  );
}