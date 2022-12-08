$(document).ready(function(){
    //on mets à jour le titre
    $('#title').text(param.title);
    //au clic de la souris
    $('.day').on('click',function(event){
        //On récupère l'élément
        let element = $(event.target);
        //On récupère la date et le jour
        let date = new Date();
        let today_day = date.getDate();
        let today_month = date.getMonth();

        //on récupère ensuite le jour de la case
        let day_request = Number(element.text());
        //On récupère le mois renseigné dans les paramètres
        let month_request = param.month;

        //On vérifie que le mois et le jour correspondent 
        let show_day = false;
        if(today_month != month_request){
            show_day= true;
        } else {
            if(day_request == today_day){
                show_day = true;
            }
        }
        //Affichage des modals
        if(show_day){
            // on charge le cadeau
            let aleatoire = Math.floor((Math.random()*25));
            $.get(param.data_folder+aleatoire+".html",function(data){
                //On met à jour notre modal avec le code HTML
                $('.day-content').html(data);
                //On ouvre la modal
                $('#day-modal').modal({
                    size:'large',
                    fadeDuration:200,
                    fadeDelay: 0.30
                });
            },'text');
        } else {
            //Si on selectionne un jour déjà passé 
            if(day_request < today_day){
                $('#passed-day-modal').modal({
                    fadeDuration: 200
                });
            } 
            else {
                $('#no-day-modal').modal({
                    fadeDuration: 200
                });
            }
        }
    });
});
function papanoel(){
    let papa = document.getElementById('papanoel');
    let position_top = Math.floor((Math.random()*500));
    let position_bottom = Math.floor((Math.random()*600));
    papa.style.top = position_top+'px';
    papa.style.left = position_bottom+'px';
    console.log(position_top);
    // $('#papanoel').css('top',position_top);
    let bouger = setTimeout("papanoel()", 1000);
}
papanoel();