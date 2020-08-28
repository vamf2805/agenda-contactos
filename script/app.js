$(function(){
    //Codigo Jquery
    console.log('Jquery funcionando')
    
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
                {"defaultContent":"<button class='btn btn-danger contact-delete'><i class='fas fa-trash-alt'></i></button>"}
            ]
        });
        eliminarContacto("#table-contact tbody",table)
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
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            direction: $('#direction').val()
        }
        $.post('../agenda-ajax/controller/contact_add.php', datos,function(response){
            if(response == 'true'){
                swal("Contacto registrado", "El contacto fue registrado con exito", "success");
                
            }else{
                swal("Campos requeridos", "Rellene toda la informacion del formulario", "warning");
            }
            listar()
            $('#form-contact').trigger('reset')
            
        })
        e.preventDefault()
        
    })




})