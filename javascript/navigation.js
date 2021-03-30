const navigationDetails = document.getElementById("navigationDetails")

str1 = "Navigation Details will appear here... <br>" + "<li>Total Time</li>"
str2 = str1 + "<li>Total Cost</li>"
str3 = str2 +  "<li>Extra Details...</li>"
setTimeout(()=> {console.log("111"); navigationDetails.innerHTML = str1; setTimeout(()=> { navigationDetails.innerHTML = str2; setTimeout(()=> { navigationDetails.innerHTML=str3; },600) }, 600) }, 1000)
