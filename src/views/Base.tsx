import StatisticCard from "@/components/StatisticCard";

export default function Base() {
    return (
        <div className="base">
            <h1 className="title"> Добро пожаловать! </h1>

            <div className="base__statistic-card">
                <StatisticCard number={143.233} icon='coin.svg' text="Ваш баланс" wallet={true} />
                <StatisticCard number={7} icon='client.svg' text="Ваши клиенты" />
            </div>

        </div>
    )
}