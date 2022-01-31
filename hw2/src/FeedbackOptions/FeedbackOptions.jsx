import React from "react";

function FeedbackOptions({ goodFeedback, neutralFeedback, badFeedback }) {
    return (
        <React.Fragment>
            <button onClick={goodFeedback} className="button-good">Good:</button>
            <button onClick={neutralFeedback} className="button-neutral">Neutral:</button>
            <button onClick={badFeedback} className="button-bad">Bad:</button>
        </React.Fragment>
    );
}

export default FeedbackOptions;