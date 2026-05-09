// Netlify Function for DoH proxy
// Place this file at: netlify/functions/doh-proxy/doh-proxy.js

export async function handler(event, context) {
  try {
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
    
    // Fetch from the target DoH server
    const response = await fetch(targetUrl);
    const body = await response.text();
    
    // Return response with CORS headers
    return {
      statusCode: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Accept, Content-Type',
        'Content-Type': response.headers.get('Content-Type') || 'application/json'
      },
      body
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