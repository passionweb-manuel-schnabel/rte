<?php

return [
    'dependencies' => ['core', 'backend'],
    'tags' => [
        'backend.form',
        'backend.contextmenu',
    ],
    'imports' => [
        '@passionweb/rte-configuration/' => 'EXT:rte_configuration/Resources/Public/JavaScript/',
    ],
];
