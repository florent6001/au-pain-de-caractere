export default function Home() {
  return (
    <>
      <div className="full-image flex-column d-flex align-items-start">
        <nav class="w-100 navbar navbar-expand-md navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#">Au Pain De Caractère</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link" href="#histoire">Notre Histoire</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#specialites">Spécialités</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="col-md-6">
            <div class="p-5 my-5 text-white h-100 rounded-3 bg-semi-transparent">
              <h1 class="display-5 fw-bold">Au Pain De Caractère</h1>
              <p class="fs-5 my-4">
                Découvrez l&apos;authenticité de notre boulangerie, où passion et tradition se marient pour créer des délices inoubliables.
              </p>
              <a class="btn btn-secondary btn-lg" href="#histoire" type="button">Nous découvrir</a>
            </div>
          </div>
        </div>
      </div>
      <section className="container py-5" id="histoire">
        <div class="row align-items-md-stretch">
          <div class="col-md-8">
            <div class="h-100 p-5 text-bg-dark rounded-3">
              <h2>Notre histoire</h2>
              <p>
                Eddy, boulanger dans l&apos;âme depuis ses 16 ans, a toujours chéri le rêve d&apos;avoir sa propre boulangerie. Pour lui, la farine, l&apos;eau et la levure sont bien plus que de simples ingrédients ; ce sont les éléments d&apos;une alchimie mystique qui donne naissance à des œuvres d&apos;art comestibles.<br /><br />

                Quant à Angélique, avec une passion inébranlable pour le service et un sourire radieux, elle a enchanté les clients de nombreux commerces tout au long de sa carrière. Pour elle, la boulangerie est bien plus qu&apos;un simple lieu de travail ; c&apos;est un sanctuaire où les liens se tissent, où les histoires se partagent et où chaque client est accueilli avec chaleur et bienveillance. <br /><br />

                Ensemble, ils ont insufflé une nouvelle vie à cet établissement, mêlant l&apos;expertise artisanale d&apos;Eddy à l&apos;attention aux détails et à l&apos;art du service d&apos;Angélique. Chaque pain est pétri avec amour, chaque croissant est façonné avec soin, et chaque client est reçu comme un membre de la famille.
              </p>
            </div>
          </div>
          <div class="col-md-4 d-none d-md-block">
            <img src="https://abdulsamad.xyz/Bakery/images/story-img.jpg" className="h-100 w-100" />
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container">
          <div className="row gap-5 gap-md-0">
            <div className="col-md-3 text-center text-white counters ">
              <i class="fa fa-certificate fa-4x text-secondary"></i>
              <p class="number">+20</p>
              <p>ans d&apos;expérience</p>
            </div>
            <div className="col-md-3 text-center text-white">
              <i class="fa fa-bread-slice fa-4x text-secondary"></i>
              <p class="number">+150</p>
              <p>Baguettes par jours</p>
            </div>
            <div className="col-md-3 text-center text-white">
              <i class="fa-solid fa-cake-candles fa-4x text-secondary"></i>
              <p class="number">+50</p>
              <p>Gateau d&apos;anniversaire réalisés</p>
            </div>
            <div className="col-md-3 text-center text-white">
              <i class="fa fa-users fa-4x text-secondary"></i>
              <p class="number">3</p>
              <p>Employ&eacute;s qualifi&eacute;</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" id="specialites">
        <div class="row align-items-start">
          <div class="col-md-6">
            <div className="md-px-5">
              <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-100 h-100" />
                <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-100 h-100" />
                <img src="https://images.unsplash.com/photo-1583743089695-4b816a340f82?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-100 h-100" />
                <img src="https://images.unsplash.com/photo-1589757833922-4c902798aabf?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-100 h-100" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3 mt-5 mt-md-0">
              <h2>Notre spécialités</h2>
              <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we&apos;ve adjusted the alignment and sizing of both column&apos;s content for equal-height.</p>
              <button class="btn btn-outline-secondary" type="button">Example button</button>
            </div>
          </div>
        </div>
      </section>
      <div class="separator">
        <div className="bg-semi-transparent text-white fs-3 text-center d-flex align-items-center">
          <div className="container py-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-8">
                <blockquote>&ldquo;La boulangerie est l&apos;art de transformer humblement des ingrédients simples en joie pour le cœur et réconfort pour l&apos;âme.&ldquo;</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="container pb-3" id="contact">
        <h2>Nous retrouver</h2>
        <div className="row">
          <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.81483481439!2d1.4974468!3d50.1832983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dde39731eb7555%3A0xc1d36977dfcf5acd!2sAu%20Pain%20De%20Caractere!5e0!3m2!1sen!2sfr!4v1708271886947!5m2!1sen!2sfr" width="100%" height="300" allowfullscreen=""></iframe>
          </div>
          <div className="col-md-6 mt-md-0 mt-5">
            <h3 class="mb-4">Informations de contact</h3>
            <a href="tel:+33322260506" class="contact-link"><i className="fa fa-phone"></i> 03 22 26 65 06</a>
            <a href="mailto:njbadaire@gmail.com" class="contact-link"><i className="fa fa-envelope"></i> njbadaire@gmail.com</a>
          </div>
        </div>
      </section>
      <footer class="bg-black text-white mt-5">
        <div className="container">
          <div class="row justify-content-between py-5 mt-5">
            <div className="col-md-4">
              <div className="w-100">
              <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=61555733292883" data-tabs="timeline" data-width="500" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=61555733292883" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=61555733292883">Au Pain de caractere </a></blockquote></div>
              </div>
            </div>
            <div className="col-md-8">
              <div class="d-flex flex-column flex-sm-row">
                <div className="mx-auto mt-md-0 mt-5">
                  <h3>Au Pain De Caractère</h3>
                  <span class="fa fa-star text-secondary fa-1x my-4"></span>
                  <p>
                    Découvrez l&apos;authenticité artisanale de notre boulangerie à Cayeux-sur-mer, où chaque miette raconte une histoire de passion et de savoir-faire. Nos pains frais, nos pâtisseries délicieusement concoctées et nos croissants croustillants sont le fruit du travail acharné et de l&apos;amour que nous mettons dans chaque préparation. Rejoignez-nous dans cette aventure gustative et laissez-nous vous régaler avec nos délices traditionnels.
                  </p>
                  <div className="d-flex gap-4 mt-5 fs-3">
                    <a href="https://www.facebook.com/profile.php?id=61555733292883"><i className="fa fab fa-facebook-square"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 mentions">
              <small>
                <a href="#">Mentions légales</a> - Développé avec <i className="fa fas fa-heart text-danger"></i> par <a href="https://florent-vandroy.fr/">Florent Vandroy</a>
              </small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
