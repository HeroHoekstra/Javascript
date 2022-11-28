for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 20; j++) {
        for (let k = 0; k < 6; k++) {
            const newP = document.createElement("p");
            if (j != 9) {
                newP.setAttribute("id", `p${i + 1}Row${j}Col${k}`);
                newP.setAttribute("onclick", `place(${i}, ${j})`);
            } else {
                newP.setAttribute("class", 'clear');
            }

            const item = document.getElementById(`score${i + 1}`);
            item.appendChild(newP);
        }
    }
}