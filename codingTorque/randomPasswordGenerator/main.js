import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<div class="container">
    <h2 class="title">Password Generator</h2>
    <div class="result">
        <div class="result__title field-title">Generated Password</div>
        <div class="result__info right">click to copy</div>
        <div class="result__info left">copied</div>
        <div class="result__viewbox" id="result">CLICK GENERATE</div>
        <button id="copy-btn" style="--x: 0; --y: 0"><i class="far fa-copy"></i></button>
    </div>
    <div class="length range__slider" data-min="4" data-max="32">
        <div class="length__title field-title" data-length='0'>length:</div>
        <input id="slider" type="range" min="4" max="32" value="16" />
    </div>

    <div class="settings">
        <span class="settings__title field-title">settings</span>
        <div class="setting">
            <input type="checkbox" id="uppercase" checked />
            <label for="uppercase">Include Uppercase</label>
        </div>
        <div class="setting">
            <input type="checkbox" id="lowercase" checked />
            <label for="lowercase">Include Lowercase</label>
        </div>
        <div class="setting">
            <input type="checkbox" id="number" checked />
            <label for="number">Include Numbers</label>
        </div>
        <div class="setting">
            <input type="checkbox" id="symbol" />
            <label for="symbol">Include Symbols</label>
        </div>
    </div>

    <button class="btn generate" id="generate">Generate Password</button>
</div>
`;

setupCounter(document.querySelector("#counter"));
