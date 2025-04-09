window.onload = () => {
    let all = document.getElementsByClassName("zoom"),
        lightbox = document.getElementById("rev-lightbox");
   
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
      };
    }}
   
    lightbox.onclick = () => lightbox.className = "";
};