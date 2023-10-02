import './flag.css';

type Props = {
  flags: string;
  flagsAlt: string;
  coatOfArms: string;
};

export default function Flag({ flags, flagsAlt, coatOfArms }: Props) {
  return (
    <div className="container-flag">
      <div className="flag">Flag</div>
      <img className="flag-img" src={flags} alt={flagsAlt} />
      <div className="coat-of-arms">Coat of arms</div>
      <img className="coat-of-arms-img" src={coatOfArms} alt={''} />
    </div>
  );
}
