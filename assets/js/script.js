// Variables
const totalCases = document.getElementById('total-count');
const activeCases = document.getElementById('active-count');
const recoveries = document.getElementById('recoveries-count');
const deaths = document.getElementById('deaths-count');

fetch('https://corona-api.com/countries')
  .then(response => response.json())
  .then(data => {
      let myData = data;
      console.log(data);

      for (i=0; i < myData.data.length; i++){
        let targetSelect = document.getElementById("country");
        let option = document.createElement("option");
        option.text = myData.data[i].name;
        targetSelect.add(option);
        }

      totalCases.innerText = myData.data[231].latest_data.confirmed;
      activeCases.innerText = myData.data[231].latest_data.critical;
      recoveries.innerText = myData.data[231].latest_data.recovered;
      deaths.innerText = myData.data[231].latest_data.deaths;
      let dateSlice = myData.data[231].updated_at;
      let dateCut = dateSlice.slice(0, 10);
        document.getElementById('update').innerText = dateCut;

      // Chart
      let totalChart = myData.data[231].latest_data.confirmed;
      let activeChart = myData.data[231].latest_data.critical;
      let recoveriesChart = myData.data[231].latest_data.recovered;
      let deathsChart = myData.data[231].latest_data.deaths;

      Chart.defaults.global.defaultFontFamily = 'Montserrat';

      let myChart0 = document.getElementById('myChart').getContext('2d');
      let chart = new Chart(myChart0, {
        type: 'bar',
        data: {
          labels: ['Total cases', 'Active cases', 'Recoveries', 'Deaths'],
          datasets: [{
            label: 'Count',
            data: [
              totalChart,
              activeChart,
              recoveriesChart,
              deathsChart
            ],
            backgroundColor:[
              'blue',
              'red',
              'green',
              'black'
            ],
            borderWidth: 4,
  borderColor: 'black'
          }]
        },
        options: {
            legend: {
            display: false
          }
        }
      });
    });


function selectCountry(){
  fetch('https://corona-api.com/countries')
    .then(response => response.json())
    .then(data => {
        let myData = data;
        console.log(data);

        let targetIndex = document.getElementById("country").selectedIndex;
        let index = targetIndex - 1;
        let targetCountryName = document.getElementById("country-name");
        let y = document.getElementById("country").options;
        targetCountryName.innerText = y[targetIndex].text;

        totalCases.innerText = myData.data[index].latest_data.confirmed;
        activeCases.innerText = myData.data[index].latest_data.critical;
        recoveries.innerText = myData.data[index].latest_data.recovered;
        deaths.innerText = myData.data[index].latest_data.deaths;
        let dateSlice = myData.data[index].updated_at;
        let dateCut = dateSlice.slice(0, 10);
        document.getElementById('update').innerText = dateCut;

        // Chart
        let totalChart = myData.data[index].latest_data.confirmed;
        let activeChart = myData.data[index].latest_data.critical;
        let recoveriesChart = myData.data[index].latest_data.recovered;
        let deathsChart = myData.data[index].latest_data.deaths;

        Chart.defaults.global.defaultFontFamily = 'Montserrat';

        let myChart = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(myChart, {
          type: 'bar',
          data: {
            labels: ['Total cases', 'Active cases', 'Recoveries', 'Deaths'],
            datasets: [{
              label: 'Count',
              data: [
                totalChart,
                activeChart,
                recoveriesChart,
                deathsChart
              ],
              backgroundColor:[
                'blue',
                'red',
                'green',
                'black'
              ],
              borderWidth: 4,
              borderColor: 'black'
            }]
          },
          options: {
            legend: {
              display: false
            }
          }
        });
    });
}


