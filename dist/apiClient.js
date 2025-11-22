"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPosts = fetchPosts;
exports.fetchPostById = fetchPostById;
exports.fetchUsers = fetchUsers;
exports.fetchUserById = fetchUserById;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = 'https://jsonplaceholder.typicode.com'; // URL for JSONPlaceholder API
const apiClient = axios_1.default.create({
    baseURL: BASE_URL,
    timeout: 5000, // 5 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    },
});
async function fetchPosts() {
    try {
        const response = await apiClient.get('/posts'); // Generic type for response data
        return response.data; // Returning array of posts
    }
    catch (error) {
        handleApiError(error, 'fetching users'); // Returns empty array on error
        throw error;
    }
}
;
async function fetchPostById(id) {
    try {
        const response = await apiClient.get(`/posts/${id}`);
        return response.data; // Returning the post data
    }
    catch (error) {
        handleApiError(error, `fetching posts for user ID ${id}`);
        return null;
    }
}
;
async function fetchUsers() {
    try {
        const response = await apiClient.get('/users');
        return response.data; // Returning array of users
    }
    catch (error) {
        handleApiError(error, 'fetching users');
        return [];
    }
}
async function fetchUserById(id) {
    try {
        const response = await apiClient.get(`/users/${id}`);
        return response.data; // Returning the user data
    }
    catch (error) {
        handleApiError(error, 'fetching user by ID');
        return null; // Returns null on error
    }
}
function handleApiError(error, context) {
    if (axios_1.default.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError.response) {
            // Server responded with error status
            console.error(`❌ Error ${context}: Server returned ${axiosError.response.status}`);
        }
        else if (axiosError.request) {
            // Request was made but no response received
            console.error(`❌ Error ${context}: No response from server`);
        }
        else {
            // Something else went wrong
            console.error(`❌ Error ${context}: ${axiosError.message}`);
        }
    }
    else {
        // Non-axios error
        console.error(`❌ Error ${context}:`, error);
    }
}
