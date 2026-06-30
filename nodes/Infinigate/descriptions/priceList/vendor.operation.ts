import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { limitQueryParameters } from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	{
		name: 'VendorSkus',
		displayName: 'Vendor SKUs',
		type: 'collection',
		description: 'Filter by specific vendor SKUs',
		default: {},
		options: [
			{
				name: 'Vendor SKU',
				displayName: 'Vendor SKU',
				type: 'string',
				default: '',
				placeholder: 'e.g. vendorSku',
				description: 'Vendor SKU to filter by',
			},
		],
		routing: {
			send: {
				type: 'query',
				// API expects the query parameter to be named 'no' for filtering by vendor SKUs.
				property: 'no',
			},
		},
	},
	...limitQueryParameters,
];

const displayOptions = {
	show: {
		resource: ['priceList'],
		operation: ['vendor'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
