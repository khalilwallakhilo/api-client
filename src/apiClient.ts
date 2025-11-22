import axios from 'axios';
import { AxiosError } from 'axios';
import { Post, User } from './types';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // URL for JSONPlaceholder API

const apiClient = axios.create({ // Creating an axios instance with default settings
    baseURL: BASE_URL,
    timeout: 5000, // 5 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function fetchPosts(): Promise<Post[]> { // Function to fetch posts and async for cleaner code
    try {
        const response = await apiClient.get<Post[]>('/posts'); // Generic type for response data
        return response.data; // Returning array of posts
    } catch (error) {
        handleApiError(error, 'fetching users'); // Returns empty array on error
        throw error;
    }
};

export async function fetchPostById(id: number): Promise<Post | null> { // Function to fetch posts by ID
    try {
        const response = await apiClient.get<Post>(`/posts/${id}`);
        return response.data; // Returning the post data
    } catch (error) {
        handleApiError(error, `fetching posts for user ID ${id}`);
        return null;
    }
};

export async function fetchUsers(): Promise<User[]> { // Function to fetch users
    try {
        const response = await apiClient.get<User[]>('/users');
        return response.data; // Returning array of users
    } catch (error) {
        handleApiError(error, 'fetching users');
        return [];
    }
}

export async function fetchUserById(id: number): Promise<User | null> { // Function to fetch users
    try {
        const response = await apiClient.get<User>(`/users/${id}`);
        return response.data; // Returning the user data
    } catch (error) {
        handleApiError(error, 'fetching user by ID');
        return null; // Returns null on error
    }
}

function handleApiError(error: unknown, context: string): void {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
            // Server responded with error status
            console.error(`❌ Error ${context}: Server returned ${axiosError.response.status}`);
        } else if (axiosError.request) {
            // Request was made but no response received
            console.error(`❌ Error ${context}: No response from server`);
        } else {
            // Something else went wrong
            console.error(`❌ Error ${context}: ${axiosError.message}`);
        }
    } else {
        // Non-axios error
        console.error(`❌ Error ${context}:`, error);
    }
}