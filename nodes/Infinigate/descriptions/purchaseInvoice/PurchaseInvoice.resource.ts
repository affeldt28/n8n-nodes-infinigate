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
				name: 'Get Many',
				description: 'Retrieve a list of purchase invoices',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/invoice-management/v2/purchaseinvoice',
					},
				},
				action: 'Get many purchase invoices',
			},
			{
				name: 'Get by Document Id',
				description: 'Retrieve a purchase invoice by document Id',
				value: 'getByDocumentId',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoice-management/v2/purchaseinvoice/{{ $parameter.documentGuid }}',
					},
				},
				action: 'Get purchase invoice by document Id',
			},
			{
				name: 'Get by Document Number',
				description: 'Retrieve a purchase invoice by document number',
				value: 'getByDocumentNumber',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoice-management/v2/purchaseinvoice/documentNumber/{{ $parameter.documentNumber }}',
					},
				},
				action: 'Get purchase invoice by document number',
			},
		],
	},
	...getAll.description,
	...getByDocumentId.description,
	...getByDocumentNumber.description,
];
