import { useState, useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment';
import SideNav from './SideNavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "jspdf-autotable";
import Header from '../home/merchantHeader';
import Footer from '../home/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { firebaseConfig } from "../../firebaseConfig";
import storage from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [discription, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [active_status, setActiveStatus] = useState("");
    const [colors, setColors] = useState("");
    const [sizes, setSizes] = useState("");    
    const [tumnail_url, setThumnail] = useState("");
    const [image_urls, setImages] = useState("");
    const [error, setError] = useState("");
    const [previewImages, setPreviewImages] = useState([]);

    function addProduct(e) {
        e.preventDefault();
        console.log("Submitting the add product form");

        const productData = {
            title,  
            discription,
            price,
            category,
            quantity,
            colors,
            sizes,
            tumnail_url,
            image_urls
        };

        fetch("http://localhost:8070/product/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    alert(data.error);
                } else {
                    alert("Product added successfully");
                    window.location.href = "/sales-dashboard/product-management"
                    // redirect to login page
                }
            })
            .catch((error) => {
                alert("Failed to add product");
                console.log(error);
            });
            clearPreviews();
        }

    const isValidFileType = (file) => {
        const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/avif'];
        return validTypes.includes(file.type);
    };

    const handleImageChange = async (event, isThumbnail) => {
        if (!event.target.files) return;
    
        const files = Array.from(event.target.files);
    
        if (isThumbnail && files.length > 1) {
            alert("Please select only one image for the thumbnail");
            return;
        }
    
        if (!isThumbnail && files.length > 4) {
            alert("Please select up to 4 images");
            return;
        }
    
        // Validate file types
        const invalidFiles = files.filter((file) => !isValidFileType(file));
        if (invalidFiles.length > 0) {
            alert("Invalid file type(s). Please select png, jpg, SVG, or avif images.");
            return;
        }
    
        try {
            const imagePromises = files.map(async (file) => {

                const previewURL = URL.createObjectURL(file);
                setPreviewImages((prev) => [...prev, previewURL]);

                const fileName = file.name;
                const storageRef = ref(storage, `images/${fileName}`);
                const uploadTask = uploadBytesResumable(storageRef, file);
                const downloadURL = await new Promise((resolve, reject) => {
                    uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log("Upload progress:", progress.toFixed(2));
                        },
                        (error) => {
                            reject(error);
                        },
                        async () => {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve(downloadURL);
                        }
                    );
                });
                return downloadURL;
            });
    
            Promise.all(imagePromises)
                .then((downloadURLs) => {
                    if (isThumbnail) {
                        setThumnail(downloadURLs[0]);
                    } else {
                        setImages(downloadURLs);
                    }
                })
                .catch((error) => {
                    alert("Error uploading images:", { type: "error" });
                });
        } catch (error) {
            console.error(error);
            alert("Error uploading images:", { type: "error" });
        }
    };
    
    function clearPreviews() {
        setPreviewImages([]);
    }

    const previewImageStyle = {
        width: '100px', // Set the desired width
        height: 'auto', // Maintain aspect ratio
        margin: '5px', // Add some margin between images
      };
    
    return (
        <div className="dash-container">
            <Header />
            <SideNav />
            <div className='dash-main-box'>

                <div className='dash-table-box-nyb'>
                    <div class="card" >

                        <div class="card-body">
                            <h5 class="card-title">Add Product</h5>
                            <form onSubmit={addProduct}>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="title">Title</label>
                                        <input type="text" class="form-control" id="title" placeholder=""
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="description">Description</label>
                                        <textarea class="form-control" id="description" placeholder="" value={discription}
                                            onChange={(e) => setDescription(e.target.value)} >
                                            
                                        </textarea>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">Price</label>
                                        <input type="text" class="form-control" id="price" placeholder=""
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)} />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="quantity">Quantity</label>
                                        <input type="text" class="form-control" id="quantity" placeholder=""
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)} />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="category">Category</label>
                                        <input type="text" class="form-control" id="category" placeholder=""
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)} />
                                    </div>
                                    {/* <div class="form-group col-md-6">
                                        <label for="active_tatus">Status</label>
                                        <input type="text" class="form-control" id="active_tatus" placeholder=""
                                            value={active_status}
                                            onChange={(e) => setActiveStatus(e.target.value)} />
                                    </div> */}
                                </div>
                                <div class="form-group">
                                    <label for="colors">Colors</label>
                                    <input type="text" class="form-control" id="colors" placeholder=""
                                        value={colors}
                                        onChange={(e) => setColors(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Sizes</label>
                                    <input type="text" class="form-control" id="sizes" placeholder=""
                                        value={sizes}
                                        onChange={(e) => setSizes(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="thumbnail">Thumbnail</label>
                                    <input
                                        id="thumbnail"
                                        value=""
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, true)}
                                        className="hidden"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="images">Images</label>
                                    <input
                                        id="images"
                                        value=""
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, false)}
                                        multiple
                                        className="hidden"
                                    />
                                </div>

                                {/* Display preview images */}
                                <div className="image-preview-container">
                                    {previewImages.map((previewImage, index) => (
                                        <img key={index} src={previewImage} alt="preview" className="image-preview" style={previewImageStyle} />
                                    ))}
                                </div>
                                {/* <a href="/sales-dashboard/product-management" class="btn-back">Back</a> */}
                                <button id="Btn-add" type="submit"> Add </button>

                            </form>
                        </div>

                    </div>


                </div>



            </div>




            <Footer />
        </div>
    )
};
export default AddProduct;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

