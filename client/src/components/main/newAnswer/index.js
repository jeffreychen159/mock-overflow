import "./index.css";
import { useState } from "react";
import Form from "../baseComponents/form";
import Input from "../baseComponents/input";
import Textarea from "../baseComponents/textarea";
import { validateHyperlink } from "../../../tool";
import { addAnswer } from "../../../services/answerService";

const NewAnswer = ({ qid, handleAnswer, handleSignup }) => {
    const [usrn, setUsrn] = useState("");
    const [text, setText] = useState("");
    const [usrnErr, setUsrnErr] = useState("");
    const [textErr, setTextErr] = useState("");
    const postAnswer = async () => {
        let isValid = true;

        if (!usrn) {
            setUsrnErr("Username cannot be empty");
            isValid = false;
        }

        if (!text) {
            setTextErr("Answer text cannot be empty");
            isValid = false;
        }

        // Hyperlink validation
        if (!validateHyperlink(text)) {
            setTextErr("Invalid hyperlink format.");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const answer = {
            text: text,
            ans_by: usrn,
            ans_date_time: new Date(),
        };

        const res = await addAnswer(qid, answer);
        if (res && res._id) {
            handleAnswer(qid);
        }
    };
    return (
        <div>
            <div id="login" className="header_button">
                <button
                    className="bluebtn_login"
                    id="signupbtn"
                    onClick={() => {
                        handleSignup();
                    }}>
                    Signup
                </button>
                <button
                    className="bluebtn_login"
                    id="loginbtn"
                    onClick={() => {
                        // loginPage();
                    }}>
                    Login
                </button>
                <button
                    className="bluebtn_login"
                    id="logoutbtn"
                    onClick={() => {
                        // logoutPage();
                    }}>
                    Logout
                </button>
            </div>
            <div className="header_buffer">
                &nbsp;
            </div>
            <Form>
                <Input
                    title={"Username"}
                    id={"answerUsernameInput"}
                    val={usrn}
                    setState={setUsrn}
                    err={usrnErr}
                />
                <Textarea
                    title={"Answer Text"}
                    id={"answerTextInput"}
                    val={text}
                    setState={setText}
                    err={textErr}
                />
                <div className="btn_indicator_container">
                    <button
                        className="form_postBtn"
                        onClick={() => {
                            postAnswer();
                        }}
                    >
                        Post Answer
                    </button>
                    <div className="mandatory_indicator">
                        * indicates mandatory fields
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default NewAnswer;
