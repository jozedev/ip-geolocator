import { useState } from "react"
import { AddIpResult } from "../data"

export interface Props {
    addIp: (ip?: string) => Promise<AddIpResult>
}

export function Form({ addIp }: Props) {

    const [error, setError] = useState<string>("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ip = formData.get('ip') as string
        if (ip.trim().length === 0) {
            setError("Please enter an IP address")
            return
        }

        addIp(ip).then((result) => {
            if (!result.ok && result.error) {
                setError(result.error)
            }
        })
        event.currentTarget.reset()
        
    }

    const handleUseMyIp = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addIp().then((result) => {
            if (!result.ok && result.error) {
                setError(result.error)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row justify-center">
            <div>   
                <input onChange={() => setError("")} className="shadow py-2 px-4 mr-4 rounded-l text-lg border rounded-lg outline-grey-200 focus:outline-blue-600" type="text" placeholder="24.48.0.58" name="ip" />
                <p className={`text-red-500 text-xs italic mt-2 ${error ? '' : 'text-opacity-0'}`}>{error ? error : "No error"}</p>
            </div>
            <div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold mr-4">Search IP</button>
                <button onClick={handleUseMyIp} type="button" className="border border-red-500 text-red-500 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-red-500 hover:text-white">Use My IP</button>
            </div>
        </form>
    )
}