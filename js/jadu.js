// signin interface er jonno
function signInKorchere() {
    const username = document.getElementById('usrnm').value;
    const password = document.getElementById('pswrd').value;
    if (username !== 'admin') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Username!",
        });
        document.getElementById('usrnm').value = "";
        document.getElementById('pswrd').value = "";
        return;
    }
    if (password !== 'admin123') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid password!",
        });
        document.getElementById('usrnm').value = "";
        document.getElementById('pswrd').value = "";
        return;
    }
    Swal.fire({
        title: "Login Successful!",
        icon: "success",
        draggable: true
    });
    window.location.replace("./homepage.html");
}
// signin interface er jonno



// all card er datake collect korlam
const pressAll = () => {
    toogle("all");
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(issue => displayAll(issue.data));
}

pressAll();
// all card er datake collect korlam

// open card gulor jonno all data fetch korlam
const pressOpen = () => {
    toogle("open");
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(issue => displayOpen(issue.data));
}
// open card gulor jonno all data fetch korlam

// closed card gulor jonno all data fetch korlam
const pressClose = () => {
    toogle("close");
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(issue => displayClose(issue.data));
}
// closed card gulor jonno all data fetch korlam



// all card display korlam
const displayAll = (issues) => {
    document.getElementById('count').innerText = issues.length;
    const allSection = document.getElementById('all-card-section');
    allSection.innerHTML = "";
    issues.forEach(elmnt => {
        const brdr = elmnt.status == "open" ? "border-green-500" : "border-purple-500";
        allSection.innerHTML += `
        <div onclick="my_modal_5.showModal(),mew(${elmnt.id})" class="bg-white p-3 border-t-3 ${brdr} rounded-xl space-y-1.5 shadow-sm shadow-gray-400 ">
                <div class="flex justify-between items-center">
                ${elmnt.status == "open" ? `<img src="./assets/Open-Status.png">` : `<img src="./assets/Closed- Status .png">`}

                ${elmnt.priority == "high" ? `<div class="text-red-500 bg-red-100 py-0.5 px-4 rounded-2xl text-sm font-medium">HIGH</div>
                </div>`:
                elmnt.priority == "medium" ? `<div class="text-amber-600 bg-amber-100 py-0.5 px-4 rounded-2xl text-sm font-medium">MEDIUM</div>
                </div>`:
                    `<div class="text-gray-500 bg-gray-100 py-0.5 px-4 rounded-2xl text-sm font-medium">LOW</div>
                </div>` }

                <h1 class="font-semibold clr-blck">${elmnt.title}</h1>

                <p class="clr-drk text-[12px] font-normal">${elmnt.description}</p>

                <div class="flex flex-wrap justify-start items-center gap-1">
                ${elmnt.labels.map(el =>
                        `<div class="${el == "bug" ? "bug" :
                            el == "help wanted" ? "help" :
                                el == "enhancement" ? "enhance" :
                                    el == "documentation" ? "dcmnt" :
                                        "good"} py-1 px-2 rounded-xl text-[12px] font-medium flex justify-center border items-center gap-0.5">${el == "bug" ? `<img src="./assets/BugDroid.png">` :
                                            el == "help wanted" ? `<img src="./assets/Lifebuoy.png">` :
                                                el == "enhancement" ? `<img src="./assets/Sparkle.png">` : ""} ${el.toUpperCase()}</div>`
                    ).join("")}   
                </div>

                <hr class=" text-gray-200 my-3">

                <p class="clr-drk text-[12px] ">#1 by <span>${elmnt.author}</span></p>
                <p class="clr-drk text-[12px] ">${elmnt.createdAt}</p>
            </div>
        `
    });
}
//  all card display korlam

