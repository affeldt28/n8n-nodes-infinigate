import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { limitQueryParameters } from '../shared/QueryParameter';

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
	{
		name: 'VendorCodes',
		displayName: 'Vendor Codes',
		type: 'collection',
		description: 'Filter by specific vendor codes',
		default: {},
		options: [
			{
				name: 'Vendor Code',
				displayName: 'Vendor Code',
				type: 'string',
				default: '',
				placeholder: 'e.g. vendorCode',
				description: 'Vendor code to filter by',
			},
		],
		routing: {
			send: {
				type: 'query',
				property: 'VendorCodes',
			},
		},
	},
	{
		name: 'ProductTypes',
		displayName: 'Product Types',
		type: 'collection',
		description: 'Filter by specific product types, for example hardware or software',
		default: {},
		options: [
			{
				name: 'Product Type',
				displayName: 'Product Type',
				type: 'string',
				default: '',
				placeholder: 'e.g. hardware',
				description: 'Product type to filter by',
			},
		],
		routing: {
			send: {
				type: 'query',
				property: 'ProductTypes',
			},
		},
	},
	{
		name: 'EndUserTypes',
		displayName: 'End User Types',
		type: 'collection',
		description:
			'Filter by specific end user types, for example standard, education, or government',
		default: {},
		options: [
			{
				name: 'End User Type',
				displayName: 'End User Type',
				type: 'string',
				default: '',
				placeholder: 'e.g. standard',
				description: 'End user type to filter by',
			},
		],
		routing: {
			send: {
				type: 'query',
				property: 'EndUserTypes',
			},
		},
	},
	...limitQueryParameters,
];

const displayOptions = {
	show: {
		resource: ['priceList'],
		operation: ['search'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
