// Search Bar
const searchPhone = () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    // clear data
    searchFiled.value = '';

    // load data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}

// Display search result
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    data.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img class="w-75 h-75" src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Name: ${phone.phone_name}</h5>
          <h6 class="card-text">Brand: ${phone.brand}</h6>
          <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary" >Details</button>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
}

// Phone Detail
const loadPhoneDetail = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}

// display phone detail
const displayPhoneDetail = data => {
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.image}" class="card-img-top w-75 h-75" alt="...">
    <div class="card-body">
              <h5 class="card-title">Name: ${data.name}</h5>
              <h6 class="card-text">Brand: ${data.brand}</h6>
              <h6 class="card-text">Chipset: ${data?.mainFeatures?.chipSet || 'No'}</h6>
              <h6 class="card-text">Display size: ${data?.mainFeatures?.displaySize || 'No'}</h6>
              <h6 class="card-text">Memory: ${data?.mainFeatures?.memory || 'No'}</h6>
              <h6 class="card-text">Storage: ${data?.mainFeatures?.storage || 'No'}</h6>
              <h6 class="card-text">Bluetooth: ${data.others?.Bluetooth || 'No'}</h6>
              <h6 class="card-text">GPS: ${data.others?.GPS || 'No'}</h6>
              <h6 class="card-text">NFC: ${data.others?.NFC || 'No'}</h6>
              <h6 class="card-text">Radio: ${data.others?.Radio || 'No'}</h6>
              <h6 class="card-text">USB: ${data.others?.USB || 'No'}</h6>
              <h6 class="card-text">WLAN: ${data.others?.WLAN || 'No'}</h6>
              <h6 class="card-text">Relase Date: ${data?.releaseDate || 'No Relase Date found'}</h6>
              <h6 class="card-text">Sensors: ${data?.mainFeatures.sensors || 'No Relase Date found'}</h6>
            </div>
    `;
    phoneDetails.appendChild(div);
}