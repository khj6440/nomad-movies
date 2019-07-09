//fetch 대신에 axios 사용
import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params :{
        api_key:"e91e0123630814f9cb26d9b643cefce1",
        language: "ko-KR"
    }
});


export const movies = {
    getMovie:id =>api.get(`movie/${id}`,{
        params:{
            append_to_response : "videos"
        }
    }),
    getNowPlaying:()=> api.get("movie/now_playing"),
    getUpcoming : () =>api.get("movie/upcoming"),
    getPopular : ()=>api.get("movie/popular"),
    searchMovies:term =>api.get("search/movie",{
        params:{
            query : encodeURIComponent(term)
        }
    })
};

export const tv={
    getAiringThisWeek : () =>api.get("tv/on_the_air"),
    getPopular : ()=>api.get("tv/popular"),
    getAiringToday : ()=>api.get("tv/airing_today"),
    getShow:(id) =>api.get(`tv/${id}`,{
        params:{
            append_to_response : "videos"
        }
    }),
    searchTv:(term) =>api.get("search/tv",{
        params:{
            query : encodeURIComponent(term)
        }
    })
    
};

// api.get("tv/popular");//상대 경로를 써줘야함
