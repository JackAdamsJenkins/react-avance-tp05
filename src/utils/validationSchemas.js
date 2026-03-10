import * as Yup from 'yup'

export const userValidationSchema = Yup.object({
    name: Yup.string().min(3, "Le nom doit faire au moins 3 caractères").required("Le nom est obligatoire"),
    email: Yup.string().email('Email invalide').required("L'email est obligatoire")
})