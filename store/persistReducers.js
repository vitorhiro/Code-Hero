import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import expireReducer from 'redux-persist-expire';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: `CodeHero`,
      storage: AsyncStorage,
      whitelist: ['heroes'],
      transforms: [
        expireReducer('heroes', {
          expireSeconds: 3600,
          expiredState: { heroes: [] },
          autoExpire: true,
        }),
      ],
    },

    reducers
  );

  return persistedReducer;
};
