var loadChart = function(){

  var myConfig = {
    type: "bar3d",
    plot:{
      aspect:"cone"
    },
    series: [
      {
        values:[20,40,25,50,15,45,33,34]
      }
    ]
  };

  zingchart.render({
    id : 'myChart',
    data : myConfig,
    height: "100%",
    width: "100%"
  });
}
