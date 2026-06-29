# n8n-nodes-infinigate

This is an n8n community node for the Infinigate Reseller API.

It lets you use Infinigate API endpoints in your n8n workflows, starting with invoice management operations for purchase credit memos.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node currently supports the following weclapp resources and operations:

## Operations

This node currently supports the following Infinigate resources and operations.

### Invoice-Management

| Operation                    | API                                                                           | Implemented |
| ---------------------------- | ----------------------------------------------------------------------------- | ----------- |
| CreditMemo overview list     | GET /invoice-management/v2/purchasecreditmemo                                 | ✅           |
| CreditMemo by documentId     | GET /invoice-management/v2/purchasecreditmemo/{documentGuid}                  | ✅           |
| CreditMemo by documentNumber | GET /invoice-management/v2/purchasecreditmemo/documentNumber/{documentNumber} | 🚫           |
| Invoice overview list        | GET /invoice-management/v2/purchaseinvoice                                    | 🚫           |
| Invoice by documentId        | GET /invoice-management/v2/purchaseinvoice/{documentGuid}                     | 🚫           |
| Invoice by documentNumber    | GET /invoice-management/v2/purchaseinvoice/documentNumber/{documentNumber}    | 🚫           |

### Order-Management

| Operation                                     | API                                                                    | Implemented |
| --------------------------------------------- | ---------------------------------------------------------------------- | ----------- |
| Get Quote overview list                       | GET /order-management/v2/purchasequote                                 | 🚫           |
| Get Quote by documentId                       | GET /order-management/v2/purchasequote/{documentGuid}                  | 🚫           |
| Get Quote by documentNumber                   | GET /order-management/v2/purchasequote/documentNumber/{documentNumber} | 🚫           |
| Post acceptance for Quote with documentNumber | POST /order-managment/v2/purchasequote/acceptance                      | 🚫           |
| Post reject for Quote with documentNumber     | POST /order-managment/v2/purchasequote/reject                          | 🚫           |
| Post request for a PurchaseOrder              | POST /order-managment/v2/purchaseorder/request                         | 🚫           |

### Product-Management

| Operation                           | API                                                            | Implemented |
| ----------------------------------- | -------------------------------------------------------------- | ----------- |
| Get PriceList Item search           | GET /product-management/v1/pricelist/search/{searchword}       | 🚫           |
| Get PriceList By VendorSkus         | GET /product-management/v1/pricelist/vendor                    | 🚫           |
| Get PriceList By Skus               | GET /product-management/v1/pricelist/skus                      | 🚫           |
| Get PriceList Item Count            | GET /product-management/v1/pricelist/search/count/{searchword} | 🚫           |
| Get all products for a Manufacturer | GET /product-management/v1/pricelist/                          | 🚫           |
| Get List of all Manufacturer names  | GET /product-management/v1/manufacturer                        | 🚫           |

## Credentials

This node uses the **Infinigate API** credential.

You need the API access data provided by Infinigate:

- **Client ID**: Sent as `client_id` to the token endpoint
- **Client Secret**: Sent as `client_secret` to the token endpoint
- **API Key**: Sent as the `API-KEY` header

To configure the credential in n8n:

1. Request the API access data from Infinigate by contacting your Infinigate account manager or support.
1. Create a new **Infinigate API** credential.
2. Enter the **Client ID** provided by Infinigate.
3. Enter the **Client Secret** provided by Infinigate.
4. Enter the **API Key** provided by Infinigate.
5. Save the credential.

The API base URL is `https://api.infinigate.com`
The token request uses `grant_type=client_credentials`. The returned bearer token is then sent together with the `API-KEY` header on API requests.

## Compatibility

This package uses the n8n community node API version 1 and depends on `n8n-workflow`.

No specific minimum n8n version is pinned in this package yet.


## Usage

Add the **Infinigate** node to a workflow and select the **PurchaseCreditMemo** resource.

For **CreditMemo overview list**, no additional parameters are required.

For **CreditMemo by documentId**, provide the **Document Guid** value returned by the overview list or by another Infinigate API response.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Infinigate API request](https://www.infinigate.com/de/services/infinigate-api/)
