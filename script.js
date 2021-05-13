$(document).ready(function(){
    var url = "https://api.covid19india.org/data.json"

    $.getJSON(url, function(data){
        console.log(data)

        var total_active, total_recovered, total_deaths, total_confirmed

        var state=[]
        var confirmed = []
        var recovered = []
        var deaths = []
        var active = []
        $.each(data.statewise, function(id, obj){
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            active.push(obj.active)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
        })

        console.log(state)

        state.shift()
        confirmed.shift()
        active.shift()
        recovered.shift()
        deaths.shift()
        

        total_active = data.statewise[0].active
        total_confirmed = data.statewise[0].confirmed
        total_recovered = data.statewise[0].recovered
        total_deaths = data.statewise[0].deaths


        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)

        var myChart = document.getElementById("myChart").getContext('2d')

        var chart = new Chart(myChart, {
            type : 'line',
            data:{
                labels : state,
                datasets : [
                    {
                        label : "Confirmed",
                        data : confirmed,
                        borderColor: "#ffd700",
                        backgroundColor : "#ffe44d",
                        fill : true,
                        minBarLength : 100
                    },
                    {
                        label : "Recovered",
                        data : recovered,
                        borderColor: "#28a428",
                        backgroundColor : "#6fdc6f",
                        fill : true,
                        minBarLength : 100
                    },
                    {
                        label : "Active",
                        data : active,
                        borderColor: "#5bc0de",
                        backgroundColor : "#95d6e9",
                        fill : true,
                        minBarLength : 100
                    },
                    {
                        label : "Deceased",
                        data : deaths,
                        borderColor: "#d9534f",
                        backgroundColor :"#df706d",
                        fill : true,
                        minBarLength : 100
                    }
                ]
            },
            options : {}
        })
    })
})