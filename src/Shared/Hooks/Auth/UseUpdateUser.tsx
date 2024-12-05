/* eslint-disable */
// @ts-nocheck
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type UserUpdateData = {
    email: string;
    name: string;
    first_name: string;
    last_name: string;
    business_name: string;
    phone_number: string;
    other_names: string;
    gender: string;
    occupation: string;
    two_factor: boolean;
    is_temp_blocked: boolean;
    middle_name: string;
    is_2fa_enabled: boolean;
    profile_image_url: string;
};

export const UseUpdateUser = (authToken: string, ID: string) => {
    const userUpdateMutation: UseMutationResult<AxiosResponse<any>, Error, UserUpdateData> = useMutation({
        mutationFn: (data: UserUpdateData) => {
            console.log("Data being used for user update:", data); // Log the data
            return axios.put<any>(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${ID}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );
        },
    });

    return {
        updateUser: userUpdateMutation.mutate,
        isPending: userUpdateMutation.isPending,
        data: userUpdateMutation.data?.data,
        error: userUpdateMutation.error,
    };
};
