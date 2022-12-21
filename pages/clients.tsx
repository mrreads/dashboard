import { useEffect, useState, useRef } from "react";

import Search from "@/components/search";
import ClientLoading from "@/components/clientLoading";
import Client from "@/components/client";
import ClientDetail from "@/components/clientDetail";

import { useGetAllClientsQuery, useGetFilterClientsQuery } from "@/services/clients"
import { IClient } from "@/interfaces/IClient.type";

export default function Clients(): JSX.Element {
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [clients, setClients] = useState<IClient[]>([]);
  
  const { data: allClients, isLoading: allClientsIsLoading } = useGetAllClientsQuery(currentPage, { refetchOnMountOrArgChange: true });
  const { data: filterClients, isLoading: filterClientsIsLoading } = useGetFilterClientsQuery(filter, { refetchOnMountOrArgChange: true });

  const loadMoreClients = () => setCurrentPage(currentPage + 1)
  const allLoaded = (!allClientsIsLoading) ? (currentPage >= allClients!?.totalPages) ? true : false : true;

  useEffect(() => { if (!allClientsIsLoading) setClients(clients.concat(allClients?.items ?? []))}, [allClientsIsLoading, allClients]);

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: { target: any }) => setSearchQuery(e.target.value);
  
  const [filtered, setFiltered] = useState<IClient[] | undefined>([]);
  useEffect(() => setFilter(searchQuery), [searchQuery]);
  useEffect(() => { if (!filterClientsIsLoading) setFiltered(filterClients?.items ?? []) }, [filterClientsIsLoading, filterClients])
  
  const [selected, setSelected] = useState<IClient | null>(null);

  return (
    <div className="flex gap-5 w-full">
      <div className="flex flex-col gap-5 justify-start max-w-xl w-full">

      { allClientsIsLoading || clients.length < 1 ?
        <>
          <Search text="Поиск" placeholder="ФИО или Email" additional="cursor-no-drop" disabled />
          { Array(allClients?.perPage).fill(true).map((_, i) => <ClientLoading key={i} />)}
        </>
        :
        <>
          <Search id='1' handle={handleSearch} text="Поиск" placeholder="ФИО или Email" />
          { (searchQuery.trim() == '')
            ?
            (clients && clients?.map((client: IClient) => <Client client={client} selected={selected} setSelected={setSelected} key={client.id} />))
            :
            (filtered && filtered?.map((client: IClient) => <Client client={client} selected={selected} setSelected={setSelected} key={client.id} />))
          }
        </>
      }

        { allLoaded || searchQuery.trim() != '' ? null : <button onClick={loadMoreClients} className="max-w-xs bg-slate-500 text-slate-100 py-3 rounded-md hover:bg-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"> Загрузить еще </button>}

      </div>

      { (selected != null) ?  <ClientDetail client={selected} selected={setSelected} /> : null}
      
    </div>
  )
}
