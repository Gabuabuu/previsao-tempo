let image = document.querySelector('body')

var data = new Date()
var hour = 19
if(hour >= 6 && hour < 12){
    //BOM DIA
    document.querySelector("[class='bg-image']").style.backgroundImage = 'url(src/images/sunrise-mountain.jpg)'
} else if (hour >= 12 && hour <= 18) {
    //BOA TARDE
    document.querySelector("[class='bg-image']").style.backgroundImage = 'url(src/images/sunset-mountain.jpg)' //Se hora for maior ou igual a 12 e menor ou igual a 18, mostra 'fototarde'

} else {
    hour >= 5
    //BOA NOITE
    document.querySelector("[class='bg-image']").style.backgroundImage = 'url(src/images/midnight-mountain.jpg)' //Se hora for maior que 18, mostra 'fotonoite'

}