import axios, { isAxiosError, AxiosError } from 'axios';
import { logger } from 'firebase-functions';

export interface Poet {
  id: number;
  name: string;
  description: string | null;
  fullUrl: string;
  rootCatId: number;
  nickname: string;
  published: boolean;
  imageUrl: string;
  birthYearInLHijri: number;
  validBirthDate: boolean;
  deathYearInLHijri: number;
  validDeathDate: boolean;
  pinOrder: number;
  birthPlace: string;
  birthPlaceLatitude: number;
  birthPlaceLongitude: number;
  deathPlace: string;
  deathPlaceLatitude: number;
  deathPlaceLongitude: number;
}

export async function fetchPoets(): Promise<Poet[]> {
  try {
    const response = await axios.get<Poet[]>('https://api.ganjoor.net/api/ganjoor/poets', {
      timeout: 5000,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!Array.isArray(response.data)) {
      throw new Error('Invalid API response: Expected array of poets');
    }

    response.data.forEach(poet => {
      if (!poet.id || typeof poet.name !== 'string') {
        throw new Error(`Invalid poet structure: ${JSON.stringify(poet)}`);
      }
    });

    return response.data;
  } catch (error) {
    logger.error('Ganjoor API Error:', error);
    
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.code === 'ECONNABORTED') {
        throw new Error('API request timed out');
      }
      throw new Error(`API request failed: ${axiosError.message}`);
    }
    
    throw error;
  }
}