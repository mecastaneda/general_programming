var mtr1 = [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,1]];

console.log(getPaths(mtr1));

function getPaths(mtr) {
  var results = [],
      r_size = mtr.length-1,
      c_size = mtr[0].length-1;
  finder(0,0, []);
  function finder(row, col, path) {
    path.push('('+row+','+col+')');
    if(mtr[row][col]) {
      results.push(path);
      return;
    }
    if(row < r_size) {
      finder(row+1, col, path.slice());
    } else return;
    if(col < c_size) {
      finder(row, col+1, path.slice());
    }
    return;
  }
  return results;
}
