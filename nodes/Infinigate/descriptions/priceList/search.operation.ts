import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { limitQueryParameters } from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	{
		name: 'searchword',
		displayName: 'Search Word',
		type: 'string',
		default: '',
		required: true,
		description: 'Filter Products by searchWord',
	},
	{
		name: 'VendorCodes',
		displayName: 'Vendor Codes',
		type: 'collection',
		description: 'Filter for specific VendorCodes',
		default: '',
		options: [
			{
				name: 'Vendor Code',
				displayName: 'Vendor Code',
				type: 'string',
				default: '',
				description: 'Filter for specific VendorCode',
			},
		],
		routing: {
			send: {
				type: 'query',
				value: 'VendorCodes',
			},
		},
	},
	{
		name: 'ProductTypes',
		displayName: 'Product Types',
		type: 'collection',
		description: "Filter for specific ProductTypes like 'Hardware' or 'Software'",
		default: '',
		options: [
			{
				name: 'Product Type',
				displayName: 'Product Type',
				type: 'string',
				default: '',
				description: 'Filter for specific ProductType',
			},
		],
		routing: {
			send: {
				type: 'query',
				value: 'ProductTypes',
			},
		},
	},
	{
		name: 'EndUserTypes',
		displayName: 'End User Types',
		type: 'collection',
		description: "Filter for specific EndUserTypes like 'Std', 'Edu' or 'GOV'",
		default: '',
		options: [
			{
				name: 'End User Type',
				displayName: 'End User Type',
				type: 'string',
				default: '',
				description: 'Filter for specific EndUserType',
			},
		],
		routing: {
			send: {
				type: 'query',
				value: 'EndUserTypes',
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
