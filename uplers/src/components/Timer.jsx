import React, { Fragment, useRef, useState } from "react";

function Solution() {
  const [state, setState] = useState({
    minute: 0,
    second: 0,
    runningMinute: 0,
    runningSecond: 0,
    timerRunning: false,
  });
  const interVal = useRef();

  const handleRunningMinuteSecond = (rM, rS) => {
    if (rS <= 0) {
      if (rM <= 0) {
        return { runningMinute: 0, runningSecond: 0, timerRunning: false };
      } else {
        return {
          runningMinute: rM - 1,
          runningSecond: 59,
        };
      }
    } else {
      return {
        runningMinute: rM,
        runningSecond: rS - 1,
      };
    }
  };

  const handleStartInteval = () => {
    interVal.current = setInterval(() => {
      setState((pre) => {
        if (pre.runningMinute <= 0 && pre.runningSecond <= 0) {
          clearInterval(interVal.current);
          return {
            ...pre,
            runningMinute: 0,
            runningSecond: 0,
            timerRunning: false,
          };
        } else {
          return {
            ...pre,
            ...handleRunningMinuteSecond(pre.runningMinute, pre.runningSecond),
          };
        }
      });
    }, 1000);
  };
  const handleClickStart = () => {
    clearInterval(interVal.current);
    setState((pre) => ({
      ...pre,
      runningMinute: Number(pre.minute) + Math.floor(pre.second/ 60),
      runningSecond: Number(pre.second) % 60,
      timerRunning: true,
    }));
    if (state.minute <= 0 && state.second <= 0) {
      clearInterval(interVal.current);
    } else {
      handleStartInteval();
    }
  };

  const handleClickReset = () => {
    setState((pre) => ({
      minute: 0,
      second: 0,
      runningMinute: 0,
      runningSecond: 0,
      timerRunning: false,
    }));
  };

  const handleClickPauseReset = () => {
    if (state.timerRunning) {
      clearInterval(interVal.current);
      setState((pre) => ({ ...pre, timerRunning: false }));
    } else {
      setState((pre) => ({ ...pre, timerRunning: true }));
      handleStartInteval();
    }
  };

  return (
    <Fragment>
      <label>
        <input
          type="number"
          value={state.minute}
          onChange={(e) => {
            setState((pre) => ({ ...pre, minute: e.target.value }));
          }}
        />
        Minutes
      </label>
      <label>
        <input
          type="number"
          value={state.second}
          onChange={(e) => {
            setState((pre) => ({ ...pre, second: e.target.value }));
          }}
        />
        Seconds
      </label>

      <button onClick={handleClickStart}>START</button>
      <button onClick={handleClickPauseReset}>PAUSE / RESUME</button>
      <button onClick={handleClickReset}>RESET</button>

      <h1 data-testid="running-clock">
        {state?.runningMinute.toString().length > 1
          ? state.runningMinute
          : `0${state.runningMinute}`}
        :
        {state?.runningSecond.toString().length > 1
          ? state.runningSecond
          : `0${state.runningSecond}`}
      </h1>
    </Fragment>
  );
}

export default Solution;
