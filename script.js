function enter() {
        let status = document.getElementById("status");
        let heading = document.createElement("h1");

        heading.innerHTML = "Entered Metaverse";
        status.innerHTML="";
        status.appendChild(heading);
        console.log(status)
      }