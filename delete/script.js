let form = document.querySelector("#submit-task")



class Completed_Todo{
    constructor(task_title,task_description,task_deadline,task_completed){
        this.task_title = task_title
        this.task_description = task_description
        this.task_deadline = task_deadline
        this.task_completed = task_completed
        // this.howearly = this.early_late()

    }

    

    early_late() {
        let submit = this.deadlineBetween();
        let [time, days,early] = submit
        if (early=="early"){
            // this.early = True
            

            // console.log(this.early, this.howearly)
            console.log("here")
            return time
        }
    }

    deadlineBetween() {
        // console.log(this.task_deadline)
        let currentDate = new Date().toJSON().slice(0, 10);

        let deadline = new Date(this.task_deadline).toJSON().slice(0, 10);
        let time_rem = '';
        let time_rem_str = ''

        if (deadline >= currentDate) {
            time_rem = new Date(deadline) - new Date(currentDate);
            time_rem_str = "early"
        } else {
            time_rem = new Date(currentDate) - new Date(deadline);
            time_rem_str = "late"
        }

        time_rem = time_rem / (1000 * 3600 * 24);
        time_rem = Math.abs(time_rem); 

        let result = ''

        if( time_rem = 1){
            result = `${time_rem} day ${time_rem_str}`
        } else{
            result = `${time_rem} days ${time_rem_str}`
        }

        return result
    
        
    }
}



class Uncompleted_Todo{
    constructor(task_title,task_description,task_deadline,task_completed){
        this.task_title = task_title
        this.task_description = task_description
        this.task_deadline = task_deadline
        this.task_completed = task_completed
    }
}

    
    




form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let task_title = document.querySelector("#title").value
    let task_description = document.querySelector("#description").value
    let task_deadline = document.querySelector("#deadline").value
    let task_completed = document.querySelector("#checkbox").checked

    // console.log(task_completed);
    let task = ""

    if (task_completed){
        task = new Completed_Todo(task_title,task_description,task_deadline,task_completed)
        task.early_late
        
        

        console.log(task.early_late())

    }else if(!task_completed){
        task = new Uncompleted_Todo(task_title,task_description,task_deadline,task_completed)
        console.log("uncompl");
    }

    
    
    
    
})


