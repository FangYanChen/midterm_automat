const quotes = [
      "The only limit to our realization of tomorrow is our doubts of today.",
      "The purpose of our lives is to be happy.",
      "Life is what happens when you're busy making other plans.",
      "Get busy living or get busy dying.",
      "You have within you right now, everything you need to deal with whatever the world can throw at you."
  ];
  
  function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
  }
  
  document.body.innerHTML = `
      <div>
          <h1 id="quoteDisplay">Click the button for a random quote!</h1>
          <button onclick="getRandomQuote()">Get Random Quote</button>
      </div>
  `;
  