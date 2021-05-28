import React from "react";
import useFetchData from "./CustomHook";

export default function Users() {
    const [ users, setUsers,loading] = useFetchData([],"https://jsonplaceholder.typicode.com/users")
  return (
    <div>
        {loading ? "loading ........": users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        );
      }) }
     
    </div>
  );
}
