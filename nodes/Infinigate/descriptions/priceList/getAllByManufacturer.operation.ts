import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		name: 'manufacturerName',
		displayName: 'Manufacturer Name',
		type: 'string',
		default: '',
		required: true,
		description: 'Get all products for a Manufacturer',
		routing: {
			send: {
				type: 'query',
				property: 'manufacturerName',
			},
		},
	},
];

const displayOptions = {
	show: {
		resource: ['priceList'],
		operation: ['getAllByManufacturer'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
