**Bootstrap in JavaScript**

* Bootstrap is a popular front-end framework that helps developers create responsive and visually appealing web pages with minimal effort.
* It provides a collection of CSS and JavaScript components that you can use to quickly create a responsive and stylish web page.

**Example to work with Bootstrap.**

**1. Include Bootstrap in Your HTML**
First, you need to include Bootstrap's CSS and JavaScript files in your HTML file. You can do this by using the Bootstrap CDN (Content Delivery Network).

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Example</title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
</body>
</html>
```

**2: Create a Responsive Navigation Bar**
Now, let's add a responsive navigation bar using Bootstrap's predefined classes.

```
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</body>
```

**3: Create a Responsive Grid**
Bootstrap's grid system allows you to create responsive layouts with ease. Let's create a simple grid with three columns.

```
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-4">Column 1</div>
      <div class="col-md-4">Column 2</div>
      <div class="col-md-4">Column 3</div>
    </div>
  </div>
</body>
```

**4: Add a Button with Different Styles**
Bootstrap provides various button styles that you can use by applying different classes.

```
<body>
  <div class="container">
    <button type="button" class="btn btn-primary">Primary Button</button>
    <button type="button" class="btn btn-secondary">Secondary Button</button>
    <button type="button" class="btn btn-success">Success Button</button>
    <button type="button" class="btn btn-danger">Danger Button</button>
    <button type="button" class="btn btn-warning">Warning Button</button>
    <button type="button" class="btn btn-info">Info Button</button>
    <button type="button" class="btn btn-light">Light Button</button>
    <button type="button" class="btn btn-dark">Dark Button</button>
  </div>
</body>
```
