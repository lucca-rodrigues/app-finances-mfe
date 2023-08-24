export default function getTokenHeaders(token){
  const headers ={
    headers: {
      Authorization: `Bearer Token ${token}`,
    }
  }

  return headers
}