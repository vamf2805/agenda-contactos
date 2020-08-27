$(function(){
    //Codigo Jquery
    console.log('Jquery funcionando')

    function listarContactos(){
        $.ajax({
            url:'contact_list.php',
            type:'GET',
            success:function(response){
                console.log(response)
                let contacts = JSON.parse(response)
                let template = ''
                contacts.forEach(contact => {
                    template += `
                    <tr task_id="${contact.id_usuario}">
                        <td>${contact.nombre}</td>
                        <td><a href="#" class="task-item">${contact.direccion}</a></td>
                        <td>${contact.correo}</td>
                        <td>
                            <button class="btn btn-danger task-delete">
                                Delete
                            </button>
                        </td>
                    </tr>`
                })
                $('#list-contact').html(template)
            }
        })
    }
})