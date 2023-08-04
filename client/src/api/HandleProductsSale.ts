import axiosClient from "@/api/axiosClient";
import {BASE_URL} from "@/constant/appInfo";

class HandleProductsSale {
    static getProductsSale = async (url:string)=>{
        return axiosClient.get(BASE_URL +url)
    }


}


export default HandleProductsSale