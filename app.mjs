function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
 const etisalat = "./Logo/9-Mobile-Logo-Portrait-1-1280x720.jpg";
const airtel = "./Logo/airtel-logo-white-text-vertical.jpg";
const glo = "./Logo/Glo-Logo.jpg";
const mtn = "./Logo/MTN-logo.jpg";

const number = document.getElementById("telephone");
const Image = document.querySelector("img");
const Container = document.querySelector("#container");
const message = document.createElement("message");
Image.style.opacity = "0";

const numbers = {
  mtn: ["0803", "0806", "0703", "0706", "0813", "0816", "0810", "0814", "0903"],
  glo: ["0805", "0807", "0705", "0815", "0811", "0905"],
  airtel: ["0802", "0808", "0812", "0701", "0902"],
  etisalat: ["0809", "0818", "0817", "0909"],
};
const numbers2 = {
  mtn: ["803", "806", "703", "706", "813", "816", "810", "814", "903"],
  glo: ["805", "807", "705", "815", "811", "905"],
  airtel: ["802", "808", "812", "701", "902"],
  etisalat: ["809", "818", "817", "909"],
};
const numbers3 = [["0802", "0803", "0805", "0806", "0807", "0808","0809"], 
    ["0701", "0703", "0705", "0706"], 
    ["0902", "0903", "0905", "0909"],
    ["0811", "0812", "0813", "0814", "0815", "0816", "0817", "0818", "0810"]];


number.addEventListener("keypress", (e) => {
  const value = e.target.value;
  Container.append(message);
  
  if (value.startsWith("+234")) {
    if (value.length == 4 || value.length == 8 || value.length == 12) {
      e.target.value += "-";
    }
    if (value.length == 17) {
      alert("Only 17 characters are required")
    }
    if (value.length > 3 && value.length < 9) {
      for (const [lines, num] of Object.entries(numbers2)) {
        const check = value.slice(5, 8);
        if (num.includes(check)) {
          Image.style.opacity = "0";
          Image.src = "";
          showImage(lines);
          Image.style.opacity = "1";
          return;
        }
      }
    }
    
  }else if (value.startsWith("0")) {
    if (value.length == 4 || value.length == 8) {
      e.target.value += "-";
    }
    if (value.length == 13) {
      alert("Only 13 characters are required")
    }
    if (value.length <= 5) {
      
      for (const [lines, num] of Object.entries(numbers)) {
        const check = value.slice(0, 4);
        console.log(check)
        if (num.includes(check)) {
           Image.style.opacity = "0";
           Image.src = ''
          showImage(lines);
          Image.style.opacity = "1";
          return;
        }
      }
    } 
  } else {
    Image.style.opacity = "0";
    Image.src = "";
  }
});

const showImage = (provider) => {
  if (provider === "mtn") {
    Image.src = mtn;
  } else if (provider === "glo") {
    Image.src = glo;
  } else if (provider === "airtel") {
    Image.src = airtel;
  } else if (provider === "etisalat") {
    Image.src = etisalat;
  }
};

    
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //