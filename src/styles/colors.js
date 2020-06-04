export const $grayDark = (alpha = 100, lightness) =>
    `hsla(210, 12%, ${lightness || 16}%, ${alpha}%)`;

export const $gray = (alpha = 100, lightness) =>
    `hsla(210, 29%, ${lightness || 97}%, ${alpha}%)`;

export const $grayLight = (alpha = 100, lightness) =>
    `hsla(210, 25%, ${lightness || 98}%, ${alpha}%)`;

export const $blue = (alpha = 100, lightness) =>
    `hsla(212, 97%, ${lightness || 43}%, ${alpha}%)`;

export const $blueLight = (alpha = 100, lightness) =>
    `hsla(210, 100%, ${lightness || 97}%, ${alpha}%)`;

export const $yellow = (alpha = 100, lightness) =>
    `hsla(46, 100%, ${lightness || 62}%, ${alpha}%)`;

export const $red = (alpha = 100, lightness) =>
    `hsla(354, 66%, ${lightness || 54}%, ${alpha}%)`;

export const $redLight = (alpha = 100, lightness) =>
    `hsla(353, 100%, ${lightness || 93}%, ${alpha}%)`;
