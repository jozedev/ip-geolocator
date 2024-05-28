import { IpData } from "../data.d";

export function TableDetails({ ipData }: { ipData: IpData }) {
    return (
        <div className="w-full border flex flex-row flex-wrap text-left px-16 py-8 gap-y-2">
            <p className="w-1/2"><b>IP:</b> {ipData.ip}</p>
            <p className="w-1/2"><b>Country:</b> {ipData.country}</p>
            <p className="w-1/2"><b>Region:</b> {ipData.region}</p>
            <p className="w-1/2"><b>City:</b> {ipData.city}</p>
            <p className="w-1/2"><b>ISP:</b> {ipData.isp}</p>
            <p className="w-1/2"><b>Org:</b> {ipData.org}</p>
            <p className="w-1/2"><b>Lat:</b> {ipData.lat}</p>
            <p className="w-1/2"><b>Lon:</b> {ipData.lon}</p>
            <p className="w-1/2"><b>Timezone:</b> {ipData.timezone}</p>
        </div>
    )
}