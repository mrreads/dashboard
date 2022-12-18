import Link from "next/link";
import Image from "next/image";

import { IRoute } from "@/layouts/layout";
interface IProps {
    "routes": readonly IRoute[],
    "current": string
}
export default function Navigation({ routes, current }: IProps) {
    return (
    <>
    {
        routes.map(route => (
            <Link href={route.path} className={`flex gap-5 align-middle px-5 py-3 transition-colors ${current == route.path ? 'bg-slate-700' : ''} hover:bg-slate-700`} key={route.path}>
                <Image className="opacity-90 dark:opacity-80" src={`/images/${route.icon}`} width={25} height={25} alt={route.title} />
                <p className="text-slate-100 dark:text-slate-200"> { route.title } </p>
            </Link>
        ))
    }
    </>
    )
}