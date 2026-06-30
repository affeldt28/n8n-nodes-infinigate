import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { limitQueryParameters } from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	{
		name: 'Skus',
		displayName: 'SKUs',
		type: 'collection',
		description: 'Filter by specific SKUs',
		default: {},
		options: [
			{
				name: 'SKU',
				displayName: 'SKU',
				type: 'string',
				default: '',
				placeholder: 'e.g. sku',
				description: 'SKU to filter by',
			},
		],
		routing: {
			send: {
				type: 'query',
				// API expects the query parameter to be named 'no' for filtering by SKU.
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
