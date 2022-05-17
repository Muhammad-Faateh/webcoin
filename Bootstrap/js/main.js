
  var xValues = [0, 5, 10, 15, 20];
  var yValues = [10, 50, 10, 30, 20];
  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: true,
        pointRadius: 1,
        borderColor: "rgba(164,156,21,0.53)",
        data: yValues,
        backgroundColor: '#cbcc7e'

      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        fontSize: 5
      }
    }
  });
  function generateData(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
      yValues.push(eval(value));
      xValues.push(x);
    }
  }

  var xValues = [0, 5, 10, 15, 20];
  var yValues = [10, 50, 10, 30, 20];
  new Chart("myChart2", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: true,
        pointRadius: 1,
        borderColor: "#ce4747",
        data: yValues,
        backgroundColor: '#fac3c3'

      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        fontSize: 16
      }
    }
  });
  function generateData(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
      yValues.push(eval(value));
      xValues.push(x);
    }
  }

  var xValues = [0, 5, 10, 15, 20];
  var yValues = [10, 50, 10, 30, 20];
  new Chart("myChart3", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: true,
        pointRadius: 1,
        borderColor: "	#5ca9bb",
        data: yValues,
        backgroundColor: '#aafff5'

      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        fontSize: 16
      }
    }
  });
  function generateData(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
      yValues.push(eval(value));
      xValues.push(x);
    }
  }

  var xValues = [0, 5, 10, 15, 20];
  var yValues = [10, 50, 10, 30, 20];
  new Chart("myChart4", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: true,
        pointRadius: 1,
        borderColor: "	#5ca9bb",
        data: yValues,
        backgroundColor: '#aafff5'

      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        fontSize: 16
      }
    }
  });
  function generateData(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
      yValues.push(eval(value));
      xValues.push(x);
    }
  }
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Price', 'Size'],
      [50, 7], [60, 8], [70, 8], [80, 9], [90, 9],
      [100, 9], [110, 10], [120, 11],
      [130, 14], [140, 14], [150, 15]
    ]);
    var options = {
      title: 'House Prices vs. Size',
      hAxis: { title: 'Square Meters' },
      vAxis: { title: 'Price in Millions' },
      legend: 'none'
    };
    var chart = new google.visualization.LineChart(document.getElementById('myChartt'));
    chart.draw(data, options);
  }

  document.addEventListener("DOMContentLoaded", function (event) {
    let isClose = false;
    let downArrow = document.querySelector('.fa-angle-down')
    downArrow.style.display = "none"
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId)
      const logoTag = document.querySelector('.nav-logo-name')
      let sidebarIcon1 = document.getElementById('side-bar-icon-1')
      let sidebarIcon2 = document.getElementById('side-bar-icon-2')
      let sidebarIcon3 = document.getElementById('side-bar-icon-3')
      let sidebarIcon4 = document.getElementById('side-bar-icon-4')
      let sidebarIcon5 = document.getElementById('side-bar-icon-5')
      let sidebarIcon6 = document.getElementById('side-bar-icon-6')
      let sidebarIcon7 = document.getElementById('side-bar-icon-7')
      let sidebarIcon8 = document.getElementById('side-bar-icon-8')
      let sidebarIcon9 = document.getElementById('side-bar-icon-9')
      let sidebarIcon10 = document.getElementById('side-bar-icon-10')
      let sidebarIcon11 = document.getElementById('side-bar-icon-11')
      let sidebarText1 = document.getElementById('side-bar-text-1')
      let sidebarText2 = document.getElementById('side-bar-text-2')
      let sidebarText3 = document.getElementById('side-bar-text-3')
      let sidebarText4 = document.getElementById('side-bar-text-4')
      let sidebarText5 = document.getElementById('side-bar-text-5')
      let sidebarText6 = document.getElementById('side-bar-text-6')
      let sidebarText7 = document.getElementById('side-bar-text-7')
      let sidebarText8 = document.getElementById('side-bar-text-8')
      let sidebarText9 = document.getElementById('side-bar-text-9')
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", () => {
          isClose = !isClose;
          if(isClose){
            logoTag.innerHTML = "LO"
            logoTag.style.marginLeft = "-50px"
            downArrow.style.display = "block"
            downArrow.style.position = 'relative';
            downArrow.style.top = "-20px"
            downArrow.style.left = '25px'
      
            sidebarIcon1.style.position = "relative"
            sidebarIcon1.style.left = "-10px"
            sidebarIcon2.style.position = "relative"
            sidebarIcon2.style.left = "-10px"
            sidebarIcon3.style.position = "relative"
            sidebarIcon3.style.left = "-10px"
            sidebarIcon4.style.position = "relative"
            sidebarIcon4.style.left = "-10px"
            sidebarIcon5.style.position = "relative"
            sidebarIcon5.style.left = "-10px"
            sidebarIcon6.style.position = "relative"
            sidebarIcon6.style.left = "-10px"
            sidebarIcon7.style.position = "relative"
            sidebarIcon7.style.left = "-10px"
            sidebarIcon8.style.position = "relative"
            sidebarIcon8.style.left = "-10px"
            sidebarIcon9.style.position = "relative"
            sidebarIcon9.style.left = "-10px"
            sidebarIcon10.style.position = "relative"
            sidebarIcon10.style.left = "-20px"
            sidebarIcon11.style.position = "relative"
            sidebarIcon11.style.left = "-20px"
            sidebarText1.style.position = "relative"
            sidebarText1.style.left = "50px"
            sidebarText2.style.position = "relative"
            sidebarText2.style.left = "50px"
            sidebarText3.style.position = "relative"
            sidebarText3.style.left = "50px"
            sidebarText4.style.position = "relative"
            sidebarText4.style.left = "50px"
            sidebarText5.style.position = "relative"
            sidebarText5.style.left = "50px"
            sidebarText6.style.position = "relative"
            sidebarText6.style.left = "50px"
            sidebarText7.style.position = "relative"
            sidebarText7.style.left = "50px"
            sidebarText8.style.position = "relative"
            sidebarText8.style.left = "50px"
            sidebarText9.style.position = "relative"
            sidebarText9.style.left = "50px"
          }else{
            logoTag.innerHTML = "LOGO"
            logoTag.style.marginLeft = "-19px"
            downArrow.style.display = "none"
            sidebarIcon1.style.position = "unset"
            sidebarIcon1.style.left = "0px"
            sidebarIcon2.style.position = "unset"
            sidebarIcon2.style.left = "0px"
            sidebarIcon3.style.position = "unset"
            sidebarIcon3.style.left = "0px"
            sidebarIcon4.style.position = "unset"
            sidebarIcon4.style.left = "0px"
            sidebarIcon5.style.position = "unset"
            sidebarIcon5.style.left = "0px"
            sidebarIcon6.style.position = "unset"
            sidebarIcon6.style.left = "0px"
            sidebarIcon7.style.position = "unset"
            sidebarIcon7.style.left = "0px"
            sidebarIcon8.style.position = "unset"
            sidebarIcon8.style.left = "0px"
            sidebarIcon9.style.position = "unset"
            sidebarIcon9.style.left = "0px"
            sidebarText1.style.position = "unset"
            sidebarText1.style.left = "0px"
            sidebarText2.style.position = "unset"
            sidebarText2.style.left = "0px"
            sidebarText3.style.position = "unset"
            sidebarText3.style.left = "0px"
            sidebarText4.style.position = "unset"
            sidebarText4.style.left = "0px"
            sidebarText5.style.position = "unset"
            sidebarText5.style.left = "0px"
            sidebarText6.style.position = "unset"
            sidebarText6.style.left = "0px"
            sidebarText7.style.position = "unset"
            sidebarText7.style.left = "0px"
            sidebarText8.style.position = "unset"
            sidebarText8.style.left = "0px"
            sidebarText9.style.position = "unset"
            sidebarText9.style.left = "0px"
          }
          toggle.classList.toggle("checkToggle");
          nav.classList.toggle("show-navbar");
          toggle.classList.toggle("bx-x");
          bodypd.classList.toggle("body-pd");
          headerpd.classList.toggle("body-pd");
        });
      }
    };
    showNavbar("header-toggle", "nav-bar", "body-pd", "header");
    const linkColor = document.querySelectorAll(".nav-link");
    function colorLink() {
      logoTag.style.marginLeft = '-27px'
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

  });
  document.addEventListener("DOMContentLoaded", function (event) {
    const homeTab = document.getElementById("nav-home-tab");
    const profileTab = document.getElementById("nav-profile-tab");
    homeTab.style.borderBottom = "1px solid white";
    homeTab.addEventListener("click", () => {
      homeTab.style.borderBottom = "1px solid white";
      profileTab.style.borderBottom = "none";
    })
    profileTab.addEventListener("click", () => {
      homeTab.style.border = "none";
      profileTab.style.borderBottom = "1px solid white";
    })
  })
  const openButton = document.getElementById("navbar-open-icon")
    const closeButton = document.getElementById("navbar-close-icon")
  document.addEventListener("DOMContentLoaded", function (event) {
    openButton.style.display = "block"
    closeButton.style.display = "none"
    openButton.addEventListener("click",()=>{
      openButton.style.display = "none"
      closeButton.style.display = "block"
    })
    closeButton.addEventListener("click",()=>{
      openButton.style.display = "block"
      closeButton.style.display = "none"
})
  })
  $('#header-toggle').click(function () {
    var padding = $('#mainContainerId7').css('padding');
    var newPadding = (padding == '0px 100px 0px 380px') ? '0px 100px 0px 180px' : '0px 100px 0px 380px';
    $('#mainContainerId7').css('padding', newPadding);
    var paddingtwo = $('#mainContainerId8').css('padding');
    var newPaddingtwo = (paddingtwo == '50px 10px 0px 360px') ? '50px 0px 0px 160px' : '50px 10px 0px 360px';
    $('#mainContainerId8').css('padding', newPaddingtwo);
    var margin = $('#header').css('margin-left');
    var newMargin = (margin == '80px') ? '285px' : '80px';
    $('#header').css('margin-left', newMargin);
  })
