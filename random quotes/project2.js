const quoters = document.querySelector('.quote');
const quoteBtn = document.getElementById('new-quote-btn');

async function fetchRandomQuote() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    if (response.ok) {
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      quoters.innerHTML = `
      <p>   ${randomQuote.text}                       </p> 
      <p> - ${randomQuote.author || 'Unknown author' }</p>
      `;
    } 
    else {
      quoters.innerHTML = 'Failed to fetch a quote.';
    }
  } catch (error) {
    console.error('Error fetching a quote:', error);
    quoters.innerHTML = 'An error occurred while fetching a quote.';
  }
}
quoteBtn.addEventListener('click', fetchRandomQuote);
fetchRandomQuote();
