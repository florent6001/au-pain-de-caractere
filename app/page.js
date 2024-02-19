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
                  <a class="nav-link" href="#">Accueil</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Notre Histoire</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Spécialités</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
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
          <div class="col-md-4">
            <img src="https://abdulsamad.xyz/Bakery/images/story-img.jpg" className="h-100 w-100" />
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center text-white">
              <i class="fa fa-4x fa-briefcase"></i>
              <p class="number">+150</p>
              <p>Baguettes par jours</p>
            </div>
            <div className="col-md-3 text-center text-white">
              <i class="fa fa-4x fa-briefcase"></i>
              <p class="number">+50</p>
              <p>Gateau d&apos;anniversaire réalisé</p>
            </div>
            <div className="col-md-3 text-center text-white">
              <i class="fa fa-4x fa-briefcase"></i>
              <p class="number">+20</p>
              <p>Je sais pas quoi</p>
            </div>
            <div className="col-md-3 text-center text-white">
              <i class="fa fa-4x fa-briefcase"></i>
              <p class="number">+10</p>
              <p>Y&apos;en a un peu moins lol</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div class="row align-items-start">
          <div class="col-md-6">
            <div className="px-5">
              <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                <img src="https://abdulsamad.xyz/Bakery/images/square-2.jpg" class="w-100" />
                <img src="https://abdulsamad.xyz/Bakery/images/square-2.jpg" class="w-100" />
                <img src="https://abdulsamad.xyz/Bakery/images/square-2.jpg" class="w-100" />
                <img src="https://abdulsamad.xyz/Bakery/images/square-2.jpg" class="w-100" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Notre spécialités</h2>
              <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we&apos;ve adjusted the alignment and sizing of both column&apos;s content for equal-height.</p>
              <button class="btn btn-outline-secondary" type="button">Example button</button>
            </div>
          </div>
        </div>
      </section>
      <section class="separator text-white fs-3 text-center d-flex align-items-center">
        <div className="container bg-semi-transparent py-5">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-8">
              <blockquote>"La boulangerie est l&apos;art de transformer humblement des ingrédients simples en joie pour le cœur et réconfort pour l&apos;âme."</blockquote>
            </div>
          </div>
        </div>
      </section>
      <section class="container p-0 pb-3">
        <h2>Nous retrouver</h2>
        <div className="row">
          <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.81483481439!2d1.4974468!3d50.1832983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dde39731eb7555%3A0xc1d36977dfcf5acd!2sAu%20Pain%20De%20Caractere!5e0!3m2!1sen!2sfr!4v1708271886947!5m2!1sen!2sfr" width="100%" height="300" allowfullscreen=""></iframe>
          </div>
          <div className="col-md-6">
            <i className="fa fa-phone fa-1x"></i>Téléphone <br />
            <div className="fa fa-envelope fa-1x"></div>Email <br />
          </div>
        </div>
      </section>
      <footer class="bg-black text-white mt-5">
        <div className="container">
          <div class="row">
            <div className="col-md-4">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FAu-Pain-de-caractere%2F61555733292883%2F&tabs=timeline&width=200&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="200" height="200" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            <div className="col-md-8">
              <div class="d-flex flex-column flex-sm-row py-4 my-4">
                <div className="mx-auto">
                  <h3>Au Pain De Caractère</h3>
                  <span class="fa fa-star text-secondary fa-1x my-3"></span>
                  <p>Texte de présentation rapide de la boulangerie pour qu&apos;on nous trouve sur Google.
                    Vero possimus labore enim eos totam assumenda cupiditate doloribus sed quasi delectus fugiat necessitatibus nisi, eum amet repellat sit ad sunt consectetur impedit, perferendis provident dolores. Voluptates voluptas incidunt deleniti consectetur? Error dolores numquam distinctio sint nesciunt optio dolorum dolorem.</p>
                  <div className="d-flex gap-4 mt-5">
                    <i className="fa fab fa-facebook-square fa-1x"></i>
                    <i className="fa fab fa-instagram fa-1x"></i>
                    <i className="fa fab fa-twitter fa-1x"></i>
                  </div>
                  <p class="mt-5">Mentions légales</p>
                  <small>Développé par Florent Vandroy</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
