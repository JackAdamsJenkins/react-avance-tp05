export default function Header({isFormOpen, onToggleForm}) {
    return (
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-1 text-white drop-shadow-lg">Team Manager <span className="text-indigo-100 text-lg font-normal block md:inline md:ml-2">v2.0</span></h1>
            <p className="text-white font-medium drop-shadow-md">Flux de travail collaboratif et monitoring JSI</p>
          </div>
          <button 
            onClick={onToggleForm}
            className={`px-6 py-3 rounded-xl font-bold transition-all transform active:scale-95 shadow-xl ${
              isFormOpen 
              ? 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20' 
              : 'bg-white text-indigo-600 hover:shadow-indigo-500/20'
            }`}
          >
            {isFormOpen ? '✖ Fermer' : '＋ Nouveau Membre'}
          </button>
        </header>
    )
}