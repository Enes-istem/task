function findLongestWord(sentence) {
   
    const words = sentence.split(' ');
  
  
    let longestWord = '';
    let mostVowelsWord = '';
    let maxWordLength = 0;
    let maxVowelCount = 0;
  
    
    for (const word of words) {
      
      const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
  
     
      const wordLength = cleanedWord.length;
  
     
      const vowelCount = cleanedWord.replace(/[^aeiouAEIOU]/g, '').length;
  
    
      if (wordLength >= maxWordLength && vowelCount >= maxVowelCount) {
        
        longestWord = cleanedWord;
        mostVowelsWord = cleanedWord;
        maxWordLength = wordLength;
        maxVowelCount = vowelCount;
      }
    }
  
    return mostVowelsWord;
  }