import React from "react";
// import "./styles/Buttons.css";
import classes from"./styles/Button.module.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className={classes.showbtn}>
      <button className={classes.btnexp} onClick={inputHandler}>
        ^
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        (
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        )
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        √
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        x<sup>2</sup>
      </button>
      <button className={classes.clr} onClick={clearInput}>
        AC
      </button>
      <button className={classes.clr} onClick={backspace}>
        ⌫
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        log
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        ÷
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        %
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        7
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        8
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        9
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        x
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        4
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        5
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        6
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        -
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        1
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        2
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        3
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        +
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        !
      </button>
      <button className={classes.btnexp} onClick={changePlusMinus}>
        ±
      </button>
      <button className={classes.btn} onClick={inputHandler}>
        0
      </button>
      <button className={classes.btnexp} onClick={inputHandler}>
        .
      </button>
      <button className={classes.btnexpequal} id="equalbtn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};

export default Buttons;