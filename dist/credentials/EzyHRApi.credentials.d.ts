import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties, Icon } from "n8n-workflow";
export declare class EzyHRApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    icon: Icon;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
    test: ICredentialTestRequest;
}
