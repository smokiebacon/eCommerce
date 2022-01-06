import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
    const params = useParams()
    const product = products.find(p => p._id === params.id)
    return (
        <div>
            <Link className='btn btn-dark my-3' to='/'> Go Back
            </Link>
            <Row>
                <Col xl={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6} sm={3} >
                    <ListGroup>
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>      
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col> Price: ${product.price} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col> Status: </Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock ' : 'Out of Stock'} 
                                         ({product.countInStock} in stock)</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>                                 
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>                                
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
