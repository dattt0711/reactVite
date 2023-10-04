import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'
// type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

// export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
//     email: {
//         required: {
//             value: true,
//             message: "Email la bat buoc"
//         },
//         minLength: {
//             value: 5,
//             message: "do dai tu 5 - 160 ky tu",
//         },
//         maxLength: {
//             value: 160,
//             message: "do dai tu 5 - 160 ky tu",
//         }
//     },
//     password: {
//         required: {
//             value: true,
//             message: "password la bat buoc"
//         },
//         minLength: {
//             value: 6,
//             message: "do dai tu 6 - 160 ky tu",
//         },
//         maxLength: {
//             value: 160,
//             message: "do dai tu 6 - 160 ky tu",
//         }
//     },
//     confirm_password: {
//         required: {
//             value: true,
//             message: "confirm_password la bat buoc"
//         },
//         minLength: {
//             value: 6,
//             message: "do dai tu 6 - 160 ky tu",
//         },
//         maxLength: {
//             value: 160,
//             message: "do dai tu 6 - 160 ky tu",
//         },
//         validate: typeof getValues === "function"
//             ? (value) => value === getValues('password') || 'password does not mach'
//             : undefined
//     },
// })

export const schema = yup.object({
  email: yup.string().required('email must be required').email('Not email format'),
  password: yup.string().required('password must be required').min(6, 'length from 6 to 160'),
  // .max(160, 'length from 6 to 160'),
  confirm_password: yup
    .string()
    .required('confirm_password must be required')
    .min(6, 'length from 6 to 160')
    .max(160, 'length from 6 to 160')
    .oneOf([yup.ref('password')], 'password does not match')
})

const loginSchema = schema.omit(['confirm_password'])

export type Schema = yup.InferType<typeof schema>
export type LoginSchema = yup.InferType<typeof loginSchema>
