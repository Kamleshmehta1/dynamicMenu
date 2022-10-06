let container = document.querySelector(".container");
let ulContainer = document.querySelector(".ulContainer");

let length = jsonArray.length;
let count = 0;

document.addEventListener('contextmenu', handleClick);

function handleClick(event) {
    event.preventDefault();
    count = 0;
    renderElements(jsonArray);
}

let commandsArr = [];
function renderElements(newArr, ul, newCommand) {
    count += 1;
    if (count != 0) {
        document.removeEventListener("contextmenu", handleClick)
    }

    if (Array.isArray(newArr)) {
        newArr.forEach((ele) => {
            let li = document.createElement("li");
            if (ele.label !== undefined) {
                li.innerHTML = `<i class="${ele.icon}"></i> ${ele.label}${Array.isArray(ele.items) ? '<i class="bi bi-chevron-right"></i>' : ""}`;
            } else {
                li.innerHTML = `<div></div>`
                li.classList = "hr"
            }
            if (ele.command) {
                li.setAttribute("onclick", `callMe(event,${ele.command})`)
            }

            if (count === 1) {
                ulContainer.appendChild(li);
            } else if (ul) {
                ul.appendChild(li)
            }

            ele.label === "Quit" ? li.id = "Quit" : ""
            if (document.querySelector("#Quit")) {
                document.querySelector("#Quit").addEventListener("click", () => {
                    ulContainer.innerHTML = ""
                    document.addEventListener("contextmenu", handleClick);
                })
            }
            li.addEventListener("mouseenter", (e) => {
                ele.label !== undefined && Array.isArray(ele.items) ? createElements(e, ele.items, li) : null
            }, { once: true })
        })
    }
}
function createElements(e, item, li) {
    let ul = document.createElement("ul");
    li.appendChild(ul);
    item ? renderElements(item, ul) : null;
}

function callMe(event, callbackEvent) {
    callbackEvent(`Event type: ${event.type}`);
}