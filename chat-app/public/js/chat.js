const socket = io();

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

socket.on("message", (message) => {
  console.log(message.text);
  const html = Mustache.render(
    document.querySelector("#message-template").innerHTML,
    {
      username: message.username,
      message: message.text,
      createdAt: moment(message.createdAt).format("h:mm a"),
    }
  );
  document.querySelector("#messages").insertAdjacentHTML("beforeend", html);
});
socket.on('roomData',({room,users}) =>{
    const html = Mustache.render(document.querySelector('#userList').innerHTML,{
        room,
        users
    })
    document.querySelector('.sidebar').innerHTML=html
})
document.querySelector("#message-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message, (error) => {
    document.querySelector("#messageInput").value = "";
    document.querySelector("#messageInput").focus();
    if (error) {
      return console.log(error);
    }
    console.log(`Message Deilvered!`);
  });
});
document.querySelector("#send-location").addEventListener("click", (e) => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }
  navigator.geolocation.getCurrentPosition((position) => {
    // console.log(position)
    socket.emit(
      "sendLocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        console.log("Location has been shared");
      }
    );
  });
});

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});
