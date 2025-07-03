"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EzyHRApi = void 0;
class EzyHRApi {
    constructor() {
        this.name = "ezyHRApi";
        this.displayName = "EzyHR API";
        this.documentationUrl = "https://ezyhr.com/docs";
        this.icon = "file:ezyhr.svg";
        this.properties = [
            {
                displayName: "API Base URL",
                name: "baseUrl",
                type: "string",
                default: "https://api.ezyhr.com/v1",
                required: true,
                description: "The base URL for your EzyHR API instance",
            },
            {
                displayName: "Session Token",
                name: "sessionToken",
                type: "string",
                typeOptions: {
                    password: true,
                },
                default: "",
                required: true,
                description: "Your EzyHR session token (JWT) from authentication",
            },
            {
                displayName: "Company Path",
                name: "companyPath",
                type: "string",
                default: "",
                required: false,
                description: "Company path identifier for multi-tenant setups",
            },
        ];
        this.authenticate = {
            type: "generic",
            properties: {
                headers: {
                    Authorization: "=Bearer {{$credentials.sessionToken}}",
                    "App-Source": "EzyHR3",
                    "App-Version": "1.0.51",
                },
            },
        };
        this.test = {
            request: {
                baseURL: "={{$credentials.baseUrl}}",
                url: "/config?group=COMPANY",
                method: "GET",
            },
        };
    }
}
exports.EzyHRApi = EzyHRApi;
//# sourceMappingURL=EzyHRApi.credentials.js.map