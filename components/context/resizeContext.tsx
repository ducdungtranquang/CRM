"use client"
import { createContext, useState } from "react";

const defaultValue = 'default value';
export const SidebarContext = createContext(false);

export const SidebarResize: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen } as any}>
      {children}
    </SidebarContext.Provider>
  );
}