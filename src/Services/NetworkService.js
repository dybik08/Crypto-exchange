import axios from 'axios';
import API from '../Constants/API';

const pairDataKeys = ['lastPrice', 'priceChange', 'priceChangePercent', 'highPrice', 'lowPrice', 'volume'];

export class NetworkService {
    static fetchPairData(pair, callback) {
        const url = API.endpoints.ticker(pair);
        axios.get(url).then(res => {
            document.title = `${res.data.symbol} - ${parseFloat(res.data.lastPrice).toFixed(3)}`;
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

    static fetchLastPairTrades(pair, callback){
        const url = API.endpoints.lastTrades(pair);

        axios.get(url).then(res => {
            callback(res.data);
        });
    }
}
