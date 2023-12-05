export type APIResponse<T> = {
    results: T;
    data: T;
    status: ResponseStatus;
}

enum ResponseStatus {
    Success = "success",
    Error = "error",
}

export type Product = {
    id: number;
    title: string;
    price: number;
}

export type User = {
    name: {
        title: string;
        first: string;
        last: string;
    }
}