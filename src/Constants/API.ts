const baseUrl = 'https://api.binance.com/api/v3';

const returnTickerUrlForSelectedPair = (pair: string): string => `${baseUrl}/ticker/24hr?symbol=${pair}`;
const returnDepthUrlForSelectedPair = (pair: string): string => `${baseUrl}/depth?symbol=${pair}&limit=10`;

export default {
    endpoints: {
        ticker: returnTickerUrlForSelectedPair,
        depth: returnDepthUrlForSelectedPair,
    },
};
