
export default function UserList({ users, onDeleteUser}){
    return (
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
                      onClick={() => onDeleteUser(user.id)}
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
    )
}