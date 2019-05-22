const canvas = document.getElementById("canvas")

window.onload = function() {
  setCanvasSize()
  setCanvasMask()
  drawArc(canvas)

  document.getElementById("rate-days").textContent = getRateDays()
}

window.onresize = function() {
  setCanvasSize()
  setCanvasMask()
  drawArc(canvas)
}

function setCanvasSize() {
  canvas.setAttribute("width", window.outerWidth * 2)
  canvas.setAttribute("height", window.outerHeight * 2)
}

function setCanvasMask() {
  const style = document.getElementById("canvas-mask").style

  const x = canvas.clientWidth
  const y = canvas.clientHeight
  style.width = (x > y ? y : x) + "px"
  style.height = (x > y ? y : x) + "px"
}

function drawArc(canvas) {
  if (
    !canvas ||
    !canvas.getContext ||
    Date.parse(new Date(2019, 1, 16, 0, 0)) - Date.now() < 0
  )
    return

  const ctx = canvas.getContext("2d")
  // endangle計算
  const current = Date.parse(new Date(2019, 1, 16, 0, 0)) - Date.now()
  const standard =
    Date.parse(new Date(2019, 1, 16, 0, 0)) -
    Date.parse(new Date(2019, 1, 8, 0, 0))
  const rate = current / standard
  //   rate = 0.9
  const endAngle = (rate * 2 - 0.5) * Math.PI

  // x, yはcenter position
  const x = canvas.width / 2
  const y = canvas.height / 2
  const radius = y > x ? x * 0.9 : y * 0.8
  const linewidth = y > x ? x * 0.12 : y * 0.12

  // グラデーションパラメータ
  const gradient = ctx.createLinearGradient(0, 0, 0, y * 2)
  gradient.addColorStop(0, "#00ded2")
  gradient.addColorStop(1, "#fde1ff")

  // 線のスタイル
  ctx.lineWidth = linewidth
  ctx.strokeStyle = gradient
  ctx.lineCap = "round"

  // 描画
  ctx.beginPath()
  console.log(rate * Math.PI)
  ctx.arc(x, y, radius, -0.5 * Math.PI, 1.5 * rate * Math.PI, false)
  ctx.stroke()
}

function getRateDays() {
  const publicDate = new Date(2019, 1, 16, 0, 0)
  const nowDate = new Date()
  return publicDate.getDate() - nowDate.getDate()
}
