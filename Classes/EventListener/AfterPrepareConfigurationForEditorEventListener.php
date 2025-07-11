<?php

declare(strict_types=1);

namespace Passionweb\RteConfiguration\EventListener;

use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\RteCKEditor\Form\Element\Event\AfterPrepareConfigurationForEditorEvent;

#[AsEventListener(
    identifier: 'tx-rte-configuration/rte-event-listener',
    event: AfterPrepareConfigurationForEditorEvent::class,
)]
class AfterPrepareConfigurationForEditorEventListener
{
    public function __invoke(AfterPrepareConfigurationForEditorEvent $event): void
    {
        //SYSEXT:cms-rte-ckeditor/Classes/Form/Element/RichTextElement.php dispatched in prepareConfigurationForEditor function
        $configuration = $event->getConfiguration();
        // Add custom configuration for the RTE here
    }
}
