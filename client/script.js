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
      color: ${user.color}">
        Namn: ${user.firstName} ${user.lastName} <br>
        Användarnamn: ${user.username}
    </li>`;
      ul.insertAdjacentHTML("beforeend", html);
    });
  });

// responsePromise
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((users) => console.log(users));
// const request = new Request(url);
// fetch(request)
//   .then((response) => response.json())
//   .then((users) => {
//     users.forEach((user) => {
//       const html = `<p>
//           ${user.firstName} ${user.lastName}
//           <span>${user.username}</span>
//       </p>`;

//       document.body.insertAdjacentHTML('beforeend', html);
//     });
//     return 'hej';
//   })
//   .then((data) => console.log(data));
