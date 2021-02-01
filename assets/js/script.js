const totalCases = document.getElementById('total-count');
const activeCases = document.getElementById('active-count');
const recoveries = document.getElementById('recoveries-count');
const deaths = document.getElementById('deaths-count');

fetch('https://corona-api.com/countries')
  .then(response => response.json())
  .then(data => {
      let myData = data;
      console.log(data);
      totalCases.innerText = myData.data[231].latest_data.confirmed;
      activeCases.innerText = myData.data[231].latest_data.critical;
      recoveries.innerText = myData.data[231].latest_data.recovered;
      deaths.innerText = myData.data[231].latest_data.deaths;
      let dateSlice = myData.data[231].updated_at;
      let dateCut = dateSlice.slice(0, 10);
      document.getElementById('update').innerText = dateCut;

  });


