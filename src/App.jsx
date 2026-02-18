import React, { useState, useEffect } from 'react';

/**
 * ⚠️ NOTES POUR LES ÉTUDIANTS :
 * Ce fichier est votre base de travail. Pour le moment, tout est fait en "React Pur".
 * Votre mission est de transformer ce code en utilisant les outils suivants :
 * * 1. React Query : Pour remplacer les useEffect et la gestion du chargement.
 * 2. Formik & Yup : Pour remplacer la gestion manuelle du formulaire et ajouter de la validation.
 * 3. Framer Motion : Pour ajouter des animations d'entrée/sortie et de layout.
 * 4. react-chartjs-2 : Pour implémenter un graphique d'activité (à créer de zéro).
 */

// --- MOCK API ---
const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  // --- ÉTAT (À remplacer par React Query) ---
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setError] = useState(null);

  // --- ÉTAT FORMULAIRE (À remplacer par Formik) ---
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  // --- FETCH MANUEL (À supprimer au profit de useQuery) ---
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = { ...formData, id: Date.now() };
    setUsers([newUser, ...users]);
    setFormData({ name: '', email: '' });
    setIsFormOpen(false);
  };

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
        <p className="text-slate-500 font-medium animate-pulse">Initialisation du Dashboard...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans pb-20">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-indigo-600 to-violet-700 shadow-lg"></div>

      <div className="max-w-5xl mx-auto px-6 pt-12 relative z-10">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-1 text-white drop-shadow-lg">Team Manager <span className="text-indigo-100 text-lg font-normal block md:inline md:ml-2">v2.0</span></h1>
            <p className="text-white font-medium drop-shadow-md">Flux de travail collaboratif et monitoring JSI</p>
          </div>
          <button 
            onClick={() => setIsFormOpen(!isFormOpen)}
            className={`px-6 py-3 rounded-xl font-bold transition-all transform active:scale-95 shadow-xl ${
              isFormOpen 
              ? 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20' 
              : 'bg-white text-indigo-600 hover:shadow-indigo-500/20'
            }`}
          >
            {isFormOpen ? '✖ Fermer' : '＋ Nouveau Membre'}
          </button>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: FORM & CHART */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* TODO: ÉTAPE 3 - Framer Motion: AnimatePresence */}
            {isFormOpen && (
              <section className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-indigo-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-slate-800">Ajouter un profil</h2>
                </div>
                
                {/* TODO: ÉTAPE 2 - Formik & Yup */}
                <form onSubmit={handleAddUser} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-500 ml-1">Nom Complet</label>
                    <input 
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                      placeholder="ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-500 ml-1">Adresse Email</label>
                    <input 
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                      placeholder="ex: jean@compagnie.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all">
                    Enregistrer dans l'équipe
                  </button>
                </form>
              </section>
            )}

            {/* TODO: ÉTAPE 4 - react-chartjs-2 */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 min-h-[400px] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800">Activité des membres</h2>
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-slate-200 rounded-full"></span>
                </div>
              </div>
              <div className="flex-1 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 p-10 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <p className="font-semibold text-slate-500 mb-1">Visualisation manquante</p>
                <p className="text-sm max-w-[200px]">Implémentez react-chartjs-2 pour afficher les statistiques d'activité.</p>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: LIST */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-8">
              <div className="flex justify-between items-end mb-6 border-b border-slate-50 pb-4">
                <h2 className="text-xl font-bold text-slate-800">Membres <span className="text-indigo-500 ml-1">({users.length})</span></h2>
                <button onClick={() => alert('Fonctionnalité à implémenter')} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 uppercase tracking-wider">Voir tout</button>
              </div>
              
              {/* TODO: ÉTAPE 3 - Framer Motion: Layout & Initial/Animate */}
              <div className="space-y-3">
                {users.map((user) => (
                  <div 
                    key={user.id} 
                    className="group bg-white p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-500/5 transition-all flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{user.name}</h3>
                        <p className="text-xs font-medium text-slate-400">{user.email.toLowerCase()}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setUsers(users.filter(u => u.id !== user.id))}
                      className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                ))}

                {users.length === 0 && (
                  <div className="py-12 text-center text-slate-400">
                    <p>Aucun membre dans l'équipe.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}