$(function(){
    //Codigo Jquery
    console.log('Jquery funcionando')
    
    let listar = function(){
        $('#table-contact').DataTable({
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
                {"defaultContent":"<button class='btn btn-danger'><i class='fas fa-trash-alt'></i></button>"}
            ],
            "language": idioma
        });
        
    }
    let idioma = {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "buttons": {
            "copy": "Copiar",
            "colvis": "Visibilidad"
        }
    }

    listar()
    
    /*function listarContactos(){
        $.ajax({
            url:'../agenda-ajax/controller/contact_list.php',
            type:'GET',
            success:function(response){
                let contacts = JSON.parse(response)
                let template = ''
                contacts.forEach(contact => {
                    template += `
                    <tr>
                        <td>${contact.id_user}</td>
                        <td>${contact.name}</td>
                        <td>${contact.phone}</td>
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
    }*/

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