function hasSkills(skills) {
   var checkSkill = skills.indexOf("Javascript");

   if(checkSkill === -1) {
       return false;
   } else {
       return true;
   }
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(hasSkills(skills));