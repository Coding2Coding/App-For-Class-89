function login() {
    var name1 = document.getElementById("player1Name").value;
    var name2 = document.getElementById("player2Name").value;
    localStorage.setItem("player1Name", name1);
    localStorage.setItem("player2Name", name2);
    window.location.replace("page.html");
}