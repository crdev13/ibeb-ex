import React, { ReactNode } from 'react'
type Props = {
    children?: ReactNode
}

const Container = ({ children }: Props) => (
	<main className="main-content">
        {children}
    </main>
);
export default Container