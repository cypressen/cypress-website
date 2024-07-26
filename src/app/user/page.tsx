import { getUsers } from "@/lib/data";

const UserHomePage = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>User Home Page</h1>
    </div>
  );
};
export default UserHomePage;
