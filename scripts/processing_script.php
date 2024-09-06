<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Form Processing Script</title>
		<link 	rel="stylesheet" 
				href="../css/styles.css" />
	</head>
	<body>
	<div id="wrapper">
        <header>
			<h1>Form Processing Script</h1>
        </header>
        <main>            

		
		<?php
		/*
		$username			- a variable named '$username'
							  a container to hold data
		=					- assign a value from right to left 
		trim()				- remove extra space bar spaces from text input
		$_POST["username"]	- retrieve the form field with name="username"
		$_GET["username"]	  user $_POST or $_GET based on the form method=""	
		*/
		
		
		if( isset($_GET["username"]) ){
			$username = trim($_GET["username"]);
			echo "<h3>Hello, $username! Thank you for filling out the form!</h3>";	
			echo "<p>The form was using <code>method='get'</code></p>";
			echo "<p>All form data has been appended to the URL of the address of this page</p>";
		}



		if( isset($_POST["username"]) ){
			$username = trim($_POST["username"]);
			echo "<h3>Hello, $username! Thank you for filling out the form!</h3>";	
			echo "<p>The form was using <code>method='post'</code></p>";
			echo "<p>All form data has been packaged into the HTTP header, the meta information that travels along with all HTTP requests/responses.</p>";
		}		
		?>
		
		<p>Had fun? Why not <a href="../index.html">try the form again</a></p>
        </main>
        <footer>
            <p>&copy; COMP1850 20**</p>
        </footer>
    </div>		
	</body>
</html>




