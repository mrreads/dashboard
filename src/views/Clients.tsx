import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { addClient } from '@/store/clientsSlice';

import Client from '@/components/Client';

export default function Clients() {
    
    const clients = useAppSelector(state => state.clients)
    const dispatch = useAppDispatch();

    return (
        <div className="clients">
            <h1 className="title"> Клиенты </h1>
            { clients.map(client => <Client key={client.id} client={client} />)}
        </div>
    )
}