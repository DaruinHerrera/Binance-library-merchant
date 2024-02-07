const crypto = require('crypto');
const axios = require('axios');

// Main function accepting a parameter object
function createBinanceOrder(params) {
  // Extract object parameters
  const {
    apiKey,
    apiSecret,
    baseURL,
    orderExpireTime,
    merchantTradeNo,
    totalFee,
    currency,
    productType,
    productName,
    productDetail,
    webhookUrl,
    returnUrl,
    cancelUrl,
    tradeType,
    orderAmount,
    merchantId
  } = params;

  function hash_signature(query_string) {
    return crypto.createHmac('sha512', apiSecret).update(query_string).digest('hex');
  }

  function random_string() {
    return crypto.randomBytes(32).toString('hex').substring(0, 32);
  }

  function dispatch_request(http_method, path, payload = {}) {
    const timestamp = Date.now();
    const nonce = random_string();
    const payload_to_sign = timestamp + "\n" + nonce + "\n" + JSON.stringify(payload) + "\n";
    const url = baseURL + path;
    const signature = hash_signature(payload_to_sign);
    return axios.create({
      baseURL,
      headers: {
        'content-type': 'application/json',
        'BinancePay-Timestamp': timestamp,
        'BinancePay-Nonce': nonce,
        'BinancePay-Certificate-SN': apiKey,
        'BinancePay-Signature': signature.toUpperCase()
      }
    }).request({
      'method': http_method,
      url,
      data: payload
    });
  }

  // Function to create the order
function create_order() {
    return dispatch_request(
      'POST',
      '/binancepay/openapi/order',
      {
        'orderExpireTime': orderExpireTime,
        'merchantId': merchantId,
        'merchantTradeNo': merchantTradeNo,
        'tradeType': tradeType,
        'orderAmount': orderAmount,
        'totalFee': totalFee,
        'currency': currency,
        'productType': productType,
        'productName': productName,
        'productDetail': productDetail,
        'webhookUrl': webhookUrl,
        'returnUrl': returnUrl,
        'cancelUrl': cancelUrl
      }
    );
  }

  // Call the function to create the order
  return create_order();
}

// Export function for use in other files
module.exports = createBinanceOrder;
