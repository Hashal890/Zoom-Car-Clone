import axios from "axios";

export const GetData = (number) => {
  return axios.get(
    `https://harshal-json-mock-server.herokuapp.com/users?number=${number}`
  );
};

export const PostData = ({ name, email, number, password }) => {
  // return axios.post("https://harshal-json-mock-server.herokuapp.com/users", {
  //   name: name,
  //   email: email,
  //   number: number,
  //   password: password,
  // });
  return axios({
    url: `https://harshal-json-mock-server.herokuapp.com/users`,
    method: "POST",
    data: {
      name,
      email,
      number,
      password,
    },
  });
};
