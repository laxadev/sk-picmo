/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error }) {
  
  return {
    message: error.message ?? 'Whoops!',
    code: error.code ?? 'UNKNOWN',
    stack: error.stack
  };
}