import { Any, JsonConvert, JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Thumbnails")
export class Thumbnails {
    @JsonProperty("url", String, true)
    url?: String = undefined
    @JsonProperty("width", Number, true)
    width?: Number = undefined
    @JsonProperty("height", Number, true)
    height?: Number = undefined
}

@JsonObject("Snippet")
class Snippet {
    @JsonProperty("publishedAt", String, true)
    publishedAt?: String = undefined
    @JsonProperty("title", String, true)
    title?: String = undefined
    @JsonProperty("description", String, true)
    description?: String = undefined
    @JsonProperty("channelTitle", String, true)
    channelTitle?: String = undefined
    @JsonProperty("channelId", String, true)
    channelId?: String = undefined
    @JsonProperty("thumbnails", [Thumbnails], true)
    thumbnails?: [Thumbnails] = undefined
}

@JsonObject("Id")
class Id {
    @JsonProperty("kind", String, true)
    kind?: String = undefined
    @JsonProperty("videoId", String, true)
    videoId?: String = undefined
}

@JsonObject("Video")
export default class Video {
    @JsonProperty("snippet", Snippet, true)
    snippet?: Snippet = undefined
    @JsonProperty("id", Id, true)
    id?: Id = undefined
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