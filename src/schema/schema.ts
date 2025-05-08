import { REG_PHONE } from '@/ults/const'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
export const step1Schema = toTypedSchema(
    yup.object(
        {
            name: yup.string().required("Missing name"),
            email: yup.string().required("Missing Email").email("Invalid Email"),
            phone: yup.string().required("Missing phone").test('is-phone', 'Invalid phone', val => REG_PHONE.test(val))
        }
    ))

export const step2Schema = toTypedSchema(
    yup.object(
        {
            plan: yup.object({
                name: yup.string().required("Invalid Plan"),
                price: yup.string().required("Invalid Plan")
            }),
            duration: yup.string().required().test('is-match', 'Invalid Duration', val => val == "0" || val == "1")
        }
    )
)

