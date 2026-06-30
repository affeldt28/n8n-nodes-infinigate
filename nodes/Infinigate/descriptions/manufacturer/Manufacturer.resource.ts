import type { INodeProperties } from 'n8n-workflow';
import * as getAll from './getAll.operation';

export const description: INodeProperties[] = [
	{
		name: 'operation',
		displayName: 'Operation',
		type: 'options',
		default: 'getAll',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['manufacturer'],
			},
		},
		options: [
			{
				name: 'Get Many',
				description: 'Get a list of all manufacturer names',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/product-management/v1/manufacturer',
					},
				},
				action: 'Get many manufacturers',
			},
		],
	},
	...getAll.description,
];
