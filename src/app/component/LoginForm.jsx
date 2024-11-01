"use client";
import SocialLogins from "./SocialLogins";
import { doCredentialLogin } from "../actions";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);

      if (!!response.error) {
      } else {
        router.push("/home");
      }
    } catch (err) {
      throw new Error();
    }
  }
  return (
    <>
      <div></div>
      <form
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
        onSubmit={handleFormSubmit}
      >
        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-300 rounded mt-4 justify-between items-center w-36"
        >
          Login
        </button>
      </form>
      {/* <SocialLogins /> */}
    </>
  );
};

export default LoginForm;
