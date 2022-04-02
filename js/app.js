const marvel = {
  render: () => {
    const urlAPI =
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=505e7cc7ff86b0ab9a75a0127100fdb1&hash=c4838fe6815527aed45c36a8e8cd8ec3";
    const container = document.querySelector("#marvel-row");
    let contenHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "RES.JSON");
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          let urlSerie = hero.series.items[0];
          contenHTML += `<div class="col-4 mt-2">
            <div class="card" style="width: auto">
              <h3 class="tittle tittle-charater">${hero.name}</h3>
              <img
                src="${hero.thumbnail.path}.${hero.thumbnail.extension}"
                alt="${hero.name}"
                class="img-thumbnail"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger btn-more"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  VIEW MORE
                </button>
          
                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${hero.name}</h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <img
                          src="${hero.thumbnail.path}.${hero.thumbnail.extension}"
                          alt="${hero.name}"
                          class="img-thumbnail"
                        />
                        ${hero.series}
                      </div>
                      <div class="modal-footer">
                        <div class="container">
                          <div class="row">
                            <div class="col button-mdal">
                              <img src="icons/btn-favourites-default.png" alt="" />
                              <a href="">ADD TO FAVOURITES</a>
                            </div>
                            <div class="col button-mdal">
                              <img src="icons/shopping-cart-primary.png" alt="" /><a
                                href=""
                                >BUY FOR $0.00</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- / modal -->
              </div>
            </div>
          </div>`;
        }
        container.innerHTML = contenHTML;
      });
  },
};
marvel.render();