import React from "react";
import { Link } from "react-router-dom";
import MyLogo from "../component/MyLogo";

const SignIn = () => {
  return (
    <div>
      <MyLogo />
      <h2>로그인</h2>
      <input id="" name="" placeholder="아이디" />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호"
      />
      <button>로그인</button>
      <Link to={"/signup"}>
        <button>회원가입</button>
      </Link>
    </div>
  );
};

export default SignIn;
