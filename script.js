const colorChange1 = document.getElementById("box1");
const colorChange2 = document.getElementById("box2");
const colorChange3 = document.getElementById("box3");
const colorChange4 = document.getElementById("box4");
const colorChange5 = document.getElementById("box5");
const colorChange6 = document.getElementById("box6");
const guessBtn = document.getElementById("btn");
const result = document.getElementById("result");
const colors = ["red", "blue", "yellow", "green", "purple", "orange"];
let currentIndex = 0;

box1.addEventListener("click", () => {
    // Move to the next color
    currentIndex = (currentIndex + 1) % colors.length;
    box1.style.backgroundColor = colors[currentIndex];
  });
  box2.addEventListener("click", () => {
      // Move to the next color
      currentIndex = (currentIndex + 1) % colors.length;
      box2.style.backgroundColor = colors[currentIndex];
  });
  box3.addEventListener("click", () => {
      // Move to the next color
      currentIndex = (currentIndex + 1) % colors.length;
      box3.style.backgroundColor = colors[currentIndex];
  });
  box4.addEventListener("click", () => {
      // Move to the next color
      currentIndex = (currentIndex + 1) % colors.length;
      box4.style.backgroundColor = colors[currentIndex];
    });
    box5.addEventListener("click", () => {
        // Move to the next color
        currentIndex = (currentIndex + 1) % colors.length;
        box5.style.backgroundColor = colors[currentIndex];
    });
    box6.addEventListener("click", () => {
        // Move to the next color
        currentIndex = (currentIndex + 1) % colors.length;
        box6.style.backgroundColor = colors[currentIndex];
    });

const boxes = [box1, box2, box3, box4, box5, box6];
let targetColors = [];

// Generate random sequence
function generateRandomColors() {
    targetColors = [];
    for (let i = 0; i < boxes.length; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        targetColors.push(randomColor);
    }
    console.log("Target sequence (for testing):", targetColors);
}
generateRandomColors(); // Call it once on load

// Update each box with cycling colors
boxes.forEach((box, index) => {
    let colorIndex = 0;
    box.addEventListener("click", () => {
        colorIndex = (colorIndex + 1) % colors.length;
        box.style.backgroundColor = colors[colorIndex];
        box.dataset.color = colors[colorIndex]; // Store selected color
    });
});

let attempts = 0; // Track attempts

// Add event listener for guess button
guessBtn.addEventListener("click", () => {
    let userColors = boxes.map(box => box.dataset.color);
    let correctPositions = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (userColors[i] === targetColors[i]) {
            correctPositions++;
        }
    }

    // Increment attempt count
    attempts++;

    // Update the attempt counter on the page
    document.getElementById("attemptCounter").textContent = attempts;

    if (correctPositions === boxes.length) {
        result.textContent = "🎉 Congratulations! You guessed the correct sequence!";
        result.style.color = "green";
    } else {
        result.textContent = `${correctPositions} color(s) are correct and in the correct position.`;
        result.style.color = "black";
    }
});

// Function to reset the game
function resetGame() {
    generateRandomColors(); // Generate a new sequence
    boxes.forEach(box => {
        box.style.backgroundColor = ""; // Reset the box color
        delete box.dataset.color; // Remove selected color data
    });
    result.textContent = ""; // Clear the result message
    attempts = 0; // Reset the attempts count
    document.getElementById("attemptCounter").textContent = attempts; // Update the counter
}

// Reset button listener
resetBtn.addEventListener("click", resetGame);



