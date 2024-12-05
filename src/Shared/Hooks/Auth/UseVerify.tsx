/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type VerifyEmailData = {
    email: string;
    otp: number;
};

export const useVerifyEmail = () => {
    const verifyMutation: UseMutationResult<AxiosResponse<any>, Error, VerifyEmailData> = useMutation({
        mutationFn: (data: VerifyEmailData) =>
            axios.post<any>(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/verifyOtp`, data),
    });

    return {
        verifyOTP: verifyMutation.mutate,
        isLoading: verifyMutation.isPending,
        data: verifyMutation.data?.data,
        error: verifyMutation.error,
    };
};