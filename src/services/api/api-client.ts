enum HTTPMethod {
  Get = 'GET',
  Post = 'POST',
  Patch = 'PATCH',
  Put = 'PUT',
  Delete = 'DELETE',
}

export async function get<T>(url: string): Promise<T> {
  const result = await fetch(url, {
    method: HTTPMethod.Get,
  })
  return result.json()
}

export async function post<T>(url: string, body: T): Promise<void> {
  await fetch(url, {
    method: HTTPMethod.Post,
    body: JSON.stringify(body),
  })
}
