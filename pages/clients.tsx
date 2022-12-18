import { SetStateAction, useEffect, useState } from "react";
import { useGetAllClientsQuery } from "@/services/clients"
import { IClient } from "@/pages/api/clients";

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

  return (
    <div className="flex flex-col gap-5 justify-start">

    { isLoading ?
    
      <>
        <div className="mb-1 max-w-md">
          <label htmlFor="search" className="block mb-1 text-sb font-medium text-slate-900 max-w-md dark:text-slate-200">Поиск</label>
          <input type="text" id="search" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-disabled dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ФИО или Email" disabled required />
        </div>

        { Array(15).fill(true).map((_, i) => (
            <div className="cursor-pointer border border-slate-200 shadow rounded-md p-4 px-5 max-w-md w-full dark:bg-slate-700 dark:border-transparent" key={i}>
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
        <div className="mb-1 max-w-md">
          <label htmlFor="search" className="block mb-1 text-sb font-medium text-slate-900 max-w-md dark:text-slate-200">Поиск:</label>
          <input onChange={handleSearch} type="text" id="search" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ФИО или Email" required />
        </div>

        { filtered?.map((client: IClient) => (
          <div className="cursor-pointer border border-slate-200 shadow rounded-md p-4 px-5 max-w-md w-full dark:bg-slate-700 dark:border-transparent" key={client.id}>
            <p className="text-slate-900 font-bold dark:text-slate-200"> { client.name }</p>
            <p className="text-slate-700 dark:text-slate-300"> { client.email }</p>
          </div>
        ))}
      </>
    }

    </div>
  )
}
