export interface JsonResponse {
    query: string
    status: string
    country: string
    countryCode: string
    region: string
    regionName: string
    city: string
    zip: string
    lat: number
    lon: number
    timezone: string
    isp: string
    org: string
    as: string
    message?: string
}

export interface IpData {
    ip: string
    country: string
    countryCode: string
    region: string
    regionName: string
    city: string
    zip: string
    lat: number
    lon: number
    timezone: string
    isp: string
    org: string
    addedAt: Date
}

export interface AddIpResult { 
    ok: boolean, 
    error?: string 
}