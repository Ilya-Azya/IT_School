const TOKEN = '6025819756:AAEK2WUmkBJTeph1bjuRsZUtnPuy99EV-RI'
const CHAT_ID = '899958470'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success')

document.getElementById('tg').addEventListener('submit', function (e){
    e.preventDefault();
    let message = `*Заявка с сайта*\n`;
    message += `*Имя:* ${ this.name.value }\n`;
    message += `*Телефон:* ${ this.phone_num.value }\n`;
    message += `*Почта:* ${ this.user_mail.value }\n`;

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
        .catch((err) =>{
            console.warn(err)
        })
        .finally(() => {
        })
})