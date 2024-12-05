/* eslint-disable */
// @ts-nocheck
// hooks/useRegister.ts
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';


type RegisterData = {
    email: string;
    last_name: string;
    first_name: string;
    password: string;
};



export const useRegister = () => {
    const registerUser: UseMutationResult<AxiosResponse<any>, Error, RegisterData> = useMutation({
        mutationFn: (data: RegisterData) =>
            axios.post<any>(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`, data),
    });

    return {
        register: registerUser.mutate,
        isLoading: registerUser.isPending,
        data: registerUser.data?.data,
        error: registerUser.error,
    };
};
