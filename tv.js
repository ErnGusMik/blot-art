// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 180;
const height = 180;

const tvWidth = 80
const tvHeight = 60
const tvBezel = 7

setDocDimensions(width, height);

const t = new bt.Turtle();

t.forward(tvWidth);
t.arc(90, 3);
t.forward(tvHeight);
t.arc(90, 3);
t.forward(tvWidth);
t.arc(90, 3);
t.forward(tvHeight);
t.arc(90, 3);
t.up().right(90).forward(tvBezel + 2.5).left(90).down()
t.forward(tvWidth + 4 * tvBezel)
t.arc(90, 5);
t.forward(tvHeight + 2 * tvBezel)
t.arc(90, 5);
t.forward(tvWidth + 5 * tvBezel)
t.arc(90, 5)
t.forward(tvHeight + 2 * tvBezel)
t.arc(90, 5)
t.forward(tvBezel);
t.up().left(90).forward(tvBezel + 2.5).right(45).down()
t.forward(tvHeight)






const cc = bt.bounds(t.lines()).cc;
const centered = bt.translate(t.lines(), [height / 2, width / 2], cc);


// draw it
drawLines(centered);

