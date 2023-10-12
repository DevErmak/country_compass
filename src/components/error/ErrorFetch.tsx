import React from 'react';
import { useNavigate } from 'react-router-dom';
import './error-fetch.css';
type Props = { infoError: string };

export default function ErrorFetch({ infoError }: Props) {
  const navigate = useNavigate();

  return (
    <div className="error-fetch-container">
      <div className="info-error-fetch">
        <div>{infoError}.</div>
        <div className="try-again" onClick={() => navigate('/')}>
          Try again
        </div>
      </div>
    </div>
  );
}
