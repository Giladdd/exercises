<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Second form</title>
</head>

<body>
    <section>
        <?php
                $username = $_GET["reg_un"];
                $password = $_GET["reg_pass"];
                $fav = $_GET["reg_fav"];
                $newFav = $_GET["new_reg_fav"];

                if ($username == "Gilad" && $password == "111" && $fav == "Pizza") {
                    echo "<h2> Good morning user " . $username . "</h2> <br> <h3> New favorite food " . $newFav . "</h3>"  ;
                } else {
                    echo "<h2>Who are you ? You can't get in</h2>";
                } 
            ?>
        </section>
    </body>
</html>