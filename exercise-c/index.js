
function variationExample(sentence) {
  let output = document.querySelector('#variation-exp');
  let newSentence = sentence;

  /*
  * we're padding the thing we want to replace to ensure we are capturing
  * just the word and not parts of other words e.g we want `he` and not
  * the `he` part of t`he`
  */
  newSentence = newSentence.replace(' the ', "<span style='color: purple;'> the </span>");
  newSentence = newSentence.replace(' he ', ' she ');
  newSentence = newSentence.replace(' his ', ' her ');

  output.innerHTML = newSentence;
}

function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;
  



  newSentence = newSentence.replace(' window', " <span style='border: solid black 1px'>window</span> ");




  // words.forEach(function (word) {
  //   // does it include the singular or plural swap word?
  //   if ((newSentence.includes(` ${word} `)) ||(newSentence.includes(`${word} `))) {
  //     newSentence = newSentence.replace(`${word} `, `${swapWords[word]} `);
  //   // } else if (text.includes(` ${word}s `)) {
  //   //   text = text.replace(` ${word}s `, ` ${swapWords[word]}s `);
  //   }
  // });

  // newSentence = newSentence.replace(' chair', " <span style='color: solid  #e0ca94 1px'> chair</span> ");

//   words = newSentence.split(' ');
//   console.log(words);

//  for(i=0; i < words.length; i++)
//  {

//     words[i] = words[i].toUpperCase();
//  }
    
  // console.log(words);
 

  output.innerHTML = newSentence;
}

function variationTwo(sentence) {
  let output = document.querySelector('#variation-two');
  let newSentence = sentence;
  let newWords = [];
  let swapWords = {
    Old: 'the',
    Dudley: 'chair',
    the: 'Old',
    chair: 'Dudley',
  }


  let words = newSentence.split(' ');
  //console.log(words);

  for (i = 0; i < words.length; i++) {
    if (words[i] in swapWords) {
      newWords.push(swapWords[words[i]]);

      //console.log('yes');

    }
    else {
      newWords.push(words[i]);

    }

  }

  newSentence = newWords.join(' ');


  output.innerHTML = newSentence;
}

function variationThree(sentence) {
  let output = document.querySelector('#variation-three');
  let newSentence = sentence;
  let newWords = [];


  let words = newSentence.split(' ');
  //console.log(words);

  // for (i = 0; i < words.length; i++) {
  //   firstChar = words[i][0];
  //   firstChar = firstChar.toUpperCase();
  //   firstChar = firstChar.replace(firstChar, "<span style='color: blue;'>" + firstChar + "</span>")
  //   newWords.push(firstChar+words[i].slice(1));

  //     //console.log('yes');
  // }

  for (i = 0; i < words.length; i++) {
    secondChar = words[i][1];
    secondChar = secondChar.toUpperCase();
    secondChar = secondChar.replace(secondChar, "<span style='color: blue;'>" + secondChar + "</span>")
    newWords.push(words[i].slice(0,1) + secondChar + words[i].slice(2));

    //console.log('yes');
  }

  newSentence = newWords.join(' ');

  output.innerHTML = newSentence;
}



let input = document.querySelector('#sentence');

// recomput when the input text changes
input.addEventListener('input', function () {
  let sentence = input.value;
  variationExample(sentence);
  variationOne(sentence);
  variationTwo(sentence);
  variationThree(sentence);
});

// also comput when the page loads
variationExample(input.value);
variationOne(input.value);
variationTwo(input.value);
variationThree(input.value);
