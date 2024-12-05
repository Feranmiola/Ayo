/* eslint-disable */

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';


export const UseDeleteArticle = (authToken: string, id: string) => {
    const deleteArticleMutation: UseMutationResult<AxiosResponse<any>, Error, any> = useMutation({
        mutationFn: (data: any) => {
            // Log the data before sending the request
            console.log('Data sent to API:', data);
            return axios.patch<any>(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/articles/${id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );
        },
    });

    return {
        deleteArticle: deleteArticleMutation.mutate,
        isPending: deleteArticleMutation.isPending,
        data: deleteArticleMutation.data?.data,
        error: deleteArticleMutation.error,
    };
};
