import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaSignOutAlt,
  FaPlus,
  FaUser,
  FaBoxOpen,
} from "react-icons/fa";
import Intropage from "../pages/Intropage";
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
export default function AdminHome() {
  const [activeTab, setActiveTab] = useState("products");

  const navigate = useNavigate();
  const [products, setProducts] = useState([
    // {
    //   title: "Gold Necklace",
    //   price: "2999",
    //   description: "24K gold necklace.",
    //   image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6751.png",
    // },
    // {
    //   title: "Gold Necklace",
    //   price: "2999",
    //   description: "Beautiful 24K gold necklace.",
    //   image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6751.png",
    // },
    {
      title: "Diamond Ring",
      price: "4999",
      description: "Elegant diamond-studded ring.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.fdUW6d4G3FENYASdDUDQQQHaHG&pid=Api&P=0&h=180",
    },
    {
      title: "Gold Necklace",
      price: "2999",
      description: "Beautiful 24K gold necklace.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6751.png",
    },
    {
      title: "Diamond Ring",
      price: "4999",
      description: "Elegant diamond-studded ring.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.fdUW6d4G3FENYASdDUDQQQHaHG&pid=Api&P=0&h=180",
    },
    {
      title: "Silver Bangles",
      price: "1999",
      description: "Pure silver designer bangles.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.R0LHEllQEOu2y2uwrv9arwHaGw&pid=Api&P=0&h=180",
    },
    {
      title: "Ruby Pendant",
      price: "3499",
      description: "Gorgeous ruby-studded pendant.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6750.png",
    },
    {
      title: "Sapphire Earrings",
      price: "2599",
      description: "Beautiful sapphire gemstone earrings.",
      image:
        "https://freepngimg.com/download/jewellery/28086-8-jewellery-necklace-image.png",
    },
    {
      title: "Pearl Necklace",
      price: "3999",
      description: "Elegant pearl necklace for special occasions.",
      image: "http://www.pngmart.com/files/5/Gold-Necklace-PNG-Transparent.png",
    },
    {
      title: "Rose Gold Hoop Earrings",
      price: "2799",
      description: "Trendy rose gold hoop earrings for everyday wear.",
      image:
        "https://wallpapers.com/images/hd/diamond-flower-hoop-earrings-6bb8gq67scxejbd1.png",
    },
    {
      title: "Black Pearl Necklace",
      price: "5999",
      description: "Exotic black pearl necklace with silver chain.",
      image:
        "https://wallpapers.com/images/hd/elegant-black-pearl-jewelry-set-t65lim3h7wu1u702.png",
    },
    {
      title: "Amethyst Pendant",
      price: "3499",
      description: "Elegant amethyst pendant with sterling silver chain.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6761.png",
    },
    {
      title: "Cubic Zirconia Bracelet",
      price: "1899",
      description: "Shiny cubic zirconia bracelet for a stylish look.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6763.png",
    },
    {
      title: "Gold Stud Earrings",
      price: "1999",
      description: "Classic gold stud earrings for timeless elegance.",
      image:
        "https://png.pngtree.com/png-clipart/20230410/original/pngtree-gold-earring-jewellery-png-image_9042559.png",
    },
    {
      title: "Garnet Cocktail Ring",
      price: "4599",
      description: "A bold garnet gemstone ring with gold accents.",
      image: "https://cdn0.rubylane.com/shops/1120703/2847.1L.jpg?71",
    },
    {
      title: "Silver Toe Rings",
      price: "1299",
      description: "Beautiful handcrafted silver toe rings.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6762.png",
    },
    {
      title: "Infinity Symbol Necklace",
      price: "3299",
      description: "Delicate infinity symbol necklace in sterling silver.",
      image: "https://pngimg.com/uploads/necklace/necklace_PNG61.png",
    },
    {
      title: "Vintage Pearl Brooch",
      price: "2499",
      description: "A beautiful vintage pearl brooch with gold detailing.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6765.png",
    },
    {
      title: "Swarovski Crystal Ring",
      price: "3799",
      description: "A dazzling Swarovski crystal-studded ring.",
      image:
        "https://www.pricerunner.se/product/1200x630/3005000715/Swarovski-Tropical-Leaf-Open-Ring-Gold-Transparent.jpg",
    },
    {
      title: "Platinum Wedding Ring",
      price: "5999",
      description: "A stunning platinum wedding band.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.AkKjQEn7OhKI6RLlUlLTzAHaFp&pid=Api&P=0&h=180",
    },
    {
      title: "Emerald Bracelet",
      price: "2899",
      description: "Exquisite emerald gemstone bracelet.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6760.png",
    },
    {
      title: "Antique Gold Earrings",
      price: "3499",
      description: "Traditional antique gold earrings.",
      image: "https://www.pngmart.com/files/23/Earring-PNG-HD-Isolated.png",
    },
    {
      title: "Crystal Stud Earrings",
      price: "1499",
      description: "Chic crystal stud earrings for daily wear.",
      image:
        "https://png.pngtree.com/png-vector/20240209/ourmid/pngtree-rose-gold-cluster-diamond-stud-earring-png-image_11717093.png",
    },
    {
      title: "Diamond Tennis Bracelet",
      price: "6999",
      description: "Luxury diamond tennis bracelet.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6753.png",
    },
    {
      title: "Gold Anklet",
      price: "1799",
      description: "Delicate gold anklet for a trendy look.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6756.png",
    },
    {
      title: "Platinum Chain",
      price: "4499",
      description: "Stylish platinum chain for men and women.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6759.png",
    },
    {
      title: "Sapphire and Diamond Ring",
      price: "7999",
      description: "A luxurious sapphire ring with diamond accents.",
      image:
        "https://www.mcgowansjewellers.com/wp-content/uploads/2022/08/0119027.png",
    },
    {
      title: "Turquoise Beaded Necklace",
      price: "2599",
      description: "Handmade turquoise beaded necklace.",
      image: "https://pngimg.com/uploads/necklace/necklace_PNG49.png",
    },
    {
      title: "Traditional Temple Jewelry Set",
      price: "5499",
      description: "Authentic Indian temple jewelry set.",
      image: "https://pngimg.com/uploads/necklace/necklace_PNG53.png",
    },
    {
      title: "Gold Choker Necklace",
      price: "3299",
      description: "Trendy gold choker for a bold statement.",
      image: "https://pngimg.com/uploads/necklace/necklace_PNG63.png",
    },
    {
      title: "Opal Engagement Ring",
      price: "5899",
      description: "A mesmerizing opal engagement ring.",
      image: "https://pngimg.com/uploads/ring/ring_PNG77.png",
    },
    {
      title: "Pearl Drop Earrings",
      price: "2399",
      description: "Elegant pearl drop earrings for formal wear.",
      image:
        "https://cdn0.rubylane.com/shops/chicantiques/BlueDangleEarrings.1L.jpg",
    },
    {
      title: "Silver Bangles",
      price: "1999",
      description: "Pure silver designer bangles.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.R0LHEllQEOu2y2uwrv9arwHaGw&pid=Api&P=0&h=180",
    },
  ]);

  // Dummy Users
  const [users, setUsers] = useState([
    { name: "Yaswanth", email: "yaswanth@gmail.com", role: "Admin" },
    { name: "Kumar", email: "kumar@gmail.com", role: "User" },
  ]);

  const initialProduct = { title: "", price: "", description: "", image: null };
  const initialUser = { name: "", email: "", role: "" };

  const [newProduct, setNewProduct] = useState(initialProduct);
  const [newUser, setNewUser] = useState(initialUser);

  const [editingProductIndex, setEditingProductIndex] = useState(null);
  const [editingUserIndex, setEditingUserIndex] = useState(null);

  const handleProductInput = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  // ---------------------- Products ----------------------

  const addOrUpdateProduct = () => {
    if (
      !newProduct.title ||
      !newProduct.price ||
      !newProduct.description ||
      !newProduct.image
    )
      return alert("Fill all product fields");

    if (editingProductIndex !== null) {
      const updated = [...products];
      updated[editingProductIndex] = newProduct;
      setProducts(updated);
      setEditingProductIndex(null);
    } else {
      setProducts((prev) => [...prev, newProduct]);
    }
    setNewProduct(initialProduct);
  };

  const editProduct = (index) => {
    setNewProduct(products[index]);
    setEditingProductIndex(index);
  };

  const deleteProduct = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  // ---------------------- Users ----------------------

  const addOrUpdateUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role)
      return alert("Fill all user fields");

    if (editingUserIndex !== null) {
      const updated = [...users];
      updated[editingUserIndex] = newUser;
      setUsers(updated);
      setEditingUserIndex(null);
    } else {
      setUsers((prev) => [...prev, newUser]);
    }
    setNewUser(initialUser);
  };

  const editUser = (index) => {
    setNewUser(users[index]);
    setEditingUserIndex(index);
  };

  const deleteUser = (index) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* <AdminNav/> */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-6 space-y-4">
          <div className="text-3xl font-bold bg-white p-5  text-orange-950 flex items-center justify-center">
            <span className="text-4xl">Y</span>asOrna
          </div>
          <div
            onClick={() => navigate("/")}
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            Logout <FaSignOutAlt style={{ marginLeft: "8px" }} />
          </div>
          <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 w-full ${
              activeTab === "products" && "bg-gray-700"
            }`}
          >
            <FaBoxOpen /> Products
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 w-full ${
              activeTab === "users" && "bg-gray-700"
            }`}
          >
            <FaUser /> Users
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          {activeTab === "products" ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={newProduct.title}
                  onChange={handleProductInput}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={handleProductInput}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={handleProductInput}
                  className="p-2 border rounded"
                />
                <input
                  type="file"
                  onChange={handleProductImage}
                  className="p-2 border rounded"
                />
                <button
                  onClick={addOrUpdateProduct}
                  className="col-span-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {editingProductIndex !== null
                    ? "Update Product"
                    : "Add Product"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded shadow text-center relative"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-40 mx-auto object-contain mb-3"
                    />
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="text-sm text-gray-700">{p.description}</p>
                    <p className="font-bold text-blue-500 mt-1">₹{p.price}</p>
                    <div className="flex justify-center gap-4 mt-2">
                      <button
                        onClick={() => editProduct(idx)}
                        className="text-yellow-500"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteProduct(idx)}
                        className="text-red-500"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add New Product Card */}
                <div
                  onClick={() => setEditingProductIndex(null)}
                  className="bg-white p-4 rounded shadow flex flex-col items-center justify-center hover:bg-gray-100 cursor-pointer"
                >
                  <FaPlus className="text-3xl text-gray-400 mb-2" />
                  <p className="text-gray-500 font-medium">Add New Product</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={handleUserInput}
                  className="p-2 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={handleUserInput}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Role (e.g. Admin/User)"
                  value={newUser.role}
                  onChange={handleUserInput}
                  className="p-2 border rounded"
                />
                <button
                  onClick={addOrUpdateUser}
                  className="col-span-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  {editingUserIndex !== null ? "Update User" : "Add User"}
                </button>
              </div>

              <div className="bg-white shadow rounded">
                <table className="w-full text-left">
                  <thead className="bg-gray-200 text-sm">
                    <tr>
                      <th className="p-3">Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Role</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="p-3">{u.name}</td>
                        <td className="p-3">{u.email}</td>
                        <td className="p-3">{u.role}</td>
                        <td className="p-3 space-x-3">
                          <button
                            onClick={() => editUser(idx)}
                            className="text-yellow-500"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteUser(idx)}
                            className="text-red-500"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
