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


// all card display korlam
const displayAll = (issues) => {
    document.getElementById('count').innerText = issues.length;
    const allSection = document.getElementById('all-card-section');
    allSection.innerHTML = "";
    issues.forEach(elmnt => {
        const brdr = elmnt.status == "open"? "border-green-500":"border-purple-500";
        allSection.innerHTML += `
        <div class="bg-white p-3 border-t-3 ${brdr} rounded-xl space-y-1 shadow-sm shadow-gray-400">
                <div class="flex justify-between items-center">
                ${elmnt.status == "open" ? `<img src="./assets/Open-Status.png">` : `<img src="./assets/Closed- Status .png">`}

                ${elmnt.priority == "high" ? `<div class="text-red-500 bg-red-100 py-0.5 px-4 rounded-2xl text-sm font-medium">HIGH</div>
                </div>`:
                  elmnt.priority == "medium"?`<div class="text-amber-600 bg-amber-100 py-0.5 px-4 rounded-2xl text-sm font-medium">MEDIUM</div>
                </div>`:
                 `<div class="text-gray-500 bg-gray-100 py-0.5 px-4 rounded-2xl text-sm font-medium">LOW</div>
                </div>` }

                <h1 class="font-semibold clr-blck">${elmnt.title}</h1>

                <p class="clr-drk text-[12px] font-normal">${elmnt.description}</p>

                <div class="flex justify-start items-center gap-1">
                    <div class="text-red-500 bg-red-100 border border-red-200 py-1 px-2 rounded-xl text-[12px] font-medium flex justify-center items-center gap-0.5"><img src="./assets/BugDroid.png"> BUG</div>
                    <div class="text-amber-600 bg-amber-100 border border-amber-200 py-1 px-2 rounded-xl text-[12px] font-medium flex justify-center items-center gap-0.5"><img src="./assets/Lifebuoy.png"> HELP WANTED</div> 
                </div>

                <hr class=" text-gray-200 my-3">

                <p class="clr-drk text-[12px] ">#1 by <span>${elmnt.author}</span></p>
                <p class="clr-drk text-[12px] ">${elmnt.createdAt}</p>
            </div>
        `
    });
}
//  all card display korlam


// button toogle korar jonno
function toogle (id) {
    document.getElementById('all').classList.remove('bg-blue-700','text-white');
    document.getElementById('open').classList.remove('bg-blue-700','text-white');
    document.getElementById('close').classList.remove('bg-blue-700','text-white');
    document.getElementById(id).classList.add('bg-blue-700','text-white');
}