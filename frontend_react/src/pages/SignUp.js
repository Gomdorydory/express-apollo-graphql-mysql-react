import React from "react";
import MyLogo from "../component/MyLogo";

const SigUp = () => {
  return (
    <div>
      <MyLogo />
      <h2>회원가입</h2>
      <input id="" name="" placeholder="아이디" />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호"
      />
      <button>로그인</button>
    </div>
  );
};

export default SigUp;
