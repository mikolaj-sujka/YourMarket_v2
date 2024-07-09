import type { AnimationTriggerMetadata } from "@angular/animations";
import { animate, style, transition, trigger } from "@angular/animations";

/**
 * Angular fade in animation
 * @type {AnimationTriggerMetadata}
 */
export const fadeInAnimation: AnimationTriggerMetadata = trigger("fadeIn", [
    transition(
        ":enter",
        [
            style({
                opacity: 0,
            }),
            animate(
                `{{duration}}ms {{delay}}ms ease-in`,
                style({
                    opacity: 1,
                }),
            ),
        ],
        { params: { duration: 200, delay: 0 } },
    ),
]);
