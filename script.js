//form submit hone pe hame ek user object chahiye jisme username , role , bio , photo ho isme ham this keyword ka use krenge and functions like call bind and apply use krenge and we will learn how this keyword works in different scenarios along with event listeners and javascript objects.

let form = document.querySelector("form")

let username = document.querySelector("#name")
let role = document.querySelector("#role")
let bio = document.querySelector("#bio")
let photo = document.querySelector("#photo")

const userManager = {

    users: [],  //ssabse pehle empty array bnayi jisme userss ayenge

    init: function(){ 
        //jese hi code chalega sabse pehle yeh fn chal jayega jo bhi isme kam krwana ho
        // form.addEventListener("submit",function(e){
        //     e.preventDefault();
        //     console.log(this) //abhi submit krne pe form ajayega aur haame object chahiye .

        //isliye ham eventlistener me function banayenge nhhi usey parse krenge this ki help se .
        form.addEventListener("submit" , this.submitForm.bind(this)) //yeh waala this ab ham ko object dega .
    },
    submitForm: function(e){
        e.preventDefault();
        // console.log("form submitted")  isse bas check kia ki form submit hora hai ya nhi
        //now since our form is submitting properly and it is returning our object and users is empty ... so on submitting form hame chahiye ki wahan user ajaye
        //isliye ham isme user ko push krenge
        // yahan se users.push ko cut krke add users me paste krdiya aur yahan pe this keyword se addUser ko access krlenge
        this.addUser();
    },

    
    //phir hmne 2 functions baaye user ko add aur remove krne ke liye
    addUser: function(){
        this.users.push({
            username : username.value ,
            role : role.value ,
            bio : bio.value ,
            photo : photo.value ,
        })
        form.reset() ; //isse form reset ho jayega
        //console.log(this.users) //ab hame users mil rahe hai
        this.renderUi() ; //jab bhi user add hoga tab ui render hoga
    },
    //ab hame uss user ko jo add kiya usey ui pe bhi toh dikhana hia
    renderUi : function(){
        this.users.forEach(function(user){ //har bar ekek user hame milega jisey form ke bad render krna hai
            const card = document.createElement("div")
            card.className = "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition"
        
            //img
            const img = document.createElement("img")
            img.src = user.photo
            img.alt = user.username
            img.className = "w-32 h-32 rounded-full mb-5 object-cover border-4 border-blue-200 shadow"
            card.appendChild(img) //isey card me append krdia
            //username
            const nameEl = document.createElement("h2")
            nameEl.className = "text-2xl font-bold mb-2 text-blue-700"
            nameEl.textContent = user.username
            card.appendChild(nameEl) //isey card me append krdia
            //role
            const role = document.createElement("h3")
            role.className = "text-xl font-semibold mb-4 text-blue-500"
            role.textContent = user.role
            card.appendChild(role) //isey card me append krdia
            //bio
            const bio = document.createElement("p")
            bio.className = "text-center text-blue-600"
            bio.textContent = user.bio
            card.appendChild(bio) //isey card me append krdia
            
            //finally card ko hamme kisme append krna hai
            document.querySelector(".users").appendChild(card)
        
        
        
        })
    },
    removeUser: function(){}
}
userManager.init()