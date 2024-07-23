import Image from "next/image";
import User from "./components/Users";

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()

  return data
}


export default async function Home() {
  const users = await fetchUsers()
  console.log('data :', users.data)

  return (
    <>
      {users.data.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}