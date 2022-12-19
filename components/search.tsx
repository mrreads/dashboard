interface IProps {
    id?: string,
    text: string,
    handle?: (e: { target: any }) => void,
    placeholder: string | undefined
    disabled?: boolean | undefined,
    required?: boolean | undefined,
    additional?: string
}

export default function Search({ id = '', text, handle, placeholder, disabled, additional, required }: IProps) {
    return (
    <div className="mb-1 w-full">
        <label htmlFor={`search${id.trim()}`} className="block mb-1 text-sb font-medium text-slate-900 w-full dark:text-slate-200"> {text}:</label>
        <input onChange={handle} required={required} disabled={disabled} placeholder={placeholder} type="text" id={`search${id.trim()}`} className={`${additional} bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} />
    </div>
    )
}