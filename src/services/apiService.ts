class ApiService {
    private baseUrl: string;
    private defaultHeaders: HeadersInit;

    constructor(baseUrl: string, defaultHeaders?: HeadersInit) {
        this.baseUrl = baseUrl;
        this.defaultHeaders = defaultHeaders || {};
    }

    setHeaders(headers: HeadersInit): void {
        this.defaultHeaders = headers;
    }

    private async fetchResource(resource: string, options: RequestInit): Promise<Response> {
        const response = await fetch(resource, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response;
    }

    async get(endpoint: string, customHeaders?: HeadersInit): Promise<any> {
        const headers = { ...this.defaultHeaders, ...customHeaders };
        try {
            const response = await this.fetchResource(`${this.baseUrl}${endpoint}`, {
                method: 'GET',
                headers: headers
            });
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async post(endpoint: string, data: FormData | any, customHeaders?: HeadersInit): Promise<any> {
        const headers = {
            ...this.defaultHeaders,
            ...customHeaders
        };

        try {
            const response = await this.fetchResource(`${this.baseUrl}${endpoint}`, {
                method: 'POST',
                headers: headers,
                body: data instanceof FormData ? data : JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    }

    async put(endpoint: string, data: FormData | any, customHeaders?: HeadersInit): Promise<any> {
        const headers = {
            ...this.defaultHeaders,
            ...customHeaders
        };

        try {
            const response = await this.fetchResource(`${this.baseUrl}${endpoint}`, {
                method: 'PUT',
                headers: headers,
                body: data instanceof FormData ? data : JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('Error putting data:', error);
            throw error;
        }
    }

    async patch(endpoint: string, data: FormData | any, customHeaders?: HeadersInit): Promise<any> {
        const headers = {
            ...this.defaultHeaders,
            ...customHeaders
        };

        try {
            const response = await this.fetchResource(`${this.baseUrl}${endpoint}`, {
                method: 'PATCH',
                headers: headers,
                body: data instanceof FormData ? data : JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('Error patching data:', error);
            throw error;
        }
    }

    async delete(endpoint: string, customHeaders?: HeadersInit): Promise<any> {
        const headers = { ...this.defaultHeaders, ...customHeaders };
        try {
            const response = await this.fetchResource(`${this.baseUrl}${endpoint}`, {
                method: 'DELETE',
                headers: headers
            });
            return await response.json();
        } catch (error) {
            console.error('Error deleting data:', error);
            throw error;
        }
    }
}

export const api = new ApiService('https://nestjs-fastify-api-01.vercel.app/api/v1', {
    'Authorization': '',
    'Content-Type': 'application/json',
});
