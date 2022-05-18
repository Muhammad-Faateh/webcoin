
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
              sidebarIcon10.style.position = "unset"
              sidebarIcon10.style.left = "0px"
              sidebarIcon11.style.position = "unset"
              sidebarIcon11.style.left = "0px"
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
