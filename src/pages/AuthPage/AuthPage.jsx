import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
// import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc";

export default function AuthPage({setUser}) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser}/>
      {/* <SignUpFormFunc /> */}
      <LogInForm setUser={setUser}/>
    </main>
  );
}
