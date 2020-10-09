<?php
include "conn.php";

if (isset($_POST['username'])) {
    $user = $_POST['username'];
    $result = $conn->query("select * from registry where username='$user'");
    if ($result->fetch_assoc()) { 
        echo true; 
    } else {
        echo false; 
}

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = sha1($_POST['password']);
    $repass = sha1($_POST['repass']);
    $email = $_POST['email'];
    $conn->query("insert registry values('$username','$password','$repass','$email');
    header('location:http://localhost/wangzheng/src/login.html');
}