const fullTitle = "Briadon Fielies - Dev Portfolio";
let index = 0;

function typeTitle() {
  if (index <= fullTitle.length) {
    document.title = fullTitle.slice(0, index);
    index++;
    setTimeout(typeTitle, 120); // Speed of typing (ms per character)
  }
}

typeTitle();
