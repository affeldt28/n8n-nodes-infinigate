import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		displayName: 'Manufacturer Name',
		name: 'manufacturerName',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. manufacturerName',
		description: 'The manufacturer name to retrieve price list items for',
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
