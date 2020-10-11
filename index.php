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
        $discord1 = json_encode($message, true);
        $discord = json_decode($message, true);
        $content = $discord["content"];
        if(strpos($command, $content) !== false) {
            $id = trim($content, "!lookup ");
            echo "Ready to conduct lookup.";
            $api = json_decode(file_get_contents("https://discord.riverside.rocks/check.json.php?id=${id}"));
            if($api["reports"] !== ""){
                echo $api["reports"];
            }else{
                echo "Bad Request";
            }
        }
    });
});

$discord->run();

?>