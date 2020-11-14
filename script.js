// Get Quote From API
let GetQuote = async () => {
    const API_Url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try
    {
        const Proxy_URL = 'https://cors-anywhere.herokuapp.com/';
        const Response = await fetch(Proxy_URL + API_Url);
        const Data = await Response.json();
        return Data;
    }
    catch (Error)
    {
        console.log('No Quote Found', Error);
        return GetQuote();
    }
};

let SetQuote = async () => {
    const Quote = document.getElementById('quote');
    const Authour = document.getElementById('authour');
    let Data = await GetQuote();

    while (Data.quoteText === Quote.innerHTML)
        Data = await GetQuote();

    Quote.innerHTML = Data.quoteText;
    Authour.innerHTML = Data.quoteAuthor;
};

SetQuote();