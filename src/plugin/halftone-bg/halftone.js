
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rows = [];
let globalFade = 0;

const img = new Image();
img.src = "./halftone.png";

img.onload = () => {
    init();
    animate();
};

function init() {
    rows = [];

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    tempCtx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const data = tempCtx.getImageData(0, 0, canvas.width, canvas.height).data;

    const gap = 6;
    let rowMap = {};

    for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {

            const i = (y * canvas.width + x) * 4;

            if (data[i + 3] > 100) {

                if (!rowMap[y]) {
                    rowMap[y] = {
                        delay: Math.random() * 300,
                        points: []
                    };
                }

                rowMap[y].points.push({
                    x,
                    y,
                    phase: Math.random() * Math.PI * 2,
                    speed: 0.8 + Math.random() * 1.2
                });
            }
        }
    }

    for (let y in rowMap) {
        let row = rowMap[y];
        row.points.sort((a, b) => a.x - b.x);

        rows.push({
            points: row.points,
            delay: row.delay
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (globalFade < 1) globalFade += 0.01;
    ctx.globalAlpha = globalFade;

    let time = Date.now() * 0.0008;

    rows.forEach(row => {

        let cycle = (time * 0.5 + row.delay) % 2.0;
        //  0 1 = masuk, 2 = keluar

        let points = row.points;
        let len = points.length;

        points.forEach((dot, i) => {

            let pos = i / len;

            let scale = 0;
            let alpha = 0;

            // ENTER (kiri kanan)
            if (cycle < 1) {
                let p = cycle;

                if (pos < p) {
                    let wave = Math.sin(time * dot.speed + dot.phase);

                    scale = 0.4 + (wave + 1) * 0.4;
                    alpha = 0.2 + (wave + 1) * 0.4;
                }
            }

            // EXIT (kiri kanan juga)
            else {
                let p = (cycle - 1);

                if (pos < p) {
                    let wave = Math.sin(time * dot.speed + dot.phase);

                    scale = (0.4 + (wave + 1) * 0.4) * (1 - p);
                    alpha = (0.6) * (1 - p);
                }
                else {
                    let wave = Math.sin(time * dot.speed + dot.phase);

                    scale = 0.4 + (wave + 1) * 0.4;
                    alpha = 0.2 + (wave + 1) * 0.4;
                }
            }

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 1.2 * scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,0,0,${alpha})`;
            ctx.fill();
        });
    });

    ctx.globalAlpha = 1;

    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});