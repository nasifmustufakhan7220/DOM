const cardHeartCountBtn = document.querySelectorAll(".card-heart-count");
const cardCallBtn = document.querySelectorAll(".card-call-btn");
const callHistory = document.getElementById("call-history");
const clearedCallHistory = document.getElementById("cleared-call-history");
// const copyNumbers = document.getElementsByClassName("copy-numbers");
const copyBtn = document.querySelectorAll(".copy-btn");

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
      NationalEmergency: { name: "National Emergency", number: 999, time: time },
      Police: { name: "Police", number: 999, time: time },
      FireService: { name: "Fire Service", number: 999, time: time },
      Ambulance: { name: "Ambulance", number: "1994-999999", time: time },
      WomenChildHelpline: { name: "Women & Child Helpline", number: 109, time: time },
      AntiCorruption: { name: "Anti-Corruption", number: 106, time: time },
      Electricity: { name: "Electricity Problem", number: 16216, time: time },
      BRAC: { name: "BRAC", number: 16445, time: time },
      Railway: { name: "Bangladesh Railway", number: 163, time: time }
    };

    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    

    const id = button.id;
    const service = services[id];

    if (!service) {
      alert("Service not found. Please check button IDs.");
      return;
    }

    datas.push(service);

    if (coinCount <= 20) {
        alert("You do not have enough coin to call");
        return;
    } else {
      alert(`Service: ${service.name} | Number: ${service.number}`);
      let sub = coinCount - 20;
      document.getElementById("coin-count").innerText = sub;
      callHistory.innerText = "";
        for (const data of datas) {
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="border-b border-gray-200 px-6 py-4 hover:bg-gray-50 transition">
            <div class="font-semibold text-gray-900 text-sm mb-1">${data.name}</div>
            <div class="text-gray-600 text-sm">${data.number}</div>
            <div class="text-gray-400 text-xs">${data.time}</div>
          </div>
        `;
          callHistory.appendChild(div);
         
        }
        
    }
  });
});

clearedCallHistory.addEventListener("click", function (event) {
    callHistory.innerHTML = "";
    datas.length = 0;
});


copyBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        const copyMainParent = btn.closest(".copy-main-parent");
        const copyNumbers = copyMainParent.querySelector(".copy-numbers");
        const innerTextCopy = copyNumbers.innerText;
        console.log(innerTextCopy);
            navigator.clipboard.writeText(innerTextCopy).then(() => {
                alert("Copied: " + innerTextCopy);
                
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            })
        
    })
})

