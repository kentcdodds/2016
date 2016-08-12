import 'polyfill';
import $ from 'jquery';

function moveTo(x, y, duration) {
    return $('#mario').animate({
        left: x,
        top: y
    },
    {
        duration: duration,
        queue: false
    }).promise();
}

function sleep(duration) {
    return new Promise(resolve => { 
        setTimeout(resolve, duration);
    });
}

animateMarioRandom();

async function animateMario() {
    await moveTo(50, 50, 200);
    await sleep(200);
    await moveTo(100, 0, 200);
    await sleep(200);
    await moveTo(150, 50, 200);
    await sleep(200);
    await moveTo(200, 0, 200);
    await sleep(200);
}

async function animateMarioRandom() {
    while (true) {
        await moveTo(Math.random() * 800, Math.random() * 200, Math.random() * 200);
        await sleep(Math.random() * 40);
    }
}
