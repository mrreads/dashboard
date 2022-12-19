import { IClient } from "@/pages/api/clients"

interface IProps {
    client: IClient,
    selected: (id: string | null) => void
}

export default function Client({ client, selected }: IProps): JSX.Element {
    const { id, name, email } = client;
    
    return (
    <div onClick={() => selected(id)}  className="flex gap-5 justify-between cursor-pointer border border-slate-200 shadow rounded-md p-4 px-5 w-full dark:bg-slate-700 dark:border-transparent" key={client.id}>
        <p className="text-slate-900 font-bold dark:text-slate-200"> { name }</p>
        <p className="text-slate-700 dark:text-slate-300"> { email }</p>
    </div>
    )
}