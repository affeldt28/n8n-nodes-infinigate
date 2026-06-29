import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import {
	buyerReferenceQueryParameter,
	externalDocumentNumberQueryParameter,
	limitQueryParameters,
	periodQueryParameters,
} from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	buyerReferenceQueryParameter,
	externalDocumentNumberQueryParameter,
	...periodQueryParameters,
	...limitQueryParameters,
];

const displayOptions = {
	show: {
		resource: ['purchaseInvoice'],
		operation: ['getAll'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
