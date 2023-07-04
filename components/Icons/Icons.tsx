import { IconWrapper } from './IconWrapper'

export const ZaglushLogoIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M10 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M20 9L20 4H15'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M13 11L20 4'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const ShowIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M17 16L13 12L17 8'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M11 16L7 12L11 8'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const HomeIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M19.6585 9.70104L12.6585 3.57604C12.2815 3.24614 11.7185 3.24614 11.3415 3.57604L4.3415 9.70104C4.12448 9.89092 4 10.1653 4 10.4536V18.9998C4 19.5521 4.44772 19.9998 5 19.9998H9C9.55228 19.9998 10 19.5521 10 18.9998V14.9998C10 14.4476 10.4477 13.9998 11 13.9998H13C13.5523 13.9998 14 14.4476 14 14.9998V18.9998C14 19.5521 14.4477 19.9998 15 19.9998H19C19.5523 19.9998 20 19.5521 20 18.9998V10.4536C20 10.1653 19.8755 9.89093 19.6585 9.70104Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const VPNIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill={fill}>
            <path fill='none' d='M0 0h24v24H0V0z'></path>
            <path d='M18.92 12c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93zM22 4v-.5C22 2.12 20.88 1 19.5 1S17 2.12 17 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V4z'></path>
        </IconWrapper>
    )
}

