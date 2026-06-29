import type {
	IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	IHttpRequestHelper,
	INodeProperties,
} from 'n8n-workflow';

export class InfinigateApi implements ICredentialType {
	name = 'infinigateApi';

	displayName = 'Infinigate API';

	icon: Icon = { light: 'file:../icons/infinigate.svg', dark: 'file:../icons/infinigate.svg' };

	documentationUrl = 'https://www.infinigate.com/de/services/infinigate-api/';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'hidden',
			default: 'https://api.infinigate.com',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			typeOptions: { password: false },
			required: true,
			default: '',
			description:
				'ClientId provided by Infinigate. It is sent as client_id when requesting the short-lived authentication token.',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description:
				'Client secret provided by Infinigate. It is sent as client_secret when requesting the authentication token.',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description:
				'API Key provided by Infinigate. It is sent as the API-KEY header on the token request and all API requests.',
		},
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'client_credentials',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'hidden',
			typeOptions: {
				expirable: true,
			},
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
				'API-KEY': '={{$credentials.apiKey}}',
			},
		},
	};

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const response = (await this.helpers.httpRequest({
			method: 'POST',
			url: `${credentials.baseUrl}/authorization/token`,
			headers: {
				'API-KEY': credentials.apiKey as string,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: {
				client_id: credentials.clientId as string,
				client_secret: credentials.clientSecret as string,
				grant_type: credentials.grantType as string,
			},
			json: true,
		})) as {
			access_token: string;
			expires_in: number;
			refresh_expires_in: number;
			token_type: string;
			'not-before-policy': number;
			scope: string;
		};

		return {
			accessToken: response.access_token,
		};
	}

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/invoice-management/v2/purchasecreditmemo',
			method: 'GET',
			headers: {
				'API-KEY': '={{$credentials.apiKey}}',
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};
}
