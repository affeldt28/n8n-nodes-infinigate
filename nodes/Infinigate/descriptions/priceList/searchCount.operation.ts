import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		name: 'searchword',
		displayName: 'Search Term',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. automation',
		description: 'Filter products by search term',
	},
];

const displayOptions = {
	show: {
		resource: ['priceList'],
		operation: ['searchCount'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
