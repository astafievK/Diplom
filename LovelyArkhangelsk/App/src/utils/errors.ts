import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

const isErrorFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
    return (error as FetchBaseQueryError).data !== undefined;
}

export const getMessageFromError = ({ error }: { error: FetchBaseQueryError | SerializedError }) => {
    if(isErrorFetchBaseQueryError(error)){
        const { data } = error
        if(typeof data === 'object' && 'message' in data!){
            return data.message
        }
    }
}
