import { createContext, useState } from "react";

interface SortingAlgorithmContextType {}

const SortingAlgorithmContext = createContext<SortingAlgorithmContextType | undefined>(undefined);

export const SortingAlgorithmProvider = ({children}: {children: React.ReactNode}) => {
  const [arrayToSort, setArrayToSort] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("");

  return <SortingAlgorithmContext.Provider value={{}}>{children}</SortingAlgorithmContext.Provider>
}

