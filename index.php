<?php
$locX = isset($_GET['locX']) ? $_GET['locX'] : '';
$locY = isset($_GET['locY']) ? $_GET['locY'] : '';
    echo '<script>';
    echo 'alert("Merhaba! Bu bir uyarı mesajıdır.");';
    echo '</script>';

if (!empty($locX) && !empty($locY)) {
    $data = "locX: " . $locX . ", locY: " . $locY . "\n";
    file_put_contents('locs.txt', $data, FILE_APPEND | LOCK_EX);
} else {
}
?>