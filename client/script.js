const url = "http://localhost:3000/users";
const request = new Request(url);

fetch(request)
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    users.forEach((user) => {
      const html = `<li class = "styling" style="border-color: ${user.color};
      color: ${user.color};">
        Namn: ${user.firstName} ${user.lastName} <br>
        Användarnamn: ${user.username}
    </li>`;
      ul.insertAdjacentHTML("beforeend", html);
    });
  });
