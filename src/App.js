import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Button from "./components/Button";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState("");
  const [output, setOutput] = useState("output");
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#2b2f32";
      document.body.style.color = "white";
      setMode("dark");
      sendAlert("Dark Mode Enabled", "success");
    } else {
      document.body.style.backgroundColor = "#e9ecf2";
      document.body.style.color = "black";
      setMode("light");
      sendAlert("Dark Mode Disabled", "success");
    }
  };
  const sendAlert = (message, type = "success") => {
    console.log(document.getElementById("ta2").value);
    console.log(message, type);
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar user="Gautham" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Alert alert={alert} />
                <div className="container">
                  <TextForm
                    title="enter text here"
                    text={text}
                    setText={setText}
                    readOnly={false}
                    id={"ta1"}
                    mode={mode}
                  />
                  <span className="container">
                    <Button
                      case="upper"
                      mode={mode}
                      sendAlert={sendAlert}
                      text={text}
                      setOutput={setOutput}
                      setText={setText}
                    />
                    <Button
                      case="lower"
                      mode={mode}
                      sendAlert={sendAlert}
                      text={text}
                      setOutput={setOutput}
                      setText={setText}
                    />
                    <Button
                      case="toggle"
                      mode={mode}
                      sendAlert={sendAlert}
                      text={text}
                      setOutput={setOutput}
                      setText={setText}
                    />
                    <Button
                      case="remove"
                      mode={mode}
                      sendAlert={sendAlert}
                      text={text}
                      setOutput={setOutput}
                      setText={setText}
                    />
                    <Button
                      case="copy"
                      mode={mode}
                      sendAlert={sendAlert}
                      text={text}
                      setOutput={setOutput}
                      setText={setText}
                    />
                    <Button
                      case="clear"
                      mode={mode}
                      sendAlert={sendAlert}
                      text={text}
                      setOutput={setOutput}
                      setText={setText}
                    />
                  </span>

                  <div className="container">
                    <TextForm
                      title="output here"
                      text={output}
                      readOnly={true}
                      id="ta2"
                      mode={mode}
                    />
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
