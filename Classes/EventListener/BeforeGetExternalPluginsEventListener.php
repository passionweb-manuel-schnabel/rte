<?php

declare(strict_types=1);

namespace Passionweb\RteConfiguration\EventListener;

use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\RteCKEditor\Form\Element\Event\BeforeGetExternalPluginsEvent;

#[AsEventListener(
    identifier: 'tx-rte-configuration/before-get-external-plugins-event-listener',
    event: BeforeGetExternalPluginsEvent::class,
)]
class BeforeGetExternalPluginsEventListener
{
    public function __invoke(BeforeGetExternalPluginsEvent $event): void
    {
        //SYSEXT:cms-rte-ckeditor/Classes/Form/Element/RichTextElement.php dispatched in getExtraPlugins function
        $configuration = $event->getConfiguration();
        // Add custom configuration for the RTE here
    }
}
