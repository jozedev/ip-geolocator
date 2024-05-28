import { IpData, JsonResponse } from "../data.d";

const ENDPOINT = "http://ip-api.com/json/"

export function getIpData(ip? : string) : Promise<IpData> {
    return fetch(ENDPOINT + (ip ?? ""))
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.statusText)
            } else {
                return response.json() as Promise<JsonResponse>
            }            
        })
        .then((jsonResponse) => {
            if(jsonResponse.status !== "success") {
                throw new Error(jsonResponse.message)
            }

            console.log("nope")
            return {
                ip: jsonResponse.query,
                country: jsonResponse.country,
                countryCode: jsonResponse.countryCode,
                region: jsonResponse.region,
                regionName: jsonResponse.regionName,
                city: jsonResponse.city,
                zip: jsonResponse.zip,
                lat: jsonResponse.lat,
                lon: jsonResponse.lon,
                timezone: jsonResponse.timezone,
                isp: jsonResponse.isp,
                org: jsonResponse.org,
                addedAt: new Date()
            } as IpData})
}