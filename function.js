setInterval(timing,1000)
const Second = document.getElementsByClassName("second");
const Minute = document.getElementsByClassName("minute");
const Hour = document.getElementsByClassName("hour");

function timing()
{
    const d = new Date();
    const sec = d.getSeconds();
    const min = d.getMinutes();
    const hor = d.getHours();
    // Second[0].style.transform = "rotate("+(sec*6)+"deg)"
    Second[0].style.transform = `rotate(${sec*6}deg)`;
    Minute[0].style.transform = `rotate(${min*6}deg)`;
    Hour[0].style.transform = `rotate(${hor*30+min/2}deg)`
}

// Watch faces changing -------------------------------------------------------------------

const watchFaces = document.getElementsByClassName("watch-faces");
const watch = document.getElementsByClassName("watch");
const Faces = document.getElementsByClassName("wfaces");
const Img = document.getElementsByTagName("img");

function view()
{
    watchFaces[0].style.display = "block"
}
for(let i=0;i<Faces.length;i++)
{
    Faces[i].addEventListener("click",() => { Change(i) })
}

function Change(i)
{
    let x = Img[i].getAttribute("src");
    watch[0].style.backgroundImage = `url(${x})`;
    watchFaces[0].style.display = "none";
}
