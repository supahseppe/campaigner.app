const defaultTheme = require('tailwindcss/defaultTheme');

const w_h_sizes = {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33%',
    '2/3': '66%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '60%',
    '1/6': '16.66%',
    '2/6': '33.33%',
    '3/6': '50.00%',
    '4/6': '66.67%',
    '5/6': '83.33%',
    '1/8': '12.50%',
    '2/8': '25.00%',
    '3/8': '37.50%',
    '4/8': '50.00%',
    '5/8': '62.50%',
    '6/8': '75.00%',
    '7/8': '87.50%',
    '1/10': '10%',
    '2/10': '20%',
    '3/10': '30%',
    '4/10': '40%',
    '5/10': '50%',
    '6/10': '60%',
    '7/10': '70%',
    '8/10': '80%',
    '9/10': '90%',
    '1/12': '8.33%',
    '2/12': '16.67%',
    '3/12': '25.00%',
    '4/12': '33.33%',
    '5/12': '41.67%',
    '6/12': '50.00%',
    '7/12': '58.33%',
    '8/12': '66.67%',
    '9/12': '75.00%',
    '10/12': '83.33%',
    '11/12': '91.67%',
    '1/24': '4.16%',
    '2/24': '8.32%',
    '3/24': '12.48%',
    '4/24': '16.64%',
    '5/24': '20.80%',
    '6/24': '24.96%',
    '7/24': '29.12%',
    '8/24': '33.28%',
    '9/24': '37.44%',
    '10/24': '41.60%',
    '11/24': '45.76%',
    '12/24': '49.92%',
    '13/24': '54.08%',
    '14/24': '58.24%',
    '15/24': '62.40%',
    '16/24': '66.56%',
    '17/24': '70.72%',
    '18/24': '74.88%',
    '19/24': '79.04%',
    '20/24': '83.20%',
    '21/24': '87.36%',
    '22/24': '91.52%',
    '23/24': '95.68%',
    'percent-10': '10%',
    'percent-20': '20%',
    'percent-25': '25%',
    'percent-30': '30%',
    'percent-40': '40%',
    'percent-50': '50%',
    'percent-60': '60%',
    'percent-70': '70%',
    'percent-75': '75%',
    'percent-80': '80%',
    'percent-90': '90%',
};

