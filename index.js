const BoyntonChurchNav =`<div style="text-align: right; cursor: pointer; margin: 0%; padding: 0%;"><p style="text-align: right; margin: 0%; padding: 0%; color: black;"><a href="" style="color: black;">English</a> <a onclick="BoyntonBeachChurchFrançais()" style="text-decoration: underline; color: aliceblue;">Français</a></p></div>
<div
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
                        <a class="nav-link active" aria-current="page" href="Pastor/">Pastor's office</a>
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
    document.body.innerHTML = `${BoyntonChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h3>For the 2024 convention, very soon you will have more details.</h3>
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
    document.body.innerHTML = `${BoyntonChurchNav}  <div style="background-color: white; padding: 30px; border-radius: 30px;"> <h6>The Bride of Christ Tabernacle</h6><br>
        <div>
          <h4 style="text-align: center;">
            <audio controls>
              <source src="churchabout.mp3" type="audio/mpeg">
              <source src="churchabout.ogg" type="audio/ogg">
            </audio>
          </h4>
        </div>
        <br><p>is a church of the message in Boynton Beach. We are a church of the message of the end of time. We enter into collaboration with other ministries around the world to help those in need, especially in Haiti. We believe in the Lord Jesus as Christ. To come to the Lord Jesus Christ, you must apply Acts 2:38, which means baptism in the name of Jesus Christ. We believe in the doctrine of rapture, for one day the Lord Jesus Christ will come to take his Holy Bride to be with him in heaven. To resume our faith and doctrine is to say we believe the Holy Bible from the Book of Genesis to the book of Revelation.</p></div>`
};
function BoyntonBeachChurchContact(){
    document.body.innerHTML = `${BoyntonChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h5>202 N.East 11th Ave.</h5> <h5>Boynton Beach, Fl 33435</h5><br><br><h5>&#9742;
    <i class="fab fa-whatsapp fa-1x" style="color:green"></i>&#128241;(561) 752-8452</h5> <br><br><h5>Social Media:</h5><a href="https://www.facebook.com/Bchristtab"><i class="fab fa-facebook fa-1x"
    style="color:rgb(71, 107, 185); width: 25px;"></i></a>
<a href="https://www.youtube.com/@brideofchristtabernacle"><i class="fab fa-youtube fa-1x"
    style="color:rgb(231, 11, 11); width: 25px;"></i></a><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.4810789530006!2d-80.06521322457345!3d26.536808876873355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8df2e70673999%3A0xddcd8bb780a6066f!2s202%20NE%2011th%20Ave%2C%20Boynton%20Beach%2C%20FL%2033435%2C%20USA!5e0!3m2!1sen!2sar!4v1709854363131!5m2!1sen!2sar" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`
};
function BoyntonBeachChurchMinistry(){
    document.body.innerHTML = `${BoyntonChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h4>Pastor: Louis Jean</h4><br><br><h6>Song Leader: </h6><h5> Br. Obento Philogene, Br. Presly Jean Baptiste, Br Roosevelt, Br. Vince Desrosiers</h5><br><h6>Preacher: </h6><h5> Br. Vainqueur Pierre, Br. Serge Vilvar, Br Ancy Metellus, Br Berthony Jean-Charles, Br David Marajh</h5> <br><h6>Interpreter: </h6><h5> Br. Henderson Metellus, Br Stanley </h5></div>`
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
  <br>
  <input type="text" placeholder="Enter your first name" name="name" required>
  <br>
  <br>
  <label for="name"><b>Last Name:</b></label>
  <br>
  <input type="text" placeholder="Enter your last name" name="name" required>
  <br>
  <br>
  <label for="email"><b>Email:</b></label>
  <br>
  <input type="text" placeholder="Enter your email" name="email" required>
  <br>
  <br>
  <label for="uname"><b>Username:</b></label>
  <br>
  <input type="text"  name="uname" placeholder="choose a username" required>
  <br>
  <br>
  <label for="psw"><b>Password:</b></label>
  <br>
  <input type="password" placeholder="Create a password" name="psw" required>
  <br>
  <br>
  <label for="psw"><b>Confirm:</b></label>
  <br>
  <input type="password" placeholder="Confirm the password" name="psw" required>
  <br>
  <br>
  <label>
  <input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
  </label> 
  <button type="submit">Submit</button></form></div>`};
  const BoyntonChurchNavF =`<div style="text-align: right; cursor: pointer; margin: 0%; padding: 0%;"><p style="text-align: right; margin: 0%; padding: 0%; color: black;"><a href="" style="color: rgb(255, 255, 255);">English</a> <a style="text-decoration: underline; color: rgb(0, 0, 0);">Français</a></p></div>
  <div
          style="border-radius: 30px 30px 30px 30px; background-color: rgb(2, 51, 73); border: 1px solid rgb(180, 222, 250);">
          <img class="boynton-beach-church-head" alt="Boynton Beach Church" src="F1BoyntonChurch.png"
              style="width: 100%; height: 150px; border-radius: 30px 30px 30px 30px; border: 4px solid rgb(255, 255, 255);">
      </div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <a onclick="BoyntonBeachChurchFrançais()"><img alt="Boyton Beach Church" class="logo" src="F2BoyntonChurch.jpg"></a>
              <a class="navbar-brand" href=""></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarScroll">
                  <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                      <li class="nav-item">
                          <button class="nav-link active" onclick="BoyntonBeachChurchFrançais()">Accueil</button>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="Pastor/pasteur">Bureau du Pasteur</a>
                    </li>
                      <li class="nav-item">
                          <button class="nav-link" onclick="BoyntonBeachChurchConventionF()">Convention</button>
                      </li>
                      <li class="nav-item">
                          <button class="nav-link" onclick="BoyntonBeachChurchAboutF()">À propos</button>
                      </li>
                      <li class="nav-item">
                          <button class="nav-link" onclick="BoyntonBeachChurchContactF()">Contact</button>
                      </li>
  
                      <li class="nav-item">
                          <button class="nav-link" onclick="BoyntonBeachChurchMinistryF()">Ministère</button>
                      </li>
              </ul>
              </div>
          </div>
      </nav>`;
      function BoyntonBeachChurchConventionF(){
        document.body.innerHTML = `${BoyntonChurchNavF}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h3>Pour la convention 2024, très prochainement vous aurez plus de détails.</h3>
        <h6>Nous comprenons qu'être chrétien est une famille et, en tant que Pasteur, je comprends que la famille doit se réunir. C'est la raison pour laquelle nous organisons chaque année des activités où le reste de la famille en Jésus-Christ de tous les continents peut se réunir au Tabernacle de l'Épouse du Christ à Boynton Beach pour s'encourager mutuellement dans la parole de Dieu.</h6>
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
        function BoyntonBeachChurchAboutF(){
            document.body.innerHTML = `${BoyntonChurchNavF}<div style="background-color: white; padding: 30px; border-radius: 30px;"> <h6>Tabernacle de l'Épouse du Christ</h6><br>
        <div>
          <h4 style="text-align: center;">
            <audio controls>
              <source src="churchaboutf.mp3" type="audio/mpeg">
              <source src="churchaboutf.ogg" type="audio/ogg">
            </audio>
          </h4>
        </div>
        <br><p>est une église du message à Boynton Beach. Nous sommes une église du message de la fin des temps. Nous entrons en collaboration avec d'autres ministères à travers le monde pour aider ceux qui en ont besoin, notamment en Haïti. Nous croyons au Seigneur Jésus comme Christ. Pour venir au Seigneur Jésus-Christ, vous devez appliquer Actes 2 :38, qui signifie le baptême au nom de Jésus-Christ. Nous croyons en la doctrine de l'enlèvement, car un jour, le Seigneur Jésus-Christ viendra prendre sa Sainte Épouse pour être avec lui au ciel. En conclusion notre foi et notre doctrine est la parole de Dieu, c'est-à-dire: nous croyons à la Sainte Bible, du livre de Genèse au livre d'Apocalypse.</p></div>`
        };
        function BoyntonBeachChurchContactF(){
            document.body.innerHTML = `${BoyntonChurchNavF}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h5>202 N.East 11th Ave.</h5> <h5>Boynton Beach, Fl 33435</h5><br><br><h5>&#9742;
            <i class="fab fa-whatsapp fa-1x" style="color:green"></i>&#128241;(561) 752-8452</h5> <br><br><h5>Réseaux Sociaux:</h5><a href="https://www.facebook.com/Bchristtab"><i class="fab fa-facebook fa-1x"
            style="color:rgb(71, 107, 185); width: 25px;"></i></a>
        <a href="https://www.youtube.com/@brideofchristtabernacle"><i class="fab fa-youtube fa-1x"
            style="color:rgb(231, 11, 11); width: 25px;"></i></a><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.4810789530006!2d-80.06521322457345!3d26.536808876873355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8df2e70673999%3A0xddcd8bb780a6066f!2s202%20NE%2011th%20Ave%2C%20Boynton%20Beach%2C%20FL%2033435%2C%20USA!5e0!3m2!1sen!2sar!4v1709854363131!5m2!1sen!2sar" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`
        };
        function BoyntonBeachChurchMinistryF(){
            document.body.innerHTML = `${BoyntonChurchNavF}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h4>Pasteur: Louis Jean</h4><br><br><h6>Conducteur de chant: </h6><h5> Fr. Obento Philogene, Fr. Presly Jean Baptiste, Fr Roosevelt, Fr. Vince Desrosiers</h5><br><h6>Prédicateur: </h6><h5> Fr. Vainqueur Pierre, Fr. Serge Vilvar, Fr Ancy Metellus, Fr Berthony Jean-Charles, Fr David Marajh</h5><br><h6>Interprète: </h6><h5> Fr. Henderson Metellus, Fr Stanley</h5></div>`
        };
        function BoyntonBeachChurchCreateAnAccountF(){
            document.body.innerHTML = `${BoyntonChurchNavF}<div style="background-color: white; padding: 30px; border-radius: 30px;"><form style="text-align: center"><fieldset>
            <legend style="text-align: center;">Sélectionnez un statut:</legend>
          
            <div>
              <input type="radio" name="drone" id="ministry" checked />
              <label for="ministry">Ministère (Diacre, Prédicateur, etc.)</label>
            </div>
          
            <div>
              <input type="radio" name="drone" id="christian" />
              <label for="christian">Membre de l'Église</label>
            </div>
          
            <div>
              <input type="radio"  name="drone" id="visitor" />
              <label for="visitor">Visiteur</label>
            </div>
          
            <div>
                <input type="radio" id="other" name="drone" value="other" />
                <label for="other">Autre</label>
              </div>
          </fieldset>
          <br>
          <label for="name"><b>Prénom:</b></label>
          <br>
          <input type="text" placeholder="Entrez votre prénom" name="email" required>
          <br>
          <br>
          <label for="name"><b>Nom:</b></label>
          <br>
          <input type="text" placeholder="Entrez votre nom de famille" name="email" required>
          <br>
          <br>
          <label for="email"><b>Email:   </b></label>
          <br>
          <input type="text" placeholder="Entrez votre email" name="email" required>
          <br>
          <br>
          <label for="uname"><b>Nom d'utilisateur:</b></label>
          <br>
          <input type="text"  name="uname" placeholder="Choisissez un nom d'utilisateur" required>
          <br>
          <br>
          <label for="psw"><b>Mot de passe:</b></label>
          <br>
          <input type="password" placeholder="Créer un mot de passe" name="psw" required>
          <br>
          <br>
          <label for="psw"><b>Confirmez le mot de passe:</b></label>
          <br>
          <input type="password" placeholder="Confirmez le mot de passe" name="psw" required>
          <br>
          <br>
          <label>
          <input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
          </label> 
          <button type="submit">Submit</button></form></div>`};
  function BoyntonBeachChurchFrançais() {
    document.body.innerHTML = `<div style="text-align: right; cursor: pointer; margin: 0%; padding: 0%;"><p style="text-align: right; margin: 0%; padding: 0%; color: black;"><a href="" style="color: rgb(255, 255, 255);">English</a> <a style="text-decoration: underline; color: rgb(0, 0, 0);">Français</a></p></div>
    <div
            style="border-radius: 30px 30px 30px 30px; background-color: rgb(2, 51, 73); border: 1px solid rgb(180, 222, 250);">
            <img class="boynton-beach-church-head" alt="Boynton Beach Church" src="F1BoyntonChurch.png"
                style="width: 100%; height: 150px; border-radius: 30px 30px 30px 30px; border: 4px solid rgb(255, 255, 255);">
        </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a onclick="BoyntonBeachChurchFrançais()"><img alt="Boyton Beach Church" class="logo" src="F2BoyntonChurch.jpg"></a>
                <a class="navbar-brand" href=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-item">
                            <button class="nav-link active" onclick="BoyntonBeachChurchFrançais()">Accueil</button>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="Pastor/pasteur">Bureau du Pasteur</a>
                    </li>
                        <li class="nav-item">
                            <button class="nav-link" onclick="BoyntonBeachChurchConventionF()">Convention</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" onclick="BoyntonBeachChurchAboutF()">À propos</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" onclick="BoyntonBeachChurchContactF()">Contact</button>
                        </li>
    
                        <li class="nav-item">
                            <button class="nav-link" onclick="BoyntonBeachChurchMinistryF()">Ministère</button>
                        </li>
                </ul>
                </div>
            </div>
        </nav>
        <div class="d-none d-lg-block" style="width: 100%; height: 10px;"></div>
        <div class="row" style="margin: 0px; padding: 0px;">
            <div class="col-3" style="margin: 0px; padding: 0px;"></div>
            <div class="col-md-3 col-lg-6" style="margin: 0px; padding: 0px;"></div>
            <div class="col-md-12 col-lg-3" style="margin: 0px; padding: 0px;">
                <div class="boynton-church-publication">
                    <input type="text" placeholder="Votre nom d'utilisateur" name="uname"
                        style="border-radius: 10px; border: none;" required>
                    <br>
                    <br>
                    <input type="password" placeholder="Votre mot de passe" name="psw"
                        style="border-radius: 10px; border: none;" required>
                    <br>
                    <br>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Rappelle-moi
                    </label>
                    <button type="submit" style="border-radius: 10px;">Se connecter</button>
                    <br>
                    <br>
                    <button type="submit" onclick="BoyntonBeachChurchCreateAnAccountF()" style="border-radius: 10px;">Créer un compte</button>
                    </section>
                    <div class="separation"></div>
                    <div style="margin-top: 10px; margin-bottom: 10px;">
                        <p>Pour être informé de tout:</p>
                        <input for="email" class="email" type="email" placeholder="email"
                            style="border-radius: 10px; border: none;">
    
                        <button class="boynton-church-news">S'abonner</button>
                        <br>
                        <br>
                        <a href="https://www.facebook.com/Bchristtab"><i class="fab fa-facebook fa-1x"
                                style="color:rgb(71, 107, 185); width: 25px;"></i></a>
                        <a href="https://www.youtube.com/@brideofchristtabernacle"><i class="fab fa-youtube fa-1x"
                                style="color:rgb(231, 11, 11); width: 25px;"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-none d-lg-block" style="width: 100%; height: 10px;"></div>
        <div class="d-none d-lg-block" style="background-color: rgb(241, 241, 197);">
            <div class="row" style="margin: 0px; padding: 0px;">
                <div class="col-md-12 col-lg-6" style="margin: 0px; padding: 0px;">
                    <div style="width: 100%; height: 350px;">
                        <marquee scrollamount="1" behavior="scroll" direction="up">
                            <h6 style="text-align: center;">La foi à travers l'experience</h6>
                            <p style="text-align: center;">Si vous croyez que vous allez être guéri,
                                quel que soit votre problème, et votre foi vous dit que
                                vous allez être guéri,
                                Il n’y a rien au monde qui peut vous empêcher d’être guéri. Seigneur, nous venons
                                en Ta Présence avec nos requêtes. Et l'assurance que nous savons que
                                ce que nous demandons, nous le recevrons, parce que Jésus nous a fait la promesse,
                                que si nous demandons quelque chose au Père en Son Nom, Il l'accordera
                                tous. Par conséquent, nous demandons ce soir, Seigneur, que Tu ne fasses pas
                                qu'une personne parte d'ici déçue. Que ceux qui sont venus
                                Te donner leur vie, que cela soit fait ce soir. Ceux qui sont venus
                                pour la guérison, que chacun d'eux soit guéri. Et quand ce service est terminé
                                pouvons-nous dire comme ceux qui viennent d'Emmaüs : « Notre
                                nos cœurs brûlent en nous alors qu’Il nous parle tout au long de la route. A nous de demander
                                cela au Nom de Jésus.. Amen. Par William Marrion Branham</p>
                            <p style="text-align: center;">Dimanche Matin 9h00 / Dimanche Soir 18h00 / Mardi 19h00 / Jeudi 19h00
                            </p>
                            <h6 style="text-align: center;">Tabernacle de l'Épouse du Christ à Boynton Beach</h6>
                        </marquee>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6" style="margin: 0px; padding: 0px;">
                    <iframe width="100%" height="350px" src="https://www.youtube.com/embed/od3Kehp48Fo?si=ebOYRHotpPtLZ9EG"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="d-lg-none" style="background-color: rgb(241, 241, 197);">
            <div class="row" style="margin: 0px; padding: 0px;">
                <div class="col-md-12" style="margin: 0px; padding: 0px;">
                    <iframe width="100%" height="350px" src="https://www.youtube.com/embed/od3Kehp48Fo?si=ebOYRHotpPtLZ9EG"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <div class="col-12" style="margin: 0px; padding: 0px;">
                    <div style="width: 100%; height: 350px;">
                        <marquee scrollamount="5" behavior="scroll" direction="up">
                            <h6 style="text-align: center;">La foi à travers l'experience</h6>
                            <p style="text-align: center;">Si vous croyez que vous allez être guéri,
                                quel que soit votre problème, et votre foi vous dit que
                                vous allez être guéri,
                                Il n’y a rien au monde qui peut vous empêcher d’être guéri. Seigneur, nous venons
                                en Ta Présence avec nos requêtes. Et l'assurance que nous savons que
                                ce que nous demandons, nous le recevrons, parce que Jésus nous a fait la promesse,
                                que si nous demandons quelque chose au Père en Son Nom, Il l'accordera
                                tous. Par conséquent, nous demandons ce soir, Seigneur, que Tu ne fasses pas
                                qu'une personne parte d'ici déçue. Que ceux qui sont venus
                                Te donner leur vie, que cela soit fait ce soir. Ceux qui sont venus
                                pour la guérison, que chacun d'eux soit guéri. Et quand ce service est terminé
                                pouvons-nous dire comme ceux qui viennent d'Emmaüs : « Notre
                                nos cœurs brûlent en nous alors qu’Il nous parle tout au long de la route. A nous de demander
                                cela au Nom de Jésus.. Amen. Par William Marrion Branham</p>
                            <p style="text-align: center;">Dimanche Matin 9h00 / Dimanche Soir 18h00 / Mardi 19h00 / Jeudi 19h00
                            </p>
                            <h6 style="text-align: center;">Tabernacle de l'Épouse du Christ à Boynton Beach</h6>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-lg-none"
            style="padding: 5px; background-color: rgb(245, 238, 200); border-radius: 10px 10px 0px 0px;">
            <img class="boynton-beach-church-info" alt="Boynton Beach Church info" src="FBoyntonBeachChurchinfo.jpg"
                style="width: 100%; height: 400px; border-radius: 10px; border: 3px solid white;">
        </div>
    
        <div style="background-color: rgb(255, 255, 255); text-align: center; margin: 0%; padding: 10px;">
            <h6>&copy;Tabernacle de l'Épouse du Christ 2024</h6>
        </div>`};
