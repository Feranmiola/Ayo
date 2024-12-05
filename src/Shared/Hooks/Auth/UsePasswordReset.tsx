/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type PasswordResetData = {
    email: string;
};

export const UsePasswordReset = () => {
    const passwordResetMutation: UseMutationResult<AxiosResponse<any>, Error, PasswordResetData> = useMutation({
        mutationFn: (data: PasswordResetData) =>
            axios.post<any>(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/password/reset`, data),
    });

    return {
        resetPassword: passwordResetMutation.mutate,
        isLoading: passwordResetMutation.isPending,
        data: passwordResetMutation.data?.data,
        error: passwordResetMutation.error,
    };
};