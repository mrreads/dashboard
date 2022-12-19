import { useEffect, useState } from "react";

import Search from "@/components/search";
import ClientLoading from "@/components/clientLoading";
import Client from "@/components/client";
import ClientDetail from "@/components/clientDetail";

import { useGetAllClientsQuery } from "@/services/clients"
import { IClient } from "@/interfaces/IClient.type";

export default function Clients(): JSX.Element {
  const { data, error, isLoading } = useGetAllClientsQuery();

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: { target: any }) => setSearchQuery(e.target.value);
  
  const [filtered, setFiltered] = useState<IClient[] | undefined>([]);
  useEffect(() => {
    if (searchQuery.trim() != '')
      setFiltered(data?.items?.filter(e => !(e.name.trim().toLowerCase().indexOf(searchQuery.trim().toLowerCase()) < 0 && e.email.trim().toLowerCase().indexOf(searchQuery.trim().toLowerCase()) < 0)));
    else
      setFiltered(data?.items);
  }, [data, searchQuery]);

  const [selected, setSelected] = useState<string | null>(null);
  
  return (
    <div className="flex gap-5 w-full">
      <div className="flex flex-col gap-5 justify-start max-w-xl w-full">

      { isLoading ?
        <>
          <Search text="Поиск" placeholder="ФИО или Email" additional="cursor-no-drop" disabled />
          { Array(15).fill(true).map((_, i) => <ClientLoading key={i} />)}
        </>
        :
        <>
          <Search id='1' handle={handleSearch} text="Поиск" placeholder="ФИО или Email" />
          { filtered?.map((client: IClient) => <Client client={client} selected={setSelected} key={client.id} />)}
        </>
      }
      </div>

      { (selected != null) ? data?.items?.map(client => (client.id == selected) ? <ClientDetail client={client} selected={setSelected} key={client.id} />: null): null}
      
    </div>
  )
}
