import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthenticationService from "../services/authentication-service";

type Field = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  username: Field;
  password: Field;
};

const Login: FunctionComponent = () => {
  const history = useHistory();

  const [form, setForm] = useState<Form>({
    username: { value: "" },
    password: { value: "" },
  });

  const [message, setMessage] = useState<string>(
    "Vous êtes déconnecté. (pikachu / pikachu)"
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField });
  };

  const validateForm = () => {
    let newForm: Form = form;

    if (form.username.value.length < 3) {
      const errorMsg: string =
        "Votre prénom doit faire au moins 3 caractères de long.";
      newForm = {
        ...newForm,
        username: { ...form.username, error: errorMsg, isValid: false },
      };
    } else {
      newForm = {
        ...newForm,
        username: { ...form.username, error: "", isValid: true },
      };
    }

    if (form.password.value.length < 6) {
      const errorMsg: string =
        "Votre mot de passe doit faire au moins 6 caractères de long.";
      newForm = {
        ...newForm,
        password: { ...form.password, error: errorMsg, isValid: false },
      };
    } else {
      newForm = {
        ...newForm,
        password: { ...form.password, error: "", isValid: true },
      };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setMessage("👉 Tentative de connexion en cours ...");
      AuthenticationService.login(
        form.username.value,
        form.password.value
      ).then((isAuthenticated) => {
        if (!isAuthenticated) {
          setMessage("🔐 Identifiant ou mot de passe incorrect.");
          return;
        }
        history.push("/pokemons");
      });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-stacked">
              <div className="card-content">
                {message && (
                  <div className="card-panel grey lighten-5">{message}</div>
                )}
                <div className="form-group">
                  <label htmlFor="username">Identifiant</label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    value={form.username.value}
                    onChange={(e) => handleInputChange(e)}
                  />
                  {form.username.error && (
                    <div className="card-panel red accent-1">
                      {form.username.error}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={form.password.value}
                    onChange={(e) => handleInputChange(e)}
                  />
                  {form.password.error && (
                    <div className="card-panel red accent-1">
                      {form.password.error}
                    </div>
                  )}
                </div>
              </div>
              <div className="card-action center">
                <button type="submit" className="btn">
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
