import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		name: 'searchword',
		displayName: 'Search Word',
		type: 'string',
		default: '',
		required: true,
		description: 'Filter Products by searchWord',
	},
];

const displayOptions = {
	show: {
		resource: ['priceList'],
		operation: ['searchCount'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
