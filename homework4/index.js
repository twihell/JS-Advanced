const academy = {
    students: []
};

Object.defineProperty(academy, "addStudent", {
    set: function(name) {
        let splittedName = name.split(" ");
        this.students.push({
            createDate: new Date(), 
            studentName: splittedName[0],
            studentSurname: splittedName[1]
        })
    },
    get: function() {
        return this.students;
    }
});

academy.addStudent = "Yuri Petrichenko";
console.log(academy.students); // [{createDate: 258925, studentName: Yuri, studentSurname: Petrichenko}]