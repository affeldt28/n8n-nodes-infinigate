import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { listQueryProperties } from '../shared/listQuery';

const properties: INodeProperties[] = [...listQueryProperties];

const displayOptions = {
	show: {
		resource: ['purchaseCreditMemo'],
		operation: ['getAll'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
