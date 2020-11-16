enum HTTPMethod {
  Get = 'GET',
  Post = 'POST',
  Patch = 'PATCH',
  Put = 'PUT',
  Delete = 'DELETE',
}

async function request<T>(url: string, method: HTTPMethod): Promise<T> {
  const result = await fetch(url, {
    method,
  })
  return await result.json()
}

export function get<T>(url: string): Promise<T> {
  return request(url, HTTPMethod.Get)
}
