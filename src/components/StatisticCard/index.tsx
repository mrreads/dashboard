import './index.scss';

type Props = {
    number: number,
    icon: string,
    text: string,
    wallet?: boolean
}

export default function StatisticCard({ number, icon, text, wallet }: Props): JSX.Element {
    return (
    <div className='statistic-card'>
        <img className='statistic-card__icon' src={`/src/assets/icons/${icon}`}/>
        <p className='statistic-card__number'> { wallet ? <span>$</span> : null }{ number } </p>
        <p className='statistic-card__text'> { text} </p>
    </div>)
}