class Account {
    constructor(accountID, name, emailAddress, telephone) {
        this.accountID = accountID;
        this.name = name;
        this.emailAddress = emailAddress;
        this.telephone = telephone;
    }
}

class House {
    constructor(houseID, name, numberOfTenants){
        this.houseID = houseID;
        this.name = name;
        this.numberOfTenants = numberOfTenants;
    }
}

class Housemates {
    constructor(uncompletedChores, completionNotification){
        this.uncompletedChores = uncompletedChores;
        this.completionNotification = completionNotification;
    }
}

class HouseLeader {
    constructor(createChores, rotationNumber, uncompletedChores, choreCompleteVerfication){
        this.createChores = createChores;
        this.rotationNumber = rotationNumber;
        this.uncompletedChores = uncompletedChores;
        this.choreCompleteVerfication = choreCompleteVerfication;
    }
}

class ChoresManagement {
    constructor(title, priority, assignedTo, dateAssigned, completionStatus){
        this.title = title;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.dateAssigned = dateAssigned;
        this.completionStatus = completionStatus;
    }
}

class Chore {
    constructor(choreId){
        this.choreId = choreId
    }
}