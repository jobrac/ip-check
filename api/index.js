export default async function handler(req) {
 

  return new Response(
    JSON.stringify({
      message: ['true-client-ip'] || req.headers['X-Forwarded-For'] || req.url,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}