import type { INodeProperties } from 'n8n-workflow';
import * as getAll from './getAll.operation';
import * as getByDocumentId from './getByDocumentId.operation';
import * as getByDocumentNumber from './getByDocumentNumber.operation';

export const description: INodeProperties[] = [
	{
		name: 'operation',
		displayName: 'Operation',
		type: 'options',
		default: 'getAll',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['purchaseInvoice'],
			},
		},
		options: [
			{
				name: 'Invoice overview list',
				description: 'Get all DocumentInfo of type PurchaseInvoice for user',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/invoice-management/v2/purchaseinvoice',
					},
				},
				action: 'Get Invoice overview list',
			},
			{
				name: 'Invoice by documentId',
				description: 'Get the PurchaseInvoice by documentId',
				value: 'getByDocumentId',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoice-management/v2/purchaseinvoice/{{ $parameter.documentGuid }}',
					},
				},
				action: 'Get Invoice by documentId',
			},
			{
				name: 'Invoice by documentNumber',
				description: 'Get the PurchaseInvoice by documentNumber',
				value: 'getByDocumentNumber',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoice-management/v2/purchaseinvoice/documentNumber/{{ $parameter.documentNumber }}',
					},
				},
				action: 'Get Invoice by documentNumber',
			},
		],
	},
	...getAll.description,
	...getByDocumentId.description,
	...getByDocumentNumber.description,
];
