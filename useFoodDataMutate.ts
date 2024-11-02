import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios, {AxiosPromise, post} from "axios"
import {FoodData} from "../interface/FoodData";

const API_URL = 'http://localhost:5173/';

const postData  = async (data: FoodData): AxiosPromise <any> => {
    const response = axios.post(API_URL + '/food', data); // colocar na url, a url q tu colocou no back
    return response;
}

export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate{
    }

}