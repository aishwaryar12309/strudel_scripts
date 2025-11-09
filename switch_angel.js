register('rlpf', (x,pat) => {return pat.lpf(pure(x).mul(12).pow(4))})
setGainCurve(x => Math.pow(x,2))
setcpm(170/4)

$: stack(
  s("bd:1")  .beat("0,7?,10", 16).duck("3:4:5"),
  s("sd:2").beat("4,12", 16),
  s("hh4!:8")).orbit(2)._scope()
$: s("supersaw!8").note("<c# f d# [d# a#2]>/2".sub(12)).orbit(3)
