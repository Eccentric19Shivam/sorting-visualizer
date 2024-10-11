'use client'
import { SortingAlgorithmType } from "@/lib/types";
import { generateRandomNumberFromInterval, MAX_ANIMATION_SPEED } from "@/lib/utils";
import { createContext, useContext, useState } from "react";

interface SortingAlgorithmContextType {
  arrayToSort: number[];
  setArrayToSort: (array: number[]) => void;
  selectedAlgorithm: SortingAlgorithmType;
  setSelectedAlgorithm: (algorithm: SortingAlgorithmType) => void;
  isSorting: boolean;
  setIsSorting: (isSorting: boolean) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
  isAnimationComplete: boolean;
  setIsAnimationComplete: (isComplete: boolean) => void;
  resetArrayAnimation: () => void;
  runAnimation: () => void;
 
}

const SortingAlgorithmContext = createContext<SortingAlgorithmContextType | undefined>(undefined);

export const SortingAlgorithmProvider = ({children}: {children: React.ReactNode}) => {
  const [arrayToSort, setArrayToSort] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithmType>("bubble");
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANIMATION_SPEED);
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);

  const resetArrayAnimation = () => {
    const contentContainer = document.getElementById("content-container");
    if(!contentContainer) return;

    const contentContainerWidth = contentContainer.clientWidth;
    const tempArray: number[] = [];
    const numLines = contentContainerWidth / 8;
    const containerHeight = window.innerHeight;
    const maxLineHeight = Math.max(containerHeight -420, 100);
    for (let i = 0; i < numLines; i++) {
      tempArray.push(
        generateRandomNumberFromInterval(35, maxLineHeight)
      );
    }
    setArrayToSort(tempArray);
    setIsAnimationComplete(false);
    setIsSorting(false);
  };

  const runAnimation = () => {};

  const value = {
    arrayToSort,
    setArrayToSort,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    setIsSorting,
    animationSpeed,
    setAnimationSpeed,
    isAnimationComplete,
    setIsAnimationComplete,
    resetArrayAnimation,
    runAnimation,
  }

  return <SortingAlgorithmContext.Provider value={value}>{children}</SortingAlgorithmContext.Provider>
}

export const useSortingAlgorithmContext = () => {
  const context = useContext(SortingAlgorithmContext);
  if(!context) {
    throw new Error("useSortingContext must be used within a SortingAlgorithmProvider");
  }
  return context;
}