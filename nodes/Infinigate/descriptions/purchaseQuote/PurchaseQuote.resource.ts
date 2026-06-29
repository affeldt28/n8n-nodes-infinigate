import type { INodeProperties } from 'n8n-workflow';
import * as acceptance from './acceptance.operation';
import * as getAll from './getAll.operation';
import * as getByDocumentId from './getByDocumentId.operation';
import * as getByDocumentNumber from './getByDocumentNumber.operation';
import * as reject from './reject.operation';
import * as request from './request.operation';

export const description: INodeProperties[] = [
	{
		name: 'operation',
		displayName: 'Operation',
		type: 'options',
		default: 'getAll',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['purchaseQuote'],
			},
		},
		options: [
			{
				name: 'Quote overview list',
				description: 'Get all DocumentInfo of type PurchaseQuote for user',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/order-management/v2/purchasequote',
					},
				},
				action: 'Get Quote overview list',
			},
			{
				name: 'Quote by documentId',
				description: 'Get the PurchaseQuote by documentId',
				value: 'getByDocumentId',
				routing: {
					request: {
						method: 'GET',
						url: '=/order-management/v2/purchasequote/{{ $parameter.documentGuid }}',
					},
				},
				action: 'Get Quote by documentId',
			},
			{
				name: 'Quote by documentNumber',
				description: 'Get the PurchaseQuote by documentNumber',
				value: 'getByDocumentNumber',
				routing: {
					request: {
						method: 'GET',
						url: '=/order-management/v2/purchasequote/documentNumber/{{ $parameter.documentNumber }}',
					},
				},
				action: 'Get Quote by documentNumber',
			},
			{
				name: 'Quote acceptance by documentNumber',
				description: 'Post acceptance for documentNumber',
				value: 'acceptance',
				routing: {
					request: {
						method: 'POST',
						url: '/order-management/v2/purchasequote/acceptance',
					},
				},
				action: 'Post Quote acceptance by documentNumber',
			},
			{
				name: 'Quote rejection by documentNumber',
				description: 'Post rejection for documentNumber',
				value: 'reject',
				routing: {
					request: {
						method: 'POST',
						url: '/order-management/v2/purchasequote/reject',
					},
				},
				action: 'Post Quote rejection by documentNumber',
			},
			{
				name: 'Quote request',
				description: 'Post request for PurchaseQuote',
				value: 'request',
				routing: {
					request: {
						method: 'POST',
						url: '/order-management/v2/purchasequote/request',
					},
				},
				action: 'Post Quote request',
			},
		],
	},
	...getAll.description,
	...getByDocumentId.description,
	...getByDocumentNumber.description,
	...acceptance.description,
	...reject.description,
	...request.description,
];
