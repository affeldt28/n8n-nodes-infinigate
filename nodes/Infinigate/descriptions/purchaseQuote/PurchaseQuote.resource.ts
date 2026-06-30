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
				name: 'Get Many',
				description: 'Retrieve a list of purchase quotes',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/order-management/v2/purchasequote',
					},
				},
				action: 'Get many purchase quotes',
			},
			{
				name: 'Get by Document Id',
				description: 'Retrieve a purchase quote by document Id',
				value: 'getByDocumentId',
				routing: {
					request: {
						method: 'GET',
						url: '=/order-management/v2/purchasequote/{{ $parameter.documentGuid }}',
					},
				},
				action: 'Get purchase quote by document Id',
			},
			{
				name: 'Get by Document Number',
				description: 'Retrieve a purchase quote by document number',
				value: 'getByDocumentNumber',
				routing: {
					request: {
						method: 'GET',
						url: '=/order-management/v2/purchasequote/documentNumber/{{ $parameter.documentNumber }}',
					},
				},
				action: 'Get purchase quote by document number',
			},
			{
				name: 'Accept',
				description: 'Accept a purchase quote by document number',
				value: 'acceptance',
				routing: {
					request: {
						method: 'POST',
						url: '/order-management/v2/purchasequote/acceptance',
					},
				},
				action: 'Accept purchase quote',
			},
			{
				name: 'Reject',
				description: 'Reject a purchase quote by document number',
				value: 'reject',
				routing: {
					request: {
						method: 'POST',
						url: '/order-management/v2/purchasequote/reject',
					},
				},
				action: 'Reject purchase quote',
			},
			{
				name: 'Request',
				description: 'Request a purchase quote',
				value: 'request',
				routing: {
					request: {
						method: 'POST',
						url: '/order-management/v2/purchasequote/request',
					},
				},
				action: 'Request purchase quote',
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
