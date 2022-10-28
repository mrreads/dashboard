import IClient from "@/interfaces/IClient";
import './index.scss';

type Props = {
    client: IClient,
}

export default function Client({ client }: Props): JSX.Element {
    return (
        <div className='client' key={client.id}>
            <p className="client__text"> { client.firstName } { client.lastName }<span>, приносит в месяц </span> <span className="client__cash">{ client.monthCash }</span></p>
            <p className="client__date"> <span>Числится у вас с</span> { new Date(client.dateJoin).toISOString().split('T')[0] } </p>
        </div>
    )
}