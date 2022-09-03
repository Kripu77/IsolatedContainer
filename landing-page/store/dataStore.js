import create from "zustand"
const url = "https://jsonplaceholder.typicode.com/todos/1 ";

export const useMarphaStore = create((set) => ({
  marpha: 22,
  ethereum: 20,
  dataHouse: {},
  fetch: async (url) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    set({ dataHouse: await res.json() });
  },
}));