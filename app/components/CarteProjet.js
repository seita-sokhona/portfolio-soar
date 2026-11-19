export default function CarteProjet({ titre, categorie, description, degrade, lien }) {
  return (
    <a href={lien} target="_blank" className="block bg-white shadow-md border border-[#e3decb] rounded-4xl overflow-hidden text-left transition hover:-translate-y-2 hover:border-[#4182a5]">
      <div className={`h-48 bg-gradient-to-br ${degrade}`}></div>
      <div className="p-6">
        <p className="text-sm uppercase tracking-widest text-[#4182a5]">{categorie}</p>
        <h3 className="mt-2 text-2xl font-bold">{titre}</h3>
        <p className="mt-3 text-[#246a98]">{description}</p>
      </div>
    </a>
  );
}