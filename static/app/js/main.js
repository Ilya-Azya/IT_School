$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 20) {
        $('#cap').addClass('bg-d')
        $('a#link').css({'color': '#fff'})
        $('.logo_title').removeClass('color-black').addClass('color-white')
        $('.menu-burger').addClass('bg-black').addClass('bg-d')
    } else if (scroll <= 20) {
        $('a#link').css({'color': '#000'})
        $('.logo_title').addClass('color-black').removeClass('color-white')
        $('#cap').removeClass('bg-d')
        $('.menu-burger').removeClass('bg-black').removeClass('bg-d')

    }

})

$(".cap_link_list").bind("click", function () {
    $('.menu-burger').trigger("click")
})

$(".cap_logo").bind("click", function () {
    if ($('.menu-burger').hasClass('open-menu')) {
        $('.menu-burger').trigger("click")
    }
})

let date = new Date('Apr 24 2023 16:00:00');

function counts() {
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    if (gap < 0) {
        document.getElementById('group').innerText = "Time is out!"
    } else {
        document.getElementById('d').innerText = days + (days % 10 == 1 && days != 11 ? ' День' : ((days >= 2 && days <= 4) || (days >= 22 && days <= 24) ? ' Дня' : ' Дней'));
        document.getElementById('h').innerText = hours + (hours % 10 == 1 && hours != 11 ? ' Час' : ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 24) ? ' Часа' : ' Часов'));
        document.getElementById('m').innerText = minutes + (minutes % 10 == 1 && minutes != 11 ? ' Минута' : ((minutes >= 2 && minutes <= 4) || (minutes >= 22 && minutes <= 24) ? ' Минуты' : ' Минут'));
        document.getElementById('s').innerText = seconds + (seconds % 10 == 1 && seconds != 11 ? ' Секунда' : ((seconds >= 2 && seconds <= 4) || (seconds >= 22 && seconds <= 24) ? ' Секунды' : ' Секунд'));
    }


}

counts();

setInterval(counts, 1000);


$(function () {
    var target_block = $('#counter_free')
    var blockStatus = true;

    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false
            $({numberValue: 0}).animate({numberValue: 58}, {
                duration: 2000,
                easing: "linear",
                step: function (val) {
                    $('#counter_free').html(Math.ceil(val))
                }
            })
        }
    })
})

$(function () {
    $('.tech_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }]
    })
})


const TOKEN = '6025819756:AAEK2WUmkBJTeph1bjuRsZUtnPuy99EV-RI'
const CHAT_ID = '899958470'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success')

document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();
    let message = `*Заявка с сайта*\n`;
    message += `*Имя:* ${this.name.value}\n`;
    message += `*Телефон:* ${this.phone_num.value}\n`;
    message += `*Почта:* ${this.user_mail.value}\n`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
    })
        .then((res) => {
            this.name.value = ""
            this.phone_num.value = ""
            this.user_mail.value = ""
            success.innerHTML = "Заявка отправлена!"
            success.style.display = "block"
        })
        .catch((err) => {
            console.warn(err)
        })
        .finally(() => {
        })
})