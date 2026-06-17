@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Ubuntu&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caprasimo&display=swap');

body{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQyIZbQ1Ys2HjsbMin8UoEDv_gsaeA8tSrw&usqp=CAU");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Ubuntu', sans-serif;

}
form{
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  padding: 1em 1em;
 border-radius: 1em;
 border: 1px solid violet
}

.textEmail{
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 1.2em; 
}

.textPass{
  margin-top: 2em;
  margin-bottom: 0.5em;
  font-size: 1.2em
}


input{
  height: 2.4em;
  width: 70%;
  border-radius:;
  border-style: none;
  border-bottom: 0.01em solid black
}

#submit{
  margin: 2.5em;
  height: 2.2em;
  width: 60%;
  cursor: pointer;
  background-color: #FF8989;
  color: white;
  border: none;
  font-family: 'Caprasimo', cursive;
  font-size: 1.2em;
  border-radius: 0.5em;
}

#submit:hover{
  background-color: #FCAEAE ;
  color: black;
}

h2{
  font-family: 'Pacifico', cursive;
}

