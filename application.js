  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getDatabase,ref,get,set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBHK9NSg3qnP2o_4mvuoPw4Ovxmf4BpeUQ",
    authDomain: "denotefeedfur-c6c93.firebaseapp.com",
    projectId: "denotefeedfur-c6c93",
    storageBucket: "denotefeedfur-c6c93.appspot.com",
    messagingSenderId: "589055440267",
    appId: "1:589055440267:web:4aabdb8061fdac3ce82b8e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);
  console.log(db);
  function writedata(userId,name,address,contact,food){
    set(ref(db,'user/'+userId),{
      Name:name,
      Address:address,
      contact:contact,
      food:food
    })
  }
  document.querySelector("#btn").addEventListener("click",(e)=>{
    e.preventDefault();
    const name=document.querySelector("#name").value;
    const address=document.querySelector("#Address").value;
    const contact=document.querySelector("#contact").value;
    const food=document.querySelector("#food").value;
    writedata(name,name,address,contact,food);
    alert("done");
  })
  console.log("good");
