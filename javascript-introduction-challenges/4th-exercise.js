function experience(yearsOfStudy) {
    if(yearsOfStudy === 0 || yearsOfStudy === 1) {
        return 'Iniciante';
    } else if (yearsOfStudy > 1 && yearsOfStudy <= 3) {
        return 'Intermediário';
    } else if (yearsOfStudy > 3 && yearsOfStudy <= 6) {
        return 'Avançado';
    } else if (yearsOfStudy >= 7) {
        return 'Jedi Master';
    } else {
        return 'Número inválido!';
    }
}

var yearsOfStudy = 7;
console.log(experience(yearsOfStudy));