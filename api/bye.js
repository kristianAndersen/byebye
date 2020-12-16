
const svg64 = require('svg64');

export default (req, res) => {

res.setHeader("Content-Type", "image/svg+xml");








const { bye = 'pix' } = req.query
let ary = bye.split(",");

let colary=['#fec514','#8d9dfd','#e15b55','#977d38','#f3580a','#138a22','#8514af','#4675d5','#4aa57a','#b1ca5d']
let randnum = Math.floor(Math.random()*colary.length)
let color=colary[randnum];

let text;


if(parseInt(countdownTimer())) {
   
text=`<tspan  x='50%' y='30%'>Jeg er ude af her om</tspan>
<tspan  x='50%' y='60%'>${countdownTimer()}</tspan>
<tspan  x='50%' y='80%' font-size='10'>PS. har ferie fra den 10 til den 25</tspan>
`


   }
   else {
    text=text=`<tspan  x='50%' y='40%'>Jeg er ude af her bitches</tspan>`
   }

let svg=`<svg xmlns='http://www.w3.org/2000/svg' width='650' height='150' viewBox='0 0 650 150'>
<rect fill='${color}' width='650' height='150'/>
<text fill='rgba(255,255,255,0.5)' font-family='sans-serif' font-size='30' dy='10.5' font-weight='bold' x='50%' y='50%' text-anchor='middle'>
${text}

</text>
</svg>`

function countdownTimer() {
    const difference = +new Date("2020-12-31") - +new Date();
    let remaining = "Jeg arbejder ikke her mere hahahahaha";
  
    if (difference > 0) {
      const parts = {
        dage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        timer: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutter: Math.floor((difference / 1000 / 60) % 60),
        sekunder: Math.floor((difference / 1000) % 60),
      };
      remaining = Object.keys(parts).map(part => {
      return `${parts[part]} ${part}`;
      }).join(" ");
    }
  
    return remaining;
  }


 
  const base64fromSVG = svg64(svg);
  console.log(base64fromSVG)
  res.status(200).send(base64fromSVG)




}
