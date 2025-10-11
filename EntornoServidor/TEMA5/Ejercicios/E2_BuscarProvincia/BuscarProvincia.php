<?php
if (isset($_POST['buscar'])) {
    if (isset($_POST['provincia'])) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "geografia";
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT n_provincia, nombre FROM provincias WHERE UPPER(nombre) = UPPER(:nombre)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nombre', $_POST['provincia'], PDO::PARAM_STR);
            $stmt->execute();
            if ($stmt) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                if ($row) {
                    //paginacion
                    $pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
                    $porPagina = 25;
                    $offset = ($pagina - 1) * $porPagina;

                    $sql2 = "SELECT * 
                    FROM localidades 
                    WHERE n_provincia = :id_provincia 
                    ORDER BY nombre 
                    LIMIT :limite OFFSET :offset";
                    $stmt2 = $conn->prepare($sql2);
                    $stmt2->bindParam(':id_provincia', $row['n_provincia'], PDO::PARAM_INT);
                    $stmt2->bindParam(':limite', $porPagina, PDO::PARAM_INT);
                    $stmt2->bindParam(':offset', $offset, PDO::PARAM_INT);
                    $stmt2->execute();
                    if ($stmt2) {
                        echo '<ol>';
                        while ($row2 = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                            echo '<li>' . $row2['nombre'] . '</li>';
                            echo '<ul>';
                            echo '<li><strong>id localidad:</strong>' . $row2['id_localidad'] . '</li>';
                            echo '<li><strong>Población:</strong>' . $row2['poblacion'] . '</li>';
                            echo '<li><strong>Num provincia:</strong>' . $row2['n_provincia'] . '</li>';
                            echo '</ul>';
                        }
                        echo '</ol>';

                        //navegacion entre paginas
                        echo '<div class="paginacion">';
                        if ($pagina > 1) {
                            echo '<a href="BuscarProvincia.php?pagina=' . ($pagina - 1) . '&provincia=' . urlencode($_POST['provincia']) . '">Anterior</a>';
                        }
                        echo '<a href="BuscarProvincia.php?pagina=' . ($pagina + 1) . '&provincia=' . urlencode($_POST['provincia']) . '">Siguiente</a>';
                        echo '</div>';
                    } else {
                        echo "Error en la consulta.";
                    }
                } else {
                    echo "<p>La provincia no existe</p>";
                }
            } else {
                echo "<p>Error en la consulta</p>.";
            }
            $conn = null;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
} else {
    include('BuscarProvincia.html');
}
