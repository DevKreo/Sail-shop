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
                mono: ['JetBrains Mono'],
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
                  450: '#b8d54b',
                  50:  '#73E691',
                  100: '#91CD5A'
                },
                red:{
                    450: '#ff8080',
                    550: '#ffbce3',
                    50: '#FF6E6E'
                },
                yellow:{
                    50:  '#FFDC73'
                },
                blue:{
                    50: '#87a0ff'
                },
                pink:{
                    50: '#FF82DC'
                },
                purple:{
                    50:  '#CD96FF'
                },
                aqua:{
                    50:  '#6ED7D7'
                }
            },
            letterSpacing: {
                wider: '.1em',
                widest: '.2em',
            }

        },
    },

    variants: {
        extend: {
            opacity: ['disabled']
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
