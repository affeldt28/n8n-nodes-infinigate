import { type INodeProperties } from 'n8n-workflow';

export const listQueryProperties: INodeProperties[] = [
	{
		name: 'BuyerReference',
		displayName: 'BuyerReference',
		type: 'string',
		default: '',
		description: 'Filter for BuyerReference',
		routing: {
			send: {
				type: 'query',
				property: 'BuyerReference',
			},
		},
	},
	{
		name: 'ExternalDocumentNumber',
		displayName: 'ExternalDocumentNumber',
		type: 'string',
		default: '',
		description: 'Filter for ExternalDocumentNumber',
		routing: {
			send: {
				type: 'query',
				property: 'ExternalDocumentNumber',
			},
		},
	},
	{
		name: 'PeriodStart',
		displayName: 'PeriodStart',
		type: 'dateTime',
		default: '',
		description: 'Filter for PeriodStart',
		routing: {
			request: {
				qs: {
					PeriodStart: '={{$value.toISOString()}}',
				},
			},
		},
	},
	{
		name: 'PeriodEnd',
		displayName: 'PeriodEnd',
		type: 'dateTime',
		default: '',
		description: 'Filter for PeriodEnd',
		routing: {
			request: {
				qs: {
					PeriodEnd: '={{$value.toISOString()}}',
				},
			},
		},
	},
	{
		name: 'Take',
		displayName: 'Take',
		type: 'number',
		default: 100,
		description: 'Number of items to take',
		routing: {
			send: {
				type: 'query',
				property: 'Take',
			},
		},
	},
	{
		name: 'Skip',
		displayName: 'Skip',
		type: 'number',
		default: 0,
		description: 'Number of items to skip',
		routing: {
			send: {
				type: 'query',
				property: 'Skip',
			},
		},
	},
];
