import type { AnimationTriggerMetadata } from "@angular/animations";
import { animate, style, transition, trigger } from "@angular/animations";

/**
 * Angular fade out animation
 * @type {AnimationTriggerMetadata}
 */
export const fadeOutAnimation: AnimationTriggerMetadata = trigger("fadeOut", [
    transition(
        ":leave",
        [
            style({
                opacity: 1,
            }),
            animate(
                `{{duration}}ms {{delay}}ms ease-out`,
                style({
                    opacity: 0,
                }),
            ),
        ],
        { params: { duration: 200, delay: 0 } },
    ),
]);
