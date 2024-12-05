/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type SocialAuthData = {
    token: string;
    unique_id: string;
    email: string;
    phone: string;
    medium: string;
    id_token: string;
    ref_code: string;
};

export const useSocialAuth = () => {
    const socialAuthMutation: UseMutationResult<AxiosResponse<any>, Error, SocialAuthData> = useMutation({
        mutationFn: (data: SocialAuthData) =>
            axios.post<any>(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/social-register`, data),
    });

    return {
        socialAuth: socialAuthMutation.mutate,
        isLoading: socialAuthMutation.isPending,
        data: socialAuthMutation.data?.data,
        error: socialAuthMutation.error,
    };
};