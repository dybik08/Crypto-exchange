const baseUrl = 'https://api.binance.com/api/v3';

const returnTickerUrlForSelectedPair = (pair: string): string => `${baseUrl}/ticker/24hr?symbol=${pair}`;
const returnDepthUrlForSelectedPair = (pair: string): string => `${baseUrl}/depth?symbol=${pair}&limit=10`;
const returnLastTradesForSelectedPair = (pair: string): string => `${baseUrl}/trades?symbol=${pair}&limit=20`;

export default {
    endpoints: {
        ticker: returnTickerUrlForSelectedPair,
        depth: returnDepthUrlForSelectedPair,
        lastTrades: returnLastTradesForSelectedPair
    },
};
