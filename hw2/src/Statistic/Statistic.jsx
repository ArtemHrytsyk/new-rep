import React, {Fragment} from "react";
import style from './Statistics.module.css'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className={style.statistics}>
            {total === 0 ? (
                <p>No feedback given</p>
            ) : (
                <Fragment>
                    <p>Statistics</p>
                    <p>Good: {good} </p>
                    <p>Neutral: {neutral} </p>
                    <p>Bad: {bad} </p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {Math.round(positivePercentage)} %</p>
                </Fragment>
            )}
        </div>
    );
}

export default Statistics;