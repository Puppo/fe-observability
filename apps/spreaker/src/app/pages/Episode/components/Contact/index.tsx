import { Link } from 'react-router-dom';

interface ContactProps {
  icon: string;

  url: string;

  text: string;
}

export default function Contact({ icon, url, text }: ContactProps) {
  return (
    <>
      <span className="icon">
        <i className={icon}></i>
      </span>
      <Link to={url} target="blank_">
        {text}
      </Link>
      <br />
    </>
  );
}
