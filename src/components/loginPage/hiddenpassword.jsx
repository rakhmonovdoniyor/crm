import React, { useState } from "react";
 
import "../../index.css";
 
function App() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="App">
            
            <div>
                <input className="pass" placeholder="Enter Password"
                    
                    type={
                        showPassword ? "text" : "password"
                    }
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />
               
               
            </div>
            <br />
        </div>
    );
}
 
export default App;