import axios from "axios";
import { Occupations } from "../CommonUrls";




export const axiosGetReq=async()=>{
    const response= await axios.get(Occupations) 
    return response;

}; 


 

