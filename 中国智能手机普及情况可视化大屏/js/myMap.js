(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var option = {
    clor:["#065aab"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        color:["#fff"],
        crossStyle: {
          color: '#fff'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['产量', '涨幅'],
      textStyle:{
        fontSize:'12',
        color: '#fff'
      },
      
    },
    xAxis: [
      {
        type: 'category',
        data: ['2017', '2018', '2019', '2020', '2021'],
        color:["#fff"],
        axisPointer: {
          type: 'shadow',
          color:["#fff"],
        }
      }
    ],
    textStyle:{
      fontSize:'12',
      color: '#fff'
    },
    yAxis: [
      {
        type: 'value',
        name: '产量（万台）',
        min: 100000,
        max: 200000,
        interval: 50000,
        axisLabel: {
          formatter: '{value} ',
          color:["#fff"],
        }
      },
      {
        type: 'value',
        name: '涨幅',
        min: -15,
        max: 15,
        interval: 5,
        color:["#fff"],
        axisLabel: {
          formatter: '{value} %',
          color:["#fff"],
        }
      }
    ],
    series: [
      {
        name: '产量',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' ml';
          }
        },
        data: [
          188982.37, 180050.62,169603.36,146961.78  ,166151.60	
        ],
        color:["#065aab"],
      },
      {
        name: '涨幅',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        },
        data: [-4.7, -5.8,-13.35,-13.05,8.8],
        color:["#60cda0"],
      }
    ]
  };



  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
