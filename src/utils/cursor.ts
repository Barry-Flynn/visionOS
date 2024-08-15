// @ts-nocheck
let mainCursor

Math.lerp = (a, b, n) => (1 - n) * a + n * b

const getStyle = (el, attr) => {
  try {
    return window.getComputedStyle ? window.getComputedStyle(el)[attr] : el.currentStyle[attr]
  } catch (e) {
    console.error(e)
  }
  return false
}

const cursorInit = () => {
  mainCursor = new Cursor()
  return mainCursor
}

class Cursor {
  constructor() {
    this.pos = {
      curr: null,
      prev: null
    }
    this.pt = []
    this.create()
    this.init()
    this.render()
  }

  move(left, top) {
    this.cursor.style['left'] = `${left}px`
    this.cursor.style['top'] = `${top}px`
  }

  create() {
    if (!this.cursor) {
      this.cursor = document.createElement('div')
      this.cursor.id = 'cursor'
      // this.cursor.classList.add('xs-hidden')
      this.cursor.classList.add('hidden')
      document.body.append(this.cursor)
    }

    const el = document.getElementsByTagName('*')
    for (let i = 0; i < el.length; i++)
      if (getStyle(el[i], 'cursor') == 'pointer') this.pt.push(el[i].outerHTML)

    // 自定义鼠标样式
    document.body.appendChild((this.scr = document.createElement('style')))
    this.scr.innerHTML = `* {
      cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='10px' height='10px'><circle cx='4' cy='4' r='4' fill='white' opacity='0.8' /></svg>") 4 4, auto !important
    }
    #cursor {
      position: fixed;
      width: 18px;
      height: 18px;
      background: #fff;
      border-radius: 25px;
      opacity: 0.25;
      z-index: 10086;
      pointer-events: none;
      transition: 0.1s ease-in-out;
      transition-property: background, opacity, transform;
    }
    #cursor.hidden {
      opacity: 0;
    }
    #cursor.active {
      opacity: 0.5;
      transform: scale(0.5);
    }`
  }

  refresh() {
    this.scr.remove()
    this.cursor.classList.remove('active')
    this.pos = {
      curr: null,
      prev: null
    }
    this.pt = []

    this.create()
    this.init()
    this.render()
  }

  init() {
    document.onmousemove = (e) => {
      this.pos.curr == null && this.move(e.clientX - 8, e.clientY - 8)
      this.pos.curr = {
        x: e.clientX - 8,
        y: e.clientY - 8
      }
      this.cursor.classList.remove('hidden')
    }
    document.onmouseenter = () => this.cursor.classList.remove('hidden')
    document.onmouseleave = () => this.cursor.classList.add('hidden')
    document.onmousedown = () => this.cursor.classList.add('active')
    document.onmouseup = () => this.cursor.classList.remove('active')
  }

  render() {
    if (this.pos.prev) {
      this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.35)
      this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.35)
      this.move(this.pos.prev.x, this.pos.prev.y)
    } else {
      this.pos.prev = this.pos.curr
    }
    requestAnimationFrame(() => this.render())
  }
}

// type CursorType = {
//   cursor: HTMLElement
//   pos: {
//     curr: { x: number; y: number }
//     prev: { x: number; y: number }
//   }
//   pt: HTMLElement[]
//   scr: HTMLElement
//   move: (left: number, top: number) => void
//   create: () => void
//   refresh: () => void
//   init: () => void
//   render: () => void
// }

export default cursorInit
