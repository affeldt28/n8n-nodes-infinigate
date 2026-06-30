import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { limitQueryParameters } from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	{
		name: 'Skus',
		displayName: 'List of Skus',
		type: 'collection',
		description: 'Filter for specific Skus',
		default: '',
		options: [
			{
				name: 'Sku',
				displayName: 'Sku',
				type: 'string',
				default: '',
				description: 'Filter for specific Sku',
			},
		],
		routing: {
			send: {
				type: 'query',
				property: 'no',
			},
		},
	},
	...limitQueryParameters,
];

const displayOptions = {
	show: {
		resource: ['priceList'],
		operation: ['sku'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
