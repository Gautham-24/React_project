import React from "react";

function TextForm(props) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control"
          id={props.id}
          value={props.text}
          onChange={(event) => {
            props.setText(event.target.value);
          }}
          rows="8"
          readOnly={props.readOnly}
          style={
            props.mode === "dark"
              ? { backgroundColor: "#484848", color: "white" }
              : { backgroundColor: "white", color: "black" }
          }
        ></textarea>
      </div>
    </>
  );
}

export default TextForm;
