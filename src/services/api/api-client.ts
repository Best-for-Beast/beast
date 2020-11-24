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

export async function post<TBody, TResult>(
  url: string,
  body: TBody
): Promise<TResult> {
  const result = await fetch(url, {
    method: HTTPMethod.Post,
    mode: 'cors',
    body: JSON.stringify(body),
  })
  if (result.status === 204) return (null as unknown) as TResult
  return result.json()
}
