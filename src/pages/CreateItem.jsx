import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import 'react-tabs/style/react-tabs.css';
import Button from 'react-bootstrap/Button';
import { AccountDetails } from '../AccountDetails'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateItem = () => {
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { marketplace, account } = AccountDetails()

     const create = async () => {

        console.log(price, 'pricepriceprice')

        await marketplace.methods.createItem(title, description, price).send({ from: account }).then(() => {
            toast('Item is ready for sale')
        }).catch(() => {
            toast('Error creating sale')
        })

    }

    return (
        <>
            <ToastContainer />
            <div className='create-item'>
                <Header />
                <section className="flat-title-page inner">
                    <div className="overlay"></div>
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-title-heading mg-bt-12">
                                    <h1 className="heading text-center">Create Item</h1>
                                </div>
                                <div className="breadcrumbs style2">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="#">Pages</Link></li>
                                        <li>Create Item</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="tf-create-item tf-section">
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-6 col-md-12 col-12">
                                <div className="form-create-item">
                                    <form action="#">
                                        <h4 className="title-create-item">Upload file</h4>
                                        <label className="uploadFile">
                                            <span className="filename">PNG, JPG, GIF Max 2mb.</span>
                                            <input type="file" className="inputfile form-control" name="file" disabled />
                                        </label>
                                    </form>
                                    <div className="flat-tabs tab-create-item">
                                        <form action="#">
                                            <h4 className="title-create-item">Price</h4>
                                            <input onChange={(e) => { setPrice(e.currentTarget.value) }} value={price} type="text" placeholder="Enter price for item" />

                                            <h4 className="title-create-item">Title</h4>
                                            <input onChange={(e) => { setTitle(e.currentTarget.value) }} value={title} type="text" placeholder="Item Name" />

                                            <h4 className="title-create-item">Description</h4>
                                            <textarea onChange={(e) => { setDescription(e.currentTarget.value) }} value={description} placeholder="e.g. “This is very limited item”"></textarea>
                                            <Button onClick={create} variant="outline-primary" size="lg">Create</Button>{' '}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CreateItem;
