import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import MySubmit from "../components/UI/button/MySubmit";
import MyInput from "../components/UI/input/MyInput";
import MySelect from "../components/UI/select/MySelect";
import TextHeader from "../components/UI/textHeader/TextHeader";
import MyDisabledSubmit from "../components/UI/button/MyDisabledSubmit";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../services/AuthService";
import Loader from "../components/UI/Loader/Loader";
import WhiteHeader from "../components/UI/textHeader/WhiteHeader";
import { Utils } from "../utils/utils";

export default function Registration() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [connectionEmail, setConnectionEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [regions, setRegions] = useState([
    { value: "Արագածոտն", key: 1 },
    { value: "Արարատ", key: 2 },
    { value: "Արմավիր", key: 3 },
    { value: "Գեղարքունիք", key: 4 },
    { value: "Կոտայք", key: 5 },
    { value: "Լոռի", key: 6 },
    { value: "Սյունիք", key: 7 },
    { value: "Վայոց ձոր", key: 8 },
    { value: "Երևան", key: 9 },
    { value: "Տավուշ", key: 10 },
  ]);
  const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [loginError, setLoginError] = useState("Email-ը չի կարող լինել դատարկ");
  const [passwordError, setPasswordError] = useState(
    "Գաղտնաբառը չի կարող լինել դատարկ"
  );
  const [confirmPasswordError, setConfirmPasswordError] = useState(true);
  const [firstNameError, setFirstNameError] = useState("Լրացրեք դաշտը");
  const [lastNameError, setLastNameError] = useState("Լրացրեք դաշտը");
  const [phoneError, setPhoneError] = useState(
    "Լրացրեք դաշտը։Օրինակ՝ 099999999"
  );
  const [regionError, setRegionError] = useState("Ընտրեք համայնքը");
  const [connectionEmailError, setConnectionEmailError] = useState(
    "Email կապնվելու համար"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (
      loginError ||
      passwordError ||
      confirmPasswordError ||
      regionError ||
      firstNameError ||
      lastNameError ||
      regionError ||
      phoneError ||
      connectionEmailError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    loginError,
    passwordError,
    confirmPasswordError,
    regionError,
    firstNameError,
    lastNameError,
    connectionEmailError,
    phoneError,
  ]);

  const loginHandler = (e) => {
    setLogin(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLoginError("Սխալ email");
    } else {
      setLoginError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 15) {
      setPasswordError("Գաղտնաբառը պետք է լինի մեծ 6-ից և փոքր 15-ից");
      if (!e.target.value) {
        setPasswordError("Գաղտնաբառը չի կարող լինել դատարկ");
      }
    } else {
      setPasswordError("");
    }
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    if (e.target.value.length < 9 || e.target.value.length > 9) {
      setPhoneError("9 նիշ");
      if (!e.target.value) {
        setPhoneError("Դաշտը չի կարող լինել դատարկ");
      }
    } else {
      setPhoneError("");
    }
  };
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (!e.target.value) {
      setFirstNameError("Լրացրրեք դաշտը");
    } else {
      setFirstNameError("");
    }
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (!e.target.value) {
      setLastNameError("Լրացրրեք դաշտը");
    } else {
      setLastNameError("");
    }
  };
  const connectionEmailHandler = (e) => {
    setConnectionEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setConnectionEmailError("Սխալ email");
    } else {
      setConnectionEmailError("");
    }
  };

  const Registration = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const date = Utils.getMyDate;
    const response = await AuthService.registration(
      login,
      password,
      firstName,
      lastName,
      region,
      connectionEmail,
      phone,
      date
    );
    console.log(response.data);
    localStorage.setItem("token", response.data.accessToken);
    dispatch({ type: "SAVE_USER", payload: response.data.user });
    dispatch({ type: "CHANGE_AUTH", payload: !isAuth });
    setIsLoading(false);
    navigate("/home");
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="main">
      <form onSubmit={Registration} className="registration_form">
        <div className="registration">
          <div className="registration_container1">
            <WhiteHeader text="ԱրմՄարկետ" />

            <div className="reg_container">
              <div>
                <TextHeader text="Գրանցվել" />
              </div>
            </div>

            <div className="reg_container">
              <MyInput
                value={login}
                inputname="Email"
                onChange={(e) => loginHandler(e)}
                type="text"
                placeholder="Մուտքագրեք Ձեր email-ը..."
              />
              <div className="input_error">{loginError}</div>
            </div>
            <div className="reg_container">
              <MyInput
                value={password}
                inputname="Գաղտնաբառ"
                onChange={(e) => passwordHandler(e)}
                type="password"
                placeholder="Մուտքագրեք Ձեր գաղտնաբառը..."
              />
              <div className="input_error">{passwordError}</div>
            </div>
            <div className="reg_container_icon">
              <div style={{ width: "70%", height: "100%" }}>
                <MyInput
                  value={confirmPassword}
                  inputname="Կրկնել գաղտնաբառը"
                  onChange={(e) => confirmPasswordHandler(e)}
                  type="password"
                  placeholder="Կրկնեք Ձեր գաղտնաբառը..."
                />
              </div>

              <div
                style={{
                  height: "55%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                {confirmPasswordError ? (
                  <img
                    src="/img/remove.svg"
                    width={"80%"}
                    height={"50%"}
                    alt="checked"
                  />
                ) : (
                  <img
                    src="/img/check.svg"
                    width={"80%"}
                    height={"50%"}
                    alt="checked"
                  />
                )}
              </div>
            </div>
            <div className="reg_container">
              <MySelect
                options={regions}
                defaultValue="Համայնքներ"
                setRegionError={setRegionError}
                value={region}
                setValue={setRegion}
              />
              <div className="input_error">{regionError}</div>
            </div>
          </div>
          <div className="registration_container2">
            <div className="reg_container"></div>
            <div style={{ display: "flex", width: "100%", height: "20%" }}>
              <div className="reg_container_name">
                <MyInput
                  value={firstName}
                  inputname="Անուն"
                  onChange={(e) => firstNameHandler(e)}
                  type="text"
                  placeholder="Ձեր անունը..."
                />
                <div className="input_error">{firstNameError}</div>
              </div>
              <div className="reg_container_last_name">
                <MyInput
                  value={lastName}
                  inputname="Ազգանուն"
                  onChange={(e) => lastNameHandler(e)}
                  type="text"
                  placeholder="Ձեր ազգանունը..."
                />
                <div className="input_error">{lastNameError}</div>
              </div>
            </div>

            <div className="reg_container">
              <MyInput
                value={connectionEmail}
                inputname="Email կապի համար"
                onChange={(e) => connectionEmailHandler(e)}
                type="text"
                placeholder="Մուտքագրեք email կապի համար..."
              />
              <div className="input_error">{connectionEmailError}</div>
            </div>
            <div className="reg_container">
              <MyInput
                value={phone}
                inputname="Հեռախոսի համար"
                onChange={(e) => phoneHandler(e)}
                type="text"
                placeholder="Մուտքագրեք հեռախոսահամար..."
              />
              <div className="input_error">{phoneError}</div>
            </div>
            <div className="reg_to_log">
              {formValid ? (
                <div className="reg_submit_container">
                  <MySubmit onSubmit={Registration} type="submit">
                    Գրանցվել
                  </MySubmit>
                </div>
              ) : (
                <div className="reg_submit_container">
                  <MyDisabledSubmit>Գրանցվել</MyDisabledSubmit>
                </div>
              )}

              <div className="login_registration">
                <h6 style={{ color: "green", marginRight: "10px" }}>
                  Գրանցված եք՞
                </h6>
                <div className="go_to_log_reg">
                  <Link to={"/login"}>
                    <MyButton>Մուտք</MyButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
