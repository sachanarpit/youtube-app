// q.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("myBtn").click();
//   }
// });
var q = document.getElementById("query").value;

var videos_div = document.getElementById("videos");
async function search_result() {
  videos_div.innerHTML = null;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=AIzaSyCYyjgKjUFG-FUc_bvmsub3ig5EhcGU6rM&maxResults=30`
  );
  let data = await res.json();
  console.log("data:", data);

  let { items } = data;

  items = items.filter((el) => {
    return el.id.videoId != undefined;
  });

  items.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "search_result");
    div.style.marginTop = "20px";
    div.innerHTML = `<iframe width="50%" height="300px" src="https://www.youtube.com/embed/${videoId}" title="Youtube"></iframe>`;
    videos_div.appendChild(div);
  });
}

var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
