import axios from 'axios';
import config from '../config';
import BaseService from './baseService';

class ElementService extends BaseService {    
    constructor(apiUrl) {
        super('elements');
    }

    async getByParent(parentId) {
        try {
            const result = await this.client.get(`/${parentId}/elements`);

            return result;
        } catch (error) {
            throw this.buildServiceError(error);
        }
    }
};

export default new ElementService(config.apiUrl);