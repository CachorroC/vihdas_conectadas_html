// JavaScript Document
(function () {
    //anterior era sw.js
    // ServiceWorker is a progressive technology. Ignore unsupported browsers
    if ('serviceWorker' in navigator) {
        console.log('CLIENT: service worker registration in progress.');
        navigator.serviceWorker.register('../service-worker.js').then(function () {
            console.log('CLIENT: service worker registration complete.');
        }, function () {
            console.log('CLIENT: service worker registration failure.');
        });
    } else {
        console.log('CLIENT: service worker is not supported.');
    }

})();

$(document).ready(function smoothScroll() {

    // Add smooth scrolling to all links
    $("a:not(.topnav > a)").on('click', function smoothScroll(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({

                scrollTop: $(hash).offset().top

            }, 800, function smoothScroll() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});



// tema y dark mode
const toggleSwitch = document.querySelector('.toggle--daynight input[type="checkbox"]');


const currentTheme = localStorage.getItem('theme');

if (currentTheme) {

    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        console.log('ta de noche');
    }
}

//funcion para prender y apagar el modo oscuro
function switchTheme(e) {

    e.stopPropagation();

    if (e.target.checked) {


        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="/css/dark.css" onload="document.documentElement.style.display = \'\'">',
        );

        localStorage.setItem('theme', 'dark');
        console.log('ta de noche');
    } else {


        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="/css/light.css" onload="document.documentElement.style.display = \'\'">',
        );

        localStorage.setItem('theme', 'light');
        console.log('ta de día');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);





/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropFunction1() {
    if (document.getElementById("myDropdown1").style.display == "flex") {
        $("#myDropdown1").css({
            "display": "none"
        });
        $("#myLinks > a:not(.dropdown-content > a)").css({
            "display": "flex"
        });
        $(".activa").css({
            "display": "flex"
        });
    } else {
        $("#myDropdown1").css({
            "display": "flex"
        });
        $("#myLinks > a:not(.dropdown-content > a)").css({
            "display": "none"
        });
        $(".activa").css({
            "display": "none"
        });
        //$(".btn > i").text("unfold_less");
    }
    //document.getElementById("myDropdown").classList.toggle("show");
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropFunction2() {
    if (document.getElementById("myDropdown2").style.display == "flex") {
        $("#myDropdown2").css({
            "display": "none"
        });
        $("#myLinks > a:not(.dropdown-content > a)").css({
            "display": "flex"
        });
        $(".activa").css({
            "display": "flex"
        });
    } else {
        $("#myDropdown2").css({
            "display": "flex"
        });
        $("#myLinks > a:not(.dropdown-content > a)").css({
            "display": "none"
        });
        $(".activa").css({
            "display": "none"
        });
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function dropFunction3() {
    if (document.getElementById("myDropdown3").style.display == "flex") {
        $("#myDropdown3").css({
            "display": "none"
        });
        $("#myLinks > a:not(.dropdown-content > a)").css({
            "display": "flex"
        });
        $(".activa").css({
            "display": "flex"
        });
    } else {
        $("#myDropdown3").css({
            "display": "flex"
        });
        $("#myLinks > a:not(.dropdown-content > a)").css({
            "display": "none"
        });
        $(".activa").css({
            "display": "none"
        });
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function dropdrop(event) {
    if (!event.target.matches('.btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == "flex") {
                openDropdown.style.display = "none";
                $("#myLinks > a:not(.dropdown-content > a)").css({
                    "display": "flex"
                });
                $(".activa").css({
                    "display": "flex"
                });
            }
        }
    }
}
//el loader del inicio
var myLoader;

function myLoaderfunction() {
    myLoader = setTimeout(showPage, 3000);
}

function showPage() {
    var winHe = $(window).height();

    $("#loader").css({img
        display: "none"
    });

    $("#sigaLeyendo").css({
        display: "flex"
    });
    $(".header").css({
        position: "absolute",
        height: winHe,
    });
    $(".footer-distributed").css({
        display: "flex"
    });

    //Lo que aparece cuando hacemos scroll
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            $("#topBtn").css({
                display: "flex"
            });
            $("#topBtn > i").css({
                display: "flex"
            });
            $("#myTopnav").css({
                display: "inline-block"
            });
            $("#myScroll").css({
                display: "inline-block"
            });
            $("#main").addClass("sticky");
        } else {
            $("#topBtn").css({
                display: "none"
            });
            $("#topBtn > i").css({
                display: "none"
            });
            $("#myTopnav").css({
                display: "none"
            });
            $("#myScroll").css({
                display: "none"
            });
            $("#main").removeClass("sticky");
        }
    }
}
var mqls = [
    window.matchMedia("(max-width: 599px)"), //layout 599 or below
    window.matchMedia("(min-width: 600px) and (max-width: 1199px)"), //layout 600 or above
    window.matchMedia("(min-width: 1200px) and (max-width: 1800px)"), //layout 1200 or above
    window.matchMedia("(min-width: 1800px)"), //layout 1800 or above
    //window.matchMedia('(min-width:767px) and (max-width: 992px)');
]

var elTopnav = document.getElementById("myTopnav");
var elLinks = document.getElementById("myLinks");
var elOnoff = document.getElementById("on-offdark");
var elMain = document.getElementById("main");
var elFloatbtn = document.getElementById("floatBtn");
var elTopbtn = document.getElementById("topBtn");
var elClosebtn = document.getElementById("closebtn");
var elIconmenu = document.querySelector(".iconMenu");
var elActiva = document.getElementById("myTopnav").querySelector("a.activa");

function menu(mql) {
    if (mqls[0].matches) { //max-width: 599px query matched
        console.log("599px");
        if (document.getElementById("myLinks").style.display === "flex") {
            console.log("599 if");
            $("#myLinks").css({
                "display": "none",
                "width": "0",
                "opacity": "0",
            });
            $("#myLinks > a").css({
                "height": "0",
                "opacity": "0",
            });
            $("#on-offdark").css({
                "display": "none",
                "width": "0"
            });
            $(".install-app-btn").css({"display": "none"});
            $(".iconMenu").css({
                "bottom": "auto",
                "top": "0",
                "width": "25%",
                "right": "0",
                "left": "auto",
                "height": "10vh",
                "boxShadow": "none"
            });
            $(".iconMenu > i").text("menu");
            $("#topBtn").css({
                "display": "none",
            });
            $("a.activa").css({
                "display": "none",
                "width": "0",
                "opacity": "0",
            });
            $("a.activa > p").css({
                "opacity": "0",
            });
            $("a#floatBtn").css({
                "width": "0",
                "display": "none"
            });
            $("a#floatBtn > i").css({
                "color": "var(--g-3-shade)",
            });
            $("#myScroll").css({
                "display": "none",
            });
            $(".topnav").css({
                "display": "none",
                "width": "100%",
                "height": "10vh",
                "backgroundColor": "var(--PrimaryColorLighter)",
                "BoxShadow": "var(--dp4)"
            });
        } else {
            console.log("599 else");
            $("#myLinks").css({
                "display": "flex",
                "width": "100%",
                "opacity": "1",
            });
            $(".install-app-btn").css({"display": "flex"});
            $("#myLinks > a").css({
                "height": "10vh",
                "opacity": "1",
            });
            $("#on-offdark").css({
                "display": "flex",
                width: "65vw"
            });
            $(".iconMenu").css({
                "bottom": "auto",
                "top": "2.5vh",
                "width": "7.5vh",
                "right": "auto",
                "left": "2.5vh",
                "height": "7.5vh",
                "boxShadow": "var(--dp2)"
            });
            $(".iconMenu > i").text("clear");
            $("#topBtn").css({
                "display": "none",
            });
            $("a.activa").css({
                "display": "flex",
                "width": "90vw",
                "height": "7.5vh",
                "opacity": "1",
            });
            $("a.activa > p").css({
                "opacity": "1",
            });
            $("a#floatBtn").css({
                "display": "flex",
                "bottom": "5%",
                "top": "auto",
                "left": "5%",
                "width": "7.5vh",
                "height": "7.5vh"
            });
            $("#myScroll").css({
                "display": "none"
            });
            $("a#floatBtn > i").css({
                "color": "var(--g-3-shade)",
            });
            $(".topnav").css({
                "display": "block",
                "width": "100%",
                "height": "100%",
                "backgroundColor": "var(--NavBg)",
                "BoxShadow": "var(--dp16)"
            });
        }
    } else if (mqls[1].matches) { // {min-width: 600px} query matched
        console.log("600px");
        if (document.getElementById("myLinks").style.display === "flex") {
            console.log("600 if");
            $("#myLinks").css({
                "display": "none",
                "width": "0",
                "opacity": "0",
            });
            $(".install-app-btn").css({"display": "none"});
            $("#on-offdark").css({
                "display": "none"
            });
            $(".topnav").css({
                "display": "none",
                "height": "7.5vh",
                "backgroundColor": "var(--PrimaryColor)",
                "BoxShadow": "var(--dp4)"
            });
            $("#topBtn").css({
                "display": "none"
            });
            $(".activa").css({
                "display": "flex",
                "width": "80vw",
                "top": "0",
                "left": "auto",
                "right": "0",
                "backgroundColor": "var(--PrimaryColor)",
                "borderRadius": "0"
            });
            $(".activa > i").css({
                "color": "var(--color-primary-200)",
            });
            $(".activa > p").css({
                "color": "var(--OnP)",
            });
            elFloatbtn.style.display = "none";
            $(".iconMenu").css({
                "bottom": "auto",
                "top": "0",
                "right": "auto",
                "left": "0",
            });
            $(".iconMenu > i").text("apps");
            $(".iconMenu > i").css({
                "fontSize": "3.2rem"
            });
            $(".vl").css({
                "left": "20vw",
                "height": "10vh",
                "opacity": "1"
            });
            $(".vl2").css({
                "width": "0",
                "opacity": "0"
            });
        } else {
            console.log("600 else");
            $("#myLinks").css({
                "display": "flex",
                "width": "100%",
                "opacity": "1",
            });
            $(".install-app-btn").css({"display": "flex"});
            $("#on-offdark").css({
                "display": "flex"
            });
            $(".topnav").css({
                "display": "block",
                "height": "100%",
                "backgroundColor": "var(--NavBg)",
                "BoxShadow": "var(--dp16)"
            });
            $("#topBtn").css({
                "display": "none"
            });
            $(".activa").css({
                "display": "flex",
                "width": "90vw",
                "top": "12.5vh",
                "left": "0",
                "right": "0",
                "backgroundColor": "var(--PrimaryColorLighter)",
                "borderRadius": "2vh"
            });
            $(".activa > i").css({
                "color": "var(--OnP-Light)",
            });
            $(".activa > p").css({
                "color": "var(--OnP-Light)",
            });
            elFloatbtn.style.display = "flex";
            $(".iconMenu").css({
                "bottom": "auto",
                "top": "1%",
                "right": "5%",
                "left": "auto"
            });
            $(".iconMenu > i").text("clear");
            $(".iconMenu > i").css({
                "fontSize": "5rem",
            });
            $(".vl").css({
                "left": "50vw",
                "height": "25vh",
                "opacity": "1"
            });
            $(".vl2").css({
                "width": "100vw",
                "opacity": "1"
            });
        }
    } else if (mqls[2].matches) { // {min-width: 1200px} query matched
        console.log("1200px");
        if (document.getElementById("myLinks").style.display === "flex") {
            console.log("1200 if");
            $(".topnav").css({
                "width": "0",
                "height": "0",
                "opacity": "0"
            });
            $("#myLinks").css({
                "display": "none",
                "width": "0",
                "opacity": "0"
            });
            elOnoff.style.display = "none";
            elMain.style.display = "flex";
            elFloatbtn.style.display = "none";
            $(".install-app-btn").css({"display": "none"});
            $("#topBtn").css({
                "display": "none"
            });
            $(".closebtn").css({
                "display": "none",
                "opacity": "0",
                "width": "0",
            });
            $(".closebtn > i").css({
                "opacity": "0"
            });
            $(".vl").css({
                "height": "0",
                "opacity": "0"
            });
            $(".vl2").css({
                "width": "0",
                "opacity": "0"
            });
            $(".activa").css({
                "display": "none",
                "width": "0",
                "top": "0",
                "left": "0",
                "right": "0"
            });
        } else {
            console.log("1200 else");
            $(".topnav").css({
                "width": "100%",
                "height": "100%",
                "opacity": "1"
            });
            $("#myLinks").css({
                "display": "flex",
                "width": "75vw",
                "opacity": "1"
            });
            $(".install-app-btn").css({"display": "flex"});
            elMain.style.display = "none";
            elOnoff.style.display = "flex";
            $(".closebtn").css({
                "display": "flex",
                "opacity": "1",
                "width": "auto"
            });
            $(".closebtn > i").css({
                "opacity": "1"
            });
            $("#topBtn").css({
                "display": "none"
            });
            elFloatbtn.style.display = "flex";
            $(".activa").css({
                "display": "flex",
                "width": "40vw",
                "top": "5%",
                "left": "0",
                "right": "0"
            });
            $(".vl").css({
                "height": "65vh",
                "opacity": "1"
            });
            $(".vl2").css({
                "width": "100vw",
                "opacity": "1"
            });
        }
    } else if (mqls[3].matches) {
        console.log("1800px");
        if (document.getElementById("myLinks").style.display === "flex") {
            console.log("1800 if");
            $(".topnav").css({
                "width": "0",
                "height": "0"
            });
            $(".install-app-btn").css({"display": "none"});
            $("#myLinks").css({
                "display": "none",
                "width": "0",
                "opacity": "0",
            });
            $("#myLinks > a").css({
                "opacity": "0"
            });
            $("#main").css({
                "display": "flex"
            });
            $("#on-offdark").css({
                "display": "none",
                "width": "0",
                "opacity": "0",
            });
            $("#floatBtn").css({
                "display": "none",
                "opacity": "0",
                "width": "0",
            });
            $("#topBtn").css({
                "display": "none"
            });
            $(".closebtn").css({
                "display": "none",
                "opacity": "0",
                "width": "0",
            });
            $(".closebtn > i").css({
                "opacity": "0",
            });
            $(".activa").css({
                "display": "none",
                "width": "0%",
                "top": "0",
                "left": "0",
                "right": "0",
            });
            $(".vl").css({
                "height": "0",
                "opacity": "0"
            });
            $(".vl2").css({
                "width": "0",
                "opacity": "0"
            });
        } else {
            console.log("1800 else");
            $(".topnav").css({
                "width": "100%",
                "height": "100%"
            });
            $(".install-app-btn").css({"display": "flex"});
            $("#myLinks").css({
                "display": "flex",
                "width": "100%",
                "opacity": "1",
            });
            $("#myLinks > a").css({
                "opacity": "1"
            });
            $("#main").css({
                "display": "none"
            });
            $("#on-offdark").css({
                "display": "flex",
                "width": "15%",
                "opacity": "1",
            });
            $(".closebtn").css({
                "display": "flex",
                "opacity": "1",
                "width": "auto",
            });
            $(".closebtn > i").css({
                "opacity": "1",
            });
            $("#topBtn").css({
                "display": "none"
            });
            $("#floatBtn").css({
                "display": "flex",
                "opacity": "1",
                "width": "15%",
            });
            $(".activa").css({
                "display": "flex",
                "width": "45vw",
                "top": "5%",
                "left": "0",
                "right": "0",
            });
            $(".vl").css({
                "height": "65vh",
                "opacity": "1"
            });
            $(".vl2").css({
                "width": "100%",
                "opacity": "1"
            });
        }
    }
}



for (var r = 0; r < mqls.length; r++) {

    menu(mqls[r]) // call listener function explicitly at run time

    mqls[r].addListener(menu) // attach listener function to listen in on state changes
}





$(document).ready(function Iconmenu() {
    if ($(window).width() < 600) {
        $(".iconMenu > i").text("view_headline");
    } else {
        $(".iconMenu > i").text("apps");
    }
});




$(document).ready(function modoOscu() {
    var handleMatchMedia = function (md) {
        if (md.matches) {
            $("#on-offdark").on('click', function () {
                $(".toggle").toggle();
                $('#on-offdark').toggleClass('expanded');
                $("#on-offdark > i").toggle();
                $("#on-offdark > p").toggle().text("Modo Oscuro: Click aquí para cerrar");
            });
        }
    }

    var mq = window.matchMedia("(max-width: 599px)");
    handleMatchMedia(mq);
    mq.addListener(handleMatchMedia);
});

/* Code by CodingTuting.Com */
function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}
$(document).ready(function tooltipster() {
    $('.tooltip').tooltipster();
});

$('.tooltip').tooltipster({
    animation: 'slide',
    contentAsHTML: 'true',
    theme: 'tooltipster-noir',
    trigger: 'custom',
    interactive: 'true',
    timer: '30000',
    position: 'bottom',
    triggerOpen: {
        mouseenter: true,
        touchstart: true
    },
    triggerClose: {
        click: true,
        scroll: true,
        tap: true
    }
});

window.matchMedia('(display-mode: standalone)').addEventListener('change', ({
    matches
}) => {
    if (matches) {
        $('-install-app-btn-container').hide();
        console.log('standalone')
    } else {
        $('#install-app-btn-container').show();
        console.log('browser')
    }
});

// install the app


let deferredPrompt;
let installSource;

window.addEventListener('beforeinstallprompt', (e) => {
	$('.install-app-btn-container').show();
	deferredPrompt = e;
	installSource = 'nativeInstallCard';

	e.userChoice.then(function (choiceResult) {
		if (choiceResult.outcome === 'accepted') {
			deferredPrompt = null;
		}


	});
});

const installApp = document.getElementById('installApp');

installApp.addEventListener('click', async () => {
	installSource = 'customInstallationButton';

	if (deferredPrompt !== null) {
		deferredPrompt.prompt();
		const {
			outcome
		} = await deferredPrompt.userChoice;
		if (outcome === 'accepted') {
			deferredPrompt = null;
		}


	} else {
		showToast('Vihdas Conectadas ya está instalada.')
	}
});
