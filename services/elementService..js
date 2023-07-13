import axios from 'axios';
import config from '../config';
import BaseService from './baseService';

class ElementService extends BaseService {    
    constructor(apiUrl) {
        super('elements');
    }

    async create(parentId, elementTypeId, title, content) {
        const newElement = {
            parent_id: parentId,
            element_type_id: elementTypeId,
            title,
            content
        }

        try {
            const createdElement = await this.client.post(`/`, newElement);

            return createdElement;
        } catch (error) {
            throw this.buildServiceError(error);
        }
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