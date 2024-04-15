import "./index.css";
import OrderButton from "./orderButton";

const QuestionHeader = ({
    title_text,
    qcnt,
    setQuestionOrder,
    handleNewQuestion,
    handleSignup,
}) => {
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
            <div className="space_between right_padding">
                <div className="bold_title">{title_text}</div>
                <button
                    className="bluebtn"
                    onClick={() => {
                        handleNewQuestion();
                    }}
                >
                    Ask a Question
                </button>
            </div>
            <div className="space_between right_padding">
                <div id="question_count">{qcnt} questions</div>
                <div className="btns">
                    {["Newest", "Active", "Unanswered"].map((m, idx) => (
                        <OrderButton
                            key={idx}
                            message={m}
                            setQuestionOrder={setQuestionOrder}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionHeader;
