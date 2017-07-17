function load_quotes(){
    var quotes_dom = document.getElementById('quotes_json');
    return JSON.parse(quotes_dom.innerText);
}


function get_random_quote(quotes){
    return quotes[Math.floor(Math.random() * quotes.length)];
}


function set_quote(quote){
    var quote_text = document.getElementsByClassName('js-b-quote__text')[0];
    var quote_author = document.getElementsByClassName('js-b-quote__author')[0];
    quote_text.innerHTML = '<p>' + quote.phrase + '</p>';
    if(quote.signature){
        quote_author.innerHTML = '<p>©' + quote.signature + '</p>';
    }else{
        quote_author.innerHTML = '<p>©Неизвестный автор</p>';
    }
}


function refresh_quote(){
    var quotes = load_quotes();
    set_quote(get_random_quote(quotes));
}
