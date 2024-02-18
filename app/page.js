export default function Home() {
  return (
    <>
      <div className="full-image flex-column d-flex align-items-center">
        <nav class="w-100 navbar navbar-expand-md navbar-dark bg-transparent">
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
        <div class="py-5 my-5 text-white h-100 rounded-3">
          <div class="container">
            <h1 class="display-5 fw-bold">Au Pain De Caractère</h1>
            <p class="col-md-8 fs-5 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, mollitia. Est praesentium modi impedit, vitae, nesciunt deleniti enim ducimus iure repellendus mollitia expedita deserunt, aspernatur commodi iste culpa eaque aut voluptate perspiciatis id odit. Culpa veniam suscipit sequi, laboriosam mollitia provident illum recusandae itaque animi doloribus quam ea? Maiores, ratione?
            </p>
            <button class="btn btn-secondary btn-lg" type="button">Nous découvrir</button>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div class="row align-items-md-stretch">
          <div class="col-md-8">
            <div class="h-100 p-5 text-bg-dark rounded-3">
              <h2>Notre histoire</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur deleniti, a adipisci rerum aspernatur atque commodi quas, suscipit, totam ducimus nobis vero maxime explicabo optio maiores hic dolore nemo officiis repudiandae error ea numquam? Similique minus vitae nobis doloribus perferendis, nisi molestiae animi, adipisci nostrum consectetur ab saepe eaque esse quasi. Voluptatibus expedita voluptatum quasi sunt, eaque corrupti mollitia pariatur perferendis excepturi voluptas praesentium aliquam placeat porro facere est ipsum amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magni in corrupti error libero reiciendis quos nisi nostrum, itaque unde quaerat distinctio cumque voluptate rem? Voluptatum incidunt ipsum quidem natus. Nesciunt magnam dolorem harum quam minus consequuntur ullam aperiam culpa, assumenda officia ducimus voluptates ut explicabo vel, repellat natus iste.</p>
            </div>
          </div>
          <div class="col-md-4">
            <img src="https://abdulsamad.xyz/Bakery/images/story-img.jpg" className="w-100" />
          </div>
        </div>
      </div>
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
      <img src="https://abdulsamad.xyz/Bakery/images/tasteful-recipes.jpg" class="my-5" height="300" width={"100%"} />
      <div class="container p-0 pb-3">
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
      </div>
      <footer class="bg-black text-white mt-5">
        <div className="container">
          <div class="row">
            <div class="d-flex flex-column flex-sm-row py-4 my-4">
              <div className="text-center w-75 mx-auto">
                <h3>Au Pain De Caractère</h3>
                <span class="fa fa-star text-secondary fa-1x my-3"></span>
                <p>Texte de présentation rapide de la boulangerie pour qu&apos;on nous trouve sur Google.
                  Vero possimus labore enim eos totam assumenda cupiditate doloribus sed quasi delectus fugiat necessitatibus nisi, eum amet repellat sit ad sunt consectetur impedit, perferendis provident dolores. Voluptates voluptas incidunt deleniti consectetur? Error dolores numquam distinctio sint nesciunt optio dolorum dolorem.</p>
                  <div className="d-flex justify-content-center gap-4 mt-5">
                  <i className="fa fab fa-facebook-square fa-1x"></i>
                  <i className="fa fab fa-instagram fa-1x"></i>
                  <i className="fa fab fa-twitter fa-1x"></i>
                  </div>
                  <p class="mt-5">Mentions légales</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
