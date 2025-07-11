<?php

declare(strict_types=1);

namespace Passionweb\RteConfiguration\EventListener;

use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\RteCKEditor\Form\Element\Event\AfterGetExternalPluginsEvent;

#[AsEventListener(
    identifier: 'tx-rte-configuration/after-get-external-plugins-event-listener',
    event: AfterGetExternalPluginsEvent::class
)]
class AfterGetExternalPluginsEventListener
{
    public function __invoke(AfterGetExternalPluginsEvent $externalPlugins): void
    {
        $configuration = $externalPlugins->getConfiguration();
        // Add your plugin configuration here later
    }
}
