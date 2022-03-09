import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import "./productform.css";
import { addProduct, updateProduct } from "../../JS/actions/productsActions";
import { useDispatch } from "react-redux";

function ProductForm({ edit, product }) {
  const [show, setShow] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) {
      setBrand(product.brand);
      setModel(product.model);
      setPrice(product.price);
      setDesc(product.desc);
    } else {
      setBrand("");
      setModel("");
      setPrice("");
      setDesc("");
    }
  }, [edit, product]);

  const update = (e) => {
    e.preventDefault();

    let updatedProduct = {
      brand,
      model,
      price,
      desc,
    };

    dispatch(updateProduct(product._id, updatedProduct));
    handleClose();
  };

  const add = (e) => {
    e.preventDefault();

    let newProduct = {
      brand,
      model,
      price,
      desc,
    };

    dispatch(addProduct(newProduct));
    handleClose();
  };

  return (
    <>
      {edit ? (
        <EditIcon onClick={handleShow} />
      ) : (
        <AddCircleIcon
          onClick={handleShow}
          className="add-icon"
          fontSize="large"
        />
      )}

      <Modal show={show} onHide={handleClose} className="myform">
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit" : "Add"} Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <Form.Control
            type="text"
            placeholder="Brand ..."
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />

          <br />
          <Form.Control
            type="text"
            placeholder="Model ..."
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Price ..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Desc ..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              edit ? update(e) : add(e);
            }}
          >
            {edit ? "Edit" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductForm;
