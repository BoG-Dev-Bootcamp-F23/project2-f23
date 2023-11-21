import styles from "@/styles/LogCreation.module.css";
import {useState, useEffect} from "react";
//Create API endpoint that gets all animals assosciated with a user.
//For now, the way it is implemented, a user can only create a log 
//associated with itself, even if it is admin, it can only delete any traininglog,
//But can't edit user assosciated with such a training log.



async function saveLog(title,animal,hours,month,day,year,note) {

    console.log(title,animal,hours,month,day,year,note);
    //Create animal selection criteria
}




export default function LogCreation() {
    //Temporary current user id.
    const user = "655712cf04789adf1b86d592";
    const [animalSelections,setAnimalSelections] = useState([]);
    useEffect(()=>{
       
        async function createAnimalSelections(user) {
            
            const URL = `/api/animalsforuser?user=${user}`;
           
            const response = await fetch(URL);
            
            const animals = await response.json();
            const animalSelectionsList = [];
           
            animals.forEach((animal)=> {
                animalSelectionsList.push([animal._id,animal.name,animal.breed]);
            });
            
            setAnimalSelections(animalSelectionsList);
            
        }
        
        createAnimalSelections(user);
        console.log(animalSelections);
    },[]);

    return <>
            <label>
                Title
            <input type="text" id="title" className = {styles.input} placeholder="Title" />
            </label>
            {/* Put selection for dog here, will need to put code elsewhere as well. */}
            <label>
                Select Animal
                <select id="animal">
                    {animalSelections.map((animal) => {
                        console.log("HERE");
                        return <option key={animal[0]} value={animal[0]}>{animal[1]} {animal[2]}</option>
                    })}

                </select>
                
            </label>
            <label>
                Total Hours Trained
            <input type="number" id="hours"className = {styles.input} placeholder="Hours" />
            </label>
            <label>
                Month
            <select id="month"name="month">
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>

            </select>
            </label>
            <label>
                Day
                <input type="number" id="day" placeholder="Day"/>
            </label>
            <label>
                Year
                <input type="number" id="year"placeholder="Year"/>
            </label>
            <label>
                Note
            <input type="text" id="note"className = {styles.input} placeholder="Note" />
            </label>
            <button onClick={() => {saveLog(document.getElementById("title")?.value,
            document.getElementById("animal")?.value,
            document.getElementById("hours")?.value,
            document.getElementById("month")?.value,
            document.getElementById("day")?.value,
            document.getElementById("year")?.value,
            document.getElementById("note")?.value,)
            
            }}>Save</button>
    
        </>

}