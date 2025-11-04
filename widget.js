import { getColorIterator } from "./utils/colors/color.js"
import olho from "./elementos.js"

function widget(key, draw) {
    
    let nextColor = getColorIterator(key)

    draw.rect().size(500,500).move(250,250).fill(nextColor())
    draw.circle().size(350).move(400,325).fill(nextColor()).opacity(0.5)
    draw.circle().size(350).move(250,325).fill(nextColor()).opacity(0.5)
    draw.path('M25,27 C25,27 19,34.2706667 19,38.2706667 C19,41.5846667 21.686,44.2706667 25,44.2706667 C28.314,44.2706667 31,41.5846667 31,38.2706667 C31,34.2706667 25,27 25,27 Z')

    const svgString = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="blue" />
    <text x="50" y="55" font-size="12" text-anchor="middle" fill="white">Olá!</text>
  </svg>
`

draw.svg(olho);

    //let n = key.next() % 3
    //draw.darwSvg(olhos[n])
    // Descomente linha abaixo para ver exemplo 0
    //sample(key,draw)
}

export default widget