import Video from "@/model/Video"
import JsonTool from "./tool/JsonTool"
import ConstantTool from "./tool/ConstantTool";

export default class YouTubeService {
    static async search (component: Vue, searchQuery: string, videos: [Video]) {
        
        // @ts-ignore
        component.loading = true

        try {
            const response = await component.axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: "snippet",
                    maxResults: 5,
                    q: searchQuery,
                    type: "video",
                    key: ConstantTool.YOUTUBE_API_KEY
                }
            })
            let list = JsonTool.jsonConvert.deserializeArray(response.data.items, Video)
            videos.splice(0, videos.length)
            list.forEach(v => videos.push(v))
            console.log(videos)
            // @ts-ignore
            component.loading = false
            // @ts-ignore
            component.showList = true
        } catch(error) {
            console.log(error)
            // @ts-ignore
            component.loading = false
            // @ts-ignore
            component.showList = false
        }
    }
}

let bruh: any = {
    "kind": "youtube#searchListResponse",
    "etag": "cnVdI78muYGfuSNbHnJcE73e-VY",
    "nextPageToken": "CAEQAA",
    "regionCode": "VE",
    "pageInfo": {
        "totalResults": 977585,
        "resultsPerPage": 1
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "Y1kpA-DQvlEhm7kLUMkDMnaL8s0",
            "id": {
                "kind": "youtube#video",
                "videoId": "pTCwwb9DQ2U"
            },
            "snippet": {
                "publishedAt": "2020-11-28T21:46:42Z",
                "channelId": "UCtRQid0s3Tj1lVB5tbGOb6A",
                "title": "Volví a jugar TALKING OBAMA y me secuestraron xddd",
                "description": "El juego de este video es TALKING OBAMA Subí este video cuando tenía 825.949 xamaks.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/pTCwwb9DQ2U/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/pTCwwb9DQ2U/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/pTCwwb9DQ2U/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AlecchiMan",
                "liveBroadcastContent": "none",
                "publishTime": "2020-11-28T21:46:42Z"
            }
        }
    ]
}