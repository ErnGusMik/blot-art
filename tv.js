// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 180;
const height = 180;

const tvWidth = 230
const tvHeight = 180
const tvBezel = 7
const tvCornerRad = 2
const tvScreenDeg = -20
const tvPanelW = 40

setDocDimensions(width, height);

// Helper functions
const toRadians = (degrees) => {
  return degrees * (Math.PI / 180)
}

// Get chord of circle from arc degrees & radius
const getChord = (radius, arcDeg) => {
  // Get radians from arc width in degrees & divide in half
  const radians = toRadians(Math.abs(arcDeg) / 2)
  // Formula: 2 * radius * sin(arc degrees / 2)
  const chord = 2 * radius * Math.sin(radians)
  return chord
}

const createGrill = (length, distanceBetween, width) => {
  const lineCount = width / distanceBetween
  if (typeof lineCount !== 'integer') throw new Error('createGrill(): width / distanceBetween must be an integer!')

  for (let i = 0; i++; i >= lineCount/2) {
    t.forward(length)
    t.left(90).up()
    t.forward(distanceBetween).left(90).down()
    t.forward(length)
    t.up().right(90).forward(distanceBetween)
    t.right(90).down()
  }
}

const t = new bt.Turtle();

t.left(10)
t.arc(-20, tvWidth)
t.arc(-70, tvCornerRad)
t.arc(tvScreenDeg, tvHeight)
t.arc(-70, tvCornerRad)
t.arc(tvScreenDeg, tvWidth)
t.arc(-70, tvCornerRad)
t.arc(tvScreenDeg, tvHeight)
t.arc(-70, tvCornerRad)

t.left(170).up()
t.forward(tvCornerRad)
t.right(90)
t.forward(tvBezel)
t.right(90).down()

t.forward(getChord(tvWidth, tvScreenDeg)).forward(tvCornerRad + tvBezel)
t.arc(-90, tvCornerRad)
t.forward(getChord(tvHeight, tvScreenDeg)).forward(tvBezel * 2)
t.arc(-90, tvCornerRad)
t.forward(getChord(tvWidth, tvScreenDeg)).forward(tvBezel * 2)
t.arc(-90, tvCornerRad)
t.forward(getChord(tvHeight, tvScreenDeg)).forward(tvBezel * 2)
t.arc(-90, tvCornerRad)
t.forward(tvBezel).up()

t.forward(getChord(tvWidth, tvScreenDeg) + tvBezel).down()

t.forward(tvPanelW)
t.arc(-90, tvCornerRad)
t.forward(getChord(tvHeight, tvScreenDeg) + 2 * tvBezel)
t.arc(-90, tvCornerRad)
t.forward(tvPanelW).up()

t.left(180).forward(tvCornerRad)
t.forward(tvPanelW / 8)
t.left(90).forward((getChord(tvHeight, tvScreenDeg) +  tvBezel + tvCornerRad))
t.down()

t.arc(-90, tvCornerRad)
t.forward(tvPanelW * (6/8) - 2 * tvCornerRad)
t.arc(-90, tvCornerRad)
t.forward(getChord(tvHeight, tvScreenDeg) / 2)
t.arc(-90, tvCornerRad)
t.forward(tvPanelW * (6/8) - 2 * tvCornerRad)
t.arc(-90, tvCornerRad)
t.forward(getChord(tvHeight, tvScreenDeg) / 2)

t.up()
t.arc(-90, tvCornerRad)
t.forward((tvPanelW * (6/8) - 2 * tvCornerRad) / 2)
t.right(90).forward(getChord(tvHeight, tvScreenDeg) / 2)
t.down()

t.forward(100)









const cc = bt.bounds(t.lines()).cc;
const centered = bt.translate(t.lines(), [height / 2, width / 2], cc);


// draw it
drawLines(centered);

