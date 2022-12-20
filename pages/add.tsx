import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { object, string, number, date } from 'yup';
import { faker } from '@faker-js/faker';

import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import { IClient } from '@/interfaces/IClient.type';

registerLocale("ru", ru);
export default function Add(): JSX.Element {

    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const clientSchema = object().shape({
        name: string().min(2, 'Коротко!').max(75, 'Много!').required('Обязательно!'),
        email: string().email('Неверный формат').required('Обязательно!'),
        image: string().default(() => faker.image.avatar()).required(),
        phone: string().matches(phoneRegExp, 'Неверный формат!').required('Обязательно!'),
        register: date().default(() => new Date()).required('Обязательно'),
        birth: date().required('Обязательно!'),
        company: string().min(2, 'Коротко!').max(50, 'Много!').required('Обязательно!'),
      });
      
    const initialValues: IClient = {
        name: '',
        email: '',
        image: faker.image.avatar(),
        phone: '',
        register: new Date(),
        birth: '',
        company: '',
    };

    return (
      <div>
         <Formik
            initialValues={initialValues}
            validationSchema={clientSchema}
            onSubmit={(values, actions) => {
                console.log({ values, actions });
            }}
       >
        {({ errors, touched }) => (
         <Form className='flex flex-col max-w-xs'>

            <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="custom-label">ФИО:</label> 
                { errors.name && touched.name ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.name}</span>) : null }
            </div>
           <Field id="name" name="name" placeholder="ФИО" className="mb-5 custom-input" />

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="custom-label">Почта:</label> 
                { errors.email && touched.email ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.email}</span>) : null }
            </div>
           <Field id="email" name="email" placeholder="Почта"  className="mb-5 custom-input" />

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="custom-label"> Изображение: <span className='opacity-70'> (генерируется автоматически) </span> </label> 
            </div>
           <Field id="image" name="image" placeholder="Изображение сгенерируется автоматически" disabled className="mb-5 custom-input cursor-no-drop opacity-50" />

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="custom-label">Телефон:</label> 
                { errors.phone && touched.phone ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.phone}</span>) : null }
            </div>
           <Field id="phone" name="phone" placeholder="Телефон"  className="mb-5 custom-input" />

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="custom-label">Дата рождения:</label> 
                { errors.birth && touched.birth ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.birth}</span>) : null }
            </div>
           <Field id="birth" name="birth">
                {({ field, form: { setFieldValue } }) => (
                    <DatePicker
                        locale="ru" dateFormat="dd.MM.yyyy"
                        popperClassName="react-datepicker-left" nextMonthButtonLabel=">" previousMonthButtonLabel="<"
                        className="mb-5 custom-input" placeholderText={'ДД/ММ/ГГ'}
                        {...field} selected={field.value || null} onChange={(val: any) => setFieldValue(field.name, val)}
                />)}
            </Field>

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="custom-label">Компания:</label> 
                { errors.company && touched.company ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.company}</span>) : null }
            </div>
           <Field id="phone" name="company" placeholder="Телефон"  className="mb-5 custom-input" />
           
           <button type="submit" className="w-auto bg-slate-500 text-slate-100 py-3 rounded-md hover:bg-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">Создать</button>
         
         </Form>
        )}
       </Formik>
      </div>
    )
  }
  