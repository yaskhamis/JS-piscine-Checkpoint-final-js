function sentencePyramid(sentence) {
  const words = sentence.split(' ')
  for (let i = 1; i <= words.length; i++) {
    console.log(words.slice(0, i).join(' '))
  }
}

sentencePyramid("This is a simple sentence pyramid")