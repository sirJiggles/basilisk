<?php

/*
 * Header file that is included on all pages 
 * 
 * @author Gareth Fuller
 * 
 */

$currentPage = str_replace('.php', '', end(explode('/', $_SERVER['SCRIPT_FILENAME'])));

?>

<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>

    	<title>Basilisk</title>
            
        <!--[if lt IE 9]>
            <script src="assets/js/vendor/htmlshiv.min.js"></script>
        <![endif]-->

        <!-- META -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    	<meta name="description" content="" />
    	<meta name="author" content="" />
        <meta name="keywords" content="" />
	
        <!-- Humans file -->
        <link rel="author" type="text/plain" href="/humans.txt" />

        <!-- Favicons -->
        <link rel="shortcut icon" href="assets/favicons/16.ico" />
    	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="assets/favicons/57.png" />
    	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/favicons/72.png" />
    	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/favicons/114.png" />
    	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/favicons/144.png" />
        
    	<!-- CSS -->
        <link rel="stylesheet" href="assets/css/screen.css" media="screen" type="text/css" />
    	<link rel="stylesheet" href="assets/css/print.css" media="print" type="text/css"/>
        
        <!--[if lte IE 7]>
            <link rel="stylesheet" href="assets/css/fixed-width.css" media="screen" type="text/css"/>
        <![endif]-->

        <!--[if lt IE 9]>
            <link rel="stylesheet" href="assets/css/all-media.css" media="screen" type="text/css"/>
        <![endif]-->
              
        
        
    </head>
    <body>

        <!-- used for sticky footer -->
        <div id="site-wrapper">

            <header id="header" class="row" role="banner">
                
                <div class="col span-2 halves">
                    
                    <h1>SITE TITLE</h1>
                    
                   <nav role="navigation" class="slide-main-nav">
                        <ul>
                            <li><a href="#" title="click here to go to nav item one">Nav item one</a></li>
                            <li><a href="#" title="click here to go to nav item two">Nav item two</a></li>
                            <li><a href="#" title="click here to go to nav item three">Nav item three</a></li>
                            <li><a href="#" title="click here to go to nav item four">Nav item four</a></li>
                            <li><a href="#" title="click here to go to nav item five">Nav item five</a></li>
                        </ul>
                    </nav>

                </div>

                
            </header>
            
            <div class="row main" role="main">


                