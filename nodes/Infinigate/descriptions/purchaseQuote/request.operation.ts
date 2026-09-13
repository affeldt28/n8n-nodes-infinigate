import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const contactProperties: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'The name of the contact',
	},
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		default: '',
		description: 'The phone number of the contact',
	},
	{
		displayName: 'Fax',
		name: 'fax',
		type: 'string',
		default: '',
		description: 'The fax number of the contact',
	},
	{
		displayName: 'Email',
		name: 'eMail',
		type: 'string',
		default: '',
		description: 'The email of the contact',
	},
];

const addressProperties: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'The name of the company',
	},
	{
		displayName: 'Street',
		name: 'street',
		type: 'string',
		default: '',
		description: 'The street of the company',
	},
	{
		displayName: 'Additional Address Info',
		name: 'additionalAddressInfo',
		type: 'string',
		default: '',
		description: 'Additional address information of the company',
	},
	{
		displayName: 'Postal Code',
		name: 'postalCode',
		type: 'string',
		default: '',
		description: 'The postal code of the company',
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		default: '',
		description: 'The city of the company',
	},
	{
		displayName: 'Country Code',
		name: 'countryCode',
		type: 'string',
		default: '',
		description: 'The country code of the company',
	},
	{
		displayName: 'Country Name',
		name: 'countryName',
		type: 'string',
		default: '',
		description: 'The country name of the company',
	},
];

const manufacturerAdditionalInfoProperties: INodeProperties[] = [
	{
		displayName: 'Period Start',
		name: 'periodStart',
		type: 'dateTime',
		default: '',
		description: 'The start date of the manufacturer additional info period',
	},
	{
		displayName: 'Period End',
		name: 'periodEnd',
		type: 'dateTime',
		default: '',
		description: 'The end date of the manufacturer additional info period',
	},
	{
		displayName: 'Serial Number',
		name: 'serialNumber',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Previous Serial Number',
		name: 'previousSerialNumber',
		type: 'string',
		default: '',
	},
	{
		displayName: 'License ID',
		name: 'licenseId',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Barracuda',
		name: 'barracuda',
		type: 'collection',
		default: {},
		options: [
			{
				displayName: 'Commission',
				name: 'commission',
				type: 'string',
				default: '',
				description: 'The Barracuda commission',
			},
			{
				displayName: 'Deal Registration Number',
				name: 'dealRegistrationNumber',
				type: 'string',
				default: '',
				description: 'The Barracuda deal registration number',
			},
			{
				displayName: 'Partner Status',
				name: 'partnerStatus',
				type: 'string',
				default: '',
				description: 'The Barracuda partner status',
			},
		],
	},
	{
		displayName: 'HP',
		name: 'hp',
		type: 'collection',
		default: {},
		options: [
			{
				displayName: 'Bundle ID',
				name: 'bundleId',
				type: 'string',
				default: '',
				description: 'The HP bundle ID',
			},
			{
				displayName: 'Smart Quote ID',
				name: 'smartQuoteId',
				type: 'string',
				default: '',
				description: 'The HP smart quote ID',
			},
		],
	},
	{
		displayName: 'SonicWall',
		name: 'sonicWall',
		type: 'collection',
		default: {},
		options: [
			{
				displayName: 'Friendly Name',
				name: 'friendlyName',
				type: 'string',
				default: '',
				description: 'The SonicWall friendly name',
			},
		],
	},
];

