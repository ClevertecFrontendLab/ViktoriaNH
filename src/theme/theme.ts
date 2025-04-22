import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    breakpoints: {
        base: '0px', // от 0 до 767px
        sm: '360px',
        md: '768px', // от 768px до 1439px
        lg: '1440px', // от 1440px до 1919px
        xl: '1920px', // для экранов больше 1920px
    },
    colors: {
        blackAlpha: {
            100: 'rgba(0, 0, 0, 0.06)',
            200: 'rgba(0, 0, 0, 0.08)',
            300: 'rgba(0, 0, 0, 0.16)',
            400: 'rgba(0, 0, 0, 0.24)',
            600: 'rgba(0, 0, 0, 0.48)',
            700: 'rgba(0, 0, 0, 0.64)',
            800: 'rgba(0, 0, 0, 0.80)',
            900: 'rgba(0, 0, 0, 0.92)',
        },
        lime: {
            50: '#FFFFD3',
            100: '#EAFFC7',
            150: '#D7FF94',
            300: '#C4FF61',
            400: '#B1FF2E',
            600: '#2DB100',
            800: '#134B00',
        },
        whiteAlfa: {
            100: 'rgba(255, 255, 255, 0.06)',
        },
    },

    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },

    fontSizes: {
        xxxs: '12px',
        xxs: '14px',
        xs: '16px',
        sm: '18px',
        md: '20px',
        lg: '36px',
        xl: '48px',
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    textStyles: {
        h1: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '48px',
            fontWeight: '700',
            lineHeight: '100%',
        },
        h2: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '48px',
            fontWeight: '500',
            lineHeight: '100%',
        },
        h3: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '36px',
            fontWeight: '400',
            lineHeight: '111%',
        },
        h4: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '140%',
        },
        h5: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '156%',
        },
        h6: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '150%',
        },
        username: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '143%',
            color: 'blackAlpha.700',
        },
        mainText: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '143%',
        },
        mainTextSmall: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '125%',
        },
        buttonTitle: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '143%',
        },
        menuItems: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '150%',
        },
        numbers: {
            fontFamily: '"Inter", sans-serif',
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '133%',
            color: 'lime.600',
        },
        SectionTitle: {
            as: 'h2',
            fontSize: '2xl',
            fontWeight: 'bold',
            lineHeight: '1.4',
            marginBottom: '24px',
        },
        nameStyle: {
            fontFamily: '"Inter", sans-serif',
            fontSize: { base: '16px', lg: '18px', xl: '18px' },
            fontWeight: '500',
            lineHeight: { base: '150%', lg: '156%', xl: '156%' },
        }, // для имени в Card Avatar
        mailStyle: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: '400',
            fontSize: { base: '12px', lg: '14px', xl: '14px' },
            lineHeight: { base: '133%', lg: '143%', xl: '143' },
            color: 'rgba(0, 0, 0, 0.64)',
        },
    },

    components: {
        Text: {
            variants: {
                CardText: {
                    textStyle: 'mainText',
                    noOfLines: 3,
                    maxW: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'normal',
                },
            },
        },
        CardFooter: {
            baseStyle: {
                p: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mx: 6,
                mb: 5,
            },
        },
    },

    styles: {
        global: {
            ':root': {
                '--chakra-transition': 'all 0.2s ease-in-out',
            },
        },
    }, //   используем таким образом transition="var(--chakra-transition)"
});
