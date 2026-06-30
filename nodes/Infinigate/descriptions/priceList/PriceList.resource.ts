import type { INodeProperties } from 'n8n-workflow';
import * as getAllByManufacturer from './getAllByManufacturer.operation';
import * as search from './search.operation';
import * as searchCount from './searchCount.operation';
import * as sku from './sku.operation';
import * as vendor from './vendor.operation';

export const description: INodeProperties[] = [
	{
		name: 'operation',
		displayName: 'Operation',
		type: 'options',
		default: 'search',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['priceList'],
			},
		},
		options: [
			{
				name: 'Search Items',
				description: 'Search price list items with stock levels',
				value: 'search',
				routing: {
					request: {
						method: 'GET',
						url: '=/product-management/v1/pricelist/search/{{ $parameter.searchword }}',
					},
				},
				action: 'Search price list items',
			},
			{
				name: 'Get Items by Vendor SKU',
				description: 'Retrieve price list items with stock levels by vendor SKU',
				value: 'vendor',
				routing: {
					request: {
						method: 'GET',
						url: '/product-management/v1/pricelist/vendor',
					},
				},
				action: 'Get price list items by vendor SKU',
			},
			{
				name: 'Get Items by SKU',
				description: 'Retrieve price list items with stock levels by SKU',
				value: 'sku',
				routing: {
					request: {
						method: 'GET',
						url: '/product-management/v1/pricelist/sku',
					},
				},
				action: 'Get price list items by SKU',
			},
			{
				name: 'Count Items',
				description:
					'Get the number of price list items matching a search term and filters',
				value: 'searchCount',
				routing: {
					request: {
						method: 'GET',
						url: '=/product-management/v1/pricelist/search/count/{{ $parameter.searchword }}',
					},
				},
				action: 'Count price list items',
			},
			{
				name: 'Get Items by Manufacturer',
				description: 'Retrieve price list items for a manufacturer',
				value: 'getAllByManufacturer',
				routing: {
					request: {
						method: 'GET',
						url: '/product-management/v1/pricelist/',
					},
				},
				action: 'Get price list items by manufacturer',
			},
		],
	},
	...search.description,
	...vendor.description,
	...sku.description,
	...searchCount.description,
	...getAllByManufacturer.description,
];
