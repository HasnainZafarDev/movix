 import axios from "axios";

 const BASE_URL= "https://api.themoviedb.org/3";
 const TMDB_TOKEN= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjk0MmJmNmJkMzg2NDNlOGM4YjFlMDNhZWZlMzg3YyIsInN1YiI6IjY0YjM1N2M2MjNkMjc4MDE0NTg0ZTU4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbZsnygJ9cHe-hqq94FOV01KEQ6QRkY35Rvpk-jKsfI";
 const headers = {
    Authorization:"bearer " + TMDB_TOKEN,
 };

 export const fetchDataFromApi = async(url,params) => {
    try{
        const {data}=await axios.get(BASE_URL+url,{
            headers,
            params
        })
        return data;
    }catch (err) {
        return err;
    }
 }