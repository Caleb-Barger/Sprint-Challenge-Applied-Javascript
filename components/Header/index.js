// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement("div");
    const currentDate = document.createElement("span");
    const lambdaTimes = document.createElement("h1");
    const currentTemp = document.createElement("span");

    header.classList.add("header");
    currentDate.classList.add("date");
    currentTemp.classList.add("temp");

    currentDate.textContent = "SMARCH 28, 2019";
    lambdaTimes.textContent = "Lambda Times";
    currentTemp.textContent = "98°";

    header.append(
        currentDate, 
        lambdaTimes,
        currentTemp,
        );

    return header;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());


