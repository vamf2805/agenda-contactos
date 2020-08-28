$(function(){
    //Codigo Jquery
    console.log('Jquery funcionando')
    $('#table-contact').DataTable({
        "language": {
            "decimal":        ".",
            "emptyTable":     "No hay datos para mostrar",
            "info":           "del _START_ al _END_ (_TOTAL_ total)",
            "infoEmpty":      "del 0 al 0 (0 total)",
            "infoFiltered":   "(filtrado de todas las _MAX_ entradas)",
            "infoPostFix":    "",
            "thousands":      "'",
            "lengthMenu":     "Mostrar _MENU_ entradas",
            "loadingRecords": "Cargando...",
            "processing":     "Procesando...",
            "search":         "Buscar:",
            "zeroRecords":    "No hay resultados",
            "paginate": {
                "first":      "Primero",
                "last":       "Último",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
            "aria": {
                "sortAscending":  ": ordenar de manera Ascendente",
                "sortDescending": ": ordenar de manera Descendente ",
            }
        }
    })
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
    }
})