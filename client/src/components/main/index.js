import "./index.css";
import { useState } from "react";
import SideBarNav from "./sideBarNav";
import QuestionPage from "./questionPage";
import TagPage from "./tagPage";
import AnswerPage from "./answerPage";
import NewQuestion from "./newQuestion";
import NewAnswer from "./newAnswer";
import Signup from "./account/signup";
import Login from "./account/login";

const Main = ({ search = "", title, setQuestionPage }) => {
    const [page, setPage] = useState("home");
    const [questionOrder, setQuestionOrder] = useState("newest");
    const [qid, setQid] = useState("");
    const [account, setAccount] = useState("");
    let selected = "";
    let content = null;

    const handleQuestions = () => {
        setQuestionPage();
        setPage("home");
    };

    const handleNewLogin = (login) => {
        setQuestionPage();
        setAccount(login);
        setPage("home");
    }

    const handleTags = () => {
        setPage("tag");
    };

    const handleAnswer = (qid) => {
        setQid(qid);
        setPage("answer");
    };

    const clickTag = (tname) => {
        setQuestionPage("[" + tname + "]", tname);
        setPage("home");
    };

    const handleNewQuestion = () => {
        setPage("newQuestion");
    };

    const handleNewAnswer = () => {
        setPage("newAnswer");
    };

    const handleSignup = () => {
        setPage("signup");
    }

    const handleLogin = () => {
        setPage("login");
    }

    const handleLogout = () => {
        setAccount("");
    }

    const getQuestionPage = (order = "newest", search = "") => {
        return (
            <QuestionPage
                title_text={title}
                order={order}
                search={search}
                setQuestionOrder={setQuestionOrder}
                clickTag={clickTag}
                handleAnswer={handleAnswer}
                handleNewQuestion={handleNewQuestion}
                handleSignup={handleSignup}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                account={account}
            />
        );
    };

    switch (page) {
        case "home": {
            selected = "q";
            content = getQuestionPage(questionOrder.toLowerCase(), search);
            break;
        }
        case "tag": {
            selected = "t";
            content = (
                <TagPage
                    clickTag={clickTag}
                    handleNewQuestion={handleNewQuestion}
                    handleSignup={handleSignup}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    account={account}
                />
            );
            break;
        }
        case "answer": {
            selected = "";
            content = (
                <AnswerPage
                    qid={qid}
                    handleNewQuestion={handleNewQuestion}
                    handleNewAnswer={handleNewAnswer}
                    handleSignup={handleSignup}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    account={account}
                />
            );
            break;
        }
        case "newQuestion": {
            selected = "";
            content = 
                <NewQuestion 
                    handleQuestions={handleQuestions} 
                    handleSignup={handleSignup}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    account={account}
                />;
            break;
        }
        case "newAnswer": {
            selected = "";
            content = 
                <NewAnswer 
                    qid={qid} 
                    handleAnswer={handleAnswer}
                    handleSignup={handleSignup} 
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    account={account}
                />;
            break;
        }

        case "signup": {
            selected = "";
            content = <Signup handleQuestions={handleQuestions} />
            break;
        }

        case "login": {
            selected = "";
            content = 
                <Login 
                    handleNewLogin={handleNewLogin}
                    account={account} />
            break;
        }
        default:
            selected = "q";
            content = getQuestionPage();
            break;
    }

    return (
        <div id="main" className="main">
            <SideBarNav
                selected={selected}
                handleQuestions={handleQuestions}
                handleTags={handleTags}
                account={account}
            />
            <div id="right_main" className="right_main">
                {content}
            </div>
        </div>
    );
};

export default Main;
