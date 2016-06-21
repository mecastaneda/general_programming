function giveMe5() {
  var i=0, ret=[], _dV, _uV;
  for (var cV = 0, uV = 5; cV <= 1; cV++) {
    _uV = uV--;
    _dV = 0;
    while (_uV>=0)
      ret[i++] = cV*100 + (_dV++)*10 + _uV--;
  }
  return ret;
}
console.log(giveMe5());
