<?php

declare(strict_types=1);

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

namespace TYPO3\CMS\RteCKEditor\Form\Element\Event;

/**
 * This event is fired after processing external plugin configuration.
 */
final class AfterGetExternalPluginsEvent
{
    public function __invoke(AfterGetExternalPluginsEvent $externalPlugins): void
    {
        //SYSEXT:cms-rte-ckeditor/Classes/Form/Element/RichTextElement.php dispatched in getExtraPlugins function
        $configuration = $externalPlugins->getConfiguration();
        // Add custom configuration for the RTE here
    }
}
