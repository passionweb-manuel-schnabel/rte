<?php

declare(strict_types=1);

namespace Passionweb\RteConfiguration\EventListener;

use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\RteCKEditor\Form\Element\Event\BeforePrepareConfigurationForEditorEvent;

#[AsEventListener(
    identifier: 'codebreak/before-prepare-configuration-for-editor-event-listener',
    event: BeforePrepareConfigurationForEditorEvent::class,
)]
class BeforePrepareConfigurationForEditorEventListener
{
    public function __invoke(BeforePrepareConfigurationForEditorEvent $event): void
    {
        //SYSEXT:cms-rte-ckeditor/Classes/Form/Element/RichTextElement.php dispatched in prepareConfigurationForEditor function
        $configuration = $event->getConfiguration();
        // Add custom configuration for the RTE here
    }
}
