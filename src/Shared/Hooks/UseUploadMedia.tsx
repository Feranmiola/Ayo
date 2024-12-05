/* eslint-disable */
// @ts-nocheck
export const uploadFile = async (
    file: File,
    auth: { token: string }
): Promise<{ name: string; url: string } | null> => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/media/upload-file`;
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return {
            name: data.fileName,
            url: data.url,
        };
    } catch (error) {
        console.log(error)
        console.error('Upload failed:', error);
        return null;
    }
};


export const uf = uploadFile;
