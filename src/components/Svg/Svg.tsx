export interface SvgIconProps {
    src: string;
    className?: string;
  }
  
  const SvgIcon: React.FC<SvgIconProps> = ({ src,className}) => {
    return (
      <svg className={className}>
        <image href={src} width="100%" height="100%" />
      </svg>
    );
  };
  
  export default SvgIcon;