export const NetIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M3 12H21'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3C10.3431 3 9 7.02944 9 12C9 16.9706 10.3431 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const DangerIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M19 3H5C4.44772 3 4 3.44771 4 4V10.1649C4 17.5464 10.2742 20.3516 11.7098 20.8968C11.9 20.9691 12.1 20.9691 12.2902 20.8968C13.7258 20.3516 20 17.5464 20 10.1649V4C20 3.44772 19.5523 3 19 3Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M11.9502 15H12.0502V15.1H11.9502V15Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 8V12'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const EventIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M11.9502 15.45H12.0502V15.55H11.9502V15.45Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 8.44995V12.45'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const DevicesIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M6 7.5V5C6 4.44772 6.44772 4 7 4H20C20.5523 4 21 4.44772 21 5V16C21 16.5523 20.5523 17 20 17H10.5'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 8H4C3.44772 8 3 8.44772 3 9V19C3 19.5523 3.44772 20 4 20H9C9.55228 20 10 19.5523 10 19V9C10 8.44772 9.55228 8 9 8Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const UsersIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M17 16.2275C19.3304 16.7767 21 18.2583 21 19.9999'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M3 20C3 17.7909 5.68629 16 9 16C12.3137 16 15 17.7909 15 20'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const SettingsIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M19.1671 7.94004L19.1013 7.82619C18.9199 7.51217 18.8273 7.15475 18.8334 6.79216L18.8634 5.01333C18.8695 4.64981 18.6778 4.3116 18.3628 4.13007L15.6261 2.55307C15.3119 2.372 14.9243 2.37524 14.6131 2.56155L13.094 3.47113C12.7836 3.65704 12.4285 3.75522 12.0666 3.75522H11.9349C11.5722 3.75522 11.2164 3.65661 10.9055 3.46994L9.3794 2.55377C9.06716 2.36632 8.6777 2.36344 8.36272 2.54625L5.63473 4.12954C5.32124 4.31149 5.13075 4.64883 5.13685 5.01125L5.16681 6.79216C5.17291 7.15475 5.08031 7.51217 4.89892 7.82619L4.83403 7.93852C4.65254 8.25271 4.389 8.5116 4.07164 8.68748L2.51675 9.54914C2.19805 9.72576 2.00064 10.0617 2.00147 10.4261L2.00863 13.5779C2.00945 13.9401 2.20601 14.2735 2.52248 14.4495L4.0699 15.3104C4.38835 15.4875 4.65235 15.7483 4.83337 16.0646L4.9029 16.186C5.08174 16.4985 5.17293 16.8534 5.16685 17.2133L5.13692 18.9865C5.13078 19.35 5.32245 19.6882 5.63749 19.8698L8.37412 21.4468C8.68835 21.6278 9.07598 21.6246 9.38713 21.4383L10.9062 20.5287C11.2167 20.3428 11.5718 20.2446 11.9337 20.2446H12.0654C12.428 20.2446 12.7838 20.3432 13.0948 20.5299L14.6208 21.4461C14.9331 21.6335 15.3226 21.6364 15.6375 21.4536L18.3655 19.8703C18.679 19.6884 18.8695 19.351 18.8634 18.9886L18.8334 17.2077C18.8273 16.8451 18.9199 16.4877 19.1013 16.1737L19.1662 16.0613C19.3477 15.7471 19.6112 15.4882 19.9286 15.3124L21.4835 14.4507C21.8022 14.2741 21.9996 13.9381 21.9988 13.5738L21.9916 10.4219C21.9908 10.0598 21.7942 9.72638 21.4778 9.55032L19.9266 8.68741C19.6105 8.51156 19.348 8.25327 19.1671 7.94004Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const SystemIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M3 6L21 6'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M4 20L20 20C20.5523 20 21 19.5523 21 19L21 5C21 4.44771 20.5523 4 20 4L4 4C3.44772 4 3 4.44772 3 5L3 19C3 19.5523 3.44772 20 4 20Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const LogoutIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 15L15 12M15 12L12 9M15 12L4 12'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 7V5C9 4.44772 9.44772 4 10 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H10C9.44771 20 9 19.5523 9 19V17'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const ChangeModeIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M4 20H20'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M4 19.9998H8L19.2929 8.70696C19.6834 8.31643 19.6834 7.68327 19.2929 7.29274L16.7071 4.70696C16.3166 4.31643 15.6834 4.31643 15.2929 4.70696L4 15.9998V19.9998Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 8L16 12'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const SaveModeIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M4 12.0001L8.94975 16.9499L19.5563 6.34326'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const CloseModeIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M18 18L6 6'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M18 6L6 18'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const DarkModeIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M20.6144 14.6145C19.787 14.8653 18.9093 15.0001 18 15.0001C13.0294 15.0001 9 10.9707 9 6.00014C9 5.09088 9.13484 4.21311 9.38561 3.38574C5.69007 4.50583 3 7.93883 3 12.0001C3 16.9707 7.02944 21.0001 12 21.0001C16.0613 21.0001 19.4943 18.3101 20.6144 14.6145Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const LightModeIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 4V2M12 20V22'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M6.41421 6.41421L5 5M17.7279 17.7279L19.1421 19.1421'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M4 12H2M20 12H22'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M17.7279 6.41421L19.1421 5M6.41421 17.7279L5 19.1421'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const ClockIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 7V12H17'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const ShowSelectIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M15 11L12 14L9 11'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const CalendarIcon = () => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M4 8H20'
                stroke='#1F2937'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z'
                stroke='#1F2937'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M16 2V4'
                stroke='#1F2937'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8 2V4'
                stroke='#1F2937'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const CheckboxOffIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const CheckboxOnIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M8 12L11 15L16 9'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const ShowInputIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 18C17.5228 18 22 12 22 12C22 12 17.5228 6 12 6C6.47715 6 2 12 2 12C2 12 6.47715 18 12 18Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const HideInputIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M4 4L20 20'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M16.5 16.756C15.1474 17.4846 13.6186 18 12 18C6.47715 18 2 12 2 12C2 12 4.08842 9.20123 7.17205 7.4267M19.5 14.6337C21.0559 13.2652 22 12 22 12C22 12 17.5228 6 12 6C11.6625 6 11.3289 6.02241 11 6.06448'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M13.3229 13.5002C12.9703 13.8114 12.5072 14.0002 12 14.0002C10.8954 14.0002 10 13.1048 10 12.0002C10 11.4607 10.2136 10.9711 10.5609 10.6113'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const UpdateIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M10 16H5V21'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M19.4176 14.9971C18.8569 16.3848 17.9182 17.5874 16.7081 18.4682C15.498 19.3491 14.065 19.8727 12.5721 19.9797C11.0792 20.0868 9.58624 19.7728 8.26287 19.0736C6.9395 18.3744 5.83882 17.318 5.08594 16.0244'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M14 8H19V3'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M4.58252 9.00315C5.1432 7.61541 6.08195 6.41278 7.29206 5.53197C8.50217 4.65116 9.93511 4.12749 11.428 4.02048C12.9209 3.91346 14.4139 4.2274 15.7373 4.92661C17.0606 5.62582 18.1613 6.68226 18.9142 7.97584'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const DangerLevelIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M19 3H5C4.44772 3 4 3.44771 4 4V10.1649C4 17.5464 10.2742 20.3516 11.7098 20.8968C11.9 20.9691 12.1 20.9691 12.2902 20.8968C13.7258 20.3516 20 17.5464 20 10.1649V4C20 3.44772 19.5523 3 19 3Z'
                stroke={fill}
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const UserIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M6 19C6 16.7909 8.68629 15 12 15C15.3137 15 18 16.7909 18 19'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const DeleteIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 9L14.9999 14.9999'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 14.9999L14.9999 9'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const ShowIpsIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 13L12 10L15 13'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const HideIpsIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M15 11L12 14L9 11'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const PlusIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8 12H16'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 16L12 8'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const PlusRombIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 9L14.9999 14.9999'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 14.9999L14.9999 9'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const EditIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M4 19.9998H8L19.2929 8.70696C19.6834 8.31643 19.6834 7.68327 19.2929 7.29274L16.7071 4.70696C16.3166 4.31643 15.6834 4.31643 15.2929 4.70696L4 15.9998V19.9998Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 8L16 12'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const TaskItemIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const TaskDescriptionIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M21 12C21 16.9706 16.9706 21 12 21C10.2289 21 8.57736 20.4884 7.18497 19.605L3 21L4.39499 16.815C3.51156 15.4226 3 13.7711 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M16 12H16.002V12.002H16V12Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 12H12.002V12.002H12V12Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8 12H8.002V12.002H8V12Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const LogoIcon = () => {
    return (
        <IconWrapper width={200} height={150} fill='none'>
            <g filter='url(#filter0_d)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M143.767 118.729L146.397 117.211V111.917L140.818 115.137L137.903 116.82V122.115L143.767 118.687V118.729ZM146.397 91.0835V85.7893L137.903 80.8854V86.1795L140.818 87.8628L146.397 91.0835Z'
                    fill='url(#paint0_linear)'
                ></path>
            </g>
            <g filter='url(#filter1_d)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M128.783 123.138L122.482 119.5L112.09 113.5V89.4998L122.482 83.4998L128.783 79.8617V85.679L125.001 87.8628L117.127 92.4083V101.5V110.592L125.001 115.137L128.783 117.321V123.138Z'
                    fill='url(#paint1_linear)'
                ></path>
            </g>
            <g filter='url(#filter2_d)'>
                <path
                    d='M128.783 111.769L126.616 110.518L121.409 107.512V95.4884L126.616 92.4824L128.783 91.2311V111.769Z'
                    fill='url(#paint2_linear)'
                ></path>
            </g>
            <g filter='url(#filter3_d)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M149.28 115.546L151.91 114.028V88.9721L149.28 87.4537V115.546Z'
                    fill='url(#paint3_linear)'
                ></path>
            </g>
            <g filter='url(#filter4_d)'>
                <path
                    d='M132.039 77.5V125.5L134.67 123.981V112.741L138.521 110.518L143.728 107.512V101.5V95.4883L138.521 92.4823L134.67 90.2588V79.0186L132.039 77.5Z'
                    fill='url(#paint4_linear)'
                ></path>
            </g>
            <g filter='url(#filter5_d)'>
                <path
                    d='M97.5158 136.002H100.18V141.114C99.4958 141.63 98.7038 142.026 97.8038 142.302C96.9038 142.578 95.9978 142.716 95.0858 142.716C93.7778 142.716 92.6018 142.44 91.5578 141.888C90.5138 141.324 89.6918 140.55 89.0918 139.566C88.5038 138.57 88.2098 137.448 88.2098 136.2C88.2098 134.952 88.5038 133.836 89.0918 132.852C89.6918 131.856 90.5198 131.082 91.5758 130.53C92.6318 129.966 93.8198 129.684 95.1398 129.684C96.2438 129.684 97.2458 129.87 98.1458 130.242C99.0458 130.614 99.8018 131.154 100.414 131.862L98.5418 133.59C97.6418 132.642 96.5558 132.168 95.2838 132.168C94.4798 132.168 93.7658 132.336 93.1418 132.672C92.5178 133.008 92.0318 133.482 91.6838 134.094C91.3358 134.706 91.1618 135.408 91.1618 136.2C91.1618 136.98 91.3358 137.676 91.6838 138.288C92.0318 138.9 92.5118 139.38 93.1238 139.728C93.7478 140.064 94.4558 140.232 95.2478 140.232C96.0878 140.232 96.8438 140.052 97.5158 139.692V136.002ZM112.187 139.8H106.337L105.221 142.5H102.233L107.849 129.9H110.729L116.363 142.5H113.303L112.187 139.8ZM111.269 137.586L109.271 132.762L107.273 137.586H111.269ZM123.26 137.55L121.568 139.314V142.5H118.67V129.9H121.568V135.786L127.148 129.9H130.388L125.168 135.516L130.694 142.5H127.292L123.26 137.55Z'
                    fill='url(#paint5_linear)'
                ></path>
            </g>
            <g filter='url(#filter6_d)'>
                <path
                    d='M131.994 129.9H134.91V140.124H141.228V142.5H131.994V129.9ZM143.857 129.9H146.773V142.5H143.857V129.9ZM162.32 129.9V142.5H159.926L153.644 134.85V142.5H150.764V129.9H153.176L159.44 137.55V129.9H162.32ZM170.891 137.55L169.199 139.314V142.5H166.301V129.9H169.199V135.786L174.779 129.9H178.019L172.799 135.516L178.325 142.5H174.923L170.891 137.55Z'
                    fill='url(#paint6_linear)'
                ></path>
            </g>
            <defs>
                <filter
                    id='filter0_d'
                    x='133.903'
                    y='76.8854'
                    width='16.4942'
                    height='49.2293'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood
                        floodOpacity='0'
                        result='BackgroundImageFix'
                    ></feFlood>
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation='2'></feGaussianBlur>
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.108889 0 0 0 0 0.784934 0 0 0 0 0.933333 0 0 0 1 0'
                    ></feColorMatrix>
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                    ></feBlend>
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    ></feBlend>
                </filter>
                <filter
                    id='filter1_d'
                    x='110.09'
                    y='77.8618'
                    width='20.6938'
                    height='47.2764'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood
                        floodOpacity='0'
                        result='BackgroundImageFix'
                    ></feFlood>
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation='1'></feGaussianBlur>
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.109804 0 0 0 0 0.784314 0 0 0 0 0.933333 0 0 0 1 0'
                    ></feColorMatrix>
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                    ></feBlend>
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    ></feBlend>
                </filter>
                <filter
                    id='filter2_d'
                    x='119.409'
                    y='89.2311'
                    width='11.3739'
                    height='24.5378'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood
                        floodOpacity='0'
                        result='BackgroundImageFix'
                    ></feFlood>
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation='1'></feGaussianBlur>
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.996078 0 0 0 0 0.2 0 0 0 0 0.819608 0 0 0 1 0'
                    ></feColorMatrix>
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                    ></feBlend>
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    ></feBlend>
                </filter>
                <filter
                    id='filter3_d'
                    x='147.28'
                    y='85.4537'
                    width='6.6303'
                    height='32.0926'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood
                        floodOpacity='0'
                        result='BackgroundImageFix'
                    ></feFlood>
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation='1'></feGaussianBlur>
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.996078 0 0 0 0 0.2 0 0 0 0 0.819608 0 0 0 1 0'
                    ></feColorMatrix>
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                    ></feBlend>
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    ></feBlend>
                </filter>
                <filter
                    id='filter4_d'
                    x='130.039'
                    y='75.5'
                    width='15.6886'
                    height='52'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood
                        floodOpacity='0'
                        result='BackgroundImageFix'
                    ></feFlood>
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation='1'></feGaussianBlur>
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.996078 0 0 0 0 0.2 0 0 0 0 0.819608 0 0 0 1 0'
                    ></feColorMatrix>
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                    ></feBlend>
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    ></feBlend>
                </filter>
                <filter
                    id='filter5_d'
                    x='86.2098'
                    y='127.684'
                    width='46.484'
                    height='17.032'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood
                        floodOpacity='0'
                        result='BackgroundImageFix'
                    ></feFlood>
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation='1'></feGaussianBlur>
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.109804 0 0 0 0 0.784314 0 0 0 0 0.933333 0 0 0 1 0'
                    ></feColorMatrix>
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                    ></feBlend>
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    ></feBlend>
                </filter>
                <filter
                    id='filter6_d'
                    x='129.994'
                    y='127.9'
                    width='50.3306'
                    height='16.6'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood
                        floodOpacity='0'
                        result='BackgroundImageFix'
                    ></feFlood>
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation='1'></feGaussianBlur>
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.996078 0 0 0 0 0.2 0 0 0 0 0.819608 0 0 0 1 0'
                    ></feColorMatrix>
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                    ></feBlend>
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    ></feBlend>
                </filter>
                <linearGradient
                    id='paint0_linear'
                    x1='142.15'
                    y1='122.115'
                    x2='142.15'
                    y2='80.8854'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#1CC8EE'></stop>
                    <stop offset='1' stopColor='#06B3D9'></stop>
                </linearGradient>
                <linearGradient
                    id='paint1_linear'
                    x1='120.436'
                    y1='123.138'
                    x2='120.436'
                    y2='79.8617'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#1CC8EE'></stop>
                    <stop offset='1' stopColor='#06B3D9'></stop>
                </linearGradient>
                <linearGradient
                    id='paint2_linear'
                    x1='124.63'
                    y1='91.2254'
                    x2='122.401'
                    y2='112.048'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop offset='0.9999' stopColor='#FE33D1'></stop>
                    <stop offset='1' stopColor='#BA0F1A'></stop>
                </linearGradient>
                <linearGradient
                    id='paint3_linear'
                    x1='150.429'
                    y1='87.4458'
                    x2='140.308'
                    y2='112.1'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop offset='0.9999' stopColor='#FE33D1'></stop>
                    <stop offset='1' stopColor='#BA0F1A'></stop>
                </linearGradient>
                <linearGradient
                    id='paint4_linear'
                    x1='137.145'
                    y1='77.4865'
                    x2='129.564'
                    y2='125.514'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop offset='0.9999' stopColor='#FE33D1'></stop>
                    <stop offset='1' stopColor='#BA0F1A'></stop>
                </linearGradient>
                <linearGradient
                    id='paint5_linear'
                    x1='65.5'
                    y1='125.5'
                    x2='65.5'
                    y2='145.5'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#1CC8EE'></stop>
                    <stop offset='1' stopColor='#06B3D9'></stop>
                </linearGradient>
                <linearGradient
                    id='paint6_linear'
                    x1='188.596'
                    y1='145.506'
                    x2='188.477'
                    y2='124.996'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop offset='0.9999' stopColor='#FE33D1'></stop>
                    <stop offset='1' stopColor='#BA0F1A'></stop>
                </linearGradient>
            </defs>
        </IconWrapper>
    )
}

