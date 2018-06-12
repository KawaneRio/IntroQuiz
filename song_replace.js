module.exports = {
  songReplace(name) {
      let a = name.replace(`「`, ``).replace(/」[^]*/gm, ``), result;
      a = a.replace(/ -.*/gm, ``);
      a = a.replace(/ ～.*/gm, ``);
      a = a.replace(/[^]*(\\.|[^『])『/gm, ``).replace(/』[^]*/gm, ``);
      a = a.replace(/【.*?】/g, ``);
  ////    a = a.replace(/[^]*(\\.|[^- ])*- /gm, ""); // ダメ
      a = a.replace(/[^]*(\\.|[^／])／/gm, ``);
      a = a.replace(/[^]*(\\.|[^「])「/gm, ``).replace(/」[^]*/gm, ``);
  //    a = a.replace(/\(.*/gm, "");
      a = a.replace(/"/gm, ``);
  //    a = a.replace(/-[^]*/gm, "");
      a = a.replace(/\[[^]*/gm, ``);
      a = a.replace(/\/.*/, ``);
      if (/.*?-([^-].*?)-.*/gm.test(a)) {
        result = a.replace(/.*?- /, ``).replace(/ -.*/, ``);
        return result;
      } else {
        a = a.replace(/.* -/g, ``);
      }
      result = a.replace(/（.*/gm, ``);
      return result;
  },
  songReplace2(name) {
      let a = name, result;
      a = a.replace(`「`, ``).replace(/」[^]*/gm, ``);
      if (/.*『.*』.*-.*／.*/gm.test(a)) {
        a = a.replace(/／.*/g, ``).replace(/ -.*/, ``).replace(/.*』/, ``);
      } else {
        a = a.replace(/[^]*(\\.|[^『])『/gm, ``).replace(/』[^]*/gm, ``);
      }
      a = a.replace(/【.*?】/g, ``);
      a = a.replace(/.*:: /gm, ``);
  ////    a = a.replace(/[^]*(\\.|[^- ])*- /gm, ""); // ダメ
      a = a.replace(/[^]*(\\.|[^／])／/gm, ``);
      a = a.replace(/[^]*(\\.|[^「])「/gm, ``).replace(/」[^]*/gm, ``);
  //    a = a.replace(/\(.*/gm, "");
      a = a.replace(/"/gm, ``);
  //    a = a.replace(/-[^]*/gm, "");
      a = a.replace(/\[[^]*/gm, ``);
      a = a.replace(/.*\//, ``);
      if (/.*?-([^-].*?)-.*/gm.test(a)) {
        result = a.replace(/ -.*/, ``);
        return result;
      } else {
        a = a.replace(/.* -/g, ``);
      }
      a = a.replace(/ & .*/gm, ``);
      a = a.replace(/[^a-zA-Z0-9!?\s]*/gm, ``);
      a = a.replace(/（.*/gm, ``);
      if (a !== `Intro`) {
        a = a.replace(`Intro`, ``);
      }
      a = a.replace(/\s*(b|B)y.*/gm, ``);
      result = a;
      return result;
  },
  songReplace3(name) {
    const songname = name;
    let a = songname.replace(`「`, ``).replace(/」[^]*/gm, ``), result;
    if (/.*『.*』.*-.*／.*/gm.test(a)) {
      a = a.replace(/／.*/g, ``).replace(/[^]*(\\.|[^- ])*- /gm, ``);
    } else {
      a = a.replace(/[^]*(\\.|[^『])『/gm, ``).replace(/』[^]*/gm, ``);
    }
    a = a.replace(/【.*?】/g, ``);
  ////    a = a.replace(/[^]*(\\.|[^- ])*- /gm, ""); // ダメ
    a = a.replace(/[^]*(\\.|[^／])／/gm, ``);
    a = a.replace(/[^]*(\\.|[^「])「/gm, ``).replace(/」[^]*/gm, ``);
  //    a = a.replace(/\(.*/gm, "");
    a = a.replace(/".*?"/gm, ``);
  //    a = a.replace(/-[^]*/gm, "");
    a = a.replace(/\[[^]*/gm, ``);
  //  a = a.replace(/.*\//, "");
    if (/.*?-([^-].*?)-.*/gm.test(a)) {
      result = a.replace(/.*- /, ``);
      return result;
    } else {
      a = a.replace(/.* -/g, ``);
    }
    a = a.replace(/.* & /gm, ``);
    a = a.replace(/-.*/, ``);
    a = a.replace(/　/gm, ``);
    a = a.replace(/([!]*)/gm, ``);
    a = a.replace(/[^a-zA-Z0-9\s]*/gm, ``);
    a = a.replace(/ feat.*/gm, ``);
    if (a !== `Extended`) {
      a = a.replace(`Extended`, ``);
    }
    result = a.replace(/（.*/gm, ``);
    return result;
  }
};