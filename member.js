function skillsMember() {
  const member = document.getElementById('member');
  if (member) {
    const skill = document.querySelectorAll('.skill');
    const skillName = document.querySelectorAll('.skill-name');
    const skillValue = document.querySelectorAll('.skill-value');
    const skillBar = document.querySelectorAll('.skill-bar');

    skill.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        skill[index].classList.add('skill-active');
        skillName[index].classList.add('skill-name-active');
        skillValue[index].classList.add('skill-value-active');
        skillBar[index].classList.add('skill-bar-active');
      });
      item.addEventListener('mouseout', () => {
        skill[index].classList.remove('skill-active');
        skillName[index].classList.remove('skill-name-active');
        skillValue[index].classList.remove('skill-value-active');
        skillBar[index].classList.remove('skill-bar-active');
      });
    });
  }
}
    
    