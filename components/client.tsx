import { IClient } from "@/interfaces/IClient.type";

interface IProps {
    client: IClient,
    selected: IClient | null,
    setSelected: (id: IClient | null) => void
}

export default function Client({ client, selected, setSelected }: IProps): JSX.Element {
    const { id, name, email } = client;
    
    return (
    <div onClick={() => setSelected(client)}  className={`flex gap-5 justify-between cursor-pointer border border-slate-200 shadow rounded-md p-4 px-5 w-full bg-slate-200 dark:border-transparent ${selected?.id == id ? 'bg-slate-300 dark:bg-slate-800' : 'bg-slate-100 dark:bg-slate-700'}`} key={client.id}>
        <p className="text-slate-900 font-bold dark:text-slate-200"> { name }</p>
        <p className="text-slate-700 dark:text-slate-300"> { email }</p>
    </div>
    )
}