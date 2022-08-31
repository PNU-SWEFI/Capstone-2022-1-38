import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
const TextArea = () => {
  const ref = useRef(null);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "38px";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, []);

  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "38px";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, []);

  return (
    <>
      <AutoResizeTextArea
        value={value}
        onChange={onChange}
        rows={1}
        placeholder="Among에 메세지를 남겨보세요."
        ref={ref}
        onInput={handleResizeHeight}
      />
    </>
  );
};
export default TextArea;

const AutoResizeTextArea = styled.textarea`
  resize: none;
  overflow: hidden;
  font-family: "AppleSDGothicNeo", "Noto Sans KR", sans-serif;
  font-weight: 600;
  /* padding: 12px; */
  padding-top: 12px;
  display: block;
  outline: none;
  width: 100%;
  min-height: 38px;
  border-radius: 4px;
  border: none;
  /* caret-color: lightskyblue; */
  box-sizing: border-box;
  line-height: 20px;
  /* &:focus {
    background: azure;
  } */
  &::placeholder {
    font-family: "AppleSDGothicNeo", "Noto Sans KR", sans-serif;
    font-weight: 600;
  }
`;
