<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $from = $_POST['from'];
    $destination = $_POST['destination'];
    $preference = $_POST['preference'];
    $season = $_POST['season'];
    $Hero = $_POST['Hero'];
    $Weather = $_POST['Weather'];
    $Mountain = $_POST['Mountain'];
    $TomC = $_POST['TomC'];
    $Pres = $_POST['Pres'];
    $Pilot = $_POST['Pilot'];
    $Military = $_POST['Military'];
    $Animal = $_POST['Animal'];

    // Compose the data message
    $data_message = "Name: $name\n";
    $data_message .= "From: $from\n";
    $data_message .= "Destination: $destination\n";
    $data_message .= "Preference: $preference\n";
    $data_message .= "Season: $season\n";
    $data_message .= "Hero: $Hero\n";
    $data_message .= "Weather: $Weather\n";
    $data_message .= "Mountain: $Mountain\n";
    $data_message .= "TomC: $TomC\n";
    $data_message .= "Pres: $Pres\n";
    $data_message .= "Pilot: $Pilot\n";
    $data_message .= "Military: $Military\n";
    $data_message .= "Animal: $Animal\n";
    $data_message .= "----------------------\n";

    // Write the data to a text file
    $file = 'form_data.txt';
    $current = file_get_contents($file);
    $current .= $data_message;
    file_put_contents($file, $current);

    // Redirect to a thank you page
    header("Location: progress.html");
    exit();
} else {
    // If the form is not submitted, redirect back to the form page
    header("Location: index.html");
    exit();
}
?>
