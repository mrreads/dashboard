import { useEffect, useState } from "react";
import { useGetAllClientsQuery } from "@/services/clients"
import { IClient } from "@/pages/api/clients";

export default function Clients(): JSX.Element {
  const { data, error, isLoading } = useGetAllClientsQuery();

  return (
    <div className="flex flex-col gap-5 justify-start">

    { isLoading ?
        Array(15).fill(true).map((_, i) => (
          <div className="cursor-pointer border border-slate-200 shadow rounded-md p-4 px-5 max-w-sm w-full dark:bg-slate-700 dark:border-transparent" key={i}>
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
        ))
      :
      data?.map((client: IClient) => (
        <div className="cursor-pointer border border-slate-200 shadow rounded-md p-4 px-5 max-w-sm w-full dark:bg-slate-700 dark:border-transparent" key={client.id}>
          <p className="text-slate-900 font-bold dark:text-slate-200"> { client.name }</p>
          <p className="text-slate-700 dark:text-slate-300"> { client.email }</p>
        </div>
      ))
    }

    </div>
  )
}
