import React from 'react'
import { HeaderNav } from '../HeaderNav';

interface Props {
    children: React.ReactNode;
}

export const PageContainerHOC: React.FC<Props> = ({ children }) => {
  return (
    <div>
        <HeaderNav />
        {children}
    </div>
  )
}
