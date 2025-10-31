interface IconProps {
  size ?: number
  color?: string
}

export const IconCart: ({
  size,
  color
}: IconProps) => React.JSX.Element = ({
  size = 16,
  color = "currentColor"
}: IconProps) => {
  return (
    <svg height={size} strokeLinejoin="round" viewBox="0 0 16 16" width={size}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2.5L0.958427 2.5C1.41012 2.5 1.82194 2.74308 2.04258 3.12774L2.5 4.5L3.93019 8.79057C4.27047 9.81142 5.22582 10.5 6.3019 10.5H12.4505C13.6422 10.5 14.6682 9.65885 14.9019 8.49029L15.7 4.5L16 3H14.4703L4.5 3L3.62309 3L3.50287 2.70678C3.07956 1.67431 2.0743 1 0.958427 1H0V2.5ZM4.08114 4.5L5.35321 8.31623C5.48933 8.72457 5.87147 9 6.3019 9H12.4505C12.9272 9 13.3376 8.66354 13.4311 8.19612L14.1703 4.5H4.5H4.08114ZM12.5 15C11.6716 15 11 14.3284 11 13.5C11 12.6716 11.6716 12 12.5 12C13.3284 12 14 12.6716 14 13.5C14 14.3284 13.3284 15 12.5 15ZM4.5 13.5C4.5 14.3284 5.17157 15 6 15C6.82843 15 7.5 14.3284 7.5 13.5C7.5 12.6716 6.82843 12 6 12C5.17157 12 4.5 12.6716 4.5 13.5Z" fill={color}/>
    </svg>
  )
}

export const IconUser: ({
  size,
  color
}: IconProps) => React.JSX.Element = ({
  size = 16,
  color = "currentColor"
}: IconProps) => {
  return (
    <svg height={size} strokeLinejoin="round" viewBox="0 0 16 16" width={size}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.75 0C5.95507 0 4.5 1.45507 4.5 3.25V3.75C4.5 5.54493 5.95507 7 7.75 7H8.25C10.0449 7 11.5 5.54493 11.5 3.75V3.25C11.5 1.45507 10.0449 0 8.25 0H7.75ZM6 3.25C6 2.2835 6.7835 1.5 7.75 1.5H8.25C9.2165 1.5 10 2.2835 10 3.25V3.75C10 4.7165 9.2165 5.5 8.25 5.5H7.75C6.7835 5.5 6 4.7165 6 3.75V3.25ZM2.5 14.5V13.1709C3.31958 11.5377 4.99308 10.5 6.82945 10.5H9.17055C11.0069 10.5 12.6804 11.5377 13.5 13.1709V14.5H2.5ZM6.82945 9C4.35483 9 2.10604 10.4388 1.06903 12.6857L1 12.8353V13V15.25V16H1.75H14.25H15V15.25V13V12.8353L14.931 12.6857C13.894 10.4388 11.6452 9 9.17055 9H6.82945Z" fill={color}/>
    </svg>
  )
}

export const IconGoogle: ({
  size,
  color
}: IconProps) => React.JSX.Element = ({
  size = 16,
  color = "currentColor"
}: IconProps) => {
  return (
    <svg height={size} strokeLinejoin="round" viewBox="0 0 16 16" width={size}>
      <path d="M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z" fill="#4285F4"/>
      <path d="M3.6764 9.52268L3.09083 9.97093L1.01807 11.5855C2.33443 14.1963 5.03241 16 8.15966 16C10.3196 16 12.1305 15.2873 13.4542 14.0655L10.8578 12.0509C10.1451 12.5309 9.23598 12.8219 8.15966 12.8219C6.07967 12.8219 4.31245 11.4182 3.67967 9.5273L3.6764 9.52268Z" fill="#34A853"/>
      <path d="M1.01803 4.41455C0.472607 5.49087 0.159912 6.70543 0.159912 7.99995C0.159912 9.29447 0.472607 10.509 1.01803 11.5854C1.01803 11.5926 3.6799 9.51991 3.6799 9.51991C3.5199 9.03991 3.42532 8.53085 3.42532 7.99987C3.42532 7.46889 3.5199 6.95983 3.6799 6.47983L1.01803 4.41455Z" fill="#FBBC05"/>
      <path d="M8.15982 3.18545C9.33802 3.18545 10.3853 3.59271 11.2216 4.37818L13.5125 2.0873C12.1234 0.792777 10.3199 0 8.15982 0C5.03257 0 2.33443 1.79636 1.01807 4.41455L3.67985 6.48001C4.31254 4.58908 6.07983 3.18545 8.15982 3.18545Z" fill="#EA4335"/>
    </svg>
  )
}

export const IconX: ({
  size,
  color
}: IconProps) => React.JSX.Element = ({
  size = 16,
  color = "currentColor"
}: IconProps) => {
  return (
    <svg height={size} strokeLinejoin="round" viewBox="0 0 16 16" width={size}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z" fill="#000"/>    
    </svg>
  )
}

export const IconLoader: ({
  size,
  color
}: IconProps) => React.JSX.Element = ({
  size = 16,
  color = "currentColor"
}: IconProps) => {
  return (
    <div className="animate-spin">
      <svg height={size} strokeLinejoin="round" viewBox="0 0 16 16" width={size}>
        <g clipPath="url(#clip0_2393_1490)">
          <path d="M8 0V4" stroke={color} strokeWidth="1.5"/>
          <path opacity="0.5" d="M8 16V12" stroke={color} strokeWidth="1.5"/>
          <path opacity="0.9" d="M3.29773 1.52783L5.64887 4.7639" stroke={color} strokeWidth="1.5"/>
          <path opacity="0.1" d="M12.7023 1.52783L10.3511 4.7639" stroke={color} strokeWidth="1.5"/>
          <path opacity="0.4" d="M12.7023 14.472L10.3511 11.236" stroke={color} strokeWidth="1.5"/>
          <path opacity="0.6" d="M3.29773 14.472L5.64887 11.236" stroke={color} strokeWidth="1.5"/>
          <path opacity="0.2" d="M15.6085 5.52783L11.8043 6.7639" stroke={color} strokeWidth="1.5"/>
          <path opacity="0.7" d="M0.391602 10.472L4.19583 9.23598" stroke={color} strokeWidth="1.5"/>
          <path opacity="0.3" d="M15.6085 10.4722L11.8043 9.2361" stroke={color} strokeWidth="1.5"/>
          <path opacity="0.8" d="M0.391602 5.52783L4.19583 6.7639" stroke={color} strokeWidth="1.5"/>
        </g>
        <defs>
          <clipPath id="clip0_2393_1490">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export const IconLogOut: ({
  size,
  color
}: IconProps) => React.JSX.Element = ({
  size = 16,
  color = "currentColor"
}: IconProps) => {
  return (
    <svg height={size} strokeLinejoin="round" viewBox="0 0 16 16" width={size}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.5 13.5H6.75V15H2C1.44772 15 1 14.5523 1 14V2C1 1.44771 1.44772 1 2 1H6.75V2.5L2.5 2.5L2.5 13.5ZM12.4393 7.24999L10.4697 5.28031L9.93934 4.74998L11 3.68932L11.5303 4.21965L14.6036 7.29288C14.9941 7.6834 14.9941 8.31657 14.6036 8.70709L11.5303 11.7803L11 12.3106L9.93934 11.25L10.4697 10.7197L12.4393 8.74999L5.75 8.74999H5V7.24999H5.75L12.4393 7.24999Z" fill={color}/>
    </svg>
  )
}
