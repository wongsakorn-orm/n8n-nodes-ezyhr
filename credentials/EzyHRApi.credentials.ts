import type {
  IAuthenticateGeneric,
  ICredentialType,
  INodeProperties,
  Icon,
  ICredentialTestRequest,
} from "n8n-workflow";

export class EzyHRApi implements ICredentialType {
  name = "ezyHRApi";
  displayName = "EzyHR API";
  documentationUrl = "https://ezyhr.com/docs";
  icon: Icon = "file:ezyhr.svg";
  properties: INodeProperties[] = [
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

  authenticate: IAuthenticateGeneric = {
    type: "generic",
    properties: {
      headers: {
        Authorization: "=Bearer {{$credentials.sessionToken}}",
        "App-Source": "EzyHR3",
        "App-Version": "1.0.51",
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: "={{$credentials.baseUrl}}",
      url: "/config?group=COMPANY",
      method: "GET",
    },
  };
}
