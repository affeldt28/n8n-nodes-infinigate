import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const contactProperties: INodeProperties[] = [
	{
		name: 'name',
		displayName: 'Name',
		type: 'string',
		default: '',
		description: 'The name of the contact.',
	},
	{
		name: 'phoneNumber',
		displayName: 'Phone Number',
		type: 'string',
		default: '',
		description: 'The phone number of the contact.',
	},
	{
		name: 'fax',
		displayName: 'Fax',
		type: 'string',
		default: '',
		description: 'The fax number of the contact.',
	},
	{
		name: 'eMail',
		displayName: 'Email',
		type: 'string',
		default: '',
		description: 'The email of the contact.',
	},
];

const addressProperties: INodeProperties[] = [
	{
		name: 'name',
		displayName: 'Name',
		type: 'string',
		default: '',
		description: 'The name of the company.',
	},
	{
		name: 'street',
		displayName: 'Street',
		type: 'string',
		default: '',
		description: 'The street of the company.',
	},
	{
		name: 'additionalAddressInfo',
		displayName: 'Additional Address Info',
		type: 'string',
		default: '',
		description: 'Additional address information of the company.',
	},
	{
		name: 'postalCode',
		displayName: 'Postal Code',
		type: 'string',
		default: '',
		description: 'The postal code of the company.',
	},
	{
		name: 'city',
		displayName: 'City',
		type: 'string',
		default: '',
		description: 'The city of the company.',
	},
	{
		name: 'countryCode',
		displayName: 'Country Code',
		type: 'string',
		default: '',
		description: 'The country code of the company.',
	},
	{
		name: 'countryName',
		displayName: 'Country Name',
		type: 'string',
		default: '',
		description: 'The country name of the company.',
	},
];

const manufacturerAdditionalInfoProperties: INodeProperties[] = [
	{
		name: 'periodStart',
		displayName: 'Period Start',
		type: 'dateTime',
		default: '',
		description: 'The start date of the manufacturer additional info period.',
	},
	{
		name: 'periodEnd',
		displayName: 'Period End',
		type: 'dateTime',
		default: '',
		description: 'The end date of the manufacturer additional info period.',
	},
	{
		name: 'serialNumber',
		displayName: 'Serial Number',
		type: 'string',
		default: '',
		description: 'The serial number.',
	},
	{
		name: 'previousSerialNumber',
		displayName: 'Previous Serial Number',
		type: 'string',
		default: '',
		description: 'The previous serial number.',
	},
	{
		name: 'licenseId',
		displayName: 'License ID',
		type: 'string',
		default: '',
		description: 'The license ID.',
	},
	{
		name: 'barracuda',
		displayName: 'Barracuda',
		type: 'collection',
		default: {},
		options: [
			{
				name: 'partnerStatus',
				displayName: 'Partner Status',
				type: 'string',
				default: '',
				description: 'The Barracuda partner status.',
			},
			{
				name: 'commission',
				displayName: 'Commission',
				type: 'string',
				default: '',
				description: 'The Barracuda commission.',
			},
			{
				name: 'dealRegistrationNumber',
				displayName: 'Deal Registration Number',
				type: 'string',
				default: '',
				description: 'The Barracuda deal registration number.',
			},
		],
	},
	{
		name: 'hp',
		displayName: 'HP',
		type: 'collection',
		default: {},
		options: [
			{
				name: 'bundleId',
				displayName: 'Bundle ID',
				type: 'string',
				default: '',
				description: 'The HP bundle ID.',
			},
			{
				name: 'smartQuoteId',
				displayName: 'Smart Quote ID',
				type: 'string',
				default: '',
				description: 'The HP smart quote ID.',
			},
		],
	},
	{
		name: 'sonicWall',
		displayName: 'SonicWall',
		type: 'collection',
		default: {},
		options: [
			{
				name: 'friendlyName',
				displayName: 'Friendly Name',
				type: 'string',
				default: '',
				description: 'The SonicWall friendly name.',
			},
		],
	},
];