const properties: INodeProperties[] = [
	{
		displayName: 'Header',
		name: 'header',
		type: 'collection',
		default: {},
		routing: {
			send: {
				type: 'body',
				property: 'header',
			},
		},
		options: [
			{
				displayName: 'Bill To',
				name: 'billTo',
				type: 'collection',
				default: {},
				options: addressProperties,
			},
			{
				displayName: 'Comment',
				name: 'comment',
				type: 'string',
				default: '',
				description: 'The comment of the purchase quote',
			},
			{
				displayName: 'Contact',
				name: 'contact',
				type: 'collection',
				default: {},
				options: contactProperties,
			},
			{
				displayName: 'Currency Code',
				name: 'currencyCode',
				type: 'string',
				default: '',
				description: 'The currency code of the purchase quote',
			},
			{
				displayName: 'Disallow Partial Shipment',
				name: 'disallowPartialShipment',
				type: 'boolean',
				default: false,
				description: 'Whether to disallow partial shipment',
			},
			{
				displayName: 'End User',
				name: 'endUser',
				type: 'collection',
				default: {},
				options: [
					{
						displayName: 'Company',
						name: 'company',
						type: 'collection',
						default: {},
						options: addressProperties,
					},
					{
						displayName: 'Contact',
						name: 'contact',
						type: 'collection',
						default: {},
						options: contactProperties,
					},
					{
						displayName: 'End User Reference',
						name: 'endUserReference',
						type: 'string',
						default: '',
					},
					{
						displayName: 'End User Type',
						name: 'endUserType',
						type: 'string',
						default: '',
					},
				],
			},
			{
				displayName: 'License Delivery Address',
				name: 'licenseDeliveryAddress',
				type: 'string',
				default: '',
				description: 'The license delivery address of the purchase quote',
			},
			{
				displayName: 'Manufacturer Partner ID',
				name: 'manufacturerPartnerId',
				type: 'string',
				default: '',
				description: 'The manufacturer partner ID of the purchase quote',
			},
			{
				displayName: 'Requested Delivery Date',
				name: 'requestedDeliveryDate',
				type: 'dateTime',
				default: '',
				description: 'The requested delivery date of the purchase quote',
			},
			{
				displayName: 'Sell To',
				name: 'sellTo',
				type: 'collection',
				default: {},
				options: addressProperties,
			},
			{
				displayName: 'Ship Hardware Complete',
				name: 'shipHardwareComplete',
				type: 'boolean',
				default: false,
				description: 'Whether to ship hardware complete',
			},
			{
				displayName: 'Ship To',
				name: 'shipTo',
				type: 'collection',
				default: {},
				options: addressProperties,
			},
			{
				displayName: 'Your Reference',
				name: 'yourReference',
				type: 'string',
				default: '',
				description: 'Your reference of the purchase quote',
			},
		],
	},
	{
		displayName: 'Lines',
		name: 'lines',
		type: 'fixedCollection',
		default: {},
		routing: {
			send: {
				type: 'body',
				property: 'lines',
				value: '={{ $value.line }}',
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				displayName: 'Line',
				name: 'line',
				values: [
					{
						displayName: 'Item Description',
						name: 'itemDescription',
						type: 'string',
						default: '',
						description: 'The item description of the purchase quote line',
					},
					{
						displayName: 'Item Number',
						name: 'itemNumber',
						type: 'string',
						default: '',
						description: 'The item number of the purchase quote line',
					},
					{
						displayName: 'Manufacturer Additional Info',
						name: 'manufacturerAdditionalInfo',
						type: 'collection',
						default: {},
						options: manufacturerAdditionalInfoProperties,
					},
					{
						displayName: 'Manufacturer Item Number',
						name: 'manufacturerItemNumber',
						type: 'string',
						default: '',
						description: 'The manufacturer item number of the purchase quote line',
					},
					{
						displayName: 'Quantity',
						name: 'quantity',
						type: 'number',
						default: 0,
						description: 'The quantity of the purchase quote line',
					},
					{
						displayName: 'Special Bid Deal No',
						name: 'specialBidDealNo',
						type: 'string',
						default: '',
						description: 'The special bid deal number of the purchase quote line',
					},
					{
						displayName: 'Your Item Number',
						name: 'yourItemNumber',
						type: 'string',
						default: '',
						description: 'Your item number of the purchase quote line',
					},
					{
						displayName: 'Your Line Number',
						name: 'yourLineNumber',
						type: 'string',
						default: '',
						description: 'Your line number of the purchase quote line',
					},
				],
			},
		],
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseQuote'],
		operation: ['request'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
