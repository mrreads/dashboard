import Image from "next/image";
import { faker } from "@faker-js/faker";

import { IClient } from "@/interfaces/IClient.type"
import { useEffect, useState } from "react";

interface IProps {
    client: IClient,
    selected: (id: null) => void
}

export default function ClientDetail({ client, selected }: IProps): JSX.Element {
    const { image, name, email, company, phone, birth, register } = client;
    
    const formatDate = (data: Date): string => new Date(data.toString()).toLocaleString("ru", { year: 'numeric', month: 'numeric', day: 'numeric' });
    
    const [paragraphs, updateParagraphs] = useState(faker.lorem.paragraphs());
    useEffect(() => updateParagraphs(faker.lorem.paragraphs()), [client]);

    return (
        <div className="sticky top-16 mt-7 border border-slate-200 shadow rounded-md p-7 px-6 w-full h-min dark:bg-slate-700 dark:border-transparent">
            
            <div className="flex items-start justify-between pb-5 rounded-t dark:border-slate-600">
                <p className="text-3xl font-semibold text-slate-700 dark:text-slate-300"> Информация о клиенте </p>
                <button onClick={() => selected(null)} type="button" className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-slate-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Закрыть окно</span>
                </button>
            </div>
            
            <div className="mb-5 h-0.5 w-full bg-slate-100 dark:bg-slate-600 rounded-lg" />

            <div className="flex gap-5">
                <Image src={image} width={120} height={120} className="rounded-full shadow" alt="Аватарка" />
                
                <div className="flex flex-col gap-2">
                    <p className="h-min mt-4 text-3xl font-bold text-slate-900 dark:text-slate-200"> { name } </p>
                    <p className="h-min text-1xl ml-1 text-slate-700 dark:text-slate-300"> { email } </p>  
                </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-5 px-3">
                <div className="flex gap-2"> <p className="text-slate-700 dark:text-slate-300">Компания:</p> <p className="font-semibold text-slate-900 dark:text-slate-200">{ company }</p> </div>
            </div>
            
            <div className="mt-5 h-0.5 w-full bg-slate-100 dark:bg-slate-600 rounded-lg" />

            <p className="px-3 pt-5 text-slate-700 dark:text-slate-300">
                { paragraphs }
            </p>

            <div className="mt-5 h-0.5 w-full bg-slate-100 dark:bg-slate-600 rounded-lg" />
            
            <div className="flex flex-col gap-2 mt-5 px-3">
                <div className="flex gap-2"> <p className="text-slate-700 dark:text-slate-300">Телефон:</p> <p className="font-semibold text-slate-900 dark:text-slate-200">{ phone }</p> </div>
                <div className="flex gap-2"> <p className="text-slate-700 dark:text-slate-300">Дата рождения:</p> <p className="font-semibold text-slate-900 dark:text-slate-200"> { formatDate(birth) } </p> </div>
                <div className="flex gap-2"> <p className="text-slate-700 dark:text-slate-300">Дата регистрации:</p> <p className="font-semibold text-slate-900 dark:text-slate-200">{ formatDate(register) }</p> </div>
            </div>
            
      </div>
    )
}