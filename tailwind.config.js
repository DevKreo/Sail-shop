const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: theme => ({
                'logo-texture': "url('../img/logo.png')",
                'log-texture': "url('../img/log_texture.png')"
            }),
            spacing: {
                '24': '6.25rem'
            },
            colors: {
                green: {
                  450: '#b8d54b'
                },
                red:{
                    450: '#ff8080',
                    550: '#ffbce3'
                }
            }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
