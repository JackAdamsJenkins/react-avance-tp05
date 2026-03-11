import { memo } from "react"
import { PolarArea } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

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
                <span className="w-3 h-3 bg-indigo-500 rounded-full" />
                <span className="w-3 h-3 bg-slate-200 rounded-full" />
            </div>
            </div>
            <div className="flex-1">
                <PolarArea data={data} options={options} />
            </div>
        </section>
    )
})

ActivityChart.displayName ='ActivityChart'

export default ActivityChart