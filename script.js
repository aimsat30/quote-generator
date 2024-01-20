//global var declaration
// let apiQuotes = [];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');
const twitter = document.getElementById('twitter');
const whatsapp = document.getElementById('whatsapp');
const loader = document.getElementById('loader');

// show loader
function loading(){
    quoteContainer.hidden = true;
    loader.hidden = false;
}

// hide loader
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//get random quote
function randomQuote(){
    //pick a random quote from api quotes array
    loading();
    // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    if(quote.text.length > 150){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    author.textContent = !quote.author ? '- Unknown' : `- ${quote.author}`;
    complete();
}

//get quotes from api

// async function getQuotes(){
//     const apiURL = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiURL);
//         apiQuotes = await response.json();
//         randomQuote();
//     } catch(error){
//         //catch error here
//     }
// }

//tweet quote
function tweetQuote(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${author.textContent}`;
    window.open(twitterURL, '_blank');
}
function whatsappQuote(){
    const whatsappURL = `https://wa.me/?text=${quoteText.textContent} ${author.textContent}`;
    window.open(whatsappURL, '_blank');
}

//event listeners
newQuote.addEventListener("click", newQuote);
twitter.addEventListener("click", tweetQuote);
whatsapp.addEventListener("click", whatsappQuote);


//on load
randomQuote();
// getQuotes();