import { apiClient } from './apiClient';

export const getDeals = () => apiClient.get(`/deals`);