import "./Login.scss";

// Components import
import { CTAButton } from "../../components/CTAButton/CTAButton";
import { TextInput } from "../../components/TextInput/TextInput";

export const Login = () => {
  const handleConnect = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // CONNECTION TO BE HANDLE HERE
    // Once the token is received, at Tucoenergie we use to store it in the redux store in the userAuthInfo key.
    // It will allow the user to be redirected to the Products page (cf. Navigation.tsx file)
    // If you are not familar with Redux, feel free to use any other solution to store the token.
  };

  return (
    <div className="Login">
      <form className="Login__Form" onSubmit={handleConnect}>
        <div className="Login__Inputs">
          <TextInput placeholder="Email *" />
          <TextInput placeholder="Mot de passe *" type="password" />
        </div>
        <div className="Login__Button">
          <CTAButton name="Connexion" type="submit" />
        </div>
      </form>
    </div>
  );
};
