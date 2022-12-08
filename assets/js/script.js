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
            $.get(param.data_folder+day_request+".html",function(data){
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

//position absolute, left et top, fonction aleatoire, settimeout