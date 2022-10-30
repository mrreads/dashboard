import { useAppSelector } from '@/hooks/hooks';
import Client from '@/components/Client';

export default function Clients() {
    
    const clients = useAppSelector(state => state.clients)

    return (
        <div className="clients">
            <h1 className="title"> Клиенты </h1>
            { clients.map(client => <Client key={client.id} client={client} />)}
        </div>
    )
}