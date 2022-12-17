import { useEffect, useState } from "react";
import { useGetAllClientsQuery } from "@/services/clients"
import { IClient } from "@/pages/api/clients";

export default function Clients(): JSX.Element {
  const { data, error, isLoading } = useGetAllClientsQuery();

  return (
    <div className="flex flex-col gap-5 justify-start">

    { isLoading ?
        Array(15).fill(true).map((_, i) => (
          <div className="border border-slate-300 shadow rounded-md p-4 max-w-sm w-full" key={i}>
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-500 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
            </div>
          </div>
        ))
      :
      data?.map((client: IClient) => (
        <div className="border border-slate-300 shadow rounded-md p-4 max-w-sm w-full" key={client.id}>
          <p className="font-bold"> { client.name }</p>
          <p> { client.email }</p>
        </div>
      ))
    }

    </div>
  )
}
