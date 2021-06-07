import { useContext, createContext, useReducer } from 'react';

const StateContext = createContext();

const StateProvider = ({ reducer, initialState, children }) => {
       return (
           <StateContext.Provider value={useReducer(reducer, initialState)}>
               {children}        
           </StateContext.Provider>
       );
}

export const useDataLayerValue = () => useContext(StateContext);
export default StateProvider;
