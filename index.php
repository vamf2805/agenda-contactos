<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda</title>
    <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.css"/>
</head>
<body>
    <nav class="navbar navbar-dark bg-primary">
        <a href="/" class="navbar-brand">
            Agenda de Contactos
        </a>
    </nav>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <form id="form-contact">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Ingresar Nombre">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Ingresar Correo">
                            </div>  
                            <div class="form-group">
                                <textarea name="direction" id="direction" name="direction" class="form-control" placeholder="Ingresar Direccion" cols="20" rows="8"></textarea>
                            </div>
                        </form>
                        <button class="btn btn-primary btn-lg btn-block" id="save">Guardar Contacto</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="bg-primary">
                        <tr>
                            <th class="text-white">ID</th>
                            <th class="text-white">Nombre</th>
                            <th class="text-white">Telefono</th>
                            <th class="text-white">Direccion</th>
                            <th class="text-white">Accion</th>
                        </tr> 
                    </thead>
                </table>
            </div>
        </div>
    </div>
</body>
</html>