export const LanPortIcon = ({ fill = 'green' }) => {
    return (
        <IconWrapper width={512} height={512} fill={fill}>
            <path d='m347.191 497h-314.691c-9.649 0-17.5-7.851-17.5-17.5v-447c0-9.649 7.851-17.5 17.5-17.5h126.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-126.5c-17.92 0-32.5 14.579-32.5 32.5v447c0 17.921 14.58 32.5 32.5 32.5h314.691c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z'></path>
            <path d='m479.5 0h-285.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h285.5c9.649 0 17.5 7.851 17.5 17.5v447c0 9.649-7.851 17.5-17.5 17.5h-97.309c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h97.309c17.921 0 32.5-14.579 32.5-32.5v-447c0-17.921-14.579-32.5-32.5-32.5z'></path>
            <path d='m76.106 353.5c-4.142 0-7.5 3.357-7.5 7.5v59.894c0 12.406 10.093 22.5 22.5 22.5h329.787c12.406 0 22.5-10.094 22.5-22.5v-329.788c0-12.406-10.094-22.5-22.5-22.5h-329.787c-12.407 0-22.5 10.094-22.5 22.5v234.894c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-234.894c0-4.136 3.364-7.5 7.5-7.5h329.787c4.136 0 7.5 3.364 7.5 7.5v329.787c0 4.136-3.364 7.5-7.5 7.5h-329.787c-4.136 0-7.5-3.364-7.5-7.5v-59.893c0-4.143-3.357-7.5-7.5-7.5z'></path>
            <path d='m361 208.628c4.143 0 7.5-3.357 7.5-7.5v-35.128c0-12.406-10.094-22.5-22.5-22.5h-180c-12.407 0-22.5 10.094-22.5 22.5v180c0 12.406 10.093 22.5 22.5 22.5h180c12.406 0 22.5-10.094 22.5-22.5v-109.872c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v109.872c0 4.136-3.364 7.5-7.5 7.5h-180c-4.136 0-7.5-3.364-7.5-7.5v-180c0-4.136 3.364-7.5 7.5-7.5h180c4.136 0 7.5 3.364 7.5 7.5v35.128c0 4.143 3.357 7.5 7.5 7.5z'></path>
            <path d='m286.5 186.147h-61c-5.79 0-10.5 4.71-10.5 10.5v12.44h-8.529c-5.79 0-10.5 4.71-10.5 10.5v12.441h-11.971c-5.79 0-10.5 4.71-10.5 10.5v72.823c0 5.79 4.71 10.5 10.5 10.5h144c5.79 0 10.5-4.71 10.5-10.5v-72.823c0-5.79-4.71-10.5-10.5-10.5h-11.971v-12.441c0-5.79-4.71-10.5-10.5-10.5h-8.529v-12.44c0-5.79-4.71-10.5-10.5-10.5zm14.529 37.941v12.441c0 5.79 4.71 10.5 10.5 10.5h11.971v63.823h-15v-26.205c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v26.205h-15v-26.205c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v26.205h-15v-26.205c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v26.205h-15v-26.205c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v26.205h-15v-63.823h11.971c5.79 0 10.5-4.71 10.5-10.5v-12.441h8.529c5.79 0 10.5-4.71 10.5-10.5v-12.44h52v12.44c0 5.79 4.71 10.5 10.5 10.5z'></path>
        </IconWrapper>
    )
}

