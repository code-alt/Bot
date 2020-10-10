<?php

include __DIR__.'/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$discord = new \Discord\Discord([
    'token' => $_ENV["TOKEN"],
]);

$discord->on('ready', function ($discord) {
    // We are ready!

    // Listen for events here
    $discord->on('message', function ($message) {
        $list = array(
            "join my server"
        );
        if (strpos($message["content"], $list) !== FALSE) {
            echo "LOG: User is flagged.";
        }
    });
});

$discord->run();

?>