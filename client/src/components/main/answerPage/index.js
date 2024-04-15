import { useEffect, useState } from "react";
import { getMetaData } from "../../../tool";
import Answer from "./answer";
import AnswerHeader from "./header";
import "./index.css";
import QuestionBody from "./questionBody";
import { getQuestionById } from "../../../services/questionService";

// Component for the Answers page
const AnswerPage = ({ qid, handleNewQuestion, handleNewAnswer, handleSignup, handleLogin, handleLogout, account }) => {
    const [question, setQuestion] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            let res = await getQuestionById(qid);
            setQuestion(res || {});
        };
        fetchData().catch((e) => console.log(e));
    }, [qid]);

    return (
        <>
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
                        if (account) {
                            alert(`You are logged in as ${account}`)
                        } else {
                            handleLogin();
                        }
                    }}> 
                        Login
                </button>
                <button
                    className="bluebtn_login"
                    id="logoutbtn"
                    onClick={() => {
                        handleLogout();
                    }}> 
                        Logout
                </button>
            </div>
            <AnswerHeader
                ansCount={
                    question && question.answers && question.answers.length
                }
                title={question && question.title}
                handleNewQuestion={handleNewQuestion}
                account={account}
            />
            <QuestionBody
                views={question && question.views}
                text={question && question.text}
                askby={question && question.asked_by}
                meta={question && getMetaData(new Date(question.ask_date_time))}
            />
            {question &&
                question.answers &&
                question.answers.map((a, idx) => (
                    <Answer
                        key={idx}
                        text={a.text}
                        ansBy={a.ans_by}
                        meta={getMetaData(new Date(a.ans_date_time))}
                    />
                ))}
            <button
                className="bluebtn ansButton"
                onClick={() => {
                    if (account) {
                        handleNewAnswer();
                    } else {
                        alert("Please log in to answer a question");
                    }
                }}
            >
                Answer Question
            </button>
        </>
    );
};

export default AnswerPage;
