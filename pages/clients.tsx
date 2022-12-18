import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { useGetAllClientsQuery } from "@/services/clients"
import { IClient } from "@/pages/api/clients";
import { faker } from "@faker-js/faker";

export default function Clients(): JSX.Element {
  const { data, error, isLoading } = useGetAllClientsQuery();

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => setSearchQuery(e.target.value);
  const [filtered, setFiltered] = useState<IClient[] | undefined>([]);
  useEffect(() => {
    if (searchQuery.trim() != '')
      setFiltered(data?.filter(e => !(e.name.trim().toLowerCase().indexOf(searchQuery.trim().toLowerCase()) < 0 && e.email.trim().toLowerCase().indexOf(searchQuery.trim().toLowerCase()) < 0)));
    else
      setFiltered(data);
  }, [data, searchQuery]);

  const [selected, setSelected] = useState<string | null>(null);

  const formatDate = (data: Date): string => new Date(data.toString()).toLocaleString("ru", { year: 'numeric', month: 'numeric', day: 'numeric' });

  return (
    <div className="flex gap-5 w-full">

      <div className="flex flex-col gap-5 justify-start max-w-xl w-full">

      { isLoading ?
      
        <>
          <div className="mb-1 w-full">
            <label htmlFor="search" className="block mb-1 text-sb font-medium text-slate-900 dark:text-slate-200">Поиск</label>
            <input type="text" id="search" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-disabled dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ФИО или Email" disabled required />
          </div>

          { Array(15).fill(true).map((_, i) => (
              <div className="cursor-pointer border border-slate-200 shadow rounded-md p-4 px-5 w-full dark:bg-slate-700 dark:border-transparent" key={i}>
                <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                        </div>
                        <div className="h-2 bg-slate-500 rounded"></div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </>
        :
        
        <>
          <div className="mb-1 w-full">
            <label htmlFor="search" className="block mb-1 text-sb font-medium text-slate-900 w-full dark:text-slate-200">Поиск:</label>
            <input onChange={handleSearch} type="text" id="search" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ФИО или Email" required />
          </div>

          { filtered?.map((client: IClient) => (
            <div onClick={() => setSelected(client.id)}  className="flex gap-5 justify-between cursor-pointer border border-slate-200 shadow rounded-md p-4 px-5 w-full dark:bg-slate-700 dark:border-transparent" key={client.id}>
              <p className="text-slate-900 font-bold dark:text-slate-200"> { client.name }</p>
              <p className="text-slate-700 dark:text-slate-300"> { client.email }</p>
            </div>
          ))}
        </>
      }
      </div>

      { (selected != null) ? data?.map(client => (client.id == selected) ? (
        <div className="sticky top-16 mt-7 border border-slate-200 shadow rounded-md p-7 px-6 w-full h-min dark:bg-slate-700 dark:border-transparent" key={client.id}>
            
          <div className="flex items-start justify-between pb-5 rounded-t dark:border-slate-600">
              <p className="text-3xl font-semibold text-slate-700 dark:text-slate-300"> Информация о клиенте </p>
              <button onClick={() => setSelected(null)} type="button" className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-slate-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Закрыть окно</span>
              </button>
          </div>
          
          <div className="mb-5 h-0.5 w-full bg-slate-100 dark:bg-slate-600 rounded-lg" />

          <div className="flex gap-5">
            <img src={client.image} width={120} height={120} className="rounded-full shadow" />
            <div className="flex flex-col gap-2">
              <p className="h-min mt-4 text-3xl font-bold text-slate-900 dark:text-slate-200"> { client.name } </p>
              <p className="h-min text-1xl ml-1 text-slate-700 dark:text-slate-300"> { client.email } </p>  
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-5 px-3">
            <div className="flex gap-2"> <p className="text-slate-700 dark:text-slate-300">Компания:</p> <p className="font-semibold text-slate-900 dark:text-slate-200">{ client.company }</p> </div>
          </div>
          
          <div className="mt-5 h-0.5 w-full bg-slate-100 dark:bg-slate-600 rounded-lg" />

          <p className="px-3 pt-5 text-slate-700 dark:text-slate-300">
            { faker.lorem.paragraphs() }
          </p>

          <div className="mt-5 h-0.5 w-full bg-slate-100 dark:bg-slate-600 rounded-lg" />
          
          <div className="flex flex-col gap-2 mt-5 px-3">
            <div className="flex gap-2"> <p className="text-slate-700 dark:text-slate-300">Телефон:</p> <p className="font-semibold text-slate-900 dark:text-slate-200">{ client.phone }</p> </div>
            <div className="flex gap-2"> <p className="text-slate-700 dark:text-slate-300">Дата рождения:</p> <p className="font-semibold text-slate-900 dark:text-slate-200"> { formatDate(client.birth) } </p> </div>
            <div className="flex gap-2"> <p className="text-slate-700 dark:text-slate-300">Дата регистрации:</p> <p className="font-semibold text-slate-900 dark:text-slate-200">{ formatDate(client.register) }</p> </div>
          </div>
        
          
        </div>
      ): null): null}
      
    </div>
  )
}
