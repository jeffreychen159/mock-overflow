import "./index.css";
import { useState } from "react";
import Signup from "./signup"

const Header = ({ search, setQuestionPage }) => {
    const [val, setVal] = useState(search);

    return (
        <div id="header" className="header">
            <div></div>
            <div className="title">Fake Stack Overflow</div>
            <input
                id="searchBar"
                placeholder="Search ..."
                type="text"
                value={val}
                onChange={(e) => {
                    setVal(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        setQuestionPage(e.target.value, "Search Results");
                    }
                }}
            />
            <div id="login" className="login_btn_group">
                <button
                    className="bluebtn"
                    id="signupbtn"
                    onClick={() => {
                        signupPage( setQuestionPage );
                    }}> 
                        Signup
                </button>
                <button
                    className="bluebtn"
                    id="loginbtn"
                    onClick={() => {
                        // loginPage();
                    }}> 
                        Login
                </button>
                <button
                    className="bluebtn"
                    id="logoutbtn"
                    onClick={() => {
                        // logoutPage();
                    }}> 
                        Logout
                </button>
            </div>
        </div>
    );
};

export default Header;
