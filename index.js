const cardHeartCountBtn = document.querySelectorAll(".card-heart-count");
const cardCallBtn = document.querySelectorAll(".card-call-btn");

const datas = [];

cardHeartCountBtn.forEach(button => {
    button.addEventListener("click", function () {
        const heratCount = parseInt(document.getElementById("heart-count").innerText);
        let result = heratCount + 1;
        document.getElementById("heart-count").innerText = result;
    })
});



cardCallBtn.forEach(button => {
    button.addEventListener("click", function () {
            const time = new Date().toLocaleTimeString();
    const services = {
        NationalEmergency: { name: "National Emergency", number: 999, time: time},
        Police: { name: "Police", number: 999 },
        FireService :{name: "Fire Service", number: 999},
        Ambulance :{name: "Ambulance", number: '1994-999999'},
        WomenChildHelpline :{name: "Women & Child Helpline", number: 109},
        AntiCorruption :{name: "Anti-Corruption", number: 106},
        Electricity :{name: "Electricity Problem", number: 16216},
        BRAC :{name: "BRAC", number: 16445},
        Railway :{name: "Bangladesh Railway", number: 163},
    }
        const coinCount = parseInt(document.getElementById("coin-count").innerText);
        const callHistory = document.getElementById("call-history");
        callHistory.innerText = ""
        const id = button.id;
        const service = services[id];
        datas.push(service);
        if (coinCount > 20) {
            alert(`Service: ${service.name} | Number: ${service.number}`);
            let sub = coinCount - 20;
            document.getElementById("coin-count").innerText = sub;
            for (const data of datas) {
                const div = document.createElement("div");
                div.innerHTML = `
                <div
                class="border-b border-gray-200 px-6 py-4 hover:bg-gray-50 transition"
              >
                <div class="font-semibold text-gray-900 text-sm mb-1">
                  ${data.name}
                </div>
                <div class="text-gray-600 text-sm">${data.number}</div>
                <div class="text-gray-400 text-xs">${data.time}</div>
              </div>
            `
                callHistory.appendChild(div);
            }
        } else {
            alert("You do not have enough coin to call");
            return;
        }
        
    });
})