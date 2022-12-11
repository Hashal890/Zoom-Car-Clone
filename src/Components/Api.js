import axios from "axios";

export const GetData = (number) => {
  return axios.get(
    `https://jsonmockserver.cyclic.app/user?number=${number}`
  );
};

export const PostData = async ({ name, email, number, password }) => {
  // return axios.post("https://jsonmockserver.cyclic.app/user", {
  //   name: name,
  //   email: email,
  //   number: number,
  //   password: password,
  // });
  let data = await fetch(
    "https://jsonmockserver.cyclic.app/user",
    {
      method: "POST",
      body: JSON.stringify({ name, email, number, password }),
      headers: { "Content-Type": "application/json" },
    }
  );
  data = await data.json();
  // console.log(data);
};
