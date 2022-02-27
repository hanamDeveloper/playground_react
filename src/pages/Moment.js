import React, { useState, useRef } from "react";
import moment from "moment-timezone";
import "moment/locale/ko";

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
            <div>두 날짜 비교</div>
            <div>2018-01-01 03:00:00 와 2018-01-02 02:00:00 의 시간차이 구하기</div>
            <div>{`${moment("2018-01-01 03:00").diff(moment("2018-01-02 02:00"), "hours")}`}시간 차이입니다.</div>

            <p>모멘트는 굉장히 오랜시간 사랑받아온 만큼 굉장히 오래된 라이브러리이다. 
                물론 아직 유용하지만 현재 나온 기술과 잘 맞지 않다. 우선 태생적으로 사이즈가 너무 크고 그것을 업데이트 하기에는 기존에 moment를 사용했던 많은 프로젝트가 망가질 수 있다. 그러니 더이상 업데이트를 하지 않는다고 선언했다.
            </p>

            <p>day Js 는 엄청 가볍다. 디폴트가 불변성이다, 또 moment와 사용법이 거의 유사하기 때문에 간결하다.
            </p>
        </div>
    )
}