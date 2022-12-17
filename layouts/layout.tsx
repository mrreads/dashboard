import Navigation from '@/components/navigation';
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';

interface IProps {
    'children': React.ReactNode
}

export interface IRoute {
  'title': string,
  'path': string,
  'icon': string  
}

const routesList: Readonly<IRoute[]> = [
  { 'title': 'Главная', 'path': '/', 'icon': 'journal.svg'},
  { 'title': 'Клиенты', 'path': '/clients', 'icon': 'users.svg'},
]

export default function Layout({ children }: IProps) {
  const router: NextRouter = useRouter();
  const currentRoute: string = router.pathname;
  const title: string = (routesList?.find(route => route?.path == currentRoute) as IRoute).title ?? "Загрузка";

  return (
    <div className="flex min-h-full">

      <Head>
        <title>{title}</title>
      </Head>

      <div className="bg-slate-800 w-48">
        <div className="sticky top-0 flex flex-col py-5 pt-0 gap-3">
          
          <div className="h-12 px-5 py-2 pt-2.5 border-b-2 border-slate-700">
            <h1 className="text-slate-400 text-lg font-semibold text-right"> DASHBOARD </h1>
          </div>

          <Navigation routes={routesList} current={currentRoute} />

        </div> 
      </div>

      <div className="w-full"> 
        <div className="sticky top-0 z-10 bg-white flex align-middle h-12 px-5 py-2 pt-2.5 border-b-2 border-slate-800">
          <h1 className="text-slate-800 uppercase text-lg font-semibold">
            { title }
          </h1>
        </div>
        <main className="p-5">
          { children } 
        </main>
      </div>

    </div>
  )
}