export const WifiOffIcon = () => {
    return (
        <IconWrapper width={65} height={64} fill='none'>
            <path
                d='M2.66666 23.1635C6.62862 19.2015 11.3322 16.0587 16.5087 13.9145C21.6853 11.7703 27.2335 10.6667 32.8365 10.6667C38.4396 10.6667 43.9878 11.7703 49.1644 13.9145C54.3409 16.0587 59.0445 19.2015 63.0064 23.1635'
                stroke='#BE9999'
                strokeWidth='3'
                strokeLinecap='round'
            ></path>
            <path
                d='M12.0938 32.5915C14.8176 29.8677 18.0513 27.707 21.6102 26.2329C25.1691 24.7587 28.9834 24 32.8355 24C36.6877 24 40.502 24.7587 44.0609 26.2329C47.6198 27.707 50.8535 29.8677 53.5773 32.5915'
                stroke='#BE9999'
                strokeWidth='3'
                strokeLinecap='round'
            ></path>
            <path
                d='M21.5234 42.0196C23.0092 40.5339 24.773 39.3553 26.7142 38.5512C28.6554 37.7472 30.736 37.3333 32.8371 37.3333C34.9383 37.3333 37.0189 37.7472 38.9601 38.5512C40.9013 39.3553 42.6651 40.5339 44.1509 42.0196'
                stroke='#BE9999'
                strokeWidth='3'
                strokeLinecap='round'
            ></path>
            <path
                d='M35.9993 52.9984C35.9993 54.7464 34.5823 56.1634 32.8343 56.1634C31.0863 56.1634 29.6693 54.7464 29.6693 52.9984C29.6693 51.2504 31.0863 49.8334 32.8343 49.8334C34.5823 49.8334 35.9993 51.2504 35.9993 52.9984Z'
                fill='#DA0000'
                stroke='#DA0000'
            ></path>
        </IconWrapper>
    )
}

