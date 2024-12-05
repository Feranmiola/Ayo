/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type EditArticleData = {
    title: string;
    description: string;
    body: string;
    published: boolean;
    tags: string;
    // imageUrl: string;
};

export const UseEditArticle = (authToken: string, id: string) => {
    const editArticleMutation: UseMutationResult<AxiosResponse<any>, Error, EditArticleData> = useMutation({
        mutationFn: (data: EditArticleData) => {
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
        editArticle: editArticleMutation.mutate,
        isPending: editArticleMutation.isPending,
        data: editArticleMutation.data?.data,
        error: editArticleMutation.error,
    };
};
