/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type AddNewArticleData = {
    title: string;
    description: string;
    body: string;
    published: boolean;
    tags: string;
    // imageUrl: string;
};

export const UseAddNewArticle = (authToken: string) => {
    const addNewArticleMutation: UseMutationResult<AxiosResponse<any>, Error, AddNewArticleData> = useMutation({
        mutationFn: (data: AddNewArticleData) => {
            // Log the data before sending the request
            console.log('Data sent to API:', data);
            return axios.post<any>(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/articles`,
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
        addNewArticle: addNewArticleMutation.mutate,
        isPending: addNewArticleMutation.isPending,
        data: addNewArticleMutation.data?.data,
        error: addNewArticleMutation.error,
    };
};
