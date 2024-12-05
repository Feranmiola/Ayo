/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type PasswordChangeData = {
    email: string;
    newPassword: string;
};

export const UsePasswordChange = () => {
    const passwordChangeMutation: UseMutationResult<AxiosResponse<any>, Error, PasswordChangeData> = useMutation({
        mutationFn: (data: PasswordChangeData) =>
            axios.post<any>(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/password/change`, data),
    });

    return {
        changePassword: passwordChangeMutation.mutate,
        isLoading: passwordChangeMutation.isPending,
        data: passwordChangeMutation.data?.data,
        error: passwordChangeMutation.error,
    };
};