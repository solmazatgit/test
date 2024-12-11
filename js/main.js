

let num = 5

for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
        document.write(`<span class="empty">  </span>`)
    }
    for (let j = 0; j < 2*i - 1; j++) {
        document.write(`<span class="star"> * </span>`)
    }

    document.write(`<br />`)
}


/* diamond bottom*/
for (let i = 1; i < num-1; i++) {
    for (let j = 1; j <= i+1; j++) {
        document.write(`<span class="emptyg">  </span>`)
    }
    for (let j = 1; j <= 2*(num-1 - i) - 1; j++) {
        document.write(`<span class="star"> * </span>`)
    }


    document.write(`<br />`)
}