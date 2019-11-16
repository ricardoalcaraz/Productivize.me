export default class HabitDataSource{
    constructor(deviceStorage){
        this.deviceStorage = deviceStorage;
        this.changeListeners = [];
    }

    getHabitData(){
        //Check the internal storage for data
        //Grab any updated data from the api if access token is available
    }

    updateSubscribers(){
        
    }

    addChangeListener(){

    }

    removeChangeListeners(){
        this.changeListeners.splice()
    }
}
