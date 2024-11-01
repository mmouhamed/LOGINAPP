import LoginForm from "./component/LoginForm";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4 ">
      <h1 className="text-3xl my-3">Hey, time to Sign in</h1>
      <LoginForm />
    </div>
  );
}
