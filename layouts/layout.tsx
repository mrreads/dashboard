import Navigation from '@/components/navigation';
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import { useTheme } from "next-themes";
import { ToastContainer } from 'react-toastify';
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
  { 'title': 'Добавить клиента', 'path': '/add', 'icon': 'users.svg'},
]

export default function Layout({ children }: IProps) {
  const router: NextRouter = useRouter();
  const currentRoute: string = router.pathname;
  const title: string = (routesList?.find(route => route?.path == currentRoute) as IRoute)?.title ?? "Загрузка";
  
  const {systemTheme , theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    (currentTheme ==="dark") ? setTheme('light') : setTheme('dark');
  }

  return (
    <div className="flex min-h-full">

      <Head>
        <title>{title}</title>
      </Head>

      <div className="bg-slate-800 min-w-max">
        <div className="sticky top-0 flex flex-col py-5 pt-0 gap-3 h-screen">
          
          <div className="h-12 px-5 py-2 pt-2.5 border-b-2 border-slate-700">
            <h1 className="text-slate-400 text-lg font-semibold text-right"> DASHBOARD </h1>
          </div>

          <Navigation routes={routesList} current={currentRoute} />

          <label className="mt-auto inline-flex relative items-center cursor-pointer mx-5 mr-10" onClick={toggleTheme}>
            <input type="checkbox" className="sr-only peer" defaultChecked={(currentTheme == 'dark' ? true : false)} />
            <div className="w-11 h-6 bg-slate-500 peer-focus:outline-none peer-focus: dark:peer-focus: rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-100 after:border-slate-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-700 peer-checked:bg-slate-600" />
            <span className="pl-4 text-sm text-slate-100 dark:text-slate-200">ТЁМНАЯ ТЕМА</span>
          </label>

        </div> 
      </div>

      <div className="w-full bg-white dark:bg-slate-600"> 
        <div className="sticky top-0 z-10 flex align-middle h-12 px-5 py-2 pt-2.5 border-b-2 border-slate-800 bg-white dark:bg-slate-800 dark:border-slate-600">
          <h1 className="text-slate-900 uppercase text-lg font-semibold transition-colors dark:text-slate-100">
            { title }
          </h1>
        </div>
        <main className="p-5">
          { children } 
        </main>
      </div>

      <ToastContainer icon={false} theme={currentTheme == 'dark' ? 'dark' : 'light'} position="bottom-right" hideProgressBar={false} newestOnTop={false} closeOnClick />
    </div>
  )
}