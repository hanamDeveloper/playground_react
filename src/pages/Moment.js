import React, { useState, useRef } from "react";
import moment from "moment-timezone";

export default function MomentExample() {
    const birthDayRef = useRef(null);
    const [day, setDay ] = useState(null)

    const handleBirthDayChange = (e) => {
        setDay(moment(e.target.value, "YYYY-MM-DD").format("dddd"));
    }
    const momentDate = moment();
    const newMomentDate = momentDate.add(1, "week");
    const cloneNewMomentDate = newMomentDate.clone().add(1, "week");
    return (
        <div>
            <h1>Moment</h1>
            <div>
            {momentDate.format()} <br />
            {newMomentDate.format()}<br />
            {cloneNewMomentDate.format()}<br />
            </div>
            <br />
            <div>
                2018년 3월 10일 13시에 하루 더하기:
                {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
            </div>
            <div>
                2018년 3월 10일 13시에 하루 더하기:
                {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
            </div>
            <div>
                2017년 1월 1일에 1년 빼기:
                {moment("2017-01-01").subtract(1, "year").format()}
            </div>
            <div>
                2017년 1월 1일에 365일 빼기 더하기:
                {moment("2017-01-01").subtract(365, "day").format()}
            </div>
            <div>
                07-17-2021 을 한국어로 표기
                {moment("2017-07-17").format("YYYY년 M월 D일")}
            </div>

            <div>
                <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
                <p>무슨요일일까요?</p>
                <div>{day}</div>
                {moment("2017-07-17").format("YYYY년 M월 D일")}
            </div>
        </div>
    )
}