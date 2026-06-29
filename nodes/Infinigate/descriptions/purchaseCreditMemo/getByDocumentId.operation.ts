import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		name: 'documentGuid',
		displayName: 'Document Guid',
		type: 'string',
		default: '',
		required: true,
		description: 'The documentGuid of the PurchaseCreditMemo to retrieve',
	},
];

const displayOptions = {
	show: {
		resource: ['purchaseCreditMemo'],
		operation: ['getByDocumentId'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
