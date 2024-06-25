import React, { useRef } from "react";

function MyMarks() {
  let englishMarksInputRef = useRef();
  let teluguMarksInputRef = useRef();
  let hindiMarksInputRef = useRef();
  let mathsMarksInputRef = useRef();
  let scienceMarksInputRef = useRef();
  let socialMarksInputRef = useRef();
  let engSpanRef = useRef();
  let telSpanRef = useRef();
  let hinSpanRef = useRef();
  let matSpanRef = useRef();
  let sciSpanRef = useRef();
  let socSpanRef = useRef();
  let paraRef = useRef();
  let marksOnChange = (inputRef, spanRef) => {
    let marksvalid =
      inputRef.current.value >= 0 && inputRef.current.value <= 100;
    if (marksvalid == true) {
      if (inputRef.current.value >= 35) {
        spanRef.current.innerHTML = "PAASED";
        spanRef.current.style.backgroundColor = "palegreen";
      } else {
        spanRef.current.innerHTML = "FAILED!";
        spanRef.current.style.backgroundColor = "red";
      }
    } else {
      spanRef.current.innerHTML = "INVALID!";
      spanRef.current.style.backgroundColor = "gray";
    }
  };
  let totalResult = (para) => {
    let total =
      Number(englishMarksInputRef.current.value) +
      Number(teluguMarksInputRef.current.value) +
      Number(hindiMarksInputRef.current.value) +
      Number(mathsMarksInputRef.current.value) +
      Number(scienceMarksInputRef.current.value) +
      Number(socialMarksInputRef.current.value);
    let percentage = ((total / 600) * 100).toFixed(0);
    if (
      Number(englishMarksInputRef.current.value) >= 35 &&
      Number(teluguMarksInputRef.current.value) >= 35 &&
      Number(hindiMarksInputRef.current.value) &&
      Number(mathsMarksInputRef.current.value) &&
      Number(scienceMarksInputRef.current.value) &&
      Number(socialMarksInputRef.current.value)
    ) {
      para.current.innerHTML = `YOUR'E PAASED IN ALL SUBJECTS WITH TOTAL MARKS OF  ${total} & PERCENTAGE IS ${percentage}%.`;
      para.current.style.color = "#06D001";
    } else {
      para.current.innerHTML = `SORRY TO SAY YOUR'E FAILED! MARKS  ${total} & PERCENTAGE IS ${percentage}% .`;
      para.current.style.color = "#FF0000";
    }
  };
  //   return functions
  let marks = (e, t, h, m, s, so) => {
    let total = e + t + h + s + so + m;
    let perc = ((total / 600) * 100).toFixed(2);
    let remarks;
    if (e > 34 && t > 34 && m > 34 && s > 34 && so > 34 && h > 34) {
      remarks = "passed!";
    } else {
      remarks = "failed!";
    }
    let finalResult = { ttl: total, percen: perc, pof: remarks };
    return finalResult;
  };
  let pavanResult = marks(1, 2, 3, 3, 3, 3);
  console.log(pavanResult);
  let rameshResult = marks(40, 80, 88, 99, 55, 66);
  console.log(rameshResult);

  return (
    <div>
      <div>
        <form>
          <marquee>
            {" "}
            <h2>***Check your overall result with percentage*** </h2>
          </marquee>
          <div>
            <label>EnglishMarks</label>
            <input
              type="number"
              ref={englishMarksInputRef}
              onChange={() => {
                marksOnChange(englishMarksInputRef, engSpanRef);
              }}
            ></input>
            <span ref={engSpanRef}></span>
          </div>
          <div>
            <label>TeluguMarks</label>
            <input
              type="number"
              ref={teluguMarksInputRef}
              onChange={() => {
                marksOnChange(teluguMarksInputRef, telSpanRef);
              }}
            ></input>
            <span ref={telSpanRef}></span>
          </div>
          <div>
            <label>HindiMarks</label>
            <input
              type="number"
              ref={hindiMarksInputRef}
              onChange={() => {
                marksOnChange(hindiMarksInputRef, hinSpanRef);
              }}
            ></input>
            <span ref={hinSpanRef}></span>
          </div>
          <div>
            <label>MathsMarks</label>
            <input
              type="number"
              ref={mathsMarksInputRef}
              onChange={() => {
                marksOnChange(mathsMarksInputRef, matSpanRef);
              }}
            ></input>
            <span ref={matSpanRef}></span>
          </div>
          <div>
            <label>ScienceMarks</label>
            <input
              type="number"
              ref={scienceMarksInputRef}
              onChange={() => {
                marksOnChange(scienceMarksInputRef, sciSpanRef);
              }}
            ></input>
            <span ref={sciSpanRef}></span>
          </div>
          <div>
            <label>SocialMarks</label>
            <input
              type="number"
              ref={socialMarksInputRef}
              onChange={() => {
                marksOnChange(socialMarksInputRef, socSpanRef);
              }}
            ></input>
            <span ref={socSpanRef}></span>
          </div>
          <button
            type="button"
            onClick={() => {
              totalResult(paraRef);
            }}
          >
            Result
          </button>
          <p ref={paraRef}></p>
        </form>
      </div>
    </div>
  );
}

export default MyMarks;
