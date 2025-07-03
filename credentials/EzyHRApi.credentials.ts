import type {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
  Icon,
} from "n8n-workflow";

export class EzyHRApi implements ICredentialType {
  name = "ezyHRApi";
  displayName = "EzyHR API";
  documentationUrl = "https://api.ezyhr.com/docs";
  icon: Icon = "file:ezyhr.svg";
  properties: INodeProperties[] = [
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

  authenticate: IAuthenticateGeneric = {
    type: "generic",
    properties: {
      headers: {
        "X-API-Key": "={{$credentials.apiKey}}",
        "X-Secret-Key": "={{$credentials.secretKey}}",
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: "={{$credentials.baseUrl}}",
      url: "/user/profile",
      method: "GET",
    },
  };
}