module.exports = {
    theme: {
        screens: {
            sm: '640px',
            small: '640px',
            md: '768px',
            medium: '768px',
            lg: '992px',
            large: '992px',
            xl: '1200px',
            xlarge: '1200px',
            xxl: '1440px',
            xxlarge: '1440px',
            widescreen: '1800px',
            max: '2400px',
            maximum: '2400px',
        },
        opacity: {
            '0': '0',
            '5': '0.05',
            '10': '0.10',
            '15': '0.15',
            '20': '0.20',
            '25': '0.25',
            '30': '0.30',
            '35': '0.35',
            '40': '0.40',
            '45': '0.45',
            '50': '0.50',
            '55': '0.55',
            '60': '0.60',
            '65': '0.65',
            '70': '0.70',
            '75': '0.75',
            '80': '0.80',
            '85': '0.85',
            '90': '0.90',
            '95': '0.95',
            '100': '1',
        },
        zIndex: {
            '0': 0,
            '10': 10,
            '20': 20,
            '30': 30,
            '40': 40,
            '50': 50,
            '60': 20,
            '70': 70,
            '80': 80,
            '90': 90,
            '100': 100,
            auto: 'auto',
            goku: 9001,
            interactive: 50,
            modal: 40,
            alert: 30,
            menu: 20,
            overlay: 15,
            ad: 10,
            priority: 5,
            base: 1,
            'background-overlay': 0,
            background: -1,
        },
        textShadow: {
            'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
            'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
        },
        textStyles: theme => ({
            heading: {
                output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
                fontWeight: theme('fontWeight.bold'),
                lineHeight: theme('lineHeight.tight'),
            },
            h1: {
                extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
                fontSize: theme('fontSize.5xl'),
                '@screen sm': {
                    fontSize: theme('fontSize.6xl'),
                },
            },
            h2: {
                extends: 'heading',
                fontSize: theme('fontSize.4xl'),
                '@screen sm': {
                    fontSize: theme('fontSize.5xl'),
                },
            },
            h3: {
                extends: 'heading',
                fontSize: theme('fontSize.4xl'),
            },
            h4: {
                extends: 'heading',
                fontSize: theme('fontSize.3xl'),
            },
            h5: {
                extends: 'heading',
                fontSize: theme('fontSize.2xl'),
            },
            h6: {
                extends: 'heading',
                fontSize: theme('fontSize.xl'),
            },
            link: {
                fontWeight: theme('fontWeight.bold'),
                color: theme('colors.blue.400'),
                '&:hover': {
                    color: theme('colors.blue.600'),
                    textDecoration: 'underline',
                },
            },
            richText: {
                fontWeight: theme('fontWeight.normal'),
                fontSize: theme('fontSize.base'),
                lineHeight: theme('lineHeight.relaxed'),
                '> * + *': {
                    marginTop: '1em',
                },
                'h1': {
                    extends: 'h1',
                },
                'h2': {
                    extends: 'h2',
                },
                'h3': {
                    extends: 'h3',
                },
                'h4': {
                    extends: 'h4',
                },
                'h5': {
                    extends: 'h5',
                },
                'h6': {
                    extends: 'h6',
                },
                'ul': {
                    listStyleType: 'disc',
                },
                'ol': {
                    listStyleType: 'decimal',
                },
                'a': {
                    extends: 'link',
                },
                'b, strong': {
                    fontWeight: theme('fontWeight.bold'),
                },
                'i, em': {
                    fontStyle: 'italic',
                },
            },
        }),
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: theme => ({
                outline: '0 0 0 2px ' + theme('colors.indigo.500'),
            }),
            fill: theme => theme('colors'),
            height: {
                ...w_h_sizes,
                '250': '250px',
                screen: '100vh',
                'screen-10': '10vh',
                'screen-20': '20vh',
                'screen-25': '25vh',
                'screen-30': '30vh',
                'screen-40': '40vh',
                'screen-50': '50vh',
                'screen-60': '60vh',
                'screen-70': '70vh',
                'screen-75': '75vh',
                'screen-80': '80vh',
                'screen-90': '90vh',
            },
            maxHeight: {
                ...w_h_sizes,
                screen: '100vh',
                'screen-10': '10vh',
                'screen-20': '20vh',
                'screen-25': '25vh',
                'screen-30': '30vh',
                'screen-40': '40vh',
                'screen-50': '50vh',
                'screen-60': '60vh',
                'screen-70': '70vh',
                'screen-75': '75vh',
                'screen-80': '80vh',
                'screen-90': '90vh',
            },
            maxWidth: {
                ...w_h_sizes,
                screen: '100vw',
                'screen-10': '10vw',
                'screen-20': '20vw',
                'screen-25': '25vw',
                'screen-30': '30vw',
                'screen-40': '40vw',
                'screen-50': '50vw',
                'screen-60': '60vw',
                'screen-70': '70vw',
                'screen-75': '75vw',
                'screen-80': '80vw',
                'screen-90': '90vw',
            },
            minHeight: {
                ...w_h_sizes,
                screen: '100vh',
                'screen-10': '10vh',
                'screen-20': '20vh',
                'screen-25': '25vh',
                'screen-30': '30vh',
                'screen-40': '40vh',
                'screen-50': '50vh',
                'screen-60': '60vh',
                'screen-70': '70vh',
                'screen-75': '75vh',
                'screen-80': '80vh',
                'screen-90': '90vh',
            },
            minWidth: {
                ...w_h_sizes,
                screen: '100vw',
                'screen-10': '10vw',
                'screen-20': '20vw',
                'screen-25': '25vw',
                'screen-30': '30vw',
                'screen-40': '40vw',
                'screen-50': '50vw',
                'screen-60': '60vw',
                'screen-70': '70vw',
                'screen-75': '75vw',
                'screen-80': '80vw',
                'screen-90': '90vw',
            },
            spacing: {
                '7': '1.75rem',
                '9': '2.25rem',
                'px-2': '2px',
                'px-3': '3px',
                'px-4': '4px',
                'px-5': '5px',
                'px-6': '6px',
                'px-7': '7px',
                'px-8': '8px',
                'px-9': '9px',
                'px-10': '10px',
                'percent-10': '10%',
                'percent-20': '20%',
                'percent-25': '25%',
                'percent-30': '30%',
                'percent-40': '40%',
                'percent-50': '50%',
                'percent-60': '60%',
                'percent-70': '70%',
                'percent-75': '75%',
                'percent-80': '80%',
                'percent-90': '90%',
                bsu: '1.5rem',
                'bsu-1/2': '.75rem',
                'bsu-1.5': '2.25rem',
                'bsu-2': '3rem',
                'bsu-2.5': '3.75rem',
                'bsu-3': '4.50rem',
                'bsu-3.5': '5.25rem',
                'bsu-4': '6rem',
                'bsu-4.5': '6.75rem',
                'bsu-5': '7.50rem',
            },
            width: {
                ...w_h_sizes,
                screen: '100vw',
                'screen-10': '10vw',
                'screen-20': '20vw',
                'screen-25': '25vw',
                'screen-30': '30vw',
                'screen-40': '40vw',
                'screen-50': '50vw',
                'screen-60': '60vw',
                'screen-70': '70vw',
                'screen-75': '75vw',
                'screen-80': '80vw',
                'screen-90': '90vw',
            },
        },
    },
    variants: {
        fill: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        zIndex: ['responsive', 'focus'],
        backgroundColor: ['responsive', 'hover', 'focus', 'first', 'last', 'even', 'odd'],
        borderWidth: ['responsive', 'first', 'last', 'even', 'odd'],
        margin: ['responsive', 'first', 'last', 'even', 'odd'],
    },
    plugins: [
        require('tailwindcss-alpha')({
            alpha: {
                '0': 0,
                '5': 0.05,
                '10': 0.1,
                '15': 0.15,
                '20': 0.2,
                '25': 0.25,
                '30': 0.3,
                '35': 0.35,
                '40': 0.4,
                '45': 0.45,
                '50': 0.5,
                '55': 0.55,
                '60': 0.6,
                '65': 0.65,
                '70': 0.7,
                '75': 0.75,
                '80': 0.8,
                '85': 0.85,
                '90': 0.9,
                '95': 0.95,
                '100': 0.1,
            },
        }),
        require('tailwindcss-typography')({
            componentPrefix: '',
        }),
        require('@tailwindcss/ui')({
            layout: 'sidebar',
        }),
    ],
};
