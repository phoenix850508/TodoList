import axios from 'axios';

const baseUrl = 'http://localhost:3001';
export const getTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (error) {
    console.error('[Get Todo error fail] :', error);
  }
};
export const createTodo = async (payload) => {
  try {
    const { title, isDone } = payload;
    const res = await axios.post(`${baseUrl}/todos`, { title, isDone });
    return res.data;
  } catch (error) {
    console.error('[Post Todo error fail] :', error);
  }
};
export const patchTodo = async (payload) => {
  try {
    const { id, title, isDone } = payload;
    const res = axios.patch(`${baseUrl}/todos/${id}`, { title, isDone });
    return res.data;
  } catch (error) {
    console.error('[Patch Todo error fail] :', error);
  }
};
export const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error('[Delete Todo error fail] :', error);
  }
};
