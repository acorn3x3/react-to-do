import { checkError, client } from './client.js';

export async function createItem(name, complete) {
  return await client.from('todos').insert({ name, complete }).single();
}

export async function getItem() {
  const response = await client.from('todos').select('*');
  return checkError(response);
}

export async function toggleListItem({ id, complete }) {
  const response = await client
    .from('todos')
    .update({ complete: !complete })
    .match({ id })
    .single();

  return checkError(response);
}
