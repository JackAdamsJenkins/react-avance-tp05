import { plugin } from "postcss"
import { memo } from "react"



ChartJS.register(RadialLinarScale, ArcElement, Tooltip, Legend)

const ActivityChart = memo(() => {
    const data = {
        labels: ['Développement', "Design", 'Marketing', 'Support', 'Ventes'],
        datasets: [
            {
                data: [65, 45, 80, 55, 70],
                backgroundColor: [
                    'rgba(99, 102, 241, 0.7)',
                    'rgba(89, 91, 174, 0.7)',
                    'rgba(136, 136, 185, 0.7)',
                    'rgba(33, 35, 158, 0.7)',
                    'rgba(148, 148, 148, 0.7)',
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }
        ]
    }
})

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'bottom'}
    }
}

return (
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
)