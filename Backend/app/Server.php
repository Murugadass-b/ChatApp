<?php

require_once __DIR__ . '/vendor/autoload.php'; // Composer autoload (Ratchet etc.)

use App\WebSocket\Chat; // Create this new Chat.php in WebSocket folder
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

// Create WebSocket server
$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Chat()
        )
    ),
    8080 // WebSocket port
);

$server->run();
