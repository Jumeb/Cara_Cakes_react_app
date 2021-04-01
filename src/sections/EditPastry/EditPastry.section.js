import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { Button, Link, Notification, SquareArea, SquareInput } from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './EditPastry.module.css';

const animatedComponents = makeAnimated();

const EditPastry = (props) => {
    const {isOpen, setIsOpen, user, token, pastry} = props;
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [discount, setDiscount] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [about, setAbout] = useState('');
    const [recipe, setRecipe] = useState('');
    const [nameError, setNameError] = useState(false);
    const [discountError, setDiscountError] = useState(false);
    const [typeError, setTypeError] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const [aboutError, setAboutError] = useState(false);
    const [recipeError, setRecipeError] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let _categories = [];
        user.categories.map((category, index) => _categories.push({value: category, label: category}));
        setCategories(_categories);
        setName(pastry.name);
        setDiscount(pastry.discount);
        setType({ value: pastry.type, label: pastry.type });
        setPrice(pastry.price);
        setAbout(pastry.description);
        setImage(pastry.image);
        setRecipe(pastry.recipe);

        return () => {
            setName('');
            setDiscount('');
            setType({ });
            setPrice('');
            setAbout('');
            setImage('');
            setRecipe('');
        }
    }, [isOpen]);
    
    const authenticate = () => {
        let hasError = false;
        setLoading(true);

        if (name.length < 5) {
            hasError = true;
            setNameError(true);
        }

        if (name.length >= 5) {
            setNameError(false);
        }

        if (Number(discount) < 0) {
            hasError = true;
            setDiscountError(true);
        }

        if (Number(discount) >= 0) {
            setDiscountError(false);
        }

        if (type.length < 2) {
            hasError = true;
            setTypeError(true);
        }

        if (Number(price) < 25) {
            hasError = true;
            setPriceError(true);
        }

        if (Number(price) >= 25) {
            setPriceError(false);
        }

        if (about.length < 10) {
            hasError = true;
            setAboutError(true);
        }

        if (!image) {
            hasError = true;
            console.log(image, 'this is the file')
            setImageError(true);
        }

        if(hasError) {
            setLoading(false);
            setShow(true);
            setMessage({
                type: 'error',
                title: 'Invalid Data',
                message: 'Data provided is not correct, please check again.'
            });
            return false;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('about', about);
        if (image) {
          formData.append('pastryImage', image[0]);
        }
        formData.append('discount', discount);
        formData.append('type', type.value);
        formData.append('creator', user._id);

        console.log('values', image);

        fetch(`${BASE_URL}/pastry/edit/${pastry._id}`, {
            method: 'PUT',
            body: formData,
        })
        .then(res => {
            const statusCode = res.status;
            const responseJson = res.json();
            return Promise.all([statusCode, responseJson]);
        })
        .then(res => {
            setLoading(false);
            const statusCode = res[0];
            const response = res[1];

            if (statusCode === 201) {
                setShow(true);
                setMessage({
                    type: 'success',
                    title: 'Success',
                    message: `${response.pastry.name} has been updated successfully`
                });

                setTimeout(() => {
                    setIsOpen(false);
                }, 3000);
            }

            if (statusCode === 401) {
                console.log(response, '401');
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Unexpected Error',
                        message: response.data[0].msg,
                    })
            }

            if (statusCode === 422) {
                console.log(response, '422');
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: response.data[0].msg,
                })
            }

            if(statusCode === 500) {
                console.log(response, '500');
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: response.message,
                })
            }
        })
        .catch(err => {
                console.log(err);
                setLoading(false);
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
                })
            })

    }

    return (
        <>
            <Modal isOpen={isOpen} closeTimeoutMS={400} className={styles.secAddPastry} overlayClassName={styles.secAddPastry}>
                <div className={styles.addPastryForm}>
                    <h2 className={styles.formTitle}>Edit {pastry.name}</h2>
                    <SquareInput
                        placeholder="Frosty Cake"
                        type="text"
                        label="Name"
                        value={name}
                        setValue={(event) => setName(event.target.value)}
                        error={nameError}
                        setError={() => setNameError}
                    />
                    <SquareInput 
                        placeholder="5"
                        type="number"
                        label="Discount"
                        value={discount}
                        setValue={(event) => setDiscount(event.target.value)}
                        error={discountError}
                        setError={() => setDiscountError}
                    />
                    <div className={styles.formSelect}>
                        <label className={styles.inputLabel}>Type</label>
                        <Select 
                            value={type}
                            options={categories}
                            styles={colourStyles}
                            onChange={(value) => setType(value)}
                            components={animatedComponents}
                            className={[styles.formLength4, styles.formSelectInput].join(' ')} />
                    </div>
                    <SquareInput 
                        placeholder="5"
                        type="file"
                        label="Image"
                        name='pastryImage'
                        setValue={(event) => setImage(event.target.files)}
                        error={imageError}
                        setError={() => setImageError}
                    />
                    <SquareInput
                        placeholder="40000"
                        type="number"
                        label="Price"
                        value={price}
                        setValue={(event) => setPrice(event.target.value)}
                        error={priceError}
                        setError={() => setPriceError}
                    />
                    <SquareArea
                        placeholder="A box of 6 is guaranteed to bring delight and happiness"
                        type="text"
                        label="Description"
                        value={about}
                        setValue={(event) => setAbout(event.target.value)}
                        error={aboutError}
                        setError={() => setAboutError}
                    />
                    <SquareArea
                        placeholder="Very optional, but can be a gift to your loyal clients"
                        type="text"
                        label="Recipe"
                        value={recipe}
                        setValue={(event) => setRecipe(event.target.value)}
                        error={recipeError}
                        setError={() => setRecipeError}
                    />
                    <div className={styles.addButtons}>
                        <Button onClick={() => authenticate()} title="Edit" loading={loading} />
                        <Button onClick={() => setIsOpen(false)} title="Cancel"  />
                    </div>
                </div>
            </Modal>
            <Notification message={message} show={show} setShow={setShow} />
        </>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        token: auth.token,
        user: auth.user,
    }
}

export default connect(mapStateToProps)(EditPastry);


const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#215379" : null,
      color: isFocused ? "white" : '#999',
    };
  },
  control: (base, {isFocused}) => ({
    ...base,
    border: 'none',
    // This line disable the blue border
    boxShadow: 'none',
    borderRadius: '4px',
    borderBottom: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#14334a',
    borderTop: '2px',
    borderTopStyle: 'solid',
    borderTopColor: '#14334a',
    borderLeft: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#14334a',
    borderRight: '2px',
    borderRightStyle: 'solid',
    borderRightColor: '#14334a',
    marginTop: '5px',
    cursor: 'pointer',
    '&:hover': {
        border: '2px',
        boxShadow: 'none',
        borderStyle: 'solid',
        borderColor: isFocused ? "#14334a" : '#14334a',
    }
  })
};