/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type LoginData = {
    email: string;
    password: string;
};

export const useLogin = () => {
    const loginMutation: UseMutationResult<AxiosResponse<any>, Error, LoginData> = useMutation({
        mutationFn: (data: LoginData) =>
            axios.post<any>(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, data),
    });

    return {
        login: loginMutation.mutate,
        isLoading: loginMutation.isPending,
        data: loginMutation.data?.data,
        error: loginMutation.error,
    };
};