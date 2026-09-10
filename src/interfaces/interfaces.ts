export interface Product {
    id: number;
    title: string;
    description?: string;
    price: number;
    category: string;
    image: string;
    rating: number
}

export interface Category {
    id: number;
    name: string;
}

export interface User {
    id: number,
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user'
}

