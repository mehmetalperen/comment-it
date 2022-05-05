const helpers = {
  useHashUrlHelper: function(url) {
    var hash = 0;
    // if the length of the string is 0, return 0
    if (url.length == 0) return hash;
    for (let i = 0; i < url.length; i++) {
      let ch = url.charCodeAt(i);
      hash = (hash << 5) - hash + ch;
      hash = hash & hash;
    }
    return hash;
  },
  //set variable hash as 0
};

export default helpers;
