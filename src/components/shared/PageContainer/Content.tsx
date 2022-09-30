interface Props {
    children: React.ReactNode;
}

export const Content: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ marginTop: 100, padding: 15 }}>
        {children}
    </div>
  )
}
