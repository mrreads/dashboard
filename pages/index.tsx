import { useGetAllClientsQuery } from "@/services/clients"

export default function Home(): JSX.Element {
  const { data: allClients, isLoading: allClientsIsLoading } = useGetAllClientsQuery(0);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        
        <div className="bg-slate-300 shadow p-5 px-8 rounded-lg flex flex-col gap-2 dark:bg-slate-700">
          <p className="text-slate-600 text-2xl dark:text-slate-400"> Количество клиентов </p>
          <p className="text-slate-700 text-5xl font-bold dark:text-slate-100"> { allClientsIsLoading ? '...' : allClients?.totalItems } </p>
        </div>

      </div>

      <div>
        
      </div>
    </div>
  )
}
