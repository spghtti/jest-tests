const caesarize = (string, key) => {
  const lowercaseAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const uppercaseAlphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const isUpperOrLower = (char) => {
    if (lowercaseAlphabet.includes(char)) {
      return 'lowercase';
    } else if (uppercaseAlphabet.includes(char)) {
      return 'uppercase';
    } else {
      return 'neither';
    }
  };

  const findIndex = (char) => lowercaseAlphabet.indexOf(char.toLowerCase());

  const findNewLetter = (index, casing, key) => {
    const addedIndex = index + key;
    const runovers = Math.floor(addedIndex / 26);
    let newIndex;

    if (addedIndex > 26) {
      newIndex = addedIndex - runovers * 26;
    } else {
      newIndex = addedIndex;
    }
    if (casing === 'lowercase') {
      console.log('lower');
      return lowercaseAlphabet[newIndex];
    } else if (casing === 'uppercase') {
      console.log('upper');
      return uppercaseAlphabet[newIndex];
    }
  };

  let newPhrase = '';
  for (let i = 0; i < string.length; i++) {
    let index = findIndex(string[i]);
    let casing = isUpperOrLower(string[i]);
    if (casing === 'lowercase') {
      newPhrase += findNewLetter(index, 'lowercase', key);
    } else if (casing === 'uppercase') {
      newPhrase += findNewLetter(index, 'uppercase', key);
    } else {
      newPhrase += string[i];
    }
  }
  return newPhrase;
};

export default caesarize;
