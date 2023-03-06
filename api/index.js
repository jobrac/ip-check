export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
 

  return new Response(
    JSON.stringify({
      message: req.headers['x-forwarded-for'],
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}