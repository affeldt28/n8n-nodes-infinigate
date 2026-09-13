import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { limitQueryParameters } from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	{
		displayName: 'Search Term',
		name: 'searchword',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. automation',
		description: 'Filter products by search term',
	},
	{
		displayName: 'Vendor Codes',
		name: 'VendorCodes',
		type: 'collection',
		description: 'Filter by specific vendor codes',
		default: {},
		options: [
			{
				displayName: 'Vendor Code',
				name: 'Vendor Code',
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
		displayName: 'Product Types',
		name: 'ProductTypes',
		type: 'collection',
		description: 'Filter by specific product types, for example hardware or software',
		default: {},
		options: [
			{
				displayName: 'Product Type',
				name: 'Product Type',
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
		displayName: 'End User Types',
		name: 'EndUserTypes',
		type: 'collection',
		description:
			'Filter by specific end user types, for example standard, education, or government',
		default: {},
		options: [
			{
				displayName: 'End User Type',
				name: 'End User Type',
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
