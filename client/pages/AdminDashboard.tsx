import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Upload,
  Eye,
  Package,
  Users,
  ShoppingCart,
  TrendingUp
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  category_id: string;
  price: number;
  original_price: number;
  sku: string;
  slug: string;
  is_active: boolean;
  is_hot_sale: boolean;
  rating: number;
  review_count: number;
  created_at: string;
  category?: {
    name: string;
  };
  images: Array<{
    id: string;
    image_url: string;
    is_primary: boolean;
  }>;
}

interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  is_active: boolean;
}

export default function AdminDashboard() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    revenue: 0
  });

  // Check if user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('id', user.id)
          .eq('is_active', true)
          .single();

        if (data && !error) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [user]);

  // Fetch data
  useEffect(() => {
    if (isAdmin) {
      fetchProducts();
      fetchCategories();
      fetchStats();
    }
  }, [isAdmin]);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(name),
          images:product_images(id, image_url, is_primary)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('sort_order');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchStats = async () => {
    try {
      // Get product count
      const { count: productCount } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true });

      // Get order count
      const { count: orderCount } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true });

      // Get user count
      const { count: userCount } = await supabase
        .from('user_profiles')
        .select('*', { count: 'exact', head: true });

      // Get revenue (sum of total_amount from orders)
      const { data: revenueData } = await supabase
        .from('orders')
        .select('total_amount')
        .eq('payment_status', 'paid');

      const revenue = revenueData?.reduce((sum, order) => sum + Number(order.total_amount), 0) || 0;

      setStats({
        totalProducts: productCount || 0,
        totalOrders: orderCount || 0,
        totalUsers: userCount || 0,
        revenue
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleSaveProduct = async (productData: Partial<Product>) => {
    try {
      if (editingProduct?.id) {
        // Update existing product
        const { error } = await supabase
          .from('products')
          .update(productData)
          .eq('id', editingProduct.id);

        if (error) throw error;
      } else {
        // Create new product
        const { error } = await supabase
          .from('products')
          .insert(productData);

        if (error) throw error;
      }

      fetchProducts();
      setShowProductModal(false);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error saving product: ' + error.message);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) throw error;
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product: ' + error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7C3AED] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">Please log in to access the admin dashboard.</p>
          <a href="/login" className="text-[#7C3AED] hover:underline">Go to Login</a>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have permission to access the admin dashboard.</p>
          <a href="/" className="text-[#7C3AED] hover:underline">Go to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={0} />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'dashboard' ? 'bg-[#7C3AED] text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <TrendingUp className="inline w-4 h-4 mr-2" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'products' ? 'bg-[#7C3AED] text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Package className="inline w-4 h-4 mr-2" />
                Products
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'orders' ? 'bg-[#7C3AED] text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ShoppingCart className="inline w-4 h-4 mr-2" />
                Orders
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'users' ? 'bg-[#7C3AED] text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Users className="inline w-4 h-4 mr-2" />
                Users
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Package className="w-8 h-8 text-[#7C3AED]" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Total Products</p>
                      <p className="text-2xl font-bold">{stats.totalProducts}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <ShoppingCart className="w-8 h-8 text-green-500" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Total Orders</p>
                      <p className="text-2xl font-bold">{stats.totalOrders}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Users className="w-8 h-8 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Total Users</p>
                      <p className="text-2xl font-bold">{stats.totalUsers}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <TrendingUp className="w-8 h-8 text-yellow-500" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Revenue</p>
                      <p className="text-2xl font-bold">₹{stats.revenue.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Products Management</h1>
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setShowProductModal(true);
                  }}
                  className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg hover:bg-[#6D28D9] transition-colors flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </button>
              </div>

              {/* Products Table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={product.images.find(img => img.is_primary)?.image_url || product.images[0]?.image_url || 'https://via.placeholder.com/40'}
                                alt={product.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">{product.sku}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.category?.name || 'No Category'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{product.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            product.is_active 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => {
                              setEditingProduct(product);
                              setShowProductModal(true);
                            }}
                            className="text-[#7C3AED] hover:text-[#6D28D9] mr-3"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Orders Management</h1>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <p className="text-gray-600">Orders management coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Users Management</h1>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <p className="text-gray-600">Users management coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      {showProductModal && (
        <ProductModal
          product={editingProduct}
          categories={categories}
          onSave={handleSaveProduct}
          onClose={() => {
            setShowProductModal(false);
            setEditingProduct(null);
          }}
        />
      )}

      <Footer />
    </div>
  );
}

// Product Modal Component
interface ProductModalProps {
  product: Product | null;
  categories: Category[];
  onSave: (product: Partial<Product>) => void;
  onClose: () => void;
}

function ProductModal({ product, categories, onSave, onClose }: ProductModalProps) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    category_id: product?.category_id || '',
    price: product?.price || 0,
    original_price: product?.original_price || 0,
    sku: product?.sku || '',
    slug: product?.slug || '',
    is_active: product?.is_active ?? true,
    is_hot_sale: product?.is_hot_sale ?? false,
    rating: product?.rating || 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate slug from name if not provided
    if (!formData.slug) {
      formData.slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                value={formData.category_id}
                onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price *
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Original Price
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.original_price}
                onChange={(e) => setFormData({ ...formData, original_price: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SKU
              </label>
              <input
                type="text"
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            />
          </div>

          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                className="mr-2"
              />
              Active
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.is_hot_sale}
                onChange={(e) => setFormData({ ...formData, is_hot_sale: e.target.checked })}
                className="mr-2"
              />
              Hot Sale
            </label>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9] flex items-center"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}