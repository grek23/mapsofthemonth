<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Concatenate the code parts
  $code = $_POST["codePart1"] . $_POST["codePart2"] . $_POST["codePart3"] . $_POST["codePart4"];

  // Check if the code is exactly 20 characters long
  if (strlen($code) === 20) {
    // Redirect to quiz.html
    header("Location: index01.html");
    exit();
  }
}
// If code is not valid, redirect back to the form
header("Location: index.html");
exit();
?>
