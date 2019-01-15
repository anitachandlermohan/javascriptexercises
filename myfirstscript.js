





function squarefunction(n1){

    return n1*n1;
}


function add3numbers(n2,n3,n4){
    return n2 + n3 +n4;
}

function createAlert(){
    alert("hi");
}
function MakePerson(vName,vJob,vAge, vBestFriend){
   let it = {};
   it.name = vName;
   it.job = vJob;
   it.age = vAge;
   it.bestfriend = vBestFriend;
   return it;
}

let bob = MakePerson("bob", "unemployed", 45, "noone" );


function clickButton(){
    let inputName = document.getElementById("inputName").value;
    let inputJob = document.getElementById("inputJob").value;
    let inputAge = document.getElementById("inputAge").value;
    let inputbestfriend = document.getElementById("inputBestFriend").value;
    person = MakePerson(inputName, inputJob, inputbestfriend);
    alert("making person");
    document.write("Name: " + inputName + "\r Job: " +  inputJob + "age: " + inputAge + "\r Best Friend: " + inputbestfriend);
}

for(let i = 0; i < 11; i++){
    if(i%2 ==0){
        document.write("\r" + i);
    }
    else {
        continue;
        }
    
}

function checkAge(MakePerson){
    if(MakePerson.age > 20){
        if(MakePerson.age < 40){
            return true;
        }
        else {
            return false;
        }
    }
    else return false;

}




