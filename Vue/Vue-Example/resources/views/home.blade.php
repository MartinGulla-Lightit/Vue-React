<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue App</title>
</head>

<body>
    {{-- id="app" is where our components are going to be rendered,  --}}
    {{-- you can't render anything outside this div --}}
    <div id="app">
        {{-- todo-page is registered in app.js so it can be used in blade --}}
        {{-- You can also register vue components to use them inside other --}}
        {{-- vue components, but it's easier to just import the component --}}
        <todo-page></todo-page>
    </div>
    {{-- This todo-page won't render because it's outside of the div with  --}}
    {{-- id="app", but it won't throw any errors because it's registered --}}
    <todo-page></todo-page>
</body>

</html>
{{-- We need to import the app.js so the registered component works --}}
<script src="{{ asset('js/app.js') }}"></script>
