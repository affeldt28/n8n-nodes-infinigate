import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import {
	manufacturer,
	priceList,
	purchaseCreditMemo,
	purchaseInvoice,
	purchaseQuote,
} from './descriptions';

export class Infinigate implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Infinigate',
		name: 'infinigate',
		icon: { light: 'file:../../icons/infinigate.svg', dark: 'file:../../icons/infinigate.svg' },
		group: ['input'],
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		version: 1,
		description: 'Interact with the Infinigate API',
		defaults: {
			name: 'Infinigate',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'infinigateApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{ $credentials.baseUrl }}',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: 'purchaseCreditMemo',
				options: [
					{
						name: 'Purchase Credit Memo',
						value: 'purchaseCreditMemo',
					},
					{
						name: 'Purchase Invoice',
						value: 'purchaseInvoice',
					},
					{
						name: 'Purchase Quote',
						value: 'purchaseQuote',
					},
					{
						name: 'Price List',
						value: 'priceList',
					},
					{
						name: 'Manufacturer',
						value: 'manufacturer',
					},
				],
			},
			...purchaseCreditMemo.description,
			...purchaseInvoice.description,
			...purchaseQuote.description,
			...priceList.description,
			...manufacturer.description,
		],
	};
	methods = {};
}