// open card guloke display korechi
const displayOpen = (issues) => {
     const openSection = document.getElementById('open-card-section');
    openSection.innerHTML = "";
    let kotore = 0;
    issues.forEach(elmnt => {
        const brdr = elmnt.status == "open" ? "border-green-500" : "border-purple-500";
        if(elmnt.status == "open"){
            kotore++;
        openSection.innerHTML += `
        <div onclick="my_modal_5.showModal(),mew(${elmnt.id})" class="bg-white p-3 border-t-3 ${brdr} rounded-xl space-y-1.5 shadow-sm shadow-gray-400 ">
                <div class="flex justify-between items-center">
                ${elmnt.status == "open" ? `<img src="./assets/Open-Status.png">` : `<img src="./assets/Closed- Status .png">`}

                ${elmnt.priority == "high" ? `<div class="text-red-500 bg-red-100 py-0.5 px-4 rounded-2xl text-sm font-medium">HIGH</div>
                </div>`:
                elmnt.priority == "medium" ? `<div class="text-amber-600 bg-amber-100 py-0.5 px-4 rounded-2xl text-sm font-medium">MEDIUM</div>
                </div>`:
                    `<div class="text-gray-500 bg-gray-100 py-0.5 px-4 rounded-2xl text-sm font-medium">LOW</div>
                </div>` }

                <h1 class="font-semibold clr-blck">${elmnt.title}</h1>

                <p class="clr-drk text-[12px] font-normal">${elmnt.description}</p>

                <div class="flex flex-wrap justify-start items-center gap-1">
                ${elmnt.labels.map(el =>
                        `<div class="${el == "bug" ? "bug" :
                            el == "help wanted" ? "help" :
                                el == "enhancement" ? "enhance" :
                                    el == "documentation" ? "dcmnt" :
                                        "good"} py-1 px-2 rounded-xl text-[12px] font-medium flex justify-center border items-center gap-0.5">${el == "bug" ? `<img src="./assets/BugDroid.png">` :
                                            el == "help wanted" ? `<img src="./assets/Lifebuoy.png">` :
                                                el == "enhancement" ? `<img src="./assets/Sparkle.png">` : ""} ${el.toUpperCase()}</div>`
                    ).join("")}   
                </div>

                <hr class=" text-gray-200 my-3">

                <p class="clr-drk text-[12px] ">#1 by <span>${elmnt.author}</span></p>
                <p class="clr-drk text-[12px] ">${elmnt.createdAt}</p>
            </div>
        `    
        }
      document.getElementById('count').innerText = kotore;    
    })
}
// open cardguloke display korechi



// close card guloke display korechi
const displayClose = (issues) => {
     const closeSection = document.getElementById('close-card-section');
    closeSection.innerHTML = "";
    let kotore = 0;
    issues.forEach(elmnt => {
        const brdr = elmnt.status == "open" ? "border-green-500" : "border-purple-500";
        if(elmnt.status == "closed"){
            kotore++;
        closeSection.innerHTML += `
        <div onclick="my_modal_5.showModal(),mew(${elmnt.id})" class="bg-white p-3 border-t-3 ${brdr} rounded-xl space-y-1.5 shadow-sm shadow-gray-400 ">
                <div class="flex justify-between items-center">
                ${elmnt.status == "open" ? `<img src="./assets/Open-Status.png">` : `<img src="./assets/Closed- Status .png">`}

                ${elmnt.priority == "high" ? `<div class="text-red-500 bg-red-100 py-0.5 px-4 rounded-2xl text-sm font-medium">HIGH</div>
                </div>`:
                elmnt.priority == "medium" ? `<div class="text-amber-600 bg-amber-100 py-0.5 px-4 rounded-2xl text-sm font-medium">MEDIUM</div>
                </div>`:
                    `<div class="text-gray-500 bg-gray-100 py-0.5 px-4 rounded-2xl text-sm font-medium">LOW</div>
                </div>` }

                <h1 class="font-semibold clr-blck">${elmnt.title}</h1>

                <p class="clr-drk text-[12px] font-normal">${elmnt.description}</p>

                <div class="flex flex-wrap justify-start items-center gap-1">
                ${elmnt.labels.map(el =>
                        `<div class="${el == "bug" ? "bug" :
                            el == "help wanted" ? "help" :
                                el == "enhancement" ? "enhance" :
                                    el == "documentation" ? "dcmnt" :
                                        "good"} py-1 px-2 rounded-xl text-[12px] font-medium flex justify-center border items-center gap-0.5">${el == "bug" ? `<img src="./assets/BugDroid.png">` :
                                            el == "help wanted" ? `<img src="./assets/Lifebuoy.png">` :
                                                el == "enhancement" ? `<img src="./assets/Sparkle.png">` : ""} ${el.toUpperCase()}</div>`
                    ).join("")}   
                </div>

                <hr class=" text-gray-200 my-3">

                <p class="clr-drk text-[12px] ">#1 by <span>${elmnt.author}</span></p>
                <p class="clr-drk text-[12px] ">${elmnt.createdAt}</p>
            </div>
        `    
        }
      document.getElementById('count').innerText = kotore;    
    })
}
// close cardguloke display korechi