// import storage from "../../firebaseConfig";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// const AddProduct = () => {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [quantity, setQuantity] = useState("");
//     const [category, setCategory] = useState("");
//     const [colors, setColors] = useState([]);
//     const [sizes, setSizes] = useState([]);
//     const [thumbnailUrl, setThumbnailUrl] = useState("");
//     const [imageUrls, setImageUrls] = useState([]);

//     function addProduct(e) {
//         e.preventDefault();
//         console.log("Submitting the add product form");

//         const productData = {
//             title,
//             description,
//             price,
//             category,
//             quantity,
//             colors,
//             sizes,
//             thumbnailUrl,
//             imageUrls
//         };

//         fetch("http://localhost:8070/product/add", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(productData),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (!data.success) {
//                     alert(data.error || "Failed to add product");
//                 } else {
//                     alert("Product added successfully");
//                     window.location.href = "/sales-dashboard/product-management";
//                 }
//             })
            
//             .catch((error) => {
//                 alert("Failed to add product");
//                 console.log(error);
//             });
//     }

//     const handleColorsChange = (event) => {
//         const inputColors = event.target.value.split(',').map(color => color.trim());
//         setColors(inputColors);
//     };

//     const handleSizesChange = (event) => {
//         const inputSizes = event.target.value.split(',').map(size => size.trim());
//         setSizes(inputSizes);
//     };

//     const isValidFileType = (file) => {
//         const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/avif'];
//         return validTypes.includes(file.type);
//     };

//     const handleImageChange = async (event, isThumbnail) => {
//         if (!event.target.files) return;
    
//         const files = Array.from(event.target.files);
    
//         if (isThumbnail && files.length > 1) {
//             alert("Please select only one image for the thumbnail");
//             return;
//         }
    
//         if (!isThumbnail && files.length > 4) {
//             alert("Please select up to 4 images");
//             return;
//         }
    
//         // Validate file types
//         const invalidFiles = files.filter((file) => !isValidFileType(file));
//         if (invalidFiles.length > 0) {
//             alert("Invalid file type(s). Please select png, jpg, SVG, or avif images.");
//             return;
//         }
    
//         try {
//             const imagePromises = files.map(async (file) => {
//                 const fileName = file.name;
//                 const storageRef = ref(storage, `images/${fileName}`);
//                 const uploadTask = uploadBytesResumable(storageRef, file);
//                 const downloadURL = await new Promise((resolve, reject) => {
//                     uploadTask.on(
//                         "state_changed",
//                         (snapshot) => {
//                             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                             console.log("Upload progress:", progress.toFixed(2));
//                         },
//                         (error) => {
//                             reject(error);
//                         },
//                         async () => {
//                             const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//                             resolve(downloadURL);
//                         }
//                     );
//                 });
//                 return downloadURL;
//             });
    
//             Promise.all(imagePromises)
//                 .then((downloadURLs) => {
//                     if (isThumbnail) {
//                         setThumbnailUrl(downloadURLs[0]);
//                     } else {
//                         setImageUrls(downloadURLs);
//                     }
//                 })
//                 .catch((error) => {
//                     alert("Error uploading images:", { type: "error" });
//                 });
//         } catch (error) {
//             console.error(error);
//             alert("Error uploading images:", { type: "error" });
//         }
//     };

//     // Add your handleImageChange function here for handling thumbnail and images uploads

//     return (
//         <div className="dash-container">
//             <div className='dash-main-box'>

//                 <div className='dash-table-box-nyb'>
//                     <div className="card" >

//                         <div className="card-body">
//                             <form onSubmit={addProduct}>
//                                 <div className="form-row">
//                                     <div className="form-group col-md-6">
//                                         <label htmlFor="title">Title</label>
//                                         <input type="text" className="form-control" id="title" placeholder=""
//                                             value={title}
//                                             onChange={(e) => setTitle(e.target.value)} />
//                                     </div>
//                                     <div className="form-group col-md-6">
//                                         <label htmlFor="description">Description</label>
//                                         <textarea className="form-control" id="description" placeholder="" value={description}
//                                             onChange={(e) => setDescription(e.target.value)} >
                                            
//                                         </textarea>
//                                     </div>
//                                     <div className="form-group col-md-6">
//                                         <label htmlFor="price">Price</label>
//                                         <input type="text" className="form-control" id="price" placeholder=""
//                                             value={price}
//                                             onChange={(e) => setPrice(e.target.value)} />
//                                     </div>
//                                     <div className="form-group col-md-6">
//                                         <label htmlFor="quantity">Quantity</label>
//                                         <input type="text" className="form-control" id="quantity" placeholder=""
//                                             value={quantity}
//                                             onChange={(e) => setQuantity(e.target.value)} />
//                                     </div>
//                                     <div className="form-group col-md-6">
//                                         <label htmlFor="category">Category</label>
//                                         <input type="text" className="form-control" id="category" placeholder=""
//                                             value={category}
//                                             onChange={(e) => setCategory(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="colors">Colors</label>
//                                     <input type="text" className="form-control" id="colors" placeholder="Red, Blue, Green"
//                                         onChange={handleColorsChange} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="inputAddress2">Sizes</label>
//                                     <input type="text" className="form-control" id="sizes" placeholder="S, M, L"
//                                         onChange={handleSizesChange} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="thumbnail">Thumbnail</label>
//                                     <input
//                                         id="thumbnail"
//                                         value=""
//                                         type="file"
//                                         accept="image/*"
//                                         onChange={(e) => handleImageChange(e, true)}
//                                         className="hidden"
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="images">Images</label>
//                                     <input
//                                         id="images"
//                                         value=""
//                                         type="file"
//                                         accept="image/*"
//                                         onChange={(e) => handleImageChange(e, false)}
//                                         className="hidden"
//                                         multiple
//                                     />
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">Add Product</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddProduct;
