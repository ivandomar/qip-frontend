import config from '../config';
import axios from 'axios';

class BaseService {    
    constructor(baseSegment) {
        this.client = axios.create({
            baseURL: `${config.apiUrl}/${baseSegment}`,
        });
    }

    buildServiceError({response: { data: { message } }}) {
        return new Error(message);
    }
};

export default BaseService;
