export default function clientLoading(): JSX.Element {
    return (
    <div className="cursor-pointer border border-slate-200 shadow rounded-md p-4 px-5 w-full dark:bg-slate-700 dark:border-transparent">
        <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                </div>
                <div className="h-2 bg-slate-500 rounded"></div>
              </div>
            </div>
        </div>
      </div>
    )
}