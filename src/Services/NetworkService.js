import axios from 'axios';
import API from '../Constants/API';

const pairDataKeys = ['lastPrice', 'priceChange', 'priceChangePercent', 'highPrice', 'lowPrice', 'volume'];

export class NetworkService {
    static fetchPairData(pair, callback) {
        const url = API.endpoints.ticker(pair);
        axios.get(url).then(res => {
            const pairData = Object.entries(res.data).reduce((prev, [key, value]) => {
                if (pairDataKeys.includes(key)) {
                    return {
                        ...prev,
                        [key]: parseFloat(value).toFixed(3),
                    };
                }

                return prev;
            }, {});

            callback(pairData);
        });
    }

    static fetchPairOverbook(pair, callback) {
        const url = API.endpoints.depth(pair);

        axios.get(url).then(res => {
            callback(res.data);
        });
    }
}
