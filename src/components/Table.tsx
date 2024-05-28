import { useState } from "react";
import { IpData } from "../data.d";
import { TableDetails } from "./TableDetails";

interface Props {
    ips: IpData[]
    removeIp: (ip: string) => void
}

export function Table({ ips, removeIp }: Props) {
    const [ipSelected, setIpSelected] = useState<string>("")

    const updateIpSelected = (ip: string) => {
        if (ipSelected === ip) {
            setIpSelected("")
        } else {
            setIpSelected(ip)
        }
    }

    return (
        <table className="table-fixed w-full">
            <thead>
                <tr className="rounded font-bold text-white bg-black">
                    <th className="py-4">IP</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Added At</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody className="text-center bg-grey">
                {
                    ips && ips.length > 0 ? ips.map((ipData) => (
                        <>
                        <tr key={ipData.ip} className="border hover:bg-slate-200 hover:cursor-pointer" title="Show details" onClick={() => updateIpSelected(ipData.ip)}>
                            <td className="py-4 font-semibold">{ipData.ip}</td>
                            <td>{ipData.country}</td>
                            <td>{ipData.city}</td>
                            <td>{ipData.addedAt.toLocaleString()}</td>
                            <td><button onClick={() => removeIp(ipData.ip)} className="border border-red-500 text-red-500 px-4 py-1 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white">REMOVE</button></td>
                        </tr>
                        {
                            ipSelected === ipData.ip && <tr><td colSpan={5}><TableDetails ipData={ipData} /></td></tr>
                        }
                        </>
                    )) : <tr className="border-b">
                            <td className="py-4 font-bold text-center text-xl w-full" colSpan={5}>No IPs added yet.</td>
                        </tr>
                }
            </tbody>
        </table>
    )
}