const BoyntonChurchNav =`<div
style="border-radius: 0px 0px 30px 30px; padding: 4px; background-color: rgb(206, 235, 248); border: 1px solid rgb(180, 222, 250);">
<img class="boynton-beach-church-head" alt="Boyton Beach Church" src="BoyntonBeachChurchhead.png"
    style="width: 100%; height: 110px; border-radius: 0px 0px 30px 30px; border: 4px solid rgb(255, 255, 255);">
</div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <a href=""><img alt="Boynton Beach Church" class="logo" src="BoyntonBeachChurchlogo.jpg"></a>
    <a class="navbar-brand" href=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">Home</a>
            </li>
            <li class="nav-item">
                <button class="nav-link" onclick="BoyntonBeachChurchConvention()">Convention</button>
            </li>
            <li class="nav-item">
                <button class="nav-link" onclick="BoyntonBeachChurchAbout()">About</button>
            </li>
            <li class="nav-item">
                <button class="nav-link" onclick="BoyntonBeachChurchContact()">Contact</button>
            </li>

            <li class="nav-item">
                <button class="nav-link" onclick="BoyntonBeachChurchMinistry()">Ministry</button>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</div>
</nav>`;
function BoyntonBeachChurchConvention(){
    document.body.innerHTML = `${BoyntonChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h3>For the 2024 convention, very soon you will have more details</h3>
    <h6>We understand being Christian is a family and, as the Pastor, I understand the family has to meet. This is the reason why we organize activities every year, where the rest of the family in Jesus Christ around the world can meet together in The Bride of Christ Tabernacle in Boynton Beach to encourage each other in the word of God.</h6>
    <div class="row" style="margin: 0px; padding: 0px;">
        <div class="col-md-12 col-lg-6" style="margin: 0px; padding: 0px;">
            <div style="width: 100%; height: 350px;">
                <img alt="Boynton Beach church" src="Boynton-Beach-church-activity.jpg" style="width: 100%; height: 350px;">
            </div>
        </div>
        <div class="col-md-12 col-lg-6" style="margin: 0px; padding: 0px;">
            <iframe width="100%" height="350px" src="https://www.youtube.com/embed/ZbhfgouT83A?si=MOHyE5THhuIBqXno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div></div>`};
function BoyntonBeachChurchAbout(){
    document.body.innerHTML = `${BoyntonChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"> <h6>The Bride of Christ Tabernacle</h6><p>is a church of the message in Boynton Beach. We are a church of the message of the end of time. We enter into collaboration with other ministries around the world to help those in need, especially in Haiti. We believe in the Lord Jesus as Christ. To come to the Lord Jesus Christ, you must apply Acts 2:38, which means baptism in the name of Jesus Christ. We believe in the doctrine of rapture, for one day the Lord Jesus Christ will come to take his Holy Bride to be with him in heaven. To resume our faith and doctrine is to say we believe the Holy Bible from the Book of Genesis to the book of Revelation.</p></div>`
};
function BoyntonBeachChurchContact(){
    document.body.innerHTML = `${BoyntonChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h5>202 N.East 11th Ave.</h5> <h5>Boynton Beach, Fl 33435</h5><br><br><h5>&#9742;
    <i class="fab fa-whatsapp fa-1x" style="color:green"></i>&#128241;(561) 752-8452</h5> <br><br><h5>Social Media:</h5><a href="https://www.facebook.com/Bchristtab"><i class="fab fa-facebook fa-1x"
    style="color:rgb(71, 107, 185); width: 25px;"></i></a>
<a href="https://www.youtube.com/@brideofchristtabernacle"><i class="fab fa-youtube fa-1x"
    style="color:rgb(231, 11, 11); width: 25px;"></i></a></div>`
};
function BoyntonBeachChurchMinistry(){
    document.body.innerHTML = `${BoyntonChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h4>Pastor: Louis Jean</h4><br><h5>Deacon:</h5><br><h6>Song Leader: </h6><h5> Br. Obento Philogene, Br. Presly Jean Baptiste, Br Roosevelt</h5><br><h6>Preacher: </h6><h5> Br. Vainqueur Pierre, Br. Serge Vilvar, Br Ancy Metellus, Br Berthony Jean-Charles, Br David Marajh</h5> <br><h6>Interpreter: </h6><h5> Br. Henderson Metellus, Br. Vince Desrosiers, Br Stanley </h5></div>`
};
function BoyntonBeachChurchCreateAnAccount(){
    document.body.innerHTML = `${BoyntonChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><form style="text-align: center"><fieldset>
    <legend style="text-align: center;">Select a status:</legend>
  
    <div>
      <input type="radio" name="drone" id="ministry" checked />
      <label for="ministry">Ministry(Deacon, Preacher, etc.)</label>
    </div>
  
    <div>
      <input type="radio" name="drone" id="christian" />
      <label for="christian">Church Member</label>
    </div>
  
    <div>
      <input type="radio"  name="drone" id="visitor" />
      <label for="visitor">Visitor</label>
    </div>
  
    <div>
        <input type="radio" id="other" name="drone" value="other" />
        <label for="other">Other</label>
      </div>
  </fieldset>
  <br>
  <label for="name"><b>First Name:</b></label>
  <input type="text" placeholder="Enter your first name" name="email" required>
  <br>
  <br>
  <label for="name"><b>Last Name:</b></label>
  <input type="text" placeholder="Enter your last name" name="email" required>
  <br>
  <br>
  <label for="email"><b>Email:   </b></label>
  <input type="text" placeholder="Enter your email" name="email" required>
  <br>
  <br>
  <label for="uname"><b>Username:</b></label>
  <input type="text"  name="uname" placeholder="choose a username" required>
  <br>
  <br>
  <label for="psw"><b>Password:</b></label>
  <input type="password" placeholder="Create a password" name="psw" required>
  <br>
  <br>
  <label for="psw"><b>Confirm:</b></label>
  <input type="password" placeholder="Confirm the password" name="psw" required>
  <br>
  <br>
  <label>
  <input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
  </label> 
  <button type="submit">Submit</button></form></div>`};