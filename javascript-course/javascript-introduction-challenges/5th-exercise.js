function usersSkills(users) {
    for(let user of users) {
        console.log("O " + user.name + " possui as habilidades: " + user.skills.join(', '));
    }
}

var users = [
    {
        name: "Diego",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Gabriel",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

usersSkills(users);

