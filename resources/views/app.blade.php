<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}" />

        <script src="{{ mix('js/app.js') }}" defer></script>

        @routes
    </head>
    <body>
        @inertia
    </body>
</html>
