import InfoContainer from '../../shared/ui/info-container';
import Button from '../../shared/ui/button';
import { useNavigate } from 'react-router-dom';

type Props = { infoError: string };

const ErrorGetDataCountries: React.FC<any> = ({ infoError }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="error-fetch-container">
      <InfoContainer title={infoError} className="info-error-fetch">
        <Button onClick={() => navigate('/')} title="Try again" className="try-again" />
      </InfoContainer>
    </div>
  );
};

export default ErrorGetDataCountries;
