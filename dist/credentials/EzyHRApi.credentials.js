"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EzyHRApi = void 0;
class EzyHRApi {
    constructor() {
        this.name = "ezyHRApi";
        this.displayName = "EzyHR API";
        this.documentationUrl = "https://api.ezyhr.com/docs";
        this.icon = "file:ezyhr.svg";
        this.properties = [
            {
                displayName: "Base URL",
                name: "baseUrl",
                type: "string",
                default: "https://api.ezyhr.com/v1",
                required: true,
                description: "The base URL of your EzyHR API instance",
            },
            {
                displayName: "API Key",
                name: "apiKey",
                type: "string",
                typeOptions: {
                    password: true,
                },
                default: "",
                required: true,
                description: "Your EzyHR API Key from the Integration section",
            },
            {
                displayName: "Secret Key",
                name: "secretKey",
                type: "string",
                typeOptions: {
                    password: true,
                },
                default: "",
                required: true,
                description: "Your EzyHR Secret Key from the Integration section",
            },
        ];
        this.authenticate = {
            type: "generic",
            properties: {
                headers: {
                    "X-API-Key": "={{$credentials.apiKey}}",
                    "X-Secret-Key": "={{$credentials.secretKey}}",
                },
            },
        };
        this.test = {
            request: {
                baseURL: "={{$credentials.baseUrl}}",
                url: "/user/profile",
                method: "GET",
            },
        };
    }
}
exports.EzyHRApi = EzyHRApi;
//# sourceMappingURL=EzyHRApi.credentials.js.map