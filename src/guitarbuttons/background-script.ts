import {
    Sprite,
    Application,
    Text,
} from "pixi.js";

const Q: number = 81;
const W: number = 87;
const E: number = 69;
const R: number = 82;
const T: number = 84;

let qscorefactor = 1;
let wscorefactor = 1;
let escorefactor = 1;
let rscorefactor = 1;
let tscorefactor = 1;

let qcountfactor = 1;
let wcountfactor = 1;
let ecountfactor = 1;
let rcountfactor = 1;
let tcountfactor = 1;

let score = 0;
let count = 5;

// create Application object required by pixi.js
// define windows size of app in Application constructor call
const app: Application = new Application(1280, 720);
document.body.appendChild(app.view); // <-- appends the app's view property to the HTML document element

// a sprite is just a visual element in the app
let background: Sprite = Sprite.fromImage("./hack110bgfinal.png");
app.stage.addChild(background);

class Note {
    sprite: Sprite;
    direction: number;
    constructor(sprite: Sprite) {
        this.sprite = sprite;
    }
}

// Game text positioning
let scoreboard: Text = new Text();
scoreboard.x = 945;
scoreboard.y = 80;
app.stage.addChild(scoreboard);

let instructions1: Text = new Text();
instructions1.x = 782;
instructions1.y = 630;
app.stage.addChild(instructions1);

let instructions2: Text = new Text();
instructions2.x = 782;
instructions2.y = 660;
app.stage.addChild(instructions2);

let instructions3: Text = new Text();
instructions3.x = 782;
instructions3.y = 690;
app.stage.addChild(instructions3);

let qKey: Sprite = Sprite.fromImage("./qbutton.png")
qKey.x = 96;
qKey.y = 550;
app.stage.addChild(qKey);

let wKey: Sprite = Sprite.fromImage("./wbutton.png")
wKey.x = 222;
wKey.y = 550;
app.stage.addChild(wKey);

let eKey: Sprite = Sprite.fromImage("./ebutton.png")
eKey.x = 346;
eKey.y = 550;
app.stage.addChild(eKey);

let rKey: Sprite = Sprite.fromImage("./rbutton.png")
rKey.x = 472;
rKey.y = 550;
app.stage.addChild(rKey);

let tKey: Sprite = Sprite.fromImage("./tbutton.png")
tKey.x = 594;
tKey.y = 550;
app.stage.addChild(tKey);

// Store array of notes
let notes1: Note[] = [];
for (let i: number = 0; i <= 4; i++) {
    let note: Sprite = Sprite.fromImage("./musicdot.png");
    note.x = 100 + i * 125;
    note.y = 40;
    let blob: Note = new Note(note);
    blob.direction = 1;
    notes1.push(blob);
    app.stage.addChild(blob.sprite);
}

let isColliding = (a: Sprite, b: Sprite): boolean => {
    let ab = a.getBounds();
    let bb = b.getBounds();
    return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
}

// for each ticker
app.ticker.add((delta: number): void => {
    for (let i: number = 0; i < notes1.length; i++) {
        notes1[i].sprite.y += 15 * notes1[i].direction;

        if (Math.random() < 0.01) { // 1% chance every tick
            notes1[i].direction *= -1;
        }
        if (notes1[i].sprite.y <= 0) {
            notes1[i].direction = 1;
            notes1[i].sprite.y = 1;
        } else if (notes1[i].sprite.y >= 650) {
            notes1[i].direction = -1;
            // notes1[i].sprite.y = innerHeight - 1;
        }
    }

    // win screen 
    if (count === 0) {
        if (score >= 50) {
            app.stage.removeChild(instructions2);
            app.stage.removeChild(instructions3);
            instructions1.text = "Perfect score!";
        } else {
            app.stage.removeChild(instructions2);
            app.stage.removeChild(instructions3);
            instructions1.text = "Your score is " + score;
        }
    }
    scoreboard.text = "Score: " + score;
})

instructions1.text = "Press on the corresponding key when";
instructions2.text = "the notes reaches the corresponding";
instructions3.text = "keys. Score 50 points to win!";

// keydown button functionality
window.addEventListener("keydown", (e: KeyboardEvent): void => {
    // console.log("key: " + e.keyCode);
    if (e.keyCode === Q && isColliding(notes1[0].sprite, qKey)) {
        score += 10 * qscorefactor;
        count -= 1 * qcountfactor;
        qscorefactor = 0;
        qcountfactor = 0;
        app.stage.removeChild(notes1[0].sprite);
    } else if (e.keyCode === W && isColliding(notes1[1].sprite, wKey)) {
        score += 10 * wscorefactor;
        count -= 1 * wcountfactor;
        wscorefactor = 0;
        wcountfactor = 0;
        app.stage.removeChild(notes1[1].sprite);
    } else if (e.keyCode === E && isColliding(notes1[2].sprite, eKey)) {
        score += 10 * escorefactor;
        count -= 1 * ecountfactor;
        escorefactor = 0;
        ecountfactor = 0;
        app.stage.removeChild(notes1[2].sprite);
    } else if (e.keyCode === R && isColliding(notes1[3].sprite, rKey)) {
        score += 10 * rscorefactor;
        count -= 1 * rcountfactor;
        rscorefactor = 0;
        rcountfactor = 0;
        app.stage.removeChild(notes1[3].sprite);
    } else if (e.keyCode === T && isColliding(notes1[4].sprite, tKey)) {
        score += 10 * tscorefactor;
        count -= 1 * tcountfactor;
        tscorefactor = 0;
        tcountfactor = 0;
        app.stage.removeChild(notes1[4].sprite);
    }

    if ((e.keyCode === Q) && !isColliding(notes1[0].sprite, qKey)) {
        score -= 5 * qscorefactor;
    } else if ((e.keyCode === W) && !isColliding(notes1[1].sprite, wKey)) {
        score -= 5 * wscorefactor;
    } else if ((e.keyCode === E) && !isColliding(notes1[2].sprite, eKey)) {
        score -= 5 * escorefactor;
    } else if ((e.keyCode === R) && !isColliding(notes1[3].sprite, rKey)) {
        score -= 5 * rscorefactor;
    } else if ((e.keyCode === T) && !isColliding(notes1[4].sprite, tKey)) {
        score -=5 * tscorefactor;
    }
});
