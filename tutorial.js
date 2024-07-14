// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

const rectW = 3
const rectH = 121
const hexHorL = 30
const hexDiagL = 60

const shape = (n) => {
  const t = new bt.Turtle()
  for (let i = 0; i < n; i++) {
    t.forward(1).right(360/n)
  }
  return t.lines();
}

const shaft = bt.scale(shape(3), [3, bt.randInRange(130, 200)])
const vanes = bt.scale(shape(11), [bt.randInRange(4, 12), 30])
bt.translate(vanes, [0, bt.bounds(shaft).cb[1] - bt.bounds(vanes).cb[1]])

const feather = [...shaft, ...vanes]
const center = bt.translate(feather, [width/2, height/2], bt.bounds(feather).cc)

bt.resample(feather, 4)

bt.iteratePoints(feather, (pt, t) => {
  const [x, y] = pt
  return [x - 0.002 *(width/2-y)*(width/2-y), y]
})

bt.rotate(feather, 135)


drawLines(feather)