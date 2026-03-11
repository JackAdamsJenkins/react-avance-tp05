import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import ActivityChart from "./components/ActivityChart";

export default function App(){
  const [isFormOpen, setIsFormOpen] = useState(false)
  const {users, isLoading, addUser, deleteUser } = useUsers()

  if (isLoading) return <div>Chargement...</div>

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans pb-20">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-indigo-600 to-violet-700 shadow-lg"></div>

      <div className="max-w-5xl mx-auto px-6 pt-12 relative z-10">
        {/* HEADER */}
        <Header isFormOpen={isFormOpen} onToggleForm={() => setIsFormOpen(!isFormOpen)} />

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: FORM & CHART */}
          <div className="lg:col-span-7 space-y-8">
            {isFormOpen && (
              <UserForm onSubmit={addUser} onClose={() => setIsFormOpen(false)} />
            )}
            <ActivityChart />
          </div>

          <div className="lg:col-span-5">
            <UserList users={users} onDeleteUser={deleteUser} />
          </div>
          </main>
          </div>
          </div>
  )
}