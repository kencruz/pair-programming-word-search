const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let col = 0; col < letters[0].length; col++) {
    const colLine = [];
    for (const row of letters) {
      colLine.push(row[col]);
    }
    if (colLine.join("").includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
