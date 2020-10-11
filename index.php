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
        $command = "!lookup";
        $discord = json_decode($message, true);
        $content = $discord["content"];
        if(strpos($command, $content) !== false) {
            echo "Ready to conduct lookup.";
        }
    });
});

$discord->run();

?>