<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Tableau - Inspiration Browser</title>
  <meta name="description" content="A web app to discover related images">
  <meta name="author" content="Rohit Nair">

  {{ HTML::style('css/style.css') }}
</head>

<body>
    <div class="page">
        <div class="set-container">
            <ul class="image-set">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
            </ul>
        </div>
    </div>
  {{ HTML::script('//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js') }}
  {{ HTML::script('//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js') }}
  {{ HTML::script('js/script.js') }}
</body>
</html>