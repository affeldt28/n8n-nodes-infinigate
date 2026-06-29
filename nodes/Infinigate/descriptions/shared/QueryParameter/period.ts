import { type INodeProperties } from 'n8n-workflow';

export const periodQueryParameters: INodeProperties[] = [
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
];
