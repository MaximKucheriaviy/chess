const fields = [];
for (let i = 1; i <= 8; i++) {
    const line = [];
    for (let j = 1; j <= 8; j++){
        if ((i + j) % 2 == 0) {
            const element = createField('#d0d3d4',j, i)
            line.push(element);
            fields.push(element)
        }
        else {
            const element = createField('#343434',j, i)
            line.push(element);
            fields.push(element);
        }
    }
    const row = document.createElement('div');
    row.style.display = "flex";
    line.forEach(item => row.append(item.div));
    document.querySelector('.board').append(row);
}

document.querySelector('.board').addEventListener('click', event => {
    if (event.target.dataset.type === "field") {
        const element = fields.find(item => item.div === event.target);
        console.log(element.x, element.y);
    }
})

function createField(color, x, y) {
    const div = document.createElement('div');
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = `${color}`;
    div.dataset.type = "field";
    return {div, x, y: (y - 9) * -1};
}