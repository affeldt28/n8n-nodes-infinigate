import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { limitQueryParameters } from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	{
		name: 'VendorSkus',
		displayName: 'List of VendorSkus',
		type: 'collection',
		description: 'Filter for specific VendorSkus',
		default: '',
		options: [
			{
				name: 'Vendor Sku',
				displayName: 'Vendor Sku',
				type: 'string',
				default: '',
				description: 'Filter for specific VendorSku',
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
		operation: ['vendor'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
