const { parseId, isValidDate, isValidText } = require("../util/validation-util");

class Employee {

    constructor(id, name, role, birthday, admissionDay) {
        this.id = id
        this.name = name;
        this.role = role;
        this.birthday = birthday;
        this.admissionDay = admissionDay;
    }

    isValid() {
        if (this.id != null && parseId(this.id) == null) {
            return false
        }
        return (
            isValidText(this.name) &&
            isValidText(this.role) &&
            isValidDate(this.birthday) &&
            isValidDate(this.admissionDay)
        )
    }

}

module.exports = Employee;