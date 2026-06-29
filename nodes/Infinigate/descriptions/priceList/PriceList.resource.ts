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
				name: 'Get PriceList Item search',
				description: 'Get PriceList with Stocklevel Item search',
				value: 'search',
				routing: {
					request: {
						method: 'GET',
						url: '=/product-management/v1/pricelist/search/{{ $parameter.searchword }}',
					},
				},
				action: 'Get PriceList Item search',
			},
			{
				name: 'Get PriceList By VendorSku',
				description: 'Get PriceList with Stocklevel By VendorSku',
				value: 'vendor',
				routing: {
					request: {
						method: 'GET',
						url: '/product-management/v1/pricelist/vendor',
					},
				},
				action: 'Get PriceList By VendorSku',
			},
			{
				name: 'Get PriceList By Skus',
				description: 'Get PriceList with Stocklevel By Skus',
				value: 'sku',
				routing: {
					request: {
						method: 'GET',
						url: '/product-management/v1/pricelist/sku',
					},
				},
				action: 'Get PriceList By Skus',
			},
			{
				name: 'Get PriceList Item Count',
				description: 'Get the count of PriceList Items for the searchword and filter',
				value: 'searchCount',
				routing: {
					request: {
						method: 'GET',
						url: '=/product-management/v1/pricelist/search/count/{{ $parameter.searchword }}',
					},
				},
				action: 'Get PriceList Item Count',
			},
			{
				name: 'Get all products for a Manufacturer',
				description: 'Get all products for a Manufacturer',
				value: 'getAllByManufacturer',
				routing: {
					request: {
						method: 'GET',
						url: '/product-management/v1/pricelist/',
					},
				},
				action: 'Get all products for a Manufacturer',
			},
		],
	},
	...search.description,
	...vendor.description,
	...sku.description,
	...searchCount.description,
	...getAllByManufacturer.description,
];
