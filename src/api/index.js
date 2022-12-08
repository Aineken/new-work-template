import axios from "axios";

const url =
  "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

export const getPosts = () => axios.get(url);
