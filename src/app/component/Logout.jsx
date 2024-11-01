import { doLogout } from "../actions";

const Logout = () => {
  return (
    <form action={doLogout}>
      <button className="bg-blue-400 my-2 text-white rounded p-1" type="submit">
        Logout
      </button>
    </form>
  );
};

export default Logout;