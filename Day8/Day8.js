
// isNaN -> checks whether the given input is characters
//    isNaN("10a") -> true
//    isNaN(10) -> false

function main(m, n) {
    new Promise((resolve, reject) => {
        window.setTimeout( () => {
            if (isNaN(m) || isNaN(n)) {
                return reject();
            }
            for (let i = m; i <= n; i++) {
                console.log(i);
            }
            return resolve();
        }, 5000)
    })
    .then(() => console.log("Promise resolved"))
    .catch(() => console.log("Error Occurred"))
}
main(1, 232);

function demo() {
    console.log("Number's printed");
}
demo();

// promise chining
// using multiple then methods
