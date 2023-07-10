// okay solution, could make it better by creating a getAge() function
// to not repeat code but i'm too lazy now gg
const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if(!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear();
        }
        if(!oldest.yearOfDeath){
            oldest.yearOfDeath = new Date().getFullYear();
        }
        const currentPersonAge = person.yearOfDeath - person.yearOfBirth;
        const oldestPersonAge = oldest.yearOfDeath - oldest.yearOfBirth;

        return (currentPersonAge > oldestPersonAge) ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
