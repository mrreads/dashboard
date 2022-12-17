import Link from "next/link";
import Image from "next/image";

import { IRoute } from "@/layouts/layout";
interface IProps {
    "routes": IRoute[],
    "current": string
}
export default function Navigation({ routes, current }: IProps) {
    return (
    <>
    {
        routes.map(route => (
            <Link href={route.path} className={`flex gap-5 align-middle px-5 py-2 transition-colors ${current == route.path ? 'bg-slate-700' : ''} hover:bg-slate-700`} key={route.path}>
                <Image src={`/images/${route.icon}`} width={25} height={25} alt={route.title} />
                <p className="text-white"> { route.title } </p>
            </Link>
        ))
    }
    </>
    )
}