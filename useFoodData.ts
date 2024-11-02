import {useQuery} from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios"
import {FoodData} from "../interface/FoodData";

const API_URL = 'http://localhost:5173/';

const fetchData  = async (): AxiosPromise <footData> => {
    const response = axios.get(API_URL + '/food'); // colocar na url, a url q tu colocou no back
    return response;
}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }

}