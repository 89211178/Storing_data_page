import { useEffect, useState } from "react";
import "../styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  // ${process.env.REACT_APP_API_KEY}
  // make you API hidden

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=a343dd3693c94a9389ac084809accae4&number=20`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data.recipes);
  };

  return (
    <div>
      <div className="body">
        <div className="topnav">
          <a className="active" href="Home_page.html">
            Home page
          </a>
          <a href="Find_recipe.html">Find recipe</a>
          <a href="View_profile.html">View profile</a>
          <a href="View_profile.html">View recipes</a>
          <a href="Add_recipe.html">Add recipe</a>
        </div>

        <div className="relative">
          <div className="wrapper">
            <h3>Random recipes</h3>
            <Splide
              options={ {
                perPage: 4,
                pagination: false,
                arrows: false,
                drag: "free",
                gap: "1rem"
              } }>
            {popular.map((recipe) => {
              return (
                <SplideSlide>
                  <div className="card">
                  <p className="recipe_title">{recipe.title}</p>
                  <img className="style" src={recipe.image} alt={recipe.title} />
                </div>
                </SplideSlide>
              );
            })}
            </Splide>
          </div>

          <div className="about">
          <h2>About</h2>
            Velikokrat smo se že znašli v položaju, ko smo morali nekaj skuhati, vendar nismo vedeli
            kaj bi. Na žalost ne moremo biti vsi dobri v vsem. Zato se bomo v te seminarski nalogi
            čim bolje približali ideji informacijskega sistema, ki bi nam omogočal lažje priti do
            primernega recepta, ki ga lahko pripravimo s hrano, ki jo imamo doma, koliko časa
            imamo za pripravo in kakšno vrsto hrane bi radi pripravili ... Sistem bi nam priporočal
            najboljše recepte glede na naš vnos in nam tako prihranil veliko časa za odločanje in
            iskanje receptov preko interneta. Recepti bi bili potrjeni s strani uporabnikov, ki bi lahko
            te ocenjevali in izboljševali po svoji oceni priprave receptov. Zdi se mi, da bi tak
            informacijski sistem zelo izboljšal pogled na kuharijo tudi za posameznike, ki se jim zdi
            kuharija pretežka in zamudna.
            <br></br>
            Kuhanje nima problema zgolj pri pripravi jedi, temveč tudi pri ideji in odločitvi naše jedi.
            Ta je najbolj pomembna, saj se moramo pravilno odločiti, glede na to, kaj sploh lahko
            skuhamo. Če si zadamo preveč zahtevno in dolgotrajno jed v zelo kratkem času, nam
            te ne bo uspelo narediti. Enako težko pa je tudi ugotoviti, kakšno jed sploh lahko
            pripravimo, glede na sestavine, ki jih imamo doma na voljo.
            <br></br>
            Enako lahko pride do velikega problema, če si zadamo narediti jed, ki je ne bomo
            mogli dokončati pravilno, ker nam bo manjkala pomembna sestavina. Takim
            položajem se želimo vsi izogniti, saj so ravno te tiste, ki nam zagrenijo užitek kuhanja.
            <br></br>
            S strahom pred kuharijo se srečuje veliko ljudi vsak dan. Veliko ljudi se sploh ne zaveda,
            kaj vse lahko pripravijo z ostanki ali pa majhno količino sestavin, ki jih imajo doma.
            Zaradi tega raje naročijo hrano katera ni vedno zdrava, saj je hitro pripravljena. To pa
            ni dobro v veliko primerih, saj se z naročevanjem hitro pripravljene hrane, zadovoljivo
            s slabo prehrano. Ta pa se lahko po dolgem času zelo hitro prikaže v njihovem slabšem
            zdravju. Zato menim, da bi ta informacijski sistem zelo pripomogel k izboljšanju zdravja
            in mogoče celo spremenil način življenja za tiste, ki nimajo časa pripraviti obrok ali pa
            niso tako naučeni receptov in bi potrebovali lažjo izbiro.
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Popular;
