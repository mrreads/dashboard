import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { object, string, number, date } from 'yup';
import { faker } from '@faker-js/faker';

import { IClient } from '@/interfaces/IClient.type';
import { useEffect, useRef } from 'react';

export default function Add(): JSX.Element {

    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const clientSchema = object().shape({
        name: string().min(2, 'Коротко!').max(75, 'Много!').required('Обязательно!'),
        email: string().email('Неверный формат').required('Обязательно!'),
        image: string().default(() => faker.image.avatar()).required(),
        phone: string().matches(phoneRegExp, 'Неверный формат!').required('Обязательно!'),
        register: date().required('Обязательно'),
        birth: date().default(() => new Date()).required('Обязательно!'),
        company: string().min(2, 'Коротко!').max(50, 'Много!').required('Обязательно!'),
      });
      
    const initialValues: IClient = {
        name: '',
        email: '',
        image: '',
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
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ФИО:</label> 
                { errors.name && touched.name ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.name}</span>) : null }
            </div>
           <Field id="name" name="name" placeholder="ФИО" className="mb-5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Почта:</label> 
                { errors.email && touched.email ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.email}</span>) : null }
            </div>
           <Field id="email" name="email" placeholder="Почта"  className="mb-5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Изображение:</label> 
                { errors.image && touched.image ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.image}</span>) : null }
            </div>
           <Field id="image" name="image" placeholder="Изображение сгенерируется автоматически" disabled className="opacity-80 cursor-not-allowed mb-5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Телефон:</label> 
                { errors.phone && touched.phone ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.phone}</span>) : null }
            </div>
           <Field id="phone" name="phone" placeholder="Телефон"  className="mb-5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Дата рождения:</label> 
                { errors.birth && touched.birth ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.birth}</span>) : null }
            </div>
           <Field id="birth" name="birth" placeholder="Дата рождения"  className="mb-5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

           <div className='flex gap-4 justify-between'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Компания:</label> 
                { errors.company && touched.company ? (<span className="text-sm text-red-600 dark:text-red-500">{errors.company}</span>) : null }
            </div>
           <Field id="phone" name="company" placeholder="Телефон"  className="mb-5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

           <button type="submit" className="w-auto bg-slate-500 text-slate-100 py-3 rounded-md hover:bg-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">Создать</button>
         
         </Form>
        )}
       </Formik>
      </div>
    )
  }
  