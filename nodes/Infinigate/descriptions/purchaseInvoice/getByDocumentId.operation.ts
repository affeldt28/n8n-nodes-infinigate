import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		name: 'documentGuid',
		displayName: 'Document GUID',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 123e4567-e89b-12d3-a456-426614174000',
		description: 'The document GUID of the purchase invoice to retrieve',
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseInvoice'],
		operation: ['getByDocumentId'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
