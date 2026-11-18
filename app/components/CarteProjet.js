export default function CarteProjet({ titre, categorie, description, degrade, lien }) {
  return (
    <a href={lien} target="_blank" className="block bg-[#1f1a40] border border-[#3a3270] rounded-4xl overflow-hidden text-left transition hover:-translate-y-2 hover:border-[#7b5cff]">
      <div className={`h-48 bg-gradient-to-br ${degrade}`}></div>
      <div className="p-6">
        <p className="text-sm uppercase tracking-widest text-[#7b5cff]">{categorie}</p>
        <h3 className="mt-2 text-2xl font-bold">{titre}</h3>
        <p className="mt-3 text-[#b9b3e8]">{description}</p>
      </div>
    </a>
  );
}