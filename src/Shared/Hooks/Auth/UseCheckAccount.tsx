/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type CheckAccountData = {
    email: string;
};

export const useCheckAccount = () => {
    const checkAccountMutation: UseMutationResult<AxiosResponse<any>, Error, CheckAccountData> = useMutation({
        mutationFn: (data: CheckAccountData) =>
            axios.post<any>(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/checkAccount`, data),
    });

    return {
        checkAccount: checkAccountMutation.mutate,
        isLoading: checkAccountMutation.isPending,
        data: checkAccountMutation.data?.data,
        error: checkAccountMutation.error,
    };
};