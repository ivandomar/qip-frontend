import axios from 'axios';
import config from '../config';
import BaseService from './baseService';

class ElementService extends BaseService {    
    constructor(apiUrl) {
        super('elements');
    }

    async create(parentId, elementTypeId, title, content) {
        const newElement = {
            parent_id: parentId ? parentId : null,
            element_type_id: elementTypeId,
            title,
            content: content ? content : null,
        };

        try {
            const createdElement = await this.client.post('/', newElement);

            return createdElement;
        } catch (error) {
            throw this.buildServiceError(error);
        }
    }

    async edit(id, title, content) {
        const newData = {
            title,
            content: content ? content : null,
        };

        try {
            const editedElement = await this.client.patch(`/${id}`, newData);

            return editedElement;
        } catch (error) {
            throw this.buildServiceError(error);
        }
    }

    async get(id) {
        try {
            const result = await this.client.get(`/${id}`);

            return result;
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

    async delete(id) {
        try {
            await this.client.delete(`/${id}`);

            return true;
        } catch (error) {
            throw this.buildServiceError(error);
        }
    }
};

export default new ElementService(config.apiUrl);