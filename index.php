<?php

include __DIR__.'/vendor/autoload.php';

$discord = new \Discord\Discord([
    'token' => '',
]);

$discord->on('ready', function ($discord) {
    // We are ready!

    // Listen for events here
    $discord->on('message', function ($message) {
        $terms = array(                                                                                                         )                                                                                                                                                                                                                                           });
});

$discord->run();