// button toogle korar jonno
function toogle(id) {
    document.getElementById('all').classList.remove('bg-blue-700', 'text-white');
    document.getElementById('open').classList.remove('bg-blue-700', 'text-white');
    document.getElementById('close').classList.remove('bg-blue-700', 'text-white');
    document.getElementById(id).classList.add('bg-blue-700', 'text-white');
    
    
    document.getElementById('all-card-section').classList.add('hidden');
    document.getElementById('open-card-section').classList.add('hidden');
    document.getElementById('close-card-section').classList.add('hidden');
    if(id=='all')
        document.getElementById('all-card-section').classList.remove('hidden');
    else if(id=='open')
        document.getElementById('open-card-section').classList.remove('hidden');
    else
        document.getElementById('close-card-section').classList.remove('hidden');
}


function mew (url){
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${url}`)
    .then(res => res.json())
    .then(dtls => displayModal(dtls.data))
}

function displayModal (elmnt) {
    console.log(elmnt);
    const modal = document.getElementById('my_modal_5');
    modal.innerHTML = "";
    modal.innerHTML = `
                <div class="modal-box">
                    <h1 class="text-[#1F2937] font-bold text-2xl mb-1.5">${elmnt.title}</h1>
                    <div class="flex justify-start items-center gap-1.5">
                        <div class="text-[12px] font-medium text-white ${elmnt.status == 'open'? "bg-green-600": "bg-red-500"} py-1 px-2 rounded-2xl">${elmnt.status == 'open'? "Opened": "Closed"}</div>
                        <p class="clr-drk text-[12px] font-medium"> • <span>${elmnt.status} by ${elmnt.author}</span> • <span>${elmnt.updatedAt}</span></p>
                    </div>

                     <div class="flex flex-wrap justify-start items-center gap-1 my-4">
                        ${elmnt.labels.map(el =>
                        `<div class="${el == "bug" ? "bug" :
                            el == "help wanted" ? "help" :
                                el == "enhancement" ? "enhance" :
                                    el == "documentation" ? "dcmnt" :
                                        "good"} py-1 px-2 rounded-xl text-[12px] font-medium flex justify-center border items-center gap-0.5">${el == "bug" ? `<img src="./assets/BugDroid.png">` :
                                            el == "help wanted" ? `<img src="./assets/Lifebuoy.png">` :
                                                el == "enhancement" ? `<img src="./assets/Sparkle.png">` : ""} ${el.toUpperCase()}</div>`).join("")}   
                    </div>

                    <p class="clr-drk">${elmnt.description}</p>
                    <div class="flex justify-start gap-32 items-center my-7 bg-gray-50 p-3 rounded-lg">
                        <div>
                            <p class="clr-drk">Assignee:</p>
                            <h4 class="font-semibold clr-blck">${elmnt.assignee}</h4>
                        </div>
                        <div class="">
                            <p class="clr-drk">Priority:</p>
                            <div class="${elmnt.priority == 'high'? "bg-red-400":
                                elmnt.priority == 'medium'? "bg-amber-400": "bg-gray-400"
                            } text-white py-1 px-4 rounded-2xl text-sm">
                            ${elmnt.priority == 'high'? "HIGH":
                                elmnt.priority == 'medium'? "MEDIUM": "LOW"
                            }
                            </div>
                        </div>
                    </div>
                    <div class="modal-action">
                        <form method="dialog">
                            <button class="btn btn-primary">Close</button>
                        </form>
                    </div>
                </div>
    `
};