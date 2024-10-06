export default function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { url, target = "", className, text } = props;
  return (
    <a href={url} {...(target && { target: target })} className={className}>
      {text}
    </a>
  );
}
