$(function(){
    //Codigo Jquery
    function listarContactos(){
        $.ajax({
            url:'contact_list.php',
            type:'GET',
            success:function(response){
                console.log(response)
                /*let contacts = JSON.parse(response)
                let template =''
                contacts.forEach(contact => {
                    template +=`
                    <tr>
                        <td>${contact.id_user}</td>
                    </tr>
                    `
                })
                $("#list-contact").html(template)*/
                
            }
        })
    }
})