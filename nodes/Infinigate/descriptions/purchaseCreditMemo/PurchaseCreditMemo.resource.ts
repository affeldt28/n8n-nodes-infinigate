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
				name: 'Get Many',
				description: 'Retrieve a list of purchase credit memos',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/invoice-management/v2/purchasecreditmemo',
					},
				},
				action: 'Get many purchase credit memos',
			},
			{
				name: 'Get by Document Id',
				description: 'Retrieve a purchase credit memo by document Id',
				value: 'getByDocumentId',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoice-management/v2/purchasecreditmemo/{{ $parameter.documentGuid }}',
					},
				},
				action: 'Get purchase credit memo by document Id',
			},
			{
				name: 'Get by Document Number',
				description: 'Retrieve a purchase credit memo by document number',
				value: 'getByDocumentNumber',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoice-management/v2/purchasecreditmemo/documentNumber/{{ $parameter.documentNumber }}',
					},
				},
				action: 'Get purchase credit memo by document number',
			},
		],
	},
	...getAll.description,
	...getByDocumentId.description,
	...getByDocumentNumber.description,
];
