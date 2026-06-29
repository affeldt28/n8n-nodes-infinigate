import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import {
	buyerReferenceQueryParameter,
	externalDocumentNumberQueryParameter,
	limitQueryParameters,
} from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	buyerReferenceQueryParameter,
	externalDocumentNumberQueryParameter,
	...limitQueryParameters,
];

const displayOptions = {
	show: {
		resource: ['purchaseQuote'],
		operation: ['getAll'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
