import Button from '@/shared/ui/button';
import InfoContainer from '@/shared/ui/info-container';
import { useNavigate } from 'react-router-dom';

type Props = {};

const EmptyFavoriteCountry: React.FC<any> = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="empty-favorite-container">
      <InfoContainer
        title="The list of favorite countries is empty"
        className="info-about-empty-favorite"
      >
        <Button onClick={() => navigate('/')} title="Choose a country" className="choose-country" />
      </InfoContainer>
    </div>
  );
};

export default EmptyFavoriteCountry;
