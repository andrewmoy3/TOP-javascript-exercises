const findTheOldest = function(people) {
    ages = people.map(function(person){
        var death = person.yearOfDeath
        var birth = person.yearOfBirth;
        return death-birth;
    })
    const i = ages.indexOf(Math.max(...ages))
    return people[i]
};

// Do not edit below this line
module.exports = findTheOldest;
