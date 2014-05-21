<!DOCTYPE html>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="initial-scale=1.0, user-scalable=yes, width=device-width, minimal-ui">

		<!-- 

		<link rel="shortcut icon" type="image/x-icon" href="./static/img/favicon.ico">
	    <meta name="viewport" content="user-scalable=no, minimum-scale=1, maximum-scale=1, width=device-width">

		
		<meta name="description" content="Template description."> 
	    <meta name="author" content="Wolfram Wiedner, wiedner.co.uk">
	    
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />

		<link rel="apple-touch-startup-image" href="startup-320x460.png">
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-57x57-precomposed.png" />
		
		<meta property="og:title" content=""/>
		<meta property="og:url" content=""/>
		<meta property="og:image" content=""/>
		<meta property="og:site_name" content=""/>
		<meta property="og:description" content=""/>
		<meta property="og:locale" content="en_gb"/>

		-->

		<link rel="stylesheet" href="./static/css/normalize.css" type="text/css" media="all">
		<link rel="stylesheet" href="./static/css/template.less?<?php echo time(); ?>" type="text/less" media="all">
		<script type="text/javascript" src="./static/js/less-1.3.3.min.js"></script>		
		
		<!--[if lt IE 9]>
		<script type="text/javascript" src="./static/js/jquery-1.11.0.min.js"></script>
		<![endif]-->
		<!--[if gte IE 9]><!-->
		<script type="text/javascript" src="./static/js/jquery-2.1.1.min.js"></script>
		<!--<![endif]-->

		<script type="text/javascript" src="./static/js/template.js?<?php echo time(); ?>"></script>
		
		<title>Template Title</title>
		
	</head>

	<body>


		<header><div class="inner">
			<h1 class="col eight first"><a href="#">Central Saint Martins BA Graphic design degree show 18 – 22 June 2014</a></h1>
			<nav class="col four"><ul>
				<li><a href="#">Gallery</a></li>
				<li><a href="#">Students</a></li>
				<li><a href="#">Info</a></li>
			</ul></nav>
		</div></header>

		<main class="main-thumbs">

		<?php for($i=0;$i<14;$i++): ?>
			<a href="#" class="thumb<?php if( ($i==0) or ($i%3==0) ) echo " first" ?>">
				<div class="thumb-image">
					<img src="./static/img/template/test_01.jpg" alt="placeholder">
				</div>
				<div class="thumb-title">
					<h3>Student name</h3>
					<h4>Pathway</h4>
				</div>
			</a>
		<?php endfor; ?>

		</main>	
	
	
	</body>
</html>