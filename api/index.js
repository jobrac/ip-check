export const config = {
  runtime: 'edge',
}

export default (req) => {
  
  console.log(req);

  return {
    "message" : "helloworld"
  }
}