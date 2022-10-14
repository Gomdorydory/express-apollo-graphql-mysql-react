import React, { useRef, useState, useMemo, useEffect } from "react";

import Buttons from "../component/buttons";
import MyLogo from "../component/MyLogo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import MyFooter from "../component/MyFooter";

const House = <FontAwesomeIcon icon={faHouse} />;

const New = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const imgRef = useRef();

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result); //미리보기
      console.log("이미지주소", reader.result);
    };
  };

  //input 대신 사용
  const handleButtonClick = (e) => {
    imgRef.current.click();
  };

  //서버로 보내기

  return (
    <div>
      <MyLogo />
      <div>새글 작성</div>
      <img
        src={imageUrl ? imageUrl : "/img/profile.png"}
        className="img__box"
        style={{ width: "80vw" }}
      ></img>
      <div onClick={handleButtonClick}> 사진 업로드 하기</div>
      <input
        type="file"
        accept="image/*"
        ref={imgRef}
        onChange={onChangeImage}
        style={{ display: "none" }}
      ></input>
      <textarea />
      <Buttons text="완료" />
      <MyFooter />
    </div>
  );
};

export default New;

// const onLoadFile = (e) => {
//   const file = e.target.files;
//   console.log(e.target.files);
//   setImageFile(file);

//   return <img onClick={handleClickFileInput} />;
// };

// const preview = (imageFile) => {
//   if (!imageFile) return false;

//   const imgEL = document.querySelector("img__box");

//   const reader = new FileReader();
//   console.log(reader);

//   reader.onload = () =>
//     (imgEL.style.backgroundImage = "url(${reader.result})");

//   reader.readAsDataURL(imageFile[0]);
// };

// useEffect(() => {
//   preview();

//   return () => preview();
// });

// const handleClickFileInput = (e) => {
//   // const formdata = new FormData();
//   // formdata.append("uploadImage", e.target.files[0]);

//   // const config = {
//   //   Headers: {
//   //     "content-type": "multipart/form-data",
//   //   },
//   // };

//   // // axios.post('api', formdata, config) 이부분 내가 쓰는 걸로 바꾸기(백에 전송하기 부분임)
//   fileInputRef.current.click();
// };
