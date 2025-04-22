// import { Box, Button, ButtonProps, Text } from '@chakra-ui/react';
// import { ReactNode } from 'react';

// interface ActionButtonProps extends ButtonProps {
//     label: string;
//     icon?: ReactNode;
//     variantStyle?: 'primary' | 'outlineDark' | 'outlineLight';
// }

// export const ActionButton = ({
//     label,
//     icon,
//     variantStyle = 'primary',
//     ...props
// }: ActionButtonProps) => {
//     const styles = {
//         primary: {
//             border: '1px solid rgba(0, 0, 0, 0.08)',
//             borderRadius: '6px',
//             backgroundColor: 'black',
//             color: 'white',
//         },
//         outlineDark: {
//             border: '1px solid rgba(0, 0, 0, 0.48)',
//             borderRadius: '6px',
//             background: 'transparent',
//             color: 'rgba(0, 0, 0, 0.8)',
//         },
//         outlineLight: {
//             border: '1px solid rgba(255, 255, 255, 0.48)',
//             borderRadius: '6px',
//             background: 'transparent',
//             color: 'white',
//         },
//     };

//     const currentStyle = styles[variantStyle];

//     return (
//         <Button
//             sx={{
//                 display: 'flex',
//                 gap: '8px',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: '0px 12px',
//                 width: '122px',
//                 height: '32px',
//                 fontFamily: '"Inter", sans-serif',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 lineHeight: '143%',
//                 ...currentStyle,
//             }}
//             {...props}
//         >
//             {icon && (
//                 <Box display='flex' alignItems='center' justifyContent='center'>
//                     {icon}
//                 </Box>
//             )}
//             <Text textStyle='buttonTitle'>{label}</Text>
//         </Button>
//     );
// };
