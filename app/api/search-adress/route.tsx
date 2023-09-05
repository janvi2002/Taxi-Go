import { NextResponse } from "next/server";
const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest";
export async function GET(request:any) {
    const {searchParams} = new URL(request.url)

    const searchText = searchParams.get('q')
    const res=await fetch(BASE_URL+'?q='+searchText+'&language=en&country=in&limit=6&session_token=0f66aaa1-98ef-4261-88a5-fda7bdc08b71'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
    {
        headers:{
            "Content-Type": "application/json"
        }
    })

    const searchResult=await res.json();
    return NextResponse.json(searchResult)
    
}