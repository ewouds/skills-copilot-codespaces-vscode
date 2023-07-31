function skillMembers() {
    var members = document.getElementsByClassName("member");
    for (var i = 0; i < members.length; i++) {
        members[i].style.display = "none";
    }
    var skills = document.getElementsByClassName("skill");
    for (var i = 0; i < skills.length; i++) {
        skills[i].style.display = "block";
    }
}