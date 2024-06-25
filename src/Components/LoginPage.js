import React, { useRef } from "react";

function LoginPage() {
  let userInputRef = useRef();
  let passwordInputRef = useRef();
  let userSpanRef = useRef();
  let passwordSpanRef = useRef();
  const nameRegex = /^[A-Za-z ]{2,20}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/;
  let paraRef = useRef();
  //   let validName;
  //   let validPass;
  //   console.log(validName)

  let nameValidationFn = (inputRef, spanRef) => {
    let validName = nameRegex.test(inputRef.current.value);
    if (validName == true) {
      spanRef.current.style.backgroundColor = "palegreen";
      //   validName = "VALID!";
      spanRef.current.innerHTML = "VALID!";
    } else {
      spanRef.current.innerHTML = "INVALID!";
      spanRef.current.style.backgroundColor = "gray";
    }
  };

  let passwordValidationFn = (inputRef, spanRef) => {
    let validPassword = passwordRegex.test(inputRef.current.value);
    if (validPassword == true) {
      //   validPass = "VALID!";
      spanRef.current.innerHTML = "VALID!";
      spanRef.current.style.backgroundColor = "palegreen";
    } else {
      spanRef.current.innerHTML = "INVALID!";
      spanRef.current.style.backgroundColor = "gray";
    }
  };
  //   validName == "VALID!" && validPass == "VALID!"
  let paraFn = (inputRef, passwRef, para) => {
    let validName1 = nameRegex.test(inputRef.current.value);
    let validPassword1 = passwordRegex.test(passwRef.current.value);
    if (validName1 == true && validPassword1 == true) {
      para.current.innerHTML = "Thankyou!";
      para.current.style.color = "#06D001";
    } else {
      para.current.innerHTML = "Please enter correct deatils.";
      para.current.style.color = "#FF0000";
    }
  };

  return (
    <div>
      <div>
        <h1>Reacts.com</h1>
        <form className="form">
          <marquee> <h2>Login to your  account</h2></marquee>
          <div>
            <div>
              <label>USER NAME:</label>
              <input
                type="text"
                ref={userInputRef}
                onChange={() => {
                  nameValidationFn(userInputRef, userSpanRef);
                }}
              ></input>
              <span ref={userSpanRef}></span>
            </div>
            <div>
              <label>ENTER PASSWORD:</label>
              <input
                ref={passwordInputRef}
                onChange={() => {
                  passwordValidationFn(passwordInputRef, passwordSpanRef);
                }}
              ></input>
              <span ref={passwordSpanRef}></span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              paraFn(userInputRef, passwordInputRef, paraRef);
            }}
          >
           
            Login
          </button>
          <p ref={paraRef}></p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
