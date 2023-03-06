// export const config = {
//   runtime: 'edge',
// }

export default async function handler(req) {
 
  
  console.log(req);

  return new Response(req
  )
}