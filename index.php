<?php include 'partials/header.php'; ?>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-3 mr-5">
                <div class="card">
                    <div class="card-body">
                        <form id="form-contact">
                            <input type="hidden" name="id" id="id_user">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Ingresar Nombre">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="phone" id="phone" placeholder="Ingresar Telefono">
                            </div>  
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Ingresar Correo">
                            </div>  
                            <div class="form-group">
                                <textarea name="direction" id="direction" name="direction" class="form-control" placeholder="Ingresar Direccion" cols="20" rows="8"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg btn-block" id="save">Guardar Contacto</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <table class="table table-bordered table-hover" id="table-contact">
                    <thead class="bg-primary">
                        <tr>
                            <th class="text-white">ID</th>
                            <th class="text-white">Nombre</th>
                            <th class="text-white">Telefono</th>
                            <th class="text-white">Direccion</th>
                            <th class="text-white">Correo</th>
                            <th class="text-white">Accion</th>
                        </tr> 
                    </thead>
                    <tbody id="list-contact"></tbody>
                </table>
            </div>
        </div>
    </div>
<?php include 'partials/footer.php'; ?>