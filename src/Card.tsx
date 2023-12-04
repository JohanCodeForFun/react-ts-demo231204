
type CardProps = {
    children: React.ReactNode
}
const Card = ({ children }: CardProps) => {

    const cardStyle = {
        background: "purple",
        color: "white",
    }

    return <div style={cardStyle}>
        {children}
    </div>
}

type HeaderProps = {
    children: React.ReactNode
}
const Header = ({ children }: HeaderProps) => {

    const headerStyle = {
        padding: "10px"
    }

    return <div style={headerStyle}>{children}</div>
}
Card.Header = Header;


type BodyProps = {
    children: React.ReactNode
}
const Body = ({ children }: BodyProps) => {

    const bodyStyle = {
        background: "gray",
        color: "purple",
        padding: "10px"
    }
    return <div style={bodyStyle}>{children}</div>
}
Card.Body = Body;

export default Card;