export const WifiOnIcon = () => {
    return (
        <IconWrapper width={65} height={64} fill='none'>
            <path
                d='M2.66666 23.1634C6.62862 19.2015 11.3322 16.0587 16.5087 13.9145C21.6853 11.7703 27.2335 10.6667 32.8365 10.6667C38.4396 10.6667 43.9878 11.7703 49.1644 13.9145C54.3409 16.0587 59.0445 19.2015 63.0064 23.1634'
                stroke='green'
                strokeWidth='3'
                strokeLinecap='round'
            ></path>
            <path
                d='M12.0938 32.5915C14.8176 29.8677 18.0513 27.707 21.6102 26.2329C25.1691 24.7587 28.9834 24 32.8355 24C36.6877 24 40.502 24.7587 44.0609 26.2329C47.6198 27.707 50.8535 29.8677 53.5773 32.5915'
                stroke='green'
                strokeWidth='3'
                strokeLinecap='round'
            ></path>
            <path
                d='M21.5234 42.0196C23.0092 40.5339 24.773 39.3553 26.7142 38.5513C28.6554 37.7472 30.736 37.3333 32.8371 37.3333C34.9383 37.3333 37.0189 37.7472 38.9601 38.5513C40.9013 39.3553 42.6651 40.5339 44.1509 42.0196'
                stroke='green'
                strokeWidth='3'
                strokeLinecap='round'
            ></path>
            <path
                d='M35.9993 52.9983C35.9993 54.7463 34.5823 56.1633 32.8343 56.1633C31.0863 56.1633 29.6693 54.7463 29.6693 52.9983C29.6693 51.2504 31.0863 49.8333 32.8343 49.8333C34.5823 49.8333 35.9993 51.2504 35.9993 52.9983Z'
                fill='#00DA3D'
                stroke='#00DA3D'
            ></path>
        </IconWrapper>
    )
}

