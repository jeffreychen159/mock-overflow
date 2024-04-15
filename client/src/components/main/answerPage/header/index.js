import "./index.css";

// Header for the Answer page
const AnswerHeader = ({ ansCount, title, handleNewQuestion, account }) => {
    return (
        <div id="answersHeader" className="space_between right_padding">
            <div className="bold_title">{ansCount} answers</div>
            <div className="bold_title answer_question_title">{title}</div>
            <button
                className="bluebtn"
                onClick={() => {
                    if (account) {
                        handleNewQuestion();
                    } else {
                        alert("Please log in to answer a question");
                    }
                }}
            >
                Ask a Question
            </button>
        </div>
    );
};

export default AnswerHeader;
