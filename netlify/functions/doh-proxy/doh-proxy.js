// Netlify Function for DoH proxy
// Place this file at: netlify/functions/doh-proxy/doh-proxy.js

export async function handler(event, context) {
  try {
    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept'
        },
        body: ''
      };
    }

    // Get URL from query parameter
    const { url } = event.queryStringParameters || {};
    
    if (!url) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Missing url parameter' })
      };
    }

    // Decode the URL
    const targetUrl = decodeURIComponent(url);

    // Validate URL
    if (!targetUrl.startsWith('https://')) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Invalid URL' })
      };
    }

    // Prepare fetch options
    const fetchOptions = {
      method: event.httpMethod,
      headers: {}
    };

    // Copy headers from request
    if (event.headers['content-type']) {
      fetchOptions.headers['Content-Type'] = event.headers['content-type'];
    }
    if (event.headers['accept']) {
      fetchOptions.headers['Accept'] = event.headers['accept'];
    }

    // Handle POST body (for wire format)
    if (event.httpMethod === 'POST' && event.body) {
      // Base64 decode the body (Netlify encodes binary data as base64)
      const binaryBody = Buffer.from(event.body, 'base64');
      fetchOptions.body = binaryBody;
    }

    // Fetch from the target DoH server
    const response = await fetch(targetUrl, fetchOptions);
    
    // Get response body as Buffer for binary data
    const responseBuffer = await response.arrayBuffer();
    const responseBody = Buffer.from(responseBuffer);

    // Return response with CORS headers
    return {
      statusCode: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
        'Content-Type': response.headers.get('Content-Type') || 'application/dns-message'
      },
      body: responseBody.toString('base64'),
      isBase64Encoded: true
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: error.message })
    };
  }
}