export const DownIpIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M13 15L10 12L13 9'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const UpIpIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M11 9L14 12L11 15'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const ResetIcon = ({ fill = '#6C7281' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M14 8H19V3'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M18.7094 16.3571C17.7775 17.792 16.4102 18.8904 14.8082 19.4909C13.2062 20.0915 11.4538 20.1627 9.80833 19.6939C8.16287 19.2252 6.71103 18.2413 5.66595 16.8867C4.62086 15.5321 4.03759 13.8781 4.00176 12.1675C3.96593 10.457 4.47943 8.78004 5.46687 7.38284C6.45431 5.98564 7.86368 4.94181 9.48806 4.4046C11.1124 3.86738 12.8663 3.86509 14.492 4.39805C16.1178 4.93101 17.5299 5.97114 18.521 7.36575'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const ProgrammNoIcon = ({ fill = 'black' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M18 21H6C5.44772 21 5 20.5523 5 20L5 4C5 3.44772 5.44772 3 6 3L13.5631 3C13.8416 3 14.1076 3.11619 14.2968 3.32059L18.7338 8.11246C18.9049 8.29731 19 8.53995 19 8.79187L19 20C19 20.5523 18.5523 21 18 21Z'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M19 9L14 9C13.4477 9 13 8.55228 13 8L13 3'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const ShowFilterIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M19 9L12 16L5 9'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}

export const HideFilterIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M5 16L12 9L19 16'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}
