/*
@title: OldTV
@author: Ernests
@snapshot: snap1.png
*/
const width = 200;
const height = 200;

const tvWidth = bt.randInRange(150, 320) // default: 230
const tvHeight = bt.randInRange(180, 250) // default: 180
const tvBezel = bt.randInRange(5, 15) // default: 7
const tvCornerRad = bt.randInRange(1, 4) // default: 2
const tvScreenDeg = -20 //default: -20
const tvPanelW = bt.randInRange(35, 50) // default: 40

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
  // if (typeof lineCount !== 'integer') throw new Error('createGrill(): width / distanceBetween must be an integer!')

  for (let i = 0; i++; i >= lineCount / 2) {
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
t.left(90).forward((getChord(tvHeight, tvScreenDeg) + tvBezel + tvCornerRad))
t.down()

t.arc(-90, tvCornerRad)
t.forward(tvPanelW * (6 / 8) - 2 * tvCornerRad)
t.arc(-90, tvCornerRad)
t.forward(getChord(tvHeight, tvScreenDeg) / 2)
t.arc(-90, tvCornerRad)
t.forward(tvPanelW * (6 / 8) - 2 * tvCornerRad)
t.arc(-90, tvCornerRad)
t.forward(getChord(tvHeight, tvScreenDeg) / 2)

// Maybe create a sort of 'grill' at the top of the control panel
t.up()
t.right(90)
// t.right(90).forward(getChord(tvHeight, tvScreenDeg) / 2 / 2).left(90)
t.down()

const length = tvPanelW * (6 / 8)

t.forward(length)
  .right(90).up()
  .forward(2).right(90).down()
  .forward(length)
  .up().left(90).forward(2)
  .left(90).down()
t.forward(length)
  .right(90).up()
  .forward(2).right(90).down()
  .forward(length)
  .up().left(90).forward(2)
  .left(90).down()

t.up().right(90).forward(getChord(tvHeight, tvScreenDeg) / 8)
t.left(90).forward(length / 2).down()

t.arc(-360, getChord(tvHeight, tvScreenDeg) / 4 / 2)


const verticalLen = getChord(tvHeight, tvScreenDeg) / 2
const between = tvPanelW / 16

t.up().forward(length / 2).right(90)
t.forward(getChord(tvHeight, tvScreenDeg) * (6 / 8) + tvBezel + tvCornerRad)
t.left(90).forward(tvPanelW * (1 / 8) - between).left(90)
t.down()

t.forward(verticalLen)
  .left(90).up()
  .forward(between).left(90).down()
  .forward(verticalLen)
  .up().right(90).forward(between)
  .right(90).down()
t.forward(verticalLen)
  .left(90).up()
  .forward(between).left(90).down()
  .forward(verticalLen)
  .up().right(90).forward(between)
  .right(90).down()
t.forward(verticalLen)
  .left(90).up()
  .forward(between).left(90).down()
  .forward(verticalLen)
  .up().right(90).forward(between)
  .right(90).down()
t.forward(verticalLen)
  .left(90).up()
  .forward(between).left(90).down()
  .forward(verticalLen)
  .up().right(90).forward(between)
  .right(90).down()
t.forward(verticalLen)
  .left(90).up()
  .forward(between).left(90).down()
  .forward(verticalLen)
  .up().right(90).forward(between)
  .right(90).down()
t.forward(verticalLen)
  .left(90).up()
  .forward(between).left(90).down()
  .forward(verticalLen)
  .up().right(90).forward(between)
  .right(90).down()
t.forward(verticalLen)
  .left(90).up()
  .forward(between).left(90).down()
  .forward(verticalLen)
  .up().right(90).forward(between)
  .right(90).down()
t.forward(verticalLen)

t.up().left(180).forward(verticalLen)
t.left(90).forward(between * 15 - tvBezel - tvCornerRad)
t.down().right(80).forward(50)
t.up().left(180).forward(50).left(80)
t.forward(getChord(tvWidth, tvScreenDeg) + tvPanelW).down()
t.left(80).forward(50)

t.up().left(180).forward(50).left(100).forward(tvBezel)
t.arc(-90, tvCornerRad).forward(getChord(tvHeight, tvScreenDeg) + tvBezel * 2)
t.right(90).forward((getChord(tvWidth, tvScreenDeg) + tvBezel * 2 + tvCornerRad * 3 + tvPanelW) / 2)
t.down()

t.left(45).forward(20)
t.up().left(180).forward(20)
t.right(bt.randInRange(80, 100)).down()
t.forward(20)
t.up()

// ---------------------------------------
// ---------------------------------------
// The following is from Blot Font by geschmit
var ParseCoords = (cstr, multScale = 1) => {
  const coordArray = [];
  for (const x of cstr.split(":")) {
    if (parseFloat(x)) {
      coordArray.push(parseFloat(x));
    }
  }
  return coordArray;
};


var RunInstructions = (inst, org, scale = 1) => {
  const turtle = new bt.Turtle();
  turtle.jump(org)
  for (const x of inst.split(",")) {
    const cmd = x.split("$")[0];
    const args = x.split("$")[1];
    let data;
    switch (cmd) {
      case "u":
        turtle.up();
        break;
      case "d":
        turtle.down();
        break;
      case "f":
        turtle.forward(parseFloat(args) * scale);
        break;
      case "arc":
        data = ParseCoords(args);
        turtle.arc(-data[0], data[1] * scale);
        break;
      case "jmp":
        data = ParseCoords(args);
        turtle.jump(data);
        break;
      case "sa":
        turtle.setAngle(parseFloat(args));
        break;
      case "l":
        turtle.left(parseFloat(args));
        break;
      case "r":
        turtle.right(parseFloat(args));
        break;
      default:
        break;
    }
  }
  drawLines(turtle.lines());
  return turtle.position;
};


var letters = {
  // some of these instructions could definitely be minified. I will most
  // likely submit a second pr to fix some of these later
  // todo unterrible letter instructions
  a: `sa$90,f$2,r$90,f$2,r$90,f$2,u,sa$90,f$2,d,l$30,f$2,l$120,f$2`,
  b: `sa$90,f$4,r$90,f$1,arc$180:1,f$1,r$180,f$1,arc$180:1,f$1`,
  c: `sa$90,u,r$90,f$2,r$180,d,arc$180:2`,
  d: `sa$90,f$4,r$90,arc$180:2`,
  e: `sa$90,f$4,r$90,f$2,u,f$-2,r$90,f$2,l$90,d,f$2,u,f$-2,r$90,f$2,l$90,d,f$2`,
  f: `sa$90,f$4,r$90,f$2,u,f$-2,r$90,f$2,l$90,d,f$2`,
  g: `u,f$1,sa$90,f$2,r$90,d,arc$270:1,f$2,arc$90:1`,
  h: `sa$90,f$4,u,f$-2,r$90,d,f$2,u,l$90,f$-2,d,f$4`,
  i: `f$2,u,f$-1,l$90,d,f$4,r$90,u,f$-1,d,f$2`,
  j: `sa$90,u,f$4,r$90,d,f$2,u,f$-1,r$90,d,f$3,arc$90:1`,
  k: `sa$90,f$4,u,f$-2,r$45,d,f$2.75,u,f$-2.75,r$90,d,f$2.75`,
  l: `sa$90,u,f$4,r$180,d,f$4,l$90,f$2`,
  m: `sa$90,f$4,sa$0,r$71.57,f$3.162,sa$0,l$71.57,f$3.162,sa$0,r$90,f$4`,
  n: `sa$90,f$4,r$153.43,f$4.47,l$153.43,f$4`,
  o: `sa$90,u,f$1,d,f$2,arc$180:1,f$2,arc$180:1`,
  p: `sa$90,f$4,r$90,f$1,arc$180:1,f$1`,
  q: `sa$90,u,f$1,d,f$2,arc$180:1,f$2,arc$180:1,u,r$90,f$1,r$45,d,f$1.414`,
  r: `sa$90,f$4,r$90,f$1,arc$180:1,f$1,sa$-45,f$2.8284`,
  s: `f$1,arc$-180:1,arc$180:1,f$1`,
  t: `u,f$1,sa$90,d,f$4,u,r$90,f$-1,d,f$2`,
  u: `sa$90,u,f$4,sa$-90,d,f$3,arc$-180:1,f$3`,
  v: `sa$90,u,f$4,r$165.96,d,f$4.12,l$151.93,f$4.12`,
  w: `sa$90,u,f$4,sa$0,r$82.87,d,f$4.03,sa$0,l$63.43,f$1.12,sa$0,r$63.43,f$1.12,sa$0,l$82.87,f$4.03`,
  x: `sa$90,u,f$4,r$153.44,d,f$4.47,u,l$153.44,f$4,l$153.44,d,f$4.47`,
  y: `u,f$1,sa$90,d,f$2.5,r$33.69,f$1.8,u,f$-1.8,l$67.38,d,f$1.8`,
  z: `u,f$2,d,f$-2,l$63.44,f$4.47,r$63.44,f$-2`,
  ["0"]: `sa$90,u,f$1,d,f$2,arc$180:1,f$2,arc$180:1,u,f$2,arc$45:1,sa$-66.80,d,f$3.675`,
  ["1"]: (origin, scale) => DrawBezier(
    origin,
    -106,
    scale,
    bezierEasing(0.026, [0.984, -1], [1, 1], 0.9561),
    [2, -0.47],
    `f$2,u,f$-1,sa$90,d,f$4,l$90`
  ),
  ["2"]: `u,f$2,r$180,d,f$2,sa$90,arc$90:1,arc$-90:1,f$1,arc$-180:1`,
  ["3"]: `sa$90,u,f$4,r$90,d,f$1,arc$180:1,f$1,r$180,f$1,arc$180:1,f$1`,
  ["4"]: `u,f$2,sa$90,f$1,l$90,d,f$2,r$116.57,f$3.35,sa$-90,f$4`,
  ["5"]: `u,sa$90,f$1,r$180,d,arc$-180:1,f$1,arc$-90:1,arc$90:1,sa$0,f$2`,
  ["6"]: (origin, scale) => DrawBezier(
    origin,
    74,
    scale,
    bezierEasing(-0.018, [0.054, -0.373], [1, -0.758], 0.9181),
    [3.2, -0.36],
    `u,sa$90,f$1,d,arc$360:1`
  ),
  ["7"]: (origin, scale) => DrawBezier(
    origin,
    245,
    scale,
    bezierEasing(-5e-3, [0, -0.149], [0, 1], 0.206),
    [4.5, -0.59],
    `u,sa$90,f$4,r$90,d,f$2`
  ),
  ["8"]: `u,f$1,d,arc$-180:1,arc$360:1,arc$-180:1`,
  ["9"]: (origin, scale) => DrawBezier(
    origin,
    -107,
    scale,
    bezierEasing(-0.018, [0.054, -0.373], [1, -0.758], 0.9181),
    [3.2, -0.36],
    `u,sa$90,f$4,r$90,f$1,d,arc$360:1,u,arc$90:1,d`
  ),
  ["."]: `sa$90,u,f$.75,r$90,f$1,d,arc$360:.25`,
  [","]: `sa$90,u,f$.5,r$90,f$1,r$90,d,arc$90:.25`,
  ["?"]: `sa$90,u,f$.75,r$90,f$1,d,arc$360:.25,l$90,u,f$.25,d,f$1,r$90,arc$-270:1`,
  ["!"]: `sa$90,u,f$.75,r$90,f$1,d,arc$360:.25,l$90,u,f$.25,d,f$3`,
  ["+"]: `sa$90,u,f$2,r$90,d,f$2,u,f$-1,l$90,f$-1,d,f$2`,
  ["-"]: `sa$90,u,f$2,r$90,d,f$2`,
  ["*"]: `sa$90,u,f$2,r$90,f$1,l$90,f$-1,d,f$2,u,f$-1,r$60,f$-1,d,f$2,u,f$-1,r$60,f$-1,d,f$2`,
  ["/"]: `l$63.43,f$4.47`,
  ["="]: `sa$90,u,f$1.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2`,
  ["$"]: `f$1,arc$-180:1,arc$180:1,f$1,u,f$-1,r$90,d,f$4`,
  [":"]: `sa$90,u,f$.75,r$90,f$1,d,arc$360:.25,l$90,u,f$2.5,d,r$90,arc$360:.25`,
  [";"]: `sa$90,u,f$.25,r$90,f$1,r$90,d,arc$90:.25,u,arc$270:.25,r$180,f$3,d,r$90,arc$-360:.25`,
  ["("]: `u,f$1.25,r$180,d,arc$90:.5,f$3,arc$90:.5`,
  [")"]: `u,f$.75,d,arc$-90:.5,f$3,arc$-90:.5`,
  ["["]: `u,f$1.5,r$180,d,f$1,r$90,f$4,r$90,f$1`,
  ["]"]: `u,f$.5,d,f$1,l$90,f$4,l$90,f$1`,
  ["#"]: `sa$90,u,f$1.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2,u,r$90,f$.5,r$90,f$.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2`,
  ["%"]: `sa$90,u,f$2,r$45,d,f$2.83,u,l$45,f$-1.5,d,arc$-360:.5,u,f$1.5,l$90,f$1.5,d,arc$-360:.5`,
  ["_"]: `f$2`,
  ["|"]: `u,f$1,sa$90,d,f$4`,
  ["\\"]: `u,f$4,r$153.43,d,f$4.47`,
  ['"']: `u,f$.5,sa$90,f$3,d,f$1,u,r$90,f$1,r$90,f$1`,
  ["'"]: `u,f$1,sa$90,f$3,d,f$1`,
  [">"]: `sa$90,u,f$1,r$63.43,d,f$2.24,l$127,f$2.24`,
  // redo
  ["<"]: `u,f$2,sa$90,f$1,l$63.43,d,f$2.24,r$127,f$2.24`,
  // specials
  [" "]: ``,
  ["\r"]: ``,
  ["\n"]: ``
};
var allLetters = Object.keys(letters).join("");

// funcs.ts
var DrawBezier = (org, ang, scale, bezfunc, curveSizes, instructions) => {
  const turtle = new bt.Turtle();
  turtle.jump(org);
  if (instructions) {
    turtle.jump(RunInstructions(instructions, org, scale));
  }
  turtle.setAngle(ang);
  turtle.forward(curveSizes[0] * scale);
  bt.resample(turtle.path, 0.1);
  warp(turtle, (x) => bezfunc(x) * curveSizes[1] * scale);
  drawLines(turtle.lines());
  return;
};

var DrawText = (text, org, scale = 100, spacing = [2.5, 4.5]) => {
  let xInd = 0;
  let yInd = 0;
  for (const x of text.toLowerCase()) {
    if (allLetters.indexOf(x, 0) == -1) {
      RunInstructions(
        letters["?"],
        [
          org[0] + xInd * spacing[0] * scale,
          org[1] - yInd * spacing[1] * scale
        ],
        scale
      );
    } else {
      switch (x) {
        case "\r":
          xInd = 0;
          continue;
        case "\n":
          xInd = 0;
          yInd += 1;
          continue;
        default:
          if (typeof letters[x] == "string") {
            RunInstructions(
              letters[x],
              [
                org[0] + xInd * spacing[0] * scale,
                org[1] - yInd * spacing[1] * scale
              ],
              scale
            );
          } else if (typeof letters[x] == "function") {
            letters[x]([
              org[0] + xInd * spacing[0] * scale,
              org[1] - yInd * spacing[1] * scale
            ], scale);
          }
          break;
      }
      xInd += 1;
      continue;
    }
  }
  return;
};
// ------------------------------
// ------------------------------


// Programme
const progWidth = getChord(tvWidth, tvScreenDeg)
const progHeight = getChord(tvHeight, tvScreenDeg)
const hours = 23// new Date().getHours()
t.down().right(45)
if (hours < 12) {
  t.arc(-180, 30)
  t.left(180)
  t.arc(20, 30).right(90).forward(10).left(180).forward(10).right(90)
  t.arc(20, 30).right(90).forward(10).left(180).forward(10).right(90)
  t.arc(20, 30).right(90).forward(10).left(180).forward(10).right(90)
  t.arc(20, 30).right(90).forward(10).left(180).forward(10).right(90)
  t.arc(20, 30).right(90).forward(10).left(180).forward(10).right(90)
  t.arc(20, 30).right(90).forward(10).left(180).forward(10).right(90)
  t.arc(20, 30).right(90).forward(10).left(180).forward(10).right(90)
  t.arc(20, 30).right(90).forward(10).left(180).forward(10).right(90)
  DrawText('Wakey wakey\neggs and bacey', [0, 0], 2)
} else if (hours < 20) {
  
} else if (hours < 22) {
  
} else {
  DrawText('Off. It\'s late', [0, 0], 2)
}



const cc = bt.bounds(t.lines()).cc;
const centered = bt.translate(t.lines(), [height / 2, width / 2], cc);

// draw it
drawLines(centered);
