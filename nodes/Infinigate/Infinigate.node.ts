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
		description: 'Interact with infinigate API',
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
						name: 'Purchase credit memo',
						value: 'purchaseCreditMemo',
					},
					{
						name: 'Purchase invoice',
						value: 'purchaseInvoice',
					},
					{
						name: 'Purchase quote',
						value: 'purchaseQuote',
					},
					{
						name: 'Price list',
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
