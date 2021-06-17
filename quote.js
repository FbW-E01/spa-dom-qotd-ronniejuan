  
  function generate(){
      var quotes = {
    "-Yo":'"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."',
    "-El" : '"Dont watch the clock; do what it does. Keep going."',
    "-Nosotros":'"The secret of getting ahead is getting started."',
    "-Vosotros":'"Well done is better than well said."',
    "-Alan Hofmann":'"You miss 100% of the shots you don’t take."',
    "-jaime Mandala":'"A goal is a dream with a deadline."',
    "-Luis Dimas":'"Outstanding people have one thing in common: An absolute sense of mission."',
    "-Yo-Mismo":'"Trying is winning in the moment."',
    "-Tu-Vieja":'"Fall down seven times and stand up eight."',
    "-Padre-del":'"You just cant beat the person who never gives up."',
    
}

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)]

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  
  document.getElementById("author").innerHTML = author;

}