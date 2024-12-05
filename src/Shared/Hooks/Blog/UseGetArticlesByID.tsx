/* eslint-disable */
// @ts-nocheck
import axios, { AxiosResponse } from 'axios';

export const getArticleByID = async (id: string): Promise<AxiosResponse<any> | 'Failed'> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/articles/${id}`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response;
    } catch (error) {
        console.log(error);
        return 'Failed';
    }
};
