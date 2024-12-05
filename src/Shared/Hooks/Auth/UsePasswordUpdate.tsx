/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type PasswordUpdateData = {
    email: string;
    oldPassword: string;
    newPassword: string;
};


export const usePasswordUpdate = (authToken: string) => {
    const passwordUpdateMutation: UseMutationResult<AxiosResponse<any>, Error, PasswordUpdateData> = useMutation({
        mutationFn: (data: PasswordUpdateData) =>
            axios.post<any>(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/password/update`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            ),
    });

    return {
        updatePassword: passwordUpdateMutation.mutate,
        isPending: passwordUpdateMutation.isPending,
        data: passwordUpdateMutation.data?.data,
        error: passwordUpdateMutation.error,
    };
};