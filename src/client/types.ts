export type APIResponse<T> = {
    results: T;
    data: T;
    status: ResponseStatus;
}

export type User = {
    name: {
        title: string;
        first: string;
        last: string;
    }
}

export type SelectUsers<T> = {
    label: string;
    value: T;
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