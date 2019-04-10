<?php

use Flarum\Database\Migration;

return Migration::addColumns('users', [
    'steamid' => ['string', 'length' => 191, 'nullable' => true]
]);