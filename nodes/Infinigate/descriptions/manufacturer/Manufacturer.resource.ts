import type { INodeProperties } from 'n8n-workflow';
import * as getAll from './getAll.operation';

export const description: INodeProperties[] = [
	{
		name: 'operation',
		displayName: 'Operation',
		type: 'options',
		default: 'search',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['manufacturer'],
			},
		},
		options: [
			{
				name: 'Get List of all Manufacturer names',
				description: 'Get a list of all manufacturer names',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/product-management/v1/manufacturer',
					},
				},
				action: 'Get list of all manufacturer names',
			},
		],
	},
	...getAll.description,
];
