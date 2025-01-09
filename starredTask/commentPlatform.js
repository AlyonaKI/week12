const inputName = document.getElementById("inputName");
const avatarLink = document.getElementById("avatarLink");
const comment = document.getElementById("comment");
const btn = document.getElementById("btn");
const userAvatar = document.getElementById("userAvatar");
const userName = document.getElementById("userName");
const userComment = document.getElementById("userComment");

function submitUserComment() {
  showUserName();
  showUserAvatar();
  showUserComment();
}

function showUserName() {
  let userInput = inputName.value.trim().replace(/\s+/g, " ").toLowerCase();
  userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
  userName.textContent = userInput;
}
function showUserAvatar() {
  userAvatar.src = avatarLink.value;
}
function showUserComment() {
  let commentText = comment.value;
  userComment.textContent = checkSpam(commentText);
}
function checkSpam(str) {
  return str.replace(/viagra|xxx/gi, "***");
}

btn.addEventListener("click", submitUserComment);
