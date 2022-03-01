// Search Bar
const searchPhone = () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    searchFiled.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}

// Display search result
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <h6 class="card-text">${phone.brand}</h6>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
}