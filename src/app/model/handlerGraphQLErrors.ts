import { ApolloLink } from '@apollo/client';
import { GraphQLErrors } from '@apollo/client/errors';
import { onError } from '@apollo/client/link/error';
import { Zoom, toast } from 'react-toastify';

export const handlerGraphQLErrors = (
  cookie: {
    accessToken?: any;
  },
  removeCookie: (name: 'accessToken') => void,
): ApolloLink => {
  return onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            if (Object.keys(cookie).length !== 0) {
              toast.error('you are unauthenticated', {
                position: 'bottom-left',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: Zoom,
              });
            }
            break;
          case 'INTERNAL_SERVER_ERROR':
            switch (err.message) {
              case 'User has been registered':
                toast.error('User has been registered', {
                  position: 'bottom-left',
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                  transition: Zoom,
                });
                break;
              case 'User not found':
                toast.error('User not found', {
                  position: 'bottom-left',
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                  transition: Zoom,
                });
                break;
              default:
                toast.error('we are maintenance', {
                  position: 'bottom-left',
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                  transition: Zoom,
                });
                removeCookie('accessToken');
            }
        }
        return forward(operation);
      }
    }
    if (networkError) {
      toast.error('server is unavailable', {
        position: 'bottom-left',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Zoom,
      });
    }
  });
};
