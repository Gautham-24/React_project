import React from "react";

export default function Button(props) {
  var la = null;
  var txt = props.text;
  switch (props.case) {
    case "upper":
      la = "Upper Case";
      break;
    case "lower":
      la = "Lower Case";
      break;
    case "toggle":
      la = "Toggle Case";
      break;
    case "remove":
      la = "Remove White Spaces";
      break;
    case "copy":
      la = "Copy Output";
      break;
    case "clear":
      la = "Clear";
      break;
    default:
      la = "lower";
  }

  return (
    <>
      <button
        className={`btn btn-${
          props.mode === "light" ? "primary" : "secondary"
        } mx-2`}
        onClick={() => {
          if (txt !== "") {
            if (props.case === "upper") {
              props.setOutput(txt.toUpperCase());
              props.sendAlert("Converted to Upper Case", "success");
            } else if (props.case === "lower") {
              props.setOutput(txt.toLowerCase());
              props.sendAlert("Converted to Lower Case", "success");
            } else if (props.case === "toggle") {
              function toggleCase(str) {
                let toggledStr = "";
                for (let i = 0; i < str.length; i++) {
                  let char = str[i];
                  if (char === char.toUpperCase()) {
                    toggledStr += char.toLowerCase();
                  } else {
                    toggledStr += char.toUpperCase();
                  }
                }
                return toggledStr;
              }
              props.setOutput(toggleCase(txt));
              props.sendAlert("Toggled Case", "success");
            } else if (props.case === "remove") {
              props.setOutput(txt.split(/[ ]+/).join(" "));
              props.sendAlert("Removed White Spaces", "success");
            } else if (props.case === "copy") {
              navigator.clipboard.writeText(
                document.getElementById("ta2").value
              );
              props.sendAlert("Text Copied To Clipboared", "success");
            } else if (props.case === "clear") {
              props.setOutput("");
              props.setText("");
              props.sendAlert("Cleared", "success");
            }
          } else {
            props.sendAlert("Enter Text", "warning");
          }
        }}
      >
        {la}
      </button>
    </>
  );
}
