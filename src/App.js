import './App.css';
import {Button} from "./stories/Button";
import React from "react";
import {Header} from "./stories/Header";
import {Primary, Secondary, Success, Large, Medium, Small} from "./stories/Button.stories"
import {H1, H2, H3, H4, H5, H6} from "./stories/Text.stories"
import {Text} from "./stories/Text";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="App">
        <Header user={{ name: "Sahil Akbari"}} onLogin={()=>{console.log("clicked on login button!")}} onLogout={()=>console.log("clicked on logout button!")} onCreateAccount={()=>{console.log("clicked on create account button!")}} />
      <Button {...Primary.args} onClick={()=>console.log("clicked on Primary Button!")} />
      <Button {...Secondary.args} onClick={()=>console.log("clicked on Secondary Button!")} />
      <Button {...Success.args} onClick={()=>console.log("clicked on Success Button!")} />
      <Button {...Large.args} onClick={()=>console.log("clicked on Large Button!")} />
      <Button {...Medium.args} onClick={()=>console.log("clicked on Medium Button!")} />
      <Button {...Small.args} onClick={()=>console.log("clicked on Small Button!")} />

        <br/>
      <Text {...H1.args} />
      <Text {...H2.args} />
      <Text {...H3.args} />
      <Text {...H4.args} />
      <Text {...H5.args} />
      <Text {...H6.args} />
      <h1>TEXT</h1>
        <br/><br/>

        <Stack>
            {[0,1,2,3,4,5,6,8].map(n => (
                <div
                    style={{
                        width: "55px",
                        height: "56px",
                        padding: "2px",
                        backgroundColor: "red"
                    }}
                >
                    {n+1}
                </div>
            ))}
        </Stack>
    </div>
  );
}

export default App;
