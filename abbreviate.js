function abbreviate(article){
	// creates an array of each of the words in the article
	var splitArticle = article.split(' ');
	var totalCharacters = 0;
	var currentAbbreviation = '';
	for (var i = 0; i < splitArticle.length; i++) {
		if(splitArticle[i].length + totalCharacters > 40){
			return currentAbbreviation + '...';
		}else{
			currentAbbreviation = currentAbbreviation + splitArticle[i] + ' ';
			totalCharacters += splitArticle[i].length + 1;
		}
	}
}

console.log(abbreviate('I once saw a huge elephant rampaging in the forest near my home'));
console.log(abbreviate('I once saw a huge red elephant rampaging in the forest near my home'));
console.log(abbreviate('I once saw a huge purple elephant rampaging in the forest near my home'));
