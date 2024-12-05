/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type ResendEmailData = {
    email: string;
};

export const UseResendEmail = () => {
    const ResendMutation: UseMutationResult<AxiosResponse<any>, Error, ResendEmailData> = useMutation({
        mutationFn: (data: ResendEmailData) =>
            axios.post<any>(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/resend_otp`, data),
    });

    return {
        resendOTP: ResendMutation.mutate,
        isResendPending: ResendMutation.isPending,
        data: ResendMutation.data?.data,
        error: ResendMutation.error,
    };
};