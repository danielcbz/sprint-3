const receitasContainer = document.querySelector(".receitas")
const urlFetch = "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas"
let receitas = []

const loadData = async ()  => {
  const response = await fetch(urlFetch)
  const data = await response.json()

  receitas = data.filter(receita => {
    if(receita.filtro) {
      return receita.filtro.includes(filtro)
    }
  })
  const update = {
    title: 'A blog post by Kingsley',
    body: 'Brilliant post on fetch API',
    userId: 1,
    };
    
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
    };
    fetch('https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas', options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
      // {
      //
      title: 'A blog post by Kingsley',
      //
      body: 'Brilliant post on fetch API',
      //
      userId: 1,
      //
      id: 101
      // };
      }).catch(e => {
      console.log(e);
      });

  receitas.forEach(receita => {
    receitasContainer.innerHTML += `
    </div>
    <script src="novasreceitas.js"></script>
    <div class="search-container">
      <input type="text" id="search-input" placeholder="Nome da nova receita...">
    </div>
  </div>
  <script src="novasreceitas.js"></script>
  <div class="search-container">
    <input type="text" id="search-input" placeholder="igredientes da nova receita...">
  </div>
  </div>
  <script src="novasreceitas.js"></script>
  <div class="search-container">
    <input type="text" id="search-input" placeholder="metodo de preparo da nova receita...">
  </div>
  <div class="button-container">
      <button type="button">Botão Centralizado</button>
    </div>
    `
  })
}

window.onload = loadData