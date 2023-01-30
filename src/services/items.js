import { client, checkError } from './client';

export async function getItems(query) {
    let request = client.from('