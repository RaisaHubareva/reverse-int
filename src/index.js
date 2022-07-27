module.exports = function reverse (n) {
  n = Math.abs(n)
      n = String(n);

      let revNum = n[0];
      for (let i = 1; i < n.length; i++) {
          revNum = `${n[i]}${revNum}`;

      }

      return revNum;   
}
