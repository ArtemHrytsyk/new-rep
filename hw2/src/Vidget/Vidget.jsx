import React from "react";
import Statistics from "../Statistic";
import FeedbackOptions from '../FeedbackOptions'

class Vidget extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    goodHandler = () => {
        this.setState({ good: this.state.good + 1 });
    }

    neutralHandler = () => {
        this.setState({ neutral: this.state.neutral + 1 });
    }

    badHandler = () => {
        this.setState({ bad: this.state.bad + 1 });
    }

    render() {
        const total = this.state.good + this.state.neutral + this.state.bad;
        const positiveFeedback = this.state.good / (this.state.good +
            this.state.neutral + this.state.bad) * 100;

        return (
            <React.Fragment>
                <FeedbackOptions
                    goodFeedback={this.goodHandler}
                    neutralFeedback={this.neutralHandler}
                    badFeedback={this.badHandler}
                />

                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                    positivePercentage={positiveFeedback}
                />
            </React.Fragment>
        );
    }
}

export default Vidget;