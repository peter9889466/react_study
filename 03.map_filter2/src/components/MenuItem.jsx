import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const MenuItem = ({ menu }) => {
    return (
        <div>
            <Card className='card'>
                <Card.Img variant="top" src={menu.img} alt={menu.name} />
                <Card.Body>
                    <Card.Title>{menu.name}</Card.Title>
                    <Card.Text>{menu.price}</Card.Text>
                    <Button variant="primary" onClick={() => window.open(menu.url, '_blank')}>
                        주문하기
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MenuItem;
