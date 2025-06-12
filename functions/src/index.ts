import * as functions from 'firebase-functions';
import { Request, Response } from 'express';
import { fetchPoets } from './ganjoor.services';

export const getPoets = functions.https.onRequest((req: Request, res: Response) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'public, max-age=300' 
  });

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ 
      error: 'Method Not Allowed',
      message: 'Only GET requests are supported'
    });
    return;
  }

   //  Timestamp for potential rate limiting :)
   const timestampMs = Date.now();

   functions.logger.info(`Request from IP: ${req.ip} at ${timestampMs}`);

  (async () => {
    try {
      const poets = await fetchPoets();
      functions.logger.info(`Successfully fetched ${poets.length} poets`);
      res.status(200).json(poets);
    } catch (error: any) {
      functions.logger.error('Failed to fetch poets:', error);
      const statusCode = error.message.includes('timed out') ? 504 : 500;
      res.status(statusCode).json({
        error: 'Failed to fetch poet data',
        message: process.env.NODE_ENV === 'production' 
          ? 'Please try again later' 
          : error.message
      });
    }
  })();
});