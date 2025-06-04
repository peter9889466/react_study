import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const MenuItem = ({ menu }) => {
    return (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={menu.img} alt={menu.name}/>
                    <Card.Body>
                        <Card.Title>{menu.name}</Card.Title>
                        <Card.Text>{menu.price}</Card.Text>
                        <Button variant="primary" onClick={() => window.open(menu.url, '_blank')}>
                            주문하기
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default MenuItem
