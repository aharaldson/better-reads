import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";

export default function AuthPage({setUser}) {
  return (
    <main>
      <h1>Log In or Sign Up</h1>
      <div className="auth-form-container">
        <SignUpForm setUser={setUser}/>
        <LogInForm setUser={setUser}/>
      </div>
    </main>
  );
}
