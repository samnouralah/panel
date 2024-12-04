import { useState } from "react";
// import "./login.css";
import axios from "axios";

function Login() {
  const [valueLogin, setValueLogin] = useState({
    phone_number: "",
    password: "",
  });

  const handelChangeDate = (event) => {
    setValueLogin((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handelLogin = () => {
    console.log("login");
    // https://web.finnro.ir/accounts/w/login/
    axios.post("https://web.finnro.ir/accounts/w/login/", {
      password: "1234nick",
      phone_number: "09944576853",
    });
  };

  return (
    <section>
      <form className="box-login vazir">
        <h1>خوش آمدید</h1>

        <label htmlFor="phone-number"> شمار مبایل: </label>
        <input
          type="number"
          id="phone-number"
          name="phone_number"
          onChange={handelChangeDate}
        />

        <label htmlFor="password">رمز عبور: </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handelChangeDate}
        />

        <button type="button" onClick={handelLogin}>
          ورود
        </button>
      </form>
      <span className="loader"></span>
    </section>
  );
}

export default Login;
