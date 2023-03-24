import Veggie from "../components/Veggie";
import Random from "../components/Random";
import Vegan from "../components/Vegan";

function Home() {
  return (
    <div>
      <div className="body_2">
        <div className="relative">
          <div className="about">
              <h2>ABOUT COOKSMART:</h2>
                S strahom pred kuharijo se srečuje veliko ljudi vsak dan. Veliko ljudi se sploh ne zaveda,
                kaj vse lahko pripravijo z ostanki ali pa majhno količino sestavin, ki jih imajo doma.
                Zaradi tega raje naročijo hrano katera ni vedno zdrava, saj je hitro pripravljena. To pa
                ni dobro v veliko primerih, saj se z naročevanjem hitro pripravljene hrane, zadovoljivo
                s slabo prehrano. Ta pa se lahko po dolgem času zelo hitro prikaže v njihovem slabšem
                zdravju. Zato menim, da bi ta informacijski sistem zelo pripomogel k izboljšanju zdravja
                in mogoče celo spremenil način življenja za tiste, ki nimajo časa pripraviti obrok ali pa
                niso tako naučeni receptov in bi potrebovali lažjo izbiro.
          </div>
          <Random />
          <Veggie />
          <Vegan />
          </div>
          </div>
    </div>
  );
}

export default Home;
