import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import newItem from '../services/item/request/newItem';
import style from '../styles/itemAdd.less';

export default class ItemAdd extends Component {
    constructor(props) {
        super(props);

    }

    handleUpload = (event) => {
        event.preventDefault();
        const data = {
            name: this.itemName.value,
            price: this.itemPrice.value,
            description: this.itemDescription.value,
            file: this.uploadInput.files[0]
        };
        newItem(data).then(() => {
            alert('Item added!');
            location.reload();
        })
    };

    render() {
        return (
            <DocumentTitle title='MyShop | Item add'>
                <div>
                    <Header user={this.props.user}/>
                    <div className={style.contentAdd}>
                        <h1>Item Add Page</h1>
                        <form onSubmit={this.handleUpload}>
                            <div className={style.field}>
                                <label className={style.label} htmlFor='name'>Name</label>
                                <input id='name' type='text' ref={ref => this.itemName = ref} />
                            </div>
                            <div className={style.field}>
                                <label className={style.label} htmlFor='price'>Price</label>
                                <input id='price' type='text' ref={ref => this.itemPrice = ref} />
                            </div>
                            <div className={style.bigField}>
                                <label className={style.label} htmlFor='description'>Description</label>
                                <textarea id='description' ref={ref => this.itemDescription = ref} />
                            </div>
                            <div className={style.files}>
                                <label className={style.label}>Upload Image</label>
                                <input className={style.upload}  ref={(ref) => { this.uploadInput = ref; }} type="file" />
                            </div>
                            <button className={style.btn}>Upload</button>
                        </form>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}