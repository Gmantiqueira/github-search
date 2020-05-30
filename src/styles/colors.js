export default {
    $grayDark: (alpha = 100, lightness) =>
        `hsla(210, 12%, ${lightness || 16}%, ${alpha}%)`,
    $gray: (alpha = 100, lightness) =>
        `hsla(210, 29%, ${lightness || 97}%, ${alpha}%)`,
    $grayLight: (alpha = 100, lightness) =>
        `hsla(210, 25%, ${lightness || 98}%, ${alpha}%)`,
    $blue: (alpha = 100, lightness) =>
        `hsla(212, 97%, ${lightness || 43}%, ${alpha}%)`,
    $blueLight: (alpha = 100, lightness) =>
        `hsla(210, 100%, ${lightness || 97}%, ${alpha}%)`,
    $yellow: (alpha = 100, lightness) =>
        `hsla(46, 100%, ${lightness || 62}%, ${alpha}%)`,
    $yellowLight: (alpha = 100, lightness) =>
        `hsla(52, 100%, ${lightness || 85}%, ${alpha}%)`,
    $red: (alpha = 100, lightness) =>
        `hsla(354, 66%, ${lightness || 54}%, ${alpha}%)`,
    $redLight: (alpha = 100, lightness) =>
        `hsla(353, 100%, ${lightness || 93}%, ${alpha}%)`,
    $green: (alpha = 100, lightness) =>
        `hsla(134, 61%, ${lightness || 41}%, ${alpha}%)`,
    $greenLight: (alpha = 100, lightness) =>
        `hsla(134, 100%, ${lightness || 93}%, ${alpha}%)`,
    // $purple: (alpha = 100, lightness) =>
    //     `hsla(261, 51%, ${lightness || 51}%, ${alpha}%)`,
    // $purpleLight: (alpha = 100, lightness) =>
    //     `hsla(260, 100%, ${lightness || 97}%, ${alpha}%)`,
};