const properties: INodeProperties[] = [
	{
		name: 'header',
		displayName: 'Header',
		type: 'collection',
		default: {},
		options: [
			{
				name: 'manufacturerPartnerId',
				displayName: 'Manufacturer Partner ID',
				type: 'string',
				default: '',
				description: 'The manufacturer partner ID of the purchase quote.',
			},
			{
				name: 'yourReference',
				displayName: 'Your Reference',
				type: 'string',
				default: '',
				description: 'Your reference of the purchase quote.',
			},
			{
				name: 'currencyCode',
				displayName: 'Currency Code',
				type: 'string',
				default: '',
				description: 'The currency code of the purchase quote.',
			},
			{
				name: 'contact',
				displayName: 'Contact',
				type: 'collection',
				default: {},
				options: contactProperties,
			},
			{
				name: 'endUser',
				displayName: 'End User',
				type: 'collection',
				default: {},
				options: [
					{
						name: 'endUserReference',
						displayName: 'End User Reference',
						type: 'string',
						default: '',
						description: 'The end user reference.',
					},
					{
						name: 'endUserType',
						displayName: 'End User Type',
						type: 'string',
						default: '',
						description: 'The end user type.',
					},
					{
						name: 'company',
						displayName: 'Company',
						type: 'collection',
						default: {},
						options: addressProperties,
					},
					{
						name: 'contact',
						displayName: 'Contact',
						type: 'collection',
						default: {},
						options: contactProperties,
					},
				],
			},
			{
				name: 'sellTo',
				displayName: 'Sell To',
				type: 'collection',
				default: {},
				options: addressProperties,
			},
			{
				name: 'billTo',
				displayName: 'Bill To',
				type: 'collection',
				default: {},
				options: addressProperties,
			},
			{
				name: 'disallowPartialShipment',
				displayName: 'Disallow Partial Shipment',
				type: 'boolean',
				default: false,
				description: 'Whether to disallow partial shipment.',
			},
			{
				name: 'shipHardwareComplete',
				displayName: 'Ship Hardware Complete',
				type: 'boolean',
				default: false,
				description: 'Whether to ship hardware complete.',
			},
			{
				name: 'requestedDeliveryDate',
				displayName: 'Requested Delivery Date',
				type: 'dateTime',
				default: '',
				description: 'The requested delivery date of the purchase quote.',
			},
			{
				name: 'licenseDeliveryAddress',
				displayName: 'License Delivery Address',
				type: 'string',
				default: '',
				description: 'The license delivery address of the purchase quote.',
			},
			{
				name: 'shipTo',
				displayName: 'Ship To',
				type: 'collection',
				default: {},
				options: addressProperties,
			},
			{
				name: 'comment',
				displayName: 'Comment',
				type: 'string',
				default: '',
				description: 'The comment of the purchase quote.',
			},
		],
	},
	{
		name: 'lines',
		displayName: 'Lines',
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'line',
				displayName: 'Line',
				values: [
					{
						name: 'itemNumber',
						displayName: 'Item Number',
						type: 'string',
						default: '',
						description: 'The item number of the purchase quote line.',
					},
					{
						name: 'manufacturerItemNumber',
						displayName: 'Manufacturer Item Number',
						type: 'string',
						default: '',
						description: 'The manufacturer item number of the purchase quote line.',
					},
					{
						name: 'itemDescription',
						displayName: 'Item Description',
						type: 'string',
						default: '',
						description: 'The item description of the purchase quote line.',
					},
					{
						name: 'quantity',
						displayName: 'Quantity',
						type: 'number',
						default: 0,
						description: 'The quantity of the purchase quote line.',
					},
					{
						name: 'specialBidDealNo',
						displayName: 'Special Bid Deal No',
						type: 'string',
						default: '',
						description: 'The special bid deal number of the purchase quote line.',
					},
					{
						name: 'yourItemNumber',
						displayName: 'Your Item Number',
						type: 'string',
						default: '',
						description: 'Your item number of the purchase quote line.',
					},
					{
						name: 'yourLineNumber',
						displayName: 'Your Line Number',
						type: 'string',
						default: '',
						description: 'Your line number of the purchase quote line.',
					},
					{
						name: 'manufacturerAdditionalInfo',
						displayName: 'Manufacturer Additional Info',
						type: 'collection',
						default: {},
						options: manufacturerAdditionalInfoProperties,
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
