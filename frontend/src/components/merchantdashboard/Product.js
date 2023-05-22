import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../home/merchantHeader';
import Footer from '../home/footer';
import SideNav from './SideNavBar';

import storage from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [status, setStatus] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [thumnail, setThumnail] = useState('');
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    discription: "",
    price: "",
    quantity: "",
    category: "",
    colors: "",
    sizes: "",
  });
  const { title, discription, price, quantity, category, colors, sizes } = formData;

  const previewImageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '10px',
  };

  useEffect(() => {
    // Fetch product details using the ID
    fetch(`http://localhost:8070/product/get/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
        setFormData({ ...data.foundProduct, description: data.foundProduct.discription }); 
      });
  }, [id]);

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




const handleUpdate = (event) => {
  event.preventDefault();
  const updatedProduct = {
    ...formData,
    thumbnail: thumnail || product.thumbnail,
    images: images.length > 0 ? images : product.images,
  };
  setProduct(updatedProduct);

  fetch(`http://localhost:8070/product/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  })
    .then((response) => {
      if (response.status === 200) {
        setStatus({ type: "success" });
        alert("Product updated successfully");
        setTimeout(() => {
          navigate("/sales-dashboard/product-management");
        }, 3000);
      } else {
        setStatus({ type: "error", message: "Failed to update the product." });
        alert("Failed to update the product.");
      }
    })
    .catch((error) => {
      setStatus({ type: "error", message: `Error: ${error.message}` });
      alert(`Error updating product: ${error.message}`);
    });
};


  

  return (
    <div className="dash-container">
      <Header />
      <SideNav />
      <div className="dash-main-box">
        <h1 style={{ fontFamily: "Kanit" }}>Manage Products</h1>
        <div className="dash-table-box-ny">
          <h5 style={{ textAlign: "center", marginTop: "0.5vw" }}>
            PRODUCT DETAILS
          </h5>
          <div className="dash-table-nya">
          <form onSubmit={handleUpdate}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  value={discription}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  value={category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="colors">Colors</label>
              <input
                type="text"
                className="form-control"
                id="colors"
                value={colors}
                onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sizes">Sizes</label>
              <input
                type="text"
                className="form-control"
                id="sizes"
                value={sizes}
                onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="thumbnail">Thumbnail</label>
              <input
                id="thumbnail"
                Value=""
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, true)}
                className="hidden"
              />
            </div>
            <div className="form-group">
              <label htmlFor="images">Images</label>
              <input
                id="images"
                Value=""
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
            <button id="Btn-update" type="submit"> Update </button>
          </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );


};

export default Product;