interface TitleProps {
  title: string;
  opacity?: string;
  size?: string;
  style?: string;
}

const Title: React.FC<TitleProps> = ({ title, opacity = 60, size, style }) => {
  return (
    <h1
      className={`
    ${opacity ?? { opacity }}
    ${size ?? { size }}
    ${style ?? { style }}
    "text-xl font-bold mb-2
    `}
    >
      {title}
    </h1>
  );
};

export default Title;
