import axios from "axios";

export const GetData = (number) => {
  return axios.get(
    `https://harshal-json-mock-server.herokuapp.com/users?number=${number}`
  );
};

export const PostData = async ({ name, email, number, password }) => {
  // return axios.post("https://harshal-json-mock-server.herokuapp.com/users", {
  //   name: name,
  //   email: email,
  //   number: number,
  //   password: password,
  // });
  let data = await fetch(
    "https://harshal-json-mock-server.herokuapp.com/users",
    {
      method: "POST",
      body: JSON.stringify({ name, email, number, password }),
      headers: { "Content-Type": "application/json" },
    }
  );
  data = await data.json();
  // console.log(data);
};
