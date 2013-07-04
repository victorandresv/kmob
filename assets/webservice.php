<?php
session_start();

switch ($_REQUEST['a']) {
    case 'signup':
        $email = $_REQUEST['e'];
        $password = $_REQUEST['p'];
        if (strtolower($email) == 'victorandresv@gmail.com' && $password == 'qwerty') {
            $_SESSION['logedin'] = true;
            echo json_encode(array(
                'error' => 0,
                'error_message' => '',
                'auth' => 1
            ));
        } else {
            session_destroy();
            echo json_encode(array(
                'error' => 1,
                'error_message' => 'Email o Contraseña incorrecta',
                'auth' => 0
            ));
        }
        break;
}
?>
