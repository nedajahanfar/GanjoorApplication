
import axios, { isAxiosError, AxiosError } from 'axios';

export interface Poet {
  id: number;
  name: string;
}

export async function fetchPoets(): Promise<Poet[]> {
  try {

    const response = await axios.get(
      "https://ganjoor-backend.onrender.com/poets",
      {
        timeout: 5000,
        headers: {
          Accept: "application/json",
        },
      },
    );

    const simplifiedPoets: Poet[] = response.data.map((poet: any) => ({
      id: poet.id,
      name: poet.name,
    }));

    return simplifiedPoets;
  } catch (error) {
    console.error('Ganjoor API Error:', error);

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
