function solution(myString, pat) {
  const newMyString = myString.toUpperCase();
  const newPat = pat.toUpperCase();
  if (newMyString.includes(newPat)) {
    return 1;
  } else {
    return 0;
  }
}

function solution(myString, pat) {
  return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
}
