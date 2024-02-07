# Binance Payment API Integration Guide

This document provides comprehensive instructions on integrating your application with the Binance Payment API using the provided library.

## Introduction

This library facilitates the integration of your application with the Binance Payment API, allowing you to create and manage cryptocurrency payment orders seamlessly.

## Prerequisites

Before you start integrating with the Binance Payment API, make sure you have the following:

- Binance API Key and Secret
- Binance Merchant ID
- Product information
- Webhook URL for receiving order status notifications
- Return, Cancel, and Callback URLs for user interactions
- Node.js installed (for JavaScript usage)


## Usage

Import the library into your application:

- Call the library where the function is located


## Configuration
Prepare the order parameters required for creating a Binance order

Example: 
``` 
const binanceOrderParams = {
    apiKey :'string',
    baseURL : 'string',
    orderExpireTime : long,
    merchantTradeNo : 'string',
    totalFee : 'string',
    currency : 'string',
    productType : 'string',
    productName : 'string',
    productDetail : 'string',
    apiSecret : 'string',
    webhookUrl : 'string',
    returnUrl : 'string',
    cancelUrl : 'string',
    tradeType: 'string',
    orderAmount : decimal,
    merchantId : 'string',
};
```

- Call the function and send the parameters

## Response Examples

### Pay Link Expire

- Example of response when payment link expired
``` 
 "body": {
    "bizType": "PAY",
    "data": 
      {
        "merchantTradeNo":"6887546555698",
        "productType":"Payment Order",
        "productName":"Payment Order",
        "transactTime":1707150618251,
        "tradeType":"APP",
        "totalFee":0.10000000,
        "currency":"USDT"
      },
    "bizIdStr": "277689257307807744",
    "bizId": 277689257307807740,
    "bizStatus": "PAY_CLOSED",
  }
```
