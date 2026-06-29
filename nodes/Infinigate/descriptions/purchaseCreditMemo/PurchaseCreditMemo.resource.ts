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
				resource: ['purchaseCreditMemo'],
			},
		},
		options: [
			{
				name: 'CreditMemo overview list',
				description: 'Get all DocumentInfo of type PurchaseCreditMemo for user',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/invoice-management/v2/purchasecreditmemo',
					},
				},
				action: 'Get CreditMemo overview list',
			},
			{
				name: 'CreditMemo by documentId',
				description: 'Get the PurchaseCreditMemo by documentId',
				value: 'getByDocumentId',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoice-management/v2/purchasecreditmemo/{{ $parameter.documentGuid }}',
					},
				},
				action: 'Get CreditMemo by documentId',
			},
			{
				name: 'CreditMemo by documentNumber',
				description: 'Get the PurchaseCreditMemo by documentNumber',
				value: 'getByDocumentNumber',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoice-management/v2/purchasecreditmemo/documentNumber/{{ $parameter.documentNumber }}',
					},
				},
				action: 'Get CreditMemo by documentNumber',
			},
		],
	},
	...getAll.description,
	...getByDocumentId.description,
	...getByDocumentNumber.description,
];
