import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function Auth({
  registerUsername,
  registerPassword,
  registerConfirmPassword,
  registerEmail,
  emailOrUsername,
  loginPassword,
  isSuccessfullyRegistered,
  isSuccessfullyLoggedIn,
  loginError,

  loginUser,
  registerUser,
  setRegisterUsername,
  setRegisterPassword,
  setRegisterConfirmPassword,
  setRegisterEmail,
  setEmailOrUsername,
  setLoginPassword,
}) {
  const [isSignup, setIsSignup] = useState(false);

  const toggleMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const signUp = (e) => {
    // Prevents the page from reloading
    e.preventDefault();
    registerUser({
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
      confirm: registerConfirmPassword,
    });
  };

  const signIn = (e) => {
    // Prevents the page from reloading
    e.preventDefault();
    loginUser({
      email: emailOrUsername,
      password: loginPassword,
    });
  };

  return (
    <div className="Auth">
      {isSuccessfullyRegistered && <Navigate to="/auth" />}
      {isSuccessfullyLoggedIn && <Navigate to="/" />}
      {isSignup ? (
        <div className="Auth__container">
          <h2 className="Auth__title">Inscription</h2>
          <form className="Auth__container__form">
            {/** USERNAME */}
            <label className="Auth__container__form__label" htmlFor="username">
              Nom d'utilisateur
            </label>
            <input
              className="Auth__container__form__input"
              name="username"
              type="text"
              placeholder="Nom d'utilisateur"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            {/** EMAIL */}
            <label className="Auth__container__form__label" htmlFor="email">
              Email
            </label>
            <input
              className="Auth__container__form__input"
              name="email"
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            {/** PASSWORD */}
            <label className="Auth__container__form__label" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="Auth__container__form__input"
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            {/** PASSWORD CONFIRM */}
            <label className="Auth__container__form__label" htmlFor="confirm">
              Confirmer le mot de passe
            </label>
            <input
              className="Auth__container__form__input"
              name="confirm"
              type="password"
              placeholder="Confirmer le mot de passe"
              value={registerConfirmPassword}
              onChange={(e) => setRegisterConfirmPassword(e.target.value)}
            />
            {/** SUBMIT */}
            <button
              className="button blue Auth__container__form__submit"
              type="submit"
              onClick={signUp}>
              S'inscrire
            </button>
          </form>
          <p className="Auth__container__disclaimer">
            Vous avez déjà un compte ?{" "}
            <span
              className="Auth__container__disclaimer__highlight"
              onClick={toggleMode}>
              Connectez-vous
            </span>
          </p>
        </div>
      ) : (
        <div className="Auth__container">
          <h2 className="Auth__title">Connexion</h2>
          <form className="Auth__container__form">
            {/** EMAIL */}
            <label className="Auth__container__form__label" htmlFor="username">
              Adresse email
            </label>
            <input
              className={`Auth__container__form__input ${
                loginError.isEmailInvalid && "errored"
              }`}
              name="username"
              type="username"
              placeholder="Email"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
            />
            {/** PASSWORD */}
            <label className="Auth__container__form__label" htmlFor="password">
              Mot de passe
            </label>
            <input
              className={`Auth__container__form__input ${
                loginError.isPasswordInvalid && "errored"
              }`}
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            {/** ERROR */}
            <div className="Auth__container__form__error">
              {loginError.isEmailInvalid && (
                <p className="Auth__container__form__error__message">
                  L'adresse email que vous avez entrée ne correspond à aucun
                  compte.
                </p>
              )}
              {loginError.isPasswordInvalid && (
                <p className="Auth__container__form__error__message">
                  Le mot de passe que vous avez entré n'est pas correct.
                </p>
              )}
            </div>
            {/** SUBMIT */}
            <button
              className="button blue Auth__container__form__submit"
              type="submit"
              onClick={signIn}>
              Se connecter
            </button>
          </form>
          <p className="Auth__container__disclaimer">
            Vous n'avez pas encore de compte ?{" "}
            <span
              className="Auth__container__disclaimer__highlight"
              onClick={toggleMode}>
              Inscrivez-vous
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
