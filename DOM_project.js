// getting the html elements
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const displayValue = document.getElementById("display");

// for decrement button click
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value < 1) {
        alert("-1 is Not allowed");
    }else{
        displayValue.innerText = value - 1;
    }
})

// for increment button click
incrementBtn.addEventListener("click", () => {
     const value = Number(displayValue.innerText);
     if (value >= 10) {
        alert("10+ Value are Not allowed");
     }else{
        displayValue.innerText = value + 1;
     }
})
// for reset button click
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});