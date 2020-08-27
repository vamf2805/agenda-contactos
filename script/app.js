$(function(){
    //Codigo Jquery
    console.log('Jquery funcionando')
    listarContactos()
    function listarContactos(){
        $.ajax({
            url:'../agenda-ajax/controller/contact_list.php',
            type:'GET',
            success:function(response){
                console.log(response)
                let contacts = JSON.parse(response)
                let template = ''
                contacts.forEach(contact => {
                    template += `
                    <tr>
                        <td>${contact.id_user}</td>
                        <td>${contact.name}</td>
                        <td>${contact.direction}</td>
                        <td>${contact.email}</td>
                        <td>
                            <button class="btn btn-danger">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>`
                })
                $('#list-contact').html(template)
            }
        })
    }
})