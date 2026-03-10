import { useFormik } from "formik";
import { userValidationSchema } from "../utils/validationSchemas";

export default function UserForm({onSubmit, onClose}){
    const formik = useFormik({
        initialValues: { name: '', email: ''},
        validationSchema: userValidationSchema,
        onSubmit: (values, { resetForm }) => {
            onSubmit(values)
            resetForm()
            onClose()
        }
    })

    return (
        <section className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-indigo-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-slate-800">Ajouter un profil</h2>
                </div>
                
                {/* TODO: ÉTAPE 2 - Formik & Yup */}
                <form onSubmit={formik.handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-500 ml-1">Nom Complet</label>
                    <input
                      name="name" 
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                      placeholder="ex: Jean Dupont"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-sm ml-1">
                            {formik.errors.name}
                        </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-500 ml-1">Adresse Email</label>
                    <input
                      name="email" 
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                      placeholder="ex: jean@compagnie.fr"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm ml-1">
                            {formik.errors.email}
                        </p>
                    )}
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all">
                    Enregistrer dans l'équipe
                  </button>
                </form>
              </section>
    )
}