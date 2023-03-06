export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
 
  
  console.log(req);

  return new Response(
    JSON.stringify({
      message: req.headers['x-vercel-forwarded-for'],
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}