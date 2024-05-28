import { useEffect, useState } from "react";
import { AddIpResult, IpData } from "../data.d";
import { getIpData } from "../services/ips";

export function useIpsData() { 

    const [ips, setIps] = useState<IpData[]>(JSON.parse(localStorage.getItem("ips") ?? "[]"))
    const [loading, setLoading] = useState(false)

    const removeIp = (ip: string) => {
        setIps([...ips].filter(ipData => ipData.ip !== ip))
    }

    const addIp = (ip?: string) : Promise<AddIpResult> => {
        setLoading(true)
        return getIpData(ip).then((ipData) => {
            if(ips.find(stored => ipData.ip === stored.ip)) {
                setLoading(false)
                return Promise.resolve({ ok: false, error: "IP already added" })
            }

            setIps([...ips, ipData])
            setLoading(false)
            return { ok: true }
        }).catch((error: Error) => {
            setLoading(false)
            return { ok: false, error: error.message }
        })
    }

    useEffect(() => {
        localStorage.setItem("ips", JSON.stringify(ips))
    }, [ips])
    
    return { ips, addIp, removeIp, loading }
}