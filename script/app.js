$(function(){
    let edit = false
    let listar = function(){
        let table = $('#table-contact').DataTable({
            "destroy":true,
            "ajax":{
                "url":"../agenda-ajax/controller/contact_list.php",
                "method":"GET"
            },
            "columns":[
                {"data":"id_user"},
                {"data":"name"},
                {"data":"phone"},
                {"data":"email"},
                {"data":"direction"},
                {"defaultContent":"<button class='btn btn-danger contact-delete'><i class='fas fa-trash-alt'></i></button><button class='btn btn-primary contact-edit'><i class='fas fa-edit'></i></button>"}
            ]
        });
        eliminarContacto("#table-contact tbody",table)
        editarContacto("#table-contact tbody",table)
    }
    //Modificar usuario
    let editarContacto = function(tbody,table){
        $('tbody').on('click','button.contact-edit',function(){
            let data = table.row( $(this).parents('tr') ).data()
            $.post('../agenda-ajax/controller/contact-single.php',data,function(response){
                const contact = JSON.parse(response)
                $('#id_user').val(contact.id_user)
                $('#name').val(contact.name)
                $('#phone').val(contact.phone)
                $('#email').val(contact.email)
                $('#direction').val(contact.direction)
                edit = true
            })
        })
    }

    //Eliminar contacto
    let eliminarContacto = function(tbody,table){
        $('tbody').on('click', 'button.contact-delete',function(){
            swal({
                title: "¿Desea eliminar este contacto?",
                text: "Una vez eliminado no podra recuperar de nuevo estos datos",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    //Obtener la data de cada fila
                    let data = table.row( $(this).parents('tr') ).data();
                    $.post('../agenda-ajax/controller/contact_delete.php', data, function(response){
                        swal(response, {
                            icon: "success",
                        });
                        listar()
                    })
                } 
            });
        })
    }

    listar()

    //Agregar contacto
    $('#form-contact').submit(function(e){
        const datos ={
            id_user: $('#id_user').val(),
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            direction: $('#direction').val()
        }
        let url = edit === false ? '../agenda-ajax/controller/contact_add.php' : '../agenda-ajax/controller/contact_edit.php'
        console.log(url)
        console.log(edit)

        $.post(url, datos,function(response){
            console.log(response)
            if(response == 'add'){
                swal("Contacto registrado", "El contacto fue registrado con exito", "success");
                
            }else if(response == 'update'){
                swal("Contacto modificado", "El contacto fue modificado con exito", "success");
            }
            else{
                swal("Campos requeridos", "Rellene toda la informacion del formulario", "warning");
            }
            listar()
            $('#form-contact').trigger('reset')
            
        })
        e.preventDefault()  
    })
})